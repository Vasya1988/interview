import pageStart from './components/start.js';
import firstQuestion from './components/fisrt_question.js';
import secondQuestion from './components/second_question.js';
import thirdQuestion from './components/third_question.js';
import mailForm from './components/mail_form.js';
import final from './components/final.js';

export const pagesElements = {
    pageFrame: document.querySelector('.plate'),
    pageStartBtn: document.querySelector('.button')
};

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
        console.log('Render starting page has been done');
        console.log('-------------------------------------------');
    }

    const pathComponents = components.find((e) => {
        if (e.page === pathArray) {

            console.log(e.page, ' и ', pathArray)
            delPage.innerHTML = '';
            return e.component();
        } else {
            console.log('component no work');
            console.log(e.page, ' и ', pathArray)
        }
    })
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
