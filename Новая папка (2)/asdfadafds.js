// Получаем элементы из DOM
const title = document.getElementById('title');
const description = document.getElementById('description');
const changeTextButton = document.getElementById('change-text');
const addElementButton = document.getElementById('add-element');
const removeElementButton = document.getElementById('remove-element');
const container = document.getElementById('container');

// Изменение текста и стилей заголовка
changeTextButton.addEventListener('click', () => {
  title.textContent = 'Заголовок изменён!';
  description.textContent = 'Текст тоже обновился!';
  title.classList.toggle('highlight'); // Добавляем/убираем класс
});

// Добавление нового элемента
addElementButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p'); // Создаем <p>
  newParagraph.textContent = 'Это новый добавленный параграф!';
  newParagraph.style.color = 'blue';
  container.appendChild(newParagraph); // Добавляем в контейнер
});

// Удаление последнего добавленного элемента
removeElementButton.addEventListener('click', () => {
  const lastChild = container.lastChild; // Получаем последний элемент
  if (lastChild) {
    container.removeChild(lastChild); // Удаляем элемент
  } else {
    alert('Удалять нечего!');
  }
});


let billi  = ('Billi kottt');
console.log(alert(billi));
    
for (let i = 0; i < 5; i++){
    console.log(i);
}
Переменные apple и Apple (с большой буквы)  - это одна и та же переменная или разные?