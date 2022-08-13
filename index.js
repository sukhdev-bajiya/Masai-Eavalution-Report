// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", addStudent);

var th = document.createElement("th");
th.innerText = "Delete";
document.querySelector("thead tr").append(th);

function addStudent() {
    event.preventDefault();
    var studentName = document.getElementById("name").value;
    var batchName = document.getElementById("batch").value;

    var dsaNumber = document.getElementById("dsa").value;
    var csNumber = document.getElementById("cs").value;
    var codingNumber = document.getElementById("coding").value;

    var percentageOf = ((Number(dsaNumber) + Number(csNumber) + Number(codingNumber)) / 30) * 100;

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = studentName;
    var td2 = document.createElement("td");
    td2.innerText = batchName;
    var td3 = document.createElement("td");
    td3.innerText = dsaNumber;
    var td4 = document.createElement("td");
    td4.innerText = csNumber;
    var td5 = document.createElement("td");
    td5.innerText = codingNumber;
    var td6 = document.createElement("td");
    td6.innerText = percentageOf;
    var td7 = document.createElement("td");
    if (percentageOf < 51) {
        td7.innerText = "Async";
        td7.style.backgroundColor = "red"
    } else {
        td7.innerText = "Regular";
        td7.style.backgroundColor = "green"
    }

    var td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.addEventListener("click", deleteRow);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(tr);

}

function deleteRow() {
    event.target.parentNode.remove();
}