// ===== IMAGE LIST =====
const images = [
    'bilder/001.jpg','bilder/002.png','bilder/003.jpg','bilder/004.png','bilder/005.jpg',
    'bilder/006.png','bilder/007.jpg','bilder/008.png','bilder/009.jpg','bilder/010.png',
    'bilder/011.jpg','bilder/012.png','bilder/013.jpg','bilder/014.png','bilder/015.jpg',
    'bilder/016.png','bilder/017.jpg','bilder/018.png','bilder/019.jpg','bilder/020.png',
    'bilder/021.jpg','bilder/022.png','bilder/023.jpg','bilder/024.png','bilder/025.jpg',
    'bilder/026.png','bilder/027.jpg','bilder/028.png','bilder/029.jpg','bilder/030.jpg',
    'bilder/031.jpg','bilder/032.jpg','bilder/033.jpg','bilder/034.jpg','bilder/035.jpg',
    'bilder/036.jpg','bilder/037.jpg','bilder/038.png','bilder/039.jpg','bilder/040.jpg',
    'bilder/041.jpg','bilder/042.jpg','bilder/043.jpg','bilder/044.jpg','bilder/045.jpg',
    'bilder/046.jpg','bilder/047.jpg','bilder/048.jpg','bilder/049.jpg','bilder/050.png',
    'bilder/051.jpg','bilder/052.jpg','bilder/053.jpg','bilder/054.jpg','bilder/055.jpg',
    'bilder/056.jpg','bilder/057.jpg','bilder/058.jpg','bilder/059.jpg','bilder/060.jpg',
    'bilder/061.jpg','bilder/062.png','bilder/063.jpg','bilder/064.jpg','bilder/065.jpg',
    'bilder/066.jpg','bilder/067.jpg','bilder/068.jpg','bilder/069.jpg','bilder/070.jpg',
    'bilder/071.jpg','bilder/072.jpg','bilder/073.jpg','bilder/074.png','bilder/075.jpg',
    'bilder/076.jpg','bilder/077.jpg','bilder/078.jpg','bilder/079.jpg','bilder/080.jpg',
    'bilder/081.jpg','bilder/082.jpg','bilder/083.jpg','bilder/084.jpg','bilder/085.png',
    'bilder/086.jpg','bilder/087.png','bilder/088.jpg','bilder/089.png'
];

// ===== CHAOS TEXT FRAGMENTS =====
const textFragments = [
    '░▒▓█▓▒░', '⌐¬¬¬¬¬', '☺☻♥♦♣♠', '01101001', '///NULL///',
    'ṠŸṠṪËṀ ËṚṚÖṚ', '̴̢̛̛̺̜̈́̈́', '404', '∞', '⌀⌁⌂⌃⌄',
    'WAKE UP', '▂▃▅▇█▇▅▃▂', '⚠⚠⚠', '110100100',
    '>>>FEED<<<', '☠☠☠', '◈◉◊○◌', 'D̸̨͎͋Ả̶̰T̵̰̂A̷͇̋',
    'C̸̱̈́O̵̝̊R̸̯̈R̵̪̈́U̷̠̎P̸̜̈́T̸̰̊', '⣿⣿⣿⣿', '0x00FF00', 'R̷̢͝U̶̦̍N̵̰̅',
    '▄︻̷̿┻̿═━一', 'SCREAMING INTO THE VOID', '⌇⌇⌇⌇⌇',
    '𝔡𝔞𝔯𝔨𝔫𝔢𝔰𝔰', 'THEY SEE', '╔══╗║░░║╚══╝', '⧫⧫⧫',
    'N̷͓̈́Ǫ̵̛ ̷̢̛S̵̰̈́I̸̛̱G̷̰̈́N̵̰̅A̷͇̋L̵̰̈́', ':::STATIC:::', '꧁꧂',
    '†††', '■□■□■□', 'ＦＥＡＲ', '∄∄∄', 'ﮊﮊﮊ',
    '⌭ SIGNAL LOST ⌭', 'ꙮꙮꙮ', '⚡⚡⚡', '┼┼┼┼┼',
    '▀▄▀▄▀▄', 'FLESH INTERFACE', '⎔⎔⎔', '⌬⌬⌬',
    '99.9%', '⏚⏛⏜⏝', 'MEMETIC HAZARD', '⏣⏣⏣',
];

