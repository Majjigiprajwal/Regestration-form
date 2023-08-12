const formData = {};
function handleInputChange(event) {
  const input = event.target;
  const name = input.getAttribute("id");
  const value = input.value;
  formData[name] = value;
}
var error = document.getElementById('error');
var user = document.getElementById('userDetails');
let  errorMessages ="";
function handleSubmit(e){
   e.preventDefault();
   if(validateForm()){
    localStorage.setItem(formData.Email,JSON.stringify(formData));
    var list = document.createElement('li');
    list.textContent=`${formData.Name}-${formData.Email}-${formData.Phone}`;
    list.style.fontWeight='600'
    list.style.marginTop='10px';
    list.style.fontSize='18px'

    user.appendChild(list);
    error.innerText="";
   }
   else{
    error.innerText=errorMessages;
   }
}



function validateForm() {
  
 

  if (!formData["Name"]) {
    errorMessages = "Name is required.";
    
    return false;
  }

  if (!formData["Email"] || !formData["Email"].includes("@")) {
    errorMessages = "Email is required.";
    return false;
  } 
 

  if (!formData["Phone"]) {
    errorMessages =  "Phone Numberis required.";
    return false;
  } 
  return true;
}
