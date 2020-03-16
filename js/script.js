//Creates list of all the people
people=document.getElementsByClassName('student-item cf')
console.log(people[0])

//Shows the correct people and number of people on each page
function showPage(x, lst){
   for(let i=0; i<lst.length; i++){
      lst[i].style.display='none'
   }
   for(i=(x-1)*10; i<x*10; i++){
      lst[i].style.display='block'
   }

}

//Creates initial page links
let page=document.getElementsByClassName('page')[0]
console.log(page)
function appendPageLinks(lst){
   for(let i=0; i<lst.length/10; i++){
      let but=document.createElement('button')
      but.textContent=i+1
      but.className='pbut'
      page.appendChild(but)
   }
}
appendPageLinks(people)

//Shows correct page on button press
page.addEventListener('click', (event)=>{
   if(event.target.className=='pbut'){
      showPage(event.target.textContent, people)
   }
})

//Adds Search Bar
let head=document.getElementsByClassName('page-header')[0]
let search=document.createElement('input')
search.placeholder='Search...'
head.appendChild(search)
let searchbut=document.createElement('button')
searchbut.textContent='Go'
head.appendChild(searchbut)
search.style.marginLeft='50em'
searchbut.marginRight='4em'
//Creates element that will appear when no elements are found from search
let el=document.createElement('p')
el.textContent='NO RESULTS'
el.style.display='none'
page.appendChild(el)

//returns array of people with substring of searched string in their name
function searchPeople(str){
   let newLst=[]
   for(let i=0; i<people.length; i++){
      let x=people[i].children[0].children[1].textContent
      if(x.indexOf(str)>-1){
         newLst.push(people[i]);
      }
   }
   console.log(newLst)
   return newLst

}

//Event listener for typing in search bar
search.addEventListener('keyup', (event)=>{
   let searched = searchPeople(search.value)
   console.log(search.value)
   let oldbuttons = document.querySelectorAll('.pbut')
   for(let i=0; i<oldbuttons.length; i++){
      page.removeChild(oldbuttons[i])
   }
   var oldpage=document.querySelectorAll('li')
   for(let i=0; i<oldpage.length; i++){
      oldpage[i].style.display='none'
   }
   
   if(searched.length==0){
      el.style.display='block'
   }else{
      el.style.display='none'
   }
   pages=searched
   appendPageLinks(searched)
   showPage(1,searched)
})

//Event listener for clicking search button
searchbut.addEventListener('click', (event)=>{
   let searched = searchPeople(search.value)
   console.log(search.value)
   let oldbuttons = document.querySelectorAll('.pbut')
   for(let i=0; i<oldbuttons.length; i++){
      page.removeChild(oldbuttons[i])
   }
   var oldpage=document.querySelectorAll('li')
   for(let i=0; i<oldpage.length; i++){
      oldpage[i].style.display='none'
   }

   if(searched.length==0){
      el.style.display='block'
   }else{
      el.style.display='none'
   }

   pages=searched
   appendPageLinks(searched)
   showPage(1,searched)
})