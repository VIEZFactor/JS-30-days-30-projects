const inputs = document.querySelectorAll('.css-controller input');

inputs.forEach((input) =>
    input.addEventListener("change", update)
);

function update(){
    const suffixData = this.dataset.sizing || "";
    console.log(suffixData);
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffixData
    )
}