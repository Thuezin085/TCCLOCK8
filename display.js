document.addEventListener('DOMContentLoaded', function () {
    const dogInfoContainer = document.getElementById('dog-info');

    // Obter as informações do cachorro a partir da URL
    const urlParams = new URLSearchParams(window.location.search);
    const dogInfoText = urlParams.get('info');

    // Exibir as informações do cachorro
    if (dogInfoText) {
        dogInfoContainer.textContent = dogInfoText;
    } else {
        dogInfoContainer.textContent = 'Nenhuma informação disponível.';
    }
});
