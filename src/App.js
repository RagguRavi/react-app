
import './App.css';
import { Footer } from './MyCompnent/Footer';
import Header from './MyCompnent/Header';
import { ToDos } from './MyCompnent/ToDos';
import {HookTest} from './MyCompnent/HookTest'
import { useState } from 'react';
import { AddToDo } from './MyCompnent/AddToDo';
import ShopingList from './TestingReact/ShopingList';


function App() {
  const [todos,setToDos] = useState(
    [
      {
        id:1,
        name:"ravi",
        desc:"Hey is the ravi todo"
      },
      {
        id:2,
        name:"Nitin",
        desc:"Hey is the Nitin todo"
      },
      {
        id:3,
        name:"Roni",
        desc:"Hey is the Roni todo"
      },
       {
        id:4,
        name:"Nimrat",
        desc:"Hey is the Nimrat todo"
      }
    ]
  );

 const onDelete = (item) => {
    console.log("Hey I am delete function",item);
    setToDos(todos.filter((e) => {
      return e !== item;
    }))
  }

  const addToDo = (id,name,desc) => {
    console.log("Hey I am add function",id,name,desc);
    let obj = {
      id:id,
      name:name,
      desc:desc
    }
    console.log(obj);
    setToDos([...todos,obj]);
  }
  return (
    <>
    <Header title="To Do's Items" searchBar="true"/>
     <ToDos items={todos}/>
     <Footer></Footer>
    </>
  );
}

export default App;
