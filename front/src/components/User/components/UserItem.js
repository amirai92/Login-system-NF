import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../UIElements/Avatar";
import Card from "../../UIElements/Card";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Card>
          <Link>
            <div className="user-item__image">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="user-item__info">
              <h2>{props.nickname}</h2>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
};

export default UserItem;
