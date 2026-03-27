# 🎯 TFS Customer 360 Dashboard

A modern, responsive React-based customer analytics and insights dashboard built with **Argon Dashboard React**, featuring data visualization with D3.js and Bootstrap styling.

## 📋 Overview

**TFS Customer 360** is an enterprise-grade dashboard application designed to provide comprehensive customer insights, analytics, and management capabilities. The project combines React's component-based architecture with powerful visualization libraries and a polished UI framework to create an intuitive user experience.

### Technology Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 17.0.2, Reactstrap 8.9.0 |
| **Styling** | SCSS (49.5%), CSS (17.6%), Bootstrap 4.6.0 |
| **JavaScript** | 32.6% |
| **Visualization** | D3.js 7.3.0, Chart.js 2.9.4, Chart.js React 2.11.1 |
| **Build Tool** | React Scripts 4.0.3, Webpack (via CRA) |
| **SCSS Compiler** | Node-SASS 6.0.1 |
| **Routing** | React Router DOM 5.2.0 |
| **Linting** | ESLint 5.8.0 |

## 🌟 Key Features

- **📊 Data Visualization** - Interactive charts and graphs powered by D3.js and Chart.js
- **🎨 Modern UI/UX** - Built on Argon Dashboard design system with Bootstrap 4
- **⚡ Responsive Design** - Mobile-first approach with responsive Bootstrap grid
- **🔧 Component-Based** - Modular, reusable React components for maintainability
- **📱 Dashboard Views** - Multiple pre-built page layouts and templates
- **🔐 Admin & Auth** - Separate authentication and admin layouts
- **📈 Data Tables** - Dynamic table components with sorting and filtering capabilities
- **🗺️ Maps Integration** - Geographic data visualization support
- **🌐 Multi-page App** - Client-side routing with React Router
- **📦 Performance Optimized** - Minified CSS/SCSS and efficient component rendering

## 📁 Project Structure

```
tfscustomer360/
├── customer360-ui/              # Main React application directory
│   ├── public/                  # Static assets
│   │   ├── index.html           # Entry HTML file
│   │   └── favicon.ico
│   ├── src/                     # Source code
│   │   ├── assets/              # Styling and images
│   │   │   ├── css/             # Compiled CSS output
│   │   │   ├── scss/            # SCSS source files
│   │   │   │   ├── bootstrap/   # Bootstrap customizations
│   │   │   │   ├── core/        # Component styles
│   │   │   │   ├── custom/      # Custom styles
│   │   │   │   └── react/       # React-specific styles
│   │   │   ├── fonts/           # Typography assets
│   │   │   ├── img/             # Images and icons
│   │   │   └── vendor/          # Third-party vendor files
│   │   ├── components/          # Reusable React components
│   │   │   ├── Footers/         # Footer components
│   │   │   ├── Headers/         # Header components
│   │   │   ├── Navbars/         # Navigation bar components
│   │   │   └── Sidebar/         # Sidebar components
│   │   ├── layouts/             # Page layout templates
│   │   │   ├── Admin.jsx        # Admin dashboard layout
│   │   │   └── Auth.jsx         # Authentication layout
│   │   ├── views/               # Page components
│   │   │   ├── Index.jsx        # Home page
│   │   │   └── examples/        # Example pages
│   │   ├── variables/           # Global variables and configs
│   │   ├── routes.js            # Route definitions
│   │   └── index.js             # Application entry point
│   ├── Documentation/           # Project documentation
│   ├── .babelrc                 # Babel configuration
│   ├── .eslintrc.js             # ESLint rules
│   ├── jsconfig.json            # JavaScript configuration
│   ├── package.json             # Dependencies and scripts
│   ├── gulpfile.js              # Gulp build tasks
│   └── README.md                # UI-specific documentation
├── node_modules/               # NPM dependencies
├── package-lock.json           # Locked dependency versions
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 12+ or higher
- **npm** 6.0+ or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shru-T1/tfscustomer360.git
   cd tfscustomer360
   ```

2. **Navigate to the UI directory**
   ```bash
   cd customer360-ui
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   - Application runs on `http://localhost:3000`
   - Automatic page refresh on code changes

### Available Scripts

```bash
# Start development server (hot reload)
npm start

# Build for production
npm build

# Run unit tests
npm test

# Eject configuration (⚠️ irreversible)
npm eject

# Clean install
npm run install:clean

# SCSS compilation and minification
npm run compile:scss    # Compile SCSS to CSS
npm run minify:scss     # Minify CSS
npm run map:scss        # Generate source maps
npm run build:scss      # All SCSS tasks
```