// ===== STYLE BUILDING BLOCKS (yyyyyyy.info approach) =====
const floatTypes = ['left', 'right', 'none'];
const colors = ['#ff0040', '#0ff', '#f0f', '#0f0', '#ff0', '#f00', '#00f',
    '#fff', '#808', '#f80', '#0ff', '#f0f', '#900', '#090', '#009',
    '#c0c', '#0cc', '#cc0', '#333', '#666', '#ff006a', '#00ffa2'];
const darkColors = ['#1a0000', '#000d1a', '#0d001a', '#001a0d', '#1a1a00',
    '#0a0a0a', '#111', '#1a0a00', '#0d0d1a', '#000'];
const fonts = ['monospace', 'serif', 'sans-serif', 'cursive', '"Courier New"',
    '"Times New Roman"', 'fantasy', 'system-ui'];
const textDeco = ['none', 'underline', 'overline', 'line-through'];
const textAligns = ['center', 'left', 'right', 'justify'];
const vAligns = ['baseline', 'sub', 'super', 'top', 'text-top', 'middle', 'bottom'];
const borderStyles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge'];
const borderSides = ['-top', '-bottom', '-left', '-right', ''];
const clearTypes = ['none', 'left', 'right', 'both'];
const easings = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'];
const animProps = ['transform', 'filter'];
const animDirs = ['normal', 'reverse', 'alternate', 'alternate-reverse'];

const NUM_ANIMS = 40;

// ===== HELPERS =====
const r = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const maybe = (pct, val) => Math.random() * 100 <= pct ? val : '';
const randColor = () => `rgba(${r(0,255)},${r(0,255)},${r(0,255)},${r(10,100)/100})`;
const randDarkColor = () => pick(darkColors);
const randShadow = () => `${r(1,30)}px ${r(1,30)}px ${r(3,15)}px ${pick(colors)}`;
const randBorder = () => `${r(1,20)}px ${pick(borderStyles)} ${randColor()}`;
const randAnim = () => `anim-${r(0, NUM_ANIMS)} ${r(1,200)/10}s ${pick(easings)} infinite ${pick(animDirs)}`;

function randFilter() {
    let f = '';
    f += maybe(50, `blur(${r(1,15)}px) `);
    f += maybe(30, `contrast(${r(80,250)}%) `);
    f += maybe(60, `drop-shadow(${r(2,40)}px ${r(2,40)}px ${r(3,20)}px ${randColor()}) `);
    f += maybe(60, `hue-rotate(${r(0,360)}deg) `);
    f += maybe(40, `invert(${r(0,100)/100}) `);
    f += maybe(30, `opacity(${r(10,100)/100}) `);
    f += maybe(40, `saturate(${r(30,300)}%) `);
    f += maybe(25, `brightness(${r(50,200)}%) `);
    return f;
}

function randMatrix() {
    const vals = Array.from({length: 6}, () => r(-50,50)/10);
    return `matrix(${vals.join(',')})`;
}

function randTransform() {
    let t = '';
    t += maybe(60, `rotate(${r(-180,180)}deg) `);
    t += maybe(40, `scale(${r(5,20)/10}) `);
    t += maybe(30, `skew(${r(-30,30)}deg, ${r(-30,30)}deg) `);
    return t || `rotate(${r(-15,15)}deg)`;
}

function animValue(prop) {
    if (prop === 'transform') return randMatrix();
    if (prop === 'filter') return randFilter();
    return null;
}

// ===== GENERATE KEYFRAME ANIMATIONS =====
function generateKeyframes(count) {
    let css = '';
    for (let i = 0; i <= count; i++) {
        const prop = pick(animProps);
        const stops = [10,20,30,40,50,60,70,80,90]
            .sort(() => 0.5 - Math.random())
            .slice(0, r(1, 5))
            .sort((a, b) => a - b);
        css += `@keyframes anim-${i}{`;
        css += `0%{${prop}:${animValue(prop)};}`;
        for (const s of stops) {
            css += `${s}%{${prop}:${animValue(prop)};}`;
        }
        css += `100%{${prop}:${animValue(prop)};}`;
        css += '}';
    }
    return css;
}

