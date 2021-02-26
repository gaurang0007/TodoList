import React, { useState } from "react";
import todo from "./todo.png";
import TodoList from "./TodoList";
import "./List.css";
import Footer from "./Footer";
import ShowCompleted from "./ShowCompleted";

const List = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  // const [completedList, setCompletedList] = useState(["123"]);

  const inputChange = (e) => {
    setInputList(e.target.value);
  };

  const btnClick = (e) => {
    e.preventDefault();

    if (inputList !== "") {
      setItems((oldobj) => {
        let obj = {
          List: inputList,
          Completed: false,
        };
        // console.log(obj);
        return [obj, ...oldobj];
      });
    }
    setInputList("");
  };
  // const afterChecked = (id) => {
  //   // console.log('deleted');
  //   setCompletedList((oldItems) => {
  //     return oldItems.filter((arrEle, index) => {
  //       if( index !== id){
  //         console.log(id);
  //         return id;
  //       };
  //     });
  //   });
  // }

  const deleteItem = (id) => {
    // console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        // afterChecked();
        return index !== id;
      });
    });
  };

  
  const checked = (id) => {
    
    let temp = [...items];

    temp[id].Completed = true;

    setItems(temp);
  };

  const clearAll = () => {
    setItems([]);
  };

  const keyupFunction = () => {
    if (inputList === "") {
      document.getElementById("add").style.backgroundColor = "#9b969b";
    } else {
      document.getElementById("add").style.backgroundColor = "#5D4DFA";
    }
  };
  const mouseUp = () => {
    document.getElementById("add").style.backgroundColor = "#9b969b";
  };

  
  //  let log = items.map(todo => todo.Completed)
   console.log("p render");
  //  console.log("items :- ",checked);
  return (
    <>
      <form className="listForm">
        <input
          className="listInput form-control"
          onKeyUp={keyupFunction}
          type="text"
          placeholder="Take the garbage out"
          onChange={inputChange}
          value={inputList}
        />
        &nbsp;&nbsp;&nbsp;
        <button
          className="addBtn"
          id="add"
          onMouseUp={mouseUp}
          onClick={btnClick}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>

      {items.length > 0 ? (
        <div>
          <div className="pandingItem">
            <p>You have {items.length} panding item</p>
          </div>
          <div className="middle">
            <ul className="todoList">
              {items.map((obj, index) => {
                return (
                  <TodoList
                    text={obj.List}
                    key={Math.random()}
                    id={index}
                    onSelect={deleteItem}
                    checked={checked}
                  />
                );
              })}
            </ul>

            <Footer allItem={clearAll}  items1={items} setItems={setItems}/>
          </div>

        </div>
      ) : (
        <div className="todo">
          <img className="todoImg" src={todo} alt="todo" />
          <p className="todopera">Time to chill You have no todos.</p>
        </div>
      )}
      
    </>
  );
};

export default List;
