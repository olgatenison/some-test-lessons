//tabs
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

console.log(tabs);
console.log(tabs.children);

const changeClass = (el)=> {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;  
    changeClass(e.target);

    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
           content[i].classList.add('active');
        }
    }
})

/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/
