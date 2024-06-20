//Import selector variable from app.js
import { selector } from "./app.js";

//Store the API url and key in immutable variables
const url = `https://api.thecatapi.com/v1/breeds?limit=6`;
export const api_key = "live_3ptZ6oXj6Gz7au1pT24sFNfqorps6olUzNrQnPOp9Gm1xxIEAFN8ZSdBhMph5EFc"


//Export getAllCats function to be used in other js files
export async function getAllCats(){

    try{

        //Getting data from the API by using the fetch function
       const resp = await fetch(url,{
        headers: {
            'x-api-key': api_key
          }})
            if(!resp.ok){
                throw new Error('Error loading API') }
        
            //Extract json object from resp and store it in the data variable
            const data = await resp.json();
            
            //Use data from the API to create the options for the dropmenu
            data.forEach(breed =>
                {
                    const option = document.createElement('option')
                    option.setAttribute('value', breed.id)
                    option.innerText = breed.name;
                    selector.append(option)
                })

            //Call the factory data to generate cards and display them in the web application
            factory(data)

            //Handle error with catch. Display the error message in the console
            }catch(e){
                console.log(e.message)
                throw e;
            }}
    

//Function that takes as parameter the fetched data from the API to display cards with images, names and descriptions
export function factory(data){
    let newCat = "";
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

        //Cache html element that will container the new cards
        const gallery = document.querySelector(".gallery")
        return gallery.innerHTML = newCat;
        }
    