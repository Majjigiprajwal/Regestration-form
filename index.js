const formData = {};
function handleInputChange(event) {
  const input = event.target;
  const name = input.getAttribute("placeholder");
  const value = input.value;
  formData[name] = value;
}

function validateForm() {
    const name = formData["Name"];
    const email = formData["Email"];
    const phoneNumber = formData["Phone Number"];
  
    if (name=== "" || email=== "" || phoneNumber=== "" ) {
      console.log("Please fill in all fields.");
      return false;
    }
    return true;
  } 


function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        console.log("Form data:", formData);
      }
    }

const listElements = document.getElementsByTagName('li');

listElements[0].addEventListener('click', function() {
    this.style.backgroundColor = 'green';
});

listElements[1].addEventListener('click', function() {
    this.style.backgroundColor = 'yellow';
});

listElements[0].addEventListener('mouseover', function() {
    this.style.fontSize = '20px';
});

listElements[1].addEventListener('mouseover', function() {
    this.style.fontSize = '20px';
});


listElements[0].addEventListener('mouseout', function() {
    this.style.fontSize = '16px';
});

listElements[1].addEventListener('mouseout', function() {
    this.style.fontSize = '16px';
});

