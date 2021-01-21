import React from "react";
import Card from "../../UIElements/Card";
import UserItem from "./UserItem";
import "./UserList.css";

const UsersList = (props) => {
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
          image={user.image}
          nickname={user.nickname}
          username={user.username}
          password={user.password}
        />
      ))}
    </ul>
  );
};

export default UsersList;
