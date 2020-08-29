const ImgDescriptions = {
    'sticker': '<h3>Project of homemade juice sticker</h3>' +
        '<p>Project created for my mother in inkscape.</p>',
    'logo': '<h3>Project of logo for my Angular application</h3><p>Created in Inkscape.</p>'
}
function showGraphicsDetails(el) {
    const modal = document.querySelector('#graphics-details-modal');
    const desc = document.querySelector('.graphics-desc');
    const imgPath = el.getElementsByTagName('img')[0].getAttribute('src');
    document.querySelector('.graphics-img').src = imgPath;
    modal.style.display = "block";

    if(imgPath.includes('etykieta')) {
        desc.innerHTML = ImgDescriptions.sticker;
    } else {
        desc.innerHTML = ImgDescriptions.logo;
    }
}

function closeModal() {
    const modal = document.querySelector('#graphics-details-modal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.querySelector('#graphics-details-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}