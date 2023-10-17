const form = document.getElementById('form-validacao');
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");

function validaFormulario(campoA, campoB) {const form = document.getElementById('form-validacao');
    return campoB > campoA
}

form.addEventListener('submit', function(e) {
    let fomrValidacao
    e.preventDefault();

    const campoA = document.getElementById('campo-a').value;
    const campoB = document.getElementById('campo-b').value;
    const menssagemsucesso = `Válido, pois o valor de B é maior que o valor de A `;

    fomrValidacao = validaFormulario(campoA, campoB)
    if (fomrValidacao){
        alert(menssagemsucesso);

        campoA.value = '';
        campoB.value = '';

    } else if (campoB == campoA) {
        alert("Não é valido pois valor de B é igual ao valor de A");
    } else {
        alert("Não é valido pois valor de A é superior ao valor de B")
    }
})

console.log(form);