const emailCollectorForm = document.querySelector('.email-collector');
const mainContent = document.querySelector(".main-content");

function handleSubmit(event) {
    event.preventDefault();
    
    const ourFormData = new FormData(event.target);
    const userFirstName = ourFormData.get("firstName");
    let userEmailAddress = ourFormData.get("emailAddress");

    const updatedHtmlContent = `
      <h2>Congratulations, ${userFirstName}!</h2>
      <p>You're on your way to becoming a BBQ Master!</p>
      <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    mainContent.innerHTML = updatedHtmlContent;
}

emailCollectorForm.addEventListener("submit", handleSubmit);