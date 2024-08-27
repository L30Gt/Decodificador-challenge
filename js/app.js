const textArea = document.querySelector(".input-text");
const message = document.querySelector(".output-text");
const alert = document.getElementById("messageAlert");
const infoAlert = document.getElementById("info");
const alertImage = document.getElementById("alert-image");

function encryptText(){
    let text = textArea.value.trim();
    let regex = /[A-ZÀ-Ýà-ÿ]/u;

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
    let regex = /[A-ZÀ-Ýà-ÿ]/u;

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
    let cryptografy = [["e", 'enter'] , ["i", "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    for (let i = 0; i < cryptografy.length; i++){
        if (stringEncrypted.includes(cryptografy[i][0])){
            stringEncrypted = stringEncrypted.replaceAll(cryptografy[i][0], cryptografy[i][1]);
        }
    }

    return stringEncrypted;
}

function decrypt(stringDecrypted){
    let cryptografy = [["e", 'enter'] , ["i", "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    for (let i = 0; i < cryptografy.length; i++){
        if (stringDecrypted.includes(cryptografy[i][1])){
            stringDecrypted = stringDecrypted.replaceAll(cryptografy[i][1], cryptografy[i][0]);
        }
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

    alert.textContent = "Texto copiado!";
    clearText();
}