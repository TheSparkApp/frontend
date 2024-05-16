const fs = require('fs');
const qr = require('qr-image');

function generateRandomCode() {
    const length = 12;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *characters.length));
    }
    return result;
}

function generateQRCode() {
    const code = generateRandomCode();
    const qrCode = qr.image(`https://localhost:3000/auth/verify-qr/${code}`, { type: 'png' }); //TODO: Dann zu domain ändern
    let filename = `USERID_qr_verify_${code}.png`;
    qrCode.pipe(fs.createWriteStream(filename));
    console.log(`Saved as ${filename}`);
}

generateQRCode();
