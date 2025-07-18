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
        packaging: "10's x 30pkt",
        skus: [
            { type: "CTN", name: "海鲜大腐竹 JUMBO FISH BEAN CURD", packaging: "10's x 30pkt", itemCode: "60020" },
            { type: "PKT", name: "海鲜大腐竹 JUMBO FISH BEAN CURD", packaging: "10's/pkt", itemCode: "60021" }
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
        barcode: "40641",
        name: "生鱼片 SUTCHI FISH FILLET",
        packaging: "6kg 3kg x 2pkt",
        skus: [
            { type: "CTN", name: "生鱼片 SUTCHI FISH FILLET", packaging: "6kg 3kg x 2pkt", itemCode: "40641" }
        ],
        scanned: false
    },
    {
        barcode: "26021",
        name: "螃蟹丸 FLAVOURED CRAB BALL",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "螃蟹丸 FLAVOURED CRAB BALL", packaging: "10's/tray", itemCode: "26021" }
        ],
        scanned: false
    },
    {
        barcode: "25030",
        name: "海鲜条 SEAFOOD STICK",
        packaging: "10's/tray",
        skus: [
            { type: "PKT", name: "海鲜条 SEAFOOD STICK", packaging: "10's/tray", itemCode: "25030" }
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
            { type: "CTN", name: "CHICKEN B/L LEG / 鸡腿肉", packaging: "2kg x 6pkt", itemCode: "RM048" },
{ type: "PKT", name: "CHICKEN B/L LEG / 鸡腿肉", packaging: "2kg", itemCode: "RM048.1" }
        ],
        scanned: false
    },
    {
        barcode: "RM051",
        name: "Squid / 苏东",
        packaging: "20kg",
        skus: [
            { type: "CTN", name: "Squid / 苏东", packaging: "20kg", itemCode: "RM049" }
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
// Consolidated window.onload
window.onload = function() {
    renderProducts();
    updateProgress();
    // setupBarcodeInput will handle focusing on barcodeInput
    setupBarcodeInput(); 
    // populateUserDropdown is called by DOMContentLoaded, but calling again here ensures it runs if DOMContentLoaded already fired.
    // However, it's generally better to ensure it's called once. DOMContentLoaded is usually sufficient.
    // For safety, and given its async nature and internal checks, calling it here might be okay,
    // but ideally, structure ensures single appropriate call.
    // Let's rely on DOMContentLoaded for populateUserDropdown and remove it from here if it's redundant.
    // populateUserDropdown(); // This is called by DOMContentLoaded, likely redundant here.
};

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
        showCustomAlert('此产品已经盘点过了！This product has already been counted!');
    } else {
        showCustomAlert('未找到产品！No product found!');
    }

    document.getElementById('barcodeInput').value = '';
}
// Initialize
// window.onload is now consolidated. This specific one is removed.
// window.onload = function() {
//     renderProducts();
//     updateProgress();
//     setupBarcodeInput();
// }

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
        if (barcode.length >= 4) {  // Assuming minimum barcode length is 5
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
    // First, split the dateString into date and time parts
    const [datePart, timePart] = dateString.split(' ');
    
    // If the date is already in DD/MM/YYYY format, return as is
    if (datePart.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        return dateString;
    }
    
    // Otherwise, parse the date and convert
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
        console.error('Invalid date:', dateString);
        return 'Invalid Date';
    }
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const time = timePart || date.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    return `${day}/${month}/${year} ${time}`;
}

