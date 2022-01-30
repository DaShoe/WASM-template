let programname;
function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('programname.wasm')
  .then(instance => {
    programname = instance.exports._Z7programnamei;
  }); 