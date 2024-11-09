document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";

// Navbar
const navbar = document.createElement('nav');
navbar.style.display = 'flex';
navbar.style.width = '1515px';
navbar.style.height = '30px';
navbar.style.justifyContent = 'space-between';
navbar.style.padding = '15px';
navbar.style.backgroundColor = '#007B7F';
navbar.style.color = 'white';
navbar.style.boxShadow = '4px 4px 6px #007B7F';


// Logo
const logo = document.createElement('div');

//logo.style.display = 'flex';
//logo.style.alignItems = 'center';
//logo.style.position = 'relative';
logo.style.cursor = 'pointer'; 

const logoS = document.createElement('span');
logoS.innerText = 'S';
logoS.style.color = 'red';
logoS.style.fontSize = '30px';
logoS.style.transform = 'skewY(0deg)'; 
logoS.style.marginRight = '5px'; 
logoS.style.transition = 'opacity 0.3s, transform 0.3s'; 

const logoV = document.createElement('span');
logoV.innerText = 'V';
logoV.style.color = 'blue';
logoV.style.fontSize = '30px';
logoV.style.transform = 'skewY(0deg)'; 
logoV.style.transition = 'opacity 0.3s, transform 0.3s'; 

const fullFormS = document.createElement('span');
fullFormS.innerText = 'Sort';
fullFormS.style.fontSize = '20px'; 
fullFormS.style.position = 'relative';
fullFormS.style.marginLeft = '10px'; 
fullFormS.style.color = 'red';
fullFormS.style.opacity = '0'; 
fullFormS.style.transform = 'translateY(-10px)'; 
fullFormS.style.transition = 'opacity 0.3s, transform 0.3s'; 

const fullFormV = document.createElement('span');
fullFormV.innerText = 'Visualization';
fullFormV.style.fontSize = '20px'; 
fullFormV.style.position = 'relative';
fullFormV.style.marginLeft = '10px'; 
fullFormV.style.color = 'blue';
fullFormV.style.opacity = '0'; 
fullFormV.style.transform = 'translateY(-10px)'; 
fullFormV.style.transition = 'opacity 0.3s, transform 0.3s'; 

logo.addEventListener('mouseenter', () => {
  logoS.style.opacity = '0'; 
  logoV.style.opacity = '0'; 
  fullFormS.style.opacity = '1'; 
  fullFormV.style.opacity = '1'; 
  fullFormS.style.transform = 'translateY(0)'; 
  fullFormV.style.transform = 'translateY(0)'; 
});

