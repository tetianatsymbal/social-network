const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

// [
//   {
//     id: 1,
//     photoUrl:
//       "https://i.pinimg.com/originals/bf/73/8c/bf738c570e0d7ce3ad106dc15e70e06d.jpg",
//     followed: false,
//     fullName: "Tanuysha",
//     status: "Hi, I like theatre",
//     location: { city: "Kyiv", country: "UKRAINE" },
//   },
//   {
//     id: 2,
//     photoUrl:
//       "https://i.pinimg.com/564x/c7/4a/fe/c74afe7a1b5c13e4556749b17073fb25.jpg",
//     followed: true,
//     fullName: "Olezhyk",
//     status: "I'm boss",
//     location: { city: "Lviv", country: "UKRAINE" },
//   },
//   {
//     id: 3,
//     photoUrl:
//       "https://i.pinimg.com/originals/e2/c6/bf/e2c6bfb39721fddd6532592b93e06339.jpg",
//     followed: true,
//     fullName: "Frederic",
//     status: "Hi! How are you?",
//     location: { city: "New york", country: "USA" },
//   },
//   {
//     id: 4,
//     photoUrl:
//       "https://i.pinimg.com/564x/bc/9a/bb/bc9abb9b02de1313b2a5377b3fe408cc.jpg",
//     followed: false,
//     fullName: "Philip",
//     status: "Hi! How are you?",
//     location: { city: "Porto", country: "Portugal" },
//   },

// ]

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;
