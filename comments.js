document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('commentsForm')
    const newCommentsSec = document.getElementById('newComments')

    console.log(newCommentsSec)
    // let newComments ="";


    form.addEventListener('submit',(e) => {
    e.preventDefault();
    let userName = document.getElementById('name').value;
    let profession = document.getElementById('occupation').value;
    let msg = document.getElementById('message').value;
    // let img = document.getElementById('image').files[0]


    newComments +=`
    <div class="col-md-4 rounded px-4 shadow" style="background-color:hsl(217, 19%, 35%);">
        <div class="d-flex gap-2 mt-3">
        <div class="d-flex flex-column justify-content-center">
        <h6>${userName}</h5>
        <p>${profession}r</p>
      </div>
         </div>
         <p class="text quoutes my-0 py-0" style="font-weight: 600;">${msg}</p>
         <p class="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa! Cum ducimus delectus, reprehenderit corrupti odit tenetur nostrum dolorum molestias dolores.
        </p>
    
  </div>
    `
    // newCommentsSec.innerHTML = newComments;

    window.alert('Form submitted sucessfully')

    form.reset();

})


})
