window.onload = function () {
    var submitButton = document.getElementById ('submit')
    
    submitButton.addEventListener('click', function(event){
       event.preventDefault()

       validateName()
       validateSurname()
       validateAge()
       validatePhone()  
    })
}
/**
 * This function validates the name
 * from the name input 
 */
function validateName() {
    var name = document.getElementById('name')
      //SHOW THE ERROR MESSAGE
    var nameErrorMessage = document.getElementById('name-error')
    if(name.value == "" || name.value == undefined)
    {
        nameErrorMessage.classList.remove('is-invisible')
    }
    else{
        nameErrorMessage.classList.add('is-invisible')
    }
}
/**
 * This function validates the surname
 * from the surname input
 */

 function validateSurname() {
     var surname = document.getElementById ('surname')
     var surnameErrorMessage = document.getElementById('surname-error')
     if(surname.value == "" || surname.value == undefined)
     {
         surnameErrorMessage.classList.remove('is-invisible')
     }
     else{
         surnameErrorMessage.classList.add('is-invisible')
     }
 }

 function validateAge(){
    var age = document.getElementById ('age')
    var tooYoungError = document.getElementById('too-young-error')
    var tooOldError = document.getElementById('too-old-error')
    if(age.value < 18)
    {
        tooYoungError.classList.remove('is-invisible')
        tooOldError.classList.add('is-invisible')
    }
    else if(age.value > 64 ){
        tooOldError.classList.remove('is-invisible')
        tooYoungError.classList.add('is-invisible')
    }
    else{
        tooYoungError.classList.add('is-invisible')
        tooOldError.classList.add('is-invisible')
    }
       
}

 function getGender(){
     var gender = document.getElementById ('gender')
     return gender.value
 }

 function getAddress(){
    var address = document.getElementById ('address')
    return address.value
}

function validatePhone(){
    var phone = document.getElementById('phone')
    var phoneCodeError = document.getElementById('phone-code-error')

    if(phone.CharAt(0) !== 0 && phone.CharAt(1) !== 7 && phone.ChartAt(2) !== 3)
    {
        phoneCodeError.classList.remove('is-invisible')
    }
   else {
    phoneCodeError.classList.add('is-invisible')
   }
}