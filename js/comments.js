class Comment{
    constructor(userName, occupation, message){
        this.userName = userName;
        this.occupation = occupation;
        this.message = message
    }

    addHTML(){
        return ` <div class="col-md-4 rounded px-4 shadow" style="background-color:hsl(217, 19%, 35%);">
        <div class="d-flex gap-2 mt-3">
        <div class="d-flex flex-column justify-content-center">
        <h6>${this.userName}</h5>
        <p>${this.profession}r</p>
        </div>
        </div>
        <p class="text quoutes my-0 py-0" style="font-weight: 600;">${this.msg}</p>
        <p class="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa! Cum ducimus delectus, reprehenderit corrupti odit tenetur nostrum dolorum molestias dolores.
        </p>
    
    </div>`
    }
}


document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('commentsForm')
    const newCommentsSec = document.getElementById('newComments')

    console.log(newCommentsSec)
    let newComments = [];


    form.addEventListener('submit',(e) => {
    e.preventDefault();
    let userName = document.getElementById('name').value;
    let profession = document.getElementById('occupation').value;
    let msg = document.getElementById('message').value;

    let comment = new Comment(userName, profession, msg)
    newComments.push(comment)
    newCommentsSec.innerHTML = newComments.map(comment => comment.addHTML())
    newComments.join('');

    // newCommentsSec.innerHTML = newComments;

    window.alert('Form submitted sucessfully')

    form.reset();

})


})
