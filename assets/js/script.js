function Calculadora(){
    const output = document.querySelector('#output');

    this.iniciar = function() {
        this.clickBtn();
        this.calcularEnter();
    };

    this.clickBtn = function() {
        document.addEventListener('click', (e) => {
        output.focus();
        const elemento = e.target;
        // NÚMEROS, SINAIS E PONTO
        if(elemento.classList.contains('btn')){
            output.value += elemento.innerText;
        }
        // BOTÃO "IGUAL"
        if(elemento.classList.contains('btn_eq')){
            this.calcular();
        }
        // BOTÃO LIMPAR IMPUT
        if(elemento.classList.contains('clear')){
            output.value = '';
        }
        // DELETAR O ULTIMO NÚMERO DO INPUT
        if(elemento.classList.contains('btn_del')){
            output.value = output.value.slice(0, -1);
        }
      });  
    };

    this.calcular = function() {
        try{
            let conta = eval(output.value);
            output.value = conta;
            if(!conta){
                alert('Conta inválida!');
                output.value = '';
                return;
            }
        }catch(e){
            alert('Conta inválida!');
            output.value = '';
        }
    };

    this.calcularEnter = function () {
        document.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                this.calcular();
            }
        });
    };
}

const calculadora = new Calculadora();
calculadora.iniciar();