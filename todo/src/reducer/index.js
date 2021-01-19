import { ADD_ITEM } from "../actions";

export const initialState = {
    todo: [
        {
            item: 'Finish knitting scarf for Amy',
            completed: false,
            id: 12252020
        },
        {
            item: 'Bake brownies! For fun! Or cornbread',
            completed: false,
            id: 11172020
        },
        {
            item: 'Watch Star Wars episode VI',
            completed: false,
            id: 10112020
        }
    ]
};

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM: 
            const newItem = {
                id: Date.now(),
                toDoItem: action.payload,
                completed: false
            }
            return({...state, 
                todo: [...state.todo, newItem]
            })
        default:
            return state;
    }
}

export default reducer;