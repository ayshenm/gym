const word_el = document.querySelector('#word');
const popup = document.querySelector('#popup-container');
const message_

const corretLetters = ['j','a','v','s','t'];
const wrongLetters =[];

function getRandomWord(){
    const words =["javascript","java","phyton"];
    return words[ Math.floor(Math.random() * words.length)];
}



function displayWord(){
    const selectedWord = getRandomWord(); 

    word_el.innerHTML = `
       ${selectedWord.split('').map(letter => `
         <div class ="letter"> 
            ${corretLetters.includes(letter) ? letter: ''}

         </div>
       ` 
       ).join('')}


    `;   

   const w = word_el.innerText.replace(/\n/g,'');
   if(w === selectedWord){
       popup.style.display = 'flex';
       
   }
}
displayWord()
