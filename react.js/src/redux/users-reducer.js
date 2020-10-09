import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FETCHING_PROGRESS = 'TOGGLE_IS_FETCHING_PROGRESS';

// type UserType = {
//     id: number
//     name: string
//     status: string
// }

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};
// type InitialState = typeof initialState;

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {
                    followed: true
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {
                        followed: false
                    })
                }
                case SET_USERS: {
                    return {
                        ...state,
                        users: action.users
                    }
                }
                case SET_CURRENT_PAGE: {
                    return {
                        ...state,
                        currentPage: action.currentPage
                    }
                }
                case SET_TOTAL_USERS_COUNT: {
                    return {
                        ...state,
                        totalUsersCount: action.count
                    }
                }
                case TOGGLE_IS_FETCHING: {
                    return {
                        ...state,
                        isFetching: action.isFetching
                    }
                }
                case TOGGLE_IS_FETCHING_PROGRESS: {
                    return {
                        ...state,
                        followingInProgress: action.isFetching ?
                            [...state.followingInProgress, action.userId] :
                            state.followingInProgress.filter(id => id !== action.userId)
                    }
                }
                default:
                    return state;
    }
}
// type FollowSuccessActionType = {
//     type: typeof FOLLOW,
//     userId: number
// }
export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});
// type UnfollowSuccessActionType = {
//     type: typeof UNFOLLOW,
//     userId: number
// }
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});
// type SetUsersActionType = {
//     type: typeof SET_USERS,
//     users: Array<UserType>
// }
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
// type SetCurrentPageActionType = {
//     type: typeof SET_CURRENT_PAGE,
//     currentPage: number
// }
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
// type SetUsersTotalCountActionType = {
//     type: typeof SET_TOTAL_USERS_COUNT,
//     count: number
// }
export const setUsersTotalCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
});
// type ToggleIsFetchingActionType = {
//     type: typeof TOGGLE_IS_FETCHING,
//     isFetching: boolean
// }
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
// type ToggleFollowingProgressActionType = {
//     type: typeof TOGGLE_IS_FETCHING_PROGRESS,
//     isFetching: boolean,
//     userId: number
// }
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FETCHING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}
export default usersReducer;