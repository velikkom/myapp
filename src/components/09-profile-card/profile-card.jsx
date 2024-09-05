import React from "react";
import "./profile-card.scss";

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="header">
        <img src="/images/profile/profile.jpg" alt="" />
      </div>
      <div className="content">
        <img src="/images/profile/profile.jpg" alt="" className="avatar" />
        <h2>Vladislav Mikhailov</h2>
        <h4>Russia, Krasnosdar</h4>

        <ul>
          <li>
            <h3>1</h3>
            <p>Shots</p>
          </li>

          <li>
            <h3>2</h3>
            <p>Followers</p>
          </li>
          <li>
            <h3>3</h3>
            <p>Following</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
