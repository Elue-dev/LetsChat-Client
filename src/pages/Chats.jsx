import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Chats() {
  const [chats, setChats] = useState([]);
  const server_url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const getChats = async () => {
    const { data } = await axios.get(`${server_url}/api/chats`);
    setChats(data);
  };

  useEffect(() => {
    getChats();
  }, []);

  return <div>Chats</div>;
}
