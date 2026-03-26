//Só executa quando o botão é clicado
function calcularImc() {

    //Entrada de dados
    //Usando parseFloat para fazer o string ser considerado número, podendo colocar números como "1.70"
    let quilogramas = parseFloat(document.getElementById("quilogramas").value);
    let metros = parseFloat(document.getElementById("metros").value);

    //Mostra o valor no console do browser
    console.log(quilogramas)

    //Processamento
    let valorAltura = (metros) * (metros)
    let valorFinal = quilogramas / (valorAltura);

    //Saída
    //Colocando uma classificação para aparecer automaticamente de acordo com o resultado do IMC
    let classificacao = "";

    if (valorFinal < 18.5) {
        classificacao = "Abaixo do Peso";
    } else if (valorFinal < 25) {
        classificacao = "Peso Normal";
    } else if (valorFinal < 30) {
        classificacao = "Sobrepeso";
    } else if (valorFinal < 35) {
        classificacao = "Obesidade Grau I";
    } else if (valorFinal < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    //Crio uma nova variável para aperfeiçoar o resultado do IMC, para não ter o problema de muitos
    //números depois da vírgula, além de deixar no formato brasileiro, de maneira mais apropriada
    let imcFormatado = valorFinal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    document.getElementById("resultado").textContent = "Valor de IMC: " + imcFormatado + " (" + classificacao + ")";
}