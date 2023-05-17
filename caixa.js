import mojo from 'mojo';

const select = mojo.createSelect();

const options = ['Opção 1', 'Opção 2', 'Opção 3'];

options.forEach(option => {
  const selectOption = mojo.createSelectOption(option);
  select.addOption(selectOption);
});

select.onChange(() => {
  const selectedOption = select.getSelectedOption();
  console.log('Opção selecionada:', selectedOption);
});

mojo.addToDocument(select);
