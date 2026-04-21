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
}

class MindfulSortGame {
    constructor() {
        this.currentScene = "desk";
        this.items = [];
        this.zones = [];
        this.startTime = null;
        this.timerInterval = null;
        this.soundManager = new SoundManager();
        this.placedItems = new Set();
        this.draggingItem = null;
        this.dragOffsetX = 0;
        this.dragOffsetY = 0;
        
        this.initElements();
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
        
        this.zones = scene.zones.map(zone => ({
            ...zone,
            element: this.createZoneElement(zone)
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
                placed: false
            };
        });
        
        this.startTimer();
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
        this.draggingItem = item;
        element.classList.add('dragging');
        
        const rect = element.getBoundingClientRect();
        const areaRect = this.gameArea.getBoundingClientRect();
        
        this.dragOffsetX = e.clientX - rect.left;
        this.dragOffsetY = e.clientY - rect.top;
    }

    handleMouseMove(e) {
        if (!this.draggingItem) return;
        
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
        
        this.soundManager.playSuccess();
        item.element.classList.add('correct');
        
        setTimeout(() => {
            item.element.classList.remove('correct');
        }, 500);
        
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
        
        this.checkWinCondition();
    }

    returnItemToOriginal(item) {
        if (item.placed) return;
        
        this.soundManager.playError();
        item.element.classList.add('wrong');
        
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
            
            setTimeout(() => {
                this.showCompletionModal();
            }, 500);
        }
    }

    showCompletionModal() {
        this.finalTimeElement.textContent = this.getElapsedTime();
        this.completionModal.classList.add('show');
    }

    hideCompletionModal() {
        this.completionModal.classList.remove('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MindfulSortGame();
});
