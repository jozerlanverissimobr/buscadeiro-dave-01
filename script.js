//// Exemplo de script para manipulação de eventos
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!'); // Ação simples ao carregar a página
});

//login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação, por exemplo:
    if (username === 'admin' && password === 'password') {
        alert('Login bem-sucedido!');
        // Redirecionar para a página principal ou outra ação
        window.location.href = 'index.html'; // Mude para a página desejada
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});

//login cadastro 
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validação simples
    if (password !== confirmPassword) {
        alert('As senhas não correspondem. Por favor, tente novamente.');
        return;
    }

    // Aqui você pode adicionar a lógica para salvar os dados do usuário
    // Por exemplo, enviar os dados para um servidor ou salvá-los localmente

    alert('Cadastro realizado com sucesso! Você pode fazer login agora.');
    // Redirecionar para a página de login
    window.location.href = 'login.html';
});


//teste.html
