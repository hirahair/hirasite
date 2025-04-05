$(document).ready(function() {
    // Mobile menu toggle
    $('.mobile-menu-btn').click(function() {
        $('nav').toggleClass('active');
        $(this).find('i').toggleClass('fa-times fa-bars');
    });

// Sticky header with transparency effect
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});
// Header scroll effect
$(window).scroll(function() {
    if ($(this).scrollTop() > 30) { // Triggers after 30px of scrolling
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});

    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
        
        // Scroll up button
        if ($(this).scrollTop() > 300) {
            $('.scroll-up-btn').addClass('active');
        } else {
            $('.scroll-up-btn').removeClass('active');
        }
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('nav').removeClass('active');
        $('.mobile-menu-btn i').removeClass('fa-times').addClass('fa-bars');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 800);
    });

    // Scroll up button
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });

    // Set current year in footer
    $('#year').text(new Date().getFullYear());

    // Service data
    const services = [
        {
            title: "HAIR CUT",
            description: "Professional haircuts for all hair types and styles (Razer Cut - Most liked).",
            icon: "fas fa-cut"
        },
        {
            title: "HILIGHTING",
            description: "1-Process, Partial Hilites, Full Hilites, and Cap Hilites.",
            icon: "fas fa-paint-brush"
        },
        {
            title: "PERMS",
            description: "Permanents, Texture Perms, and Perm/Blowdry/Cut packages.",
            icon: "fas fa-asterisk"
        },
        {
            title: "STYLING",
            description: "Shampoo & Blow Dry services for that perfect finish.",
            icon: "fas fa-wind"
        },
        {
            title: "TREATMENTS",
            description: "Deep Conditioning treatments for healthy, shiny hair.",
            icon: "fas fa-spa"
        },
        {
            title: "FACIALS",
            description: "Professional facial treatments for glowing, rejuvenated skin.",
            icon: "fas fa-smile"
        },
        {
            title: "THREADING",
            description: "Brow threading",
            icon: "fas fa-eye"
        },
        {
            title: "MASSAGE",
            description: "Sirodhara, Facial Massage, Katthi Bowl Massage, Singing Bowl Therapy, and Meditation",
            icon: "fas fa-hands"
        }
    ];

    // Testimonial data
    const testimonials = [
        {
            content: "I have been going to Hira Hair Studio for 12 years and I would never go any where else. Song, the owner, does the best haircuts, color and highlights. She is always up to date on the latest hairstyles and products. ",
            author: "Sandy Wilsonn",
            role: "Regular Client"
        },
        {
            content: "I have been going to see Song for years. She can do anything with your hair. She is a true artist and a good person too!",
            author: "Amanda Freer",
            role: "Regular Client"
        },
        {
            content: "Amazing - been going to Sangita for over 20 years!!! Not only great work but a great person.",
            author: "Janice Yu Edwards",
            role: "Long-time Client"
        }
    ];

    // Gallery data
    const galleryItems = [
        { image: "images/gallery1.jpg", thumb: "images/gallery1.jpg", alt: "Hair Styling" },
        { image: "images/gallery2.jpg", thumb: "images/gallery2.jpg", alt: "Hair Coloring" },
        { image: "images/gallery3.jpg", thumb: "images/gallery3.jpg", alt: "Hair Treatment" },
        { image: "images/gallery4.jpg", thumb: "images/gallery4.jpg", alt: "Bridal Hairstyle" },
        { image: "images/gallery5.jpg", thumb: "images/gallery5.jpg", alt: "Men's Haircut" },
        { image: "images/gallery6.jpg", thumb: "images/gallery6.jpg", alt: "Color Highlights" },
        { image: "images/gallery7.jpg", thumb: "images/gallery7.jpg", alt: "Color Highlights" },
        { image: "images/gallery8.jpg", thumb: "images/gallery8.jpg", alt: "Color Highlights" },
        { image: "images/gallery9.jpg", thumb: "images/gallery9.jpg", alt: "Color Highlights" }

    ];

    // Populate services
    if ($('.services-container').children().length === 0) {
        const servicesContainer = $('.services-container');
        services.forEach(service => {
            servicesContainer.append(`
                <div class="service">
                    <i class="${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `);
        });
    }

    // Populate testimonials
    if ($('.testimonials-container').children().length === 0) {
        const testimonialsContainer = $('.testimonials-container');
        testimonials.forEach(testimonial => {
            testimonialsContainer.append(`
                <div class="testimonial">
                    <div class="testimonial-content">
                        <p>"${testimonial.content}"</p>
                    </div>
                    <div class="testimonial-author">
                        <img src="images/client-${testimonials.indexOf(testimonial)+1}.jpg" alt="${testimonial.author}">
                        <div class="author-info">
                            <h4>${testimonial.author}</h4>
                            <span>${testimonial.role}</span>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Populate gallery
    if ($('.gallery-container').children().length === 0) {
        const galleryContainer = $('.gallery-container');
        galleryItems.forEach(item => {
            galleryContainer.append(`
                <a href="${item.image}" class="gallery-item">
                    <img src="${item.thumb}" alt="${item.alt}">
                    <div class="overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </a>
            `);
        });

        // Initialize lightbox
        $('.gallery-container').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: function(item) {
                    return item.el.find('img').attr('alt');
                }
            }
        });
    }
});