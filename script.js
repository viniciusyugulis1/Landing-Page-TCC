let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * 100; // Calcula o deslocamento
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // Atualiza o índice
    updateCarousel(); // Atualiza a posição do carrossel
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Atualiza o índice
    updateCarousel(); // Atualiza a posição do carrossel
}

// Muda o slide automaticamente a cada 12 segundos
setInterval(nextSlide, 10000);

// Obtém o modal
var modal = document.getElementById("loginModal");

// Obtém o botão que abre o modal
var btn = document.getElementById("loginButton");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementById("closeModal");

// Quando o usuário clica no botão, abre o modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

