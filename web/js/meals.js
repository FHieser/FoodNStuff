const CATEGORIES = [
  { key: 'lunch',  label: 'Full Meal' },
  { key: 'snacks', label: 'Snacks' },
  { key: 'prep',   label: 'Prep' },
];

let allMeals = [];   // { category, file, data, totalKcal }
let blsMap   = new Map();
let activeFilter = 'all';

async function loadBls() {
  const res = await fetch('../data/ingredients/bls.json');
  const items = await res.json();
  for (const item of items) blsMap.set(item.code, item);
}

async function discoverMeals(category) {
  if (typeof CONTENT_INDEX !== 'undefined' && CONTENT_INDEX[category]) {
    return CONTENT_INDEX[category];
  }
  const res = await fetch(`../data/meals/${category}/`);
  if (!res.ok) return [];
  const html = await res.text();
  return [...html.matchAll(/href="([^"]+\.yaml)"/g)].map(m => m[1]);
}

async function loadMeal(category, filename) {
  const res = await fetch(`../data/meals/${category}/${filename}`);
  const text = await res.text();
  return jsyaml.load(text);
}

function calcKcal(meal) {
  if (!meal.ingredients) return null;
  let total = 0;
  let allKnown = true;
  for (const ing of meal.ingredients) {
    const entry = blsMap.get(ing.bls_code);
    if (!entry || entry.kcal == null) { allKnown = false; continue; }
    total += (ing.amount_g / 100) * entry.kcal;
  }
  return allKnown ? Math.round(total) : Math.round(total);
}

function renderCards() {
  const grid = document.getElementById('meal-grid');
  const meals = activeFilter === 'all'
    ? allMeals
    : allMeals.filter(m => m.category === activeFilter);

  if (meals.length === 0) {
    grid.innerHTML = '<p class="status-msg">Keine Mahlzeiten gefunden.</p>';
    return;
  }

  grid.innerHTML = meals.map(m => {
    const kcal = m.totalKcal != null ? m.totalKcal : '–';
    const catLabel = CATEGORIES.find(c => c.key === m.category)?.label ?? m.category;
    const desc = m.data.description ?? '';
    const url = `meal.html?file=meals/${m.category}/${m.file}`;
    return `
      <a class="meal-card" href="${url}">
        <div class="category-tag">${catLabel}</div>
        <h2>${m.data.name ?? m.file}</h2>
        <p class="description">${desc}</p>
        <div class="kcal">${kcal} <span>kcal</span></div>
      </a>`;
  }).join('');
}

async function init() {
  const grid = document.getElementById('meal-grid');
  try {
    await loadBls();
  } catch (e) {
    grid.innerHTML = '<p class="status-msg error">Fehler beim Laden der Nährstoffdatenbank.</p>';
    return;
  }

  const promises = CATEGORIES.map(async ({ key }) => {
    let files;
    try { files = await discoverMeals(key); }
    catch { return; }

    for (const file of files) {
      try {
        const data = await loadMeal(key, file);
        const totalKcal = calcKcal(data);
        allMeals.push({ category: key, file, data, totalKcal });
      } catch (e) {
        console.warn(`Fehler beim Laden: ${key}/${file}`, e);
      }
    }
  });

  await Promise.all(promises);

  if (allMeals.length === 0) {
    grid.innerHTML = '<p class="status-msg">Keine Mahlzeiten gefunden. YAML-Dateien in data/meals/ ablegen.</p>';
    return;
  }

  renderCards();

  // Filter buttons
  document.getElementById('filter-bar').addEventListener('click', e => {
    const btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    document.querySelectorAll('.filter-bar button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.cat;
    renderCards();
  });
}

init();
