import  {animate} from './helpers';

const modal = () => {
    const callBackBtn = document.querySelectorAll(".fancyboxModal")[1];
    const modal = document.querySelector(".header-modal");
    const modalBtnClose = document.querySelector(".header-modal__close");
    const overlay = document.querySelector(".overlay");

    const closeModal = () => {
        modal.style.display = "";
        overlay.style.display = "";    
    };

    callBackBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
        overlay.style.display = "block";
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress;
                overlay.style.opacity = progress;
            }
        });
    });
    modalBtnClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
};

export default modal;