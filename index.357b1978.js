(function () {
var $85dbdcadc3d36f97$exports = {};
(()=>{
    document.querySelector(".js-speaker-form").addEventListener("submit", (e)=>{
        e.preventDefault();
        new FormData(e.currentTarget).forEach((value, name)=>console.log(`${name}: ${value}`));
    });
})();

})();
//# sourceMappingURL=index.357b1978.js.map
