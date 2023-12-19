let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').textContent = 'R$ 0'

function adicionar(){
    //recuperar valores: nome do produto, quantidade e valor
    let nome = document.getElementById("produto").value;
    let qnt = document.getElementById("quantidade").value;
    
    const separa = nome.split(" - R$");
    nomeProduto = separa[0];
    valorProduto = separa[1];
  
    //calcular o subtotal
    subtotal = valorProduto * qnt;

    //adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${qnt}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
  </section>`;
    //atualizar o valor total
    totalGeral= totalGeral+subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`
}

function limpar(){

    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').textContent = 'R$ 0'

}