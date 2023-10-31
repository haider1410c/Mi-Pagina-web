var animation = ["Haider Cardenal",'Desarrollador Web',  'Programador Front-End' ],
    textAnimado = document.getElementById('Desarrollador'),
    textAnimadoContent = textAnimado.innerHTML,
    agregarText = false,
    counter = 0;

setInterval(function(){

  if(textAnimadoContent.length > 0 && !agregarText ) {
    textAnimado.innerHTML = textAnimadoContent.slice(0, -1);
    textAnimadoContent = textAnimado.innerHTML;
  } else{
    agregarText = true;
  }

  if( agregarText ){
    if( textAnimadoContent.length < animation[counter].length  ) {
      textAnimado.innerHTML = animation[counter].slice(0, textAnimadoContent.length + 1);
      textAnimadoContent = textAnimado.innerHTML;
    } else {
      if( counter < animation.length) {
        counter ++
      }
      agregarText = false;
    }
  }
0
  if( counter == animation.length) {
    counter = 0;
  }

},180);

