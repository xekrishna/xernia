import React from "react";

import { Collections, Contact, Content, Footer, Sale } from "./sections";

function Home() {
  return (
    <>
      <main className="  text-black w-full h-full">
        <section className="w-full h-[100vh]">
          <Sale />
        </section>
        <section className="w-full laptop:h-[350vh]  ">
          <Collections />
        </section>
      </main>
      <footer className="bg-gray-950 text-white w-full h-full mt-20">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
