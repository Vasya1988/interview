import * as main from '../main.js';

export default function() {

    const markupFinal = `
        <div class="cover-content-wrapper">
        <div class="cover-content">

            <img class="title-img" width="70" src="img/icons/clapping.svg" alt="Спасибо!">
            <div class="title">Спасибо!</div>
            <p>Результаты вашего теста и методичка, уже отправлены вам на Email.</p>
            <div class="title-2">Ваши бонусы:</div>
            <div class="bonus-cards-wrapper">
                <div class="bonus-card">
                    <img class="bonus-card__img" src="img/icons/leaflet.svg" alt="">
                    <div class="bonus-card__title">Методичка с курса по верстке</div>
                </div>
                <div class="bonus-card">
                    <img class="bonus-card__img" src="img/icons/video-tutorial.png" alt="">
                    <div class="bonus-card__title">Видео урок с курса по верстке</div>
                </div>
            </div>

        </div>
    </div>
    `;

     // Рендерим стратовую страницу
     function renderPageStart() {
        return new Promise((resolve, reject) => {
            main.renderPage(main.pagesElements.pageFrame, markupFinal);
            const checkInput = document.querySelector('.cover-content').querySelectorAll('input')[1];
            resolve();
        })
    };

    renderPageStart();

    return markupFinal;

}