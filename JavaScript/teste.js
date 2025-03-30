window.addEventListener('load', function() {
    const products = document.querySelectorAll('.product'); // Seleciona todos os produtos

    // Adiciona uma animação para cada produto
    products.forEach((product, index) => {
        product.style.animation = `slideIn 1s forwards ${index * 0.3}s`;
    });
});
