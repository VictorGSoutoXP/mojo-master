// Criando um botão com uma mensagem de alerta

import mojo from 'mojo';

const button = mojo.createButton('Clique aqui');

button.onClick(() => {
  alert('Você clicou no botão!');
});

mojo.addToDocument(button);
