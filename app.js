// 示例产品数据
const products = [
    {
        barcode: "50272",
        name: "企鹅 PENGUIN STYLE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "企鹅 PENGUIN STYLE", packaging: "500g x 20pkt", itemCode: "50272" },
            { type: "PKT", name: "企鹅 PENGUIN STYLE", packaging: "500g/pkt", itemCode: "50273" }
        ],
        scanned: false
    },
    {
        barcode: "50284",
        name: "竹蟹棒 CRAB FLAVOURED STICK FISH ROLL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "竹蟹棒 CRAB FLAVOURED STICK FISH ROLL", packaging: "500g x 20pkt", itemCode: "50284" },
            { type: "PKT", name: "竹蟹棒  CRAB FLAVOURED STICK FISH ROLL", packaging: "500g/pkt", itemCode: "50285" }
        ],
        scanned: false
    },
    {
        barcode: "50282",
        name: "棒棒卷 KANI MAKI",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "棒棒卷 KANI MAKI", packaging: "500g x 20pkt", itemCode: "50282" },
            { type: "PKT", name: "棒棒卷 KANI MAKI", packaging: "500g/pkt", itemCode: "50283" }
        ],
        scanned: false
    },
    {
        barcode: "50278",
        name: "卡通鱼饼 ZUZU FISH CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "卡通鱼饼 ZUZU FISH CAKE", packaging: "500g x 20pkt", itemCode: "50278" },
            { type: "PKT", name: "卡通鱼饼 ZUZU FISH CAKE", packaging: "500g/pkt", itemCode: "50279" }
        ],
        scanned: false
    },
    {
        barcode: "40648",
        name: "彩虹鱼饼 FISH CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "彩虹鱼饼 FISH CAKE", packaging: "500g x 20pkt", itemCode: "40648" },
            { type: "PKT", name: "彩虹鱼饼 FISH CAKE", packaging: "500g/pkt", itemCode: "40649" }
        ],
        scanned: false
    },
    {
        barcode: "50264",
        name: "(泰)菜丸 VEGETABLE FISH BALL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "VEGETABLE FISH BALL", packaging: "500g x 20pkt", itemCode: "50264" },
            { type: "PKT", name: "VEGETABLE FISH BALL", packaging: "500g/pkt", itemCode: "50265" }
        ],
        scanned: false
    },
    {
        barcode: "50266",
        name: "熊猫鱼饼 PANDY FISH",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "熊猫鱼饼 PANDY FISH", packaging: "500g x 20pkt", itemCode: "50266" },
            { type: "PKT", name: "熊猫鱼饼 PANDY FISH", packaging: "500g/pkt", itemCode: "50267" }
        ],
        scanned: false
    },
    {
        barcode: "50268",
        name: "可爱鱼 CARTOON FISH",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "CARTOON FISH", packaging: "500g x 20pkt", itemCode: "50268" },
            { type: "PKT", name: "CARTOON FISH", packaging: "500g/pkt", itemCode: "50269" }
        ],
        scanned: false
    },
    {
        barcode: "50270",
        name: "果香鱼饼 FRUITY FISH CAKE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "FRUITY FISH CAKE", packaging: "500g x 20pkt", itemCode: "50270" },
            { type: "PKT", name: "FRUITY FISH CAKE", packaging: "500g/pkt", itemCode: "50271" }
        ],
        scanned: false
    },
    {
        barcode: "50200",
        name: "虾蕾 SHRIMP BOMB",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "虾蕾 SHRIMP BOMB", packaging: "250g x 40pkt", itemCode: "50200" },
            { type: "PKT", name: "虾蕾 SHRIMP BOMB", packaging: "250g/pkt", itemCode: "50201" }
        ],
        scanned: false
    },
    {
        barcode: "50702",
        name: "春卷 SPRING ROLL",
        packaging: "8pkts x 10's",
        skus: [
            { type: "CTN", name: "春卷 SPRING ROLL", packaging: "8pkts x 10's", itemCode: "50702" },
            { type: "PKT", name: "春卷 SPRING ROLL", packaging: "10's/pkt", itemCode: "50703" }
        ],
        scanned: false
    },
    {
        barcode: "61006",
        name: "(E)四色卷 FOUR COLOUR ROLL",
        packaging: "5's x 15pkt",
        skus: [
            { type: "CTN", name: "(E)四色卷 FOUR COLOUR ROLL", packaging: "5's x 15pkt", itemCode: "61006" },
            { type: "PKT", name: "(E)四色卷 FOUR COLOUR ROLL", packaging: "5's/pkt", itemCode: "62006" }
        ],
        scanned: false
    },
    {
        barcode: "10903",
        name: "苏东丸 CUTTLEFISH BALL",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "苏东丸 CUTTLEFISH BALL", packaging: "1kg x 10pkt", itemCode: "NA1" },
            { type: "PKT", name: "苏东丸 CUTTLEFISH BALL", packaging: "1kg/pkt", itemCode: "10903" }
        ],
        scanned: false
    },
    {
        barcode: "25000",
        name: "海鲜条 SEAFOOD STICK",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "海鲜条 SEAFOOD STICK", packaging: "250g x 40pkt", itemCode: "25000" },
            { type: "PKT", name: "海鲜条 SEAFOOD STICK", packaging: "250g/pkt", itemCode: "25001" }
        ],
        scanned: false
    },
    {
        barcode: "30100",
        name: "干贝 SURIMI SCALLOP",
        packaging: "50's x 10pkt",
        skus: [
            { type: "CTN", name: "干贝 SURIMI SCALLOP", packaging: "50's x 10pkt", itemCode: "30100" },
            { type: "PKT", name: "干贝 SURIMI SCALLOP", packaging: "50's/pkt", itemCode: "30101" }
        ],
        scanned: false
    },
    {
        barcode: "40628",
        name: "蟹味柳 KANIMI CHUNK",
        packaging: "180g x 20pkt",
        skus: [
            { type: "CTN", name: "蟹味柳 KANIMI CHUNK", packaging: "180g x 20pkt", itemCode: "40628" },
            { type: "PKT", name: "蟹味柳 KANIMI CHUNK", packaging: "180g/pkt", itemCode: "40629" }
        ],
        scanned: false
    },
    {
        barcode: "25010",
        name: "人造蟹条 FLAVOURED CRAB STICKS",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "人造蟹条 FLAVOURED CRAB STICKS", packaging: "250g x 40pkt", itemCode: "25010" },
            { type: "PKT", name: "人造蟹条 FLAVOURED CRAB STICKS", packaging: "250g/pkt", itemCode: "25011" }
        ],
        scanned: false
    },
    {
        barcode: "40600",
        name: "人造蟹钳 IMITATION CRAB CLAW",
        packaging: "250g x 30pkt",
        skus: [
            { type: "CTN", name: "人造蟹钳 IMITATION CRAB CLAW", packaging: "250g x 30pkt", itemCode: "40600" },
            { type: "PKT", name: "人造蟹钳 IMITATION CRAB CLAW", packaging: "250g/pkt", itemCode: "40601" }
        ],
        scanned: false
    },
    {
        barcode: "50101",
        name: "(奥)蟹柳 CRAB NUGGET",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)蟹柳 CRAB NUGGET", packaging: "1kg/pkt", itemCode: "50101" }
        ],
        scanned: false
    },
    {
        barcode: "50111",
        name: "(奥)鱼蛋卷 FISH CRAB ROLL",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)鱼蛋卷 FISH CRAB ROLL", packaging: "1kg/pkt", itemCode: "50111" }
        ],
        scanned: false
    },
{
        barcode: "50131",
        name: "(奥)富贵鱼 GOLDENFISH SOLO",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)富贵鱼 GOLDENFISH SOLO", packaging: "1kg/pkt", itemCode: "50131" }
        ],
        scanned: false
    },
    {
        barcode: "50141",
        name: "(奥)三文鱼 SALMON FISH",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)三文鱼 SALMON FISH", packaging: "1kg/pkt", itemCode: "50141" }
        ],
        scanned: false
    },
    {
        barcode: "50151",
        name: "(奥)三文治豆腐 SANDWICH TOFU",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)三文治豆腐 SANDWICH TOFU", packaging: "1kg/pkt", itemCode: "50151" }
        ],
        scanned: false
    },
    {
        barcode: "50161",
        name: "(奥)半圆海鲜豆腐 SEAFOOD TOFU",
        packaging: "1kg/pkt",
        skus: [
            { type: "PKT", name: "(奥)半圆海鲜豆腐 SEAFOOD TOFU", packaging: "1kg/pkt", itemCode: "50161" }
        ],
        scanned: false
    },
    {
        barcode: "10900",
        name: "苏东丸 CUTTLEFISH BALL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "苏东丸 CUTTLEFISH BALL", packaging: "500g x 20pkt", itemCode: "10900" },
            { type: "PKT", name: "苏东丸 CUTTLEFISH BALL", packaging: "500g/pkt", itemCode: "10901" }
        ],
        scanned: false
    },
    {
        barcode: "24000",
        name: "香菇丸 MUSHROOM BALL",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "香菇丸 MUSHROOM BALL", packaging: "1kg x 10pkt", itemCode: "24000" },
            { type: "PKT", name: "香菇丸 MUSHROOM BALL", packaging: "1kg/pkt", itemCode: "24001" }
        ],
        scanned: false
    },
    {
        barcode: "24020",
        name: "香菇丸 MUSHROOM BALL (17g)",
        packaging: "200g x 40pkt",
        skus: [
            { type: "CTN", name: "香菇丸 MUSHROOM BALL (17g)", packaging: "200g x 40pkt", itemCode: "24020" },
            { type: "PKT", name: "香菇丸 MUSHROOM BALL (17g)", packaging: "200g/pkt", itemCode: "24021" }
        ],
        scanned: false
    },
    {
        barcode: "40670",
        name: "海贝 IMITATION SCALLOP",
        packaging: "250g x 40pkt",
        skus: [
            { type: "CTN", name: "海贝 IMITATION SCALLOP", packaging: "250g x 40pkt", itemCode: "40670" },
            { type: "PKT", name: "海贝 IMITATION SCALLOP", packaging: "250g/pkt", itemCode: "40671" }
        ],
        scanned: false
    },
    {
        barcode: "40650",
        name: "虾仁卷 SHRIMP ROLL",
        packaging: "320g x 28pkt",
        skus: [
            { type: "CTN", name: "虾仁卷 SHRIMP ROLL", packaging: "320g x 28pkt", itemCode: "40650" },
            { type: "PKT", name: "虾仁卷 SHRIMP ROLL", packaging: "320g/pkt", itemCode: "40651" }
        ],
        scanned: false
    },
    {
        barcode: "28034",
        name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE", packaging: "1kg x 10pkt", itemCode: "28034" },
            { type: "PKT", name: "(菜) 海鲜豆腐 SEAFOOD TOFU WITH VEGETABLE", packaging: "1kg/pkt", itemCode: "28035" }
        ],
        scanned: false
    }
];
let currentProduct = null;
let scanRecords = [];


