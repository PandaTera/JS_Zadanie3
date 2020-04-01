const btn = document.getElementById('btn');
let number = 1 

const addLi = function(){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
  li.textContent = number;
   
   
    if(number % 5 ==0){
        li.classList.add('big');
    }
    if(number % 7 == 0){
        li.classList.add('color');
        li.textContent = number+ " " + " IT'S SUNDAY"
    }
    
number+=2;
    ul.appendChild(li)

}

btn.addEventListener('click', addLi)