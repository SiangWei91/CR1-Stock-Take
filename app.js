// 示例产品数据
const products = [
    {
        barcode: "10110",
        name: "鱼饺 10粒 FISH DUMPLING 10's",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "鱼饺 FISH DUMPLING", packaging: "10's/tray", itemCode: "10110" }
        ],
        scanned: false
    },
    {
        barcode: "10210",
        name: "菜卷 10粒 FISH VEGETABLE ROLL 10's",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "菜卷 FISH VEGETABLE ROLL", packaging: "10's/tray", itemCode: "10210" }
        ],
        scanned: false
    },
    {
        barcode: "10310",
        name: "鱼卷 10粒 FISH ROLL 10's",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "鱼卷 FISH ROLL", packaging: "10's/tray", itemCode: "10310" }
        ],
        scanned: false
    },
    {
        barcode: "10410",
        name: "鱼片 10粒 FISH SLICE 10's",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "鱼片 FISH SLICE", packaging: "10's/tray", itemCode: "10410" }
        ],
        scanned: false
    },
    {
        barcode: "10100",
        name: "鱼饺 20粒 FISH DUMPLING 20's",
        packaging: "20's x 20pkt",
        skus: [
            { type: "CTN", name: "鱼饺 FISH DUMPLING", packaging: "20's x 20pkt", itemCode: "10100" },
            { type: "PKT", name: "鱼饺 FISH DUMPLING", packaging: "20's", itemCode: "10120" }
        ],
        scanned: false
    },
    {
        barcode: "10200",
        name: "菜卷 20粒 FISH VEGETABLE ROLL 20's",
        packaging: "20's x 20pkt",
        skus: [
            { type: "CTN", name: "菜卷 FISH VEGETABLE ROLL", packaging: "20's x 20pkt", itemCode: "10200" },
            { type: "PKT", name: "菜卷 FISH VEGETABLE ROLL", packaging: "20's", itemCode: "10220" }
        ],
        scanned: false
    },
    {
        barcode: "10300",
        name: "鱼卷 20粒 FISH ROLL 20's",
        packaging: "20's x 20pkt",
        skus: [
            { type: "CTN", name: "鱼卷 FISH ROLL", packaging: "20's x 20pkt", itemCode: "10300" },
            { type: "PKT", name: "鱼卷 FISH ROLL", packaging: "20's", itemCode: "10320" }
        ],
        scanned: false
    },
    {
        barcode: "10400",
        name: "鱼片 20粒 FISH SLICE 20's",
        packaging: "20's x 20pkt",
        skus: [
            { type: "CTN", name: "鱼片 FISH SLICE", packaging: "20's x 20pkt", itemCode: "10400" },
            { type: "PKT", name: "鱼片 FISH SLICE", packaging: "20's", itemCode: "10420" }
        ],
        scanned: false
    },
    {
        barcode: "10800",
        name: "鱼肉 FISH PASTE 2KGx8pkt",
        packaging: "2kg x 8pkt",
        skus: [
            { type: "CTN", name: "鱼肉 FISH PASTE", packaging: "2kg x 8pkt", itemCode: "10800" },
            { type: "PKT", name: "鱼肉 FROZEN FISH PASTE", packaging: "2kg", itemCode: "10803" }
        ],
        scanned: false
    },
    {
        barcode: "10810",
        name: "苏东膏 CUTTLEFISH PASTE",
        packaging: "1kg x 10pkt",
        skus: [
            { type: "CTN", name: "苏东膏 CUTTLEFISH PASTE", packaging: "1kg x 10pkt", itemCode: "10810" },
            { type: "PKT", name: "苏东膏 CUTTLEFISH PASTE", packaging: "1kg/pkt", itemCode: "10811" }
        ],
        scanned: false
    },
    {
        barcode: "10802",
        name: "鱼肉 FISH PASTE 200g",
        packaging: "200g/box",
        skus: [
            { type: "PKT", name: "鱼肉 FISH PASTE", packaging: "200g/box", itemCode: "10802" }
        ],
        scanned: false
    },
    {
        barcode: "24030",
        name: "香菇丸 10粒 MUSHROOM BALL 10's",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "香菇丸 MUSHROOM BALL (13g)", packaging: "10's/tray", itemCode: "24030" }
        ],
        scanned: false
    },
    {
        barcode: "10250.1",
        name: "菜卷 50粒 FISH VEGETABLE ROLL 50's",
        packaging: "50's x 20box",
        skus: [
            { type: "CTN", name: "菜卷 FISH VEGETABLE ROLL", packaging: "50's x 20box", itemCode: "10250.1" },
            { type: "PKT", name: "菜卷 FISH VEGETABLE ROLL", packaging: "50's", itemCode: "10250" }
        ],
        scanned: false
    },
    {
        barcode: "10350.1",
        name: "鱼卷 50粒 FISH ROLL 50's",
        packaging: "50's x 20box",
        skus: [
            { type: "CTN", name: "鱼卷 FISH ROLL", packaging: "50's x 20box", itemCode: "10350.1" },
            { type: "PKT", name: "鱼卷 FISH ROLL", packaging: "50's", itemCode: "10350" }
        ],
        scanned: false
    },
    {
        barcode: "10450.1",
        name: "鱼片 50粒 FISH SLICE 50's",
        packaging: "50's x 20box",
        skus: [
            { type: "CTN", name: "鱼片 FISH SLICE", packaging: "50's x 20box", itemCode: "10450.1" },
            { type: "PKT", name: "鱼片 FISH SLICE", packaging: "50's", itemCode: "10450" }
        ],
        scanned: false
    },
    {
        barcode: "40610",
        name: "香脆蟹钳 BREADED CRAB CLAW",
        packaging: "300g x 20pkt",
        skus: [
            { type: "CTN", name: "香脆蟹钳 BREADED CRAB CLAW", packaging: "300g x 20pkt", itemCode: "40610" },
            { type: "PKT", name: "香脆蟹钳 BREADED CRAB CLAW", packaging: "300g/pkt", itemCode: "40611" }
        ],
        scanned: false
    },
    {
        barcode: "40626",
        name: "利泉香脆鱼片 LI CHUAN BREADED FISH CHIP",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "利泉香脆鱼片 LI CHUAN BREADED FISH CHIP", packaging: "500g x 20pkt", itemCode: "40626" },
            { type: "PKT", name: "利泉香脆鱼片 LI CHUAN BREADED FISH CHIP", packaging: "500g/pkt", itemCode: "40627" }
        ],
        scanned: false
    },
    {
        barcode: "60030",
        name: "火锅鱼肉腐竹 FISH BEAN CURD (steamboat)",
        packaging: "400g x 20pkt",
        skus: [
            { type: "CTN", name: "火锅鱼肉腐竹 FISH BEAN CURD (steamboat)", packaging: "400g x 20pkt", itemCode: "60030" },
            { type: "PKT", name: "火锅鱼肉腐竹 FISH BEAN CURD (steamboat)", packaging: "400g/pkt", itemCode: "60031" }
        ],
        scanned: false
    },
    {
        barcode: "60020",
        name: "海鲜大腐竹 JUMBO FISH BEAN CURD",
        packaging: "350g x 30pkt",
        skus: [
            { type: "CTN", name: "海鲜大腐竹 JUMBO FISH BEAN CURD", packaging: "350g x 30pkt", itemCode: "60020" },
            { type: "PKT", name: "海鲜大腐竹 JUMBO FISH BEAN CURD", packaging: "350g/pkt", itemCode: "60021" }
        ],
        scanned: false
    },
    {
        barcode: "10110.1",
        name: "1年 - 鱼饺 FISH DUMPLING 1 Year",
        packaging: "10's x 60trays",
        skus: [
            { type: "CTN", name: "1年 - 鱼饺 FISH DUMPLING 1 Year", packaging: "10's x 60trays", itemCode: "10110.1" },
            { type: "PKT", name: "1年 - 鱼饺 FISH DUMPLING 1 Year", packaging: "10's/tray", itemCode: "10110.2" }
        ],
        scanned: false
    },
    {
        barcode: "10410.1",
        name: "1年 - 鱼片 FISH SLICE 1 Year",
        packaging: "10's x 60trays",
        skus: [
            { type: "CTN", name: "1年 - 鱼片 FISH SLICE 1 Year", packaging: "10's x 60trays", itemCode: "10410.1" },
            { type: "PKT", name: "1年 - 鱼片 FISH SLICE 1 Year", packaging: "10's/tray", itemCode: "10410.2" }
        ],
        scanned: false
    },
    {
        barcode: "40641",
        name: "生鱼片 SUTCHI FISH FILLET",
        packaging: "6kg 3kg x 2pkt",
        skus: [
            { type: "CTN", name: "生鱼片 SUTCHI FISH FILLET", packaging: "6kg 3kg x 2pkt", itemCode: "40641" }
        ],
        scanned: false
    },
    {
        barcode: "85002",
        name: "(PC)香菇丸 PC MUSHROOM BALL",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "(PC)香菇丸 PC MUSHROOM BALL", packaging: "10's/tray", itemCode: "85002" }
        ],
        scanned: false
    },
    {
        barcode: "RM048",
        name: "CHICKEN B/L LEG / 鸡腿肉",
        packaging: "2kg x 6pkt",
        skus: [
            { type: "CTN", name: "CHICKEN B/L LEG / 鸡腿肉", packaging: "2kg x 6pkt", itemCode: "RM048" }
        ],
        scanned: false
    },
    {
        barcode: "RM051",
        name: "Squid / 墨鱼",
        packaging: "20kg",
        skus: [
            { type: "CTN", name: "Squid / 墨鱼", packaging: "20kg", itemCode: "RM051" }
        ],
        scanned: false
    },
    {
        barcode: "SU15",
        name: "黄尾鱼 YELLOW TAIL FISH",
        packaging: "20kg",
        skus: [
            { type: "CTN", name: "黄尾鱼 YELLOW TAIL FISH", packaging: "20kg", itemCode: "SU15" }
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
    
    // Check product SKU types
    const hasCTN = product.skus.some(sku => sku.type === "CTN");
    const hasPKT = product.skus.some(sku => sku.type === "PKT");
    
    const boxQuantityInput = document.getElementById('boxQuantityInput');
    const boxQuantityLabel = boxQuantityInput.previousElementSibling;
    const pieceQuantityInput = document.getElementById('pieceQuantityInput');
    const pieceQuantityLabel = pieceQuantityInput.previousElementSibling;
    
    // Show/hide inputs based on SKU types
    if (hasCTN && !hasPKT) {
        // Only show CTN input
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
        pieceQuantityInput.style.display = 'none';
        pieceQuantityLabel.style.display = 'none';
    } else if (!hasCTN && hasPKT) {
        // Only show PKT input
        boxQuantityInput.style.display = 'none';
        boxQuantityLabel.style.display = 'none';
        pieceQuantityInput.style.display = 'block';
        pieceQuantityLabel.style.display = 'block';
    } else if (hasCTN && hasPKT) {
        // Show both inputs
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
        pieceQuantityInput.style.display = 'block';
        pieceQuantityLabel.style.display = 'block';
    }
    
    // Clear inputs
    boxQuantityInput.value = '';
    pieceQuantityInput.value = '';
    
    // Show modal
    document.getElementById('quantityModal').style.display = 'block';
    
    // Set focus after a short delay to ensure the modal is fully displayed
    setTimeout(() => {
        if (hasCTN && !hasPKT) {
            boxQuantityInput.focus();
        } else if (!hasCTN && hasPKT) {
            pieceQuantityInput.focus();
        } else if (hasCTN && hasPKT) {
            boxQuantityInput.focus();
        }
    }, 100); // Small delay to ensure modal is rendered
}

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

function checkInternetConnection() {
    return navigator.onLine;
}

// Function to save scanned records to local storage
function saveScannedRecordsToStorage() {
    localStorage.setItem('scannedRecords', JSON.stringify(scanRecords));
}

// Function to load scanned records from local storage
function loadScannedRecordsFromStorage() {
    const savedRecords = localStorage.getItem('scannedRecords');
    if (savedRecords) {
        scanRecords = JSON.parse(savedRecords);
        renderRecords();
        updateProgress();
    }
}

// Function to save data to local storage
function saveToLocalStorage(data) {
    const existingData = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
    existingData.push(data);
    localStorage.setItem('pendingSubmissions', JSON.stringify(existingData));
}

// Function to get and clear pending submissions
function getPendingSubmissions() {
    const pending = localStorage.getItem('pendingSubmissions');
    localStorage.removeItem('pendingSubmissions');
    return pending ? JSON.parse(pending) : [];
}

// Modified submit function with offline support
async function submitToGoogleSheet() {
    const counter = document.getElementById('counterSelect').value;
    const LOCATION = 'CR1';
    
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
                    sheetName: LOCATION,
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

        // Check internet connection
        if (!checkInternetConnection()) {
            saveToLocalStorage(data);
            saveScannedRecordsToStorage(); // Save current records before showing alert
            showCustomAlert('无网络连接。数据已保存，将在有网络时自动提交。');
            return;
        }

        // Try to submit any pending data first
        const pendingSubmissions = getPendingSubmissions();
        if (pendingSubmissions.length > 0) {
            for (const pendingData of pendingSubmissions) {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
                    method: 'POST',
                    body: JSON.stringify(pendingData)
                });
                if (!response.ok) {
                    throw new Error('提交历史数据失败');
                }
            }
        }

        // Submit current data
        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showCustomAlert('数据提交成功！');
            scanRecords = [];
            localStorage.removeItem('scannedRecords'); // Clear stored records after successful submission
            renderRecords();
        } else {
            throw new Error('提交失败');
        }
    } catch (error) {
        console.error('Error:', error);
        saveToLocalStorage(data);
        saveScannedRecordsToStorage(); // Save current records in case of error
        showCustomAlert('提交失败，数据已保存，将在下次提交时重试！');
    } finally {
        loadingOverlay.style.display = 'none';
    }
}

// Modified submitQuantity function to save records after each scan
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;
    
    if (boxQuantity === 0 && pieceQuantity === 0) {
        showCustomAlert('请至少输入一个数量！');
        return;
    }
    
    currentProduct.scanned = true;
    
    const now = new Date();
    const date = now.toLocaleDateString();
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
    saveScannedRecordsToStorage(); // Save after each new scan
    renderRecords();
    renderProducts();
    updateProgress();
    closeModal();
}

// Add event listeners for online/offline status
window.addEventListener('online', async () => {
    const pendingSubmissions = getPendingSubmissions();
    if (pendingSubmissions.length > 0) {
        showCustomAlert('检测到网络连接，正在提交保存的数据...');
        await submitToGoogleSheet();
    }
});

window.addEventListener('offline', () => {
    showCustomAlert('网络连接已断开。数据将保存在本地。');
    saveScannedRecordsToStorage(); // Save current records when going offline
});

// Add this to your initialization code (when the page loads)
document.addEventListener('DOMContentLoaded', () => {
    loadScannedRecordsFromStorage();
});
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
