const SIGNS = [
    { name: 'Aries', sym: '♈', emoji: '🐏', dates: 'Mar 21 – Apr 19', element: 'Fire', ruler: '♂ Mars', mod: 'Cardinal', traits: ['Bold', 'Passionate', 'Competitive'], color: '#e55', elemIcon: '🔥' },
    { name: 'Taurus', sym: '♉', emoji: '🐂', dates: 'Apr 20 – May 20', element: 'Earth', ruler: '♀ Venus', mod: 'Fixed', traits: ['Loyal', 'Patient', 'Sensual'], color: '#5a5', elemIcon: '🌿' },
    { name: 'Gemini', sym: '♊', emoji: '👯', dates: 'May 21 – Jun 20', element: 'Air', ruler: '☿ Mercury', mod: 'Mutable', traits: ['Curious', 'Witty', 'Adaptable'], color: '#aa5', elemIcon: '💨' },
    { name: 'Cancer', sym: '♋', emoji: '🦀', dates: 'Jun 21 – Jul 22', element: 'Water', ruler: '☽ Moon', mod: 'Cardinal', traits: ['Intuitive', 'Nurturing', 'Loyal'], color: '#55a', elemIcon: '🌊' },
    { name: 'Leo', sym: '♌', emoji: '🦁', dates: 'Jul 23 – Aug 22', element: 'Fire', ruler: '☀️ Sun', mod: 'Fixed', traits: ['Charismatic', 'Creative', 'Brave'], color: '#e90', elemIcon: '🔥' },
    { name: 'Virgo', sym: '♍', emoji: '🌾', dates: 'Aug 23 – Sep 22', element: 'Earth', ruler: '☿ Mercury', mod: 'Mutable', traits: ['Analytical', 'Kind', 'Precise'], color: '#5a5', elemIcon: '🌿' },
    { name: 'Libra', sym: '♎', emoji: '⚖️', dates: 'Sep 23 – Oct 22', element: 'Air', ruler: '♀ Venus', mod: 'Cardinal', traits: ['Diplomatic', 'Fair', 'Charming'], color: '#a55', elemIcon: '💨' },
    { name: 'Scorpio', sym: '♏', emoji: '🦂', dates: 'Oct 23 – Nov 21', element: 'Water', ruler: '♇ Pluto', mod: 'Fixed', traits: ['Intense', 'Magnetic', 'Brave'], color: '#53a', elemIcon: '🌊' },
    { name: 'Sagittarius', sym: '♐', emoji: '🏹', dates: 'Nov 22 – Dec 21', element: 'Fire', ruler: '♃ Jupiter', mod: 'Mutable', traits: ['Adventurous', 'Honest', 'Jovial'], color: '#a73', elemIcon: '🔥' },
    { name: 'Capricorn', sym: '♑', emoji: '🐐', dates: 'Dec 22 – Jan 19', element: 'Earth', ruler: '♄ Saturn', mod: 'Cardinal', traits: ['Ambitious', 'Disciplined', 'Wise'], color: '#777', elemIcon: '🌿' },
    { name: 'Aquarius', sym: '♒', emoji: '🏺', dates: 'Jan 20 – Feb 18', element: 'Air', ruler: '♅ Uranus', mod: 'Fixed', traits: ['Visionary', 'Eccentric', 'Free'], color: '#39a', elemIcon: '💨' },
    { name: 'Pisces', sym: '♓', emoji: '🐟', dates: 'Feb 19 – Mar 20', element: 'Water', ruler: '♆ Neptune', mod: 'Mutable', traits: ['Empathetic', 'Dreamy', 'Artistic'], color: '#59a', elemIcon: '🌊' },
];

