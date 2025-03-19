const quote = document.getElementById("quote")
const author = document.getElementById("author")

const api_url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    quote.innerHTML = `"${data.data.content}"`;
    author.innerHTML = `----by ${data.data.author}`;
    
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " " +  author.innerHTML )
}

function copyText(){
    let text = document.getElementById("quote");
        console.log(text.innerText)
    navigator.clipboard.readText(text.innerText).then(() => {
        alert("Text coiped:" + text.innerText);
        
    }).catch(err => {
        console.error("Failed to copy text:",err);
    });
}