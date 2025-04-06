// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//hide the error modal
const errorModal= document.querySelector('#modal');
errorModal.classList.add('hidden');

//click heart function
const heart=document.querySelectorAll('.like-glyph');


heart.forEach (hearts => {
  hearts.addEventListener('click',() =>{

    mimicServerCall()
    .then(function(){
      if (hearts.textContent === EMPTY_HEART){
        hearts.innerText = FULL_HEART;
        hearts.classList.add('activated-heart');
      }
      else{
        hearts.innerText = EMPTY_HEART;
        hearts.classList.remove('activated-heart');
      }
    })
    .catch((error)=>{
      // show the error modal
      errorModal.classList.remove('hidden');
      // set the error message
      const errorMessage =document.querySelector('#modal-message');
      errorMessage.textContent = error;
    })
    // hide error after 3s
    setTimeout(()=>{
      errorModal.classList.add('hidden'),300;
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
