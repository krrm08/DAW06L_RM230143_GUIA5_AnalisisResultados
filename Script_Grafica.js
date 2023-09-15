function graficar() {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const color = document.getElementById('colorPicker').value;
    const orientacion = document.querySelector('input[name="orientacion"]:checked').value;

    const datosNavegadores = { 'Chrome': 65, 'Firefox': 25, 'Safari': 5 };
    const datosSistemas = { 'Windows': 75, 'MacOS': 15, 'Linux': 10 };

    const datos = tipo === 'navegadores' ? datosNavegadores : datosSistemas;

    const grafico = document.getElementById('grafico');
    grafico.innerHTML = ''; 

    let positionOffset = 0;

    for (const key in datos) {
        const barra = document.createElement('div');
        barra.className = 'barra';
        barra.style.backgroundColor = color;
        if (orientacion === 'vertical') {
            barra.style.height = `${datos[key]}%`;
            barra.style.left = `${positionOffset}px`;
        } else {
            barra.className += ' horizontal';
            barra.style.width = `${datos[key]}%`;
            barra.style.top = `${positionOffset}px`;
        }
        grafico.appendChild(barra);

        
        const etiqueta = document.createElement('div');
        etiqueta.textContent = `${key}: ${datos[key]}%`;
        etiqueta.className = 'etiqueta';
        if (orientacion === 'horizontal') {
            etiqueta.className += ' horizontal';
            etiqueta.style.top = `${positionOffset + 15}px`;
        } else {
            etiqueta.style.left = `${positionOffset}px`;
        }
        grafico.appendChild(etiqueta);

        positionOffset += 100; 
    }
}

