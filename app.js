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

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < nombres.length; i++) {
      const lista = document.createElement('li');
      lista.textContent = nombres[i];
      listaAmigos.appendChild(lista);
  }
}

function sortearAmigo() {
  if (nombres.length === 0) {
      alert('Amigos no disponibles. Agrega nuevos nombres.');
      return;
  }
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  
  const amigoSorteado = nombres[indiceAleatorio];
  
  const elementoResultado = document.getElementById('resultado');
  elementoResultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}