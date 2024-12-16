let images = document.querySelectorAll('img');


images.forEach(image => {
    if (image.hasAttribute('alt')) {
        image.setAttribute('alt', 'Old');
    } else {
        image.setAttribute('alt', 'Elzero New');
    }
});


console.log(images)