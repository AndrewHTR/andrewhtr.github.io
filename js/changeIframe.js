function carregarIframe(url) {
      // Arrastando minhas mãos para mudar a página para o senhor...
      document.getElementById('meuIframe').src = url;
}

const textbutton = document.getElementById('textButton');
textbutton.addEventListener('click', function() {
    carregarIframe('text.html');
    }
);

const poemButton = document.getElementById('poemButton');
poemButton.addEventListener('click', function() {
    carregarIframe('poems/poem.html');
    }
);