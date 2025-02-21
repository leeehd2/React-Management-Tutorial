import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './component/Customer';


const customers = [{
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
}]

class  App  extends Component {

  render(){
    return (
      <div>
        {
          customers.map( c =>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            )
          })
        }
       
      </div>
      
      
    
  )}
}

export default App;
