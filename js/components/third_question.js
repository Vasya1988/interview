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
                <a href="#/second-question" class="button button--back">Назад</a>
                <a href="#/mail-form" data-next-page class="button">Далее</a>
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

    
    function answer(card, cardBtn, cardPath) {
        return new Promise((resolve, reject) => {
            const buttonNext = document.querySelector('[data-next-page]');
            const num = 'third';
            
            buttonNext.addEventListener('click', (event) => {
                main.answers[num].pop();
                card.forEach((answ) => {
                    if (answ.querySelector(cardBtn).checked === true) {
                        const answer = answ.querySelector(cardPath).innerText;
                        main.answers[num].push(answer)
                        console.log(main.answers);
                    }
                });
                main.checkAnswer(num, event);
            });
            resolve();
        })
    }

    async function run() {
        await renderPageStart();
        // Карточки с ответами
        const card = document.querySelectorAll('.card-block');

        // Карточки радиокнопок ответов
        const cardBtn = '[name="image-group"]';

        // Текст ответа с выбранной карточки
        const cardPath = '.card-block__text';

        await answer(card, cardBtn, cardPath);

        let currentPage = await document.querySelector('.plate-header');
        await main.progressBarLine(currentPage);
        
        // await validate();
    }
    run();
    

    

    return markupThirdQuestion;
}