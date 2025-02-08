let name2 = localStorage.getItem('Name');


let certPage3 = document.querySelector('#astronaut');
certPage3.innerHTML = (`
        <section class="cert-text">
            <h2 class="line">${cert2.title}</h2>
            <h2>This certification represents:</h2>
            <h1 class="name">${name2}</h1>
            <p>${cert2.description}</p>
            <h3>${cert2.issuer}</h3>
    <section class="time"></section>
</section>
<img class="nasalogo" src="/images/nasalogo.svg" alt="Nasa logo" width="200px">
<img class="earth-svg" src="/images/earth.png" alt="Quarter of Earth shown with a rocket blasting off">`);
timetell = document.querySelector('.time');
timetell.innerHTML += `<h4> Issued on: ${localDate}</h4>`;
