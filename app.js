const express = require('express');
const app = express()
const {getLinkPreview} = require("link-preview-js");
const {promisify} = require('util')
app.use(express.json())
app.post('/link-preview',async (req,res,next) => {
    try{
  const link = req.body.link
  const linkResult = getLinkPreview(link).then(resp => {return {
    sucess:true,
    result:resp

  }}
  ).catch(err => {return {sucess:false,result:err.message}})
  const result = await linkResult
  
  return res.status(200).json({result})
}
catch(err){
    console.log(err)
}
})

app.listen(8085,() => console.log("server has been started"))