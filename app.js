// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombreAmigo = inputNombre.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    nombres.push(nombreAmigo);
    
    inputNombre.value = '';
}