const PLANETS = [
    { sym: '☀️', name: 'Sun', sign: 'Taurus', deg: '29°14\'', retro: false },
    { sym: '🌙', name: 'Moon', sign: 'Scorpio', deg: '12°38\'', retro: false },
    { sym: '☿', name: 'Mercury', sign: 'Gemini', deg: '4°52\'', retro: false },
    { sym: '♀', name: 'Venus', sign: 'Cancer', deg: '18°07\'', retro: false },
    { sym: '♂', name: 'Mars', sign: 'Leo', deg: '22°41\'', retro: false },
    { sym: '♃', name: 'Jupiter', sign: 'Gemini', deg: '27°33\'', retro: false },
    { sym: '♄', name: 'Saturn', sign: 'Pisces', deg: '19°51\'', retro: true },
    { sym: '♅', name: 'Uranus', sign: 'Taurus', deg: '25°18\'', retro: false },
    { sym: '♆', name: 'Neptune', sign: 'Aries', deg: '2°14\'', retro: false },
    { sym: '♇', name: 'Pluto', sign: 'Aquarius', deg: '3°46\'', retro: true },
];

const ASPECTS = [
    { p1: 'Sun', p2: 'Jupiter', type: 'Trine', orb: '2°14\'', infl: 'Expansion of self' },
    { p1: 'Moon', p2: 'Saturn', type: 'Opposition', orb: '7°12\'', infl: 'Emotional tension' },
    { p1: 'Mercury', p2: 'Venus', type: 'Sextile', orb: '1°55\'', infl: 'Harmonious expression' },
    { p1: 'Mars', p2: 'Uranus', type: 'Square', orb: '2°37\'', infl: 'Sudden impulses' },
    { p1: 'Venus', p2: 'Neptune', type: 'Conjunction', orb: '0°18\'', infl: 'Dreamy romance' },
];

const HOROSCOPES = {
    Aries: "The cosmos aligns in your favour today as Mars, your ruling planet, forms a dynamic trine with Jupiter. This powerful combination ignites your natural drive and amplifies your leadership instincts. Professionally, don't shy away from taking bold initiative — your ideas will resonate strongly with those in positions of authority. Romantically, passionate energy surrounds you; be honest about your desires. Evening hours favour meaningful conversations with loved ones.",
    Taurus: "Venus's warm embrace deepens your appreciation for life's finest pleasures today. Financial matters deserve a careful second look — a decision made in haste last week may need revisiting. Your steady nature is your greatest asset. In relationships, patience and tenderness open doors that urgency cannot. A creative project that has been stalled suddenly finds new momentum this afternoon.",
    Gemini: "Mercury, your ruling planet, sparks intellectual brilliance today. Your communication skills are exceptionally sharp — negotiations, presentations, and heartfelt conversations all go well. Be mindful of spreading yourself too thin; your natural curiosity may pull you in a dozen directions. Choose the two or three that truly matter. A chance encounter this afternoon carries surprising significance.",
    Cancer: "The Moon, your celestial guardian, moves through transformative Scorpio, amplifying your emotional intuition to remarkable heights. You may feel others' unspoken feelings with uncanny clarity. Use this gift wisely — offer support without losing yourself in the process. Home and family call to you this evening. Creating a nurturing sanctuary for yourself and those you love is today's most rewarding work.",
    Leo: "The Sun burns brightly in your sector of self-expression, and the world is watching with admiration. Your creative force is at a peak — whether in art, leadership, or love, you radiate with magnetic warmth. A long-awaited recognition may arrive today. Accept it with the grace you are known for. In romance, dramatic gestures are tempting but sincerity wins hearts more lastingly.",
    Virgo: "Mercury's analytical energy sharpens your already formidable attention to detail. Systems, workflows, and health routines all benefit from your masterful touch. Don't let perfectionism stall progress — done and good is infinitely better than perfect and incomplete. A colleague's unusual suggestion deserves genuine consideration; their perspective complements yours beautifully.",
    Libra: "Venus graces your sign with its refined elegance, making today exceptional for all matters of beauty, art, and connection. Relationships — both personal and professional — are illuminated with harmony. A long-standing conflict may finally find peaceful resolution if you approach it with your signature diplomacy. Aesthetics matter deeply to you today; dress, decorate, or create something beautiful.",
    Scorpio: "Pluto's transformative depth stirs something profound within you today. A truth that has been lurking just below the surface is ready to emerge — face it with the fearless courage Scorpio is celebrated for. This is a powerful day for research, investigation, and uncovering hidden opportunities. In intimate relationships, vulnerability is strength. Let someone in.",
    Sagittarius: "Jupiter, the great benefic, expands your horizon today in delightful ways. Adventure calls — even a small departure from your routine carries hidden rewards. Philosophical questions that have puzzled you begin to find satisfying answers. Share your wisdom generously; you inspire more people than you realise. Travel-related plans receive a cosmic green light.",
    Capricorn: "Saturn reinforces your legendary discipline today, and the results of your long-standing efforts begin to show in gratifying ways. Your reputation for reliability earns a significant reward — watch for it. Guard against over-working; your body needs rest just as a mountain needs winter. Schedule one purely enjoyable activity this evening without guilt.",
    Aquarius: "Uranus, your ruling planet, sparks unconventional genius today. An idea that seemed too radical or ahead of its time is suddenly perfectly timed. Your humanitarian instincts are heightened — community, technology, and collective wellbeing call to you. In relationships, give your partner space to be authentically themselves, just as you cherish that freedom.",
    Pisces: "Neptune dissolves boundaries today, leaving you exquisitely open to inspiration, empathy, and spiritual connection. Creative and intuitive gifts are at a zenith — make art, meditate, or journal your most luminous insights. Guard energetic boundaries carefully; your compassion may be taken advantage of if left unchecked. A dream from last night holds a meaningful message worth contemplating."
};

