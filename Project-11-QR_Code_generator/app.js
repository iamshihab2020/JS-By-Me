const wrapper = document.querySelector('.wrapper'),
qrInput = document.querySelector('.inputLink'),
generateBtn = document.querySelector('.submitBtn'),
qrImg = document.querySelector('.qrImg'),
qrCode = document.querySelector('qr-code'),
downloadBtn = document.getElementById('downloadBtn');

generateBtn.addEventListener('click', ()=>{
    // qrCode.classList.add('active')
    let qrValue = qrInput.value;
    if(!qrValue) return
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue} `;
    qrImg.addEventListener('load', ()=>{
        wrapper.classList.add('active');
        downloadBtn.style.display = 'block';
    });


    downloadBtn.addEventListener('click', () => {
        const qrDataURL = qrImg.src;
        const link = document.createElement('a');
        link.href = qrDataURL;
        link.target = '_blank';
        link.download = 'qr_code.png';
        link.click();
    });

});





