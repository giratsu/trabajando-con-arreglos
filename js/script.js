// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  let filteredArray = FilterArray(strangeArray);
  let sortedArray = AlphabeticallySortArray(filteredArray);
  showList(sortedArray);


  function FilterArray(array)
  {
    return array.filter(e=>typeof(e) === "string");
  }

  function AlphabeticallySortArray(array)
  {
    let sortedArray = array.slice();

    for(let i=0; i<sortedArray.length-1; i++)
    {
      for(let j=0; j<sortedArray.length-1-i; j++)
      {
        if(sortedArray[j]>sortedArray[j+1])
        {
          Swap(sortedArray, j, j+1);
        }
      }
    }

    return sortedArray;
  }

  function Swap(array, index1, index2)
  {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
  
});