## 🏗️ Architecture

### Component Structure

```
App
├── Routes (React Router)
│   ├── Admin Layout
│   │   ├── AdminNavbar
│   │   ├── Sidebar
│   │   ├── View Components
│   │   └── AdminFooter
│   │
│   └── Auth Layout
│       ├── AuthNavbar
│       ├── Auth View (Login, Register)
│       └── AuthFooter
```

### Key Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `Admin` | Main dashboard layout wrapper | `layouts/Admin.jsx` |
| `Auth` | Authentication pages layout | `layouts/Auth.jsx` |
| `AdminNavbar` | Top navigation bar | `components/Navbars/AdminNavbar.jsx` |
| `Sidebar` | Left sidebar navigation | `components/Sidebar/Sidebar.jsx` |
| `Header` | Page header with user info | `components/Headers/Header.jsx` |
| `AdminFooter` | Dashboard footer | `components/Footers/AdminFooter.jsx` |

### Styling Architecture

The project uses a SCSS-first approach:

```
assets/scss/
├── argon-dashboard-react.scss   # Main entry point
├── bootstrap/                   # Bootstrap customizations
├── core/                        # Component styles
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   ├── tables/
│   └── ...
├── custom/                      # Project-specific styles
└── react/                       # React component styles
```

## 📊 Features & Pages

### Built-in Example Pages

- **Dashboard** - Main analytics and metrics view
- **User Profile** - User information and settings
- **Tables** - Data table examples with sample data
- **Icons** - FontAwesome icon showcase
- **Maps** - Geographic data visualization
- **Login** - Authentication page
- **Register** - User registration form

### Data Visualization

- **Charts** - Chart.js integration for graphs and data representation
- **D3.js** - Advanced data visualization and custom visualizations
- **Tables** - Interactive data tables with sorting capabilities

## 🔧 Configuration

### Environment Configuration

Create a `.env` file in the `customer360-ui` directory for environment variables:

```bash
# .env
REACT_APP_API_URL=http://your-api-url
REACT_APP_ENV=development
```

### Styling Customization

Customize the theme by modifying SCSS variables in `src/assets/scss/core/`:

```scss
// Change primary color
$primary-color: #your-color;

// Change fonts
$font-family-sans-serif: 'Your Font', sans-serif;
```

## 🎨 Styling Details

### Language Composition
- **CSS**: 49.5% - Pre-compiled stylesheets and vendor styles
- **JavaScript**: 32.6% - React components and application logic
- **SCSS**: 17.6% - Source styling files for compilation
- **HTML**: 0.3% - Minimal HTML (React handles rendering)

### CSS Framework

The project is built on **Bootstrap 4.6.0** with customizations:
- Responsive grid system
- Pre-built components
- Utility classes
- Theme customization via SCSS variables

### Font Icons

- **FontAwesome** 5.15.3 - Comprehensive icon library
- **Nucleo** - Custom icon set

## 📦 Dependencies Overview

### Core Dependencies
- **react** 17.0.2 - UI library
- **react-dom** 17.0.2 - DOM rendering
- **react-router-dom** 5.2.0 - Routing
- **reactstrap** 8.9.0 - React Bootstrap components
- **bootstrap** 4.6.0 - CSS framework

### Data Visualization
- **d3** 7.3.0 - Data-driven visualization
- **chart.js** 2.9.4 - Chart creation
- **react-chartjs-2** 2.11.1 - React wrapper for Chart.js

### Utilities
- **moment** 2.29.1 - Date/time handling
- **classnames** 2.3.1 - Dynamic class binding
- **nouislider** 15.2.0 - Slider component
- **react-datetime** 3.0.4 - DateTime picker
- **react-copy-to-clipboard** 5.0.3 - Clipboard utilities

### Development Tools
- **react-scripts** 4.0.3 - Create React App tools
- **node-sass** 6.0.1 - SCSS compiler
- **eslint** 5.8.0 - Code linting
- **gulp** 4.0.2 - Task automation

## 🌐 Browser Support

The application officially supports the last two versions of:

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📝 Development Guidelines

### Code Style

- **ESLint Configuration**: `.eslintrc.js` - Enforces code quality
- **Prettier Ignore**: `.prettierignore` - Code formatting rules
- **Babel Config**: `.babelrc` - ES6+ transpilation

### Component Best Practices

