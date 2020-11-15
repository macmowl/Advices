const advice = document.getElementById('advice');

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (response.status !== 200) {
                console.log(`An error occured : ${response.status}`)
            }

            response.json()
                .then(data => {
                    advice.innerText = data.slip.advice;
                    console.log(data)
                })
        })
        .catch(err => console.log(err))
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

fetchAdvice()
// document.querySelector('html').style.backgroundColor = getRandomColor()


