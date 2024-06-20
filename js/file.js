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
