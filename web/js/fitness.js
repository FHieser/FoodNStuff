const MOVEMENTS = {
  push: {
    label: 'Push',
    progressions: [
      { name: 'Wall Pushups',             sets: 3, reps: '50',  desc: "Stand arm's length from a wall and push in and out. Easiest entry point to the push pattern." },
      { name: 'Incline Pushups',          sets: 3, reps: '40',  desc: 'Hands on a raised surface. Lower the height over time to increase difficulty.' },
      { name: 'High Incline Pushups',     sets: 3, reps: '35',  desc: 'A slightly lower surface than standard incline — more load, same mechanics.' },
      { name: 'Knee Pushups',             sets: 3, reps: '30',  desc: 'Floor pushup from the knees. Keep a straight line from knee to shoulder.' },
      { name: 'Full Pushups',             sets: 3, reps: '25',  desc: 'Classic floor pushup. Keep the body rigid throughout.' },
      { name: 'Close Pushups',            sets: 3, reps: '20',  desc: 'Hands narrower than shoulder-width, increasing tricep demand.' },
      { name: 'Staggered Pushups',        sets: 2, reps: '20',  each: true, desc: 'One hand forward, one back. Trains each side with a slight offset.' },
      { name: 'Archer Pushups',           sets: 2, reps: '12',  each: true, desc: 'Lower toward one arm while the other extends sideways. Bridge to single-arm work.' },
      { name: 'Sliding Pushups',          sets: 2, reps: '12',  each: true, desc: 'One hand on a slider. The gliding arm assists while you build one-arm strength.' },
      { name: 'One-Arm Pushups',          sets: 2, reps: '9',   each: true, desc: 'Full single-arm pushup. Spread feet wider for balance.' },
      { name: 'Elevated One-Arm Pushups', sets: 2, reps: '9',   each: true, desc: 'One-arm pushup with feet elevated. The hardest level in this progression.' },
    ]
  },
  pull: {
    label: 'Pull',
    progressions: [
      { name: 'Wall Rows',           sets: 3, reps: '50',  desc: 'Stand and pull yourself toward a wall. Lowest difficulty, good for learning the pull pattern.' },
      { name: 'Horizontal Rows',     sets: 3, reps: '30',  desc: 'Lie under a table or low bar and pull your chest up to it.' },
      { name: 'Low Horizontal Rows', sets: 3, reps: '25',  desc: 'Lower bar angle means more body weight — a clear step up from standard rows.' },
      { name: 'Negative Pullups',    sets: 3, reps: '10',  desc: 'Jump to the top and lower yourself as slowly as possible. Builds eccentric pulling strength.' },
      { name: 'Assisted Pullups',    sets: 3, reps: '10',  desc: 'Use a resistance band or a foot on a chair to reduce the load.' },
      { name: 'Full Pullups',        sets: 3, reps: '10',  desc: 'Dead hang to chin over the bar. Standard pullup.' },
      { name: 'Close Grip Pullups',  sets: 3, reps: '10',  desc: 'Hands close together, palms facing away. Shifts emphasis to the outer lats.' },
      { name: 'L-Sit Pullups',       sets: 3, reps: '8',   desc: 'Legs held horizontal throughout the pull. Extremely demanding on the core.' },
      { name: 'Weighted Pullups',    sets: 3, reps: '8',   desc: 'Add a weight vest or belt and increase the load progressively over time.' },
      { name: 'One-Arm Negatives',   sets: 2, reps: '5',   each: true, desc: 'Lower from the top on a single arm. Entry point to one-arm pulling.' },
      { name: 'One-Arm Pullups',     sets: 2, reps: '5',   each: true, desc: 'Full dead hang to chin over bar on one arm. The pinnacle of this progression.' },
    ]
  },
  squat: {
    label: 'Squat',
    progressions: [
      { name: 'Jackknife Squats',       sets: 3, reps: '35',  desc: 'Hold something at waist height and use it to assist standing up. Entry point to bodyweight squatting.' },
      { name: 'Assisted Squats',        sets: 3, reps: '30',  desc: 'Lightly hold a door frame or pole and use it to help you stand.' },
      { name: 'Half Squats',            sets: 2, reps: '50',  desc: 'Lower to about half depth, staying in the stronger upper range.' },
      { name: 'Full Squats',            sets: 2, reps: '30',  desc: 'Thighs at or below parallel, no assistance. Full depth.' },
      { name: 'Narrow Squats',          sets: 2, reps: '30',  desc: 'Feet close together. Harder on the quads and prepares the joints for single-leg work.' },
      { name: 'Staggered Squats',       sets: 2, reps: '20',  each: true, desc: 'Wide stance, shift weight to one leg as you lower. A step toward single-leg squatting.' },
      { name: 'Front Staggered Squats', sets: 2, reps: '15',  each: true, desc: 'Trailing leg forward instead of to the side. Better bridge toward the pistol squat.' },
      { name: 'Assisted Pistols',       sets: 2, reps: '12',  each: true, desc: 'Full single-leg squat to depth with light support from a handhold.' },
      { name: 'Elevated Pistols',       sets: 2, reps: '12',  each: true, desc: 'Single-leg squat in the upper range only, removing the hardest bottom portion.' },
      { name: 'Pistol Squats',          sets: 2, reps: '12',  each: true, desc: 'Full single-leg squat to depth, free-standing. The goal of this progression.' },
    ]
  },
  core: {
    label: 'Core',
    progressions: [
      { name: 'Knee Raises',              sets: 2, reps: '30',  desc: 'Lying flat, raise bent knees toward the chest and lower with control.' },
      { name: 'Advanced Knee Raises',     sets: 2, reps: '30',  desc: 'Raise bent knees higher and hold briefly at the top.' },
      { name: 'Alternating Leg Raises',   sets: 2, reps: '25',  desc: 'One leg raises while the other hovers near the ground, alternating each rep.' },
      { name: 'Full Leg Raises',          sets: 2, reps: '25',  desc: 'Both legs raised together, kept straight. Lower slowly without touching the floor.' },
      { name: 'Tuck Plow Raises',         sets: 2, reps: '20',  desc: 'Raise legs and roll hips up into a tucked plow position.' },
      { name: 'Plow Raises',              sets: 2, reps: '20',  desc: 'Straight-leg plow raise. Feet touch the floor overhead.' },
      { name: 'Hanging Knee Raises',      sets: 2, reps: '15',  desc: 'From a dead hang, raise bent knees to chest height.' },
      { name: 'Adv. Hanging Knee Raises', sets: 2, reps: '15',  desc: 'From a dead hang, raise bent knees above hip height.' },
      { name: 'Hanging Leg Raises',       sets: 2, reps: '25',  desc: 'From a dead hang, raise straight legs to horizontal or beyond.' },
      { name: 'Toes to Bar',              sets: 2, reps: '25',  desc: 'From a dead hang, raise straight legs until feet touch the bar.' },
    ]
  },
  bridge: {
    label: 'Bridge',
    progressions: [
      { name: 'Glute Bridges',            sets: 3, reps: '50',  desc: 'Lie on your back with knees bent and push hips to the ceiling. Gentle intro to bridging.' },
      { name: 'Straight Bridges',         sets: 3, reps: '30',  desc: 'Hands and feet on the floor face-up, hips lifted. Works the posterior chain without back bending.' },
      { name: 'Wall Bridges',             sets: 3, reps: '30',  desc: 'Stand facing away from a wall, lean back and walk hands down it. Safe intro to back extension.' },
      { name: 'Short Bridges',            sets: 3, reps: '20',  desc: 'Back bridge position with limited elevation. Builds the foundation for a full bridge.' },
      { name: 'Full Bridges',             sets: 3, reps: '15',  desc: 'Arms straight, hips fully extended, head off the floor. Complete back bridge.' },
      { name: 'Bridge Pushups',           sets: 3, reps: '15',  desc: 'Lower from a bridge until the top of your head touches the floor, then push back up.' },
      { name: 'Head Bridges',             sets: 3, reps: '12',  desc: 'Hold a bridge with the top of the head resting on the floor.' },
      { name: 'Neck Bridges',             sets: 3, reps: '12',  desc: 'Balance on the forehead in bridge position. Builds neck and spine strength.' },
      { name: 'Stand to Bridge',          sets: 3, reps: '8',   desc: 'From standing, lean back and lower into a full bridge. Control both directions.' },
      { name: 'Stand to Bridge + Pushup', sets: 3, reps: '8',   desc: 'Full stand-to-bridge with a bridge pushup at the bottom before returning to standing.' },
    ]
  },
  twist: {
    label: 'Twist',
    progressions: [
      { name: 'Straight Leg Twists', sets: 3, reps: '60s', per: 'per side', desc: 'Lie on your back with straight legs and rotate as far as you can to each side. Hold for time.' },
      { name: 'Bent Leg Twists',     sets: 3, reps: '60s', per: 'per side', desc: 'Same as straight leg but with knees bent and ankles crossed. Bent legs add resistance.' },
      { name: 'Full Twists',         sets: 3, reps: '60s', per: 'per side', desc: 'Arms locked and legs linked, rotating into a deep full-body stretch. Advanced spinal mobility.' },
    ]
  }
};

