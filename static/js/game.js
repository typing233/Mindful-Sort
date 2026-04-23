const scenes = {
    desk: {
        name: "书桌",
        icon: "📚",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        zones: [
            { id: "bookshelf", label: "📚 书架", category: "book", color: "#667eea", x: 20, y: 50, width: 180, height: 120 },
            { id: "stationery", label: "🖊️ 文具", category: "stationery", color: "#f5576c", x: 20, y: 200, width: 180, height: 120 },
            { id: "electronics", label: "📱 电子设备", category: "electronics", color: "#4facfe", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "book1", icon: "📖", category: "book", name: "小说" },
            { id: "book2", icon: "📘", category: "book", name: "教科书" },
            { id: "pen1", icon: "🖊️", category: "stationery", name: "钢笔" },
            { id: "pencil1", icon: "✏️", category: "stationery", name: "铅笔" },
            { id: "phone", icon: "📱", category: "electronics", name: "手机" },
            { id: "laptop", icon: "💻", category: "electronics", name: "笔记本" },
            { id: "notebook", icon: "📓", category: "book", name: "笔记本" }
        ]
    },
    kitchen: {
        name: "厨房",
        icon: "🍳",
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        zones: [
            { id: "food", label: "🥗 食材", category: "food", color: "#51cf66", x: 20, y: 50, width: 180, height: 120 },
            { id: "cookware", label: "🍳 厨具", category: "cookware", color: "#ff922b", x: 20, y: 200, width: 180, height: 120 },
            { id: "tableware", label: "🍽️ 餐具", category: "tableware", color: "#ffd43b", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "apple", icon: "🍎", category: "food", name: "苹果" },
            { id: "bread", icon: "🍞", category: "food", name: "面包" },
            { id: "egg", icon: "🥚", category: "food", name: "鸡蛋" },
            { id: "pan", icon: "🍳", category: "cookware", name: "平底锅" },
            { id: "knife", icon: "🔪", category: "cookware", name: "菜刀" },
            { id: "fork", icon: "🍴", category: "tableware", name: "叉子" },
            { id: "plate", icon: "🍽️", category: "tableware", name: "盘子" },
            { id: "cup", icon: "☕", category: "tableware", name: "杯子" }
        ]
    },
    bedroom: {
        name: "卧室",
        icon: "🛏️",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        zones: [
            { id: "clothes", label: "👔 衣服", category: "clothes", color: "#be4bdb", x: 20, y: 50, width: 180, height: 120 },
            { id: "accessories", label: "💎 饰品", category: "accessories", color: "#f783ac", x: 20, y: 200, width: 180, height: 120 },
            { id: "bedroom_items", label: "🛏️ 卧室用品", category: "bedroom_item", color: "#74c0fc", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "shirt", icon: "👔", category: "clothes", name: "衬衫" },
            { id: "dress", icon: "👗", category: "clothes", name: "裙子" },
            { id: "hat", icon: "🎩", category: "clothes", name: "帽子" },
            { id: "ring", icon: "💍", category: "accessories", name: "戒指" },
            { id: "necklace", icon: "📿", category: "accessories", name: "项链" },
            { id: "watch", icon: "⌚", category: "accessories", name: "手表" },
            { id: "pillow", icon: "🛏️", category: "bedroom_item", name: "枕头" },
            { id: "lamp", icon: "💡", category: "bedroom_item", name: "台灯" },
            { id: "alarm", icon: "⏰", category: "bedroom_item", name: "闹钟" }
        ]
    },
    office: {
        name: "办公室",
        icon: "💼",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        zones: [
            { id: "documents", label: "📄 文件", category: "document", color: "#20c997", x: 20, y: 50, width: 180, height: 120 },
            { id: "office_supplies", label: "📎 办公用品", category: "office_supply", color: "#fab005", x: 20, y: 200, width: 180, height: 120 },
            { id: "tech_gear", label: "🖥️ 科技设备", category: "tech_gear", color: "#f06595", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "paper", icon: "📄", category: "document", name: "文件" },
            { id: "folder", icon: "📁", category: "document", name: "文件夹" },
            { id: "envelope", icon: "✉️", category: "document", name: "信封" },
            { id: "clip", icon: "📎", category: "office_supply", name: "回形针" },
            { id: "stapler", icon: "📎", category: "office_supply", name: "订书机" },
            { id: "monitor", icon: "🖥️", category: "tech_gear", name: "显示器" },
            { id: "keyboard", icon: "⌨️", category: "tech_gear", name: "键盘" },
            { id: "mouse", icon: "🖱️", category: "tech_gear", name: "鼠标" },
            { id: "printer", icon: "🖨️", category: "tech_gear", name: "打印机" }
        ]
    }
};