1. **Functional Components** - Prefer functional components with hooks
2. **Props Validation** - Use PropTypes for type checking
3. **Reusability** - Create small, focused, reusable components
4. **Naming** - Use PascalCase for components, camelCase for functions
5. **File Structure** - One component per file in `components/` directory

### Styling Best Practices

1. **SCSS over CSS** - Use SCSS for better maintainability
2. **BEM Naming** - Block Element Modifier pattern for CSS classes
3. **Variables** - Define colors and sizes as SCSS variables
4. **Mixins** - Create reusable SCSS mixins
5. **Mobile-First** - Design for mobile, scale up with media queries

## 🔄 Workflow

### Development Workflow

```bash
# 1. Create feature branch
git checkout -b feature/your-feature

# 2. Make changes
# 3. Test locally
npm start

# 4. Build SCSS
npm run build:scss

# 5. Commit changes
git add .
git commit -m "feat: description"

# 6. Push and create PR
git push origin feature/your-feature
```

### Production Build

```bash
# Build optimized bundle
npm run build

# Output: `build/` directory
# - Minified JavaScript
# - Optimized CSS
# - Compressed assets
```

## 🐛 Troubleshooting

### Common Issues

**Issue**: Port 3000 already in use
```bash
# Solution: Use different port
PORT=3001 npm start
```

**Issue**: SCSS compilation errors
```bash
# Solution: Rebuild SCSS
npm run build:scss
```

**Issue**: Module not found
```bash
# Solution: Clean install
npm run install:clean
```

**Issue**: Stale cache
```bash
# Solution: Clear npm cache
npm cache clean --force
npm install
```

## 📚 Resources

