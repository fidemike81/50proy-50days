const boxesContainer = document.getElementById('boxes') //* Se declara la constante "boxesContainer", y se le asigna el valor que se obtiene del id='boxes' que pertenece al contenedor "<div>"
const btn = document.getElementById('btn') //* Se declara la constante 'btn', y se le asigna el valor que se obtiene del id='btn' que pertenece al <button> "Magic con CSS"

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))
//* Se adjunta el evento 'click' a la constante 'btn', para que lo que este dentro del contenedor <div> agregue y remueva la class="big" de la class="boxes big" que esta en el "style.css"

function createBoxes(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')    //* Adiciona la class "box" a la constante "box", que es la que contiene el URL de la imagen
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box) //* Adjunta el contenido de la constante "box" a la constante "boxesContainer"
        }
    }
}

createBoxes()