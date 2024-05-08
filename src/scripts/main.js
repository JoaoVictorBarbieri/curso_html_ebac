AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteoEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteoEvento = Math.floor(distanciaAteoEvento / diasEmMS);
    const horasAteoEvento = Math.floor((distanciaAteoEvento % diasEmMS) / horasEmMS);
    const minutosAteoEvento = Math.floor((distanciaAteoEvento % horasEmMS) / minutosEmMS);
    const segundosAteoEvento = Math.floor((distanciaAteoEvento % minutosEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}min ${segundosAteoEvento}s`;

    if (distanciaAteoEvento < 0) {
        clearInterval (contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }

}, 1000);   
