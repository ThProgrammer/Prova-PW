function compra() {

    const estoque = [5, 3, 9, 22, 53, 82, 27, 62, 33, 2]
    const preco = [250, 50, 300, 15, 500, 60, 40, 2000, 23, 2]
    var select = document.querySelector("select#produto") // Peguei o select
    var itemid = Number(select.options[select.selectedIndex].value);
    var itemtxt = select.options[select.selectedIndex].text

    var produtoquant = Number(document.querySelector("input#quant").value);
    var valor = 0;

    var resultado = document.querySelector("div#resultado")

    if (estoque[itemid] >= produtoquant){
        valor = preco[itemid]*produtoquant
        resultado.innerHTML = `<h3> Produto Selecionado ${itemtxt}<br>
        Valor do produto: ${preco[itemid]}<br>
        Valor da compra: ${valor}<h3>`
    }

    else {
        window.alert("Estoque Insuficiente!")
        compra = false;
    }
}