logo.addEventListener('mouseleave', () => {
  logoS.style.opacity = '1'; 
  logoV.style.opacity = '1'; 
  fullFormS.style.opacity = '0'; 
  fullFormV.style.opacity = '0'; 
  fullFormS.style.transform = 'translateY(-10px)'; 
  fullFormV.style.transform = 'translateY(-10px)'; 
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const nlogo =  document.createElement('div');
   nlogo.style.height= '100%';
   nlogo.style.width= '40%';
   //nlogo.innerHTML="mohit";
 

   const logoImage1 = document.createElement('img');
logoImage1.src = 'sorti.png'; // Replace with your logo URL
logoImage1.alt = 'Logo'; // Alt text for accessibility
logoImage1.style.maxWidth = '120%'; // Ensure the image fits within the div
logoImage1.style.maxHeight = '120%'; // Ensure the image fits within the div
//logoImage.style.boxShadow = ' 5px  10px 6px 5px  black';
logoImage1.style.borderradius='15px';
nlogo.appendChild(logoImage1);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

logo.appendChild(logoS);
logo.appendChild(logoV);
logo.appendChild(fullFormS);
logo.appendChild(fullFormV);
navbar.appendChild(nlogo);

const algorithms = ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Heap Sort', 'Quick Sort', 'Merge Sort'];
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex'; 
algorithms.forEach(algo => {
  const button = document.createElement('button');
  button.innerText = algo;
  //button.setAttribute('class', 'algo-button');
  button.style.marginLeft = '10px';
  button.style.padding = '10px 20px';
  button.style.border = 'none';
  //button.style.fontFamily = 'red';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = '#007B7F';
  button.style.color = 'white';
  button.style.fontSize = '15px';
  button.style.opacity = '0.9'; 
  button.addEventListener('mouseover', function() {
    // Change the background color and add shadow on hover
    button.style.backgroundColor = '#45a049';
    button.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
});

button.addEventListener('mouseout', function() {
  // Revert the background color and remove shadow when hover ends
  button.style.backgroundColor = '#007B7F';
  button.style.boxShadow = 'none';
});

  button.addEventListener('click', () => {
    if (algo === 'Bubble Sort') bubbleSort(array);
    else if (algo === 'Selection Sort') selectionSort(array);
    else if (algo === 'Insertion Sort') insertionSort(array);
    else if (algo === 'Heap Sort') heapSort(array);
    else if (algo === 'Quick Sort') quickSort(array);
    else mergeSort(array)
  });
  buttonContainer.appendChild(button);
});
navbar.appendChild(buttonContainer);

document.body.appendChild(navbar);

// Sidebar
const sidebar = document.createElement('div');
sidebar.style.position = 'fixed';
sidebar.style.left = '0';
sidebar.style.top = '60px';
//sidebar.style.button = '60px';
sidebar.style.width = '200px';
sidebar.style.backgroundColor = ' grey';
sidebar.style.color = 'white';
sidebar.style.height = '80%'; 
sidebar.style.padding = '20px';
sidebar.style.marginTop = '20px';
sidebar.style.overflowY = 'auto'; 
sidebar.style.boxShadow = '4px 4px 6px black';

const sizeLabel = document.createElement('label');
sizeLabel.innerText = 'Array Size:';
sizeLabel.style.display = 'block';




const sizeSlider = document.createElement('input');
sizeSlider.setAttribute('type', 'range');
sizeSlider.setAttribute('min', '5');
sizeSlider.setAttribute('max', '14');
sizeSlider.setAttribute('value', '7'); // Start with min value
sizeSlider.style.display = 'block';
sizeSlider.style.width = '100%';
sizeSlider.style.margin = '10px 0';

const sizeDisplay=document.createElement('span');
sizeDisplay.innerText= sizeSlider.value;
sizeDisplay.style.display='block';
sizeDisplay.style.marginBottom='px';

const speedLabel = document.createElement('label');
speedLabel.innerText = 'Speed:';
speedLabel.style.display = 'block';

const speedSlider = document.createElement('input');
speedSlider.setAttribute('type', 'range');
speedSlider.setAttribute('min', '10');
speedSlider.setAttribute('max', '1000');
speedSlider.setAttribute('value', '500');
speedSlider.style.display = 'block';
speedSlider.style.width = '100%';
speedSlider.style.margin = '10px 0';

const colorButton = document.createElement('button');
colorButton.innerText = 'Change Bar Color';
colorButton.style.display = 'block';
colorButton.style.width = '100%';
colorButton.style.padding = '10px';
colorButton.style.marginTop = '20px';
colorButton.style.backgroundColor = '#555';
colorButton.style.color = 'white';
colorButton.addEventListener('click', () => {
  // document.querySelectorAll('.bar').forEach(bar => {
  //   bar.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  // });
  //array = generateArray(parseInt(sizeSlider.value)); // Generate a new array based on the slider value
 // create3DBars(array);
});

// Create the div element
const logoDiv = document.createElement('div');
logoDiv.style.width = '150px'; 
logoDiv.style.height = '150px'; 
logoDiv.style.display = 'flex'; 
logoDiv.style.alignItems = 'center'; 
logoDiv.style.justifyContent = 'center'; 
//logoDiv.style.border = '1px solid #ccc'; 
logoDiv.style.marginTop = '279px'; 
logoDiv.style.marginLeft = '20px';

const logoImage = document.createElement('img');
logoImage.src = 'sorti.png'; // Replace with your logo URL
logoImage.alt = 'Logo'; // Alt text for accessibility
logoImage.style.maxWidth = '100%'; // Ensure the image fits within the div
logoImage.style.maxHeight = '100%'; // Ensure the image fits within the div
//logoImage.style.boxShadow = ' 5px  10px 6px 5px  black';
logoImage.style.borderradius='15px';
//logoImage.style.opacity = '0.4';
// Append the image to the div
logoDiv.appendChild(logoImage);




sidebar.appendChild(sizeLabel);
sidebar.appendChild(sizeSlider);
sidebar.appendChild(speedLabel);
sidebar.appendChild(speedSlider);
sidebar.appendChild(logoDiv);
sizeLabel.appendChild(sizeDisplay);
//navbar.appendChild(logoDiv);
document.body.appendChild(sidebar);

//+++++++++++++++++++++++++++++++++++++++++++++++
const backDiv = document.createElement('div');
backDiv.style.width = '100%'; 
backDiv.style.height = '600px'; 
backDiv.style.display = 'flex'; 
//backDiv.style.alignItems = 'center'; 
//backDiv.style.justifyContent = 'center'; 
//logoDiv.style.border = '1px solid #ccc'; 
backDiv.style.marginTop = '0px'; 
backDiv.style.marginLeft = '0px';

//+++++++++++++++++++++++++++++++++++++++++++++++


//-----------------------------------------
const backImage = document.createElement('img');
backImage.src = 'empty.jpg'; 
backImage.alt = 'Logo'; 
// backImage.style.marginLeft = '0px';
// backImage.style.marginRight = '0px';
// backImage.style.marginTop = '5px';
//backImage.style.display = 'flex';
backImage.style.alignItems = 'flex-end';
backImage.style.height = '600px';
backImage.style.width = '100%';
//backImage.style.backgroundColor = 'lavender';
//backImage.style.border = '1px solid #ddd';
backImage.style.perspective = '65em'; // Add perspective for 3D effect
backImage.style.perspectiveOrigin = '50% calc(50% - 25em)';
backImage.style.boxShadow = ' 5px  20px 6px 5px light black';
//backImage.style.flexWrap = 'wrap'; 
// Append the image to the div
backDiv.appendChild(backImage);

//------------------------------------------------

// Graph area
const graphArea = document.createElement('div');
graphArea.setAttribute('id', 'graph-area');
graphArea.style.marginLeft = '270px';
graphArea.style.marginRight = '10px';
graphArea.style.marginTop = '7px';
graphArea.style.display = 'flex';
graphArea.style.alignItems = 'flex-end';
graphArea.style.height = '600px';
graphArea.style.backgroundImage = "url('empty.jpg')"; // Set the background image
graphArea.style.backgroundSize = 'cover'; // Ensure the image covers the area
graphArea.style.backgroundPosition = 'center';
graphArea.style.backgroundColor = 'lavender';
//graphArea.style.border = '1px solid #ddd';
graphArea.style.perspective = '65em'; // Add perspective for 3D effect
graphArea.style.perspectiveOrigin = '50% calc(50% - 25em)';
graphArea.style.flexWrap = 'wrap'; 
graphArea.style.boxShadow = ' 5px  20px 6px 5px  black';

document.body.appendChild(graphArea);
graphArea.appendChild(backDiv);
// Generate array and create bars
let array = generateArray(parseInt(sizeSlider.value));

sizeSlider.addEventListener('input', () => {
  array = generateArray(parseInt(sizeSlider.value));
  create3DBars(array);
  sizeDisplay.innerText=sizeSlider.value;
});

function generateArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 300) + 50); // Adjusted height range
  }
  return arr;
}

