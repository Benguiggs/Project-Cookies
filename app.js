const inputs = document.querySelectorAll("input")

inputs.forEach(input => {
    input.addEventListener("invalid", handleValidation)
    input.addEventListener("input", handleValidation)
});

function handleValidation(e) {
    if (e.type === "invalid") {
        e.target.setCustomValidity("Ce champ de peut être vide.")

    } else if (e.type === "input") {
        e.target.setCustomValidity("")
    }
}

const cookieForm = document.querySelector("form")
cookieForm.addEventListener("submit", handleForm)

function handleForm(e) {
    e.preventDefault()

    const newCookie = {}

    inputs.forEach(input => {
        const nameAttribute = input.getAttribute("name")
        newCookie[nameAttribute] = input.value;
    })
    newCookie.expires = new Date(new Date().getTime() + 7 * 24 * 60 * 1000)

    createCookie(newCookie)
}

function createCookie(newCookie) {

document.cookie =  `${encodeURIComponent(newCookie.name)}`
}