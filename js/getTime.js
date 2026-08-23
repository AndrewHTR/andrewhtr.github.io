function getTime() {
  const time =  new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});
document.getElementById('clock').textContent = time;
}

getTime();
setInterval(getTime, 1000);

