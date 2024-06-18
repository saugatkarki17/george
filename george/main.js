console.log("hi")

const navScroll = document.getElementById('nav-div');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        navScroll.classList.add("nav-colored");
        navScroll.classList.remove("nav-transparent");
    } 
    else {
        navScroll.classList.add("nav-transparent");
        navScroll.classList.remove("nav-colored");
    }
};



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
            title: 'Residential Project 1',
            description: 'This is a detailed description of Residential Project 1.',
            images: ['./images/background-main.jpg', './images/background-main.jpg', './images/background-main.jpg']
        },
        'project2': {
            title: 'Residential Project 2',
            description: 'This is a detailed description of Residential Project 2.',
            images: ['project2-1.jpg', 'project2-2.jpg', 'project2-3.jpg']
        },
        'project3': {
            title: 'Commercial Project 1',
            description: 'This is a detailed description of Commercial Project 1.',
            images: ['project3-1.jpg', 'project3-2.jpg', 'project3-3.jpg']
        },
        'project4': {
            title: 'Commercial Project 2',
            description: 'This is a detailed description of Commercial Project 2.',
            images: ['project4-1.jpg', 'project4-2.jpg', 'project4-3.jpg']
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


let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 7000);
let navDots = document.querySelectorAll('.nav-dot');

function nextSlide() {
    currentSlide = (currentSlide + 2) % slides.length;
    updateSlider();
}

function goToSlide(n) {
    currentSlide = (n * 2) % slides.length;
    updateSlider();
}

function updateSlider() {
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 25}%)`;
    navDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide / 2);
    })
}

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        goToSlide(index);
        slideInterval = setInterval(nextSlide, 7000);
    });
});

updateSlider();


