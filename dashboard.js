        /* ============= JAVASCRIPT ============= */

        // DOM elements
        const sidebar = document.getElementById('sidebar');

        // Section management
        function showSection(sectionName, element) {
            console.log('Switching to section:', sectionName);
            
            // Hide all sections first - use both class and style
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
                section.style.setProperty('display', 'none', 'important');
                section.style.setProperty('opacity', '0', 'important');
            });
            
            // Show selected section with force
            const targetSection = document.getElementById(sectionName + '-section');
            console.log('Target section found:', targetSection);
            
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.setProperty('display', 'block', 'important');
                targetSection.style.setProperty('opacity', '1', 'important');
            }
            
            // Update navigation active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (element) {
                element.classList.add('active');
            }
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('active');
            }
            
            // Load section content
            setTimeout(() => {
                switch(sectionName) {
                    case 'analytics':
                        initializeDashboard();
                        break;
                    case 'users':
                        populateUsersTable();
                        break;
                    case 'products':
                        populateProductsGrid();
                        break;
                    case 'sales':
                        createSalesTrendChart();
                        populateTopProducts();
                        populateRecentOrders();
                        break;
                }
            }, 50);
        }

        // Sidebar toggle
        function toggleSidebar() {
            sidebar.classList.toggle('active');
        }

        // Navigation active state
        function setActive(element) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            element.classList.add('active');
        }

        // Settings tabs
        function showSettingsTab(tabName) {
            document.querySelectorAll('.settings-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.getElementById(tabName + '-tab').classList.add('active');
            event.target.classList.add('active');
        }

        // Populate users table
        function populateUsersTable() {
            const users = [
                { name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
                { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Editor', status: 'Active', lastLogin: '1 day ago' },
                { name: 'Mike Wilson', email: 'mike@example.com', role: 'User', status: 'Inactive', lastLogin: '1 week ago' },
                { name: 'Emily Davis', email: 'emily@example.com', role: 'Editor', status: 'Active', lastLogin: '3 hours ago' },
                { name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Active', lastLogin: '5 minutes ago' },
                { name: 'Lisa Garcia', email: 'lisa@example.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
                { name: 'Tom Anderson', email: 'tom@example.com', role: 'User', status: 'Active', lastLogin: '30 minutes ago' },
                { name: 'Amy Chen', email: 'amy@example.com', role: 'Editor', status: 'Inactive', lastLogin: '3 days ago' }
            ];
            
            const tbody = document.getElementById('users-table');
            if (tbody) {
                tbody.innerHTML = users.map(user => `
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.role}</td>
                        <td><span class="status-badge status-${user.status.toLowerCase()}">${user.status}</span></td>
                        <td>${user.lastLogin}</td>
                        <td>
                            <button class="btn-secondary" style="font-size: 0.8rem; padding: 0.3rem 0.8rem;">Edit</button>
                            <button class="btn-secondary" style="font-size: 0.8rem; padding: 0.3rem 0.8rem; margin-left: 0.5rem;">Delete</button>
                        </td>
                    </tr>
                `).join('');
            }
        }

        // Populate top products
        function populateTopProducts() {
            const topProducts = [
                { rank: 1, name: 'Wireless Headphones', sales: '$12,450', units: '142 units' },
                { rank: 2, name: 'Smartphone Case', sales: '$8,920', units: '298 units' },
                { rank: 3, name: 'Laptop Stand', sales: '$6,780', units: '89 units' },
                { rank: 4, name: 'Coffee Mug', sales: '$5,340', units: '445 units' },
                { rank: 5, name: 'Books Set', sales: '$4,125', units: '167 units' }
            ];
            
            const container = document.getElementById('topProducts');
            if (container) {
                container.innerHTML = topProducts.map(product => `
                    <div class="top-product-item">
                        <div class="product-rank">${product.rank}</div>
                        <div class="product-info">
                            <h4>${product.name}</h4>
                            <p>${product.units}</p>
                        </div>
                        <div class="product-sales">${product.sales}</div>
                    </div>
                `).join('');
            }
        }

        // Populate recent orders
        function populateRecentOrders() {
            const orders = [
                { id: '#ORD-001', customer: 'Alice Cooper', product: 'Wireless Headphones', amount: '$89.99', status: 'Completed', date: '2024-05-28' },
                { id: '#ORD-002', customer: 'Bob Johnson', product: 'Laptop Stand', amount: '$34.99', status: 'Processing', date: '2024-05-28' },
                { id: '#ORD-003', customer: 'Carol Davis', product: 'Coffee Mug', amount: '$12.99', status: 'Shipped', date: '2024-05-27' },
                { id: '#ORD-004', customer: 'David Wilson', product: 'Smartphone Case', amount: '$15.99', status: 'Completed', date: '2024-05-27' },
                { id: '#ORD-005', customer: 'Emma Brown', product: 'Books Set', amount: '$24.99', status: 'Processing', date: '2024-05-26' }
            ];
            
            const tbody = document.getElementById('orders-table');
            if (tbody) {
                tbody.innerHTML = orders.map(order => `
                    <tr>
                        <td>${order.id}</td>
                        <td>${order.customer}</td>
                        <td>${order.product}</td>
                        <td>${order.amount}</td>
                        <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                        <td>${order.date}</td>
                    </tr>
                `).join('');
            }
        }

        // Populate products grid
        function populateProductsGrid() {
            const products = [
                { name: 'Wireless Headphones', price: '$89.99', stock: 45, category: 'Electronics', emoji: '🎧', status: 'In Stock' },
                { name: 'Coffee Mug', price: '$12.99', stock: 120, category: 'Kitchen', emoji: '☕', status: 'In Stock' },
                { name: 'Laptop Stand', price: '$34.99', stock: 8, category: 'Electronics', emoji: '💻', status: 'Low Stock' },
                { name: 'Books Set', price: '$24.99', stock: 67, category: 'Books', emoji: '📚', status: 'In Stock' },
                { name: 'Plant Pot', price: '$18.99', stock: 0, category: 'Home', emoji: '🪴', status: 'Out of Stock' },
                { name: 'Smartphone Case', price: '$15.99', stock: 89, category: 'Electronics', emoji: '📱', status: 'In Stock' },
                { name: 'Gaming Mouse', price: '$45.99', stock: 23, category: 'Electronics', emoji: '🖱️', status: 'In Stock' },
                { name: 'Desk Lamp', price: '$28.99', stock: 5, category: 'Home', emoji: '💡', status: 'Low Stock' },
                { name: 'Water Bottle', price: '$19.99', stock: 156, category: 'Sports', emoji: '🚰', status: 'In Stock' }
            ];
            
            const grid = document.getElementById('products-grid');
            if (grid) {
                grid.innerHTML = products.map(product => `
                    <div class="product-card">
                        <div class="product-image">${product.emoji}</div>
                        <h3>${product.name}</h3>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Stock:</strong> ${product.stock} units</p>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Status:</strong> <span class="status-badge status-${product.status.toLowerCase().replace(/\s+/g, '-')}">${product.status}</span></p>
                        <button class="btn-primary" style="width: 100%; margin-top: 1rem;">Edit Product</button>
                    </div>
                `).join('');
            }
        }

        // Create sales trend chart
        function createSalesTrendChart() {
            const canvas = document.getElementById('salesTrendChart');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth * 2;
            canvas.height = 200 * 2;
            ctx.scale(2, 2);
            
            const data = [25, 35, 28, 45, 38, 52, 48, 65, 58, 72, 68, 85];
            const chartWidth = canvas.offsetWidth - 60;
            const chartHeight = 150;
            const maxValue = Math.max(...data);
            
            ctx.clearRect(0, 0, canvas.offsetWidth, 200);
            
            // Draw chart area
            ctx.strokeStyle = '#667eea';
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            data.forEach((value, index) => {
                const x = 30 + (chartWidth / (data.length - 1)) * index;
                const y = 30 + chartHeight - (value / maxValue) * chartHeight;
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            
            ctx.stroke();
            
            // Draw data points
            ctx.fillStyle = '#667eea';
            data.forEach((value, index) => {
                const x = 30 + (chartWidth / (data.length - 1)) * index;
                const y = 30 + chartHeight - (value / maxValue) * chartHeight;
                
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fill();
            });
        }

        // Animate counter function
        function animateCounter(element, target, suffix = '') {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current).toLocaleString() + suffix;
            }, 30);
        }

        // Animate card click
        function animateCard(card) {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'translateY(-5px)';
            }, 150);
        }

        // Initialize dashboard
        function initializeDashboard() {
            // Check if we're in analytics section
            const analyticsSection = document.getElementById('analytics-section');
            if (!analyticsSection || !analyticsSection.classList.contains('active')) {
                return;
            }

            // Animate stats
            const revenueEl = document.getElementById('revenue');
            const usersEl = document.getElementById('users');
            const ordersEl = document.getElementById('orders');
            const conversionEl = document.getElementById('conversion');
            
            if (revenueEl) {
                animateCounter(revenueEl, 245680, '');
                revenueEl.textContent = '$245,680';
            }
            
            if (usersEl) {
                animateCounter(usersEl, 1420);
            }
            
            if (ordersEl) {
                animateCounter(ordersEl, 856);
            }
            
            // Animate conversion rate
            if (conversionEl) {
                let conversionRate = 0;
                const conversionTarget = 3.2;
                const conversionTimer = setInterval(() => {
                    conversionRate += 0.1;
                    if (conversionRate >= conversionTarget) {
                        conversionRate = conversionTarget;
                        clearInterval(conversionTimer);
                    }
                    conversionEl.textContent = conversionRate.toFixed(1) + '%';
                }, 50);
            }

            // Animate progress bars
            setTimeout(() => {
                document.querySelectorAll('.progress-fill').forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            }, 500);

            // Populate activities
            populateActivities();
            
            // Create chart
            createChart();
        }

        // Populate activity list
        function populateActivities() {
            const activities = [
                {
                    icon: '🛒',
                    color: 'linear-gradient(45deg, #10b981, #059669)',
                    title: 'New order received',
                    time: '2 minutes ago'
                },
                {
                    icon: '👤',
                    color: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                    title: 'User John Smith registered',
                    time: '15 minutes ago'
                },
                {
                    icon: '💳',
                    color: 'linear-gradient(45deg, #f59e0b, #d97706)',
                    title: 'Payment of $1,250 received',
                    time: '1 hour ago'
                },
                {
                    icon: '📊',
                    color: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
                    title: 'Monthly report generated',
                    time: '2 hours ago'
                },
                {
                    icon: '🎯',
                    color: 'linear-gradient(45deg, #ef4444, #dc2626)',
                    title: 'Sales goal updated',
                    time: '3 hours ago'
                }
            ];

            const activityList = document.getElementById('activityList');
            if (activityList) {
                activityList.innerHTML = activities.map(activity => `
                    <div class="activity-item">
                        <div class="activity-icon" style="background: ${activity.color};">
                            ${activity.icon}
                        </div>
                        <div class="activity-content">
                            <div class="activity-title">${activity.title}</div>
                            <div class="activity-time">${activity.time}</div>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Create chart using Canvas
        function createChart() {
            const canvas = document.getElementById('salesChart');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            canvas.width = canvas.offsetWidth * 2;
            canvas.height = canvas.offsetHeight * 2;
            ctx.scale(2, 2);
            
            // Chart data
            const data = [30, 45, 35, 55, 40, 65, 50, 70, 60, 80, 75, 90];
            const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            
            const chartWidth = canvas.offsetWidth - 80;
            const chartHeight = canvas.offsetHeight - 80;
            const maxValue = Math.max(...data);
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            
            // Draw grid lines
            ctx.strokeStyle = '#f0f0f0';
            ctx.lineWidth = 1;
            
            for (let i = 0; i <= 5; i++) {
                const y = 40 + (chartHeight / 5) * i;
                ctx.beginPath();
                ctx.moveTo(60, y);
                ctx.lineTo(60 + chartWidth, y);
                ctx.stroke();
            }
            
            // Draw chart line
            ctx.strokeStyle = '#667eea';
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            data.forEach((value, index) => {
                const x = 60 + (chartWidth / (data.length - 1)) * index;
                const y = 40 + chartHeight - (value / maxValue) * chartHeight;
                
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            
            ctx.stroke();
            
            // Draw data points
            ctx.fillStyle = '#667eea';
            data.forEach((value, index) => {
                const x = 60 + (chartWidth / (data.length - 1)) * index;
                const y = 40 + chartHeight - (value / maxValue) * chartHeight;
                
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fill();
            });
            
            // Draw labels
            ctx.fillStyle = '#666';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            
            labels.forEach((label, index) => {
                const x = 60 + (chartWidth / (data.length - 1)) * index;
                ctx.fillText(label, x, canvas.offsetHeight - 15);
            });
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Hide all sections first
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });
            
            // Show analytics by default
            const analyticsSection = document.getElementById('analytics-section');
            if (analyticsSection) {
                analyticsSection.style.display = 'block';
                analyticsSection.classList.add('active');
                initializeDashboard();
            }
        });