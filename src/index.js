import HomeLoader from './modules/home.js';
import MenuLoader from './modules/menu.js';
import ContactLoader from './modules/contact.js';
import './styles/style.css';

const tabMappings = {
    'home-btn': HomeLoader,
    'menu-btn': MenuLoader,
    'contact-btn': ContactLoader,
};

(() => {
    HomeLoader();
    setActiveButton('home-btn');

    for (const [id, handler] of Object.entries(tabMappings)) {
        const btn = document.getElementById(id);
        btn.addEventListener('click', () => {
            handler();
            setActiveButton(id);
        })
    }
})();

function setActiveButton(id) {
    const allButtons = document.querySelectorAll('nav button');
    allButtons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.getElementById(id);
    activeBtn.classList.add('active');
}