// Get the button
let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const modal = document.getElementById('modal'); 
const closeBtn = document.getElementById('close-btn')
const declineBtn = document.getElementById('decline-btn')
const modalBtns = document.getElementById('modal-btns')
const consentForm = document.getElementById('form-content')
const innerModal = document.getElementById('inner-modal')
const modalText = document.getElementById('modal-text')


setTimeout(function(){
  modal.style.display = "inline"
}, 3500)


closeBtn.addEventListener('click', function(){
  modal.style.display = "none"
})

declineBtn.addEventListener('mouseenter', function(){
  modalBtns.classList.toggle('modal-btns-reverse')
})

consentForm.addEventListener('submit', function(e){
  e.preventDefault();

  const consentFormData = new FormData(consentForm)
  const fullName = consentFormData.get('fullName')


  modal.innerHTML = `
     <div class="modal-inner-loading">
        <img src="/svgs/Spinner@1x-1.0s-200px-200px.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>
  `

  setTimeout(function(){
    document.getElementById('upload-text').innerText = `
    Making Changes...`
  }, 2000)


  setTimeout(function(){
    document.getElementById('upload-text').innerHTML = `
       <h2>Thanks <span class="modal-display-name">${fullName}</span> for those information, There is no such thing as free Laptop :) </h2>
      <p>See you in your house 👋.</p>
    `
    document.querySelector('.loading').style.display = "none"
    closeBtn.disabled = false
  }, 4000);
})

