// À medida que os aplicativos em Mojo crescem em complexidade, otimizar o desempenho torna-se um desafio importante.
// Isso envolve identificar gargalos de desempenho, reduzir o uso excessivo de recursos, implementar técnicas de renderização eficiente, como renderização sob demanda, e lidar com aprimoramentos progressivos para garantir que o aplicativo funcione suavemente em uma ampla gama de dispositivos e configurações.
// A otimização de desempenho é crucial para oferecer uma experiência de usuário fluida e responsiva.

import mojo from 'mojo';

const container = mojo.createContainer();
const listItemTemplate = document.createElement('template');
listItemTemplate.innerHTML = `

  <li class="list-item">
    <span class="item-text"></span>
  </li>
`;
function createListItem(text) {
const listItem = listItemTemplate.content.cloneNode(true);
const itemText = listItem.querySelector('.item-text');
itemText.textContent = text;
return listItem;
}

function renderList(items) {
const fragment = document.createDocumentFragment();
items.forEach(item => {
const listItem = createListItem(item);
fragment.appendChild(listItem);
});
const listContainer = document.createElement('ul');
listContainer.appendChild(fragment);
container.innerHTML = '';
container.appendChild(listContainer);
}

const items = ['Item 1', 'Item 2', 'Item 3'];

renderList(items);

mojo.addToDocument(container);
