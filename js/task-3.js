//tabs
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const tabsSecond = document.getElementById('second-tabs');
const contentSecond = document.querySelectorAll('.second-content');

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
    Внутри третьей вкладки добавить функционал табов. 
    Количество вкладок: 2. 
    Контент внутри - на ваш вкус 
*/
const changeSecondClass = (el)=> {
    for (let i = 0; i < tabsSecond.children.length; i++) {
        tabsSecond.children[i].classList.remove('activeSecond');
    }
    el.classList.add('activeSecond');
}

tabsSecond.addEventListener('click', e => {
    const currTabSecond = e.target.dataset.btnSecond;  
    changeSecondClass(e.target);

    for (let i = 0; i < contentSecond.length; i++) {
        contentSecond[i].classList.remove('activeSecond');
        if(contentSecond[i].dataset.contentSecond === currTabSecond ) {
            contentSecond[i].classList.add('activeSecond');
        }
    }
})