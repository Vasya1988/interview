import pageStart from './components/start.js';
import firstQuestion from './components/fisrt_question.js';
import secondQuestion from './components/second_question.js';
import thirdQuestion from './components/third_question.js';
import mailForm from './components/mail_form.js';
import final from './components/final.js';

export const pagesElements = {
    pageFrame: document.querySelector('.plate'),
    pageStartBtn: document.querySelector('.button'),
    radioBtn: document.querySelectorAll('[name=radio-group]')
    
};

export let answers = {
    first: [],
    second: [],
    third: [],
    mail: []
}

const components = [
    {
        page: '#',
        component: pageStart
    },

    {
        page: 'first-question',
        component: firstQuestion
    },

    {
        page: 'second-question',
        component: secondQuestion
    },

    {
        page: 'third-question',
        component: thirdQuestion
    },

    {
        page: 'mail-form',
        component: mailForm
    },

    {
        page: 'final',
        component: final
    }
];

export let percentProgress;
// Рендер с текущей страницы
export function renderPage(page, markup) {
    return new Promise((resolve, reject) => {
        page.insertAdjacentHTML('afterbegin', markup);
        resolve();
    })
};

// Рендер страниц
function render() {
    const pathArray = location.hash.split('/')[1];
    let delPage = pagesElements.pageFrame;

    if(location.hash.split('/')[0] === '') {
        delPage.innerHTML = '';
        components[0].component();
    }

    const pathComponents = components.find((e) => {
        if (e.page === pathArray) {
            delPage.innerHTML = '';
            return e.component();
        }
    })
}

// Собираем ответы
export function checkRadioBtn(button, group, number, btn) {
        setTimeout(()=> {
            // Прослушиваем событие клик кнопки "Далее"
            button.addEventListener('click', (e) => {
                answers[number].forEach((e, i)=> {
                    answers[number] = [];
                    console.log(answers[number]);
                })
                // Перебираем радио кнопки
                group.forEach((item) => {
                    
                    // Находим выбранный ответ, по свойству checked
                    if(item.checked === true) {
                        console.log(item.parentNode.innerText)
                        answers[number].push(item.parentNode.innerText);
                        // Добалвяем в объект с ответами
                        console.log(answers)
                    } 
                });
                checkAnswer(number, e);
            });
        }, 300)
}

// Добваление активного класса
export function activeClass(inp, lab, actClass) {
    return new Promise((resolve, reject) => {
        lab.forEach((label) => {
            label.addEventListener('click', (active) => {
                if (label.querySelector(inp).checked) {
                    label.classList.add(actClass);
                } else {
                    label.classList.remove(actClass);
                }
            })
        })
        resolve();
    })
}

// Проверка на заполнение ответов (Валидация)
export function checkAnswer(number, item) {
    if (answers[number].length < 1) {
        alert('Пожалуйста, выберите ответ');
        item.preventDefault();
    }
}

// 2 x 100 \ 3
// 2 - "Это текущая карта"
// 3 - 'Это общее кол-во карточек'
// Заполнение прогресс бара
export function progressBarLine(currentPage, button) {
    return new Promise((resolve, reject) => {
        const amountPages = 4;
        let currentNum = Number(currentPage.dataset.numberPage);

        if (button === 'next' || button === 'start') {
            percentProgress = `${currentNum * 100 / 4}`;
            console.log('Процент, ушли вперед --> ', currentNum);
        } else if (button === 'back') {
            currentNum = (currentNum - 2) * 100 / 4;
            console.log('Назад')
            console.log('Текущая страница кнопка назад --> ', currentNum);
            console.log('Текущий процент в массиве --> ', percentProgress);
            percentProgress = currentNum;
            console.log('Процент, ушли назад --> ', percentProgress);
        }
        console.log('Процент --> ', Number(percentProgress));
        resolve(currentNum);
    })
}

// Заполнение прогресс бара, при нажатии кнопки "Назад"
// export function progressBarLineBack(currentPage, curNum) {
//     console.log('Hey');
//     let currentNum = currentPage.dataset.numberPage * 100 / 4;
//     percentProgress = curNum - currentNum;
//     console.log(percentProgress);
// }
// progressBarLineBack();

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
