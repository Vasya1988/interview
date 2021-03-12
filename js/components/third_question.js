import * as main from '../main.js';

export default function() {

    const markupThirdQuestion = `
        <!-- plate-header -->
        <div data-number-page="4" class="plate-header">
            <div class="plate-header__icon">
                <img src="img/icons/list.png" alt="Icon">
            </div>
            <div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
        </div>
        <!-- // plate-header -->

        <!-- Content ... -->
        <div class="plate-content">
            <h2 class="title-main">На HTML можно создавать:</h2>

            <div class="cards-group">
                <!-- card-block -->
                <label class="card-block">
                    <div class="card-block__radio">
                        <input name="image-group" type="radio" class="card-block__radio-real">
                        <div class="card-block__radio-fake"></div>
                    </div>
                    <div class="card-block__radio"></div>
                    <div class="card-block__img">
                        <img src="img/pictures/mobile.jpg" alt="Img">
                    </div>
                    <div class="card-block__text">
                        Мобильные приложения
                    </div>
                </label>
                <!-- // card-block -->
                <!-- card-block -->
                <label class="card-block">
                    <div class="card-block__radio">
                        <input name="image-group" type="radio" class="card-block__radio-real">
                        <div class="card-block__radio-fake"></div>
                    </div>
                    <div class="card-block__img">
                        <img src="img/pictures/browser.jpg" alt="Img">
                    </div>
                    <div class="card-block__text">
                        Сайты для всех браузеров и платформ
                    </div>
                </label>
                <!-- // card-block -->
                <!-- card-block -->
                <label class="card-block">
                    <div class="card-block__radio">
                        <input name="image-group" type="radio" class="card-block__radio-real">
                        <div class="card-block__radio-fake"></div>
                    </div>
                    <div class="card-block__radio"></div>
                    <div class="card-block__img">
                        <img src="img/pictures/windows.jpg" alt="Img">
                    </div>
                    <div class="card-block__text">
                        Программы для Windows
                    </div>
                </label>
                <!-- // card-block -->
                <!-- card-block -->
                <label class="card-block">
                    <div class="card-block__radio">
                        <input name="image-group" type="radio" class="card-block__radio-real">
                        <div class="card-block__radio-fake"></div>
                    </div>
                    <div class="card-block__radio"></div>
                    <div class="card-block__img">
                        <img src="img/pictures/linux.jpg" alt="Img">
                    </div>
                    <div class="card-block__text">
                        Программы для Linux
                    </div>
                </label>
                <!-- // card-block -->
            </div>


        </div>

        <!-- plate-footer -->
        <div class="plate-footer">
            <div class="plate-footer__progress">

                <div class="progress">
                    <div class="progress__label">
                        Готово: <strong>${main.percentProgress}%</strong>
                    </div>
                    <div class="progress__line-wrapper">
                        <div class="progress__line-bar" style="width: ${main.percentProgress}%;"></div>
                    </div>
                </div>

            </div>
            <div class="plate-footer__buttons">
                <a href="#/second-question" data-button="back" class="button button--back">Назад</a>
                <a href="#/mail-form" data-button="next" class="button">Далее</a>
            </div>
        </div>
        <!-- // plate-footer -->
        `;


    // Рендерим стратовую страницу
    function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.renderPage(main.pagesElements.pageFrame, markupThirdQuestion);
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
                console.log(btn.dataset.button);
                if (btn.dataset.button === 'next' || btn.dataset.button === 'start' || btn.dataset.button === 'result') {
                    main.progressBarLine(currentPage, btn.dataset.button);
                    // console.log('Идем вперед');
                    // console.log('----------------------------');
                } else if (btn.dataset.button === 'back') {
                    main.progressBarLine(currentPage, btn.dataset.button);
                    // console.log('Идем назад');
                    // console.log('----------------------------');
                }
            })
            
            
        })
    })
};

    async function run() {
        await renderPageStart();
        await checkClick();
    }
    run();
    

    

    return markupThirdQuestion;
}