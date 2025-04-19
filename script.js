const boxes = document.querySelectorAll('.boxes-item');

function changeFormat(formato) {
    const circulo = document.getElementById('circulo');
    const quadrado = document.getElementById('quadrado');

    boxes.forEach(box => {
        if (formato.id === 'circulo') {
            box.style.borderRadius = '100%';
            circulo.style.border = '2px solid black';
            quadrado.style.border = 'none';
        } else if (formato.id === 'quadrado') {
            box.style.borderRadius = '0';
            circulo.style.border = 'none';
            quadrado.style.border = '2px solid black';
        }
    });
}

function changeSize() {
    const input = document.querySelector('input');
    const tamanho = input.value + 'px';

    boxes.forEach(box => {
        box.style.width = tamanho;
        box.style.height = tamanho;
    });
}

function changeFlexDirection(selection) {
    const boxes = document.getElementById('boxes-container');

    boxes.style.flexDirection = selection.value;
}

function changeJustifyContent(selection) {
    const boxes = document.getElementById('boxes-container');

    boxes.style.justifyContent = selection.value;
}

function changeAlignItems(selection) {
    const boxes = document.getElementById('boxes-container');
    const boxesItem = document.querySelectorAll('.boxes-item');

    if (selection.value === 'stretch') {
        boxesItem.forEach(box => {
            box.style.height = 'auto';
        });
    }
    else {
        boxesItem.forEach(box => {
            box.style.height = box.style.width;
        });
    }
    boxes.style.alignItems = selection.value;
}

function changeColor(corEscolhida) {
    const cor = getComputedStyle(corEscolhida).backgroundColor;
    console.log(cor);

    const colorSelection = document.querySelectorAll('.cores-item');

    colorSelection.forEach(color => {
        if(color.id === corEscolhida.id){
            color.style.border = '2px solid black';
        }
        else{
            color.style.border = 'none';
        }
    });
    boxes.forEach(box => {
        box.style.backgroundColor = cor;
    });
    const circulo = document.getElementById('circulo');
    const quadrado = document.getElementById('quadrado');

    circulo.style.backgroundColor = cor;
    quadrado.style.backgroundColor = cor;
}