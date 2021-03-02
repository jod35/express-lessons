const express =require('express');
const router = express.Router();


router.get('/',(request,response)=>{
    response.send('Hello')
})

router.get('/hello',(request,response)=>{
    response.send("Hrllljdljdlsjdljsdljsldjsljds");
})

router.get('/get',(request,response)=>{
    response.send("GET");
})

router.get('/:id',(request,response)=>{
    response.send(`GET RESOURCE AT ID ${request.params.id} `)
})

router.get('/greet/:name/:age',(request,response)=>{
    response.send(`Hello ${request.params.name} and ${request.params.age}`)
})


module.exports = router;

