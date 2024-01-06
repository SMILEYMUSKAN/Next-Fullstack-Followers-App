"use client";
import { getUser } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedPage = ({ children }: any) => {
  const router = useRouter();
  const user = getUser();

  useEffect(() => {
    if (user === null) {
      return router.push("/login");
    }
  }, [user === null]);

  useEffect(() => {
    if (user !== null) {
      return router.push("/users");
    }
  }, [user !== null]);
  return <div>{children}</div>;
};

export default ProtectedPage;
