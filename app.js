const emailValidate =() =>{
const emailInput= document.getElementById('email-field');
const email = emailInput.value
emailInput.value=''

const text= document.getElementById('text');

// Error handling 
if(email== ''){
  text.innerHTML ='please type your email'
  console.log('please type your email')
}

console.log(email)

const pattern = 
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  


  if(email.match(pattern)){
      text.innerHTML = email + ''+  ' <span id="email-text">is valid Email &#128512 </span>'
    //   document.getElementById("text").style.color = "magenta";
      text.style.color ='green'
    //   document.getElementById('text').style.display.color='green'
      console.log('Your Email is valid')
     
     
     
  }
  else if(email == ''){
    text.innerHTML=' <p>Please Type Your Email  &#128529 </p>'
    text.style.color='#cf03fc';
  }
  else{
    text.innerHTML = email + ' <span id="email-text">is Not  valid Email &#128520 </span>';
    text.style.color='red';
    console.log('Your Email is Not valid')
  
  }
}
// emailValidate()