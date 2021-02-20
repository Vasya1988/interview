import * as main from '../main.js';

export default function() {
    const markupMailForm = `
        <div class="cover-content-wrapper">
        <div class="cover-content">

            <img class="title-img" width="70" src="img/icons/clapping.svg" alt="Отлично! Последний шаг!">
            <div class="title">Отлично! Последний шаг!</div>

            <div class="form-group">
                <label class="label" for="email">Введите Email:</label>
                <input class="input-email" type="email" id="email" placeholder="Ваш Email">
            </div>

            <input class="button button--huge" type="submit" value="Получить результаты">

            <label class="checkbox">
                <input type="checkbox" class="checkbox__real">
                <div class="checkbox__fake"></div>
                <div class="checkbox__text">С политикой конфеденциальности ознакомлен</div>
            </label>

        </div>
    </div>
    `;


    // Рендерим стратовую страницу
    function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.renderPage(main.pagesElements.pageFrame, markupMailForm);
            const checkInput = document.querySelector('.cover-content').querySelectorAll('input')[1];
            resolve();
        })
    };
    // renderPageStart();

    function btnCheck() {
        return new Promise((resolve, reject) => {
            const checkInput = document.querySelector('.cover-content').querySelectorAll('input')[1];
            checkInput.addEventListener('click', (e) => {
                if (e.target) {
                    location.assign('index.html#/final');
                }
            });
            resolve();
        })
    };

    async function run() {
        await renderPageStart();
        await btnCheck();
    }
    run();

    return markupMailForm;
}