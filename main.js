$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')

})


$('form').validate({
    rules: {
        nome: {required: true},
        email: {required: true, email: true},
        telefone: {required: true},
        cpf: {required: true},
        cep: {required: true},
        enderecoCompleto: {required: false},
    }, messages: {
        nome: 'Por favor insira seu nome',
        email: 'Insira seu email',
        telefone: 'Insira seu telefone',
        cpf: 'Insira seu CPF',
        cep: 'Insira seu CEP',
    }, submitHandler: function(form) {
        alert('Cadastro concluido')
        nome.value = '';
        email.value = '';
        telefone.value = '';
        cpf.value = '';
        enderecoCompleto.value = '';
        cep.value = '';
    }, invalidHandler: function(evento, validador) {
        let campoIncorreto = validador.numberOfInvalids();
        if (campoIncorreto) {
            alert (`Existem, ${campoIncorreto} campos incorretos ou não preenchidos`)
        }
    }
})