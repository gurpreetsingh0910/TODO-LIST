$('ul').on('click','li',function ()
{
   $(this).toggleClass("completed");
})

$('ul').on('click','span',function (event) {
    
  $(this).parent().fadeOut(800,function () {
      $(this).remove();
      if(c>=0)
      {
      c--;
      a.innerText=c;
      }
  })
  event.stopPropagation(); 
})

$('input').keypress(function(event){
  if(event.which===13)
  {
    const todoText = $(this).val();
    const todo= ` <li> ${todoText} <span> <i class="fas fa-trash"></i></span> </li>`;
    $('ul').append(todo);
        $(this).val("");
        c++;
        a.innerText=c;
  }
})

$('#plus').click(function () {
  $('input[type="text"]').fadeToggle();
})

$('#clear').click(function(){

   $('li').fadeOut(800,function () {
    $('li').remove();
    c=0;
    a.innerText=c;
     })
})
var a=document.getElementById("pend");
var c=0;