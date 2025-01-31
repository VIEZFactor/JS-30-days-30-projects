let outputcode = document.getElementById("css-code");

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(
    (slider) => slider.addEventListener("input",createBlob)
);

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(
    (input) => input.addEventListener("change",createBlob)
);

function createBlob(){
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${radiusFour}%`

    let blobStyle = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px;`;

    document.querySelector(".blob").style.cssText = blobStyle;

    outputcode.value = blobStyle;
}

document.getElementById("copy").addEventListener("click", function(){
    navigator.clipboard.writeText(outputcode.value)
        .then( () => {
            alert("Code copied to clipboard");
        });
});

createBlob();