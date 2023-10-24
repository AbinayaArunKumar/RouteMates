const scriptURL = 'https://script.google.com/macros/s/AKfycby8Z4kM21wf7v4S6NdxW-EAlvDZbOHcfVcPADNuOgyM37rFQNnuE2CM097aSW0WSpc/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Response Submitted!. ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})