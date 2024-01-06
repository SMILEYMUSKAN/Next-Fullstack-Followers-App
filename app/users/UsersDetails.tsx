"use client";
import ProtectedPage from "@/protectedRoutes/ProtectedPage";
import UserPageComponent from "@/ui/usersPage/userPage";
import { getUser } from "@/utils/auth";
import { useRouter } from "next/navigation";

const UserDetails = ({ users }: any) => {
  const user = getUser();
  const router = useRouter();

  if (user === null) {
    return router.push("/login");
  }

  return (
    <main
      className="bg-white max-h-[700px]  overflow-y-auto
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:bg-white
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    [&::-webkit-scrollbar-thumb]:rounded
    dark:[&::-webkit-scrollbar-track]:bg-slate-100
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-300 main-ui">
      <ProtectedPage>
        <UserPageComponent users={users} userObj={user} />
      </ProtectedPage>
    </main>
  );
};

export default UserDetails;
