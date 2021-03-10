import * as main from '../main.js';

export default function() {

    const markupStart = `<div data-number-page="1" class="cover-content-wrapper">
        <div class="cover-content">
            <img class="title-img" src="img/pictures/html.png" alt="HTML">
            <div class="title">Определи свой уровень знания верстки сайтов</div>
            <p>Ответь на серию вопросов, получи оценку знаний, список уроков чтобы подтянуть свой уровень и методичку с нашего курса “Профессия: Верстальщик сайтов.”</p>
            <a href="#/first-question" class="button">Пройти тест</a>
        </div>
    </div>`;

    
    // Рендерим стратовую страницу
    function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.renderPage(main.pagesElements.pageFrame, markupStart);
            resolve();
        })
    };

    async function runPageStart() {
        await renderPageStart();
        let currentPage = await document.querySelector('.cover-content-wrapper');
        await main.progressBarLine(currentPage);
    };
    runPageStart();

    return markupStart;

}

