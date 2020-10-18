const SEND_MESSAGE = 'SEND_MESSAGE';

// type DialogsType = {
//     id: number
//     name: string
// }

// type MessagesType = {
//     id: number
//     message: string
// }

let initialState = {
    dialogs: [{
        id: 1,
        name: "Sasha"
    },
    {
        id: 2,
        name: "Andrey"
    },
    {
        id: 3,
        name: "Sveta"
    },
    {
        id: 4,
        name: "Victor"
    },
    {
        id: 5,
        name: "Valera"
    },
    {
        id: 6,
        name: "Anya"
    }
    ],
    messages: [{
        id: 1,
        message: "Hi"
    },
    {
        id: 2,
        message: "How is your react.js"
    },
    {
        id: 3,
        message: "Yo!"
    },
    {
        id: 4,
        message: "Yo!Victor"
    },
    {
        id: 5,
        message: "Yo!Valera"
    },
    {
        id: 6,
        message: "Yo!Anya"
    }
    ]
};

// export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {
                    id: 7,
                    message: body
                }]
            };

        default:
            return state;
    }
}

// type SendMessageCreatorActionType = {
//     type: typeof SEND_MESSAGE
//     newMessageBody: string
// }

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});

export default dialogsReducer;