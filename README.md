# Project Soch Website

A modern, responsive website for Project Soch - a non-profit organization dedicated to empowering street kids and the transgender community through education, support, and opportunities.

## 🚀 Features

- **Modern React.js Architecture**: Built with React 18 and modern hooks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Animated counters, forms, and smooth scrolling
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance Optimized**: Efficient rendering and minimal bundle size

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter & Poppins)
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.js   # Navigation bar with mobile menu
│   ├── Hero.js         # Hero section with animated counters
│   ├── About.js        # About us section
│   ├── Programs.js     # Current programs showcase
│   ├── GetInvolved.js  # Ways to get involved
│   ├── Donate.js       # Donation section
│   ├── Mission.js      # Mission and vision
│   ├── Stories.js      # Success stories
│   ├── Volunteers.js   # Volunteer profiles
│   ├── Contact.js      # Contact form and info
│   └── Footer.js       # Footer with links
├── App.js              # Main app component
├── index.js            # App entry point
├── index.css           # Global styles and Tailwind imports
└── App.css             # App-specific styles

public/
└── index.html          # HTML template

tailwind.config.js      # Tailwind CSS configuration
package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-soch-website.git
cd project-soch-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

1. Push your code to GitHub
2. Run the deployment command:
```bash
npm run deploy
```

The site will be available at: `https://yourusername.github.io/project-soch-website`

## 🎨 Customization

### Colors
The color scheme can be modified in `tailwind.config.js`:
```javascript
colors: {
  primary: '#233d60',      // Main brand color
  secondary: '#ff7f00',    // Accent color
  dark: '#1d314e',         // Dark variant
  'primary-light': '#2d4a6b',
  'secondary-light': '#ff8f1a'
}
```

### Content
- Update text content in respective component files
- Replace images with your own assets
- Modify contact information in `Contact.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Contact

For questions or support, please contact:
- Email: info@projectsoch.org
- Phone: +91 98765 43210
- Address: 123 Hope Street, Community Center, Mumbai, Maharashtra 400001, India

---

Made with ❤️ for a better world
