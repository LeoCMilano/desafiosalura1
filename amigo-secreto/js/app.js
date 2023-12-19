function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    
    let campoNomes = document.getElementById('lista-amigos');
    
    if(campoNomes.innerText==''){
        campoNomes.innerText = nome;
    }else{
        campoNomes.innerText = `${campoNomes.innerText}, ${nome}`;
    }
    
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    parts= document.getElementById('lista-amigos').innerText;
    let numRan;
    const nome = parts.split(', ');
    const jaSort = [];
    let lista = "";
    i=0;

    if(nome.length%2==0){
        while (i < nome.length){
            numRan =Math.floor(Math.random()* (nome.length));
            if(jaSort.includes(numRan)||i==numRan){continue;}
            else{
                jaSort.push(numRan);
                linha = `${nome[i]} -> ${nome[numRan]}`;
                lista += linha +'<br>';
                i++
            }   
        }
    document.getElementById('lista-sorteio').innerHTML = lista;
    }else{
        alert('A quantidade de participantes deve ser par');
    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerText = '';
    document.getElementById('lista-sorteio').innerText = '';
}