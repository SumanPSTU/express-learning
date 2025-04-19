import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.end('<h1 style="color:red;">Hello sumon</h1>');
});
app.post('/',(req,res)=>{
    res.end("hello");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})