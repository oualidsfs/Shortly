const input = document.getElementById("link-input");
const form = document.getElementById("link-form");
const errormsg = document.getElementById("error-msg");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


btn.addEventListener("click" , (e) => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

})

form.addEventListener('submit' , formSubmit)

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function formSubmit(e){
  e.preventDefault()
  if (input.value === '') {
    errormsg.innerHTML='Please enter something!'
    input.classList.add('border-red')
  } else if (!validURL(input.value)){
    errormsg.innerHTML='Please enter a valid URL!'
    input.classList.add('border-red')
  } else {
    errormsg.innerHTML = ''
    input.classList.remove('border-red')
    alert('Succes')
  }
}
