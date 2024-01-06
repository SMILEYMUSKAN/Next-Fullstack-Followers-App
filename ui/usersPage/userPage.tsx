const UserPageComponent = ({ users }: any) => {
  return (
    <div className="user-card-ui flex-1  font-sans gap-6 w-full h-full max-h-[700px] flex flex-col rounded-xl ">
      <h1 className="text-3xl text-pink-500 bg-white p-4 w-full  font-medium  fixed ">
        Explore People
      </h1>
      <div className="p-6">
        {users?.map((user: any) => (
          <section
            key={user.id}
            className="flex mt-12 w-full  border-b-2 pb-2 border-gray-600">
            <img
              className="rounded-full img-ui"
              src={user.profile}
              alt="Image Description"
            />
            <div className="p-4 md:p-5 flex justify-between items-center w-full">
              <section>
                <h3 className="text-xl text-pink-900 font-bold dark:text-pink">
                  {user.username}
                </h3>
                <p className="mt-1 text-pink-500 dark:text-pink-200">
                  2000 followers
                </p>
              </section>

              <button className="flex items-center text-pink-700 justify-center font-semibold border-2 rounded btn-ui">
                Follow
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default UserPageComponent;
