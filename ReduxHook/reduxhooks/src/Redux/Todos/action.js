export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_LODING = "GET_TODOS_LODING";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const get_todos =(payload) =>({
    type: GET_TODOS,
    payload
})

export const get_todosLoading = (payload) => ({
  type: GET_TODOS_LODING,
});

export const getTodosError = () =>({
    type: GET_TODOS_ERROR
})

export const getTodosData=() =>(dispatch)=>{
    dispatch(get_todosLoading());
    fetch(` http://localhost:3001/todos`)
      .then((response) => response.json())
      .then((response) => dispatch(get_todos(response)))
      .catch((err) => dispatch(err))
}