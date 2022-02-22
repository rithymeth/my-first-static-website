let navigation = document.getElementById("navigation");
let page = navigation.getElementsByClassName("nav");

for(let i = 0; i < page.length; i++){
page [i].addEventListener("click", function(){
  let current = document.getElementsByClassName(" active");
  current[0].className = current[0].className.replace(" active"," ");
  this.className += (" active");
})
};
