"use client";
import { useEffect, useState } from "react";

export const getUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const parseUser = JSON.parse(localUser);
    setUser(parseUser);
  }, [user !== null]);
  return user;
};
