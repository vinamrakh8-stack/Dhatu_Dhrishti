// Dhatu Drishti — dashboard interactivity
document.addEventListener('DOMContentLoaded', () => {

  // --- Nav link active state ---
  const navLinks = document.querySelectorAll('nav a');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navigation?.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.setAttribute('aria-label', 'Open navigation menu');
    });
  });

  // --- Map layer switcher (Satellite / NDVI / Thermal) ---
  const mapTools = document.querySelectorAll('.map-tool');
  mapTools.forEach(tool => {
    tool.addEventListener('click', () => {
      mapTools.forEach(t => t.classList.remove('active'));
      tool.classList.add('active');
      // Placeholder hook: swap map layer rendering based on tool.textContent
      // e.g. toggleMapLayer(tool.textContent.trim());
    });
  });

  // --- Insight "View Analysis" link scrolls to the AI Analysis section ---
  const insightLink = document.querySelector('.insight-link');
  if (insightLink) {
    insightLink.addEventListener('click', () => {
      document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // --- Hero CTA buttons ---
  const exploreBtn = document.querySelector('.btn-primary');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const aiAnalysisBtn = document.querySelector('.btn-ghost');
  if (aiAnalysisBtn) {
    aiAnalysisBtn.addEventListener('click', () => {
      document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // --- Profile button placeholder ---
  const profileBtn = document.querySelector('.profile-btn');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      console.log('Profile menu clicked — hook up a dropdown here.');
    });
  }

  // --- Live "updated X min ago" ticker on the legend bar ---
  const updatedLabel = document.querySelector('.legend-item:last-child');
  if (updatedLabel) {
    let minutes = 2;
    setInterval(() => {
      minutes += 1;
      updatedLabel.textContent = `Updated ${minutes} min ago`;
    }, 60000);
  }
});