const SCHEDULE = [
  { days: 'Mon · Thu', movements: ['push', 'core'] },
  { days: 'Tue · Fri', movements: ['pull', 'squat'] },
  { days: 'Wed · Sat', movements: ['bridge', 'twist'] },
];

function getLevel(id) {
  const v = parseInt(localStorage.getItem('hc_' + id));
  const max = MOVEMENTS[id].progressions.length - 1;
  return isNaN(v) ? 0 : Math.max(0, Math.min(v, max));
}

function saveLevel(id, level) {
  localStorage.setItem('hc_' + id, level);
}

function volumeText(p) {
  if (p.per)  return `${p.sets} × ${p.reps} ${p.per}`;
  if (p.each) return `${p.sets} × ${p.reps} each side`;
  return `${p.sets} × ${p.reps} reps`;
}

function buildSchedule() {
  const container = document.getElementById('schedule');

  SCHEDULE.forEach(({ days, movements }) => {
    const col = document.createElement('div');
    col.className = 'day-col';

    const header = document.createElement('div');
    header.className = 'day-col-header';
    header.textContent = days;
    col.appendChild(header);

    movements.forEach(id => {
      const m = MOVEMENTS[id];
      const level = getLevel(id);
      const p = m.progressions[level];

      const block = document.createElement('div');
      block.className = `ex-block tag-${id}`;

      block.innerHTML = `
        <div class="ex-block-label">${m.label.toUpperCase()}</div>
        <div class="ex-select-wrapper">
          <select class="ex-select" data-id="${id}">
            ${m.progressions.map((prog, i) =>
              `<option value="${i}"${i === level ? ' selected' : ''}>${prog.name}</option>`
            ).join('')}
          </select>
        </div>
        <div class="ex-vol" id="vol-${id}">${volumeText(p)}</div>
        <div class="ex-desc" id="desc-${id}">${p.desc}</div>
      `;

      col.appendChild(block);
    });

    container.appendChild(col);
  });

  // Sunday rest column
  const sun = document.createElement('div');
  sun.className = 'day-col day-col--rest';
  sun.innerHTML = `
    <div class="day-col-header">Sun</div>
    <div class="rest-block">Rest &amp; stretching</div>
  `;
  container.appendChild(sun);
}

function handleChange(e) {
  const select = e.target.closest('.ex-select');
  if (!select) return;
  const id = select.dataset.id;
  const level = parseInt(select.value);
  saveLevel(id, level);
  const p = MOVEMENTS[id].progressions[level];
  document.getElementById('vol-' + id).textContent = volumeText(p);
  document.getElementById('desc-' + id).textContent = p.desc;
}

function highlightToday() {
  const today = new Date().getDay(); // 0=Sun ... 6=Sat
  const gridIndex = (today + 6) % 7; // remap so Mon=0 ... Sun=6
  const cells = document.querySelectorAll('.ws-day');
  if (cells[gridIndex]) cells[gridIndex].classList.add('ws-today');
}

document.getElementById('schedule').addEventListener('change', handleChange);
buildSchedule();
highlightToday();
