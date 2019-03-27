
var radio = null;
var taxa = 1.2;
var peso = $('#peso');
var altura = $('#altura');
var idade = $('#altura');

$("input:radio").click(function(){
  radio = $(this).val();
});

$('select').change(function(){
  taxa = $('select option:selected').val();
});

var calculoHomem = function(){
  return (taxa * (66 + (13.7 * parseFloat(peso.val()))) + (5 * parseFloat(altura.val())) - (6.8 * parseFloat(idade.val())));
};

var calculoMulher = function(){
  return (taxa * (655 + (9.6 * parseFloat(peso.val()))) + (1.8 * parseFloat(altura.val())) - (4.7 * parseFloat(idade.val())));
};

$('button').click(function(){
  if(radio == "homem"){
    //$.cookie("resposta", limitarTam(calculoHomen()));
    $('#res').val(limitarTam(calculoHomem()));
  }else{
    //$.cookie("resposta", limitarTam(calculoMulher()));
    $('#res').val(limitarTam(calculoMulher()));
  }
});

var limitarTam = function(str){
  return str.toFixed(2);
}