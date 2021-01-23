import React, { useEffect, useState } from "react";
import Card from "../../UIElements/Card";
import UserItem from "./UserItem";
import "./UserList.css";

const apiUrl = "https://jsonplaceholder.typicode.com/photos";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const UsersList = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setData(json);
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
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          image={data ? data[getRandomInt(1, 100)].thumbnailUrl : null}
          nickname={user.nickname}
          username={user.username}
          password={user.password}
        />
      ))}
    </ul>
  );
};
export default UsersList;
