AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const DiasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMS);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMS) / minutosEmMS);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMS) / 1000);

    console.log(DiasAteEvento);
    console.log(horasAteEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById('contador').innerHTML =`${DiasAteEvento}d ${horasAteEvento}m ${minutosAteEvento}s ${segundosAteEvento}`

    if (distanciaAteEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML='Evento expirado'
    }
}, 1000);
