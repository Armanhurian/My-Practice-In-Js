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


document.documentElement.style.setProperty('--test-color' , 'green')
console.log(document.documentElement.style.getPropertyValue('--test-color'));

window.addEventListener('scroll',function(){
    console.log(window.scrollY);
    console.log(document.body.clientHeight);
    console.log(window.innerHeight);
    
    console.log(document.body.clientWidth);
    console.log(window.innerWidth);
})
//////////////////////////////////////////////
// function User(){
//     console.log('yes');
// }
// User()

let User = ()=>{
    console.log('yes');
}

User()
///////////////////////////////////////////////
// let sum = (num1,num2)=>{
//     return (num1 + num2)*4
// }
let sum = (num1,num2) => (num1 + num2) *4 

console.log('sum:',sum(4,2));

//////////////////////////////////////////////

let name = (id , name) => ({id : id , name : name})
console.log(name(23,'arman'));

/////////////////////////////////////////////

let arrowExArray = [
    {id:1 , name :'arman', age : 23},
    {id:2 , name :'ali', age : 21},
    {id:3 , name :'amin', age : 26},
    {id:4 , name :'reza', age : 38},
]

arrowExArray.forEach((user)=> console.log(user.name))

let mainUserFind = arrowExArray.find((user)=>user.name==='arman')
console.log(mainUserFind);

////////////////////////////////////////////////

// function showValue(...arguments){
    
//     console.log(arguments);
//     return arguments.reduce((prev,current)=>prev+current)
//     //console.log(arguments[0]+arguments[1]+arguments[2]);
// }
// console.log(showValue(12,5,3,22,43,54,66,4,8));

//////////////////////////////////////////////////

let showValue = (...args)=>{
   console.log(args);
   return args.reduce((prev,current) => prev+current )
}
console.log('Sum:',showValue(12,5,3,4,2,4,2,5,4,3,3,5,3,4,36,6,5))
//////////////////////////////////////////////////////
let user1 = ['ali','amin','amir']
let user2 = ['reza','arman','akbar']

console.log(...user1)
let alluser = [...user1,...user2]
console.log(alluser);
////////////////////////////////////

function showUser(...users){
   console.log(users);
}

showUser(...user1,...user2)



//////////////////////////////////////////////////////////////'

let myArr = [32,'arman',true,'ali',21]

let [item1, ,item2 ,item3 ,item4] = myArr

let [num1,num2,...others] = myArr

console.log(item1,item2, item3 ,item4);
console.log(num1,num2,others);

////////////////////////////////////////////////////////////////

let numbers = ()=>{
    return[23,48]
}

let [a=5,b] = numbers()

console.log(a,b);
//////////////////////////////////////////////////////////////////

let myObj = {
    id : 1,
    Name : 'arman',
    family : 'hurian',
    age : 21,
}

let {Name,id:userId,age,family} = myObj

console.log(userId,Name,family,age);

/////////////////////////////////////////////////////////////////// turnery condition

let Num1 = 12
let Num2 = 14

Num1 + Num2 === 25 ? console.log('مجموع برابر 25 است') : console.log('مجموع برابر 25 نیست') 

///////////////////////////////////////////////////////////////////

let users = [3,4,21,7,9]

let mapArr = users.map(function(item ,index){
  console.log(index , item);  
  return item * 2 
})

console.log(mapArr);
/////////////////////////////////////////////////////////////////////

let BtnClick = document.querySelector('.BtnClick')

function clickHandler(){
   console.log(this);  
}

BtnClick.addEventListener('click',clickHandler)

///////////////
function thisClick (){
    console.log(this);
}

thisClick()

let obj = {
    id : 1,
    name : 'arman',
    age : 19,
    showThis : function(){
        console.log(this);
    },
}
obj.showThis()

let showThisFunc = obj.showThis.bind(obj)

showThisFunc()

/////////////////////////////////////////////////////////////////

let q1 = {
  id:1,
  age:21,
  name:'arman'
}

let q2 = {
  id:2,
  age:25,
  name:'ali'
}


function showHandler(){
    console.log(this);
}

let userQ1= showHandler.bind(q1)
let userQ2= showHandler.bind(q2)

userQ1()
userQ2()


//////////////////////////////////////////////////////////

function Person(name,age,height){
    this.firstname = name,
    this.age = age,
    this.height = height
}

let userArman = new Person('arman',26,178)
let userMehti = new Person('mehti',26,190)
let userALi = new Person('ali',24,183)

console.log(userArman);
console.log(userMehti);
console.log(userALi);

/////////////////////////////////////////////////////////////

class Piople {

    constructor(name , age , height){

        this.firstname = name
        this.age = age
        this.height = height
    }

}

class Children extends Piople {
    constructor(name , age , height,fatherName){
        super(name , age , height)
        this.fatherName = fatherName
    } 
}

let alikocholo = new Children ('alikocholo' ,12,160,'ali akbar')
 
console.log(alikocholo);

let userMamad = new Piople('mamad',26,178)
let userTaghi = new Piople('taghi',26,190)
let userNaghi = new Piople('naghi',24,183)

console.log(userMamad);
console.log(userTaghi);
console.log(userNaghi);

//////////////////////////////////////////////////////////////

let userObj = {
    id:2,
    age:25,
    firstname:'ali'
  }

console.log(`id : ${userObj.id}
age : ${userObj.age} 
firstname:${userObj.firstname} `);  