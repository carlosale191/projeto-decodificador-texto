const textArea = document.getElementById("texto-area");
const mensagemCampo = document.getElementById("msg-lateral");

// para encriptar
function btnCripto() {
    const textoEncriptado = encriptar(textArea.value);
    mensagemCampo.value = textoEncriptado;
    textArea.value = "";
    // condição para alguns elementos do bloco sumirem quando o texto aparecer
    if (mensagemCampo.value = textoEncriptado) {
        let imagemLateral = document.querySelector('.mensagem');
        imagemLateral.style.backgroundImage = 'none';
        let tituloSemTexto = document.querySelector('.titulo-lateral');
        tituloSemTexto.remove();
    }

}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); //deixar todas letras em minúsculas
    //laço de repetição para percorrer toda matriz por completo
    for (let i = 0; i < matrizCodigo.length; i++) {
        //condição para verificar as letras entrando no campo de texto
        if (stringEncriptada.includes(matrizCodigo[i][0])) { //índice e a posição da coluna das vogais
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            //substituição da coluna das vogais pela coluna dos códigos
        }
    }
    return stringEncriptada;
}


// para desencriptar -- mesmos argumentos, só alterando alguns pontos da lógica
function btnDescripto() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagemCampo.value = textoDesencriptado;
    textArea.value = "";
    if (mensagemCampo.value = textoDesencriptado) {
        let imagemLateral = document.querySelector('.mensagem');
        imagemLateral.style.backgroundImage = 'none';
        let tituloSemTexto = document.querySelector('.titulo-lateral');
        tituloSemTexto.remove();
    }
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;

}


// para copiar e exibir avisos
function btnCopiar() {
    const copiarTexto = document.getElementById('msg-lateral').value;
    let comparacaoConteudo = copiarTexto === "" ? 'Nenhum texto encontrado!' : 'Texto copiado com sucesso!';
    navigator.clipboard.writeText(copiarTexto);
    alert(comparacaoConteudo);
    mensagemCampo.value = "";
    
}

// para ajustar a altura do textarea automaticamente
function adjustTextareaHeight() {
    const textWide = this;
    textWide.style.height = 'auto'; // redefine a altura
    textWide.style.height = textWide.scrollHeight + 'px'; // define a altura para o scrollHeight
}

// adiciona o evento de input ao textarea
const textWide = document.getElementById('texto-area');
textWide.addEventListener('input', adjustTextareaHeight);