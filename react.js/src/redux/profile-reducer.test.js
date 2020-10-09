import profileReducer, {
    addPostActionCreator
} from "./profile-reducer";

test('new post should be added', () => {
    let action = addPostActionCreator("react it is cool");

    let state = {
        posts: [{
                id: 1,
                message: "Hi, how are you?",
                likesCount: 12
            },
            {
                id: 2,
                message: "It's my first post.",
                likesCount: 23
            },
        ]
    };
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);

});