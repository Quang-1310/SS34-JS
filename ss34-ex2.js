let btnSubmit = document.querySelector("#btn-submit");
let valueContent = document.querySelector("#content");
let valueDate = document.querySelector("#date");
let valueStatus = document.querySelector("#select");
let valueUser = document.querySelector("#user");
let tbody = document.querySelector("#tbody");
let arr = [];
let btnUpdate = document.querySelector("#btn-update");
let editIndex = -1;

function renderTable() {
    tbody.innerHTML = "";
    arr.forEach((obj,index) => {
        let newTr = document.createElement("tr");
        newTr.innerHTML = 
            `
                <th scope="row">${obj.id}</th>
                <td>${obj.content}</td>
                <td>${obj.dueDate}</td>
                <td>${obj.status}</td>
                <td>${obj.assignedTo}</td>
                <td><button class="btnEdit">Sửa</button></td>
                <td><button class="btnDelete">Xoá</button></td>
            `
        tbody.appendChild(newTr);

        let btnDelete = newTr.querySelector(".btnDelete");
        btnDelete.addEventListener("click",function(){
            if(confirm("Bạn có chắc chắn muốn xoá không")){
                arr.splice(index, 1);
                localStorage.setItem("courses", JSON.stringify(arr));
                renderTable();
            }
        }); 

        let btnEdit = newTr.querySelector(".btnEdit");
        btnEdit.addEventListener("click",function(){
            valueContent.value = obj.content;
            valueDate.value = obj.dueDate;
            valueStatus.value = obj.status;
            valueUser.value = obj.assignedTo;
            editIndex = index;
            btnSubmit.style.display = "none";
            btnUpdate.style.display = "inline-block";
        
        });
    });
}




btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    let obj = {
        id : arr.length + 1,    
        content : valueContent.value,
        dueDate : valueDate.value,
        status : valueStatus.value,
        assignedTo : valueUser.value
    };
    arr.push(obj);
    localStorage.setItem("courses", JSON.stringify(arr));
    renderTable();
    valueContent.value = "";
    valueDate.value = "";
    valueStatus.value = "";
    valueUser.value = "";
});

btnUpdate.addEventListener("click", function () {
    if (editIndex >= 0) {
        arr[editIndex].content = valueContent.value;
        arr[editIndex].dueDate = valueDate.value;
        arr[editIndex].status = valueStatus.value;
        arr[editIndex].assignedTo = valueUser.value;
        localStorage.setItem("courses", JSON.stringify(arr));
        renderTable();
        valueContent.value = "";
        valueDate.value = "";
        valueStatus.value = "";
        valueUser.value = "";
        btnSubmit.style.display = "inline-block";
        btnUpdate.style.display = "none";
    }
});




