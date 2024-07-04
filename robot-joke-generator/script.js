const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

// generateJoke();

async function generateJoke(){
    jokeBtn.disabled = true;

    const message = createMessageElement("Hey robot tell me a joke");
    appendMessage(message);

    const joke = createMessageElement();
    setElementContent(joke, '<i class="fa-sold fa-ellipsis"></i>');
    appendMessage(joke);

    const res = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    console.log(res);

    if(res.ok){
        setTimeout(async () => {
            const data = await res.json();
            console.log(data);
            setElementContent(joke, data.joke);
            jokeBtn.disabled = false;
        }, "1500");
    }
    
}

function createMessageElement(content){
    const element = document.createElement("div");
    element.classList.add("message");
    if(content){
        element.classList.add("response");
        setElementContent(element, content);
    }else{
        element.classList.add("joke");
    }

    return element;
}

function setElementContent(element, content){
    element.innerHTML = content;
}

function appendMessage(element){
    chat.appendChild(element);
}