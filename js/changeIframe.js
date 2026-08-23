function switchIframe(url) {
      document.getElementById('meuIframe').src = url;
}

const textbutton = document.getElementById('textButton');
textbutton.addEventListener('click', function() {
    switchIframe('text.html');
    }
);

const poemButton = document.getElementById('poemButton');
poemButton.addEventListener('click', function() {
    switchIframe('subpages/poems.html');
    }
);