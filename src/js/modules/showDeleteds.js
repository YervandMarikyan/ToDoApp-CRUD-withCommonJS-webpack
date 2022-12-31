module.exports = async  function (showBtn, UI) {
    showBtn.addEventListener("click", async () => {
        UI.deletedItemsBlockContent.innerHTML = "";

        await fetch("http://localhost:8888/history")
        .then(data => data.json())
        .then(data => data.forEach(obj => {            
            UI.showDeleteds(obj.id, obj.title);
        }))
    });    
}