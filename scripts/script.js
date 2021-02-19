// carne - 400gr por pessoa + de 6 horas = 650
// cerveja - 1200 ml por pessoa + de 6 horas = 2000ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml 

//crianças vale por 0.5

function active_button(button){
    if(!button.dataset.active){
        button.dataset.active = true

    }else {
        button.dataSet.active = false
    }
    console.log(button)
}
