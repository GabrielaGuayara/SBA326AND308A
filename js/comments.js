import { Comment } from "./commentClass.js";

//Event listener that triggers when the DOM is ready
document.addEventListener('DOMContentLoaded', function(){

    //Select and cache form and comments section from html
    const form = document.getElementById('commentsForm')
    const newCommentsSec = document.getElementById('newComments')

    //Empty array to store new comments
    let newComments = [];

    //Event listener that triggers when user select one option from dropdown menu
    form.addEventListener('submit',(e) => {
        e.preventDefault();

        //Cache values from form inputs
        let userName = document.getElementById('name').value;
        let profession = document.getElementById('occupation').value;
        let msg = document.getElementById('message').value;

        //Create new comments by using classes
        let comment = new Comment(userName, profession, msg)

        //Adding the new comment to the newComments Array
        newComments.push(comment)

        //Added the new html element into te new comments section
        newCommentsSec.innerHTML = newComments.map(comment => comment.addHTML())
        newComments.join('');

        //Display a confirmation message
        window.alert('Form submitted sucessfully')
        form.reset();

})


})
