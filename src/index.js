fetch('http://localhost:3000/pups')
    .catch(error => console.log("error", error))
    .then(res => res.json())
    .then(obj => pupsHandle(obj))


function pupsHandle(obj) {
    for (let each of obj) {
        pupMaker(each)
    }
}

function pupMaker(each) {
    const dogBar=document.querySelector('#dog-bar')
    
    let p=document.createElement('p')
    let span=document.createElement('span')
    
    span.innerText=each.name
    span.addEventListener('click', barClick)
    span.dataset.id=each.id
    span.dataset.image=each.image
    span.dataset.name=each.name
    span.dataset.isGoodDog=each.isGoodDog
    dogBar.appendChild(span)
}

function barClick(e) {
    const pupCard=document.querySelector('#dog-info')
    while (pupCard.hasChildNodes()) {
        pupCard.removeChild(pupCard.firstChild)
    }

    let div=document.createElement('div')
    let img=document.createElement('img')
    let h3=document.createElement('h3')
    let butt=document.createElement('button')

    butt.onclick= switch()
    img.src=e.target.dataset.image
    h3.innerText=e.target.dataset.name
    if (e.target.dataset.isGoodDog) {
        butt.innerText="Good Dog!"
    } else {
        butt.innerText="Bad Dog!"
    }

    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(butt)
    pupCard.appendChild(div)
}

function switch() {
    if  (parentElement.dataset.isGoodDog) {
        parentElement.dataset.isGoodDog=false
        barClick(parentElement.parentElement)
    } else {
        parentElement.dataset.isGoodDog=true
        barClick(parentElement.parentElement)
    }
}