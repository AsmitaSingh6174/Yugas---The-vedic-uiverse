// navbar-Show-Menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')


//  GalleryChoice
// Add floating elements
const floatingElements = ['👑', '🚩', '📖', '📜', '🌍','🛕'];
const container = document.querySelector('.floating-elements');

for (let i = 0; i < 20; i++) {
    const element = document.createElement('div');
    element.className = 'floating-item';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    element.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(element);
}

// Role selection and form toggle
document.querySelectorAll('.btn-role').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.form-container').classList.remove('d-none');
        document.querySelector('.role-buttons').classList.add('d-none');
    });
});

