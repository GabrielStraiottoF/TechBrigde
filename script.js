document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    if (name && email && message) {
        showSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    } else {
        showErrorMessage('Por favor, preencha todos os campos.');
    }
}
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;

    if (email) {
        showSuccessMessage('Inscrição realizada! Verifique seu email para confirmar.');
        form.reset();
    } else {
        showErrorMessage('Por favor, digite um email válido.');
    }
}
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'toast toast-success';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.classList.add('show'), 10);
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}
function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'toast toast-error';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.classList.add('show'), 10);
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sobre-card, .faculdade-card, .emprego-card, .guia-card').forEach(card => {
        observer.observe(card);
    });
});
const style = document.createElement('style');
style.textContent = `
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        color: white;
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        animation: slideInNotification 0.3s ease forwards;
    }

    .toast.show {
        transform: translateX(0);
    }

    .toast-success {
        background-color: #10b981;
    }

    .toast-error {
        background-color: #ef4444;
    }

    @keyframes slideInNotification {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .toast {
            bottom: 10px;
            right: 10px;
            left: 10px;
        }
    }
`;
document.head.appendChild(style);
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});
document.querySelectorAll('.emprego-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.emprego-card');
        const vagaNome = card.querySelector('.emprego-header h3').textContent;
        const vagaEmpresa = card.querySelector('.empresa').textContent;
        
        window.location.href = `candidatura.html?vaga=${encodeURIComponent(vagaNome)}&empresa=${encodeURIComponent(vagaEmpresa)}`;
    });
});
document.querySelectorAll('.link-arrow').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showSuccessMessage('Conteúdo de ' + this.parentElement.querySelector('h3').textContent + ' em breve!');
    });
});
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
const headerStyle = document.createElement('style');
headerStyle.textContent = `
    .header {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(headerStyle);

console.log(`
╔════════════════════════════════════════════════╗
║        TechBridge - Website Inicializado        ║
║                                                ║
║    Bem-vindo à plataforma de oportunidades    ║
║    para alunos do ensino médio técnico!       ║
╚════════════════════════════════════════════════╝
`);