// 初始化
window.onload = function() {
    renderProducts();
    updateProgress();
    document.getElementById('barcodeInput').focus();
}

function createCustomAlert() {
    // Create the styles
    const style = document.createElement('style');
    style.textContent = `
        .custom-alert {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 3000;
            animation: fadeIn 0.3s ease;
        }

        .custom-alert-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 300px;
            text-align: center;
            animation: slideIn 0.3s ease;
        }

        .alert-button {
            margin-top: 15px;
            padding: 8px 20px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideIn {
            from { 
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to { 
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(style);

    // Create the alert elements
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    alertDiv.id = 'customAlert';
    
    alertDiv.innerHTML = `
        <div class="custom-alert-content">
            <p id="alertMessage"></p>
            <button onclick="closeCustomAlert()" class="alert-button">确定</button>
        </div>
    `;

    // Add click handler for closing when clicking outside
    alertDiv.addEventListener('click', function(e) {
        if (e.target === alertDiv) {
            closeCustomAlert();
        }
    });

    document.body.appendChild(alertDiv);
}

// Function to show custom alert
function showCustomAlert(message) {
    // Create alert elements if they don't exist
    if (!document.getElementById('customAlert')) {
        createCustomAlert();
    }
    
    const alertEl = document.getElementById('customAlert');
    const messageEl = document.getElementById('alertMessage');
    messageEl.textContent = message;
    alertEl.style.display = 'block';
    
    // Focus the OK button
    const button = alertEl.querySelector('button');
    if (button) button.focus();
}

// Function to close custom alert
function closeCustomAlert() {
    const alertEl = document.getElementById('customAlert');
    if (alertEl) {
        alertEl.style.display = 'none';
        
        // Restore focus to barcode input if on scan page
        if (document.getElementById('scanPage').classList.contains('active')) {
            document.getElementById('barcodeInput').focus();
        }
    }
}

// 渲染产品列表
function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    
    const unscannedProducts = products.filter(p => !p.scanned);
    unscannedProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.onclick = () => showQuantityModal(product);
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.packaging}</p>
        `;
        productList.appendChild(div);
    });
}

