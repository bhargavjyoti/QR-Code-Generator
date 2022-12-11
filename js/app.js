const form = document.querySelector("#form");
const qr = document.getElementById('qr');


const onSubmit = (e) => {
    e.preventDefault();
    
    cleanQR();

    const url = document.getElementById('url').value;
    
    // validation
    if(url === '') {
        alert('Please enter a URL');
    } else {
        
        generateQR(url);
        addBorder();

        setTimeout(() => {
            const saveURL = qr.querySelector('img').src;
            createDownloadBtn(saveURL);
        }, 50)
    }
 
}


// Using Library to generate qrcode
const generateQR = (url) => {
    let qrcode = new QRCode(qr, {
        text: url,
    });

};

// To clean the qr before generating other QR
const cleanQR = () => {
    qr.innerHTML = '';
    const downloadBtn = document.getElementById('download-link');
    if(downloadBtn) {
        downloadBtn.remove();
    }
}

// Adding Styles
const addBorder = () => {
    qr.classList.add("mt-3", "border-8", "rounded-md", "border-primary", "p-1")
}

// Download Button
const createDownloadBtn = (saveURL) => {
    const link = document.createElement('a');
    link.id = 'download-link';
    link.classList = 'w-1/2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-white hover:text-black';
    link.download = 'qrcode';
    link.innerHTML = 'Download';
    link.href = saveURL;
    document.getElementById('download-btn').appendChild(link);
}




form.addEventListener('submit', onSubmit);