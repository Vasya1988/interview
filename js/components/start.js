import * as main from '../main.js';

export default function() {

    const markupStart = `<div data-number-page="1" class="cover-content-wrapper">
        <div class="cover-content">
            <img class="title-img" src="img/pictures/html.png" alt="HTML">
            <div class="title">Определи свой уровень знания верстки сайтов</div>
            <p>Ответь на серию вопросов, получи оценку знаний, список уроков чтобы подтянуть свой уровень и методичку с нашего курса “Профессия: Верстальщик сайтов.”</p>
            <a href="#/first-question" data-button="start" class="button">Пройти тест</a>
        </div>
    </div>`;

    
    // Рендерим стратовую страницу
    function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.renderPage(main.pagesElements.pageFrame, markupStart);
            resolve();
        })
    };


    // Событие клик по кнопкам нада и далее
    function checkClick() {
        return new Promise ((resolve, reject) => {
            const button = document.querySelectorAll('[data-button]');
            const currentPage = document.querySelector('[data-number-page]');

            // console.log(button);
            button.forEach((btn) => {
                btn.addEventListener('click', () => {
                    if (btn.dataset.button === 'next' || btn.dataset.button === 'start' || btn.dataset.button === 'result') {
                        // console.log('Идем вперед');
                        // console.log('----------------------------');
                        main.progressBarLine(currentPage, btn.dataset.button);
                    } else if (btn.dataset.button === 'back') {
                        main.progressBarLine(currentPage, btn.dataset.button);
                        // console.log('Идем назад');
                        // console.log('----------------------------');
                    }
                })
                
                
            })
        })
    };

    async function runPageStart() {
        await renderPageStart();
        await checkClick();
    };
    runPageStart();

    return markupStart;

}

