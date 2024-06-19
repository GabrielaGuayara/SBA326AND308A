const gallery = document.querySelector(".gallery")
// const dropDowm = document.querySelector("dropdown")
const selector = document.getElementById("selection")
const defaulOption = document.createElement("option")
defaulOption.setAttribute("value", "default")
defaulOption.textContent = "Select a breed"
selector.append(defaulOption)

let newItem ="";


// const url = `https://api.thecatapi.com/v1/images/search?limit=10`;

const url = `https://api.thecatapi.com/v1/breeds?limit=9`;
const api_key = "live_3ptZ6oXj6Gz7au1pT24sFNfqorps6olUzNrQnPOp9Gm1xxIEAFN8ZSdBhMph5EFc"
    
async function getDateByBreed(){

try{
   const resp = await fetch(url,{
    headers: {
        'x-api-key': api_key
      }})
        if(!resp.ok){
            throw new Error('Error loading API') }
    
        
    const data = await resp.json();
       
    if (Array.isArray(data) && data.length > 0) {
        factory(data); 

        data.forEach(breed =>
        {
            const option = document.createElement('option')
            option.setAttribute('value', breed.id)
            option.innerText = breed.name;
            selector.append(option)
        })

        selector.addEventListener('change', function() {
           
            const selectedBreedId = this.value; // `this` refers to the select element
            const findBreed = data.find(breed => breed.id === selectedBreedId);
    
            if (findBreed) {
                
                data.forEach(breed => {
                    newItem = "";
                    newItem = `
                    <div class="card m-2" style="width: 18rem;">
                        <img class="card-img-top" src="${breed.image.url}" style="height: 40%; weight: 100%" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${breed.name}</h5>
                            <p class="card-text">${breed.description}</p>
                            <p class="card-text" style="font-weight: 500">${breed.temperament}</p>
                        </div>
                    </div>`;
                });
    
                // Assuming you have an element with id 'breedContainer' where you want to display the cards
                gallery.innerHTML = newItem;

                console.log(findBreed)
                }})
            } else {
                console.log('Please select a valid breed');
            }

        }catch(error){
            console.log(error)
        }

}

const factory = (data) =>{
    data.forEach(element => {
       
        newItem += `
        <div class="card m-2" style="width: 18rem;">
            <img class="card-img-top" src="${element.image.url}" style="height: 40%; weight: 100%"alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <p class="card-text" style="font-weight: 500">${element.temperament}</p>
        </div>
      </div>
        
        `;
    })
        gallery.innerHTML = newItem;
    }

getDateByBreed();

