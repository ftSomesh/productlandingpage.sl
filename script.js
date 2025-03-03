const themeEl = document.querySelector(".theme")
const modeText = document.querySelector("#mode-text")
const icon = document.querySelector("#icon")

if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
    modeText.textContent = "Light Mode"

} else {
    modeText.textContent = "Dark Mode"
}

if(localStorage.getItem("icon")) {
    icon.className = `fa-solid ${localStorage.getItem("icon")}`
}


themeEl.addEventListener("click", (e)=> {
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        localStorage.setItem("icon", "fa-sun");

        modeText.textContent = "Light Mode";
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    } else {
        localStorage.setItem("theme", "light");
        localStorage.setItem("icon", "fa-moon");
        modeText.textContent = "Dark Mode";
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
})