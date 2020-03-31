
const blockArray = document.getElementById('array');
const blockUniqueArray = document.getElementById('unique-array');

getArray();

function getArray() {
  const array = ['a','b','a','b','c','c','d','e','z','y','t','z'];
  let uniqueArray = unique(array);
  blockUniqueArray.innerHTML = "Unique array =" + JSON.stringify(uniqueArray);
  blockArray.innerHTML = "Array =" + JSON.stringify(array);
}

 function unique(array) {
  return Array.from(new Set(array));
}


