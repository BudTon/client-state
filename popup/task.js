const modal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close')


if (getCookie('popup') === 'active') {
    modal.classList.remove('modal_active');
} else {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('popup', 'active')
})

function setCookie(name, value) {
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

function getCookie(key) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(key + '='))
    if (cookie === undefined) {
        return null
    }  
    return cookie.substring(key.length + 1)
}

// document.cookie = 'popup=; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