// ===== GENERATE RANDOM IMAGE STYLES =====
function generateImageStyles(count) {
    let css = '';
    for (let i = 0; i < count; i++) {
        css += `.img-s${i}{`;
        css += `float:${pick(floatTypes)};`;
        css += maybe(15, `background-color:${pick(darkColors)};`);
        css += maybe(25, `border${pick(borderSides)}:${randBorder()};`);
        css += maybe(20, `border${pick(borderSides)}:${randBorder()};`);
        css += maybe(80, `vertical-align:${pick(vAligns)};`);
        css += maybe(15, `opacity:${r(10,100)/100};`);
        css += maybe(25, `filter:${randFilter()};`);
        css += maybe(20, `transform:${randTransform()};`);
        css += maybe(8, `animation:${randAnim()};`);
        css += maybe(10, `box-shadow:${randShadow()};`);
        css += maybe(5, `mix-blend-mode:${pick(['screen','multiply','overlay','difference','exclusion','color-dodge'])};`);
        css += '}';
    }
    return css;
}

// ===== GENERATE RANDOM TEXT STYLES =====
function generateTextStyles(count) {
    let css = '';
    for (let i = 0; i < count; i++) {
        css += `.txt-s${i}{`;
        css += `float:${pick(floatTypes)};`;
        css += `text-align:${pick(textAligns)};`;
        css += `font-size:${r(8, 48)}px;`;
        css += `font-family:${pick(fonts)};`;
        css += `color:${pick(colors)};`;
        css += maybe(10, `background-color:${pick(darkColors)};`);
        css += maybe(80, `text-decoration:${pick(textDeco)};`);
        css += maybe(60, `text-shadow:${randShadow()};`);
        css += maybe(20, `border${pick(borderSides)}:${randBorder()};`);
        css += `clear:${pick(clearTypes)};`;
        css += maybe(8, `animation:${randAnim()};`);
        css += maybe(15, `opacity:${r(20,100)/100};`);
        css += maybe(10, `letter-spacing:${r(-3,15)}px;`);
        css += maybe(10, `transform:${randTransform()};display:inline-block;`);
        css += '}';
    }
    return css;
}

// ===== GENERATE COLOR SQUARE STYLES =====
function generateSquareStyles(count) {
    let css = '';
    for (let i = 0; i < count; i++) {
        const speed = r(1, 8) / 10;
        const c1 = pick(colors), c2 = pick(colors), c3 = pick(colors), c4 = pick(colors);
        css += `@keyframes sq-${i}{`;
        css += `0%{background:${c1};}`;
        css += `25%{background:${c2};}`;
        css += `50%{background:${c3};}`;
        css += `75%{background:${c4};}`;
        css += `100%{background:${c1};}`;
        css += '}';
        css += `.sq-s${i}{`;
        css += `animation:sq-${i} ${speed}s infinite;`;
        css += `float:${pick(floatTypes)};`;
        css += maybe(50, `vertical-align:${pick(vAligns)};`);
        css += maybe(20, `opacity:${r(30,100)/100};`);
        css += maybe(15, `transform:${randTransform()};`);
        css += maybe(10, `mix-blend-mode:${pick(['screen','overlay','difference','color-dodge','hard-light'])};`);
        css += '}';
    }
    return css;
}

// ===== INJECT ALL DYNAMIC CSS =====
function injectStyles() {
    let css = '';
    css += generateKeyframes(NUM_ANIMS);
    css += generateImageStyles(150);
    css += generateTextStyles(150);
    css += generateSquareStyles(60);
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

// ===== CONTENT GENERATION =====
function makeImageHTML(minDim, maxDim) {
    const src = pick(images);
    const cls = r(0, 149);
    const w = r(minDim, maxDim);
    const h = r(minDim, maxDim);
    return `<img src="${src}" class="img-s${cls}" width="${w}" height="${h}" loading="lazy">`;
}

function makeTextHTML() {
    const cls = r(0, 149);
    const txt = pick(textFragments);
    return `<span class="txt-s${cls}">${txt}</span>`;
}

function makeSquareHTML(minDim, maxDim) {
    const cls = r(0, 59);
    const size = r(minDim, maxDim);
    return `<div class="color-square sq-s${cls}" style="width:${size}px;height:${size}px;display:inline-block;"></div>`;
}

function generateLayerContent(imgCount, textCount, squareCount, minDim, maxDim) {
    const pieces = [];
    for (let i = 0; i < imgCount; i++) pieces.push(makeImageHTML(minDim, maxDim));
    for (let i = 0; i < textCount; i++) pieces.push(makeTextHTML());
    for (let i = 0; i < squareCount; i++) pieces.push(makeSquareHTML(Math.max(10, minDim / 2), maxDim));
    // Shuffle
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }
    return pieces.join('');
}

