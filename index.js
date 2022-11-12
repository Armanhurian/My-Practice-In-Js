let myTitle = document.getElementById('title')

let mylist = document.querySelectorAll('.mydev')

//let ullist =document.getElementsByTagName('ul')

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

let liCreate= document.createElement('li')

liCreate.innerHTML='PhP'

let ullist= document.querySelector('ul')

console.log(ullist)

//ullist.append(liCreate)

ullist.appendChild(liCreate)

function clickFunc() {
    
    myTitle.style.color='green'
 
}

let bulbOff = document.getElementById('bulboff')

let btn =document.getElementById('btn')

let bulbflag = false

function turnOffOrOn (){
    if(!bulbflag){
        bulbOff.setAttribute('src','pic/pic_bulbon.gif')
        btn.innerHTML = 'Turn Off'
        bulbflag=true
    }else{
        bulbOff.setAttribute('src','pic/pic_bulboff.gif')
        btn.innerHTML = 'Turn On'
        bulbflag=false
        
    }
}

let username = document.getElementById('username')

let password = document.getElementById('password')

function checkLogin(){
    if(username.value.length <12 || password.value.length<8){
      alert('یوزرنیم یا پسورد شما اشتباه است')
    }else{
      alert('شما وارد شدید ')
    }
}

