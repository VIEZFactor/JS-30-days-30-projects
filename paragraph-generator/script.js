const paragraphs = [
    "Be yourself; everyone else is already taken.|Oscar Wilde",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.|Marilyn Monroe",
    "So many books, so little time.|Frank Zappa",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.|Albert Einstein",
    "A room without books is like a body without a soul.|Marcus Tullius Cicero",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.|Dr. Seuss",
    "You only live once, but if you do it right, once is enough.|Mae West",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.|J.K. Rowling",
    "If you tell the truth, you don't have to remember anything.|Mark Twain",
    "The fool doth think he is wise, but the wise man knows himself to be a fool.|William Shakespeare",
    "I have not failed. I've just found 10,000 ways that won't work.|Thomas A. Edison",
    "A woman is like a tea bag; you never know how strong it is until it's in hot water.|Eleanor Roosevelt",
    "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.|Oscar Wilde",
    "I became insane, with long intervals of horrible sanity.|Edgar Allan Poe",
];

const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function generate(){
    if(item.value == 0){
        alert("The value cannot be zero");
        return;
    }

    if(item.value > paragraphs.length){
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML= `${paragraphs[randomIndex]}`;
        return;
    }

    const shuffleParagraphs = paragraphs;
    shuffle(paragraphs);

    const selectedParagraphs = shuffleParagraphs.slice(0, item.value);
    const paragraphsHTML = selectedParagraphs.map(
        (paragraphs) => `<p>${paragraphs}</p>`
    ).join("");

    dataContainer.innerHTML= paragraphsHTML;

}