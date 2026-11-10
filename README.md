# Chandu Marru - Portfolio

Professional portfolio website showcasing 9+ years of experience as a Senior Java Full Stack Developer and AI Engineer.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Create a new React app:**
```bash
npx create-react-app chandu-portfolio
cd chandu-portfolio
```

2. **Replace the files:**
   - Copy `Portfolio.jsx` to `src/Portfolio.jsx`
   - Copy `index.js` to `src/index.js`
   - Copy `public-index.html` content to `public/index.html`

3. **Install dependencies:**
```bash
npm install
```

4. **Start the development server:**
```bash
npm start
```

The portfolio will open at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment Options

### Option 1: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://chandurao77.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Option 3: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── Portfolio.jsx    # Main portfolio component (content lives in the data at the top)
│   ├── Portfolio.css    # Styles, including the light and dark themes
│   └── index.js         # Entry point
├── package.json
└── README.md
```

## ✨ Features

- **Responsive Design** - Works on all devices
- **Smooth Animations** - Engaging scroll animations
- **Custom Cursor** - Interactive cursor effects
- **Light and Dark Mode** - Toggle in the top bar; dark is the default and the choice is remembered
- **Modern Stack** - React 18 with hooks
- **SEO Optimized** - Proper meta tags and structure
- **Fast Performance** - Optimized build process

## 🎨 Customization

### Update Personal Information

Edit the constants and data arrays at the top of `Portfolio.jsx`:

- Photo: put an image in `public/` (for example `public/profile.jpg`) and set `PHOTO_URL = '/profile.jpg'`. Until then the hero shows initials.
- Resume: update `RESUME_URL`

- Contact details (email, phone, LinkedIn)
- GitHub profile link
- Resume link
- Experience details
- Skills and technologies
- Stats and achievements

### Styling

All styles live in `src/Portfolio.css`.

### Color Scheme

Dark theme (default):
- Primary: `#00ff88` (Neon Green)
- Secondary: `#4d94ff` (Blue)
- Background: `#0a0a0a` (Dark)

Change these in the `:root` CSS variables. The light theme values are in the `:root[data-theme="light"]` block.

## 🔗 Links

- **Live Demo:** (Add your deployed URL here)
- **GitHub:** https://github.com/chandurao77
- **LinkedIn:** https://www.linkedin.com/in/chandumarru964232/
- **Email:** Chandum9642@gmail.com

## 📝 License

MIT License - feel free to use this portfolio template for your own projects!

## 🙏 Credits

Built with React and modern web technologies.
