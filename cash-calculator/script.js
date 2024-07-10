document.addEventListener("DOMContentLoaded", () => {

    const et20 = document.getElementById("et20");
    const et50 = document.getElementById("et50");
    const et100 = document.getElementById("et100");
    const et200 = document.getElementById("et200");
    const et500 = document.getElementById("et500");
    const et1000 = document.getElementById("et1000");

    const txt20 = document.getElementById("txt20");
    const txt50 = document.getElementById("txt50");
    const txt100 = document.getElementById("txt100");
    const txt200 = document.getElementById("txt200");
    const txt500 = document.getElementById("txt500");
    const txt1000 = document.getElementById("txt1000");

    const txtFinalCash = document.getElementById("txtFinalCash");
    const txtFinalCashinWords = document.getElementById("txtFinalCashInWords");
    const btnReset = document.getElementById("btnReset");

    const cashInputs = [et20, et50, et100, et200, et500, et1000];
    const cashTexts = [txt20, txt50, txt100, txt200, txt500, txt1000];

    cashInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            cashCalculate(index);
        })
    })

    function cashCalculate(index){
        const denominations = [20, 50, 100, 200, 500, 1000];
        const rowValue = cashInputs[index].value * denominations[index];
        cashTexts[index].textContent = rowValue.toFixed(0);

        totalCash();
    }

    function totalCash(){
        let totalCashValue = 0;
        cashTexts.forEach((text) => {
            totalCashValue += parseInt(text.textContent);
        })

        txtFinalCash.textContent = `Total Cash: $${totalCashValue}`;
    }

    btnReset.addEventListener("click", clearData);

    function clearData(){
        cashInputs.forEach((input) => input.value = "");
        cashTexts.forEach((text) => text.textContent = "0");
        totalCash();
    }

    cashInputs.forEach((input) => {
        input.addEventListener("input", () => {
            const value = parseInt(input.value, 10);
            console.log(value);
            if(isNaN(value) || value < 0){
                input.value = "";
            }
        })
    })
});