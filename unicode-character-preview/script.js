function detectChar(){
    const input = document.getElementById("input-type").value;

    if(!input || input == " "){
        document.getElementById("result").textContent = "Please enter a character";
        return;
    }
    
    const unicodeValue = input.charCodeAt(0);
    const result = `The unicode value of "${input}" is ${unicodeValue}`;
    document.getElementById("result").textContent = result;
}