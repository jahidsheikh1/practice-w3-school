document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // You can perform further actions with the collected data, such as sending it to a server or displaying a confirmation message.
    alert("Thank you, " + name + "! We'll get in touch with you at " + email + ".");
});
