const animatedElements = document.querySelectorAll('.animated-element'); // récupération des éléments à animer

function checkVisibility() { // vérifie la visibilité des éléments et les animer s'ils sont visibles
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top; // récupération de la position de l'élément
        const screenPosition = window.innerHeight / 1.1; // récupération de la position de l'écran

        if (elementPosition < screenPosition) { // si l'élément est visible, on l'affiche
            element.classList.add('appear');
        }
    });
}

checkVisibility(); // vérification de la visibilité des éléments au chargement de la page
window.addEventListener('scroll', checkVisibility); // vérification de la visibilité des éléments à chaque scroll