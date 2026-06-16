// std: [L1, L2, L3] target standards. note: 'per side' for bilateral exercises.
// Do 2-3 sets of as many reps as you can each session.
// Move to the next exercise once you can consistently hit L3 with good form.

const MOVEMENTS = {
  push: {
    label: 'Push',
    progressions: [
      {
        name: 'Wall Pushups',
        std: ['2×30', '2×50', '3×50'],
        desc: "Stand an arm's length from a wall with hands at chest height. Push until arms are fully extended, then lower back with control. A safe entry point that teaches the push pattern with minimal load."
      },
      {
        name: 'Incline Pushups',
        std: ['2×20', '2×30', '3×40'],
        desc: "Hands on a raised surface like a table or bench, feet on the floor. Lower your chest toward the surface and push back up, keeping your body in a straight line from head to heel. The higher the surface, the easier."
      },
      {
        name: 'Adv. Incline Pushups',
        std: ['2×20', '2×30', '3×35'],
        desc: "Same as incline pushups but with a lower surface height, increasing the angle and the load. Keep your elbows tracking back at roughly 45° from your torso rather than flaring wide."
      },
      {
        name: 'Knee Pushups',
        std: ['2×10', '2×20', '3×30'],
        desc: "Start in a plank from the knees with a straight line from knee to shoulder. Lower your chest to the floor and press back up. Brace your core to keep your hips from sagging."
      },
      {
        name: 'Full Pushups',
        std: ['2×5', '2×15', '3×25'],
        desc: "Hands slightly wider than shoulder-width, body rigid from head to heel. Lower until your chest is close to the floor, then press up. Elbows track at about 45° — not flared wide, not pinned tight."
      },
      {
        name: 'Narrow Pushups',
        std: ['2×5', '2×10', '3×20'],
        desc: "Hands closer than shoulder-width apart, shifting more work to your triceps. Keep your elbows tracking backward along your body as you lower. Expect to feel more effort in the back of the arms."
      },
      {
        name: 'Staggered Pushups',
        std: ['2×5', '2×10', '2×20'],
        note: 'per side',
        desc: "Place one hand forward and one hand back, then perform a standard pushup. This unevenly loads one side more than the other. Complete all reps on one side, then switch hand position for the next set."
      },
      {
        name: 'Archer Pushups',
        std: ['2×5', '2×9', '2×12'],
        note: 'per side',
        desc: "Start in a wide pushup position. As you lower, shift your body toward one arm while the other extends sideways with a mostly straight elbow. Push back up through the working arm. A significant step toward single-arm strength."
      },
      {
        name: 'Sliding Pushups',
        std: ['2×5', '2×9', '2×12'],
        note: 'per side',
        desc: "Place one hand on a slider or towel on a smooth floor. As you lower, slide that hand out to the side while pressing down with the other. The sliding arm assists, so more load sits on the stationary arm."
      },
      {
        name: 'One-Arm Pushups',
        std: ['2×3', '2×6', '2×9'],
        note: 'per side',
        desc: "One hand centered under your body, the other tucked behind your back. Spread your feet wide for balance. Lower with full control — this demands significant strength and full-body tension throughout."
      },
      {
        name: 'Advanced One-Arm Pushups',
        std: ['2×3', '2×6', '2×9'],
        note: 'per side',
        desc: "One-arm pushup with feet elevated on a bench or box. Elevating the feet shifts even more weight onto the pushing arm. The hardest level in this progression."
      },
    ]
  },
  pull: {
    label: 'Pull',
    progressions: [
      {
        name: 'Wall Rows',
        std: ['2×30', '2×50', '3×50'],
        desc: "Stand facing a wall with arms extended at chest height. Pull your chest toward the wall by bending your elbows and squeezing your shoulder blades together. The more upright you stand, the easier it is."
      },
      {
        name: 'Horizontal Rows',
        std: ['2×15', '2×30', '3×30'],
        desc: "Lie under a table or low bar with hands gripping the surface at chest height. Pull your chest up to the bar while keeping your body straight from head to heel. Lower with control. Also called an Australian pullup."
      },
      {
        name: 'Low Horizontal Rows',
        std: ['2×10', '2×15', '3×25'],
        desc: "Same as horizontal rows but with the bar set lower, forcing your body into a more horizontal position. More of your bodyweight is being lifted — noticeably harder. Keep your hips up."
      },
      {
        name: 'Negative Pullups',
        std: ['2×3', '2×5', '3×10'],
        desc: "Jump or step up to get your chin above the bar. Then lower yourself as slowly as possible — aim for 5–10 seconds per rep. This builds the pulling muscles even before you can do a full pullup from a dead hang."
      },
      {
        name: 'Assisted Pullups',
        std: ['2×3', '2×6', '3×10'],
        desc: "Hang from a bar and use a resistance band looped under your feet, or rest one foot lightly on a chair. Pull your chin above the bar, then lower all the way back to a full hang. Reduce the assistance over time."
      },
      {
        name: 'Full Pullups',
        std: ['1×3', '2×6', '3×12'],
        desc: "Dead hang from a bar with an overhand grip, hands slightly wider than shoulder-width. Pull until your chin clears the bar, then lower all the way back to a full hang. No kipping, no swinging — strict form only."
      },
      {
        name: 'Close Grip Pullups',
        std: ['1×3', '2×6', '3×10'],
        desc: "Same as full pullups but with hands placed close together or touching. Shifts emphasis slightly toward the outer lats and biceps. Keep the movement strict and go all the way up and all the way down."
      },
      {
        name: 'L-Sit Pullups',
        std: ['1×3', '2×5', '3×8'],
        desc: "From a dead hang, raise your legs to horizontal (forming an L-shape) before you begin pulling. Hold the L throughout the entire set. This dramatically increases core demand and is much harder than it looks."
      },
      {
        name: 'Weighted Pullups',
        std: ['1×3', '2×5', '3×8'],
        desc: "Perform a standard pullup with added weight via a belt, vest, or a dumbbell held between your feet. Start with a small amount and increase gradually. Keep the same strict range of motion as unweighted."
      },
      {
        name: 'One-Arm Negatives',
        std: ['1×2', '2×3', '2×5'],
        note: 'per side',
        desc: "Grip the bar with one hand (the other can lightly rest at the wrist for safety). Start with your chin above the bar and lower yourself on one arm as slowly as possible. Your direct bridge to the one-arm pullup."
      },
      {
        name: 'One-Arm Pullups',
        std: ['1×1', '1×3', '2×5'],
        note: 'per side',
        desc: "Hang from a bar with one hand in a neutral or overhand grip. Pull your chin above the bar using only that arm. An extremely advanced skill that takes months or years to develop — be patient with it."
      },
    ]
  },
  squat: {
    label: 'Squat',
    progressions: [
      {
        name: 'Jackknife Squats',
        std: ['2×15', '2×25', '3×35'],
        desc: "Hold something at about hip height in front of you — a doorknob, bedpost, or sturdy chair. Squat down, then use your arms to help push yourself back to standing. Gradually rely less on the assist over time."
      },
      {
        name: 'Assisted Squats',
        std: ['2×10', '2×20', '3×30'],
        desc: "Hold a door frame, pole, or other fixed object at arm height. Squat to full depth, then use the object to lightly pull yourself back up. The goal is to use as little help as possible while staying in control."
      },
      {
        name: 'Half Squats',
        std: ['2×10', '2×25', '2×50'],
        desc: "Stand shoulder-width apart and lower to about half the full range — roughly where the thighs are at 45°. Keep your back upright and your weight through your heels. Builds strength and confidence in the upper range."
      },
      {
        name: 'Full Squats',
        std: ['2×10', '2×20', '2×30'],
        desc: "Feet shoulder-width apart, toes turned slightly outward. Lower until your thighs are at or below parallel, keeping your heels on the floor and your back upright. Stand back up with full control."
      },
      {
        name: 'Narrow Squats',
        std: ['2×10', '2×15', '2×30'],
        desc: "Same as full squats but with feet close together or touching. Harder on the quads and knees, and requires more ankle mobility. Begins training the balance and joint strength needed for single-leg work."
      },
      {
        name: 'Staggered Squats',
        std: ['2×10', '2×15', '2×20'],
        note: 'per side',
        desc: "Take a wide stance and shift your weight to one leg as you lower, while the other leg stays on the ground for light support. Overloads one side at a time and prepares you for the pistol squat pattern."
      },
      {
        name: 'Front Staggered Squats',
        std: ['2×7', '2×12', '2×15'],
        note: 'per side',
        desc: "Similar to staggered squats but position your support foot forward rather than to the side. The front foot does most of the work. A closer approximation to the pistol squat motion."
      },
      {
        name: 'Assisted Pistols',
        std: ['2×5', '2×9', '2×12'],
        note: 'per side',
        desc: "Stand on one leg and hold a door frame, TRX strap, or similar support. Lower to full depth on one leg and use the support to return to standing. Use as little assistance as possible while maintaining full control."
      },
      {
        name: 'One-Leg Chair Squats',
        std: ['2×5', '2×9', '2×12'],
        note: 'per side',
        desc: "Single-leg squat where you lower yourself into a chair or bench and stand back up on one leg. Removes the most demanding bottom portion. Gradually lower the seat height as you progress."
      },
      {
        name: 'Pistol Squats',
        std: ['2×5', '2×9', '2×12'],
        note: 'per side',
        desc: "Stand on one leg with the other extended out in front. Lower all the way down until your glute is near your heel, then stand back up — no momentum and no touching the ground. The balance, strength, and mobility goal of this progression."
      },
    ]
  },
  core: {
    label: 'Core',
    progressions: [
      {
        name: 'Knee Raises',
        std: ['2×10', '2×20', '2×30'],
        desc: "Lie on your back with arms by your sides. Raise your bent knees toward your chest, then lower them slowly without letting your feet touch the floor. The slow lowering phase is where most of the work happens — don't rush it."
      },
      {
        name: 'Advanced Knee Raises',
        std: ['2×10', '2×20', '2×30'],
        desc: "Same as knee raises but bring your knees higher, aiming to get them past your waist. Pause briefly at the top before lowering. Your lower back may naturally lift slightly — that's fine."
      },
      {
        name: 'Alternating Leg Raises',
        std: ['2×10', '2×15', '2×25'],
        desc: "Lie on your back with both legs extended. Raise one leg to about 90° while the other hovers just above the floor, then switch. Keep the lower back pressed into the floor and don't let either foot touch down between reps."
      },
      {
        name: 'Full Leg Raises',
        std: ['2×5', '2×15', '2×25'],
        desc: "Lie on your back with both legs extended. Raise both legs together to vertical, then lower them slowly without letting your heels touch the floor. The slower the descent, the more your abs are forced to work."
      },
      {
        name: 'Tuck Plow Raises',
        std: ['2×10', '2×15', '2×20'],
        desc: "Raise your bent knees toward your chest, then continue rolling your hips upward and over so your knees come toward your face and your hips leave the floor. Return to the start position under full control."
      },
      {
        name: 'Plow Raises',
        std: ['2×10', '2×15', '2×20'],
        desc: "Same as tuck plow raises but with straight legs. Raise your legs and roll your hips over until your feet reach the floor overhead. This requires significant hamstring flexibility on top of core strength."
      },
      {
        name: 'Hanging Knee Raises',
        std: ['2×5', '2×10', '2×15'],
        desc: "Hang from a bar with a firm grip. Pull your knees up toward your chest, pause briefly, then lower with control. Avoid swinging — use core tension to stay stable throughout each rep."
      },
      {
        name: 'Adv. Hanging Knee Raises',
        std: ['2×5', '2×10', '2×15'],
        desc: "Same as hanging knee raises but raise your knees above hip height, aiming to get them close to your chest. The higher you pull, the more your lower abs and hip flexors are challenged."
      },
      {
        name: 'Hanging Leg Raises',
        std: ['2×10', '2×15', '2×25'],
        desc: "From a dead hang, raise both legs together while keeping them straight. Aim for horizontal or higher. Lower slowly and with control on every rep. Requires strong hip flexors, core, and grip endurance all at once."
      },
      {
        name: 'Toes to Bar',
        std: ['2×10', '2×15', '2×25'],
        desc: "From a dead hang, raise straight legs all the way up until your toes make contact with the bar. Control the descent on every rep — don't just drop. The most demanding exercise in this progression."
      },
    ]
  },
  bridge: {
    label: 'Bridge',
    progressions: [
      {
        name: 'Glute Bridges',
        std: ['2×15', '2×30', '3×50'],
        desc: "Lie on your back with knees bent and feet flat on the floor. Push through your heels to raise your hips toward the ceiling, squeezing your glutes at the top. Lower with control. Easy on the spine and a safe starting point."
      },
      {
        name: 'Straight Bridges',
        std: ['2×15', '2×25', '3×30'],
        desc: "Sit on the floor with legs extended and hands behind you, fingers pointing toward your feet. Push through your hands and heels to raise your hips until your body forms a straight line from heel to shoulder. Hold briefly at the top."
      },
      {
        name: 'Wall Bridges',
        std: ['2×15', '2×25', '3×30'],
        desc: "Stand with your back close to a wall and lean back to place your hands on it. Walk your hands gradually down the wall over many sessions. Safely introduces the backward spinal extension needed for advanced bridges."
      },
      {
        name: 'Short Bridges',
        std: ['2×5', '2×10', '3×20'],
        desc: "From lying on your back, place hands and feet flat on the floor and push up into a back bridge — but keep the elevation low and controlled rather than fully extended. Builds the wrist, shoulder, and spine flexibility needed to go further."
      },
      {
        name: 'Full Bridges',
        std: ['2×5', '2×10', '2×15'],
        desc: "Push up into a complete back bridge: hands and feet flat on the floor, arms and legs as straight as possible, hips pushed high. Hold briefly at the top and lower with control. Work on straightening the arms fully over time."
      },
      {
        name: 'Bridge Pushups',
        std: ['2×5', '2×10', '3×15'],
        desc: "From a full bridge position, lower the top of your head toward the floor by bending your elbows, then press back up. Keep your hips high throughout. Builds both strength and spinal flexibility at the same time."
      },
      {
        name: 'Head Bridges',
        std: ['2×5', '2×10', '2×25'],
        desc: "Hold a full bridge with the top of your head resting lightly on the floor — arms still available for safety nearby. This static position begins to train neck strength as a stepping stone toward neck bridges."
      },
      {
        name: 'Neck Bridges',
        std: ['2×5', '2×10', '3×12'],
        desc: "Balance in a bridge position on your forehead and feet, with arms folded across your chest. Rock gently forward and back. Build up very gradually and stop if you feel sharp pain. Develops serious neck and upper-spine resilience."
      },
      {
        name: 'Stand to Bridge',
        std: ['2×3', '2×5', '3×8'],
        desc: "Stand with feet shoulder-width apart and arms raised above your head. Lean back, extend through the spine, and lower your hands to the floor behind you into a bridge. Then push back up to standing. Control every inch in both directions."
      },
      {
        name: 'Stand to Bridge + Pushup',
        std: ['2×3', '2×5', '3×8'],
        desc: "Perform a full stand-to-bridge, and once in the bridge position, do a bridge pushup — lower your head toward the floor and press back up — before returning to standing. The most demanding combination in this progression."
      },
    ]
  },
  twist: {
    label: 'Twist',
    progressions: [
      {
        name: 'Straight Leg Twists',
        std: ['3×15s', '3×30s', '3×60s'],
        note: 'per side · 30s rest between sets',
        desc: "Lie on your back with arms extended out to your sides and legs straight up in the air. Let your legs fall slowly to one side, rotating at the hips, until you feel a deep stretch. Hold for the full duration, breathe naturally, then switch sides."
      },
      {
        name: 'Bent Leg Twists',
        std: ['3×15s', '3×30s', '3×60s'],
        note: 'per side · 30s rest between sets',
        desc: "Same position as straight leg twists but cross your ankles and bend your knees slightly. The weight of the bent legs increases the rotational pull. Let gravity do the work and breathe into the stretch."
      },
      {
        name: 'Full Twists',
        std: ['3×15s', '3×30s', '3×60s'],
        note: 'per side · 30s rest between sets',
        desc: "Lie on your back, fold your arms across your chest, and link your legs by pressing them firmly together. Rotate your lower body to one side as far as possible. The arm position and leg tension together amplify the stretch significantly."
      },
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

function stdHtml(prog) {
  const badges = prog.std.map((s, i) =>
    `<span class="std-badge${i === 2 ? ' std-badge--goal' : ''}">${['L1', 'L2', 'L3'][i]} ${s}</span>`
  ).join('');
  const suffix = prog.note
    ? `<span class="std-note">${prog.note}</span>`
    : '';
  return badges + suffix;
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
        <div class="ex-standards" id="std-${id}">${stdHtml(p)}</div>
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
  document.getElementById('std-' + id).innerHTML = stdHtml(p);
  document.getElementById('desc-' + id).textContent = p.desc;
}

function highlightToday() {
  const today = new Date().getDay();
  const gridIndex = (today + 6) % 7;
  const cells = document.querySelectorAll('.ws-day');
  if (cells[gridIndex]) cells[gridIndex].classList.add('ws-today');
}

document.getElementById('schedule').addEventListener('change', handleChange);
buildSchedule();
highlightToday();
