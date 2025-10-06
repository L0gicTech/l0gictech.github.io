function sendEmail(form) {
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    if (!name || !email || !message) {
        showNotification('Заполните все обязательные поля', 'error');
        return false;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const btnText = submitButton.querySelector('.btn-text');
    const btnLoading = submitButton.querySelector('.btn-loading');
    
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitButton.disabled = true;

    const emailBody = `
Имя: ${name}
Email: ${email}
Телефон: ${phone || 'Не указан'}
Тема: ${subject}

Сообщение:
${message}

---
Отправлено с сайта IT-Разработчики Сатка
    `.trim();

    const mailtoLink = `mailto:matveivaul@yandex.ru?subject=${encodeURIComponent('Сообщение с сайта: ' + subject)}&body=${encodeURIComponent(emailBody)}`;

    setTimeout(() => {
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitButton.disabled = false;
            
            showNotification('Открывается почтовый клиент. Заполните письмо и отправьте его.', 'success');
            
            form.reset();
            resetFormLabels();
        }, 2000);
    }, 1000);

    return false;
}

function resetFormLabels() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const label = group.querySelector('label');
        if (label) {
            label.classList.remove('active');
        }
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        max-width: 400px;
        word-wrap: break-word;
        font-family: 'Comfortaa', sans-serif;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 5000);
}

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.value = '+7 ';
    
    phoneInput.addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        
        if (!value.startsWith('7')) value = '7' + value;
        if (value.length > 11) value = value.substring(0, 11);
        
        const parts = [
            value.substring(1, 4),
            value.substring(4, 7),
            value.substring(7, 9),
            value.substring(9, 11)
        ].filter(part => part.length > 0);
        
        this.value = '+7 ' + parts.join(' ');
    });
    
    phoneInput.addEventListener('keydown', function(e) {
        if ((e.key === 'Backspace' || e.key === 'Delete') && this.selectionStart <= 3) {
            e.preventDefault();
        }
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        return sendEmail(this);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const label = group.querySelector('label');
        
        if (input && label) {
            if (!input.hasAttribute('placeholder')) {
                input.setAttribute('placeholder', ' ');
            }
            
            if (input.value.trim() !== '') {
                label.classList.add('active');
            }
            
            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    label.classList.add('active');
                } else {
                    label.classList.remove('active');
                }
            });
            
            input.addEventListener('focus', function() {
                label.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                label.classList.remove('focused');
            });
        }
    });
});

function showFormMessage(message, type = 'success') {
    showNotification(message, type);
}

function hideFormMessage() {

}

