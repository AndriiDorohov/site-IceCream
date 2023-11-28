(function () {
var $277ee8bd84755064$exports = {};
(()=>{
    const refs = {
        openModalBuyOne: document.querySelector("[data-modal-open]"),
        openModalBuyTwo: document.querySelector("[data-modal-open-two]"),
        openModalProductOne: document.querySelector("[data-modal-product-one]"),
        openModalProductTwo: document.querySelector("[data-modal-product-two]"),
        openModalProductThree: document.querySelector("[data-modal-product-three]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]")
    };
    refs.openModalBuyOne.addEventListener("click", toggleModal);
    refs.openModalBuyTwo.addEventListener("click", toggleModal);
    refs.openModalProductOne.addEventListener("click", toggleModal);
    refs.openModalProductTwo.addEventListener("click", toggleModal);
    refs.openModalProductThree.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle("is-hidden");
    }
})();

})();
//# sourceMappingURL=index.5de3f444.js.map
