function getDay() {
  const day = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });
  document.getElementById('day').textContent = day;
}

getDay();