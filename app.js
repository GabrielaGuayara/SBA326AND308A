const gallery = document.querySelector(".gallery")

console.log(gallery)

let newItem ="";


// const url = `https://api.thecatapi.com/v1/images/search?limit=10`;


const factory = (data) =>{
    data.forEach(element => {
       
        newItem += `
        <div class="card gallery" style="width: 18rem;">
            <img class="card-img-top" src="${element.image.url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <p class="card-text">${element.temperament}</p>
        </div>
      </div>
        
        `;
    })
        gallery.innerHTML = newItem;
    }

const url = `https://api.thecatapi.com/v1/breeds?limit=10`;
const api_key = "live_3ptZ6oXj6Gz7au1pT24sFNfqorps6olUzNrQnPOp9Gm1xxIEAFN8ZSdBhMph5EFc"
    
fetch(url,{headers: {
          'x-api-key': api_key
        }})
.then(resp => {
    if(!resp.ok){
        throw new Error('Error loading API')
    }
    return resp.json();
}).then(data =>{
  
    factory(data)
    console.log(data)
    

}).catch(e=>{
    console.log(e)
})


const addItem = document.querySelector(".addItemForm")
const schoolNameValue  = document.getElementById("school-name")
const textValue = document.getElementById("program")
