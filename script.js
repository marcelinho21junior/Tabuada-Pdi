function calcular(){
    let num = document.getElementById('num');
    let end = document.getElementById('end');
    let res = document.getElementById('tabuada')
    let alerta = document.getElementById('alertDigiteAqui')

    let n = Number(num.value);
    let e = Number(end.value);

    if(e <= 0){
        alert('O numero que voce quer tem que ser maior que 1')
        res.innerHTML = 'ERROR'
    }else{
       res.innerHTML = `A tabuada do ${n} <br>`
       alerta.innerHTML += 'color=red'

        for(let i = 0; i <= e; i++){
            res.innerHTML += `${i} * ${n} = ${i*n}<br>`
        }  
    }

   
}