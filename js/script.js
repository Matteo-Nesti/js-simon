const numbersElement = document.getElementById('numbers')
const resultElement = document.getElementById('result')
const messageElement = document.getElementById('message')
const counterElement = document.getElementById('counter')
const showMessageElement = document.getElementById('show-number')
// funzione numeri random 
const randomNumbers = () => {
    const random = Math.floor((Math.random() * 100) + 1);
    console.log(random + ' numero casuale')
    return random;
}

// preparo array vuoto per inserire i numeri
const numberGroup = []

// stampo i numeri in pagina

for(let i = 0; i < 5; i++) {
    const numbers = randomNumbers()
    if(!numberGroup.includes(numbers)){
        numberGroup.push(numbers)
        numbersElement.innerText += ' ' + numbers
        console.log(numberGroup)
    }
}


// funzione per nascondere i numeri
const memoryNumber = () => {
    numbersElement.classList.add('d-none')
}
// chiedere all'utente i numeri
const memoryAnswer = () => {

    let numbersCounter = 0

    for(let i = 0; i < 5; i++) {
        const userNumbers = parseInt(prompt('ti ricordi i numeri che sono passati?'))
        if(isNaN(userNumbers) || userNumbers <= 0){
            alert('valori non validi')
        }
        console.log(userNumbers + ' numero utente')

        showMessageElement.innerText = 'ne hai ricordati 0...'
        showMessageElement.classList.remove('d-none')
        
        if(numberGroup.includes(userNumbers)){
            numbersCounter++ 
            if(numbersCounter > 1) {
                showMessageElement.innerText = 'Eccoli:'
                showMessageElement.classList.remove('d-none')
            }
            else if(numbersCounter === 1){
                showMessageElement.innerText = 'Eccolo:'
                showMessageElement.classList.remove('d-none')
            }
            messageElement.classList.remove('d-none')
            counterElement.innerText = numbersCounter
            resultElement.innerText += ' ' + userNumbers
            console.log(' ' + userNumbers + ' bravo')
        }
    }
}



setTimeout(memoryNumber, 2900);
setTimeout(memoryAnswer, 3000);


