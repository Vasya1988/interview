import pageStart from './components/start.js'

export const pagesElements = {
    page: document.querySelector('.plate'),
    pageStartBtn: document.querySelector('.button')
}

export function foo() {
    console.log('hello, from main');
}

pageStart();