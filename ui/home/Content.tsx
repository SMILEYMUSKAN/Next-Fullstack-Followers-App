const Content = () => {
  return (
    <section className="flex-1  h-full gap-6 flex justify-center items-center flex-col home-content-ui">
      <h1 className="text-5xl text-pink-700">Open for a good chat session!</h1>
      <p className="text-lg text-pink-700">
        Ready to meet awesome people and have great conversations
      </p>
      <p className="text-xl text-pink-700">CONNECT WITH US ON:</p>
      <div className="text-pink-700 text-2xl flex gap-4 ">
        <i className="bx bxl-facebook-circle "></i>
        <i className="bx bxl-instagram "></i>
        <i className="bx bxl-twitter"></i>
      </div>
    </section>
  );
};

export default Content;
