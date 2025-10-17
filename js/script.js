
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Formulário enviado com sucesso!');
    this.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});
