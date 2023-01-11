AOS.init();

const dataEvento = new Date("Dec 12, 2022 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contadorHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horasEmMs) / minutosEmMs); 
    const segundosAteEvento = Math.floor((distanciaEvento % minutosEmMs) / 1000);      

    document.getElementById('contador').innerHTML = `${diasAteEvento} dias, ${horasAteEvento} Hrs, ${minutosAteEvento} Min, ${segundosAteEvento} Seg`;

    if(distanciaEvento < 0) {
        clearInterval(contadorHoras);
        document.getElementById('contador').innerHTML = 'Envento já aconteceu, uma pena que tenha ficado de fora! :(';
    }

}, 1000);