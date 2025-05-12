import React from "react";
import { useSelector } from "react-redux";

export default function User() {
  const { user } = useSelector((store) => store.sign_in_up);
  return (
    <div className="mx-auto px-12 py-8">
      <div>
        <h1>User Info</h1>
      </div>
      <div>
        <p>{user.username}</p>
      </div>
    </div>
  );
}
