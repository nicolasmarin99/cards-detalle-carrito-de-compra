export function registrarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const reEmail = document.getElementById('reEmail').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('rePassword').value;
    const nacimiento = document.getElementById('nacimiento').value;

    if (!nombre || !email || !reEmail || !password || !rePassword || !nacimiento) {
        alert('Por favor complete todos los campos');
        return;
    }

    if (email !== reEmail) {
        alert('Los emails no coinciden');
        return;
    }

    if (password !== rePassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const usuario = {
        nombre,
        email,
        password,
        nacimiento
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Registro exitoso');
    window.location.href = './inicio-sesion.html';
}

export function iniciarSesion() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Por favor complete todos los campos');
        return;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.password === password) {
        alert('Bienvenido, usted está registrado');
        window.location.href = './pagina-principal.html';
    } else {
        alert('Email o contraseña incorrectos');
    }
}