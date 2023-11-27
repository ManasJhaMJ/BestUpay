
function sendEmail(){
    console.log("function Call");
    
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("successMessage");
    const fileInput = document.getElementById('resume');  
    const file = fileInput.files[0];
    const fileURL = URL.createObjectURL(file);
    
    const resumeLink = document.createElement('a');
    resumeLink.href = fileURL;
    resumeLink.target = '_blank'; // Open in a new tab
    resumeLink.innerText = 'Download Resume';
    document.getElementById('hone').innerText = resumeLink.innerText;
    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "gupta.saumya837@gmail.com",
        Password : "75760AA1E8E5805D38464446F3AE13A7EF39",
        To : "bestupayofficial@gmail.com",
        From : "gupta.saumya837@gmail.com",
        Subject : "This is the subject",

        Body : "Name:" + document.getElementById("name").value + "<br/>"
        +"Phone:" +document.getElementById("phone").value+"<br/>"+
    
        "Email:"+document.getElementById("email").value + "<br/>"+
        "Resume:"+ resumeLink.href
        
    }).then(

         successMessage.style.display = "inline",
         contactForm.style.display="none",
    //    // contactImage.remove(),
    //     contactForm.remove(),
    //     //formContainer.style.width = "1000px",
    //     localStorage.setItem("formSubmitted", "true")
    message => alert(message)
    )
}
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("formSubmitted") === "true") {
        sendEmail();
    }
  });
//   .catch(function (error) {
//     console.log("Failed to send email:", error);
//   });
