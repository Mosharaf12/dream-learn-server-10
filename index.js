const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT || 5000

app.use(cors());

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/categories',(req, res)=>{
    res.send(categories);
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/category/:id',(req,res)=>{
    const id= req.params.id;
    const newCategory = courses.find(c=> c._id==id);
    res.send(newCategory);


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})