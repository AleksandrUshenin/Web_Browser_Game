import {createDucks} from './functions.js';
import { checkForLoss } from './functions.js';

let countDucks = 8;
let count = 0;
let shot = 10;
let points = 0;
const elCount = document.createElement('h1');
const elShots = document.createElement('h1');
createDucks(countDucks);
const allDucks = document.querySelectorAll('.duck_img');
const duckInfo = document.querySelector('.info');
const body = document.querySelector('body');

function clickDuck(el){
    points += 1500;
    elCount.textContent = ++count;
    el.target.src = 'https://free-png.ru/wp-content/uploads/2020/12/0e2298f675ff09a-0d51ceeb.png';
    setTimeout(() => {
        el.target.style.display = 'none';
    }, 70)
}
allDucks.forEach(obj => {
    obj.addEventListener('click', clickDuck);
});

body.addEventListener('click', (e) => {
    e.preventDefault();
    shot--;
    elShots.textContent = `shot:${shot}`;
    if (shot < 0){
        if (checkForLoss(shot, count, countDucks)){
            alert(`Game Over!\nPoints: ${points}`);
        }else{
            alert(`Game Win!\nPoints: ${points}`);
        }
        location.reload();
    }
});

elCount.textContent = count;
elShots.textContent = `shot:${shot}`;
duckInfo.append(elCount);
duckInfo.append(elShots);