// Convert date format for Google Sheets submission
function convertDateFormat(dateStr) {
    // Already in DD/MM/YYYY format, return as is
    return dateStr;
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
        
        const newBoxQuantity = boxInput.value !== '' ? parseInt(boxInput.value) : 0;
        const newPieceQuantity = pieceInput.value !== '' ? parseInt(pieceInput.value) : 0;
        
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
        showCustomAlert('记录已更新！Record Updated!');
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

// Function to save data to session storage
function saveToSessionStorage(data) {
    const existingData = JSON.parse(sessionStorage.getItem('pendingSubmissions') || '[]');
    existingData.push(data);
    sessionStorage.setItem('pendingSubmissions', JSON.stringify(existingData));
}

// Function to get and clear pending submissions
function getPendingSubmissions() {
    const pending = sessionStorage.getItem('pendingSubmissions');
    sessionStorage.removeItem('pendingSubmissions');
    return pending ? JSON.parse(pending) : [];
}

// Modified submit function with offline support
async function submitToGoogleSheet() {
    const counterSelect = document.getElementById('counterSelect');
    const counter = counterSelect.value; // This will be the name from the dropdown
    const LOCATION = 'CR1';
    
    if (!counter) {
        showCustomAlert('请选择盘点人员！Please choose the staff for inventory count!');
        return;
    }
    
    if (scanRecords.length === 0) {
        showCustomAlert('没有可提交的记录！There are no records to submit!');
        return;
    }

    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    try {
        function formatDateForGoogleSheets(dateStr) {
            const [datePart, timePart] = dateStr.split(' ');
            const [day, month, year] = datePart.split('/');
            return `${day}/${month}/${year}`;
        }

        const data = scanRecords.flatMap(record => 
            record.items.map(item => {
                const product = products.find(p => p.name === item.name);
                const ctnSku = product.skus.find(sku => sku.type === "CTN");
                const pktSku = product.skus.find(sku => sku.type === "PKT");
                
                const [date, time] = item.timestamp.split(' ');
                
                return {
                    sheetName: LOCATION,
                    date: formatDateForGoogleSheets(item.timestamp),
                    time: time,
                    name: item.name,
                    packaging: item.packaging,
                    boxQuantity: item.boxQuantity,
                    pieceQuantity: item.pieceQuantity,
                    ctnItemCode: ctnSku ? ctnSku.itemCode : '',
                    pktItemCode: pktSku ? pktSku.itemCode : '',
                    counter: counter // This now contains the name from the dropdown
                };
            })
        );

        if (!checkInternetConnection()) {
            saveToSessionStorage(data);
            showCustomAlert('无网络连接。数据已保存，将在有网络时自动提交。No network connection. Data has been saved and will be automatically submitted when the network is available.');
            return;
        }

        const pendingSubmissions = getPendingSubmissions();
        if (pendingSubmissions.length > 0) {
            for (const pendingData of pendingSubmissions) {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
                    method: 'POST',
                    body: JSON.stringify(pendingData)
                });
                if (!response.ok) {
                    throw new Error('提交历史数据失败 Historical data submission failed');
                }
            }
            // Clear pending submissions after successful submission
            sessionStorage.removeItem('pendingSubmissions');
        }

        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Reset all products' scanned status
            products.forEach(product => {
                product.scanned = false;
            });
            
            // Clear scan records
            scanRecords = [];
            
            // Update UI
            renderProducts();
            renderRecords();
            updateProgress();
            
            showCustomAlert('数据提交成功！Submission completed successfully!');
        } else {
            throw new Error('提交失败 Failed to submit');
        }
    } catch (error) {
        console.error('Error:', error);
        saveToSessionStorage(data);
        showCustomAlert('提交失败，数据已保存，将在下次提交时重试！Submission failed. Data has been saved and will be retried on the next submission attempt!');
    } finally {
        loadingOverlay.style.display = 'none';
    }
}

// Add event listeners for online/offline status
window.addEventListener('online', async () => {
    const pendingSubmissions = getPendingSubmissions();
    if (pendingSubmissions.length > 0) {
        showCustomAlert('检测到网络连接，正在提交保存的数据...Network connection detected, submitting saved data...');
        await submitToGoogleSheet();
    }
});

