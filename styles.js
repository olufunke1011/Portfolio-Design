function submitInfo(); {
    
    var Name = '';
    var email = '';
    var message = '';


    Name = document.getElementById('Name').value;
    email = document.getElementById('emailAddress').value;
    message = document.getElementById('message').value;

if (Name == '' || email == '' || message == '') {
  alert('please input missing field')
   
} else {
    alert('Your response has been submit, you will recieve an email shortly');

}
}


















