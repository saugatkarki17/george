




// for project



document.addEventListener("DOMContentLoaded", function() {
    showCategory('all');
});

function showCategory(category) {
    const allProjects = document.querySelectorAll('.projects');
    const allButtons = document.querySelectorAll('.toggle-buttons button');
    
    allProjects.forEach(project => {
        project.classList.remove('active');
        if (project.classList.contains(category)) {
            project.classList.add('active');
        }
    });

    allButtons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === category) {
            button.classList.add('active');
        }
    });
}

function showModal(projectId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const projectDetails = {
        'project1': {
            title: 'Woodland Park, NJ',
            description: 'Build a pool from scratch, installed lighting, and a modernized aesthetic.',
            images: ['./images/IMG_3825.jpeg', './images/IMG_3898.jpeg', './images/IMG_3899.jpeg']
        },
        'project2': {
            title: 'Clifton, NJ',
            description: 'Total Exterior and interior construction and finishing',
            images: ['./images/c-1.jpeg', './images/c-2.jpeg', './images/c-3.jpg']
        },
        'project3': {
            title: 'Woodland Park, NJ',
            description: 'Total Exterior and interior construction and finishing',
            images: ['./images/b-3.jpeg', './images/b-1.jpeg', './images/b-2.jpeg']
        },
        'project4': {
            title: 'Bloomfield, NJ',
            description: 'Total Exterior and interior construction and finishing',
            images: ['./images/d-3.jpg', './images/d-2.jpeg', './images/d-1.jpeg']
        }
        ,
        'project5': {
            title: 'Interior',
            description: 'Total interior construction and finishing',
            images: ['./images/d-3.jpg', './images/c-3.jpg', './images/i-1.jpg']
        }
    };

    const project = projectDetails[projectId];
    if (project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="modal-images">
                ${project.images.map(image => `<img src="${image}" alt="${project.title}">`).join('')}
            </div>
        `;
    }
    
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// review


let currentSlide = 0;

const testimonials = [
    {
        image: "./images/f.png",
        text: "The construction team was professional, reliable, and efficient. They transformed our backyard into a beautiful outdoor living space with a custom-built pool and deck. Highly recommend their services!",
        name: "Fady Gazel",
        role: "Homeowner"
    },
    {
        image: "./images/me.jpeg",
        text: "We hired them for a complete home renovation, and they exceeded our expectations. The project was completed on time and within budget, with top-notch craftsmanship. Every detail was perfect!",
        name: "Saugat Karki",
        role: "Interior Designer"
    },
    {
        image: "https://via.placeholder.com/150",
        text: "Their attention to detail and ability to communicate throughout the project was outstanding. Our new office building is both functional and visually stunning. A job well done!",
        name: "Chady Dirany",
        role: "Business Owner"
    }
];

function updateSlide() {
    const testimonialContent = document.querySelector(".testimonial-content");
    const { image, text, name, role } = testimonials[currentSlide];
    testimonialContent.innerHTML = `
        <img src="${image}" alt="${name}" class="testimonial-image">
        <div class="testimonial-text">
            <p>"${text}"</p>
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    `;
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    updateSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    updateSlide();
}

// Initialize the first slide
updateSlide();

// for menu 

const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelector(".lil");
const navBtn = document.querySelector(".ham-menu");
navBtn.addEventListener("click", ()=> {
        navLinks.classList.toggle("menu-active");
        navLinksLi.classList.toggle("menu-activeli");
    });