### Documentation
- [Argon Dashboard React Docs](https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Bootstrap 4 Documentation](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [D3.js Documentation](https://d3js.org/)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

### External Links
- [Creative Tim (Template Source)](https://www.creative-tim.com/product/argon-dashboard-react)
- [GitHub Issues](https://github.com/Shru-T1/tfscustomer360/issues)
- [Project Wiki](https://github.com/Shru-T1/tfscustomer360/wiki)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint rules
- Write meaningful commit messages
- Test changes locally before submitting PR
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](customer360-ui/LICENSE) file for details.

### Original Template
- **Argon Dashboard React** by [Creative Tim](https://www.creative-tim.com)
- Licensed under MIT License
- Copyright 2021 Creative Tim

## 👥 Project Team

- **Project Lead**: TFS Team
- **Contributors**: Development Team
- **Based On**: [Argon Dashboard React](https://www.creative-tim.com/product/argon-dashboard-react)

## 📞 Support & Contact

For issues, questions, or suggestions:

- 📧 Email: [support email if available]
- 🐛 Issues: [GitHub Issues](https://github.com/Shru-T1/tfscustomer360/issues)
- 📋 Project Board: [Jira Board](https://customer-360-tcu.atlassian.net/jira/software/projects/C360/boards/1/roadmap)
- 📁 Documentation: [OneDrive](https://mydocs.toyota.com) (internal)
- 📊 Resources: [Google Drive](https://drive.google.com/drive/folders/1Xzc_19ERzvFg1pYve7d1RFlxDYTXt-9k) (internal)



The app opens at `http://localhost:3000` with hot reload enabled.

### Development Server Features

- **Hot Module Replacement (HMR)** - Changes reflect immediately
- **Fast Refresh** - Component-level refresh without losing state
- **Error Overlay** - Clear error messages during development
- **Source Maps** - Easy debugging in browser DevTools

## SCSS Development

### Watching SCSS Files

```bash
# Auto-compile SCSS on file changes
npm run compile:scss
```

### SCSS Structure

```
src/assets/scss/
├── argon-dashboard-react.scss      # Main entry (imports everything)
│
├── bootstrap/                       # Bootstrap overrides
│   ├── _mixins.scss
│   └── _utilities.scss
│
├── core/                            # Component-specific styles
│   ├── _type.scss                  # Typography
│   ├── _cards.scss                 # Card styles
│   ├── _buttons.scss               # Button variants
│   ├── _forms.scss                 # Form elements
│   ├── _tables.scss                # Table styles
│   ├── _navbars.scss               # Navigation
│   └── ...
│
├── custom/                          # Project-specific
│   └── _custom.scss
│
└── react/                           # React component overrides
    └── _react.scss
```

### CSS Variable Usage

```scss
// Color variables
$primary: #5e72e4;
$secondary: #32325d;
$success: #2dce89;
$warning: #fb6340;
$danger: #f5365c;

// Spacing variables
$spacer: 1rem;

// Font variables
$font-size-base: 0.875rem;
$font-family-sans-serif: -apple-system, BlinkMacSystemFont, ...;
```

## Component Development

### Creating a New Component

```jsx
// src/components/MyComponent/MyComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './MyComponent.scss';

const MyComponent = ({ title, onClick }) => {
  return (
    <div className="my-component">
      <h3>{title}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MyComponent.defaultProps = {
  onClick: () => {},
};

export default MyComponent;
```

### Component Styling

```scss
// src/components/MyComponent/MyComponent.scss
.my-component {
  padding: $spacer;
  border-radius: 0.375rem;
  
  h3 {
    margin-bottom: $spacer / 2;
    color: $primary;
  }
  
  button {
    @extend .btn;
    @extend .btn-primary;
  }
}
```

## Adding New Pages

### Create Page Component

```jsx
// src/views/MyPage.jsx
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MyPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <h1>My Page</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPage;
```

### Register in Routes

```jsx
// src/routes.js
import MyPage from 'views/MyPage';

const routes = [
  {
    path: '/mypage',
    name: 'My Page',
    icon: 'ni ni-bullet-list-67 text-red',
    component: MyPage,
    layout: '/admin',
  },
  // ... other routes
];

export default routes;
```

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

## Building for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## Debugging Tips

### Browser DevTools

1. **React DevTools** - Browser extension for React component inspection
2. **Redux DevTools** - For state management debugging (if using Redux)
3. **Source Maps** - Enable for easier debugging with transpiled code

### Console Debugging

```javascript
// Log component props
console.log('Props:', props);

// Conditional logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// Performance timing
console.time('operation');
// ... operation code
console.timeEnd('operation');
```

## Common Development Tasks

### Add a New Chart

```jsx
import { Bar } from 'react-chartjs-2';
import { chartData, chartOptions } from 'variables/charts.jsx';

<Bar data={chartData} options={chartOptions} />;
```

### Add a New Table

```jsx
import { Table } from 'reactstrap';

<Table responsive>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    {/* Data rows */}
  </tbody>
</Table>
```

### Add FontAwesome Icon

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faCoffee} />;
```

## Environment Variables

Create `.env` file in `customer360-ui/` directory:

```bash
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_ENVIRONMENT=development
REACT_APP_DEBUG=true
```

Access in code:

```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Performance Optimization

### Code Splitting

```jsx
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### Memoization

```jsx
import React, { memo } from 'react';

const MyComponent = memo(({ data }) => {
  return <div>{data}</div>;
});

export default MyComponent;
```

## Git Workflow

```bash
# Feature development
git checkout -b feature/new-feature

# Commit with meaningful messages
git commit -m "feat: add new dashboard widget"
git commit -m "fix: resolve styling issue on mobile"
git commit -m "docs: update setup instructions"

# Push and create PR
git push origin feature/new-feature
```

## Deployment

### Build Checklist

- [ ] All tests pass (`npm test`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] SCSS compiled correctly
- [ ] Production build succeeds (`npm run build`)
- [ ] No console errors in build
- [ ] Performance metrics acceptable

### Deployment Commands

```bash
# Build for production
npm run build

# Build output directory
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── index.html
└── favicon.ico
```

---

For more information, see the main [README.md](README.md).





## Appendix


### Quicklinks

- Github: https://github.com/rajasnathak/tfscustomer360
- Google Drive (internal): https://drive.google.com/drive/folders/1Xzc_19ERzvFg1pYve7d1RFlxDYTXt-9k?usp=sharing
- OneDrive (with TFS): https://mydocs.toyota.com:443/:f:/g/personal/mirzaraheem_baig_toyota_com/EoAb7wlHLohJmUFfzkrQilQBVgGEAl7DRdGsz6XgIa8kXg?e=5*3afom6e2&at=9__;JQ!!K6Z8K8YTIA!TDeMe6lQF-kol53M2M8U7DhAWTweqQnHiA4RimtDQyNDljyIrpaphiYNX84dA2bTvA$
- Jira:
https://customer-360-tcu.atlassian.net/jira/software/projects/C360/boards/1/roadmap?atlOrigin=eyJpIjoiMWE4ODEyMGQ1Nzk0NGRjOWE0YjNlZTIwZDViMzBkNjIiLCJwIjoiaiJ9

### Weekly Deliverables
- Peer Review
- Weekly Activity Report
- Meeting Minutes
- Relevant Document Deliverables
