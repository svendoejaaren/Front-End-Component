// FORM
const section1 = document.querySelector('section:first-of-type')
const p1 = document.querySelector('p:first-of-type')
const form = document.querySelector('form')
const section2 = document.querySelector('section:nth-of-type(2)')
const p2 = document.querySelector('p:nth-of-type(2)')
const p3 = document.querySelector('p:nth-of-type(3)')
const p4 = document.querySelector('p:last-of-type')
const section3 = document.querySelector('section:last-of-type')
const vorigeButton = document.querySelector('a:first-of-type')
const volgendeButton = document.querySelector('a:last-of-type')
const level1 = document.querySelector('section:last-of-type img')
const level2 = document.querySelector(
    'section:last-of-type div:last-of-type img'
)

let currentSection = 0
section2.classList.add('showForm')
section3.classList.add('showForm')
level1.classList.add('noImg')
level2.classList.add('noImg')
volgendeButton.innerHTML = 'Volgende'

if (currentSection === 0) {
    vorigeButton.classList.add('backButton')
    p1.classList.add('currentPage')
}

volgendeButton.addEventListener('click', (e) => {
    e.preventDefault()
    currentSection++

    if (currentSection === 1) {
        vorigeButton.classList.remove('backButton')
        section2.classList.remove('showForm')
        section1.classList.add('showForm')
        p1.classList.remove('currentPage')
        p2.classList.add('currentPage')
    }

    if (currentSection === 2) {
        section3.classList.remove('showForm')
        section2.classList.add('showForm')
        p2.classList.remove('currentPage')
        p3.classList.add('currentPage')
        volgendeButton.innerHTML = 'Registreer'
    }

    if (currentSection === 3) {
        location.replace('welkom.html')
    }
})

vorigeButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (currentSection === 1) {
        section1.classList.remove('showForm')
        section2.classList.add('showForm')
        p2.classList.remove('currentPage')
        p1.classList.add('currentPage')
        vorigeButton.classList.add('backButton')
    }

    if (currentSection === 2) {
        volgendeButton.innerHTML = 'Volgende'
        section2.classList.remove('showForm')
        section3.classList.add('showForm')
        p3.classList.remove('currentPage')
        p2.classList.add('currentPage')
    }

    currentSection--
})

// API
const fetchLevel1FightingPokemon = async () => {
    await fetch('https://pokeapi.co/api/v2/type/2')
        .then((res) => res.json())
        .then((data) => {
            // Create object to get specific info from the list
            const pokemon = {
                name: data.pokemon[21].pokemon.name,
                url: data.pokemon[21].pokemon.url,
            }

            // Fetch the url from that pokemon
            fetch(pokemon.url)
                .then((res) => res.json())
                .then((data) => {
                    // Create object to select the image from the single pokemon
                    const singlePokemon = {
                        image: data.sprites['front_default'],
                    }
                    document.querySelector(
                        'figure:first-of-type'
                    ).innerHTML += `
            <img src="${singlePokemon.image}" alt="Fighting level 1 Pokemon"/>
            `
                })
        })
}

const fetchLevel2FightingPokemon = async () => {
    await fetch('https://pokeapi.co/api/v2/type/2')
        .then((res) => res.json())
        .then((data) => {
            // Create object to get specific info from the list
            const pokemon = {
                name: data.pokemon[4].pokemon.name,
                url: data.pokemon[4].pokemon.url,
            }

            // Fetch the url from that pokemon
            fetch(pokemon.url)
                .then((res) => res.json())
                .then((data) => {
                    // Create object to select the image from the single pokemon
                    const singlePokemon = {
                        image: data.sprites['front_default'],
                    }
                    document.querySelector(
                        'div:nth-of-type(2) figure'
                    ).innerHTML += `
            <img src="${singlePokemon.image}" alt="Fighting level 2 Pokemon"/>
            `
                })
        })
}

fetchLevel1FightingPokemon()
fetchLevel2FightingPokemon()
