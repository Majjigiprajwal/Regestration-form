const formData = {};
function handleInputChange(event) {
  const input = event.target;
  const name = input.getAttribute("id");
  const value = input.value;
  formData[name] = value;
}
var error = document.getElementById('error');
let  errorMessages ="";
function handleSubmit(e){
   e.preventDefault();
   if(validateForm()){
    localStorage.setItem("user",JSON.stringify(formData));
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

  if (!formData["Password"] || formData["Password"].length<8) {
    errorMessages = "Enter valid password.";
    return false;
  } 

  if (!formData["Phone"]) {
    errorMessages =  "Phone Numberis required.";
    return false;
  } 
  return true;
}
