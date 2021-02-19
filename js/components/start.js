import * as main from '../main.js';

export default function() {

    const markupStart = `<div class="cover-content-wrapper">
        <div class="cover-content">
            <img class="title-img" src="img/pictures/html.png" alt="HTML">
            <div class="title">Определи свой уровень знания верстки сайтов</div>
            <p>Ответь на серию вопросов, получи оценку знаний, список уроков чтобы подтянуть свой уровень и методичку с нашего курса “Профессия: Верстальщик сайтов.”</p>
            <a href="#" class="button">Пройти тест</a>
        </div>
    </div>`;

    // Отображаем стартовую страницу
    function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.pagesElements.page.insertAdjacentHTML('afterbegin', markupStart);
            resolve();
        })
    };

    // Добавляем событие клик на кнопку "Пройти тест"
    function buttonStartTest() {
        return new Promise((resolve, reject) => {
            console.log('aaa');
            main.pagesElements.pageStartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('work')
            })
            resolve();
        })
    };
    

    async function render() {
        await renderPageStart();
        await buttonStartTest();
    }

    render();

}

