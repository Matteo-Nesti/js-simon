const numbersElement = document.getElementById('numbers')

// funzione numeri random 
const randomNumbers = () => {
    const random = Math.floor((Math.random() * 100) + 1);
    console.log(random)
    return random;
}

// stampo i numeri in pagina
for(let i = 0; i < 5; i++) {
    const numbers = randomNumbers()
    numbersElement.innerText += ' ' + numbers
}

