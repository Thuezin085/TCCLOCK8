document.addEventListener('DOMContentLoaded', function () {
    const dogForm = document.getElementById('dog-form');
    const qrcodeContainer = document.getElementById('qrcode');

    dogForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const dogName = document.getElementById('dog-name').value;
        const dogAge = document.getElementById('dog-age').value;

        // Criar o texto para o QR Code com as informações do cachorro
        const dogInfoText = `Nome: ${dogName}, Idade: ${dogAge}`;

        // Gerar o QR Code usando a API do Google Charts
        const googleChartsUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(dogInfoText)}`;
        qrcodeContainer.innerHTML = `<img src="${googleChartsUrl}" alt="QR Code">`;
    });
});
