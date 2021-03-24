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
export function checkInputButton(type) {
    return new Promise((resolve, reject) => {
        const questionNumber = document.querySelector('[data-number-page]').dataset.numberPage;
        answers[questionNumber] = [];
        document
            .querySelectorAll('label')
            .forEach((active) => {
                const findInput = active.querySelector('[type="radio"], [type="checkbox"]');
                if (findInput.checked) {
                    console.log('Чекнутый --> ', findInput);
                    const answer = active.querySelector('.card-block__text, .checkbox-block__text, .radio-block__text');
                    answers[questionNumber].push(active.innerText);
                    console.log('Ответ --> ', answers);
                    active.classList.add('radio-block--active')
                } 
            });
        resolve();
    })
}

// Добавление активного класса
export function changeClass() {
        const a = document.querySelectorAll('label');
        a.forEach((e) => {
            if (e.querySelector('input').checked) {
                e.classList.add('radio-block--active');
            } else {
                e.classList.remove('radio-block--active');
            }
        })
}
changeClass();


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
        let currentNum = currentPage.dataset.number;
        if (button === 'next' || button === 'start') {
            percentProgress = `${currentNum * 100 / 4}`;
        } else if (button === 'back') {
            currentNum = (currentNum - 2) * 100 / 4;
            percentProgress =currentNum;
        }
        console.log('Процент --> ', percentProgress);
        resolve(currentNum);
    })
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
window.addEventListener('input', changeClass)