const MOON_DATA = {
    phase: "Waxing Gibbous", illumination: 78, age: 10.4,
    zodiac: "Scorpio", nextFull: "May 23, 2026", nextNew: "Jun 6, 2026", emoji: "🌔"
};

const COMPAT_MATRIX = {
    'Aries-Leo': 85, 'Aries-Sagittarius': 90, 'Aries-Gemini': 80, 'Aries-Aquarius': 75, 'Aries-Libra': 60, 'Aries-Taurus': 55, 'Aries-Scorpio': 65, 'Aries-Capricorn': 50, 'Aries-Cancer': 58, 'Aries-Virgo': 52, 'Aries-Pisces': 62, 'Aries-Aries': 70,
    'Taurus-Virgo': 92, 'Taurus-Capricorn': 88, 'Taurus-Cancer': 85, 'Taurus-Pisces': 80, 'Taurus-Scorpio': 65, 'Taurus-Taurus': 72, 'Taurus-Leo': 55, 'Taurus-Aquarius': 45, 'Taurus-Gemini': 58, 'Taurus-Libra': 70, 'Taurus-Sagittarius': 50,
    'Gemini-Libra': 90, 'Gemini-Aquarius': 88, 'Gemini-Aries': 80, 'Gemini-Leo': 78, 'Gemini-Gemini': 65, 'Gemini-Sagittarius': 70, 'Gemini-Cancer': 52, 'Gemini-Capricorn': 48, 'Gemini-Virgo': 60, 'Gemini-Taurus': 58, 'Gemini-Scorpio': 55, 'Gemini-Pisces': 62,
    'Cancer-Scorpio': 92, 'Cancer-Pisces': 90, 'Cancer-Taurus': 85, 'Cancer-Virgo': 80, 'Cancer-Cancer': 75, 'Cancer-Capricorn': 68, 'Cancer-Leo': 58, 'Cancer-Gemini': 52, 'Cancer-Libra': 60, 'Cancer-Aries': 58, 'Cancer-Aquarius': 45, 'Cancer-Sagittarius': 50,
};

