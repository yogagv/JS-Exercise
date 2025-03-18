//when we are creating event we have to add addeventlistener to the event the object will be available inside the method.

const btn = document.querySelector('button')
btn.addEventListener('click', (event)=>{      //we are storing the object inside parameter.
    console.log(event);                       //whatever we've seen in the console .log is the meta_data.
})


const form = document.querySelector('form')
form.addEventListener('submit',()=>{     //submit event works only inside the form tag
        // event.preventDefault();
        console.log('form submitted')
});




//Event Probagation - Root Element to Target Element 

//handle how events travel through the Document Object Model (DOM) when an event occurs and reaches the target element, 
// triggering further actions based on the event.

//Child - Bubbling Phase(bottom to top)

const eveBtn = document.querySelector('.eventpro')
eveBtn.addEventListener('click', ()=>{
    alert('Event Button is Clicked(Child)');
}) 

//Parent - Capturing Phase (top to bottom)

const eveSec = document.getElementsByTagName('section')[2]
eveSec.addEventListener('click', ()=>{
    alert('Section is Clicked(Parent)');
})


//using bubbling - bottom to top
// document.getElementById('grandparent').addEventListener('click', ()=>{
//     alert('Grandparent Element');
// })  

// document.getElementById('parent').addEventListener('click', (e)=>{
//     alert('Parent Element');
// })

// document.getElementById('child').addEventListener('click', (e)=>{
//     alert('Child Element');
// })


//using true, false in capturing(top to bottom) (false - bubbling, true - capturing) default -> false 
document.getElementById('grandparent').addEventListener('click', ()=>{
    alert('Grandparent Element');
}, true)  

document.getElementById('parent').addEventListener('click', (e)=>{
    e.stopPropagation();
    alert('Parent Element');
}, true)

document.getElementById('child').addEventListener('click', (e)=>{
    
    alert('Child Element');
}, true)


//using stop propagation
// document.getElementById('grandparent').addEventListener('click', ()=>{
//     alert('Grandparent Element');
// })  

// document.getElementById('parent').addEventListener('click', (e)=>{
//     e.stopPropagation();
//     alert('Parent Element');
// })

// document.getElementById('child').addEventListener('click', (e)=>{
//     e.stopPropagation();
//     alert('Child Element');
// })



//Event Delication - Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of 
// adding individual event listeners to multiple child elements

// const listItem = document.querySelectorAll('li')
// for(let i=0; i<listItem.length; i++){
//     listItem[i].addEventListener('click', (event)=>{
//             event.target.classList.toggle('highlight')                 //toggle -> if the class is there just remove, if the class is not there just add
//     })
// }

const ul = document.querySelector('ul')
ul.addEventListener('click', (event)=>{
    event.target.closest('li').classList.toggle('highlight')
})



const student = [
    {name:'yoga', mark:100},
    {name:'ram', mark:95},
    {name:'A', mark:100},
]

const res = student.filter((ele)=>
    ele.name.length >1 && ele.mark > 95);
console.log(res);

