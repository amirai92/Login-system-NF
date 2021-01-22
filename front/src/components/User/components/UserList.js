import React, { useEffect, useState } from "react";
import Card from "../../UIElements/Card";
import UserItem from "./UserItem";
import "./UserList.css";

const apiUrl = "https://jsonplaceholder.typicode.com/photos";

const UsersList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(apiUrl);
      const json = await response.json();
      for (let i = 0; i < 9; i++) {
        setData(json[i].thumbnailUrl);
      }
    }
    fetchMyAPI();
  }, []);

  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user, i) => (
        <UserItem
          key={user.id}
          image={data}
          nickname={user.nickname}
          username={user.username}
          password={user.password}
        />
      ))}
    </ul>
  );
};
export default UsersList;
