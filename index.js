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

function myclickHandler(event){

    console.log(event.pageX)
    console.log(event.pageY)
}

clickPageHandler.addEventListener('mousemove',myclickHandler)

let removeEventHandler = document.querySelector('.removeEventHandler')

function myRemoveEventHandler(event){
    clickPageHandler.removeEventListener('mousemove',myclickHandler)
}
removeEventHandler.addEventListener('click', myRemoveEventHandler)


let counter = document.querySelector('.counter') 
let inputLength = document.querySelector('.inputLength') 

inputLength.addEventListener('keyup',function(){
   let innerSpan =  inputLength.getAttribute('maxlength') - inputLength.value.length
   counter.innerHTML=innerSpan
})


function scrollHandler(){
    console.log(document.documentElement.scrollTop)
}

document.addEventListener('scroll',scrollHandler)


function scrollToHandler(){
    window.scrollTo(0,0)
}

function scrollbYHandler(){
    window.scrollBy(0,-100)
}



function clickDataHandler(event){
  console.log(event.target.dataset.id , event.target.dataset.name);
}

let myAudio = document.querySelector('.myAudio')

function clickPlayaAudio(){
    myAudio.play()
    console.log('play shod')
}

function pauseAudio(){
    myAudio.pause()
    console.log('pause shod')
}

function durationAudio(){
    console.log('duration Audio is :',myAudio.duration)
}
function clickCurrentTimeAudio (){
    console.log('current time is :',Math.floor(myAudio.currentTime))
}
function clickPlayRateAudio(){
    myAudio.playbackRate= 2
    console.log('audio speed : 2X')
}

function clickDragHandler(event){
    event.dataTransfer.setData('dataEl',event.target.id)
}

function dropHandler(event){
let getElemId  = event.dataTransfer.getData('dataEl')
let getValue = document.getElementById(getElemId);
event.target.append(getValue)
}

function dragoverHandler(event){
  event.preventDefault()
}

let btnAnimate = document.querySelector('.btnAnimate')
let divAnimation = document.querySelector('.divAnimation')
let mypTag = document.querySelector('.mypTag')

let divAnimationStyle = getComputedStyle(divAnimation)

console.log(divAnimationStyle.width);


function animationHandler(){
    divAnimation.style.animation = ' animate 4s 3'
}



divAnimation.addEventListener('animationstart',function(){
    console.log('animation start')
    mypTag.innerHTML='animation start'
})
divAnimation.addEventListener('animationiteration',function(){
    console.log('animation repeat')
    mypTag.innerHTML='animation repeat'
    
})
divAnimation.addEventListener('animationend',function(){
    console.log('animation end')
    mypTag.innerHTML='animation end'

})


try{
    console.log(x);
}catch(err){
    console.log(err.name);
    console.log(err.message);
}

let btnCatch = document.querySelector('.btnCatch')
let inputCatch = document.querySelector('.inputCatch')
let pElem = document.querySelector('.pElem')

btnCatch.addEventListener('click',function(){

    try{
        if(inputCatch.value.length>8){
            throw 'this value is High'
        }else{
            throw 'this value is Low'
        }
    }catch(err){
        pElem.innerHTML = err 
    }finally{
        inputCatch.value = ''
        inputCatch.focus()
    }
})

let btnCssText = document.querySelector('.btnCssText')
let pElemCssText = document.querySelector('.pElemCssText')


function clickbtncssText(){
    // pElemCssText.style.color = 'white'  
    // pElemCssText.style.backgroundColor = 'red'  
    // pElemCssText.style.fontSize = '30px'  

    pElemCssText.style.cssText = 'color: white; background-color: red; font-size: 30px;'
}
btnCssText.addEventListener('click',clickbtncssText)