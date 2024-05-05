import { React, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div> Welcome {user.userName}</div>;
}
