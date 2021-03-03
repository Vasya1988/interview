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

// Рендер стекущей страницы
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
                        answers[number].push(item.parentNode.querySelector(btn).innerText);
                        // Добалвяем в объект с ответами
                        console.log(answers)
                    } 
                });
                checkAnswer(number, e)
            });
        }, 300)
}

// Проверка на заполнение ответов (Валидация)
export function checkAnswer(number, item) {
    if (answers[number].length < 1) {
        alert('Пожалуйста, выберите ответ');
        item.preventDefault();
    }
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
