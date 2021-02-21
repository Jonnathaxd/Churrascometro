// carne - 400gr por pessoa + de 6 horas = 650
// cerveja - 1200 ml por pessoa + de 6 horas = 2000ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml 
// salada 120 g por pessoa  + 6 horas 200g

//crianças vale por 0.5

function active_button(button){
    if(button.dataset.confirm == 'false'){
        button.dataset.confirm = true
    }else {
        button.dataset.confirm = false
    }
}

function results(){
    document.getElementById('base').style.display = 'none'
    document.getElementById('results').style.display = 'inline-block'
    let tips = document.querySelectorAll('#results > div')
    let but = document.querySelectorAll('#kind_of > button')

    let adults = document.getElementById('adults').value == '' ? 0 : document.getElementById('adults').value
    let kids = document.getElementById('kids').value == '' ? 0: document.getElementById('kids').value
    let duration = document.getElementById('duration').value == '' ? 0:document.getElementById('duration').value < 0? document.getElementById('duration').value * -1: document.getElementById('duration').value


    /* Calculo de suprimentos */
    let meat = chicken = duration < 6 ?  400 * adults + ((400 * kids) / 2): 650 * adults + ((650 * kids) / 2)
    let beer = duration < 6 ? 1200 * adults: 2000 * adults
    let juice = duration < 6 ? 1000 * adults + ((1000 * kids) / 2): 1500*adults + ((1500 * kids) / 2) 
    let salad = duration < 6 ? 120 * adults + ((120 * kids) / 2): 200* adults + ((200 * kids) / 2)

    for(var i=0; i < but.length; i++){
        if(but[i].dataset.confirm == 'false'){
            tips[i].classList.add('none_results')
        }
        else {
            tips[i].classList.add('confirm_results')
        }
    }

    tips.forEach(tipo => {
        if(tipo.id == 'meat_results' && tipo.classList != 'none_results'){
            tipo.innerHTML = `É necessário ${meat}g de carne`
        }
        if(tipo.id == 'chicken_results' && tipo.classList != 'none_results'){
            tipo.innerHTML = `É necessário ${chicken}g de frango`
        }
        if(tipo.id == 'beer_results' && tipo.classList != 'none_results'){
            tipo.innerHTML = `É necessário ${beer}ml de cerveja`
        }
        if(tipo.id == 'juice_results' && tipo.classList != 'none_results'){
            tipo.innerHTML = `É necessário ${juice}ml de suco`
        }
        if(tipo.id == 'salad_results' && tipo.classList != 'none_results'){
            tipo.innerHTML = `É necessário ${salad}g de salada`
        }
    })
    
}

function start_again(){
    document.getElementById('adults').innerHTML = ''
    document.getElementById('kids').innerHTML = ''
    document.getElementById('duration').innerHTML = ''
    
    document.getElementById('base').style.display = 'inline-block'
    document.getElementById('results').style.display = 'none'
    let tips = document.querySelectorAll('#results > div')
    let but = document.querySelectorAll('#kind_of > button')
    for (let index = 0; index < tips.length; index++) {
        but[index].dataset.confirm = 'false'
        tips[index].classList.remove('none_results', 'confirm_results')
        tips[index].innerHTML = ''
    }

}

function start_print(){
    window.print()

}