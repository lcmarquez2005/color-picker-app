document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorPicker = document.getElementById("colorPicker");

    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    // Función para actualizar el color desde sliders o inputs
    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);

        // Sincronizar valores de los input numéricos con los sliders
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        // Convertir a HEX
        const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

        // Aplicar color
        colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
        hexCode.textContent = hex.toUpperCase();

        // Sincronizar color picker
        colorPicker.value = hex;
    }

    // Función para actualizar sliders cuando se escriben valores en input numérico
    function updateSliders() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    // Función para actualizar los valores desde el color picker
    function updateFromPicker() {
        const hex = colorPicker.value;
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);

        // Actualizar sliders e inputs numéricos
        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        // Aplicar color
        colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
        hexCode.textContent = hex.toUpperCase();
    }

    // Event listeners
    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);
    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);
    colorPicker.addEventListener("input", updateFromPicker);

    // Inicializar
    updateColor();
});
