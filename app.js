const gallery = document.querySelector(".gallery")
// const dropDowm = document.querySelector("dropdown")
const selector = document.getElementById("selection")
const defaulOption = document.createElement("option")
defaulOption.setAttribute("value", "default")
defaulOption.textContent = "Select a breed"
selector.append(defaulOption)

let newCat ="";



// const url = `https://api.thecatapi.com/v1/images/search?limit=10`;

const url = `https://api.thecatapi.com/v1/breeds?limit=6`;
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

        const seeAllCats = document.createElement("option")
        seeAllCats.setAttribute("value", "seeAll")
        seeAllCats.innerText = "See All Cats"
        selector.append(seeAllCats)

        selector.addEventListener('change', function () {
           
            const selectedBreedId = this.value; // `this` refers to the select element
    
            if(selectedBreedId === 'seeAll'){
                newCat = "";
                factory(data)
            }else{
                const findBreed = data.find(breed => breed.id === selectedBreedId);
                console.log(findBreed)
                    if (findBreed) {
                        
                        data.forEach(breed => {
                            newCat = `
                            <div class="card m-2" style="width: 18rem;">
                                <img class="card-img-top" src="${findBreed.image.url}" style="height: 40%; weight: 100%" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${findBreed.name}</h5>
                                    <p class="card-text">${findBreed.description}</p>
                                    <p class="card-text" style="font-weight: 500">${findBreed.temperament}</p>
                                </div>
                            </div>`;
                        });
            
                        // Assuming you have an element with id 'breedContainer' where you want to display the cards
                        gallery.innerHTML = newCat;

                        }}})
}
                }catch(error){
            console.log(error)
        }

}

const factory = (data) =>{

    data.forEach(element => {
       
        newCat += `
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
        gallery.innerHTML = newCat;
    }

getDateByBreed();

const form = document.getElementById('commentsForm')



form.addEventListener('submit',(e) => {

    e.preventDefault();
    let userName = document.getElementById('name').value;
    let profession = document.getElementById('job').value;
    let msg = document.getElementById('message').value;
    let img = document.getElementById('image').files[0]
    console.log(form)
    console.log(userName)
    console.log(profession)
    // console.log(img)

})




