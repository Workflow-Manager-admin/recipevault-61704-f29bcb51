/* global alert, window */
//
// MainContainer.js
// Main layout container for RecipeVault-61704 (Vite + JS)
//
// This file implements a light-themed, modern structure with a sidebar navigation
// and a main content area. Sidebar items scaffold navigation for Recipe Browsing,
// Recipe Management (CRUD), User Authentication, User Management, and Category Management.
//

// PUBLIC_INTERFACE
export function MainContainer() {
  /**
   * This is the main container function for the RecipeVault frontend application.
   * It renders a sidebar navigation using the provided color palette and a main content area.
   * All primary features are scaffolded in the sidebar (links are placeholders).
   */

  // Sidebar navigation items
  const navItems = [
    { name: 'Recipe Browsing', icon: '🍽️', key: 'browse' },
    { name: 'Recipe Management', icon: '✏️', key: 'manage' },
    { name: 'Recipe CRUD', icon: '🔄', key: 'crud' },
    { name: 'User Authentication', icon: '🔓', key: 'auth' },
    { name: 'User Management', icon: '👤', key: 'user' },
    { name: 'Category Management', icon: '🏷️', key: 'category' }
  ];

  // Handle click events on navigation (stub for now)
  function handleNavClick(e, key) {
    e.preventDefault();
    // Placeholder for future routing logic
    window.alert(`Selected "${key}". Feature not implemented.`);
  }

  // Return the main container structure
  return `
    <div class="rv-main-container">
      <aside class="rv-sidebar">
        <div class="rv-logo">
          <span style="font-weight:bold;color:#4CAF50">🍴RecipeVault</span>
        </div>
        <nav>
          <ul class="rv-nav-list">
            ${navItems
              .map(
                (item) => `
                <li>
                  <a href="#" class="rv-nav-link" data-key="${item.key}">
                    <span class="rv-nav-icon">${item.icon}</span>
                    <span>${item.name}</span>
                  </a>
                </li>`
              )
              .join('')}
          </ul>
        </nav>
      </aside>
      <main class="rv-main-content">
        <h2>Welcome to RecipeVault</h2>
        <p>
          Select a feature from the sidebar to get started.
        </p>
      </main>
    </div>
  `;
}

// Attach event listeners after rendering
// PUBLIC_INTERFACE
export function setupMainContainer(rootElement) {
  /**
   * Render and set up the main container UI in a given root element.
   * @param {HTMLElement} rootElement - DOM node to render the container into.
   */
  rootElement.innerHTML = MainContainer();
  // Set up navigation click handlers
  rootElement
    .querySelectorAll('.rv-nav-link')
    .forEach((link) =>
      link.addEventListener('click', (e) => handleNavClick(e, link.dataset.key))
    );
}


