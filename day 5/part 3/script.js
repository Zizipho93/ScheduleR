window.onload = function () {
    var submitButton = document.getElementById ('submit')
    
    submitButton.addEventListener('click', function(event){
       event.preventDefault()

        var name  = getName()
        var surname = getSurname()
        var age = getAge()
        var gender = getGender()
        var address = getGender()
        var phone = getPhone()

        if(age < 18 ){
            alert("You are not old enogh to use this form")
        
        }else if(name == "" || name == undefined){
            alert("Please fill in your name")
        
        }else if(surname == "" || surname == undefined){
            alert("Please fill in your surname ")   
        }else if(gender == "male" ){
            alert("You are not allowed to use this site")
        }else if(phone.length < 10 || phone.length > 10){
            alert("phone number should be 10 digits")
        }
         else{
            alert("hello " + name + " " + surname + " you are " + " " + age + " years old" 
            + " " + gender + " your address is " + " " + address + " and your phone number is " + phone)
         }
        
         
    })
}
/**
 * This function gets the name
 * from the name input 
 */
function getName() {
    var name = document.getElementById('name')
    return name.value
}

/**
 * This function gets the surname
 * from the surname input
 */

 function getSurname() {
     var surname = document.getElementById ('surname')
     return surname.value
 }

 function getAge(){
    var age = document.getElementById ('age')
    return age.value
 }

 function getGender(){
     var gender = document.getElementById ('gender')
     return gender.value
 }

 function getAddress(){
    var address = document.getElementById ('address')
    return address.value
}

function getPhone(){
    var phone = document.getElementById ('phone')
    return phone.value
}