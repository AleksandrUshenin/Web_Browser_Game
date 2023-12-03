export function createDucks(count) {
    const el = document.querySelector('body');
    for (let i = 0; i < count - 4; i++) {
        const elDuck = document.createElement('div');
        elDuck.classList.add('duck', `duck${i+5}`);

        const elDuckIn = document.createElement('input');
        elDuckIn.id = `duck${i+5}`;
        elDuckIn.classList.add('duck_checkbox');
        elDuckIn.setAttribute('type', 'checkbox');

        const elDuckLabel = document.createElement('label');
        elDuckLabel.setAttribute('for', `duck${i+5}`);

        const elDuckImg = document.createElement('img');
        elDuckImg.classList.add('duck_img');
        elDuckImg.src = 'https://thumbs.gfycat.com/EasyMerryAnteater-size_restricted.gif';
        elDuckImg.alt = 'duck';

        elDuckLabel.appendChild(elDuckImg);
        elDuck.appendChild(elDuckIn);
        elDuck.appendChild(elDuckLabel);
        el.prepend(elDuck);
        
    }
}

export function checkForLoss(shot, count, countDucks){
    if (shot < 0){
        if (count != countDucks){
            return true;
        }
    }
    return false;
}