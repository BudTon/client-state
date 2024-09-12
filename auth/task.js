const signin = document.getElementById('signin')
const btn = document.getElementById('signin__btn_delete')
const formPost = document.forms.signin__form;
const urlPost = 'https://students.netoservices.ru/nestjs-backend/auth'


let userId = getUserId()

if (userId === null) {
    formPost.addEventListener('submit', (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            if (xhr.readyState === xhr.DONE) {
                let data = JSON.parse(xhr.response);
                if (data.success === false) {
                    alert('Неверный логин/пароль');
                } else if (data.success === true) {
                    localStorage.setItem('user_id', data.user_id);
                    talkWelcome(data.user_id);
                }
            } else {
                alert('Загрузка отменена.');
                window.location.reload();
            }
        })

        xhr.onerror = () => {
            alert('Ошибка обращения к серверу');
            window.location.reload();
        };

        const formData = new FormData(formPost);

        xhr.open('POST', urlPost);
        xhr.send(formData);
        e.target.reset();
    });

} else {
    talkWelcome(userId)
}


btn.addEventListener('click', () => {
    localStorage.removeItem('user_id')
    window.location.reload();
})

function getUserId() {
    return localStorage.getItem('user_id')
}

function talkWelcome(userIdWelcome) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    signin__btn_delete.classList.add('welcome_active');
    welcome.textContent += userIdWelcome;
}