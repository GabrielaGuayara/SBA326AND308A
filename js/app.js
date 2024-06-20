//Import functions from other js files
import { getAllCats} from "./fetchAPI.js"
import {getCatByBreed} from "./eventHandler.js"

//Exporting selector value
export const selector = document.getElementById("selection")

//Create html elements to select cats by breed by using a dropdown menu
const defaulOption = document.createElement("option")
const seeAllCats = document.createElement("option")


//Setting value and text for the default option
defaulOption.setAttribute("value", "default")
defaulOption.textContent = "Select a breed"
selector.append(defaulOption)

//Setting value and text for all the cats option
seeAllCats.setAttribute("value", "seeAll")
seeAllCats.innerText = "See All Cats"
selector.append(seeAllCats)



//Call getCatByBreed function
getAllCats();

//Call function to handle the event listener that triggers when user select an option from the dropdown menu
getCatByBreed()

