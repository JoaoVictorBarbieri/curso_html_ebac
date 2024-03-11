$(document).ready(function(){
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#input-nova-tarefa-cadastro').val();
    const novoItem = $(`<li> ${novaTarefa}</li>`);
    $(novoItem).appendTo('ul');

    $('#input-nova-tarefa-cadastro').val('');
})

$('ul').on('click', 'li', function(){
    $(this).toggleClass("linha-tracada");
})