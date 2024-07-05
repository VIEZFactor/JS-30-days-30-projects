let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        let elementId = e.currentTarget.id;

        if(elementId == "decrease"){
            count--;
        }

        if(elementId == "reset"){
            count = 0;
        }

        if(elementId == "increase"){
            count++;
        }

        value.textContent = count;
        value.style.color = count > 0 ? "green" : count < 0 ? "red" : "";
    })
});