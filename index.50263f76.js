var $1f4838a2dade0021$exports = {};
(()=>{
    document.querySelector(".js-speaker-form").addEventListener("submit", (e)=>{
        e.preventDefault();
        new FormData(e.currentTarget).forEach((value, name)=>console.log(`${name}: ${value}`));
    });
})();


//# sourceMappingURL=index.50263f76.js.map