// 搜索产品
// Search product function - now includes delay handling
let searchTimeout;
function searchProduct() {
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;

    const product = products.find(p => p.barcode === barcode);

    if (product && !product.scanned) {
        showQuantityModal(product);
    } else if (product && product.scanned) {
        showCustomAlert('此产品已经盘点过了！');
    } else {
        showCustomAlert('未找到产品！');
    }

    document.getElementById('barcodeInput').value = '';
}
// Initialize
window.onload = function() {
    renderProducts();
    updateProgress();
    setupBarcodeInput();
}

// New function to setup barcode input with auto-trigger
function setupBarcodeInput() {
    const barcodeInput = document.getElementById('barcodeInput');
    
    // Focus the input when page loads
    barcodeInput.focus();
    
    // Add input event listener for auto-triggering
    barcodeInput.addEventListener('input', function(e) {
        // Clear any existing timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        // Get the current input value
        const barcode = e.target.value.trim();
        
        // If the barcode is long enough (you can adjust this length)
        if (barcode.length >= 5) {  // Assuming minimum barcode length is 5
            // Set a small timeout to allow for complete barcode scan
            searchTimeout = setTimeout(() => {
                searchProduct();
            }, 300);  // 300ms delay, adjust as needed
        }
    });

    // Keep the Enter key functionality as backup
    barcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            searchProduct();
        }
    });
}
// 显示数量输入模态框
function showQuantityModal(product) {
    currentProduct = product;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalPackaging').textContent = product.packaging;
    
    // Check if product has box quantity
    const hasBoxQuantity = product.skus.some(sku => sku.type === "CTN");
    
    const boxQuantityInput = document.getElementById('boxQuantityInput');
    const boxQuantityLabel = boxQuantityInput.previousElementSibling;
    
    if (!hasBoxQuantity) {
        boxQuantityInput.style.display = 'none';
        boxQuantityLabel.style.display = 'none';
    } else {
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
    }
    
    document.getElementById('boxQuantityInput').value = '';
    document.getElementById('pieceQuantityInput').value = '';
    document.getElementById('quantityModal').style.display = 'block';
    
    // Focus on appropriate input based on product type
    if (hasBoxQuantity) {
        document.getElementById('boxQuantityInput').focus();
    } else {
        document.getElementById('pieceQuantityInput').focus();
    }
}
// 关闭模态框
function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('barcodeInput').focus();
}



