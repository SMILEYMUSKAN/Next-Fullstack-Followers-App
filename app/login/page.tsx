import { PrismaClient } from "@prisma/client";
import LoginComponent from "./Login";

export default function Login() {
  const createUser = async (props: any) => {
    "use server";
    const prisma = new PrismaClient();
    const user = await prisma.users.create({
      data: {
        email: props.email,
        password: props.password,
        username: props.username,
      },
    });
  };
  return (
    <div className="bg-gray-500 w-screen flex justify-center items-center h-screen">
      <LoginComponent createUser={createUser} />
    </div>
  );
}
