// Este código cria uma lista de usuários com a capacidade de exibir uma mensagem de introdução ao clicar em cada usuário individualmente.
import mojo from 'mojo';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
  }
}

const userList = [
  new User('João', 25),
  new User('Maria', 30),
  new User('Carlos', 42)
];

const container = mojo.createContainer();

userList.forEach(user => {
  const userElement = mojo.createElement('div');
  userElement.textContent = `${user.name}, ${user.age} anos`;
  userElement.addEventListener('click', () => user.introduce());
  container.addChild(userElement);
});

mojo.addToDocument(container);
