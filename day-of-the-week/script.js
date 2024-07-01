
const days = [
    { name: 'Sunday', quote: 'Time to chillax!'},
    { name: 'Monday', quote: 'Monday morning blues!'},
    { name: 'Tuesday', quote: 'Taco time!'},
    { name: 'Wednesday', quote: 'Two more days to the weekend.'},
    { name: 'Thursday', quote: 'Weekend is almost here...'},
    { name: 'Friday', quote: 'Friday night is here!'},
    { name: 'Saturday', quote: 'Time to party!'},
];

document.addEventListener("DOMContentLoaded", () => {
    const today = days[new Date().getDay()];
    
    document.getElementById("weekday").textContent = today.name;
    document.getElementById("phrase").textContent = today.quote;
})