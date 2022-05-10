upload = https://www.youtube.com/watch?v=EVOFt8Its6I


MONGO_URL=mongodb://localhost:27017/student

marn stack project =https://www.youtube.com/watch?v=AN3t-OmdyKA

1..Node.js import CSV data into MongoDB using fast-csv & mongodb || reverse

date formate = "date": "2022-01-31"

 https://www.bezkoder.com/node-js-csv-mongodb-collection/

https://github.com/settings/emails
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

D:\final\reactdemo\myapp\node_modules\bootstrap\dist\css\bootstrap.min.css.map

//auth0 login google02:31 28-03-2022
https://www.youtube.com/watch?v=sakQbeRjgwg&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x

net ninja
https://www.youtube.com/watch?v=9x66l93iEW0&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x&index=6

//auth0 login universal
https://www.youtube.com/watch?v=QQwo4E_B0y8

//twilio
login parul@realloc.gmail - 
https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1&newCustomer=true

//blog typescript
https://www.youtube.com/watch?v=LD0398cHjJA&list=PLs4co9a6NhMw7xB4xPSkSQRM8uQVAZak6&index=6

sperad and rest operator

sparad ...
const arr=[1,2,3]
const arr1=[4,...arr]
op- 4123

const person ={
	name:"abc"
}
const newperson = {
	...person,
	age:40
}
op-[name:"abc" age:40]

rest operator
function argument passed the ... sparad
flxible passed the argumantes.

const hello(...all){
	console.log(all)
}
hello(1,2,3,4,5)

array destructuring
 array value passed as used a variable.

====>reference (array,object) = does not copy value but we will assign a value and point the value
	let person ={
		name:"parul"
	}
	let person1 = person
	person1.name ="rishiv"
	console.log(person)
	console.log(person1)
	o/p=>rishiv
	    rishiv

// copy object
	let person ={
		name:"parul"
	}
	let person1 = {
		...person         // copy object
	}
	person1.name ="rishiv"
	console.log(person)
	console.log(person1)
	o/p=>parul
	    rishiv
primitive type(string,number)=> copy the value of a
 const a= 10
 let b= a
 console.log("a",a)
 console.log("b",b)
o/p =>a 10
       b=10

component -reusably -code maintain
javascript run in browser is called javascript
javascript run in nodejs is called nodejs
aggrigation
$match
{
 "age":{$gt :10}
}
$project
{
  "_id":0,
  "first_name":1,
  "email":1,
  "gender":1,
  "age":1
}

validation
required:true
unique:true

const data = await Emp.find().where('salaryTotal').equals(30000)
        res.send(data)

RECT.js
live rect
codeSandbox

about rect
declarative apporch
component approch
DOM 
reusable
design speed fast


extention add in vs code
babel javascript
es6 javascript


install rectjs

local install in one project
npx-tool excuting node package
npx create-react-app
yarn start/npm start

global installation 
npm install -g create-react-app
create-react-app --version
create-react-app <project name>

run project 
npm start

component first letter capital 

react fragment
<>
</>

flat arrow function
this keyword sathe flatarrow function not used.
if else statament

ternaly Operator
{(datalink  === 'https://www.google.com/') ? no=0 : no=1 
        }
        <Heading key={srd[no]} link={srd[no].data} />

true condition
{show && <p>{ans}</p>}



mongodb://localhost:27017/Myproject

props meanes property

array.map(val, index, arrname)

//add extention for google chrome
react devloper tools

mongodb+srv://parul:<password>@cluster0.r4lhu.mongodb.net/test

use statas retun two value
[undefine , function]
1st state object
2ed updated function

digital clock used refere
setinterval(function,1000)

const [count , setcount] = usestate(12)

bootstrap install in react
 extention add = intellisense for css class names in html
material.ul icon 


controller component
react component headle is called controller component
singlet source of truth. = all name same 

uncontroller componemt 
(input)element power of controller the 
form data is hander it self is callecd uncontroll component

sperade operator ...
concat two array
two objct combine	

//hooks context
hooks not work in class component
create context
provider

const FirstName = createContext()
 <>
        <FirstName.Provider value={"parul"}> <ConA /> </FirstName.Provider>
</>
export default App;
export {FirstName}

consumer

//usecontaxt
it overcome a consumer problam in hooks contaxt.
import React, { useContext } from "react";
import {FirstName} from '../App'

const ConC = () =>{
    const fname = useContext(FirstName)
    return <h1> My Name is{fname}</h1>     
}

export default ConC


//useEffect =render 
render method call after a useEffect
one comapnent  render after which task
always call in render ReactDOM.render methods page referce first time call 
 
Hooks a not a lifecycle

1. clientsiderouting / client side rendering for react 
its not a predefine of react
its import package
 import npm i react-router-dom
only referese a component
2. serversiderouting
reload full page

- used react-router-Dom
ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);


const App = () =>{
  return(
    <>
      {/* <Covid /> */} 
      {/* {<Statewise />} */}
      {/* {<Pokemon />} */}
      {< Manu />}
          <Switch>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} /> 
          <Route component={Error} />
        </Switch>
       
  
    </>
  )
}

