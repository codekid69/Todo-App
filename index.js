const express=require('express');
const port=8000;
const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',function(req,res){
    res.render('index',{
        title:"Todo App"
    })
})
app.listen(port,function(error){
    if(error){
        console.log(`Error in running the server ${error}`);
        return;
    }
    return console.log(`Server Running on the port ${port}`);
});