import Header from "../components/Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="sticky top-0 z-50 text-orange-700">
        <div className="h-40 grid place-content-center">
          <h1 className="text-xl">Hello, world. Learn how to code</h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="p-4">
          <h2 className="font-bold text-lg">Recent Posts</h2>
          <p className="h-[2000px]">Some content</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
