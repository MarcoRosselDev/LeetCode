// fuc para check si se nesecita actualizar el w/h del canvas
// para solucionar el problema de pixeles en pantallas mas grandes
export default function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  //
  const pixelRatio = window.devicePixelRatio;
  //const width = canvas.clientWidth;
  //const height = canvas.clientHeight;

  // de esta manera evitamos multiplicar x 9 la cantidad de pixeles a renderizar
  // para dispositivos hd (iphons)
  const width = Math.floor(canvas.clientWidth * pixelRatio)
  const height = Math.floor(canvas.clientHeight * pixelRatio)
  
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  //return needResize;
}