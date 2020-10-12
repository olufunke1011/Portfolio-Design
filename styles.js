function submitInfo(); {
    // const contact = document.querySelector('.form');
    var Name = '';
    var email = '';
    var message = '';


    Name = document.getElementById('Name').value;
    email = document.getElementById('emailAddress').value;
    message = document.getElementById('message').value;
    // console.log('Your name ' + Name);
    // console.log('Email Address ' + email);
    // console.log('Your Message Here... ' + message);
if (Name == '' && email == '' && message == '') {
  alert('please input missing field');
    // console.log(contact);
} else {
    alert('Your response has been submit, you will recieve an email shortly');

}
}


















// function submitInfo() {
//     var firstName = '';
//     var lastName = '';
//     var email = '';
//     var password = '';

//     firstName = document.getElementById('firstName').value;
//     lastName = document.getElementById('lastName').value;
//     email = document.getElementById('email').value;
//     password = document.getElementById('password').value;
//     console.log('first Name:' + firstName);
//     console.log('last Name:' + lastName);
//     console.log('email:' + email);
//     console.log('Password:' + password);
// if (firstName == '' && lastName == '' && email == '' && password == '') {
//     alert ('input missing field');
// } else {
//     alert ('Form has been submitted');
// }
// }