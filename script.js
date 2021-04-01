
// var s=document.getElementsByTagName("span");
// console.log(s[0]);
// // console.log(s[0]);
// s[0].addEventListener("click",function(){
//     var spa=document.getElementsByTagName("li")[0]; 
   
//     spa.remove();
// });
var input=document.querySelector('input');

input.addEventListener("keypress",function(e){
    if(e.key==='Enter')
    {
        var li=document.createElement('li');
        // var spans=document.createElement('span');
      
        li.innerHTML=input.value +'<span><i class="fa fa-trash"></i></span>';
        document.querySelector('ul').append(li);
        input.value="";
      
var a=li.children;

a[0].addEventListener("click",function(){
li.remove();

})

      
    }
  
});


// var del=document.querySelectorAll('span');
// console.log(del);
// del.addEventListener("click",function(){
//     console.log("jdjj");
// })
var inp=document.querySelector('input')
inp.classList.toggle('toggle')
var tog=document.querySelector(".fa-plus");


tog.addEventListener("click",function(){
 
    var inp=document.querySelector('input');
    inp.classList.toggle('toggle')

})