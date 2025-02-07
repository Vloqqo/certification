let date_data = new Date()
let localDate = date_data.toLocaleString();
let current_hour = date_data.getHours()
let current_minute = date_data.getMinutes();
// Defining variables for time



// This makes it
function enter(id) {
    const enterKey = document.getElementById(id);
    enterKey.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            alert("Works!");
            
        }
    })
}

function getvalues(id, value) {
    value = document.getElementById(id).value;
    // reset('Name', promptClick1())
    return(value);
}

// This creates an input element in the html
// whenever the user clicks on the specified button
function promptClick1() {
    let nameChoose = document.createElement('input');
    nameChoose.id = ("i1");
    document.getElementById('b1').replaceWith(nameChoose);
    // This calls the enter function giving it the id to 
    enter(nameChoose.id);
    getvalues(nameChoose.id, value);
}

// function reset(text, func) {
//     let resetButton = document.createElement('button');
//     resetButton.id = ('b1');
//     resetButton.innerHTML = text;
//     resetButton.onclick = func
// }

function promptClick2() {
    let issuerCreate = document.createElement('input')
    issuerCreate.id = ("i2");
    document.getElementById('b2').replaceWith(issuerCreate)
    enter(issuerCreate.id);
    certification.issuer = value
    getvalues(issuerCreate.id, value)
}

function promptClick(bnum) {
    let x = 0;

    if (bnum == 1) {
        x = 1;
        promptClick1(x);

    }

    if (bnum == 2) {
        x = 2;
        promptClick2(x);
    }

    if (bnum == 3) {
        x = 3;
        promptClick3(x);
    }
}
const certification = {};

certification.date = localDate;
certification.issuer;
certification.recepient;

// localStorage.setItem(issuer, certification.issuer);
// localStorage.setItem(recepient, certification.recepient)