import { useContext } from "react";
import { ConversationContext } from "../contexts/ConversationContext";

const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error("context must be applied with AuthProvider");
  }
  return context;
};

export default useConversation;

/* import { useEffect, useState } from "react";
import { ConversationData } from "../interfaces/conversation";
import axios from "axios";

const useConversation = () => {
  const conversationURL = "http://localhost:5002/api/v1/conversations";
  const [conversations, setConversations] = useState<ConversationData[]>([]);

  const getConversations = async () => {
    try {
      const conversationResponse = await axios.get(conversationURL, {
        withCredentials: true,
      });

      setConversations(conversationResponse.data as ConversationData[]);
    } catch (err: any) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  return { conversations };
};

export default useConversation;
 */