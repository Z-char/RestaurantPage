export default function loadMenu() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';

  const title = document.createElement('h2');
  title.textContent = 'Our Menu';

  menuContainer.appendChild(title);

  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', price: '$8.99', description: 'Toasted bread with tomatoes and basil' },
        { name: 'Calamari', price: '$10.99', description: 'Crispy fried squid with marinara sauce' },
        { name: 'Spring Rolls', price: '$7.99', description: 'Fresh vegetables in crispy rice paper' },
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', price: '$24.99', description: 'Fresh salmon with lemon butter sauce' },
        { name: 'Ribeye Steak', price: '$28.99', description: 'Premium cut aged 30 days' },
        { name: 'Pasta Carbonara', price: '$16.99', description: 'Classic Italian pasta with bacon and cream' },
        { name: 'Vegetarian Buddha Bowl', price: '$14.99', description: 'Quinoa, roasted vegetables, and tahini dressing' },
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', price: '$7.99', description: 'Classic Italian dessert with espresso' },
        { name: 'Chocolate Lava Cake', price: '$8.99', description: 'Warm chocolate cake with molten center' },
        { name: 'Cheesecake', price: '$6.99', description: 'New York style cheesecake' },
      ]
    }
  ];

  menuItems.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'menu-section';

    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = section.category;
    sectionDiv.appendChild(categoryTitle);

    const itemsList = document.createElement('div');
    itemsList.className = 'items-list';

    section.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';

      const itemName = document.createElement('div');
      itemName.className = 'item-name';
      itemName.innerHTML = `<strong>${item.name}</strong> <span class="price">${item.price}</span>`;

      const itemDesc = document.createElement('p');
      itemDesc.className = 'item-description';
      itemDesc.textContent = item.description;

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemDesc);
      itemsList.appendChild(itemDiv);
    });

    sectionDiv.appendChild(itemsList);
    menuContainer.appendChild(sectionDiv);
  });

  contentDiv.appendChild(menuContainer);
}
