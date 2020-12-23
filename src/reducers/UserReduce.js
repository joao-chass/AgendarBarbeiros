export const initialState = {
    avatar: '',
    favoritos: [],
    appontments: []
};

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setavatar':
            return { ...state, avatar: action.payload.avatar};
        break;
        default:
            return state;
    }
}