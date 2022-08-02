const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likeCount: 12 },
    { id: 2, message: "Hello! It's my first post!", likeCount: 7 },
    { id: 3, message: "Hi! Have a good day!!!", likeCount: 23 },
    { id: 4, message: "Have a good day!!!", likeCount: 190 },
  ],
  newPostText: "",
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText: action.newText,
    };
      
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
