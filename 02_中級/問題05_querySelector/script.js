const el = document.querySelector('#title');
el.textContent = "書き換えられました！";

const el2 = document.querySelector('.description');
el2.textContent = "JavaScriptでDOMを書き換えた結果です。";

const items = document.querySelectorAll('.item');
const letters = ['A', 'B', 'C',];

items.forEach((item, index) => {
    item.textContent = letters[index];
});