export function elementos(){
    const button = document.querySelector('button')
    const img_acessa = document.querySelector('.acessa') 
    const img_apagada = document.querySelector('.apagada')
    const img_quebrada = document.querySelector('.quebrada')
    const button_acessa = document.querySelector('#acender')
    const button_apagado = document.querySelector('#apagar')
    const lampada = false
    return {
        button,
        img_acessa,
        img_apagada,
        img_quebrada,
        button_acessa,
        button_apagado,
        lampada,
    }
}