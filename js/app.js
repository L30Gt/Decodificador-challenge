const textArea = document.querySelector(".input-text");
const message = document.querySelector(".output-text");
const alert = document.getElementById("messageAlert");
const infoAlert = document.getElementById("info");
const alertImage = document.getElementById("alert-image");
const regex = /[^a-z\s]/u;
const cryptography = [
    ["e", 'enter'], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]
];

function encryptText(){
    let text = textArea.value.trim();

    if (regex.test(text)){
        alert.textContent = "Texto inválido!";
        infoAlert.classList.add("blink-error");
    } else if (text === ""){
        alert.textContent = "Nenhum texto digitado";
        alert.classList.add("blink-attention");
    } else {
        alert.textContent = "Mensagem criptografada!";
        btnEncrypt();
        infoAlert.classList.remove("blink-error");
        alert.classList.remove("blink-attention");
    }
}

function decryptText(){
    let text = textArea.value.trim();

    if (regex.test(text)){
        alert.textContent = "Texto inválido!";
        infoAlert.classList.add("blink-error");
    } else if (text === ""){
        alert.textContent = "Nenhum texto digitado";
        alert.classList.add("blink-attention");
    } else {
        alert.textContent = "Mensagem Descriptografada!";
        btnDecrypt();
        infoAlert.classList.remove("blink-error");
        alert.classList.remove("blink-attention");
    }
}

function btnEncrypt(){
    const encryptedText = encrypt(textArea.value);
    
    message.value = encryptedText; 
    alertImage.style.display = 'none';
    textArea.value = "";
}

function btnDecrypt() {
    const decryptedText = decrypt(textArea.value);
    
    message.value = decryptedText;
    alertImage.style.display = 'none';
    textArea.value = "";
}

function encrypt(stringEncrypted) {
    for (let i = 0; i < cryptography.length; i++) {
        stringEncrypted = stringEncrypted.replaceAll(cryptography[i][0], cryptography[i][1]);
    }
    return stringEncrypted;
}

function decrypt(stringDecrypted) {
    for (let i = 0; i < cryptography.length; i++) {
        stringDecrypted = stringDecrypted.replaceAll(cryptography[i][1], cryptography[i][0]);
    }
    return stringDecrypted;
}

function clearText(){
    message.value = "";
    textArea.value = "";
    alert.textContent = "Nenhuma mensagem encontrada";
    
    alertImage.style.display = 'block';
    
    infoAlert.classList.remove("blink-error");
    alert.classList.remove("blink-attention");
}

function copyMessage(){
    let textToCopy = document.querySelector(".output-text");

    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textToCopy.value);

    clearText();
    alert.textContent = "Texto copiado!";
}