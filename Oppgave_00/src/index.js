/*Oppgave 1 -

For å fjerne en tekst ved bruk av et klikk, ønsket jeg å sette opp en funksjon som nettopp
utfører denne handlingen. Først deklarere en Constant (const) verdi som skal seneres brukes i en funksjon.
Const får navnet removeBtn, og deklareres til å hente innhold fra html sin Id "remove-btn".
Deretter setter vi en funksjon med navn removeText, som skal utføre en handling som fjerner teksten
ved å si document.getElementById("remove-btn") sin stil med verdien display = "none";. Slik som man ville gjort i CSS. 

Til slutt setter man en addEvenListener som hører på et klikk ved bruk av "click" ved knappen med Id remove-btn,
og som skal utføre funskjonen removeText.
*/

const removeBtn = document.getElementById("remove-btn");

function removeText() {
document.getElementById("remove").style.display = "none";
};

removeBtn.addEventListener("click", removeText);

/*Oppgave 2 -

For å endre teksten ved bruk av et klikk, ønsket jeg å sette opp en funksjon som utfører nettopp denne
handlingen. Ved det deklarerer jeg en constant (const). Const henter innhold i Id` er fra html.
Deretter setter jeg en funksjon med navn changeText, som skal utføre en handling som endrer teksten
ved å hente ut et element med id, og gi det en ny tekststreng.

Til slutt setter man en addEvenListener som hører på et klikk ved bruk av "click" ved knappen med Id change-btn,
og som skal utføre funskjonen changetext.
*/

const changeBtn = document.getElementById("change-btn");

function changeText() {
document.getElementById("change").innerHTML = "Her kommer det en ny tekst";
};

changeBtn.addEventListener("click", changeText);


/*Oppgave 3 -

For å skrive ut teksten man skriver i input-feltet for hver key-event, ønsker jeg å sette opp to funksjoner som 
utfører nettopp disse handlingene. Ved det deklarerer jeg en constant (const). Den henter innhold fra Id `en
fra Html. Deretter setter jeg først en funksjon med navn removeFirstText som kjører handlingen ved å gi inputText en
verdi lik null. Handlingen kjøres med en gang. Videre deklarerer jeg en ny constant (const). Til slutt setter jeg en ny funksjon UpdateText som inneholder en let med verdi
event.key. Det vil si at for hver key på tastaturet som blir trykket, vil en event skje. Til slutt får input-Text en ny verdi
som er lik og plusser på en key for hver gang. 

Til slutt setter man en addEvenListener som hører på et tastaturtrykk ved bruk av "keyup " ved knappen med Id input,
og som skal utføre funskjonen updatetext.
*/

const input = document.getElementById("input");

function removeFirstText() {
  document.getElementById("input-text").innerHTML = null;
};

removeFirstText();


const inputText = document.getElementById ("input-text");

function updateText(e) {

  let characters = event.key;
  inputText.innerHTML += characters;
};

input.addEventListener("keyup", updateText);

/*Oppgave 4 -

For å bruke knappen til å skrive ut elementene fra arrayen (listen) MyList, ønsket jeg å sette opp en funnksjon som
nettopp utfører denne handlingen. Ved det deklarere jeg en constant (const). Den henter innhold fra Id `en
fra Html. Deretter satt jeg opp en funksjon som skulle kjøre handlingen. Funksjonen makeLi inneholder en let som
har verdi ved å bruke map() som lager en ny array fra å kalle på en funksjon for hver array-element.
Dermed blir alle listElementene skrevet ut samtidig ved bruk av <li>${listElement}</li>, som nå inneholder alle listelementene i arrayen.
Videre får Id "ul" fra Html en ny verdi som er lik listeelementet fra arrayen, som er koblet sammen med ingenting.
Uten noen verdi i tekstrengten med bruk av .join, ville listen registrert komma fra arrayen.
Til slutt reagerer funksjon på addEvenlistener ved et klikk av knappen*/

const myList = ["Bil", "Båt", "Buss", "Mopped", "Sykkel", "Scooter"];
const outPutBtn = document.getElementById('write-list');

function makeLi() {
  let liElements = myList.map((listElement) => `<li>${listElement}</li>`);
  document.getElementById("ul").innerHTML = liElements.join(" ");
};

