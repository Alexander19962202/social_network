const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messagesPageData: {
    dialogsData: {
      dialogStateItems: [
        {
          name: 'Anna',
          id: 1,
          avatar: 'https://sun1-29.userapi.com/impg/Y9X9YzkWyEOVKaH2NVnmJrKylKzLRIfUB28JnQ/gXD5-qMHH0w.jpg?size=200x0&quality=96&crop=1,10,958,958&sign=71f65528b244b105da1fb5ecc7090381&ava=1'
        },
        {name: 'Valera', id: 2, avatar: ''},
        {
          name: 'Daniil',
          id: 3,
          avatar: 'https://sun1-23.userapi.com/impf/c849216/v849216145/1a1576/LrNK1E8o3fA.jpg?size=200x0&quality=96&crop=0,307,1201,1760&sign=0b6d760b4677bc3703c4c9fbf29fa8b3&ava=1\n'
        },
        {
          name: 'Sergey',
          id: 4,
          avatar: 'https://sun1-25.userapi.com/impf/c847221/v847221620/31d22/oMZqbXCsv6w.jpg?size=200x0&quality=96&crop=0,0,852,864&sign=0e8b10795b5d86f97c7eaa35b7ef5999&ava=1'
        },
        {
          name: 'Andrey',
          id: 5,
          avatar: 'https://sun1-17.userapi.com/impf/c630919/v630919478/2e6de/2n3IEqnIAoM.jpg?size=200x0&quality=96&crop=0,0,1435,2160&sign=b536f34d5d00b1a31da59dc593278cff&ava=1\n'
        },
        {
          name: 'Kirill',
          id: 6,
          avatar: 'https://sun1-92.userapi.com/impf/c852120/v852120846/10c3d2/dFD_PGJcGgo.jpg?size=200x0&quality=96&crop=0,406,1218,1218&sign=4175943873740892fcaddb0c0f1a533c&ava=1'
        }
      ]
    },
    messagesData: {
      messageStateItems: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Good!!!'}
      ],
    }
  }
};

const messagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let text = action.messageText;
      return {
        ...state,
        messagesPageData: {
          ...state.messagesPageData,
          messagesData: {
            ...state.messagesPageData.messagesData,
            messageStateItems: [...state.messagesPageData.messagesData.messageStateItems, {id: 5, message: text}]
          }
        }
      };
    }
    default:
      return state;
  }
};

export const sendMessage = (messageText: any) => ({
  type: SEND_MESSAGE,
  messageText
});

export default messagesReducer;
