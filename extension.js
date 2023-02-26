/*First way */
const outputEl = document.getElementById("output-el")
let openEl = document.getElementById("open-el")
const inputEl = document.getElementById("input-el")
let savedEl = document.getElementById("saved-el")
let boxBtn = document.getElementById("box-btn")
let inputBtn = document.getElementById("input-btn")
let savedBtn = document.getElementById("saved-btn")
let myLeads = []
let linkslist = ""
function boxOpen(){
    openEl.textContent = "I want to open the box!! ::)"
}

function saving(){
    myLeads.push(inputEl.value)
    //savedEl.innerHTML = listitems
    //outputEl.textContent = myLeads
    //getval()
}
inputBtn.addEventListener("click", saving)

boxBtn.addEventListener("click", function(){
    return boxOpen()
}) 

function getval(){
    for(let i=0; i< myLeads.length; i++){
        linkslist = "<li>"+myLeads[i]+"</li>"
        savedEl.innerHTML += "<li>"+myLeads[i]+"</li>"//innerHtml enables js identify the use of html tags within it. 
       // /*could also use*/ /*document.createElement(li)*/
        //li.textContent = myLeads[i]
        //savedEl.append(li) 
  //  }
   //
   //const inputEl = document.querySelector('input-el')
   //return inputEl.value
}
savedBtn.addEventListener("click",getval)*/

/*second way */
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const savedEl = document.getElementById("saved-el")

function saving(){
    myLeads.push(inputEl.value)
    getval()
    inputEl.value = " "
}
inputBtn.addEventListener("click", saving)
function getval(){
    let linkslist = ""    
    for(let i=0; i< myLeads.length; i++){
        //linkslist += "<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        linkslist += `<li>
                        <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                        </a>
                      </li>`
    }
    savedEl.innerHTML = linkslist
}






/*Third way simplified*/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const savedEl = document.getElementById("saved-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    savingLeads()
})

function savingLeads(){
    let listItems = ""
    for(let i=0; i< myLeads.length; i++){
        listItems += "<li>"+myLeads[i]+"</li>"
}
savedEl.innerHTML = listItems
}*/







let divEl = document.getElementById("div-el")
let buymessageEl = document.getElementById("buymessage-el")
divEl.innerHTML = "<button id='btn-buy' onclick='buy()'>BUY</button>"
buyBtn = document.getElementById("btn-buy")

buyBtn.addEventListener("click",function(){
    return buymessageEl.textContent = "Buy the item"
})
function buy(){
    divEl.innerHTML += "<p>Thank you for buying</p>"
}
