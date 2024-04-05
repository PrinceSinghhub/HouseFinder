document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    console.log("Contact Data Recived Successfully");
    console.log(name, email, subject, phone, message);
  
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLScgpkTyU9AvhILQCcf6o3eicwL2fbxZArTiQMYIrNNMPcMjLA/formResponse';
  
    var formData = new FormData();
    formData.append('entry.1678590117', name);
    formData.append('entry.1996300062', email);
    formData.append('entry.72975923', subject);
    formData.append('entry.1825055730', phone);
    formData.append('entry.300178542', message);

    var button = document.getElementById('form-submit');

    button.innerHTML = 'Response Received';

    setTimeout(function() {
        button.innerHTML = 'Send Message';
    }, 1000);
  
    fetch(url, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    }).then(function(response) {
      console.log('Form data sent successfully');
    }).catch(function(error) {
      console.error('Error:', error);
    });
  });
