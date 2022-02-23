import  {animate} from './helpers';

const scrollUp = () => {
    const arrowScroll = document.querySelector(".smooth-scroll");

    const goToTop = () =>{
        if (window.scrollY > 0) {
            window.scrollBy(0, -30);
            setTimeout(goToTop, 0);
        }
    };

    const trackScroll = () => {
        let section = document.querySelector("#benefits").getBoundingClientRect().top;
            if (section == 0 || section < 0) {
                if (arrowScroll.style.opacity == 0) { //если opacity 0, то воспроизвести анимацию 1 раз
                console.log('ЯЯ');
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        arrowScroll.style.opacity = progress;
                    }
                });
            }
        }
        if (section > 0) {
            arrowScroll.style.opacity = 0;
        }
    };

    trackScroll(); //запускаем сразу, т.к. после обновления страницы мы можем находиться на той же позиции
    window.addEventListener('scroll', trackScroll); //каждый раз чекать trackScroll при прокрутке
    arrowScroll.addEventListener("click", goToTop); 
};

export default scrollUp;