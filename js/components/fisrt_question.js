import * as main from '../main.js';

export default function() {

    const markupFirstQuestion = `<!-- plate-header -->
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
            <div class="radio-group">
                <!-- radio-block -->
                <label class="radio-block">
                    <input type="radio" name="radio-group" class="radio-block__real">
                    <div class="radio-block__fake"></div>
                    <div class="radio-block__text">Hero Tutorial Multi Level</div>
                </label>
                <!-- // radio-block -->
                <!-- radio-block -->
                <label class="radio-block">
                    <input type="radio" name="radio-group" class="radio-block__real">
                    <div class="radio-block__fake"></div>
                    <div class="radio-block__text">Hyper Text Markup Language</div>
                </label>
                <!-- // radio-block -->
                <!-- radio-block -->
                <label class="radio-block">
                    <input type="radio" name="radio-group" class="radio-block__real">
                    <div class="radio-block__fake"></div>
                    <div class="radio-block__text">High Task Mirage Language</div>
                </label>
                <!-- // radio-block -->
                <!-- radio-block -->
                <label class="radio-block">
                    <input type="radio" name="radio-group" class="radio-block__real">
                    <div class="radio-block__fake"></div>
                    <div class="radio-block__text">HTML не имеет расшифровки. Это военная разработка.</div>
                </label>
                <!-- // radio-block -->
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
                <a href="#" class="button button--back">Назад</a>
                <a href="#/second-question" data-checkRadio class="button">Далее</a>
            </div>
        </div>
        <!-- // plate-footer -->

        </div>
        <!-- //plate -->`;

    // Рендерим стратовую страницу
    function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.renderPage(main.pagesElements.pageFrame, markupFirstQuestion);
            resolve();
        })
    };

    // Добавляем актвиный класс
    function active() {
        return new Promise((resolve, reject) => {
            // Находим элементы на странице
            const addActiveClass = 'radio-block--active';
            const buttonGroup = document.querySelectorAll('.radio-block');
            // Находим выбранный ответ
            buttonGroup.forEach((answer) => {
                answer.addEventListener('click', (event) => {
                    // Добавляем активный класс выбранному ответу
                    if(answer.querySelector('[name="radio-group"]').checked === true) {
                        console.log(answer);
                        answer.classList.add('radio-block--active');
                    } else {
                        // Удаляем лишние активные классы
                        buttonGroup.forEach((e) => {
                            e.classList.remove('radio-block--active');
                        })
                    }
                    
                })
            });
            resolve();

        })
    }

    async function run() {
        await renderPageStart();
        const checkButton = await document.querySelector('[data-checkRadio]');
        const checkGroup = await document.querySelectorAll('[name="radio-group"]');
        const btnName = await '.radio-block__text';
        await active();
        await main.checkRadioBtn(checkButton, checkGroup, 'first', btnName);
    }
    run();
    

    return markupFirstQuestion;

}

