document.addEventListener('DOMContentLoaded', function() {
    const klent = {
        ismi: document.querySelector('.header p:nth-child(2)').textContent.replace('Klient: ', ''),
        telefon_raqami: document.querySelector('.header p:nth-child(3)').textContent.replace('Telefon: ', ''),
        balans: document.querySelector('.header p:nth-child(4)').textContent.replace('Balans: ', '').replace(' so\'m', ''),
        sana: document.querySelector('.header p:nth-child(5)').textContent.replace('Sana: ', '')
    };

    const qrData = `Klient: ${klent.ismi}\nTelefon: ${klent.telefon_raqami}\nBalans: ${klent.balans} so'm\nSana: ${klent.sana}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrData)}`;
    // QR kod qo'shish uchun placeholder yo'q, server tomonida qo'shilishi mumkin
    console.log('QR Code URL:', qrCodeUrl); // Serverda qo'shish uchun foydalaning
});