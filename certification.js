let date_data = new Date()
let localDate = date_data.toLocaleString();
let current_hour = date_data.getHours()
let current_minute = date_data.getMinutes();





function promptClick1() {
    let namechoose = document.createElement('input')
    namechoose.id = ("i1");
    document.getElementById('b1').replaceWith(namechoose)
    const enterKey = document.getElementById('i1');
enterKey.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        alert("Works!");
    }
});
}

function promptClick2() {
    let issuer = document.createElement('input')
    issuer.id = ("i2");
    document.getElementById('b2').replaceWith(issuer)
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

// const certification1 = {};

// certification1.date = localDate;
// certification1.issuer = "";
// certification1.recepient = namechoose;


// const certification2 = {};

// certification2.date = localDate;
// certification2.issuer = "";
// certification2.recepient = namechoose;

// const certification3 = {};

// certification3.date = localDate;
// certification3.issuer = prompt('Who is Issuing the Certification?');
// certification3.recepient = namechoose;

