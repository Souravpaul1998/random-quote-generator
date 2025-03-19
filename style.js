const quote = document.getElementById("quote") 
const author = document.getElementById("author")

const api_url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";

async function getquote(url) {     // async function handles API calls withouy blocking other tasks.
    const response = await fetch(url);     // fetch(url) sends request to the API.
    var data = await response.json();    // await response.json() converts the response to the JSON format
    console.log(data)
    quote.innerHTML = `"${data.data.content}"`;
    author.innerHTML = `----by ${data.data.author}`;
    
}
getquote(api_url);
 //method to tweet
function tweet(){
    // open twitter
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " " +  author.innerHTML )
}
// method for copy
function copyText(){
    let text = document.getElementById("quote");
        console.log(text.innerText)
    navigator.clipboard.readText(text.innerText).then(() => {
        alert("Text coiped:" + text.innerText);
        
    }).catch(err => {
        console.error("Failed to copy text:",err);
    });
}