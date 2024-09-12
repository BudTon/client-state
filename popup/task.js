const modal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')

try {
    getCookie('popup') === 'active';
} catch {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('popup', 'active')
})

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(key) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(key + '='))
    return cookie.substring(key.length + 1)
}

// document.cookie = 'popup=; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
