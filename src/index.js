function renderOneRamen (ramen) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${ramen.imgUrl}"> </div> `

    document.querySelector('#ramen-list').appendChild(card)
}


function noodlePics() {
    fetch('http://localhost:3000/ramens')
    .then((res) => res.json())
    .then(ramenData => ramenData.forEach(ramen => renderOneRamen(ramen)));
}

function render() {
    noodlePics ()
    console.log('after')
}

render();