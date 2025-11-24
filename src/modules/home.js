import '../styles/home.css';

export default function home() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-container';

    const title = document.createElement('h2');
    title.textContent = 'Welcome to Delicious Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Lorem Lorem Lorem Lorem anything that fits for the restaurant';

    const highlight = document.createElement('div');
    highlight.className = 'highlight-section';
    highlight.innerHTML = `
        <h3>Why Choose Us?</h3>
        <ul>
            <li>🍴 Authentic recipes from around the world</li>
            <li>👨‍🍳 Experienced chefs with passion for cooking</li>
            <li>🌟 Exceptional customer service</li>
            <li>🏪 Cozy and welcoming atmosphere</li>
        </ul>
    `;

    homeContainer.appendChild(title);
    homeContainer.appendChild(description);
    homeContainer.appendChild(highlight);
    contentDiv.appendChild(homeContainer);
}