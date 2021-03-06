import { createSlice,nanoid,createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync=createAsyncThunk('todos/getTodosAsync',async()=>{
    const res=await fetch('http://localhost:7000/todos');
    return await res.json();
});

export const todosSlice=createSlice({
    name:'todos',
    initialState:{
        items:[
            /* {
                id:'1',
                title:'Learn React',
            },
            {
                id:'2',
                title:'Read a book',
            }, */
    ],

        isLoading:false,
        error:null,
        activeFilter:'all',
    },
    reducers:{
        // addTodo:(state,action)=>{
        //     state.items.push(action.payload);
        // },

        addTodo:{
            reducer:(state,action)=>{
                     state.items.push(action.payload);
                 },
            prepare:({title})=>{
                return{
                    payload:{
                        id:nanoid(),
                        completed:false,
                        title,
                    }
                }
            }
        },

        toggle:(state,action)=>{
            const {id}=action.payload;
            const item=state.items.find((item)=>item.id===id);
            item.completed=!item.completed;
        },
        destroy:(state,action)=>{
            const id=action.payload;
            const filtered=state.items.filter((item)=>item.id!==id);
            state.items=filtered;
        },

        changeActiveFilter:(state,action)=>{
            state.activeFilter=action.payload;
        },
        clearCompleted:(state)=> {
            const filtered=state.items.filter((item)=>item.completed===false);
            state.items=filtered;
        },
    },
    extraReducers:{
        [getTodosAsync.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getTodosAsync.fulfilled]:(state,action)=>{
            state.items=action.payload;
            state.isLoading=false;
        },
        [getTodosAsync.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message;
        },
    },
});

export const selectTodos=(state)=>state.todos.items;
export const selectFilteredTodos=(state)=>{
    if(state.todos.activeFilter==='all'){
        return state.todos.items;
    }
    return state.todos.items.filter((todo)=>
    state.todos.activeFilter==='active'? todo.completed===false : todo.completed===true,
    );
};
export const {addTodo,toggle,destroy,changeActiveFilter,clearCompleted}=todosSlice.actions;
export default todosSlice.reducer;