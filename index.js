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
    list.setAttribute("id",formData.Email);
    list.textContent=`${formData.Name}-${formData.Email}-${formData.Phone}`;
    list.style.fontWeight='600'
    list.style.marginTop='10px';
    list.style.fontSize='18px'
    var button = document.createElement('button');
    button.textContent="Delete";
    button.style.background="black";
    button.style.color="white";
    button.style.marginLeft="10px";
    button.setAttribute('id',formData.Email);
    button.setAttribute('class','delete');
    button.addEventListener("click",deleteUser);
    var editButton = document.createElement('button');
    editButton.textContent="Edit";
    editButton.style.background="black";
    editButton.style.color="white";
    editButton.style.marginLeft="10px";
    editButton.setAttribute('id',formData.Email);
    editButton.setAttribute('class','edit');
    editButton.addEventListener("click",editUser);
    list.appendChild(editButton);
    list.appendChild(button);
    user.appendChild(list);
    document.getElementById('Name').value="";
  document.getElementById('Email').value="";
  document.getElementById('Phone').value="";
    error.innerText="";
   }
   else{
    error.innerText=errorMessages;
   }
}

function deleteUser(e){
var users = document.getElementsByTagName("li");
localStorage.removeItem(e.target.id);
console.log(users[0].id);
for(let i=0;i<users.length;i++){
  if(e.target.id===users[i].id){
     users[i].remove();
  }
 }
}

function editUser(e){
  let user = JSON.parse(localStorage.getItem(e.target.id));
  deleteUser(e);

  document.getElementById('Name').value=user.Name;
  document.getElementById('Email').value=user.Email;
  document.getElementById('Phone').value=user.Phone;
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