// Function to create 3D bars
function create3DBars(arr) {
  graphArea.innerHTML = ''; 
  const initialColors = [];
  // console.log(myvalue)
  arr.forEach((value, index) => {
    // let myvalue1 = Math.floor(Math.random() * 225)
    // let myvalue2 = Math.floor(Math.random() * 155)
    // let myvalue3 = Math.floor(Math.random() * 125)
    const barWrapper = document.createElement('div'); 
    barWrapper.classList.add('bar');
    barWrapper.style.position = 'relative';
    barWrapper.style.height = `${value}px`;
    barWrapper.style.width = '50px';
    barWrapper.style.margin = '15px';
    barWrapper.style.transition = 'height 1s ease';
    barWrapper.style.transformStyle = 'preserve-3d'; // Enable 3D
    
    
    
    const barColor = `rgb(${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 155)}, ${Math.floor(Math.random() * 125)})`;
   // initialColors.push(barColor);
    ['front', 'back', 'left', 'right'].forEach(side => {
      const face = document.createElement('div');
      face.style.position = 'absolute';
      face.style.width = '100%';
      face.style.height = '100%';
      face.style.backgroundColor =barColor;
      face.style.transition = 'background-color 1s ease'; 
      
      if (side === 'front') face.style.transform = 'rotateY(0deg) translateZ(25px)';
      if (side === 'back') face.style.transform = 'rotateY(180deg) translateZ(25px)';
      if (side === 'left') face.style.transform = 'rotateY(-90deg) translateZ(25px)';
      if (side === 'right') face.style.transform = 'rotateY(90deg) translateZ(25px)';

      barWrapper.appendChild(face);
    });
    // Create a span element to display the height
    const heightLabel = document.createElement('span');
    heightLabel.innerText = value; // Set the height value
    heightLabel.style.position = 'absolute';
    heightLabel.style.top = '-20px'; 
    heightLabel.style.left = '50%'; 
    heightLabel.style.transform = 'translateX(-50%)'; // Center it correctly
    heightLabel.style.color = 'black'; // Text color
    heightLabel.style.fontSize = '14px'; // Text size

    // Append the height label to the bar wrapper
    barWrapper.appendChild(heightLabel);

    // Add the bar to the graph area
    barWrapper.dataset.index = index;
    graphArea.appendChild(barWrapper);
  });
}// Reset bar colors after sorting
function resetBarColors() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    bar.style.backgroundColor = ''; // Reset to original color
  });
}