function getCompat(s1, s2) {
    let key = `${s1}-${s2}`;
    if (COMPAT_MATRIX[key]) return COMPAT_MATRIX[key];
    key = `${s2}-${s1}`;
    if (COMPAT_MATRIX[key]) return COMPAT_MATRIX[key];
    const e1 = SIGNS.find(s => s.name === s1)?.element;
    const e2 = SIGNS.find(s => s.name === s2)?.element;
    const eleMap = { 'Fire-Fire': 82, 'Fire-Air': 78, 'Fire-Earth': 55, 'Fire-Water': 60, 'Earth-Earth': 86, 'Earth-Water': 84, 'Earth-Air': 52, 'Water-Water': 88, 'Water-Air': 58, 'Air-Air': 80 };
    return eleMap[`${e1}-${e2}`] || eleMap[`${e2}-${e1}`] || 65;
}

// Live Clock
function updateClock() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('live-date').textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    document.getElementById('live-time').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// Nav
function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (btn) btn.classList.add('active');
    if (id === 'moon') loadMoon();
    if (id === 'planets') loadPlanets();
    if (id === 'daily') loadDaily();
}

// Sign Picker
let currentSign = SIGNS[0];
function buildSignPicker() {
    const wrap = document.getElementById('sign-picker');
    SIGNS.forEach((s, i) => {
        const btn = document.createElement('button');
        btn.className = 'sign-btn' + (i === 0 ? ' active' : '');
        btn.innerHTML = `<span class="sym">${s.sym}</span><span class="lbl">${s.name}</span>`;
        btn.onclick = () => selectSign(s, btn);
        wrap.appendChild(btn);
    });
}

