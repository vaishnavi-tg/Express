const express = require("express")
const app=express()
app.listen(3000)


function sum(n){
    let ans=0
    for (let i=0;i<=n;i++){
        ans=ans+i
    }
    return ans 


}

app.get("/",function(req,res){
    const n=parseInt(req.query.n)
    const ans=sum(n)
    res.send("hi ur answer is"+ans)
    res.send("hi their")
})



