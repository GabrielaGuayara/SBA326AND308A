//Export class to create comments
export class Comment{
    //constructor to initialize the instances of the class comment
    constructor(userName, occupation, message){
        this.userName = userName;
        this.occupation = occupation;
        this.message = message
    }

    //Method to add html elements 
    addHTML(){
        return ` <div class="col-md-4 rounded px-4 shadow" style="background-color:hsl(217, 19%, 35%);">
        <div class="d-flex gap-2 mt-3">
        <div class="d-flex flex-column justify-content-center">
        <h6>${this.userName}</h5>
        <p>${this.occupation}r</p>
        </div>
        </div>
        <p class="text quoutes my-0 py-0" style="font-weight: 600;">${this.message}</p>
        <p class="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa! Cum ducimus delectus, reprehenderit corrupti odit tenetur nostrum dolorum molestias dolores.
        </p>
    
    </div>`
    }
}
