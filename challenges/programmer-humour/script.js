const imgeEl = document.getElementById("funny-img");
fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        imgeEl.setAttribute('src', data.img);
        imgeEl.setAttribute('alt', data.alt);
    })
    .catch((err) => console.error(err));

