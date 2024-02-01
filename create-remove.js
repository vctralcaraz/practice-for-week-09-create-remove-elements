/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const urlParts = url.split('/');
        const breed = urlParts[4];
        // console.log(breed);

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const dogCard = document.createElement('li');
        const figure = document.createElement('figure');
        const dogImage = document.createElement('img');
        const figCaption = document.createElement('figcaption');
        
        dogCard.appendChild(figure);
        figure.appendChild(dogImage);
        figure.appendChild(figCaption);

        dogImage.setAttribute('src', url);
        figCaption.innerText = breed;

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        document.body.querySelector('.gallery ul').appendChild(dogCard);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDogCard = document.body.getElementsByClassName('gallery')[0].children[0].children[0];
    // console.log(firstDogCard)

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstDogCard.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const lastDogCard = document.body.getElementsByClassName('gallery')[0].children[0].children;
    console.log(lastDogCard);
    const last = lastDogCard[lastDogCard.length - 1];

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    last.remove();
});