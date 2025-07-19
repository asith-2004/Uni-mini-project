const a = document.querySelector('#submit');
const inputElement = document.querySelector('#user-in');
const textElement = document.querySelector('#newMessage');
a.addEventListener('click',()=>{
    
    if(inputElement.value && textElement.value){
        alert('Comment Submitted');
    } else{
        alert('Fill all of this comment section');
    }
})
