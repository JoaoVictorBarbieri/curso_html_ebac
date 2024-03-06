const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();


    const valor1 = document.getElementById('valor-1');
    const valor2 = document.getElementById('valor-2');

    const valorum = parseFloat(valor1.value);
    const valordois = parseFloat(valor2.value);

    const funcionando = document.querySelector('.funciona');
    const naofuncionando = document.querySelector('.invalido');

    if (valorum > valordois) {
        funcionando.innerHTML = `Valor <b>${valorum}</b> é maior que <b>${valordois}</b>, o valor foi adicionado corretamente`;
        funcionando.style.display = 'block'
        naofuncionando.style.display = 'none';

        valor1.value = '';
        valor2.value = '';
    } else {
        naofuncionando.innerHTML = 'Inválido! Valor maior deve estar no campo <b>valor 1</b>';
        funcionando.style.display = 'none'
        naofuncionando.style.display = 'block'

        valor1.value = '';
        valor2.value = '';
    }
});