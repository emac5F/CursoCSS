const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__img");
const modalClose = document.querySelector(".modal__close");

gallery.addEventListener("click", function(e){
    const currentTarget = e.target;

    if(e.target.matches(".gallery__img")){
        modal.classList.add("modal--show");
        modalImg.src = currentTarget.src;
    }
});

modalClose.addEventListener("click", function(){
    modal.classList.remove("modal--show")
});
