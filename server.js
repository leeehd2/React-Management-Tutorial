

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/api/customers', (req,res)=> {
    res.send([{
        'id' : 1,
        'image' : `https://picsum.photos/id/1/200/150` ,
        'name' : '홍길동1',
        'birthday' : '961214',
        'gender' : '남자' ,
        'job' : '대학생'
      },
      {
        'id' : 2,
        'image' : `https://picsum.photos/id/2/200/150` ,
        'name' : '홍길동2',
        'birthday' : '961214',
        'gender' : '남자' ,
        'job' : '대학생'
      },
      {
        'id' : 3,
        'image' : `https://picsum.photos/id/3/200/150` ,
        'name' : '홍길동3',
        'birthday' : '961214',
        'gender' : '남자' ,
        'job' : '대학생'
      },
      {
        'id' : 4,
        'image' : `https://picsum.photos/id/4/200/150` ,
        'name' : '홍길동4',
        'birthday' : '961214',
        'gender' : '남자' ,
        'job' : '대학생'
      }])
});



app.listen(port, () => console.log(`Listening on port ${port}`));