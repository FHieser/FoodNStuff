const CAT_LABELS = {
  lunch:  'Full Meal',
  snacks: 'Snacks',
  prep:   'Prep',
};

// Calorie presets per category: [presets[], defaultKcal]
const KCAL_PRESETS = {
  lunch:  { presets: [500, 600, 700, 800], def: 700 },
  snacks: { presets: [150, 200, 300, 400], def: 300 },
  prep:   { presets: [325, 650, 975, 1300], def: 650 },
};

// Portion defaults per category (batch multiplier for prep)
const PORTION_DEFAULTS = { prep: 1 };

const PORTION_PRESETS = [3, 5];
const DEFAULT_PORTIONS = 5;

let blsMap      = new Map();
let mealData    = null;
let baseKcal    = 0;
let targetKcal  = 0;
let numPortions = DEFAULT_PORTIONS;

// ── Helpers ───────────────────────────────────────────────────

function getFileParam() {
  return new URLSearchParams(window.location.search).get('file');
}

function getCategory() {
  const parts = (getFileParam() ?? '').split('/');
  return parts[1] ?? '';
}

function calcBase() {
  if (!mealData?.ingredients) return 0;
  let total = 0;
  for (const ing of mealData.ingredients) {
    const entry = blsMap.get(ing.bls_code);
    if (entry?.kcal != null) total += (ing.amount_g / 100) * entry.kcal;
  }
  return Math.round(total);
}

function fmt(n, decimals = 1) {
  return n.toFixed(decimals);
}

// ── Render ingredient rows ────────────────────────────────────

function renderIngredients() {
  if (!mealData?.ingredients) return;
  const scale = baseKcal > 0 ? targetKcal / baseKcal : 1;

  const rows = mealData.ingredients.map(ing => {
    const entry    = blsMap.get(ing.bls_code);
    const kcalPer  = entry?.kcal ?? null;
    const perPort  = ing.amount_g * scale;
    const total    = perPort * numPortions;
    const kcalPort = kcalPer != null ? Math.round((perPort / 100) * kcalPer) : '?';
    const kcalInfo = kcalPer != null ? `${kcalPer} kcal/100g` : '–';

    return `
      <tr>
        <td>${ing.name}</td>
        <td class="td-right">${fmt(perPort)} g</td>
        <td class="td-right td-accent">${fmt(total)} g</td>
        <td class="td-right td-muted">${kcalInfo}</td>
        <td class="td-right">${kcalPort}</td>
      </tr>`;
  }).join('');

  document.getElementById('ing-body').innerHTML = rows;
  document.getElementById('total-kcal-port').textContent = Math.round(targetKcal);
  document.getElementById('prep-summary').textContent =
    `${numPortions} Portionen × ${Math.round(targetKcal)} kcal = ${Math.round(targetKcal * numPortions)} kcal gesamt`;
}

// ── Scaler update (called on any input change) ────────────────

function update() {
  renderIngredients();
}

// ── Build page ────────────────────────────────────────────────

