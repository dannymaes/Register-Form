// Form validation
let form = document.getElementById('form');

document.getElementById("submit").addEventListener("click", function(){
      let dataInput = [
         firstName = document.getElementById('firstName').value,
         lastName = document.getElementById('name').value,
         userName = document.getElementById('userName').value,
         myEmail = document.getElementById('email').value,
         passWord = document.getElementById('password').value,
         confirmPsw = document.getElementById('confirmPsw').value,
         adress = document.getElementById('adress').value,
         city = document.getElementById('city').value,
         zipCode = document.getElementById('zipCode').value,
         phoneNum = document.getElementById('phone').value,
         age = document.getElementById('age').value,
         hobbies = document.getElementById('hobbies').value,
      ];
// to reset the error message in webpage :
        errorEmail.innerHTML ='';
        errorPsw.innerHTML= '';
        errorConfirm.innerHTML= '';
        
// check passwords :
        let psw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

            if(passWord.match(psw) && passWord === confirmPsw){
               console.log('password is ok')
            }
            else if (passWord !== confirmPsw){

               let errorConfirm = document.getElementById('errorConfirm');
                   errorConfirm.innerHTML = ' The password you entered does not match'
               console.log('entered passwords do not match')

            }
            else {
               let errorPsw = document.getElementById('errorPsw');
                   errorPsw.innerHTML = 'At least 1 Capital and 1 number required! ';
              console.log('password must contain at least 1 capital letter and 1 number')

      }

// check email :
        let eml = /^[a-zA-Z0-9_.+-]+@gmail.com+$/
           if(myEmail.match(eml)){
             console.log('email correct');
           }
           else {
             let errorEmail = document.getElementById('errorEmail');
             errorEmail.innerHTML =' Email can only have "@gmail.com" other email providers are not allowed!';
             console.log('invalid email')
           }

         console.log(dataInput)


});
