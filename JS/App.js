
let image = document.getElementById("image");
// profile.innerHTML = `<img src="img/aj-1.jpg" alt=""></img>`

let currentPos = 0;
let images = ["/img/aj-1.jpg", "/img/aj-2.jpg", "/img/aj-3.jpg", "/img/aj-6.jpg", "/img/aj-7.jpg", "/img/aj-4.jpg"]

function changeImage() {
    if (++currentPos >= images.length)
        currentPos = 0;
    // console.log(currentPos)
    image.src = images[currentPos];
}

setInterval(changeImage, 6000);

function getData() {
    let proCard = document.getElementById("proCard");
    url = "data.json"
    fetch(url).then((response) => {

        return response.json();

    }).then((data) => {
        // console.log(data);
        // console.log(data[0].title);
        // console.log(data[1].title);
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            // console.log(obj.title);
            proCard.innerHTML += `<div class="card" id="card-${i}">
            <h3>${obj.title}</h3>
            <img src="${obj.image}" alt="img here">
            <p>${obj.Discription}</p>
            <div>
            <button class="glow-on-hover"><a href="${obj.Visit}" target="_blank" >Visit</a></button>
            </div>
        </div>`
        }

    })
}

getData()
