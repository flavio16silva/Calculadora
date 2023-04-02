//Função não é executada sozinha - //3º comando a ser executado
function calculateTip(event){
event.preventDefault();

//console.log(event); - impressão do evento
//criando as variaveis e pegando seus valores

let bill = document.getElementById('bill').value;
let serviceQual = document.getElementById('serviceQual').value;
let people = document.getElementById('people').value;

//if para verificação da gorjeta
if(bill == '' | serviceQual == 0){
  alert("Por favor, preencha os valores")
  return;
}

//if para número de pessoas
if(people == "" | people <= 1){
  people = 1;
  document.getElementById('each').style.diplay = "none"
} else {
  document.getElementById('each').style.display = "block"
}

//Variavel total e calculo da gorjeta
let total = (bill * serviceQual) / people;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('total').style.display = "block";

}

//1º comando a ser executado
document.getElementById('total').style.display = "none";
document.getElementById('each').style.display = "none";

//2º comando a ser executado
document.getElementById('tipoForm').addEventListener('submit', calculateTip);