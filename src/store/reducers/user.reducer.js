import { userService } from '../../services/user'

export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
// export const SET_USERS = 'SET_USERS'

const initialState = {
    user: userService.getLoggedinUser(),
 // TODO: make sure no need for all users in the store - ASK LIDOR
 // TODO: what is "watched user" ??  - ASK LIDOR
    //   users: [],
    // watchedUser : null
}

export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_USER:
            newState = { ...state, user: action.user }
            break
     /*   case SET_WATCHED_USER:
            newState = { ...state, watchedUser: action.user }
            break  */
        case SET_USERS:
            newState = { ...state, users: action.users }
            break
        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
