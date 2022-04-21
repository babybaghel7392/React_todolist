import { useState } from "react";
import "./App.css";
import Plan from "./Plan";

const App = () => {
  const [input, setinput] = useState("");
  const [item, setitem] = useState([]);

  const handlechange = (event) => {
    setinput(event.target.value);
  };

  const handleitem = () => {
    setitem((olditem) => {
      return [...olditem, input];
    });

    setinput("");
  };

  const deleteitem=(id)=>
  {
      // console.log("deleteitem");
      setitem((olditem)=>
      {
        return olditem.filter((arrElm,index)=>
        {
            return index!==id;
        });
      });
  };
  return (
    <div className="container-fluid  p-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white  shadow-lg">
          <h3>Today Plan</h3>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Write here"
                className="form-control"
                value={input}
                onChange={handlechange}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5" onClick={handleitem}>
                Add
              </button>
            </div>
            
              {item.map((itemeval, index) => {
                return (
                  <Plan
                    text={itemeval}
                    id={index}
                    key={index}
                    onSelect={deleteitem}
                  />
                );
              })}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
