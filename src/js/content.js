const btn = document.getElementById("open");
const btnTickets = document.getElementById("biljettInfo");
const textBody = document.getElementById("placeholderHtml");
const btnList = document.getElementsByTagName("li");


for (let i = 0; i < btnList.length; i++){
    btn.addEventListener("click", () => {
        textBody.innerHTML = `<section class="öppettider">
        <h1>ÖPPETTIDER</h1>
        <h4>Måndag till fredag: 13.30-23.00</h4>
        <h4>Lördag och söndag 12.30-23.00</h4>
    </section>
    
    <section class="öppettider-röda-dagar">
        <h2>ÖPPETTIDER UNDER JUL & NYÅR</h2>
        <h4>23 december: 12-19</h4>
        <h4>24 december: Stängt</h4>
        <h4>25-30 december: 12-23</h4>
        <h4>31 december: 16.30-18</h4>
        <h4>1 januari: 14-23</h4>
        <h4>2-8 januari: 12-23</h4>
    </section>

    <section class="telefonTider">
        <h2>TELEFONTIDER</h2>
        <h4>På grund av säsongens höga belastning har vi just nu stängt av telefonen. Skicka gärna ditt ärende till vår melj info@sundsvallspegeln.se, så hjälper vi dig så fort vi kan.</h4>
    </section>
    
    <section class="kontakt">
        <h1>KONTAKT</h1>
        <h4>KASSAN - info@sundsvallspegeln.se</h4>
    </section>

    <section class="hyra">
        <h2>ÄR DU INTRESSERAD AV ATT HYRA SPEGELN?</h2>
        <h4>Skicka din hyresförfrågan till Anton Holst som innehåller svar på följande frågor:</h4>
        <h4>-Beskriv arrangemanget<br>-Vilka är ni?<br>-Datumförslag<br>-Antal timmar/kvällstid eller dagtid?<br>-Tekniska förutsättningar?<br>-Öppet eller slutet evenemang?</h4>
        <h4>Du kan melja svaren till anton@sundsvallspegeln.se</h4>
    </section>

    <section class="press">
        <h2>PRESSVISNINGAR</h2>
        <h4>Skicka din förfrågan till Anton Holst via anton@sundsvallspegeln.se</h4>
    </section>`;
    })
}