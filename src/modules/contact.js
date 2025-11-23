export default function loadContact() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

  const contactContainer = document.createElement('div');
  contactContainer.className = 'contact-container';

  const title = document.createElement('h2');
  title.textContent = 'Contact Us';

  contactContainer.appendChild(title);

  const contactInfoDiv = document.createElement('div');
  contactInfoDiv.className = 'contact-info';

  const infoItems = [
    {
      icon: '📍',
      label: 'Address',
      content: '123 Culinary Street, Food City, FC 12345'
    },
    {
      icon: '📞',
      label: 'Phone',
      content: '(555) 123-4567'
    },
    {
      icon: '✉️',
      label: 'Email',
      content: 'hello@deliciousrestaurant.com'
    },
    {
      icon: '🕐',
      label: 'Hours',
      content: 'Monday - Thursday: 11am - 10pm\nFriday - Saturday: 11am - 11pm\nSunday: 12pm - 9pm'
    }
  ];

  infoItems.forEach(item => {
    const infoItem = document.createElement('div');
    infoItem.className = 'info-item';

    const icon = document.createElement('span');
    icon.className = 'info-icon';
    icon.textContent = item.icon;

    const label = document.createElement('h3');
    label.textContent = item.label;

    const content = document.createElement('p');
    content.textContent = item.content;
    content.style.whiteSpace = 'pre-line';

    infoItem.appendChild(icon);
    infoItem.appendChild(label);
    infoItem.appendChild(content);
    contactInfoDiv.appendChild(infoItem);
  });

  contactContainer.appendChild(contactInfoDiv);

  const formDiv = document.createElement('div');
  formDiv.className = 'contact-form-section';

  const formTitle = document.createElement('h3');
  formTitle.textContent = 'Send us a Message';

  const form = document.createElement('form');
  form.className = 'contact-form';

  const formFields = [
    { label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
    { label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
    { label: 'Subject', type: 'text', placeholder: 'Subject', required: true }
  ];

  formFields.forEach(field => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const label = document.createElement('label');
    label.textContent = field.label;

    const input = document.createElement('input');
    input.type = field.type;
    input.placeholder = field.placeholder;
    if (field.required) input.required = true;

    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });

  const messageGroup = document.createElement('div');
  messageGroup.className = 'form-group';

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message';

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Your message here...';
  textarea.rows = '5';
  textarea.required = true;

  messageGroup.appendChild(messageLabel);
  messageGroup.appendChild(textarea);
  form.appendChild(messageGroup);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Send Message';
  submitBtn.className = 'submit-btn';

  form.appendChild(submitBtn);

  formDiv.appendChild(formTitle);
  formDiv.appendChild(form);
  contactContainer.appendChild(formDiv);

  contentDiv.appendChild(contactContainer);
}
