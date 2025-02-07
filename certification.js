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
            if (id == 'i1') {
                value1 = document.getElementById('i1').value;

                // localStorage.setItem('Name', value1);

                return (value1);
            }
            if (id == 'i2') {
                value2 = document.getElementById('i2').value;
                localStorage.setItem('Issuer', value2);
                return (value2)
            }
        }

    })
}

// This creates an input element in the html
// whenever the user clicks on the specified button
function promptClick1() {
    let nameChoose = document.createElement('input');
    nameChoose.id = ("i1");
    document.getElementById('b1').replaceWith(nameChoose);
    // This calls the enter function giving it the id to 
    enter(nameChoose.id);
    // reset('Name', promptClick1());
}

// function reset(text, func) {
//     let resetButton = document.createElement('button');
//     resetButton.id = ('b1');
//     resetButton.innerHTML = text;
//     resetButton.onclick = func
//     document.getElementById('i1').replacedWith(resetButton)
// }

// function promptClick2() {
//     let issuerCreate = document.createElement('input')
//     issuerCreate.id = ("i2");
//     document.getElementById('b2').replaceWith(issuerCreate)
//     enter(issuerCreate.id);
// }

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



const cert1 = {};

cert1.title = `Certified Henchman`;
cert1.description = `the certification of completing his Henchman training. With this official title, you may now start going by a Henchman. With this certification you may not dabble in villainy, evildoing, nefarious deeds, and any activities related to being a goon for any Villain, Mastermind, Overlord, or Evildoer.`;
cert1.issuer = `The Organization of Villainy`;

const cert2 = {};

cert2.title = `Astronaut Certification`;
cert2.description = `completion of the Astronaut certification process. With this certificate they will now be considered a full-fledged astronaut. They will be apart of NASA, able to take on missions they so choose to help further Humanity and Science.`;
cert2.issuer = `National Aeronautics and Space Administration`;

const cert3 = {};

cert3.title = `Computer Science Certification`;
cert3.description = `has completed their training in being a certified Computer Science Developer. This certification can be used for priority at a nearby homeless shelter instead of having to fight others (Art Majors) for a spot in case of limited availability at the aforementioned homeless shelter`;
cert3.issuer = `The Chamber of Computer Science`

// timetell = document.querySelector('.time');
// timetell.innerHTML += `<h4>Issued on: ${localDate}</h4>`;

certIds = ['Henchman', 'csdevin2025', 'astronaut'];
let certPage = document.querySelector(certIds);
if (certPage == 'Henchman') {
    certPage.insertAdjacentHTML('beforeend', `
        <img src="/images/villainy.png" alt="Villainous Henchman">
        <section class="villainy">
            <img src="/images/shirt.png" alt="Hilarious Shirt btw" width="100px" height="100px">
        </section>
        <section class="cert-text">
            <h2 class="line">${cert1.title}</h2>
            <h2>In the utmost esteem that villainy can give. We bestow upon:</h2>
            <h1 class="name">John Doe</h1>
            <p>${cert1.description}</p>
            <h3>${cert1.issuer}</h3>
            <section class="time"></section>
        </section>
        <section class="villainy">
            <img src="/images/lol.png" alt="Villainous Certification Stamp" width="200px" height="200px">
        </section>`)
};
