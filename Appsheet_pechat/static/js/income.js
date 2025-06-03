document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const kirim_id = params.get('kirim_id') || '';
    const zavod = params.get('zavod') || '';
    const jami_xarid_summasi = params.get('jami_xarid_summasi') || '0';
    const boshlangich_tolov = params.get('boshlangich_tolov') || '0';
    const qoldiq_summa = params.get('qoldiq_summa') || '0';
    const balans = params.get('balans') || '0';
    const sana = params.get('sana') || '';

    const qrData = `Zavod: ${zavod}\nJami: ${jami_xarid_summasi} so'm\nTo'landi: ${boshlangich_tolov} so'm\nQarz: ${qoldiq_summa} so'm\nBalans: ${balans} so'm\nSana: ${sana}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrData)}`;
    const qrCodeElement = document.getElementById('qr-code');
    if (qrCodeElement) {
        qrCodeElement.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
    } else {
        console.error('QR code element not found');
    }

    // Avtomatik pechat oynasini ochish
    window.print();

    // Pечатdan keyin oynani yopish
    window.addEventListener('afterprint', function() {
        window.close();
    });
});