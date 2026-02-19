document.addEventListener('DOMContentLoaded', function () {
  // Fonction pour afficher le contenu d'un onglet
  function showContent(tabId, contentSelector) {
    const contents = document.querySelectorAll(contentSelector);
    contents.forEach(function (content) {
      content.classList.remove('active');
      content.style.display = 'none';
    });

    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.add('active');
      activeContent.style.display = 'block';
    }
  }

  // Gérer les onglets des étapes
  const stepButtons = document.querySelectorAll('.tab-button');
  stepButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      stepButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      showContent(tabId, '.tab-content');
    });
  });

  // Initialiser le premier onglet des étapes
  showContent('step1', '.tab-content');

  // Gérer les onglets "À propos de moi"
  const aboutButtons = document.querySelectorAll('.about-tab-button');
  aboutButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      aboutButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      showContent(tabId, '.about-tab-content');
    });
  });

  // Initialiser le premier onglet "À propos de moi"
  const firstAboutTabId = aboutButtons[0].getAttribute('data-tab');
  showContent(firstAboutTabId, '.about-tab-content');
});
