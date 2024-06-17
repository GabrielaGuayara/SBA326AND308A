const factList = document.querySelector(".facts-list")

console.log(factList)

const url = "https://api.thecatapi.com/v1/facts";
const apiKey = "live_3ptZ6oXj6Gz7au1pT24sFNfqorps6olUzNrQnPOp9Gm1xxIEAFN8ZSdBhMph5EFc"

fetch(url,{
    headers:{
        'x-api-key': apiKey
    }
}).then(resp => {
    if(!resp.ok){
        throw new Error('Error loading API')
    }
    return reportError.json();
}).then(data =>{
    console.log(data)
})