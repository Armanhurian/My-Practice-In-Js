let myTitle = document.getElementById('title')

let mylist = document.querySelectorAll('.mydev')

//let ullist =document.getElementsByTagName('li')

//let firstlist =document.querySelector('.mydev')

//let list =document.querySelectorAll('.mydev')

//console.log(list)

console.log(mylist[0].setAttribute('id','myHtml'))

console.log(mylist[0].getAttribute('id'))

myTitle.style.color='blue'

myTitle.style.fontWeight='bold'

myTitle.style.fontSize='40px'

mylist[0].style.color='red'

//console.log(myTitle.innerHTML)

//console.log(myTitle.innerText)

console.log(myTitle.textContent)

let selectBox=document.getElementById('selectBox')

console.log(selectBox.value)