function selectSign(sign, btn) {
    currentSign = sign;
    document.querySelectorAll('.sign-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderHoroscope(sign);
}

function renderHoroscope(sign) {
    document.getElementById('zodiac-icon').textContent = sign.sym;
    document.getElementById('sign-name').textContent = sign.name;
    document.getElementById('sign-dates').textContent = sign.dates;
    document.getElementById('element-icon').textContent = sign.elemIcon;
    document.getElementById('element-label').textContent = sign.element;
    document.getElementById('ruling-planet-display').textContent = sign.ruler;
    document.getElementById('modality-display').textContent = sign.mod;

    document.getElementById('traits-row').innerHTML = sign.traits.map(t => `<span class="trait-tag">${t}</span>`).join('');

    const energies = [
        { label: 'Love', val: 50 + Math.floor(Math.random() * 50) },
        { label: 'Career', val: 50 + Math.floor(Math.random() * 50) },
        { label: 'Health', val: 50 + Math.floor(Math.random() * 50) },
        { label: 'Luck', val: 40 + Math.floor(Math.random() * 60) },
    ];
    const colors = ['#e55', '#c9a84c', '#5a9', '#7b5ea7'];
    document.getElementById('energy-bars').innerHTML = energies.map((e, i) => `
    <div style="margin-bottom:0.8rem;">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <span style="font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:1px;color:var(--muted);">${e.label}</span>
        <span style="font-size:0.75rem;color:${colors[i]};font-family:'Cinzel',serif;">${e.val}%</span>
      </div>
      <div style="height:5px;background:var(--surface2);border-radius:10px;overflow:hidden;">
        <div style="height:100%;width:${e.val}%;background:${colors[i]};border-radius:10px;transition:width 0.8s ease;"></div>
      </div>
    </div>
  `).join('');

    const colors2 = ['Indigo', 'Crimson', 'Emerald', 'Amber', 'Violet', 'Rose'];
    const nums = [3, 7, 11, 22, 33].sort(() => Math.random() - 0.5).slice(0, 2);
    const gems = ['Amethyst', 'Ruby', 'Sapphire', 'Topaz', 'Opal', 'Jade'];
    const col = colors2[Math.floor(Math.random() * colors2.length)];
    const gem = gems[Math.floor(Math.random() * gems.length)];
    document.getElementById('lucky-elements').innerHTML = `
    <span class="lucky-pill color">🎨 ${col}</span>
    <span class="lucky-pill number">🔢 ${nums[0]} & ${nums[1]}</span>
    <span class="lucky-pill gem">💎 ${gem}</span>
  `;

    const el = document.getElementById('horoscope-text');
    const loading = document.getElementById('horoscope-loading');
    el.textContent = '';
    loading.classList.add('show');
    setTimeout(() => {
        loading.classList.remove('show');
        el.textContent = HOROSCOPES[sign.name] || HOROSCOPES['Aries'];
    }, 900);

    document.getElementById('weekly-mini').textContent = 'This week opens with fresh creative momentum. Mid-week, communications flow unusually smoothly. The weekend brings opportunities for meaningful rest and reflection.';
}

// Moon
function loadMoon() {
    const loading = document.getElementById('moon-loading');
    loading.classList.add('show');
    setTimeout(() => {
        loading.classList.remove('show');
        renderMoon();
    }, 800);
}

function renderMoon() {
    const d = MOON_DATA;
    document.getElementById('moon-emoji').textContent = d.emoji;
    document.getElementById('moon-pct').textContent = d.illumination + '%';
    document.getElementById('moon-phase-name').textContent = d.phase;
    document.getElementById('moon-age').textContent = `🌑 Moon Age: ${d.age} days`;
    document.getElementById('moon-zodiac').textContent = `♏ Currently in ${d.zodiac}`;
    document.getElementById('moon-next').textContent = `🌕 Full Moon: ${d.nextFull}`;

    const phases = [
        { em: '🌑', name: 'New Moon', date: 'Jun 6' },
        { em: '🌒', name: 'Waxing Crescent', date: 'Jun 9' },
        { em: '🌓', name: 'First Quarter', date: 'Jun 13' },
        { em: '🌔', name: 'Waxing Gibbous', date: 'Now' },
        { em: '🌕', name: 'Full Moon', date: 'May 23' },
        { em: '🌖', name: 'Waning Gibbous', date: 'May 27' },
        { em: '🌗', name: 'Last Quarter', date: 'May 30' },
        { em: '🌘', name: 'Waning Crescent', date: 'Jun 3' },
    ];
    document.getElementById('phase-strip').innerHTML = phases.map(p => `
    <div class="phase-item">
      <span class="phase-em">${p.em}</span>
      <span class="phase-name">${p.name}</span>
      <span class="phase-date">${p.date}</span>
    </div>
  `).join('');

    document.getElementById('moon-influence').textContent = 'The Waxing Gibbous in Scorpio intensifies emotional awareness and drives us toward meaningful transformation. This is a powerful phase for releasing old patterns, deepening intimate bonds, and pursuing goals with laser-focused determination. Hidden truths may surface now — welcome them as gifts of clarity.';

    const acts = [
        { em: '🧘', text: 'Deep meditation & journaling' },
        { em: '💑', text: 'Deepening intimate relationships' },
        { em: '🔍', text: 'Research and investigation' },
        { em: '🌿', text: 'Healing & releasing old wounds' },
    ];
    document.getElementById('moon-activities').innerHTML = acts.map(a => `
    <div style="display:flex;align-items:center;gap:0.8rem;padding:0.5rem 0;border-bottom:1px solid var(--border);">
      <span style="font-size:1.4rem;">${a.em}</span>
      <span style="font-size:0.88rem;color:var(--text);">${a.text}</span>
    </div>
  `).join('');
}

// Planets
function loadPlanets() {
    document.getElementById('planet-list').innerHTML = PLANETS.map(p => `
    <div class="planet-row">
      <span class="planet-sym">${p.sym}</span>
      <span class="planet-name">${p.name}</span>
      <span class="planet-sign">in ${p.sign}</span>
      <span class="planet-deg">${p.deg}</span>
      ${p.retro ? '<span class="retrograde-badge">℞ Rx</span>' : ''}
    </div>
  `).join('');

    const aClass = { Trine: 'asp-trine', Square: 'asp-square', Opposition: 'asp-opposition', Sextile: 'asp-sextile', Conjunction: 'asp-conjunction' };
    document.getElementById('aspects-body').innerHTML = ASPECTS.map(a => `
    <tr>
      <td>${a.p1} ☌ ${a.p2}</td>
      <td><span class="asp-badge ${aClass[a.type]}">${a.type}</span></td>
      <td style="color:var(--muted);">${a.orb}</td>
      <td style="color:var(--muted);font-size:0.78rem;">${a.infl}</td>
    </tr>
  `).join('');

    const retros = PLANETS.filter(p => p.retro);
    document.getElementById('retrograde-info').innerHTML = retros.map(p => `
    <div style="display:flex;align-items:center;gap:0.8rem;padding:0.7rem 0;border-bottom:1px solid var(--border);">
      <span style="font-size:1.5rem;">${p.sym}</span>
      <div>
        <div style="font-family:'Cinzel',serif;font-size:0.85rem;color:var(--gold);">${p.name} Retrograde</div>
        <div style="font-size:0.78rem;color:var(--muted);margin-top:2px;">Currently in ${p.sign} at ${p.deg} — review, reassess, and revisit matters ruled by ${p.name}.</div>
      </div>
    </div>
  `).join('');
}

// Birth Chart
function calculateBirthChart() {
    const date = document.getElementById('birth-date').value;
    const time = document.getElementById('birth-time').value;
    const city = document.getElementById('birth-city').value || 'Unknown Location';
    if (!date) { alert('Please enter your birth date.'); return; }

    const d = new Date(date + 'T' + time);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const sign = getSunSign(month, day);
    const signIdx = SIGNS.findIndex(s => s.name === sign);
    const rising = SIGNS[(signIdx + 3) % 12];
    const moon = SIGNS[(signIdx + 7) % 12];

    document.getElementById('big-three').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:0.9rem;">
      <div style="display:flex;align-items:center;gap:1rem;">
        <span style="font-size:1.8rem;">☀️</span>
        <div>
          <div style="font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:1.5px;color:var(--muted);">SUN SIGN</div>
          <div style="font-size:1.1rem;color:var(--gold);font-family:'Cinzel',serif;">${sign}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:1rem;">
        <span style="font-size:1.8rem;">🌙</span>
        <div>
          <div style="font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:1.5px;color:var(--muted);">MOON SIGN</div>
          <div style="font-size:1.1rem;color:var(--gold);font-family:'Cinzel',serif;">${moon.name}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:1rem;">
        <span style="font-size:1.8rem;">⬆️</span>
        <div>
          <div style="font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:1.5px;color:var(--muted);">RISING SIGN</div>
          <div style="font-size:1.1rem;color:var(--gold);font-family:'Cinzel',serif;">${rising.name}</div>
        </div>
      </div>
    </div>
  `;

    const houses = ['Self & Appearance', 'Values & Possessions', 'Communication', 'Home & Family', 'Romance & Creativity', 'Health & Service', 'Partnerships', 'Transformation', 'Philosophy', 'Career', 'Community', 'Hidden Strengths'];
    document.getElementById('house-placements').innerHTML = houses.map((h, i) => `
    <div style="display:flex;justify-content:space-between;padding:0.4rem 0;border-bottom:1px solid rgba(201,168,76,0.06);font-size:0.8rem;">
      <span style="color:var(--muted);">House ${i + 1}: ${h}</span>
      <span style="font-family:'Cinzel',serif;color:var(--gold);">${SIGNS[(signIdx + i) % 12].sym}</span>
    </div>
  `).join('');

    document.getElementById('natal-planets').innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:0.6rem;">` +
        PLANETS.map((p, i) => `
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:0.6rem 1rem;display:flex;align-items:center;gap:0.6rem;">
        <span style="font-size:1.3rem;">${p.sym}</span>
        <div>
          <div style="font-family:'Cinzel',serif;font-size:0.7rem;color:var(--muted);">${p.name}</div>
          <div style="font-size:0.82rem;color:var(--gold);">${SIGNS[(signIdx + i * 2) % 12].name}</div>
        </div>
      </div>
    `).join('') + '</div>';

    const s = SIGNS[signIdx];
    document.getElementById('chart-interpretation').textContent =
        `Your ${sign} Sun shines at the core of your identity, infused with the ${s.element} element's essential energy. Your ${moon.name} Moon colours your emotional landscape with ${moon.traits.join(', ').toLowerCase()} qualities — this is how you process feeling and seek safety. Your ${rising.name} Rising shapes the face you present to the world: ${rising.traits[0].toLowerCase()} and ${rising.traits[1].toLowerCase()} at first meeting. Together, your Big Three form a complex, beautiful harmony that uniquely defines your cosmic blueprint. Born in ${city}, the celestial configuration at the moment of your birth imprints you with extraordinary potential for growth and purpose.`;

    document.getElementById('birth-result').style.display = 'block';
}

function getSunSign(m, d) {
    const ranges = [[3, 21, 'Aries'], [4, 20, 'Taurus'], [5, 21, 'Gemini'], [6, 21, 'Cancer'], [7, 23, 'Leo'], [8, 23, 'Virgo'], [9, 23, 'Libra'], [10, 23, 'Scorpio'], [11, 22, 'Sagittarius'], [12, 22, 'Capricorn'], [1, 20, 'Aquarius'], [2, 19, 'Pisces']];
    for (let i = 0; i < ranges.length; i++) {
        const [rm, rd, name] = ranges[i];
        const [nm, nd] = i + 1 < ranges.length ? [ranges[i + 1][0], ranges[i + 1][1]] : [3, 21];
        if ((m === rm && d >= rd) || (m === nm && d < nd)) return name;
    }
    return 'Capricorn';
}

// Compatibility
function buildCompatSelects() {
    const s1 = document.getElementById('compat-sign1');
    const s2 = document.getElementById('compat-sign2');
    SIGNS.forEach(s => {
        s1.innerHTML += `<option value="${s.name}">${s.sym} ${s.name}</option>`;
        s2.innerHTML += `<option value="${s.name}">${s.sym} ${s.name}</option>`;
    });
    s2.selectedIndex = 1;
    calculateCompatibility();
}

function calculateCompatibility() {
    const s1 = document.getElementById('compat-sign1').value;
    const s2 = document.getElementById('compat-sign2').value;
    const score = getCompat(s1, s2);

    document.getElementById('compat-result').style.display = 'block';
    document.getElementById('compat-pct').textContent = score + '%';

    const verdicts = [[90, 'Twin Flames ✨'], [80, 'Deeply Compatible 💞'], [70, 'Strong Bond 💛'], [60, 'Good Potential 🌱'], [50, 'Needs Work 🌊'], [0, 'Challenging Path 🔥']];
    document.getElementById('compat-verdict').textContent = verdicts.find(([t]) => score >= t)[1];

    const categories = ['Love', 'Trust', 'Communication', 'Passion', 'Longevity'];
    const colors = ['#e55', '#5a9', '#c9a84c', '#7b5ea7', '#4a7dc5'];
    document.getElementById('compat-bars').innerHTML = categories.map((cat, i) => {
        const v = Math.max(40, Math.min(100, score + Math.floor(Math.random() * 20) - 10));
        return `
      <div class="compat-bar-row">
        <div class="compat-bar-label">${cat}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${v}%;background:${colors[i]};"></div></div>
        <div style="font-size:0.75rem;width:32px;color:${colors[i]};font-family:'Cinzel',serif;">${v}%</div>
      </div>
    `;
    }).join('');

    const sign1 = SIGNS.find(s => s.name === s1);
    const sign2 = SIGNS.find(s => s.name === s2);
    document.getElementById('compat-text').textContent =
        `${s1} and ${s2} create a dynamic cosmic pairing. As a ${sign1.element} sign, ${s1} brings ${sign1.traits[0].toLowerCase()} energy, while ${s2}'s ${sign2.element} nature contributes a ${sign2.traits[0].toLowerCase()} quality to the relationship. This combination has the potential to create something truly extraordinary when both partners embrace their differences as complementary strengths.`;

    const listHtml = arr => arr.map(t => `<div style="padding:0.4rem 0;border-bottom:1px solid rgba(201,168,76,0.06);font-size:0.82rem;color:var(--text);">• ${t}</div>`).join('');
    document.getElementById('compat-strengths').innerHTML = listHtml(['Mutual admiration and respect', 'Complementary strengths', 'Deep emotional understanding']);
    document.getElementById('compat-challenges').innerHTML = listHtml(['Different communication styles', 'Contrasting social needs', 'Balancing independence']);
    document.getElementById('compat-tips').innerHTML = listHtml(['Schedule regular check-ins', 'Celebrate each other\'s differences', 'Create shared rituals and traditions']);
}

// Daily
function loadDaily() {
    document.getElementById('weather-astro-wrap').innerHTML = `
    <div class="weather-astro-card">
      <div class="weather-icon">🌤️</div>
      <div class="weather-info">
        <h3>Cosmic Weather Today</h3>
        <div class="weather-temp">Energetically ☀️ Active</div>
        <div class="weather-loc">Sun in Taurus · Moon in Scorpio · Mercury in Gemini</div>
      </div>
    </div>
  `;

    const dailyItems = [
        { em: '💖', title: 'Love & Relationships', text: 'Venus trines Neptune, creating a beautifully romantic and compassionate atmosphere. Ideal for deepening bonds and expressing feelings you may have held back.' },
        { em: '💼', title: 'Career & Finance', text: 'Mars supports ambitious moves. A bold proposal or professional negotiation is well-starred today. Financial decisions made before 3 PM carry stronger outcomes.' },
        { em: '🌱', title: 'Health & Wellness', text: 'Scorpio Moon calls for emotional detox as much as physical. Prioritise hydration, gentle movement, and adequate sleep tonight. Avoid overindulgence.' },
        { em: '🧠', title: 'Mind & Spirit', text: 'Jupiter in Gemini sparks intellectual curiosity. An ideal day for learning, reading, writing, or engaging in stimulating conversations that stretch your perspective.' },
    ];
    document.getElementById('daily-grid').innerHTML = dailyItems.map(item => `
    <div class="daily-mini">
      <div class="icon">${item.em}</div>
      <div><h4>${item.title}</h4><p>${item.text}</p></div>
    </div>
  `).join('');

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const icons = ['🌱', '⚡', '💫', '🌊', '🌟', '🎉', '🌙'];
    const themes = ['New beginnings', 'Bold action', 'Clarity arrives', 'Deep feeling', 'Bright opportunities', 'Creative joy', 'Rest & reflect'];
    const today = new Date().getDay();
    document.getElementById('weekly-forecast').innerHTML = days.map((day, i) => `
    <div style="display:flex;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid rgba(201,168,76,0.06);">
      <span style="font-size:1.4rem;">${icons[i]}</span>
      <div style="flex:1;">
        <span style="font-family:'Cinzel',serif;font-size:0.8rem;color:${i === ((today + 6) % 7) ? 'var(--gold)' : 'var(--text)'};">${day}</span>
        <span style="font-size:0.75rem;color:var(--muted);margin-left:0.5rem;">${themes[i]}</span>
      </div>
      <div style="display:flex;gap:3px;">
        ${[1, 2, 3, 4, 5].map(s => `<span style="font-size:0.85rem;color:${s <= Math.floor(2 + Math.random() * 4) ? 'var(--gold)' : 'var(--surface2)'}">★</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Init
buildSignPicker();
renderHoroscope(SIGNS[0]);
buildCompatSelects();
document.getElementById('birth-date').valueAsDate = new Date(1990, 5, 15);
