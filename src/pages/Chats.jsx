import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUser, REMOVE_ACTIVE_USER } from "../redux/slices/auth_slice";

export default function Chats() {
  const [chats, setChats] = useState([]);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  const remove = () => {
    dispatch(REMOVE_ACTIVE_USER());
    navigate("/");
  };

  return (
    <div className="chats">
      <h1>Chats</h1>
      {user && <p>Hi, {user.username}</p>}
      {user && <button onClick={remove}>Remove user</button>}
    </div>
  );
}
