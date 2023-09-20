import { elementos } from "./elementos.js"

const htmlElements = elementos()

var contador = 0 

htmlElements.button_acessa.onclick = () => {

    if(contador < 10 && htmlElements.lampada == false){
        htmlElements.img_acessa.classList.remove('hide')
        htmlElements.img_apagada.classList.add('hide')

        htmlElements.lampada = true

        contador++

        console.log(contador)

        return
    }else if(contador == 10){

        htmlElements.img_quebrada.classList.remove('hide')

        htmlElements.img_acessa.classList.add('hide')
        htmlElements.img_apagada.classList.add('hide')
    }
}

htmlElements.button_apagado.onclick = () =>{

    if(contador <= 10 && htmlElements.lampada){
        htmlElements.img_acessa.classList.add('hide')
        htmlElements.img_apagada.classList.remove('hide')
        htmlElements.lampada = false
    }
}