// 检查两个时间戳是否在同一分钟内
function isSameMinute(date1, date2) {
    return Math.abs(date1 - date2) < 60000; // 60000毫秒 = 1分钟
}

// 更新进度条
function updateProgress() {
    const total = products.length;
    const scanned = products.filter(p => p.scanned).length;
    const percentage = (scanned / total) * 100;
    
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${scanned}/${total} 完成度 | Progress`;
}

// 渲染盘点记录
function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    // Use hour24 option to ensure 24-hour format
    const time = date.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return `${day}/${month}/${year} ${time}`;
}


// Updated renderRecords function
function renderRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';
    scanRecords.forEach((record, recordIndex) => {
        const div = document.createElement('div');
        div.className = 'record-group';
        
        // Format the timestamp using the new utility function
        const formattedTime = formatDateToDDMMYYYY(record.timestamp);
        let recordsHtml = `<div class="record-time">${formattedTime}</div>`;
        
        record.items.forEach((item, itemIndex) => {
            recordsHtml += `
                <div class="record-item" data-record="${recordIndex}" data-item="${itemIndex}">
                    <h3>${item.name}</h3>
                    <p>${item.packaging}</p>
                    <div class="records-quantity-group">
                        <div class="records-quantity-row">
                            <span class="records-quantity-label">箱 | CTN:</span>
                            <span class="records-quantity-value box-quantity"><strong>${item.boxQuantity}</strong></span>
                        </div>
                        <div class="records-quantity-row">
                            <span class="records-quantity-label">包 | PKT:</span>
                            <span class="records-quantity-value piece-quantity"><strong>${item.pieceQuantity}</strong></span>
                        </div>
                    </div>
                </div>
            `;
        });
        div.innerHTML = recordsHtml;
        
        // Make the div itself store the indices
        div.dataset.record = record.items[0] ? recordIndex : '';
        div.dataset.item = record.items[0] ? '0' : '';
        
        // Add double-click handler to the entire group
        div.addEventListener('dblclick', (event) => {
            // Prevent event from bubbling up
            event.stopPropagation();
            
            const recordIndex = div.dataset.record;
            const itemIndex = div.dataset.item;
            
            if (recordIndex !== '' && itemIndex !== '') {
                editRecordGroup(div, parseInt(recordIndex), parseInt(itemIndex));
            }
        });
        
        recordsList.appendChild(div);
    });
}

function editRecordGroup(groupElement, recordIndex, itemIndex) {
    // Check if already editing
    if (groupElement.classList.contains('editing')) {
        return;
    }
    
    // Add editing class for visual feedback
    groupElement.classList.add('editing');
    
    const record = scanRecords[recordIndex].items[itemIndex];
    const boxQuantitySpan = groupElement.querySelector('.box-quantity');
    const pieceQuantitySpan = groupElement.querySelector('.piece-quantity');
    
    // Create input for box quantity
    const boxInput = document.createElement('input');
    boxInput.type = 'number';
    boxInput.className = 'records-quantity-input';
    boxInput.value = record.boxQuantity;
    boxInput.min = '0';
    
    // Create input for piece quantity
    const pieceInput = document.createElement('input');
    pieceInput.type = 'number';
    pieceInput.className = 'records-quantity-input';
    pieceInput.value = record.pieceQuantity;
    pieceInput.min = '0';
    
    // Replace spans with inputs
    boxQuantitySpan.innerHTML = '';
    boxQuantitySpan.appendChild(boxInput);
    pieceQuantitySpan.innerHTML = '';
    pieceQuantitySpan.appendChild(pieceInput);
    
    // Focus first input
    boxInput.focus();
    
    function saveChanges() {
        if (!groupElement.classList.contains('editing')) {
            return; // Prevent double-saving
        }
        
        const newBoxQuantity = parseInt(boxInput.value) || record.boxQuantity;
        const newPieceQuantity = parseInt(pieceInput.value) || record.pieceQuantity;
        
        // Update data structure
        scanRecords[recordIndex].items[itemIndex].boxQuantity = newBoxQuantity;
        scanRecords[recordIndex].items[itemIndex].pieceQuantity = newPieceQuantity;
        
        // Update display
        boxQuantitySpan.innerHTML = `<strong>${newBoxQuantity}</strong>`;
        pieceQuantitySpan.innerHTML = `<strong>${newPieceQuantity}</strong>`;
        
        // Remove editing class
        groupElement.classList.remove('editing');
        
        // Remove click outside listener
        document.removeEventListener('click', handleClickOutside);
        
        // Show success message for local update
        showCustomAlert('记录已更新！');
    }
    
    // Handle input events
    boxInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            pieceInput.focus();
        }
    });
    
    pieceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveChanges();
        }
    });
    
    // Save on blur of last input
    pieceInput.addEventListener('blur', () => {
        // Small timeout to allow for double-click to work properly
        setTimeout(saveChanges, 200);
    });
    
    // Handle clicks outside
    function handleClickOutside(e) {
        if (!groupElement.contains(e.target)) {
            saveChanges();
        }
    }
    
    // Add click outside listener after a small delay to prevent immediate triggering
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 100);
}
// 显示指定页面
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}Page`).classList.add('active');
    
    if (pageName === 'scan') {
        document.getElementById('barcodeInput').focus();
    }
}

