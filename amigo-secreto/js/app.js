function adicionar(){
    let nome = document.getElementById('nome-amigo').value;
    if(nome==""){
        alert ('Insira um nome')
        return;
    }
    let campoNomes = document.getElementById('lista-amigos');
    if(campoNomes.innerText==''){
        campoNomes.innerText = nome;
        document.getElementById('nome-amigo').value = '';
    }else if(campoNomes.innerText.includes(nome)){
        alert (`O nome ${nome} já está na lista, favor incluir um sobrenome`)
    }else{
        campoNomes.innerText = `${campoNomes.innerText}, ${nome}`;
        document.getElementById('nome-amigo').value = '';
    }
}

function sortear2(){
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

function sortear(){
    parts= document.getElementById('lista-amigos').innerText;
    const nome = parts.split(', ');
    if(nome.length<4){
        alert ("Adicione pelo menos 4 participantes");
        return;
    }
    embaralha(nome);
    let lista = "";
    i=0;
    while(i< nome.length){
        if(i==nome.length-1){
            lista+=nome[i]+'->'+nome[0];
        }else{
            lista+=nome[i]+'->'+nome[i+1]+'<br>';
        }
    i++;
    }
    document.getElementById('lista-sorteio').innerHTML = lista;
}


function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}