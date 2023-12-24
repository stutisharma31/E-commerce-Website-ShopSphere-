let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
};

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
};


function sendMessage(event) {
    event.preventDefault();

 
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var number = document.getElementById('number').value.trim();
    var message = document.getElementById('message').value.trim();

   
    if (name === '' || email === '' || number === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

   
    var numberRegex = /^\d+$/;
    if (!numberRegex.test(number)) {
        alert('Please enter a valid number');
        return;
    }


    var alertMessage = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;
    alert(alertMessage);

    
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtns = document.querySelectorAll('.cart-btn');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
          
            event.preventDefault();

            
            const cartCountElement = document.getElementById('cart-count');
            if (cartCountElement) {
              
                cartCountElement.textContent = (parseInt(cartCountElement.textContent) + 1).toString();
            }

          
            alert('Product added to cart!');
        });
    });
});





   

window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
};

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.querySelector('body').classList.add('active');
    } else {
        document.querySelector('body').classList.remove('active');
    }
};

document.querySelectorAll('.small-image-1').forEach(images => {
    images.onclick = () => {
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    };
});

document.querySelectorAll('.small-image-2').forEach(images => {
    images.onclick = () => {
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    };
});

document.querySelectorAll('.small-image-3').forEach(images => {
    images.onclick = () => {
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    };
});

let countDate = new Date('August 1, 2023 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / days);
    let h = Math.floor((gap % days) / hours);
    let m = Math.floor((gap % hours) / minutes);
    let s = Math.floor((gap % minutes) / seconds);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(function () {
    countDown();
}, 1000);

var productSwiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var reviewSwiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});
