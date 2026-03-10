const heroImages = [
"assets/images/photo1.jpg",
"assets/images/photo2.jpg",
"assets/images/photo3.jpg"
]

const hero = document.querySelector(".hero")

const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)]

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${randomImage})`