// 支持回车键搜索
document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProduct();
    }
});

// 支持回车键在数量输入框之间切换和提交
document.getElementById('boxQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('pieceQuantityInput').focus();
    }
});

document.getElementById('pieceQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitQuantity();
    }
});

async function submitToGoogleSheet() {
    const counter = document.getElementById('counterSelect').value;
    const LOCATION = 'CR1         ';  // Hardcoded location for this page
    
    if (!counter) {
        showCustomAlert('请选择盘点人员！');
        return;
    }
    
    if (scanRecords.length === 0) {
        showCustomAlert('没有可提交的记录！');
        return;
    }

    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    try {
        function convertDateFormat(dateStr) {
            const parts = dateStr.split('/');
            if (parts.length === 3) {
                return `${parts[1]}/${parts[0]}/${parts[2]}`;
            }
            return dateStr;
        }

        const data = scanRecords.flatMap(record => 
            record.items.map(item => {
                const product = products.find(p => p.name === item.name);
                const ctnSku = product.skus.find(sku => sku.type === "CTN");
                const pktSku = product.skus.find(sku => sku.type === "PKT");
                
                const [date, time] = item.timestamp.split(' ');
                
                return {
                    sheetName: LOCATION,  // Add the hardcoded location
                    date: convertDateFormat(date),
                    time: time,
                    name: item.name,
                    packaging: item.packaging,
                    boxQuantity: item.boxQuantity,
                    pieceQuantity: item.pieceQuantity,
                    ctnItemCode: ctnSku ? ctnSku.itemCode : '',
                    pktItemCode: pktSku ? pktSku.itemCode : '',
                    counter: counter
                };
            })
        );

        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showCustomAlert('数据提交成功！');
            scanRecords = [];
            renderRecords();
        } else {
            throw new Error('提交失败');
        }
    } catch (error) {
        console.error('Error:', error);
        showCustomAlert('提交失败，请重试！');
    } finally {
        loadingOverlay.style.display = 'none';
    }
}
// Also update where you create the record to store date and time separately
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;
    
    if (boxQuantity === 0 && pieceQuantity === 0) {
        showCustomAlert('请至少输入一个数量！');
        return;
    }
    
    currentProduct.scanned = true;
    
    // Create timestamp in 24-hour format
    const now = new Date();
    const date = now.toLocaleDateString(); // e.g., "11/11/2024"
    const time = now.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const record = {
        timestamp: `${date} ${time}`,
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity,
            timestamp: `${date} ${time}`
        }]
    };
    
    scanRecords.unshift(record);
    renderRecords();
    renderProducts();
    updateProgress();
    closeModal();
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/CR1-Stock-Take/service-worker.js').then(reg => {
    reg.update();
  });
}

function checkForUpdates() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) reg.update();
    });
  }
}