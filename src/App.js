
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './component/Customer';
import Paper from '@material-ui/core/Paper';
import Table  from '@material-ui/core/Table';
import TableHead  from '@material-ui/core/TableHead';
import TableBody  from '@material-ui/core/TableBody';
import TableRow  from '@material-ui/core/TableRow';
import TableCell  from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';


const styles = theme =>({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit *3,
    overflowX : "auto"
  },
  table : { minWidth : 1080}
})

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
    const{classes} = this.props;
    return (
      <Paper  className={classes.root} sx={{ height: 400, width: '100%' }}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map( c =>{
              return(
                <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
              )
            })
          }
          </TableBody>
        </Table>       
      </Paper> 
  )}
}

export default withStyles(styles)(App);
