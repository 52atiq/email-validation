const emailValidate =() =>{
const emailInput= document.getElementById('email-field');
const email = emailInput.value
// emailInput.value=''
// document.querySelector('#email-field').value = '';
const text= document.getElementById('text');
// document.getElementById('text').style.display='block'

console.log(emailInput)

const pattern = 
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  ;
//   const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.match(pattern)){
      text.innerHTML ='Your Email is valid'
    //   document.getElementById("text").style.color = "magenta";
      text.style.color ='green'
    //   document.getElementById('text').style.display.color='green'
      console.log('Your Email is valid')
     
     
     
  }
  else{
    text.innerHTML ='Your Email is Not  valid';
    text.style.color='red';
    console.log('Your Email is Not valid')
  
  }
}
// emailValidate()