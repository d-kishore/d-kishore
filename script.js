/* MOBILE MENU */

const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav-menu")

toggle.addEventListener("click", () => {
nav.classList.toggle("active")
})



/* LOAD GITHUB REPOS */

const container = document.getElementById("github-projects")

fetch("https://api.github.com/users/d-kishorekumar/repos")

.then(res => res.json())

.then(data => {

data.slice(0,6).forEach(repo => {

const card = document.createElement("div")

card.className = "project-card"

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "GitHub repository"}</p>
<a href="${repo.html_url}" target="_blank">View Repo</a>
`

container.appendChild(card)

})

})
