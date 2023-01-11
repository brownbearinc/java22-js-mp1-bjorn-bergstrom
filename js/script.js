const colorRow = ['Rad 1','Rad 2','Rad 3','Rad 4','Rad 5']
const number = [['0','1','2','3','4','5','6','7','8','9'], ['9','8','7','6','5','4','3','2','1','0'] ,['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']]

//___________________________________[ ROWS ]___________________________________

let hue = 100
let index = 4

for(const arr of colorRow) {
    hue += 20
    index += 6

    // Create & add Ul to Body
    const ul = document.createElement('ul')
    document.body.append(ul)

    // Change style of Ul
    ul.innerText = arr
    ul.style.color = 'hsl(250,100%,70%)'
    ul.style.backgroundColor = `hsl(${hue},100%,85%)`
    ul.style.textAlign = 'center'
    ul.style.font = `bold ${index}px time new roman`
}

// ___________________________________[ MAIN ]___________________________________

// Create Main & add to body
const main = document.createElement('main')
document.body.append(main)


// ----------[MAIN DISPLAY]------------

main.style.display = 'flex'
main.style.justifyContent = 'space-around'
main.style.alignContent = 'center'

// ----------[MAIN OUTLINE]------------

main.style.border = 'thin solid black'
main.style.padding = '10%'

// Om man vill ha mer ordning kan man tilldela klasser
//ul.className = 'box'



// -------------[ARTICLE 1]-------------

// Create Article & add to Main
const article1 = document.createElement('article')
main.append(article1)

// -----------[ARCTILE 1 FLEX]-----------

article1.style.display = 'flex'
article1.style.flexDirection = 'column'
article1.style.alignItems = 'start'

// ------------[ART.1 BORDER]------------

article1.style.border = '8px solid hsl(268, 100%, 80%)'


// ------------[ART.1 LISTBOX]------------

for (let i = 0; i < 10; i++) {

    const lbl = document.createElement('label')
    article1.append(lbl)
    
    lbl.style.width = '50px'
    lbl.style.display = 'flex'
    lbl.style.justifyContent = 'start'
    lbl.innerText = number[0][i]

    if (i==4) {
        lbl.style.backgroundColor = 'hsl(268, 100%, 80%)'
        lbl.style.color = 'white'
    } else if (i%2==0) {
        lbl.style.backgroundColor = 'black'
        lbl.style.color = 'white'
    }
}



// -------------[ARTICLE 2]-------------

const article2 = document.createElement('article')
main.append(article2)

// -----------[ARTICLE 2 FLEX]-----------

article2.style.display = 'flex'
article2.style.flexDirection = 'column'
article2.style.alignItems = 'center'

// ----------[ARTICLE 2 BORDER]----------

article2.style.border = '8px solid hsl(268, 100%, 80%)'

// ----------[ARTICLE 2 LISTBOX]---------


for (let i = 0; i < 10; i++) {

    const lbl = document.createElement('label')
    article2.append(lbl)
    
    lbl.style.width = '50px'
    lbl.style.display = 'flex'
    lbl.style.justifyContent = 'center'
    lbl.innerText = number[1][i]

    if (i==1) {
        lbl.style.backgroundColor = 'hsl(268, 100%, 80%)'
        lbl.style.color = 'white'
    } else if (i%2==1) {
        lbl.style.backgroundColor = 'black'
        lbl.style.color = 'white'
    }
}



// -------------[ARTICLE 3]-------------

const article3 = document.createElement('article')
main.append(article3)

// -----------[ARCTILE 3 FLEX]-----------

article3.style.display = 'flex'
article3.style.flexDirection = 'column'

// ----------[ARTICLE 3 BORDER]----------

article3.style.border = '8px solid hsl(268, 100%, 80%)'

// ----------[ARTICLE 3 LISTBOX]---------

for (let i = 0; i < 10; i++) {

    const lbl = document.createElement('label')
    article3.append(lbl)
    
    lbl.style.width = '50px' 
    lbl.style.display = 'flex'
    lbl.style.justifyContent = 'end'
    lbl.innerText = number[2][i]


    if (i==5) {
        lbl.style.backgroundColor = 'hsl(268, 100%, 80%)'
    } else if (i%2==0) {
        lbl.style.backgroundColor = 'black'
        lbl.style.color = 'white'
    }
}