// ===== INFINITE SCROLL =====
const scrollContainer = document.getElementById('scroll-container');
const layers = {
    l1: document.getElementById('layer-1'),
    l2: document.getElementById('layer-2'),
    l3: document.getElementById('layer-3'),
    l4: document.getElementById('layer-4'),
    l5: document.getElementById('layer-5'),
};

let currentHeight = 0;
let generating = false;

function generateChunk() {
    // Layer 1: small dense elements (foreground)
    layers.l1.insertAdjacentHTML('beforeend', generateLayerContent(50, 20, 15, 20, 200));
    // Layer 2: small-medium
    layers.l2.insertAdjacentHTML('beforeend', generateLayerContent(40, 15, 12, 40, 300));
    // Layer 3: medium
    layers.l3.insertAdjacentHTML('beforeend', generateLayerContent(35, 12, 10, 80, 450));
    // Layer 4: large
    layers.l4.insertAdjacentHTML('beforeend', generateLayerContent(25, 8, 8, 150, 700));
    // Layer 5: huge (background)
    layers.l5.insertAdjacentHTML('beforeend', generateLayerContent(15, 5, 5, 300, 1200));

    currentHeight += 3000;
    // Extend all layers
    for (const key in layers) {
        layers[key].style.minHeight = currentHeight + 'px';
    }
}

function checkScroll() {
    if (generating) return;
    const scrollBottom = scrollContainer.scrollTop + scrollContainer.clientHeight;
    if (scrollBottom > currentHeight - 2000) {
        generating = true;
        generateChunk();
        generateChunk();
        generating = false;
    }
}

// ===== ANIMATED TITLE =====
function animateTitle() {
    const frames = [
        '▁▂▃▄▅▆▇ WAKE UP ▓▒░',
        '▂▁▂▃▄▅▆ I CANT ANYMORE░▓▒',
        '▃▂▁▂▃▄▅ HELP ME ▒░▓',
        '▄▃▂▁▂▃▄ I DONT WANT THIS ANYMORE▓▒░',
        '▅▄▃▂▁▂▃ KILL ME ░▒▓',
        '▆▅▄▃▂▁▂ DESTROY MY MIND▓░▒',
        '▇▆▅▄▃▂▁ DESTROY MY HEAD ▒▓░',
        '▆▇▆▅▄▃▂ END MY LIFE░▓▒',
    ];
    let idx = 0;
    setInterval(() => {
        document.title = frames[idx];
        idx = (idx + 1) % frames.length;
    }, 200);
}

// ===== CURSOR TRAIL =====
function initCursorTrail() {
    const trailCount = 20;
    const dots = [];
    for (let i = 0; i < trailCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        const size = Math.max(3, trailCount - i);
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.background = colors[i % colors.length];
        dot.style.opacity = (1 - i / trailCount) * 0.8;
        document.body.appendChild(dot);
        dots.push({ el: dot, x: 0, y: 0 });
    }

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateTrail() {
        let prevX = mouseX, prevY = mouseY;
        for (const dot of dots) {
            const dx = prevX - dot.x;
            const dy = prevY - dot.y;
            dot.x += dx * 0.35;
            dot.y += dy * 0.35;
            dot.el.style.left = dot.x + 'px';
            dot.el.style.top = dot.y + 'px';
            prevX = dot.x;
            prevY = dot.y;
        }
        requestAnimationFrame(updateTrail);
    }
    updateTrail();
}

// ===== RANDOM GLITCH EFFECT (occasional element distortion) =====
function randomGlitch() {
    setInterval(() => {
        const allImgs = document.querySelectorAll('.layer img');
        if (allImgs.length === 0) return;
        const target = allImgs[Math.floor(Math.random() * allImgs.length)];
        const origFilter = target.style.filter;
        target.style.filter = `hue-rotate(${r(0,360)}deg) saturate(${r(200,500)}%) contrast(${r(150,300)}%)`;
        target.style.transition = 'none';
        setTimeout(() => {
            target.style.filter = origFilter;
        }, r(50, 300));
    }, r(100, 500));
}

// ===== INIT =====
function init() {
    injectStyles();
    animateTitle();
    initCursorTrail();

    // Initial fill
    generateChunk();
    generateChunk();
    generateChunk();

    // Infinite scroll
    scrollContainer.addEventListener('scroll', checkScroll);

    // Random glitch
    randomGlitch();
}

init();
