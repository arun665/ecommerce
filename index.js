var express=require("express");
const app=express();
var  path= require("path");
var fs=require("fs");



app.use(express.static("public"));

app.get("/", function(req,res){

res.sendFile(path.join(__dirname + './index.html'));


});


function readFile(){


    fs.readFile( "words.json", function (error, contents) {
        if (error) {
          throw error;
        }
    
        tasks=JSON.parse(contents);

        console.log(tasks);

  })
    
}


app.get("/cart", function(req,res){


      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
              document.getElementById("jacket").style.display="block";
              console.log(" runned ");

  

      });
  })
  


app.get("/words1", function(req,res){


  
    fs.readFile( "words.json", function (error, contents) {
        if (error) {
          throw error;
        }
    
        var words=JSON.parse(contents);
  
        words["jacket"]=1;

        var data=JSON.stringify(words);
        fs.writeFile('words.json',data, function(){
            console.log("elemtnt added");
    
        })
    });
})


app.get("/words2", function(req,res){


 
      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
          words["jeans"]=1;
  
          var data=JSON.stringify(words);
          fs.writeFile('words.json',data, function(){
              console.log("elemtnt added");
      
          })
      });
  })

  
app.get("/words3", function(req,res){


    var data=req.params;
    var id=data.id;
    
      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
          words["shoes"]=1;
  
          var data=JSON.stringify(words);
          fs.writeFile('words.json',data, function(){
              console.log("elemtnt added");
      
          })
      });
  })
  
app.get("/words4", function(req,res){


    var data=req.params;
    var id=data.id;
    
      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
          words["laptop"]=1;
  
          var data=JSON.stringify(words);
          fs.writeFile('words.json',data, function(){
              console.log("elemtnt added");
      
          })
      });
  })
  
app.get("/words5", function(req,res){


    var data=req.params;
    var id=data.id;
    
      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
          words["keyboard"]=1;
  
          var data=JSON.stringify(words);
          fs.writeFile('words.json',data, function(){
              console.log("elemtnt added");
      
          })
      });
  })

  
app.get("/words6", function(req,res){


    var data=req.params;
    var id=data.id;
    
      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
          words["mouse"]=1;
  
          var data=JSON.stringify(words);
          fs.writeFile('words.json',data, function(){
              console.log("elemtnt added");
      
          })
      });
  })
  
  
app.get("/words7", function(req,res){


    var data=req.params;
    var id=data.id;
    
      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
          words["ledtv"]=1;
  
          var data=JSON.stringify(words);
          fs.writeFile('words.json',data, function(){
              console.log("elemtnt added");
      
          })
      });
  })
  
  
app.get("/words8", function(req,res){


    var data=req.params;
    var id=data.id;
    
      fs.readFile( "words.json", function (error, contents) {
          if (error) {
            throw error;
          }
      
          var words=JSON.parse(contents);
    
          words["iphone"]=1;
  
          var data=JSON.stringify(words);
          fs.writeFile('words.json',data, function(){
              console.log("elemtnt added");
      
          })
      });
  })
  
  
  
  
  
  
  
  
  
  

app.listen(8000);
