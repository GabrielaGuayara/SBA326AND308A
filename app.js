const factList = document.querySelector(".list-of-schools")

console.log(factList)

let newItem ="";

const url = "https://data.cityofnewyork.us/resource/ydbx-4ufw.json?$limit=10";

const factory = (data) =>{
    data.forEach(element => {
       
        newItem += `
        <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${element.school_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">${element.program}</p>
        <a href="#" class="card-link">Edit</a>
        <a href="#" class="card-link">Delete</a>
      </div>
        
        `;
    })
        factList.innerHTML = newItem;
    }


fetch(url)
.then(resp => {
    if(!resp.ok){
        throw new Error('Error loading API')
    }
    return resp.json();
}).then(data =>{
  
    factory(data)
    

}).catch(e=>{
    console.log(e)
})


const addItem = document.querySelector(".addItemForm")