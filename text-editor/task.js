const main = document.querySelector('main')
main.insertAdjacentHTML('beforeEnd', '<button id="reset">Очистить форму</button>')
const textArea = document.querySelector('textarea')
const button = document.getElementById('reset')

const storedText = localStorage.getItem('text');

textArea.addEventListener('input', (e) => {
    let text = e.target.value
    localStorage.setItem('text', text)
})

button.addEventListener('click', (e) => {
    localStorage.removeItem('text')
    textArea.value = "" 
})
