
var d1=document.getElementById("1");
var d2=document.getElementById("2");
var d3=document.getElementById("3");
var d4=document.getElementById("4");
var d5=document.getElementById("5");
var d6=document.getElementById("6");
var d7=document.getElementById("7");
var d8=document.getElementById("8");


d1.addEventListener('click',function(){




  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words1');

  request.send();





// this is my first project

});


d2.addEventListener('click',function(){



  
  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words2');

  request.send();


// this is my first project

})


d3.addEventListener('click',function(){



  
  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words3');

  request.send();


// this is my first project

})


d4.addEventListener('click',function(){



  
  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words4');

  request.send();


// this is my first project

})


d5.addEventListener('click',function(){



  
  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words5');

  request.send();


// this is my first project

})


d6.addEventListener('click',function(){



  
  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words6');

  request.send();


// this is my first project

})


d7.addEventListener('click',function(){



  
  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words7');

  request.send();


// this is my first project

})


d8.addEventListener('click',function(){



  
  var request = new XMLHttpRequest();
  
       
  request.open('GET', '/words8');

  request.send();


// this is my first project

})















function addTaskToList() 
{
  

  var request = new XMLHttpRequest();
  
  
  request.open('GET', '/words');
  request.send();

  }

