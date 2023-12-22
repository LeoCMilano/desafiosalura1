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

function ord1(){
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
function ord(){
    let a = prompt('Insira o primeiro número');
    let b = prompt('Insira o segundo número');
    let c = prompt('Insira o terceiro número');

    const nums = [a,b,c];

    nums.sort((a, b) => a - b);

    alert (nums)
}
function poi(){
    let num = prompt('Insira o número')

    if (num%2==0) {
        alert ('Par')
    } else(
        alert ('Ímpar')
    )
}

function conv(){
    let graus = document.getElementById('graus').value
    let cF = document.getElementById('cls-frh').value

    if (cF == 'cls'){
        let b = (graus * 9/5) + 32
        alert (`${b} °F`)

    } else if (cF=='frh'){
        let a= (graus - 32) * 5/9
        alert (`${a} °C`)
    }

}