const signin = document.getElementById('signin')
const btn = document.getElementById('signin__btn_delete')
const formPost = document.forms.signin__form;
const urlPost = 'https://students.netoservices.ru/nestjs-backend/auth'
const textWelcone = document.getElementById('welcome').textContent


let userId = getUserId()

if (userId !== null) {
    talkWelcome(userId)
}

formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.readyState === xhr.DONE) {
            let data = xhr.response;
            if (data.success === false) {
                alert('Неверный логин/пароль');
            } else if (data.success === true) {
                localStorage.setItem('user_id', data.user_id);
                talkWelcome(data.user_id);
            }
        } else {
            alert('Загрузка отменена.');
        }
    })

    xhr.onerror = () => {
        alert('Ошибка обращения к серверу');
    };

    const formData = new FormData(formPost);

    xhr.open('POST', urlPost);
    xhr.send(formData);
    e.target.reset();
});

btn.addEventListener('click', () => {
    localStorage.removeItem('user_id');
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    btn.classList.remove('welcome_active');
    welcome.textContent = textWelcone;
})

function getUserId() {
    return localStorage.getItem('user_id')
}

function talkWelcome(userIdWelcome) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    btn.classList.add('welcome_active');
    welcome.textContent += userIdWelcome;
}