class SoundManager {
    constructor() {
        this.audioContext = null;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {
            console.log("音频不可用");
        }
    }

    playTone(frequency, duration, type = 'sine', volume = 0.3) {
        this.init();
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playPickup() {
        this.playTone(800, 0.1, 'sine', 0.2);
        setTimeout(() => this.playTone(1000, 0.1, 'sine', 0.15), 50);
    }

    playDrag() {
        this.playTone(200, 0.05, 'triangle', 0.1);
    }

    playDrop() {
        this.playTone(400, 0.15, 'sine', 0.25);
    }

    playSuccess() {
        this.init();
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, this.audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, this.audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }

    playError() {
        this.init();
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.2);
    }

    playCombo() {
        this.playTone(600, 0.1, 'sine', 0.2);
        setTimeout(() => this.playTone(800, 0.1, 'sine', 0.2), 80);
        setTimeout(() => this.playTone(1000, 0.15, 'sine', 0.25), 160);
    }

    playComplete() {
        this.init();
        if (!this.audioContext) return;
        
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.3);
            }, index * 150);
        });
    }

    playLevelUp() {
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, index) => {
            setTimeout(() => {
                this.playTone(freq, 0.3, 'sine', 0.3);
            }, index * 100);
        });
    }
}

class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
    }

    createParticle(x, y, options = {}) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const {
            color = '#ff6b6b',
            size = 8,
            lifetime = 1000,
            velocityX = (Math.random() - 0.5) * 10,
            velocityY = (Math.random() - 0.5) * 10 - 5,
            gravity = 0.3,
            shape = 'circle'
        } = options;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = shape === 'circle' ? '50%' : '0';
        particle.style.opacity = '1';
        
        this.container.appendChild(particle);
        
        const startTime = Date.now();
        let posX = x;
        let posY = y;
        let velX = velocityX;
        let velY = velocityY;
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / lifetime;
            
            if (progress >= 1) {
                particle.remove();
                return;
            }
            
            velY += gravity;
            posX += velX;
            posY += velY;
            
            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;
            particle.style.opacity = 1 - progress;
            particle.style.transform = `scale(${1 - progress * 0.5})`;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    }

    createExplosion(x, y, count = 20, colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff']) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = 3 + Math.random() * 7;
            
            this.createParticle(x, y, {
                color: colors[Math.floor(Math.random() * colors.length)],
                size: 4 + Math.random() * 8,
                velocityX: Math.cos(angle) * speed,
                velocityY: Math.sin(angle) * speed,
                lifetime: 800 + Math.random() * 400
            });
        }
    }

    createSparkle(x, y, count = 10) {
        for (let i = 0; i < count; i++) {
            this.createParticle(x, y, {
                color: '#ffd700',
                size: 3 + Math.random() * 5,
                velocityX: (Math.random() - 0.5) * 6,
                velocityY: -Math.random() * 8 - 2,
                gravity: 0.2,
                lifetime: 600 + Math.random() * 400
            });
        }
    }

    createConfetti(x, y, count = 30) {
        const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff9ff3', '#54a0ff'];
        for (let i = 0; i < count; i++) {
            this.createParticle(x, y, {
                color: colors[Math.floor(Math.random() * colors.length)],
                size: 6 + Math.random() * 8,
                velocityX: (Math.random() - 0.5) * 15,
                velocityY: -Math.random() * 15 - 5,
                gravity: 0.15,
                shape: Math.random() > 0.5 ? 'circle' : 'square',
                lifetime: 1500 + Math.random() * 1000
            });
        }
    }
}

const levels = {
    easy: {
        name: "简单",
        description: "入门级，适合新手",
        targetTime: 120,
        maxMistakes: 5,
        scenes: ["desk", "kitchen"]
    },
    medium: {
        name: "中等",
        description: "需要一些技巧",
        targetTime: 90,
        maxMistakes: 3,
        scenes: ["desk", "kitchen", "bedroom"]
    },
    hard: {
        name: "困难",
        description: "挑战你的速度",
        targetTime: 60,
        maxMistakes: 2,
        scenes: ["bedroom", "office", "wardrobe", "library"]
    },
    expert: {
        name: "专家",
        description: "只有真正的整理大师才能通过",
        targetTime: 45,
        maxMistakes: 1,
        scenes: ["wardrobe", "library", "workshop"]
    },
    master: {
        name: "大师",
        description: "人生整理师的终极考验",
        targetTime: 30,
        maxMistakes: 0,
        scenes: ["wardrobe", "library", "workshop", "garden"]
    }
};

