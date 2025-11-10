// Простые анимации для сайта-визитки
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Сайт-визитка загружен!');
    
    // Анимация появления элементов
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('section');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };
    
    // Установка начальных стилей для анимации
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease";
    });
    
    // Запуск анимации при загрузке и скролле
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Интерактивность для навыков
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Интерактивность для контактов
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalBg = this.style.background;
                this.style.background = '#28a745';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.style.background = originalBg;
                    this.style.color = '';
                }, 1000);
            });
        });
    });
    
    // Плавная прокрутка для якорей (если добавите навигацию)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
