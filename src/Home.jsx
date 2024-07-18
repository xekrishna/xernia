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
      <footer>Footer</footer>
    </>
  );
}

export default Home;