const Manu = () => {
  return(
      <>
          <NavLink exact activeClassName='active_class' to='/'> AboutUs</NavLink>
          <NavLink exact to='/contact'> Contact</NavLink>
      </> 
  )
};

component :avery time data fresh.
every time create new component
we will not pass the props this time used component
render: this method call virual dom no data apide change fetch kare
allready exist when display
pass the props we used a render
display code updated (ex image)


useParams
its used a passed parameters in url

uselocation
its used to return a url 
display current path


useHistory
location is mutable (changeable)
display the history of url

 const location = useLocation()
    console.log(location);

> db.users.aggregate([
{$project: {firstname:1 ,_id:0}},
{$unionWith:{coll:"student",$pipline:[{$project:{total:1 , _id:0}}] }}
 ])

db.student.aggregate( [
   {
     $addFields: {
       totalsubjava: { $sum: "1" } ,
       totalsubOr{ $sum: "1" }
     }
   } ])

<div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    
                </div>
            </div>
        </div>



hook means change the value (change state is called hook)

setting:img <img src:"" >
 "emmet.includeLanguages": {"javascript":"javascriptreact"},


redux 
 redux access all component data.

1.create Action
	pure function which create an action.
	reuasable,portable and easttotest
2.Reduser
	take current state and an action as arguments and return new state result.
3.store
	redux stroe to brings togather the state action and redusers that make your app.
	single stroe in a redux application
	every redux stroe has a single root reducer function. 
add code stroe : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { inCre,deCre } from './action';


const Incrementapp = () => {
  const mystate = useSelector(state => state.changeData)
  const disp = useDispatch()
  return( <>
     <button onClick={()=>disp(inCre())}>+</button>
     <h2 >{mystate}</h2>
     <button onClick={()=>disp(deCre())}>-</button>
  </>
  )
}

export default Incrementapp

//typeorm video 
https://www.youtube.com/watch?v=7nKj865wcpg&list=PLolI8AY2AS9aNM8SScV0Jh-it4KUHsAgU&index=3

connection apply ->
.env
.ormconfig.json
app.ts

typeorm -mysql
npm i -g typeorm
typeorm init --name MyProject --database mysql


npm init --y
tsc --init  //create tsconfig.json
npm i express @types/express nodemon ts-node @types/node typescript
npm i mysql2 typeorm reflect-metadata


tsconfig.json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"strictPropertyInitialization":false

package.json
  "start":"nodemon src/app.ts"
jo ts thi project run thay to server||src folder ma no mukavu pade
.js thi project run thay to src na folder ma mukvu pade




typescript Assertion

let data;
data="hello"  // data type any

(<string>data).length // conver to string
(data as string).charAt // convert to string

inline anotation
let name(firstname:string)
{
	console.log(firstname)
}



NODE JS

global 

console.log(__dirname);
console.log(__filename);


1.process  - command line argument - array of arguments
video=https://www.youtube.com/watch?v=eNe3X1yITjw

> node server.js
argv[0] argv[1]

console.log(process.argv);
console.log(process.argv[2]); 
o/p:-[
  'C:\\Program Files\\nodejs\\node.exe', -- argv[0]
  'C:\\Users\\lenovo\\Desktop\\DemoTest\\backend\\server.js' --argv[1]
]
undefine

2. Also create own command line argument program

console.log(process.argv);
console.log("Hello "+ process.argv[2]);


cmd> PS C:\Users\lenovo\Desktop\DemoTest\backend> node server.js parul
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\lenovo\\Desktop\\DemoTest\\backend\\server.js',
  'parul'
]
Hello parul

process is one of object which has access all the nodejs process. 
process does not require a "require", it's automatically available.

console.log("first line");
process.on("beforeExit",()=>{
      console.log("beforeExit");
})
console.log("second line ");

PS C:\Users\lenovo\Desktop\DemoTest\backend> node server.js 
first line
second line 
beforeExit

3.debug
cmd> node --inspect-brk <file name>
browser:- chrome://inspect


4.promise 

1. promiseAll - it is used to all promise reslove 
const p1 = new Promise ()

syn:- Promise.all([p1,p2,p3]).then(prmsg)=>{
	console.log(prmsg)
	}	

2. allSettled - it is used to many promise resolve and one promise reject
		return value and status.

syn:- Promise.allSettled([p1,p2,p3]).then(prmsg)=>{
	console.log(prmsg)
	}
o/p :-[
	{status:'fulfilled',value:'Promisse1'}
	]
3. race - it return first complated promise will display output

syn:- Promise.race([p1,p2,p3]).then(prmsg)=>{
	console.log(prmsg)
	}
o/p-Promise1




NEST.js

$ npm i -g @nestjs/cli
$ nest new project-name

Run
npm run start
npm run start:dev

create a moduls 
 >nest
 >nest g mo modules/quiz 


express

syn =   app.use(path,callbackfun)



yarn add class-validator
 yarn add class-transformer


$match in compass

{
   name : "abc",
   post: "manager",
   salary: {$gte:10000}
}

groups
{
  _id: "$name",
  total: {
    $sum: "$salary"
  }
}
project
{
 _id:0,
  subJava:1,
  
}
