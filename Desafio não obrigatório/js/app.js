function pali(){
    let x = prompt("Verifique se é um palíndromo")
    const meuArray = x.split("");
    let la = meuArray.length;
    let desce = la-1;
    let sobe = 0;
    let c = la-1
    
    while (c!==0){
        if(meuArray[sobe]==meuArray[desce]){
            sobe++
            desce--
            //alert (`Sobe: ${sobe} ${meuArray[sobe]} Desce: ${desce} ${meuArray[desce]}`)
        }
       c-- 
    }
    if(sobe==la-1){
        alert('Verdadeiro')
    }else {
        alert('Falso')
    }
    //alert (`Sobe: ${sobe} ${meuArray[sobe]} Desce: ${desce} ${meuArray[desce]}`);    
}

function ord(){
    let a = prompt('Insira o primeiro número');
    let b = prompt('Insira o segundo número');
    let c = prompt('Insira o terceiro número');

    const nums = [a,b,c]
    
    let ter = (Math.max(...nums))
    let pri = (Math.min(...nums))

    let i = 0   
    while(i!==3) {
        if (nums[i]>pri && nums[i]< ter) {
            seg = nums[i]
        }
    i++
    }
    alert (`${pri} ${seg} ${ter}`)
}