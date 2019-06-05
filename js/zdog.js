// zdog-demo.js
// https://zzz.dog/
// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
});

for(i = 0; i < 3; i++){
// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: '#000',
  translate: {x: -200, z : i*50},
});
}

for(i = 0; i < 3; i++){
// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: '#000',
  translate: {x: 200, z : i*50},
});
}

// update & render
illo.updateRenderGraph();

function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();