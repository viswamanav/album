function openEditor(imageSrc) {
    // Create a new window to hold the editor panel
    const editorWindow = window.open("", "imageEditor");
  
    // Create an image element to display the image
    const image = new Image();
    image.src = imageSrc;
  
    // Create HTML elements for the editing controls
    const saturationSlider = document.createElement("input");
    saturationSlider.type = "range";
    saturationSlider.min = 0;
    saturationSlider.max = 200;
    saturationSlider.value = 100;
    const saturationLabel = document.createElement("label");
    saturationLabel.innerHTML = "Saturation:";
    const sharpnessSlider = document.createElement("input");
    sharpnessSlider.type = "range";
    sharpnessSlider.min = 0;
    sharpnessSlider.max = 100;
    sharpnessSlider.value = 0;
    const sharpnessLabel = document.createElement("label");
    sharpnessLabel.innerHTML = "Sharpness:";
    const hueSlider = document.createElement("input");
    hueSlider.type = "range";
    hueSlider.min = -180;
    hueSlider.max = 180;
    hueSlider.value = 0;
    const hueLabel = document.createElement("label");
    hueLabel.innerHTML = "Hue:";
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.value = "#ffffff";
    const colorLabel = document.createElement("label");
    colorLabel.innerHTML = "Color:";
  
    // Attach event listeners to the editing controls
    saturationSlider.addEventListener("input", () => {
      image.style.filter = `saturate(${saturationSlider.value}%)`;
    });
    sharpnessSlider.addEventListener("input", () => {
      image.style.filter = `saturate(${saturationSlider.value}%) 
                            brightness(${sharpnessSlider.value}%)`;
    });
    hueSlider.addEventListener("input", () => {
      image.style.filter = `saturate(${saturationSlider.value}%) 
                            brightness(${sharpnessSlider.value}%) 
                            hue-rotate(${hueSlider.value}deg)`;
    });
    colorPicker.addEventListener("input", () => {
      image.style.backgroundColor = colorPicker.value;
    });
  
    // Add the HTML elements to the editor window
    editorWindow.document.body.appendChild(saturationLabel);
    editorWindow.document.body.appendChild(saturationSlider);
    editorWindow.document.body.appendChild(sharpnessLabel);
    editorWindow.document.body.appendChild(sharpnessSlider);
    editorWindow.document.body.appendChild(hueLabel);
    editorWindow.document.body.appendChild(hueSlider);
    editorWindow.document.body.appendChild(colorLabel);
    editorWindow.document.body.appendChild(colorPicker);
    editorWindow.document.body.appendChild(image);
  }

  const myButton = document.getElementById("myButton");
  myButton.addEventListener("click", openEditor("path/to/image.jpg"););