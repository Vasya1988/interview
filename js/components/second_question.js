import * as main from '../main.js';

export default function() {

    const markupSecondQuestion = `
        <!-- plate-header -->
        <div class="plate-header">
            <div class="plate-header__icon">
                <img src="img/icons/list.png" alt="Icon">
            </div>
            <div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
        </div>
        <!-- // plate-header -->

        <!-- Content ... -->
        <div class="plate-content">
            <h2 class="title-main">Что означает сокращение HTML?</h2>
            <div class="checkbox-group">
                <!-- checkbox-block -->
                <label class="checkbox-block">
                    <input type="checkbox" name="radio-group" class="checkbox-block__real">
                    <div class="checkbox-block__fake"></div>
                    <div class="checkbox-block__text">Hero Tutorial Multi Level</div>
                </label>
                <!-- // checkbox-block -->
                <!-- checkbox-block -->
                <label class="checkbox-block checkbox-block--active">
                    <input type="checkbox" name="radio-group" class="checkbox-block__real">
                    <div class="checkbox-block__fake"></div>
                    <div class="checkbox-block__text">Hyper Text Markup Language</div>
                </label>
                <!-- // checkbox-block -->
                <!-- checkbox-block -->
                <label class="checkbox-block">
                    <input type="checkbox" name="radio-group" class="checkbox-block__real">
                    <div class="checkbox-block__fake"></div>
                    <div class="checkbox-block__text">High Task Mirage Language</div>
                </label>
                <!-- // checkbox-block -->
                <!-- checkbox-block -->
                <label class="checkbox-block">
                    <input type="checkbox" name="radio-group" class="checkbox-block__real">
                    <div class="checkbox-block__fake"></div>
                    <div class="checkbox-block__text">HTML не имеет расшифровки. Это военная разработка.</div>
                </label>
                <!-- // checkbox-block -->
            </div>
        </div>

        <!-- plate-footer -->
        <div class="plate-footer">
            <div class="plate-footer__progress">

                <div class="progress">
                    <div class="progress__label">
                        Готово: <strong>56%</strong>
                    </div>
                    <div class="progress__line-wrapper">
                        <div class="progress__line-bar" style="width: 56%;"></div>
                    </div>
                </div>

            </div>
            <div class="plate-footer__buttons">
                <a href="#/first-question" data-button-back class="button button--back">Назад</a>
                <a href="#/third-question" data-check-radio class="button">Далее</a>
            </div>
        </div>
        <!-- // plate-footer -->
        `;

    // Рендерим стратовую страницу
    function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.renderPage(main.pagesElements.pageFrame, markupSecondQuestion);
            resolve();
        })
    };

    async function run() {
        await renderPageStart();
        // const buttonBack = await document.querySelector('[data-button-back]');
        const checkButton = document.querySelector('[data-check-radio]');
        const groupButton = document.querySelectorAll('[type="checkbox"]');
        const btnName = '.checkbox-block__text';
        await main.checkRadioBtn(checkButton, groupButton, 'second', btnName);
        // await main.removeAnswers(buttonBack);
    }
    run();
    

    return markupSecondQuestion;



}

