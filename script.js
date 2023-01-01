var container = document.querySelector(".container")



var create_row = document.createElement('div')
create_row.setAttribute('class','row')
create_row.classList.add('mt-5')
container.append(create_row)
for(var i = 0; i <21; i++) {
    
async function Mixed(){


var url ='https://api.chucknorris.io/jokes/random'

var fetch_url = await fetch(url)
var json_fetch = await fetch_url.json()

var create_col_md_4 = document.createElement('div')
create_col_md_4.setAttribute('class','col-md-4')
// create_col_md_4.classList.add('mb-5')
create_row.append(create_col_md_4)


var create_card = document.createElement('div')
create_card.setAttribute('class','card')
create_card.classList.add('jokecards')
// create_card.setAttribute('style','max-width: 18rem')
create_card.classList.add('bg-dark')
create_card.classList.add('text-white')
create_card.classList.add('mt-5')
// // create_card.style.width='20rem'
create_col_md_4.append(create_card)


var create_header = document.createElement('div')
create_header.setAttribute('class','card-header')
create_header.classList.add('text-center')
create_header.classList.add('bg-black')
create_header.classList.add('p-1')
create_header.innerText = "Jokes"
create_card.append(create_header)


var create_card_body = document.createElement('div')
create_card_body.setAttribute('class','card-body')
create_card.append(create_card_body)

var create_card_text1 = document.createElement('div')
create_card_text1.setAttribute('class','card-text')
create_card_text1.classList.add('text-center')
create_card_text1.classList.add('mb-2')
create_card_text1.classList.add('m-2')
create_card_text1.textContent= json_fetch.value
create_card_body.append(create_card_text1)



    console.log(json_fetch.value);






}

Mixed()








}


