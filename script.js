document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', event => {
            const answer = item.nextElementSibling;
            const arrow = item.querySelector('svg');
            if (answer.style.display === "none" || !answer.style.display) {
                answer.style.display = "block";
                arrow.classList.add('rotate-180');
            } else {
                answer.style.display = "none";
                arrow.classList.remove('rotate-180');
            }
        });
    });

    function showAlert() {
        alert('Submitted Successfully!');
    }

    function updateClock() {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Dhaka',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formatter = new Intl.DateTimeFormat('en-GB', options);
        document.getElementById('current-time').textContent = formatter.format(now);
    }

    updateClock();
    setInterval(updateClock, 1000);
});
