import { User } from "@/types";
import { getUser } from "@/utils/auth";
import Link from "next/link";

const Header = () => {
  const user: any = getUser();

  return (
    <header className="flex-2 bg-white flex justify-between  p-2 py-2 items-center gap-2 header-border-ui">
      <h1 className="text-2xl text-pink-700">Net Friends</h1>
      <div className="flex  gap-8 text-center text-lg">
        <p className="cursor-pointer text-pink-700 text-xl hover:text-gray-500 hover:transition">
          Home
        </p>
        <p className="cursor-pointer text-xl text-pink-700 hover:text-gray-900/10 hover:transition">
          About
        </p>
        <p className="cursor-pointer text-xl text-pink-700 hover:text-gray-900/10 hover:transition">
          Contact
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="/users">
          <button className="px-6 py-3 text-pink-700 text-2xl font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Get Started
          </button>
        </Link>

        {user?.email ? (
          <div className="flex items-center justify-center gap-2">
            <i className="bx bxs-user-circle text-pink-700 text-2xl"></i>
            <p className="text-pink-700 text-xl">{user.username}</p>
          </div>
        ) : (
          <Link href="/login">
            <button className="px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
