
const reducer = (state, action) => {
  const {status, data: { authors, messages }} = action;

  switch (status) {
    case "get":
      const mapOfAuthors = new Map();
      authors.forEach((element) => mapOfAuthors.set(element.id, element.name));

      const messagesWithAuthors = messages.map((message) => {
        const messageWithName = {
          ...message,
          authorName: mapOfAuthors.get(message.authorId),
        };
        return messageWithName;
      });
      const newState = {
        ...state,
        authors,
        messages:messagesWithAuthors         
      };
      return newState
      break;
    case 'error':{
      
    }  
    default:
      return state;
      break;
  }  
};
export default reducer;