const openFormButton = document.getElementById('openFormButton');
const postForm = document.getElementById('postForm');
const closeFormButton = document.getElementById('closeFormButton');


openFormButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    postForm.style.display = 'flex';
});


closeFormButton.addEventListener('click', function(event) {
    event.preventDefault();
    postForm.style.display = 'none';
});
