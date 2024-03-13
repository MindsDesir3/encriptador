
let campoTexto = document.querySelector("#campoDeTexto")
let textoEncriptado = document.querySelector("#texto_encriptado")

 let matrizCode =[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
 ];
 function btnEncriptar(){
    let texto = encriptar (campoTexto.value);
    textoEncriptado.value = texto
    campoTexto.value = "";
 }
function encriptar(fraseEncriptada){
    for(let i = 0; i < matrizCode.length; i++){
        if(fraseEncriptada.includes(matrizCode[i][0])){
            fraseEncriptada= fraseEncriptada.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1],
            )
        }

    }
    return fraseEncriptada;
}
function btnDesencriptar(){
    let texto = desencriptar (campoTexto.value);
    textoEncriptado.value = texto
    campoTexto.value = "";
 }
function desencriptar(fraseDesencriptada){
    for(let i = 0; i < matrizCode.length; i++){
        if(fraseDesencriptada.includes(matrizCode[i][1])){
            fraseDesencriptada= fraseDesencriptada.replaceAll(
                matrizCode[i][1],
                matrizCode[i][0],
            )
        }

    }
    return fraseDesencriptada;
}
console.log(matrizCode.length)

function btncopiar(){
    let copia = textoEncriptado.value;
    campoTexto.value = copia
    textoEncriptado.value = ""; 

}