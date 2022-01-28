const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const textArray = text.split(" ");

function longestWord() {
  let longestWord = textArray[0];

  textArray.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};


function longestWordNumber(length) {
  let longestWord = 0;

  for(var i = 0; i < textArray.length; i++){
     if(textArray[i].length > longestWord){
      longestWord = textArray[i].length;
          }
  }
  return longestWord;
}

console.log(longestWord());


longestWord();
longestWordNumber();

document.getElementById("app").innerHTML = "Lengste ord: " + longestWord();

document.getElementById("apps").innerHTML = "Antall bokstaver: " + longestWordNumber();

