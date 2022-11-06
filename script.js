// Delay animação //
let delay = -0.4;

// Data e Hora dinaminida //
function createCard(date, day, games) {
    // add animamição //
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <spain>${day}</spain>
        </h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

// Times dinamicos //
function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/${player1}icon.svg" alt="bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/${player2}icon.svg" alt="bandeira ${player2}">
    </li>
    `
}

// inserindo no HTML //
document.querySelector("#app").innerHTML = `

<header>
<img src="./assets/logo-nlw.svg" alt="Logotipo da copa nlw">
</header>

<div class="card-container">

        ${createCard('20/11', 'DOMINGO', createGame('qatar', '13:00', 'ecuador'))}

        ${createCard('21/11', 'SEGUNDA', createGame('england', '10:00', 'iran') + createGame('senegal', '13:00', 'luxembourg') + createGame('united states', '16:00', 'wales'))}

        ${createCard('22/11', 'TERÇA', createGame('argentina', '07:00', 'saudi arabia') + createGame('denmark', '10:00', 'tunisia') + createGame('mexico', '13:00', 'poland') + createGame('france', '16:00', 'australia'))}

        ${createCard('23/11', 'QUARTA', createGame('morocco', '07:00', 'croatia') + createGame('germany', '10:00', 'japan') + createGame('spain', '13:00', 'costa rica') + createGame('belgium', '16:00', 'canada'))}

        ${createCard('24/11', 'QUINTA', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'south korea') + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia'))}
</div>
    
`