function cuadradoNegro(ancho, largo, tamanoTexto) {
  
     // numero de cuadros que caben de manera horizontal
  let numHorizon = Math.floor(width/ancho);
  
     // numero de cuadrados que caben de manera vertical
  let numVert = Math.floor(height/largo);
  
     // el espacio no cubierto por cuadros
  let restoVert = height - largo*numVert;
  let restoHorizon = width - ancho*numHorizon;
  
     // nest loop
  for (let i = 0; i < numHorizon; i += 1){
    for(let j = 0; j < numVert; j += 1){
      
         //Coordenadas para ubicar los cuadros de manera que el   espacio restante este ubicado de manera distribuida
      let x1 = restoHorizon/(numHorizon+1)*(i+1) + ancho*i;
      let y1 = restoVert/(numVert+1)*(j+1) + largo*j;
      
      let x2 = restoHorizon/(numHorizon+1)*(i+1) + ancho*(i+1);
      let y2 = restoVert/(numVert + 1)*(j+1) + largo*(j+1);
      
      fill(color(0,0,0));
      quad(x1, y1, x2, y1, x2, y2, x1, y2);
      
      textSize(tamanoTexto);
      fill(color(255,255,255));
      text('¿Puedes llamar a \n esto realmente \n tu obra?', x1+ancho/14, y1 + largo/4);
    }
  }
}

let colorArray;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  
     // da un tono random de el color elegido
  let tonoRandom = random(0,255);
  
     // tono random en rojo, verde o azul para fondo
  let redBackground = color(tonoRandom, 0, 0);
  let greenBackground = color(0, tonoRandom, 0);
  let blueBackground = color(0, 0, tonoRandom);
  
     // orden de los posibles fondos
  colorArray = [redBackground, greenBackground, blueBackground];
  
  background(colorArray[0]);
  noLoop();
}

function draw() {
 
     // ancho del cuadrado, largo y tamaño texto
  cuadradoNegro(190, 90, 20);
  }

function letraRand(letra, color){
  push()
  
     // coordenadas random para las letras
  let xLetra = random(-width/2, width/2);
  let yLetra = random(-height/2, height/2);
  
     // se traslada para mantener aun con rotacion las letras dentro del lienzo
  translate(width/2, height/2);
  rotate(random(0, 360));
    
  textSize(random(100, 400));
  fill(color)
  text(letra, xLetra, yLetra);
    
  pop()
}
  
function keyPressed(){
  
     // se mapea el rango del mouse para que afecte el tamaño de las figuras creadas
  let tamano = map(mouseX, 0, width, 50, 400);
  
     // color random para figuras
  let colorRandom =           
  color(random(0,255),random(0,255),random(0,255));

     //Comprueba si la tecla es 1, 2 o 3
  if (['1', '2', '3'].includes(key)){
    
    //Asigna el color de fondo dependiendo de la tecla presionada
    background(colorArray[int(key) - 1]);
  }
  
  else if (key == '4'){
    push();
    // se traslada todas las figuras para que no salgan del lienzo
    translate(width/2, height/2)
    rotate(random(0, 360));
    
    fill(colorRandom);
    // ubicacion random del cuadrado
    square(random(-width/2, width/2), random(-height/2, height/2), tamano);
    pop();
  }
  
  else if (key == '5'){ 
    fill(colorRandom);
    // ubicacion random del circulo
    circle(random(width), random(height), tamano);
  }
  
  else if (key == '6'){
    
    // 2 primeros vertices de ubicacion random
    let x1 = random(width), y1 = random(height);
    let x2 = random(width), y2 = random(height);
    // el ultimo vertice del triangulo es en base a ubicacion del mouse
    let x3 = mouseX, y3 = mouseY;
    
    fill(colorRandom);
    triangle(x1, y1, x2, y2, x3, y3);
  }
  
    // en base a si el codigo esta en loop o no, enter detiene o inicia el loop
  else if(key == 'Enter'){
    if (isLooping() === false){
      loop();
    }
    else{
      noLoop();
    }
  }
  
   // cualciier otra tecla con color random
  else{
    letraRand(key, colorRandom);
  }
}