import React from "react";
// import {action} from "../Redux/Login/action"
const initialState = {
  title: "",
  description: "",
  subtasks: [],
  status: " ",
  tags: {
    official: false,
    personal: false,
    others: false,
  },
  date: " ",
};
const reducer = (state, { type, payload }) => {
  console.log(state)
  switch (type) {
    case "UPDATE_TITLE":
      return { ...state, title: payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: payload };
    case "UPDATE_STATUS":
      return { ...state, status: payload };
    case "UPDATE_TAGS":
      return { ...state, tags: { ...state.tags,...payload } };
      case "CHANGE_DATE":
        return { ...state, date: payload };
        case "UPDATE_SUBTASK":
          return { ...state, subtaask:{...state.subtask, payload}};
    default:
      throw new Error("please give proper action object");
  }
};
const TodosCreate = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [subtaskInputvalue,setsubtaskInputvalue] = React.useState("")
  const { title, description, subtasks, status, tags, date } = state;
  const {official, personal, others} = tags
  return (
    <div>
      <input
        type="text"
        placeholder="TITLE"
        value={title}
        onChange={(e) =>
          dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
        }
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="DESCRIPTION"
        value={description}
        onChange={(e) =>
          dispatch({ type: "UPDATE_DESCRIPTION", payload: e.target.value })
        }
      />
      <br />
      <br />
      <label>
        <input
          type="radio"
          checked={status === "Todo"}
          onChange={(e) => {
            dispatch({ type: "UPDATE_STATUS", payload: "Todo" });
          }}
        />
        Todo
      </label>
      <br />
      <br />
      <label>
        <input
          type="radio"
          checked={status === "Inprogress"}
          onChange={(e) => {
            dispatch({ type: "UPDATE_STATUS", payload: "Inprogress" });
          }}
        />
        Inprogress
      </label>
      <br />
      <br />
      <label>
        <input
          type="radio"
          checked={status === "Done"}
          onChange={(e) => {
            dispatch({ type: "UPDATE_STATUS", payload: "Done" });
          }}
        />
        Done
      </label>
      <br />
      <br />
      <div>
        <label>
          <input
            type="checkbox"
            checked={official}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { official: e.target.checked },
              });
            }}
          />
          OFFICIAL
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={personal}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { personal: e.target.checked },
              });
            }}
          />
          PERSONAL
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={others}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { others: e.target.checked },
              });
            }}
          />
          OTHERS
        </label>
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) =>
            dispatch({ type: "CHANGE_DATE", payload: e.target.value })
          }
        />
        <br />
        <br />
        <h1>Subtask</h1>
        <input
          type="text"
          value={subtaskInputvalue}
          onChange={(e) => setsubtaskInputvalue(e.target.value)}
        >
          <button onClick={()=>{
            const payload = {
              id:uuid(),
              subtaskTitle: subtaskInputvalue,
              subtaskStatus: false,
            }
            dispatch({type:"UPDATE_SUBTASK", payload})
          }}></button>
        </input>
      </div>
    </div>
  );
}; 

export default TodosCreate;
 