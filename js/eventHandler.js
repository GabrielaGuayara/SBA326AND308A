//Import functions and variables from other js files
import { getAllCats} from "./fetchAPI.js"
import { api_key } from "./fetchAPI.js";
import { selector } from "./app.js";

//Export eventHandler function
export function getCatByBreed() {

  //Add event listener to selector to get cats by Breed
  selector.addEventListener('change', async function () {
    
    //Varible that stores the value of the current selected element
    const selectedBreedId = this.value;

      //If the user select 'See All Cats' option, the getAllCats function will be called
      if (selectedBreedId === 'seeAll') {
          // Re-fetch data to display all cats
          getAllCats();

      } else {
          //Getting data of cats by breed selected by the user
          try {
              const resp = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreedId}&limit=1`, {
                  headers: {
                      'x-api-key': api_key
                  }
              });

                if(!resp.ok){
                  throw new Error('Error loading API') 
                }

              //Extract json object from resp and store it in the data variable
              const data = await resp.json();
              factoryTwo(data)

                console.log(data)

                //Handling error with catch
                } catch (error) {
                  console.log(error);
          }
         }
      });

    }


//Function that takes as parameter the fetched data from the API to display a card with a image, name and description
function factoryTwo(data){
  let newCat = "";
  newCat += `
      <div class="card m-2" style="width: 18rem;">
          <img class="card-img-top" src="${data[0].url}" style="height: 40%; weight: 100%"alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${data[0].breeds[0].name}</h5>
          <p class="card-text">${data[0].breeds[0].description}</p>
          <p class="card-text" style="font-weight: 500">${data[0].breeds[0].temperament}</p>
      </div>
      </div>
      
      `;

      //Select html element that will container the new card
      const gallery = document.querySelector(".gallery")
      return  gallery.innerHTML = newCat;

}


