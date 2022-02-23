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
            arrowScroll.style.opacity = 1;
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