outPutBtn.addEventListener("click", makeLi);

/*Oppgave 5 -
For å bruke knappen til å skrive ut tekst med ulike verdier, som h2, h3 etc. satt jeg opp en funskjon
som skulle nettopp uteføre denne funksjonen. I funksjonen henter jeg ut verdien av to ulike id´er fra html.
Deretter henter jeg id ´en fra html med navn "placeholder" og gir den en nye verdi som er lik ${htmlElement}>${text}</${htmlElement}, der teksten
er pakket inn i en valgt samtisk tagg. Til slutt kalles funksjonen med addEventlistener ved et klikk.
*/

function createText() {
  const semanticTag = document.getElementById("select").value;
  const text = document.getElementById("text").value;
  document.getElementById("placeholder").innerHTML += `<${semanticTag}>${text}</${semanticTag}>`;
};

const btn = document.getElementById("create");
btn.addEventListener("click", createText);

/*Oppgave 6 -
For å bruke knappen til å fjerne listelementer, satt jeg opp en funksjon som skulle nettopp kjøre
denne handlingen. I funksjonen satt jeg en const med navn lastElement (hentet fra løsning da andre navnet ikke fungerte)
som verdi av den siste li (lastElementChild) i den semantiske taggen ul fra html. Deretter bruker man en if test, ved å si
at hvis lastElement skal man hentet et element fra Id med navn "ul" og fjerne et barn, og det skal være li med verdien lastElement.
Til slutt kalles funksjonen med addEventlistener ved et klikk.
*/

function remove(){
  const lastElement = document.getElementById("list").lastElementChild;
  if (lastElement) {
    document.getElementById("list").removeChild(lastElement);
  }
};

const removeLi = document.getElementById("remove-li");
removeLi.addEventListener("click", remove);

/*Oppgave 7 -

For å kunne gjøre knappen disablet eller gi en rød border hvis det er mer eller lik 4 bokstaver i input, satt
jeg en funksjon som kunne gjennomføre denne handlingen. Først satt jeg en constant (const) som henter verdien til 
elementet med id navn "name" fra html. Deretter setter jeg en funksjon med navn checkWord. Her  setter jeg en ny const
med verien av tidligere satt const, men med dens value. consten brukes videre med en if-test.
Med if-testen sier jeg at hvis name og name sin lengde er større eller lik 4 skal knappen bli disabled og få en rød border.
Hvis ikke, skal knappen ikke være disabled og ha en svart border. Ved å benytte addEventListener, hvil funksjonen sjekke om hvor mange
bokstaver det finnes i inputen for hver gang en noe nytt blir plassert i input.
*/


const inputName = document.getElementById("name");

function checkWord() {

  const name = inputName.value;

  if (name && name.length >= 4) {
    document.getElementById("order").disabled = true;
    document.getElementById("order").style.border = "2px solid red";

  } else {
    document.getElementById("order").disabled  = false;
    document.getElementById("order").style.border = "1px solid black";
  }
};

inputName.addEventListener("input", checkWord);


/*Oppgave 8 -

For å kunne gi listeelementene ulike farger avhengig av partall og oddetall, startet jeg med å sette opp to constanter (const),
Jeg hentet dermed barna av ul med klasse .childeren. Videre brukte jeg knappen med id #color for å gjøre endringene. Jeg lagde enda igjen to
nye const for å hente oddetall og partall ut med bruk av .querySelectorAll sammen med listelementene og tidligere const. Jeg satt opp en knapp som skulle
utføre en handling ved et klikk. Handlingene so skulle skje var to funskjoner, der oddetall listeelementene fikk tildelt en ny type
style, og det samme med partall listelementene.
*/


const ulParent = document.querySelector(".children");

let odd = ulParent.querySelectorAll("li:nth-child(odd)");
let even = ulParent.querySelectorAll("li:nth-child(even)");


const colorBtn = document.getElementById("color");

colorBtn.addEventListener('click', ()=>{

    odd.forEach(function(li){

        li.style = " border: 1px solid green; margin-bottom: 5px; padding: 2px;";
    });

    even.forEach((li)=>{

    li.style = " border: 1px solid pink; margin-bottom: 5px; padding: 2px;";

    });
});






