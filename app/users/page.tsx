import { getRemainingUsers, getdbUsers } from "@/utils/databaseUsers";
import UserDetails from "./UsersDetails";
import SideMenu from "@/ui/usersPage/sideMenu";
// import { getUser } from "@/utils/auth";

export default async function UsersComponent() {
  "use server";
  const users = await getdbUsers();
  // const user = getUser();
  // const remainingUser = await getRemainingUsers("muskan@gmail.com");
  // console.log(remainingUser, "USER", user);
  return (
    <div className="h-4/6 w-9/12 flex rounded mx-auto border shadow-2xl mt-12">
      <SideMenu />
      <UserDetails users={users} />
    </div>
  );
}
