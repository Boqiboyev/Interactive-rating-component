
const num = document.querySelectorAll(".num")
const button = document.querySelector('button');
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const selected = card2.querySelector('.selected');


for (let i=0; i<num.length; i++){
  console.log(num[i])
  num[i].addEventListener('click', (e) => {
    num[i].style.backgroundColor='orange'
    num[i].style.color="#fff";
    selected.innerText = num[i].textContent;
})}

button.addEventListener('click', (e)=>{
  card1.style.display = 'none';
  card2.style.display = 'block';
  // card2.style.flexDirection = 'column';
})
