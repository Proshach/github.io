const heroImages = [
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg"
]

const hero = document.querySelector(".hero")

const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)]

hero.style.backgroundImage = `url(${randomImage})`
