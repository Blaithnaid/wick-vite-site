import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Header from "../components/Header";

const Home = () => {
  useEffect(() => {
    document.title = "Wick | Home";
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid pt-5 d-flex justify-items-center">
        <div className="container lg:w-3/4 sm:w-full mb-24 text-center w-100">
          <Hero />
        </div>
      </div>
      {/* Features Section */}
      <div className="pt-5 bg-zinc-900 text-white">
        <div className="row">
          <div className="col text-center mb-4 py-8 px-10">
            <h2
              className="display-5 fw-bold"
              style={{
                color: "white",
              }}
            >
              <b>Our Features</b>
            </h2>
            <p
              className="text-muted"
              style={{
                color: "white",
              }}
            >
              Discover what it takes to reach the heights of social management.
            </p>
          </div>
        </div>
        <div className="row g-4">
          <Features />
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center py-3 bg-[#7870eb] text-white">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Wick. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
