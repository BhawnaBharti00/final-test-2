function handleFeedbackSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('fb-name').value.trim();
  const feedback = document.getElementById('fb-feedback').value.trim();
  const statusMsg = document.getElementById('fb-status');

  if (name && feedback) {
    // Mock feedback submission logic
    console.log('Feedback submitted:', { name, feedback });
    statusMsg.textContent = 'Thank you for your feedback!';
    statusMsg.style.color = 'green';

    // Clear form fields
    document.getElementById('feedbackForm').reset();
  } else {
    statusMsg.textContent = 'Please fill out both fields.';
    statusMsg.style.color = 'red';
  }
}
