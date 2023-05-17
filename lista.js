// Exibindo uma lista de itens

import mojo from 'mojo';

const items = ['Item 1', 'Item 2', 'Item 3'];

const list = mojo.createList();

items.forEach(item => {
  const listItem = mojo.createListItem(item);
  list.addItem(listItem);
});

mojo.addToDocument(list);
