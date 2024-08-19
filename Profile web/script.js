const contactForm = document.getElementById('icontact-form'),
      contactMessage = document.getElementById('icontact-message')
const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_z6uudgs','template_6saynhf','#icontact-form','JfZaovfvrAWtA-nlU')
        .then(() => {
          contactMessage.textContent = 'Message sent successfully'
          setTimeout(() => {
            contactMessage.textContent = ''
          }, 5000)
          
            contactForm.reset() 
    } )
  }
  
contactForm.addEventListener('submit', sendEmail)