const themes = {
    default: {
        name: "默认",
        description: "经典治愈系风格",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        headerGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    lifeOrganizer: {
        name: "人生整理师",
        description: "让生活井井有条",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        headerGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        icon: "🧘"
    },
    colorOrganizer: {
        name: "色彩整顿师",
        description: "用色彩点亮生活",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        headerGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        icon: "🎨"
    },
    minimalist: {
        name: "极简主义",
        description: "少即是多",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        headerGradient: "linear-gradient(135deg, #434343 0%, #000000 100%)",
        icon: "◽"
    },
    nature: {
        name: "自然疗愈",
        description: "回归自然的宁静",
        background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        headerGradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        icon: "🌿"
    }
};

const additionalScenes = {
    wardrobe: {
        name: "衣柜",
        icon: "👔",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        zones: [
            { id: "tops", label: "👕 上衣", category: "top", color: "#ff6b6b", x: 20, y: 50, width: 180, height: 120 },
            { id: "bottoms", label: "👖 下装", category: "bottom", color: "#4ecdc4", x: 20, y: 200, width: 180, height: 120 },
            { id: "accessories", label: "💎 配饰", category: "accessory", color: "#45b7d1", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "tshirt", icon: "👕", category: "top", name: "T恤" },
            { id: "shirt2", icon: "👔", category: "top", name: "衬衫" },
            { id: "sweater", icon: "🧥", category: "top", name: "毛衣" },
            { id: "pants", icon: "👖", category: "bottom", name: "裤子" },
            { id: "skirt", icon: "👗", category: "bottom", name: "裙子" },
            { id: "shorts", icon: "🩳", category: "bottom", name: "短裤" },
            { id: "hat2", icon: "🎩", category: "accessory", name: "帽子" },
            { id: "scarf", icon: "🧣", category: "accessory", name: "围巾" },
            { id: "gloves", icon: "🧤", category: "accessory", name: "手套" },
            { id: "belt", icon: "👜", category: "accessory", name: "包包" }
        ]
    },
    library: {
        name: "书房",
        icon: "📚",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        zones: [
            { id: "fiction", label: "📖 小说", category: "fiction", color: "#ff6b6b", x: 20, y: 50, width: 180, height: 120 },
            { id: "study", label: "📘 学习", category: "study", color: "#4ecdc4", x: 20, y: 200, width: 180, height: 120 },
            { id: "reference", label: "📙 参考", category: "reference", color: "#45b7d1", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "novel", icon: "📖", category: "fiction", name: "小说" },
            { id: "poetry", icon: "📚", category: "fiction", name: "诗集" },
            { id: "biography", icon: "📕", category: "fiction", name: "传记" },
            { id: "textbook", icon: "📘", category: "study", name: "教科书" },
            { id: "notebook2", icon: "📓", category: "study", name: "笔记本" },
            { id: "workbook", icon: "📒", category: "study", name: "练习册" },
            { id: "dictionary", icon: "📙", category: "reference", name: "字典" },
            { id: "encyclopedia", icon: "📚", category: "reference", name: "百科全书" },
            { id: "atlas", icon: "🗺️", category: "reference", name: "地图集" }
        ]
    },
    workshop: {
        name: "工作室",
        icon: "🔧",
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        zones: [
            { id: "tools", label: "🔧 工具", category: "tool", color: "#ff6b6b", x: 20, y: 50, width: 180, height: 120 },
            { id: "materials", label: "📦 材料", category: "material", color: "#4ecdc4", x: 20, y: 200, width: 180, height: 120 },
            { id: "safety", label: "🛡️ 安全", category: "safety", color: "#45b7d1", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "hammer", icon: "🔨", category: "tool", name: "锤子" },
            { id: "screwdriver", icon: "🪛", category: "tool", name: "螺丝刀" },
            { id: "wrench", icon: "🔧", category: "tool", name: "扳手" },
            { id: "pliers", icon: "🗜️", category: "tool", name: "钳子" },
            { id: "wood", icon: "🪵", category: "material", name: "木材" },
            { id: "nails", icon: "📌", category: "material", name: "钉子" },
            { id: "screws", icon: "🔩", category: "material", name: "螺丝" },
            { id: "gloves2", icon: "🧤", category: "safety", name: "手套" },
            { id: "goggles", icon: "🥽", category: "safety", name: "护目镜" }
        ]
    },
    garden: {
        name: "花园",
        icon: "🌻",
        background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        zones: [
            { id: "plants", label: "🌱 植物", category: "plant", color: "#51cf66", x: 20, y: 50, width: 180, height: 120 },
            { id: "gardening", label: "🌿 园艺工具", category: "gardening", color: "#ff922b", x: 20, y: 200, width: 180, height: 120 },
            { id: "decorations", label: "🏵️ 装饰", category: "decoration", color: "#ffd43b", x: 20, y: 350, width: 180, height: 120 }
        ],
        items: [
            { id: "flower", icon: "🌸", category: "plant", name: "花朵" },
            { id: "tree", icon: "🌳", category: "plant", name: "树苗" },
            { id: "seed", icon: "🌱", category: "plant", name: "种子" },
            { id: "trowel", icon: "🪴", category: "gardening", name: "小铲子" },
            { id: "watering", icon: "💧", category: "gardening", name: "水壶" },
            { id: "shovel", icon: "⛏️", category: "gardening", name: "铲子" },
            { id: "statue", icon: "🗿", category: "decoration", name: "雕像" },
            { id: "fountain", icon: "⛲", category: "decoration", name: "喷泉" },
            { id: "bench", icon: "🪑", category: "decoration", name: "长椅" }
        ]
    }
};

Object.assign(scenes, additionalScenes);

class MindfulSortGame {
    constructor() {
        this.currentScene = "desk";
        this.currentLevel = "easy";
        this.currentTheme = "default";
        this.items = [];
        this.zones = [];
        this.startTime = null;
        this.timerInterval = null;
        this.soundManager = new SoundManager();
        this.particleSystem = null;
        this.placedItems = new Set();
        this.draggingItem = null;
        this.dragOffsetX = 0;
        this.dragOffsetY = 0;
        this.mistakes = 0;
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.lastDragTime = 0;
        this.isAnimatingBackground = false;
        
        this.initElements();
        this.initParticleSystem();
        this.initEventListeners();
        this.loadScene(this.currentScene);
    }

    initElements() {
        this.gameArea = document.getElementById('gameArea');
        this.itemsContainer = document.getElementById('itemsContainer');
        this.zonesContainer = document.getElementById('zonesContainer');
        this.timerElement = document.querySelector('.timer');
        this.sceneNameElement = document.querySelector('.scene-name');
        this.sceneBackground = document.getElementById('sceneBackground');
        this.completionModal = document.getElementById('completionModal');
        this.finalTimeElement = document.getElementById('finalTime');
        this.scoreElement = document.querySelector('.score');
        this.comboElement = document.querySelector('.combo');
        this.mistakesElement = document.querySelector('.mistakes');
        
        if (!this.scoreElement) {
            this.scoreElement = document.createElement('span');
            this.scoreElement.className = 'score';
            this.scoreElement.textContent = '⭐ 0';
        }
        
        if (!this.comboElement) {
            this.comboElement = document.createElement('span');
            this.comboElement.className = 'combo';
            this.comboElement.textContent = '🔥 0';
        }
        
        if (!this.mistakesElement) {
            this.mistakesElement = document.createElement('span');
            this.mistakesElement.className = 'mistakes';
            this.mistakesElement.textContent = '❌ 0';
        }
        
        const gameInfo = document.querySelector('.game-info');
        if (gameInfo) {
            gameInfo.appendChild(this.scoreElement);
            gameInfo.appendChild(this.comboElement);
            gameInfo.appendChild(this.mistakesElement);
        }
    }

    initParticleSystem() {
        if (this.itemsContainer) {
            this.particleSystem = new ParticleSystem(this.itemsContainer);
        }
    }

    initEventListeners() {
        document.querySelectorAll('.scene-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const scene = btn.dataset.scene;
                if (scene !== this.currentScene) {
                    this.loadScene(scene);
                }
            });
        });

        document.getElementById('restartBtn').addEventListener('click', () => {
            this.loadScene(this.currentScene);
        });

        document.getElementById('hintBtn').addEventListener('click', () => {
            this.showHint();
        });

        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.hideCompletionModal();
            this.loadScene(this.currentScene);
        });

        document.getElementById('changeSceneBtn').addEventListener('click', () => {
            this.hideCompletionModal();
        });

        this.gameArea.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.gameArea.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.gameArea.addEventListener('mouseleave', (e) => this.handleMouseUp(e));

        this.gameArea.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        this.gameArea.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    }

    loadScene(sceneId) {
        this.currentScene = sceneId;
        const scene = scenes[sceneId];
        
        this.stopTimer();
        this.placedItems.clear();
        this.mistakes = 0;
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        
        this.updateScoreDisplay();
        this.updateComboDisplay();
        this.updateMistakesDisplay();
        
        document.querySelectorAll('.scene-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.scene === sceneId) {
                btn.classList.add('active');
            }
        });
        
        this.sceneNameElement.textContent = `场景：${scene.name}`;
        this.sceneBackground.style.background = scene.background;
        
        this.itemsContainer.innerHTML = '';
        this.zonesContainer.innerHTML = '';
        
        if (!this.particleSystem && this.itemsContainer) {
            this.particleSystem = new ParticleSystem(this.itemsContainer);
        }
        
        this.zones = scene.zones.map(zone => ({
            ...zone,
            element: this.createZoneElement(zone),
            items: []
        }));
        
        const gameAreaRect = this.gameArea.getBoundingClientRect();
        const rightAreaX = 220;
        const rightAreaWidth = gameAreaRect.width - rightAreaX - 40;
        
        const shuffledItems = [...scene.items].sort(() => Math.random() - 0.5);
        this.items = shuffledItems.map((item, index) => {
            const element = this.createItemElement(item);
            
            const row = Math.floor(index / 3);
            const col = index % 3;
            const itemWidth = 80;
            const itemHeight = 80;
            const spacingX = (rightAreaWidth - 3 * itemWidth) / 2;
            const spacingY = 20;
            
            const x = rightAreaX + col * (itemWidth + spacingX) + Math.random() * 40 - 20;
            const y = 50 + row * (itemHeight + spacingY) + Math.random() * 30 - 15;
            
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            element.style.width = `${itemWidth}px`;
            element.style.height = `${itemHeight}px`;
            
            return {
                ...item,
                element,
                originalX: x,
                originalY: y,
                placed: false,
                zoneId: null
            };
        });
        
        this.startTimer();
    }

    updateScoreDisplay() {
        if (this.scoreElement) {
            this.scoreElement.textContent = `⭐ ${this.score}`;
        }
    }

    updateComboDisplay() {
        if (this.comboElement) {
            this.comboElement.textContent = `🔥 ${this.combo}`;
            if (this.combo > 0) {
                this.comboElement.classList.add('active');
            } else {
                this.comboElement.classList.remove('active');
            }
        }
    }

    updateMistakesDisplay() {
        if (this.mistakesElement) {
            this.mistakesElement.textContent = `❌ ${this.mistakes}`;
        }
    }

    calculateStars() {
        const level = levels[this.currentLevel] || levels.easy;
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        
        let stars = 0;
        
        if (elapsed <= level.targetTime) {
            stars++;
        }
        if (elapsed <= level.targetTime * 0.75) {
            stars++;
        }
        if (elapsed <= level.targetTime * 0.5) {
            stars++;
        }
        
        if (this.mistakes <= level.maxMistakes) {
            stars = Math.min(3, stars + 1);
        }
        if (this.mistakes === 0) {
            stars = 3;
        }
        
        if (this.maxCombo >= 5) {
            stars = Math.min(3, stars + 1);
        }
        
        return Math.min(3, stars);
    }

    createZoneElement(zone) {
        const element = document.createElement('div');
        element.className = 'zone';
        element.dataset.zoneId = zone.id;
        element.dataset.category = zone.category;
        
        element.style.left = `${zone.x}px`;
        element.style.top = `${zone.y}px`;
        element.style.width = `${zone.width}px`;
        element.style.height = `${zone.height}px`;
        element.style.borderColor = zone.color;
        element.style.color = zone.color;
        
        element.innerHTML = `
            <span class="zone-label">${zone.label}</span>
        `;
        
        this.zonesContainer.appendChild(element);
        return element;
    }

    createItemElement(item) {
        const element = document.createElement('div');
        element.className = 'item';
        element.dataset.itemId = item.id;
        element.dataset.category = item.category;
        
        const colors = {
            book: '#e8daef',
            stationery: '#d5e8d4',
            electronics: '#dae8fc',
            food: '#ffe6cc',
            cookware: '#f8cecc',
            tableware: '#fff2cc',
            clothes: '#e1d5e7',
            accessories: '#fdebd0',
            bedroom_item: '#d0e1f9',
            document: '#d5f4e6',
            office_supply: '#fef9e7',
            tech_gear: '#fadbd8'
        };
        
        element.style.background = colors[item.category] || '#ffffff';
        
        element.innerHTML = `
            <span class="item-icon">${item.icon}</span>
        `;
        
        element.addEventListener('mousedown', (e) => this.handleMouseDown(e, element));
        element.addEventListener('touchstart', (e) => this.handleTouchStart(e, element), { passive: false });
        
        this.itemsContainer.appendChild(element);
        return element;
    }

    handleMouseDown(e, element) {
        e.preventDefault();
        const item = this.items.find(i => i.element === element);
        if (!item || item.placed) return;
        
        this.soundManager.init();
        this.soundManager.playPickup();
        this.draggingItem = item;
        element.classList.add('dragging');
        
        const rect = element.getBoundingClientRect();
        const areaRect = this.gameArea.getBoundingClientRect();
        
        this.dragOffsetX = e.clientX - rect.left;
        this.dragOffsetY = e.clientY - rect.top;
        
        if (this.particleSystem) {
            const itemRect = element.getBoundingClientRect();
            const gameRect = this.gameArea.getBoundingClientRect();
            const centerX = itemRect.left + itemRect.width / 2 - gameRect.left;
            const centerY = itemRect.top + itemRect.height / 2 - gameRect.top;
            this.particleSystem.createSparkle(centerX, centerY, 8);
        }
    }

    handleMouseMove(e) {
        if (!this.draggingItem) return;
        
        const now = Date.now();
        if (now - this.lastDragTime > 100) {
            this.soundManager.playDrag();
            this.lastDragTime = now;
        }
        
        const areaRect = this.gameArea.getBoundingClientRect();
        let x = e.clientX - areaRect.left - this.dragOffsetX;
        let y = e.clientY - areaRect.top - this.dragOffsetY;
        
        x = Math.max(0, Math.min(x, areaRect.width - this.draggingItem.element.offsetWidth));
        y = Math.max(0, Math.min(y, areaRect.height - this.draggingItem.element.offsetHeight));
        
        this.draggingItem.element.style.left = `${x}px`;
        this.draggingItem.element.style.top = `${y}px`;
        
        this.checkZoneHover();
    }

    handleMouseUp(e) {
        if (!this.draggingItem) return;
        
        this.soundManager.playDrop();
        this.draggingItem.element.classList.remove('dragging');
        
        const zone = this.getMatchingZone(this.draggingItem);
        if (zone) {
            this.placeItem(this.draggingItem, zone);
        } else {
            this.returnItemToOriginal(this.draggingItem);
        }
        
        this.clearZoneHighlights();
        this.draggingItem = null;
    }

    handleTouchStart(e, element) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.handleMouseDown(mouseEvent, element);
    }

    handleTouchMove(e) {
        if (!this.draggingItem) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.handleMouseMove(mouseEvent);
    }

    handleTouchEnd(e) {
        this.handleMouseUp(e);
    }

    checkZoneHover() {
        this.clearZoneHighlights();
        
        if (!this.draggingItem) return;
        
        const matchingZone = this.zones.find(zone => 
            zone.category === this.draggingItem.category &&
            this.isColliding(this.draggingItem.element, zone.element)
        );
        
        if (matchingZone) {
            matchingZone.element.classList.add('highlight');
        }
    }

    clearZoneHighlights() {
        this.zones.forEach(zone => {
            zone.element.classList.remove('highlight');
        });
    }

    isColliding(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        
        const centerX1 = rect1.left + rect1.width / 2;
        const centerY1 = rect1.top + rect1.height / 2;
        
        return (
            centerX1 >= rect2.left &&
            centerX1 <= rect2.right &&
            centerY1 >= rect2.top &&
            centerY1 <= rect2.bottom
        );
    }

    getMatchingZone(item) {
        return this.zones.find(zone => 
            zone.category === item.category &&
            this.isColliding(item.element, zone.element)
        );
    }

    placeItem(item, zone) {
        item.placed = true;
        this.placedItems.add(item.id);
        item.zoneId = zone.id;
        
        const zoneData = this.zones.find(z => z.id === zone.id);
        if (zoneData) {
            zoneData.items.push(item.id);
        }
        
        this.combo++;
        if (this.combo > this.maxCombo) {
            this.maxCombo = this.combo;
        }
        
        let baseScore = 100;
        let comboBonus = 0;
        
        if (this.combo >= 3) {
            comboBonus = this.combo * 50;
            this.soundManager.playCombo();
        }
        
        const totalScore = baseScore + comboBonus;
        this.score += totalScore;
        
        if (this.combo >= 3) {
            this.showComboPopup(item.element, this.combo);
        }
        
        this.updateScoreDisplay();
        this.updateComboDisplay();
        
        this.soundManager.playSuccess();
        item.element.classList.add('correct');
        
        setTimeout(() => {
            item.element.classList.remove('correct');
        }, 500);
        
        if (this.particleSystem) {
            const itemRect = item.element.getBoundingClientRect();
            const gameRect = this.gameArea.getBoundingClientRect();
            const centerX = itemRect.left + itemRect.width / 2 - gameRect.left;
            const centerY = itemRect.top + itemRect.height / 2 - gameRect.top;
            
            this.particleSystem.createExplosion(centerX, centerY, 15);
            this.particleSystem.createSparkle(centerX, centerY, 10);
        }
        
        const zoneRect = zone.element.getBoundingClientRect();
        const areaRect = this.gameArea.getBoundingClientRect();
        
        const itemsInZone = Array.from(this.placedItems).filter(id => {
            const placedItem = this.items.find(i => i.id === id);
            return placedItem && placedItem.category === item.category;
        });
        
        const index = itemsInZone.length - 1;
        const itemsPerRow = 2;
        const row = Math.floor(index / itemsPerRow);
        const col = index % itemsPerRow;
        
        const itemSize = 40;
        const spacing = 10;
        const margin = 10;
        
        const x = (zoneRect.left - areaRect.left) + margin + col * (itemSize + spacing);
        const y = (zoneRect.top - areaRect.top) + 35 + row * (itemSize + spacing);
        
        item.element.style.transition = 'all 0.3s ease';
        item.element.style.left = `${x}px`;
        item.element.style.top = `${y}px`;
        item.element.style.width = `${itemSize}px`;
        item.element.style.height = `${itemSize}px`;
        
        item.originalX = x;
        item.originalY = y;
        
        item.element.querySelector('.item-icon').style.fontSize = '1.5rem';
        
        item.element.style.cursor = 'default';
        item.element.style.pointerEvents = 'none';
        item.element.style.opacity = '0.8';
        item.element.style.boxShadow = 'none';
        
        setTimeout(() => {
            item.element.style.transition = '';
        }, 300);
        
        this.arrangeZoneItems(zoneData);
        
        this.checkWinCondition();
    }

    arrangeZoneItems(zoneData) {
        if (!zoneData || zoneData.items.length === 0) return;
        
        const zoneRect = zoneData.element.getBoundingClientRect();
        const areaRect = this.gameArea.getBoundingClientRect();
        const itemSize = 40;
        const spacing = 10;
        const margin = 10;
        const itemsPerRow = 2;
        
        zoneData.items.forEach((itemId, index) => {
            const item = this.items.find(i => i.id === itemId);
            if (!item || !item.placed) return;
            
            const row = Math.floor(index / itemsPerRow);
            const col = index % itemsPerRow;
            
            const x = (zoneRect.left - areaRect.left) + margin + col * (itemSize + spacing);
            const y = (zoneRect.top - areaRect.top) + 35 + row * (itemSize + spacing);
            
            item.element.style.transition = 'all 0.3s ease';
            item.element.style.left = `${x}px`;
            item.element.style.top = `${y}px`;
            
            setTimeout(() => {
                item.element.style.transition = '';
            }, 300);
        });
    }

    showComboPopup(element, combo) {
        const popup = document.createElement('div');
        popup.className = 'combo-popup';
        popup.textContent = `${combo}连击!`;
        
        const rect = element.getBoundingClientRect();
        const gameRect = this.gameArea.getBoundingClientRect();
        
        popup.style.left = `${rect.left - gameRect.left + rect.width / 2}px`;
        popup.style.top = `${rect.top - gameRect.top - 20}px`;
        
        this.itemsContainer.appendChild(popup);
        
        setTimeout(() => {
            popup.remove();
        }, 1500);
    }

    returnItemToOriginal(item) {
        if (item.placed) return;
        
        this.mistakes++;
        this.combo = 0;
        
        this.updateMistakesDisplay();
        this.updateComboDisplay();
        
        this.soundManager.playError();
        item.element.classList.add('wrong');
        
        if (this.particleSystem) {
            const itemRect = item.element.getBoundingClientRect();
            const gameRect = this.gameArea.getBoundingClientRect();
            const centerX = itemRect.left + itemRect.width / 2 - gameRect.left;
            const centerY = itemRect.top + itemRect.height / 2 - gameRect.top;
            
            for (let i = 0; i < 8; i++) {
                this.particleSystem.createParticle(centerX, centerY, {
                    color: '#ff4444',
                    size: 5 + Math.random() * 5,
                    velocityX: (Math.random() - 0.5) * 8,
                    velocityY: (Math.random() - 0.5) * 8,
                    lifetime: 600
                });
            }
        }
        
        setTimeout(() => {
            item.element.classList.remove('wrong');
        }, 500);
        
        item.element.style.transition = 'all 0.4s ease';
        item.element.style.left = `${item.originalX}px`;
        item.element.style.top = `${item.originalY}px`;
        
        setTimeout(() => {
            item.element.style.transition = '';
        }, 400);
    }

    showHint() {
        const unplacedItems = this.items.filter(item => !item.placed);
        if (unplacedItems.length === 0) return;
        
        const randomItem = unplacedItems[Math.floor(Math.random() * unplacedItems.length)];
        const matchingZone = this.zones.find(zone => zone.category === randomItem.category);
        
        if (matchingZone) {
            randomItem.element.style.transition = 'all 0.3s ease';
            randomItem.element.style.transform = 'scale(1.2)';
            matchingZone.element.style.transition = 'all 0.3s ease';
            matchingZone.element.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                randomItem.element.style.transform = '';
                matchingZone.element.style.transform = '';
                randomItem.element.style.transition = '';
                matchingZone.element.style.transition = '';
            }, 1000);
        }
    }

    startTimer() {
        this.startTime = Date.now();
        this.updateTimer();
        this.timerInterval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    updateTimer() {
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        this.timerElement.textContent = `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    getElapsedTime() {
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    checkWinCondition() {
        if (this.placedItems.size === this.items.length) {
            this.stopTimer();
            this.soundManager.playComplete();
            this.soundManager.playLevelUp();
            
            if (this.particleSystem) {
                const gameRect = this.gameArea.getBoundingClientRect();
                const centerX = gameRect.width / 2;
                const centerY = gameRect.height / 2;
                
                this.particleSystem.createConfetti(centerX, centerY, 50);
                
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        const randomX = Math.random() * gameRect.width;
                        const randomY = Math.random() * gameRect.height;
                        this.particleSystem.createExplosion(randomX, randomY, 15);
                    }, i * 300);
                }
            }
            
            this.animateBackgroundClear();
            
            setTimeout(() => {
                this.showCompletionModal();
            }, 1500);
        }
    }

    animateBackgroundClear() {
        if (this.isAnimatingBackground) return;
        this.isAnimatingBackground = true;
        
        const originalBackground = this.sceneBackground.style.background;
        
        let brightness = 1;
        const animate = () => {
            brightness += 0.02;
            this.sceneBackground.style.filter = `brightness(${brightness})`;
            
            if (brightness < 1.5) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    this.sceneBackground.style.filter = '';
                    this.isAnimatingBackground = false;
                }, 500);
            }
        };
        
        requestAnimationFrame(animate);
        
        const sunburst = document.createElement('div');
        sunburst.className = 'sunburst';
        this.sceneBackground.appendChild(sunburst);
        
        setTimeout(() => {
            sunburst.remove();
        }, 2000);
    }

    showCompletionModal() {
        const stars = this.calculateStars();
        const starDisplay = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
        
        const modalStats = this.completionModal.querySelector('.completion-stats');
        if (modalStats) {
            modalStats.innerHTML = `
                <div class="stat-item">
                    <span class="stat-label">用时</span>
                    <span class="stat-value" id="finalTime">${this.getElapsedTime()}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">得分</span>
                    <span class="stat-value">${this.score}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">星级</span>
                    <span class="stat-value stars-display">${starDisplay}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">最高连击</span>
                    <span class="stat-value">${this.maxCombo}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">失误次数</span>
                    <span class="stat-value">${this.mistakes}</span>
                </div>
            `;
        }
        
        this.completionModal.classList.add('show');
    }

    hideCompletionModal() {
        this.completionModal.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MindfulSortGame();
});
