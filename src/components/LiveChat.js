import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateName } from "../utils/helper";
const LiveChat = () => {
  const chats = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const [livemsg, setLiveMsg] = useState(null);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat({
          name: generateName(),
          message: "Hi Hola Namste",
        })
      );
      console.log(chats);
      console.log("api polling");
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <span className="font-bold ml-9">Live Chat</span>
      <div className="overflow-y-scroll h-[450px] flex flex-col-reverse ml-9">
        {chats &&
          chats.map((c, i) => {
            console.log(c);
            return (
              <ChatMessage
                //   key={i}
                name={c.name}
                message={c.message}
              ></ChatMessage>
            );
          })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChat({
              name: "Samiksha",
              message: livemsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          type="text"
          className="px-2 w-9 border border-black w-80 ml-9 mt-1 rounded-md"
          value={livemsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        ></input>
        <button className="bg-green-100 p-2 ml-2">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
