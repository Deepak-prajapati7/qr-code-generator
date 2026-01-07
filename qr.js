const generateBtn = document.getElementById("generate-code");
const input = document.getElementById("qrcode");
const result = document.getElementById("qr-result");

generateBtn.addEventListener("click", function () {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a URL or text");
        return;
    }

    // clear old QR
    result.innerHTML = "";

    // create QR image
    const img = document.createElement("img");
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(text);

    result.appendChild(img);
});
