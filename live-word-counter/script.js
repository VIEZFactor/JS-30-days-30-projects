const inputTextArea = document.getElementById("input-textarea");
const characCounter = document.getElementById("charac-counter");
const wordCounter = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
    // Characters counter
    characCounter.textContent = inputTextArea.value.length;

    // Words Counter
    const txt = inputTextArea.value.trim();
    // This regular expression is for detect backspaces, tabs, enters and so on
    const wordArray = txt.split(/\s+/);    
    if(inputTextArea.value.length < 1){
        wordCounter.textContent = 0;
    }else{        
        wordCounter.textContent = wordArray.length;
    }
})