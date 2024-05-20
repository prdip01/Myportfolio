document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS library
    AOS.init();
    
    // Select all section elements
    const sections = document.querySelectorAll('section');
    
    // Options for IntersectionObserver
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);
    
   
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init();
    
    const skillBtns = document.querySelectorAll('.skill-btn');
    
    
    skillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            btn.classList.add('active');
        });

        
        btn.addEventListener('mouseenter', () => {
            btn.classList.add('active');
        });

        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('active');
        });
    });

    
});
document.addEventListener('DOMContentLoaded', function() {
    
    const linkedinBtn = document.querySelector('.contact-btn');
    

    linkedinBtn.addEventListener('click', () => {
        linkedinBtn.classList.toggle('active');
    });

    linkedinBtn.addEventListener('mouseenter', () => {
        linkedinBtn.classList.add('active');
    });

    linkedinBtn.addEventListener('mouseleave', () => {
        linkedinBtn.classList.remove('active');
    });
});

const header = document.querySelector('header');

header.addEventListener('click', function() {
    header.classList.toggle('glitch-active');
});
document.addEventListener('DOMContentLoaded', function() {
    
    const socialBtns = document.querySelectorAll('.social-btn');

   
    socialBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });

        btn.addEventListener('mouseenter', () => {
            btn.classList.add('active');
        });

        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('active');
        });
    });
});
