# 📊 Analytics Dashboard

![Dashboard Preview](/assets//dashboard%20screen%20shot.jpeg)

> A modern, responsive analytics dashboard built with **HTML**, **CSS**, and **Vanilla JavaScript**.  
> Features multiple sections including analytics, user management, sales tracking, and settings.

---

## ✨ Features

- 📈 **Analytics Dashboard** - Interactive charts and real-time statistics
- 👥 **User Management** - View and manage users with role-based access
- 💰 **Sales Tracking** - Monitor sales performance and revenue trends
- 📦 **Product Catalog** - Manage inventory and product information
- 📊 **Reports & Analytics** - Generate detailed business reports
- ⚙️ **Settings Panel** - Configure dashboard preferences and account settings
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean design with smooth animations and transitions
- 📊 **Interactive Charts** - Canvas-based charts for data visualization

---

## 🚀 Quick Start

You can run this project locally using any web server or **Visual Studio Code** with **Live Server extension**.

### 🔧 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)
- **Live Server** extension for VS Code (optional but recommended)

---

### 🛠️ Installation & Setup

#### Method 1: Using VS Code with Live Server (Recommended)

1. **Clone or Download the Project**
   ```bash
   https://github.com/Ed-Gigaversity/dashboard
   cd analytics-dashboard
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Install Live Server Extension**
   - Open VS Code Extensions (`Ctrl+Shift+X`)
   - Search for **"Live Server"** by Ritwick Dey
   - Click **Install**

4. **Launch the Dashboard**
   - Right-click on `dashboard.html`
   - Select **"Open with Live Server"**
   - Dashboard opens at `http://127.0.0.1:5500/` or similar

#### Method 2: Direct Browser Opening

1. **Download the Project Files**
2. **Open `dashboard.html`** directly in your web browser
3. **Start Exploring** the dashboard features


## 🗂️ Project Structure

```
analytics-dashboard/
├── dashboard.html      # Main HTML file with embedded CSS & JS
├── dashboard.css       # Standalone CSS file (optional)
├── dashboard.js        # Standalone JavaScript file (optional)
└── README.md          # Project documentation
```

**Note:** The main dashboard is a single HTML file with embedded CSS and JavaScript for easy deployment and portability.

---

## 🎯 Dashboard Sections

### 📈 Analytics
- Real-time statistics cards
- Interactive sales chart
- Recent activity feed
- Progress tracking bars
- Animated counters

### 👥 Users
- User management table
- Role-based filtering
- User statistics overview
- Add/Edit/Delete functionality

### 💰 Sales
- Sales performance metrics
- Revenue trend charts
- Top-selling products
- Recent orders table

### 📦 Products
- Product catalog grid
- Inventory management
- Stock level indicators
- Category filtering

### 📊 Reports
- Business report generation
- Scheduled reports
- Multiple export formats
- Performance summaries

### ⚙️ Settings
- General preferences
- Security settings
- Notification controls
- Billing management

---

## 🔧 Technologies Used

- **HTML5** – Semantic structure and layout
- **CSS3** – Modern styling with Flexbox & Grid
- **Vanilla JavaScript** – Interactive functionality and animations
- **Canvas API** – Custom chart rendering
- **CSS Animations** – Smooth transitions and effects
- **Responsive Design** – Mobile-first approach
- **Local Storage** – Data persistence (if implemented)

---

## 🎨 Design Features

- **Modern Gradient Background** – Eye-catching purple/blue gradient
- **Glass Morphism Effects** – Translucent cards with backdrop blur
- **Smooth Animations** – CSS transitions and JavaScript animations
- **Interactive Elements** – Hover effects and click animations
- **Mobile Responsive** – Adapts to all screen sizes
- **Clean Typography** – Segoe UI font family for readability

---

## 🚀 Customization

### Modifying Colors
Edit the CSS variables in the `<style>` section:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
}
```

### Adding New Sections
1. Create a new `content-section` div in HTML
2. Add corresponding navigation link
3. Implement section logic in JavaScript
4. Style with CSS

### Data Integration
Replace static data arrays in JavaScript with API calls:
```javascript
// Replace static data
const users = [...]; 

// With API calls
fetch('/api/users')
  .then(response => response.json())
  .then(users => populateUsersTable(users));
```

---

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Credits

Created with ❤️ using modern web technologies.  
Feel free to explore, customize, and contribute to the project!

---

## 📞 Support

If you encounter any issues or have questions:
- Check browser console for errors
- Ensure JavaScript is enabled
- Try refreshing the page
- Use a modern web browser

**Enjoy your analytics dashboard!** 🚀