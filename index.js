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

let modal = document.querySelector('.modal') 

let textUserError =document.querySelector('.textUserError')

let textPassError =document.querySelector('.textPassError')




function keyUserLog(){
    if(username.value.length<12){
        textUserError.style.display='block'
        textUserError.innerHTML =' یوزرنیم کمتر از 12 کارکتر دارد ' 
        textUserError.style.color='red'
    }else{
        textUserError.style.display='block'
        textUserError.innerHTML =' یوزرنیم به حد نصاب رسید ' 
        textUserError.style.color='green'

    }
}

function keyPassLog(){

    if(password.value.length<8){
    textPassError.style.display='block'
    textPassError.innerHTML =' پسوورد کمتر از 8 کارکتر دارد ' 
    textPassError.style.color='red'
    }else{
    textPassError.style.display='block'
    textPassError.innerHTML =' پسوورد به حد نصاب رسید ' 
    textPassError.style.color='green'   
    }
}


function checkLogin(){
    if(username.value.length <12 || password.value.length<8){
         modal.style.background='red'
         modal.innerHTML='username or password is not defind'
         modal.style.display='block'
         setTimeout(function(){
         modal.style.display='none'   
         },'3000')
    }else{
         modal.style.background='green'
         modal.innerHTML='your join is successfully'   
         modal.style.display='block'
         setTimeout(function(){
         modal.style.display='none'   
         },'3000')
    }
}

let redValue , greenValue , blueValue

setInterval(function(){
    redValue = Math.floor(Math.random()*255)
    greenValue = Math.floor(Math.random()*255)
    blueValue = Math.floor(Math.random()*255)

    document.body.style.backgroundColor='rgb('+ redValue +','+ greenValue + ','+ blueValue +')' 
},2000)


function onChangeContries(){

   console.log(selectBox.value) 
}

let citySelect = document.getElementById('CitySelect')

let checkCities = document.getElementById('CheckCities')

let objCity ={
    Tehran :['gharchak','varamin','karaj','rey'],
    Mazandaran :['Babol','Babolsar','Amol','Sari','Nowshahr'],
    Gilan :['Anzali','Lahijan','Talesh','Rasht'],
    Golestan :['Gorgan','Gonbad']
}

 

 console.log(checkCities)

 citySelect.addEventListener('change',function(){

    if(citySelect.value==='Please Select'){
        checkCities.innerHTML=''
        checkCities.innerHTML += '<option value:"item">Select City</option>'


    }else{

        console.log(objCity[citySelect.value])
    
        checkCities.innerHTML=''
        
        objCity[citySelect.value].forEach(function(item){
            checkCities.innerHTML += '<option value:"item">' + item + '</option>'
        })
    }
    

})

let submitInput = document.getElementById('submitInput')

submitInput.addEventListener('submit', function(event){
   event.preventDefault()
   console.log(event)
})

let h1Title = document.getElementById('h1title')

console.log(h1Title.nodeType)

let head1 = document.getElementById('head1')
let head2 = document.getElementById('head2')
let head3 = document.getElementById('head3')

console.log(head1.nextElementSibling)


let liList = document.querySelectorAll('.li-list')

let returnItem = liList.forEach(function(item){
  
  item.addEventListener('click',function(event){
    event.target.remove()
  })
})

function oncontextmenuHandler(){
    console.log('right click')
}

let myTextArea = document.getElementById('myTextArea')

function copyHandler(event){

  console.log('copy')   
}
function cutHandler(event){
  console.log('cut') 
}
function pasteHandler(event){
  console.log('paste') 
}

////میتونیم با preventdefault  جلوی کار رو بگیریم چون که cancelable true هست

myTextArea.addEventListener('copy',copyHandler)
myTextArea.addEventListener('cut',cutHandler)
myTextArea.addEventListener('paste',pasteHandler)


let clickPageHandler = document.querySelector('.clickPageHandler')

clickPageHandler.addEventListener('click',function(event){
 console.log(event.pageX)
 console.log(event.pageY)
})