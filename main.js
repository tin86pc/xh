
(function KhoiTaoBanDau() {
    var x = window.location.href;;
    QRcode(x);
})()

function TaoQRcode() {
    var x = document.getElementById("nd").value;
    QRcode(x);
}

function QRcode(nd) {
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), nd);
}

function TaiXuong() {
    let dataUrl = document.querySelector('#qrcode').querySelector('img').src;
    downloadURI(dataUrl, 'qrcode.png');
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
};