window.addEventListener('offline', () => {
    showCustomAlert('网络连接已断开。数据将保存在本地。Network connection has been disconnected. Data will be saved locally.');
});
// Also update where you create the record to store date and time separately
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;

    if (boxQuantity === 0 && pieceQuantity === 0) {
        showCustomAlert('请至少输入一个数量！Please enter at least one quantity!');
        return;
    }

    currentProduct.scanned = true;

    // Create timestamp with correct format
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const formattedDate = `${day}/${month}/${year}`;
    const timestamp = `${formattedDate} ${time}`;

    const record = {
        timestamp: timestamp,
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity,
            timestamp: timestamp
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
const FIREBASE_DB_URL = "https://li-chuan-user-name-default-rtdb.asia-southeast1.firebasedatabase.app";

// Fetch users from Firebase (without SDK)
async function fetchUsersFromFirebase() {
  const url = `${FIREBASE_DB_URL}/pwauser.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();
    if (!data) throw new Error("No data found");

    return Object.entries(data).map(([id, userData]) => ({
      id,
      name: typeof userData === "string" ? userData.replace(/"/g, "") : userData.name || Object.values(userData)[0] || "Unknown",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    showCustomAlert("获取用户数据失败！Failed to fetch user data!");
    return [];
  }
}

// Populate dropdown with users
async function populateUserDropdown() {
  const counterSelect = document.getElementById("counterSelect");
  if (!counterSelect) {
    console.error("Counter select dropdown not found during populateUserDropdown.");
    return;
  }

  const cacheResult = getUsersFromCache();
  let currentUsers = cacheResult.users;

  if (cacheResult.exists && currentUsers && currentUsers.length > 0) {
    console.log("Populating dropdown from cache (might be stale).");
    populateDropdownWithData(currentUsers);
  } else {
    // Ensure dropdown is at least reset to placeholder if no cache
    populateDropdownWithData(null); 
  }

  if (cacheResult.isStale || !cacheResult.exists) {
    if (navigator.onLine) {
      console.log(cacheResult.exists ? "Cache is stale, fetching fresh data." : "No cache, fetching data.");
      try {
        const fetchedUsers = await fetchUsersFromFirebase();
        if (fetchedUsers && fetchedUsers.length > 0) {
          console.log("Successfully fetched new user data.");
          populateDropdownWithData(fetchedUsers);
          cacheUsers(fetchedUsers); // Update cache with fresh data
          // If stale cache was being used, this will overwrite it with fresh data and new timestamp.
          // If cache was non-existent, this creates it.
        } else if (!cacheResult.exists || (cacheResult.exists && (!currentUsers || currentUsers.length === 0))) {
          // Fetch returned no users AND there was no usable cache (neither fresh nor stale)
          console.log("Fetch returned no users and no usable cache existed.");
          showCustomAlert("Operator list could not be loaded from the server.");
          // Dropdown would have already been cleared or set to placeholder by populateDropdownWithData(null)
        } else {
          // Fetch returned no users, but we might be showing stale data, which is fine.
          console.log("Fetch returned no new users, continuing with stale data if available.");
        }
      } catch (error) {
        console.error("Error fetching users from Firebase:", error);
        if (!currentUsers || currentUsers.length === 0) {
          // Only show alert if we don't even have stale data to show
          showCustomAlert("Failed to fetch operator list. Check your internet connection.");
        }
      }
    } else { // Offline
      if (!cacheResult.exists && (!currentUsers || currentUsers.length === 0)) {
        // Offline and no cache at all (not even stale)
        console.log("Offline and no user cache available.");
        showCustomAlert("You are offline. Operator list cannot be loaded without a connection or local cache.");
      } else if (cacheResult.exists && (!currentUsers || currentUsers.length === 0)) {
        // This case should ideally not happen if exists = true means users is not null/empty
        // but as a fallback.
        console.log("Offline, cache existed but was empty. This state should be rare.");
        showCustomAlert("You are offline. Operator list seems empty in local cache.");
      } else {
        // Offline but using cached data (fresh or stale)
        console.log("Offline, using cached user data.");
        if(cacheResult.isStale){
            showCustomAlert("You are offline. Displaying potentially outdated operator list from cache.");
        }
      }
    }
  } else {
    // Cache exists and is not stale. Already populated.
    console.log("Using fresh user data from cache.");
  }
}

// Cache users data for 12 hours
function cacheUsers(users) {
  localStorage.setItem("userCache", JSON.stringify({ timestamp: Date.now(), users }));
}

// Get users from cache if valid (12 hours = 43200000 ms)
function getUsersFromCache() {
  const cachedData = localStorage.getItem("userCache");
  if (!cachedData) return { users: null, isStale: false, exists: false };

  try {
    const { timestamp, users } = JSON.parse(cachedData);
    if (!users || !timestamp) { // Basic validation of cache structure
        localStorage.removeItem("userCache");
        return { users: null, isStale: false, exists: false };
    }
    const isStale = (Date.now() - timestamp) >= 43200000;
    return { users, isStale, exists: true };
  } catch (error) {
    console.error("Error parsing user cache:", error);
    localStorage.removeItem("userCache"); // Remove corrupted cache
    return { users: null, isStale: false, exists: false };
  }
}

// Populate dropdown with cached data
function populateDropdownWithData(users) {
  const counterSelect = document.getElementById("counterSelect");
  // Ensure counterSelect exists
  if (!counterSelect) {
      console.error("counterSelect element not found");
      return;
  }
  // Preserve the first (placeholder) option if it exists
  const placeholderOption = counterSelect.options[0] ? counterSelect.options[0].outerHTML : '<option value="">盘点人员 | Operator</option>';
  counterSelect.innerHTML = placeholderOption;

  if (users && users.length > 0) {
    users.forEach(user => {
      const option = document.createElement("option");
      option.value = user.name;
      option.textContent = user.name;
      option.dataset.id = user.id; // Assuming user objects have an id
      counterSelect.appendChild(option);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
    populateUserDropdown();
    initializeSidePanel();
});

// Side Panel Logic
let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0; // To help distinguish scroll from swipe
let touchendY = 0; // To help distinguish scroll from swipe
const swipeThreshold = 50; // Minimum distance for a swipe
const swipeEdgeArea = 50; // How close to the edge swipe must start

function openSidePanel() {
    const sidePanel = document.getElementById('sidePanel');
    const overlay = document.getElementById('overlay');
    if (sidePanel && overlay) {
        sidePanel.classList.add('open');
        overlay.classList.add('active');
    }
}

function closeSidePanel() {
    const sidePanel = document.getElementById('sidePanel');
    const overlay = document.getElementById('overlay');
    if (sidePanel && overlay) {
        sidePanel.classList.remove('open');
        overlay.classList.remove('active');
    }
}

function handleSwipeGesture() {
    const deltaX = touchendX - touchstartX;
    const deltaY = touchendY - touchstartY;

    // Check if it's primarily a horizontal swipe and not a vertical scroll
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
        const sidePanel = document.getElementById('sidePanel');
        if (!sidePanel) return;

        if (deltaX > 0 && touchstartX < swipeEdgeArea && !sidePanel.classList.contains('open')) {
            // Swipe Right from left edge to open
            openSidePanel();
        } else if (deltaX < 0 && sidePanel.classList.contains('open')) {
            // Swipe Left to close (optional: can also rely on overlay click or close button)
            // For now, let's make it simple: any significant swipe left when open closes it.
            // More precise would be to check if swipe started inside panel or if touchendX is far left.
            // closeSidePanel(); // Let's use button/overlay for closing first to keep swipe open simple.
        }
    }
}

function initializeSidePanel() {
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closePanelBtn');

    if (overlay) {
        overlay.addEventListener('click', closeSidePanel);
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeSidePanel);
    }

    document.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, { passive: true }); // Passive for performance, if not calling preventDefault

    document.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleSwipeGesture();
    }, { passive: true });

    const refreshOperatorsButton = document.getElementById('refreshOperatorsBtn');
    if (refreshOperatorsButton) {
        refreshOperatorsButton.addEventListener('click', forceRefreshOperatorList);
    }
}

async function forceRefreshOperatorList() {
    const refreshButton = document.getElementById('refreshOperatorsBtn');
    const originalButtonText = refreshButton ? refreshButton.textContent : "Refresh Operator List";

    if (!navigator.onLine) {
        showCustomAlert("Cannot refresh: You are offline.");
        return;
    }

    if (refreshButton) refreshButton.textContent = "Refreshing...";
    // Optional: Disable button refreshButton.disabled = true;

    try {
        const users = await fetchUsersFromFirebase();
        if (users && users.length > 0) {
            populateDropdownWithData(users);
            cacheUsers(users);
            showCustomAlert("Operator list updated successfully!");
        } else if (users && users.length === 0) {
            // Firebase returned an empty list
            populateDropdownWithData([]); // Clear the dropdown
            cacheUsers([]); // Cache the empty list
            showCustomAlert("Operator list is empty on the server.");
        } else {
            // fetchUsersFromFirebase itself might have shown an error if it returned null due to fetch failure
            // If it resolved to null or undefined without throwing an error that it caught itself:
            showCustomAlert("Failed to update operator list. Server might be unreachable or returned unexpected data.");
        }
    } catch (error) {
        // This catch is for errors thrown by fetchUsersFromFirebase if it doesn't handle them internally
        console.error("Error forcing refresh of operator list:", error);
        showCustomAlert("An error occurred while refreshing the operator list.");
    } finally {
        if (refreshButton) {
            refreshButton.textContent = originalButtonText;
            // refreshButton.disabled = false;
        }
        closeSidePanel(); // Close panel after attempt
    }
}
