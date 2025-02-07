 let name2 = localStorage.getItem('Name');
let certpage2 = document.querySelector('#csdevin2025');
certPage2.innerHTML = (`
         <section class="cert-text">
             <h2 class="line">${cert3.title}</h2>
             <h2>This Certification shows the person
                 in question:</h2>
             <h1 class="name">${name2}</h1>
             <p>${cert3.description}</p>
             <h3>Issued by: ${cert3.issuer}</h3>
             <section class="time"></section>
         </section>
         <img class="home" src="/images/homeless.png" alt="CS Stamp Certification" width="400px" height="200px">
         <img src="/images/cshome.png" alt="Cs dev house in 2025">
 `);
 timetell = document.querySelector('.time');
timetell.innerHTML += `<h4> Issued on: ${localDate}</h4>`;