function buildPage() {
  const category = getCategory();
  const catLabel = CAT_LABELS[category] ?? category;
  const preset   = KCAL_PRESETS[category] ?? KCAL_PRESETS.lunch;

  targetKcal  = preset.def;
  numPortions = PORTION_DEFAULTS[category] ?? DEFAULT_PORTIONS;

  // Calorie preset buttons
  const kcalBtnHtml = preset.presets.map(v =>
    `<button class="preset-btn${v === preset.def ? ' active' : ''}" data-group="kcal" data-val="${v}">${v}</button>`
  ).join('');

  // Portion preset buttons
  const portBtnHtml = PORTION_PRESETS.map(v =>
    `<button class="preset-btn${v === numPortions ? ' active' : ''}" data-group="port" data-val="${v}">${v}</button>`
  ).join('');

  const stepsHtml = mealData.steps?.length
    ? `<div class="section">
        <h2>Zubereitung</h2>
        <ol class="steps">${mealData.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      </div>`
    : '';

  const notesHtml = mealData.notes
    ? `<div class="section">
        <h2>Hinweise</h2>
        <div class="notes-box">${mealData.notes}</div>
      </div>`
    : '';

  document.title = `${mealData.name} – FoodNStuff`;
  document.getElementById('content').innerHTML = `
    <a class="back-link" href="./">← Zurück</a>

    <div class="meal-header">
      <div class="category-tag">${catLabel}</div>
      <h1>${mealData.name}</h1>
      ${mealData.description ? `<p class="description">${mealData.description}</p>` : ''}
    </div>

    <div class="section">
      <h2>Skalieren</h2>
      <div class="scaler-block">

        <div class="scaler-row">
          <span class="scaler-label">Ziel kcal / Portion</span>
          <div class="scaler-controls">
            ${kcalBtnHtml}
            <input type="number" id="input-kcal" class="preset-input" value="${preset.def}" min="1" step="10">
            <span class="scaler-unit">kcal</span>
          </div>
        </div>

        <div class="scaler-row">
          <span class="scaler-label">Portionen</span>
          <div class="scaler-controls">
            ${portBtnHtml}
            <input type="number" id="input-port" class="preset-input" value="${numPortions}" min="1" step="1">
            <span class="scaler-unit">×</span>
          </div>
        </div>

      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h2>Zutaten — Basis: ${baseKcal} kcal</h2>
        <button class="copy-btn" id="copy-btn">Einkaufsliste kopieren</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Zutat</th>
            <th class="td-right">Pro Portion</th>
            <th class="td-right td-accent">Gesamt</th>
            <th class="td-right">kcal/100g</th>
            <th class="td-right">kcal/Port.</th>
          </tr>
        </thead>
        <tbody id="ing-body"></tbody>
        <tfoot>
          <tr>
            <td colspan="4">kcal / Portion</td>
            <td class="td-right kcal-total" id="total-kcal-port">–</td>
          </tr>
        </tfoot>
      </table>
      <p class="prep-summary" id="prep-summary"></p>
    </div>

    ${stepsHtml}
    ${notesHtml}
  `;

  // Wire up events
  document.querySelectorAll('.preset-btn[data-group="kcal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      targetKcal = parseInt(btn.dataset.val);
      document.getElementById('input-kcal').value = targetKcal;
      document.querySelectorAll('.preset-btn[data-group="kcal"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      update();
    });
  });

  document.querySelectorAll('.preset-btn[data-group="port"]').forEach(btn => {
    btn.addEventListener('click', () => {
      numPortions = parseInt(btn.dataset.val);
      document.getElementById('input-port').value = numPortions;
      document.querySelectorAll('.preset-btn[data-group="port"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      update();
    });
  });

  document.getElementById('input-kcal').addEventListener('input', e => {
    const val = parseInt(e.target.value);
    if (val > 0) {
      targetKcal = val;
      document.querySelectorAll('.preset-btn[data-group="kcal"]').forEach(b =>
        b.classList.toggle('active', parseInt(b.dataset.val) === val)
      );
      update();
    }
  });

  document.getElementById('input-port').addEventListener('input', e => {
    const val = parseInt(e.target.value);
    if (val > 0) {
      numPortions = val;
      document.querySelectorAll('.preset-btn[data-group="port"]').forEach(b =>
        b.classList.toggle('active', parseInt(b.dataset.val) === val)
      );
      update();
    }
  });

  document.getElementById('copy-btn').addEventListener('click', copyShoppingList);

  update();
}

function copyShoppingList() {
  const scale = baseKcal > 0 ? targetKcal / baseKcal : 1;
  const lines = [
    `${mealData.name} — ${numPortions} Portionen (${Math.round(targetKcal)} kcal/Port.)`,
    '',
    ...mealData.ingredients.map(ing => {
      const total = ing.amount_g * scale * numPortions;
      return `${ing.name}: ${fmt(total)} g`;
    }),
  ];

  const btn = document.getElementById('copy-btn');
  navigator.clipboard.writeText(lines.join('\n')).then(() => {
    btn.textContent = 'Kopiert!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Einkaufsliste kopieren';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ── Init ──────────────────────────────────────────────────────

async function init() {
  const content = document.getElementById('content');
  const file    = getFileParam();

  if (!file) {
    content.innerHTML = '<p class="status-msg error">Keine Mahlzeit angegeben.</p>';
    return;
  }

  try {
    const [blsRes, mealRes] = await Promise.all([
      fetch('../data/ingredients/bls.json'),
      fetch(`../data/${file}`),
    ]);
    if (!mealRes.ok) throw new Error('Mahlzeit nicht gefunden');

    const blsItems = await blsRes.json();
    for (const item of blsItems) blsMap.set(item.code, item);

    mealData = jsyaml.load(await mealRes.text());
    baseKcal = calcBase();

    buildPage();
  } catch (e) {
    content.innerHTML = `<p class="status-msg error">Fehler: ${e.message}</p>`;
  }
}

init();
