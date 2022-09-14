let elCards = document.querySelector(".cards")

for (let i = 0; i < pokemons.length; i++) {
    let newCard = document.createElement('div')
    let newImg = document.createElement("img")
    let newCardTop = document.createElement("div")
    let newTitle = document.createElement("h2")
    let newIcon = document.createElement("i")
    let newDesc = document.createElement("p")
    let newBottom = document.createElement("div")
    let newHeight = document.createElement("div")
    let newWeight = document.createElement("div")
    let newSpan1 = document.createElement("span")
    let newSpan2 = document.createElement("span")

    elCards.appendChild(newCard)
    newCard.appendChild(newImg)
    newCard.appendChild(newCardTop)
    newCardTop.appendChild(newTitle)
    newCardTop.appendChild(newIcon)
    newCard.appendChild(newDesc)
    newCard.appendChild(newBottom)
    newBottom.appendChild(newWeight)
    newBottom.appendChild(newHeight)
    newDesc.appendChild(newSpan1)
    newDesc.appendChild(newSpan2)

    newImg.setAttribute("src", pokemons[i].img)
    newTitle.textContent = pokemons[i].name
    if (typeof pokemons[i].type[1] == "string") {
        newSpan1.textContent = `${pokemons[i].type[1]} `
        console.log(pokemons[i].type[0]);
    }
    if (typeof pokemons[i].type[0] == "string") {
        newSpan2.textContent = pokemons[i].type[0]
        console.log(pokemons[i].type[0]);
    }
    newHeight.textContent = pokemons[i].height
    newWeight.textContent = pokemons[i].weight


    newCard.classList.add("card")
    newIcon.classList.add("fa-regular")
    newIcon.classList.add("fa-heart")
    newCardTop.classList.add("card__top")
    newImg.classList.add("card__img")
    newBottom.classList.add('card__top')
    newHeight.classList.add("age")
    newWeight.classList.add("weight")

    // console.log(pokemons[i].type);

    // newDesc.classList.add("card__desc")
}