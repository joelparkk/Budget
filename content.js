// document.addEventListener('DOMContentLoaded', () => {
    let domImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1YNvE26NsQP_KumN6j5hVHq8qWvlCTFKfg&usqp=CAU",
    "https://www.thewrap.com/wp-content/uploads/2017/03/VinDiesel.jpg",
    "https://img.cinemablend.com/filter:scale/quill/6/8/5/b/5/e/685b5edda326d2bd77ca9709647e913d7875af4f.jpg?mw=600"
    ];

    const imgs = document.getElementsByTagName("img");
    const otherImgs = document.getElementsByClassName('s-image')
    const allImgs = [...imgs,...otherImgs];

    for(let i=0; i<imgs.length; i++){
        const randomImg = Math.floor(Math.random()*domImages.length);
        imgs[i].src = domImages[randomImg];
    }
    const headers = document.getElementsByTagName("h3");
    for(let i=0; i<headers.length; i++){
        headers[i].innerText = "You can't afford this!"
    }

    const prices = document.getElementsByClassName('s-item__price');
    for(let i=0; i<prices.length; i++){
        prices[i].innerText = "$10,000,000"
    }

// });

