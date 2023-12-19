function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    let qtdDisp = document.getElementById(`qtd-${tipo}`).innerText;
    let nQtd = qtdDisp - qtd;
   
    if(nQtd>-1){
        document.getElementById(`qtd-${tipo}`).innerHTML = nQtd;
    } else{
        alert ('Ingressos esgotados')
    }
        
    //alert (nQtd);
}