// Sorting algorithm placeholders
async function bubbleSort(arr) {
  let bars = document.querySelectorAll('.bar');
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          // bars[j].style.backgroundColor = 'red';
           bars[j + 1].style.backgroundColor = 'red';
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              await updateBars(arr);
          }
          bars[j].style.backgroundColor = ''; // Reset color
          bars[j + 1].style.backgroundColor = ''; // Reset color
      }
  }
  resetBarColors(); // Reset colors after sorting
}

async function selectionSort(arr) {
  let bars = document.querySelectorAll('.bar');
  for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      //bars[i].style.backgroundColor = 'red';
      for (let j = i + 1; j < arr.length; j++) {
          bars[j].style.backgroundColor = 'orange';
          if (arr[j] < arr[minIndex]) {
              if (minIndex !== i) {
                  bars[minIndex].style.backgroundColor = ''; // Reset previous minIndex
              }
              minIndex = j;
             // bars[minIndex].style.backgroundColor = 'red'; // Highlight new minIndex
          }
          await sleep(100);
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      await updateBars(arr);
      bars[minIndex].style.backgroundColor = ''; // Reset color of minIndex
  }
  resetBarColors(); // Reset colors after sorting
}

async function insertionSort(arr) {
  let bars = document.querySelectorAll('.bar');
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      //bars[i].style.backgroundColor = 'red';
      while (j >= 0 && arr[j] > key) {
          bars[j + 1].style.height = bars[j].style.height;
          arr[j + 1] = arr[j];
          j--;
          await updateBars(arr);
      }
      arr[j + 1] = key;
      bars[j + 1].style.height = `${key}px`;
      await updateBars(arr);
      bars[i].style.backgroundColor = '#00f'; // Reset color after insertion
  }
  resetBarColors();
}



// Update bar heights in the graph
async function updateBars(arr) {
  const bars = document.querySelectorAll('.bar');
  arr.forEach((value, index) => {
      bars[index].style.height = `${value}px`;
      bars[index].childNodes[0].innerText = value;
  });
  await sleep(parseInt(speedSlider.value)); // Use speed slider value
}

// Sleep function for delays
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// function heapSort(arr) {  }
// function quickSort(arr) { }
// async function mergeSort() { 
  
//  }





// // Initialize bars
// //if(createBars()){
//   createBars(array)
// }
