// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById("modal")
modal.className = "hidden"



function like (event) {
  let likeHeart = event.target

  mimicServerCall("blahblahblah")
  .then(() => {
    if (likeHeart.className === "activated-heart"){
      likeHeart.innerText = EMPTY_HEART
      likeHeart.className = ""
    } else{
      likeHeart.innerText = FULL_HEART
      likeHeart.className = "activated-heart"
    }
  })
  .catch((error) => {
    document.getElementById("modal").className = ""
    setTimeout(() => {
      document.getElementById("modal").className = "hidden"
    }, 5000)
  })
}

let likeButtons = document.querySelectorAll(".like-glyph")
likeButtons.forEach((button) =>  button.addEventListener("click", like))

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
