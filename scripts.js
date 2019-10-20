const image = document.querySelector('.images');
const p= image.querySelector('p');
const projects = document.querySelectorAll('.project');
//const p1 = projects.querySelector('.p1');
const email = document.querySelector('.email');

const backgrounds = ['images/cat.jpg', 'images/sport.jpg', 'images/Roma.jpg'];
// const contents = ['"Build your own dreams, or someone else will hire you to build theirs.” — Farrah Gray', '"I would rather die of passion than of boredom" - Vincent van Gogh','"nothing is really work unless you would rather be doing something else"- James M.Barrie'];

email.addEventListener('click', e => {
    email.textContent = 'julia.joanna.hardy@gmail.com'
});

let imgId = 0;
function changebackground(){
    if(++imgId >= backgrounds.length){
        imgId = 0;
    }
    $(image).animate({opacity:0},1000, function(){
        $(image).css("background-image", "url('"+ backgrounds[imgId] + "')").animate({opacity:1},1000);
    })
    
    
    // $(p).animate({opacity:0},1000, function(){
    //     $(p).animate({opacity:1},1000);
    //     p.innerHTML = `${contents[imgId]}`
    //
    // })
    
    
}


setInterval(changebackground, 10000);

