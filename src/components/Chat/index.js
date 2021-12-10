import React, { useEffect, useReducer, useState } from "react";
import { getJSONbyFetch } from "../../api";
import reducer from "./reducer";

const Chat = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [state, despatch] = useReducer(reducer, {
    authors: [],
    messages: [],
  });  

  useEffect(() => {
    setIsLoading(true);
    getJSONbyFetch('/chat.json')
      .then((data) =>
        despatch({
          status: "get",
          data,
        })
      )
      .catch((err) => {setError(err);
        return despatch({status:'error', error:err})})
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      {isLoading && <h2>Loading data</h2>}
      {error && <h2>Sorry somthing went wrong</h2>}
      <h2>Now it's the empty Chat</h2>
      <article>
        <ol>
        {state.messages.map((message) => {
        return (
          <li key={message.id}>
            <h3>{message.authorName}</h3>
            <p>{message.text}</p>
          </li>
        );
      })}
        </ol>
      </article>
      
    </div>
  );
};

export default Chat;
