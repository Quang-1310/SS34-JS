let inputElement = document.querySelector("#input");
let btnAdd = document.querySelector("#button");
let listSubject = document.querySelector("#list-subject");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

function renderData() {
    listSubject.innerHTML = "";
    arr.forEach((value,index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${value}
            <span class="btn-Delete" data-index="${index}">x</span>
        `;
        listSubject.appendChild(li);
    });

    let btnDelete = document.querySelectorALL(".btn-Delete");
    btnDelete.forEach((btn) => {
        btn.addEventListener("click", function(){
            let index = this.getAttribute("")
            arr.splice(index, 1); 
            localStorage.setItem("arr", JSON.stringify(arr));
            renderData(); 
        });
    })


}

btnAdd.addEventListener("click", function(){
    let task = inputElement.value.trim();
    if(task === ""){
        alert("Nội dung công việc không được để trống");
        return;
    }
    arr.push(task);
    localStorage.setItem("arr", JSON.stringify(arr));
    renderData();
    inputElement.value = "";
});