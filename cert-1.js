// This searches for the ids assigne to the bodies then changes the inside of the html
        let name2 = localStorage.getItem('Name');

let certPage = document.querySelector('#Henchman')
certPage.innerHTML = (` 
        <img src="/images/villainy.png" alt="Villainous Henchman">
        <section class="villainy">
            <img src="/images/shirt.png" alt="Hilarious Shirt btw" width="100px" height="100px">
        </section>
        <section class="cert-text">
            <h2 class="line">${cert1.title}</h2>
            <h2>In the utmost esteem that villainy can give. We bestow upon:</h2>
            <h1 class="name">${name2}</h1>
            <p>${cert1.description}</p>
            <h3>${cert1.issuer}</h3>
            <section class="time"></section>
        </section>
        <section class="villainy">
            <img src="/images/lol.png" alt="Villainous Certification Stamp" width="200px" height="200px">
        </section>`);
        timetell = document.querySelector('.time');
timetell.innerHTML += `<h4> Issued on: ${localDate}</h4>`;
