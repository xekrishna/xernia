import React from "react";

import {
  Collections,
  Contact,
  Content,
  Footer,
  Sale,
  Special,
} from "./sections";

function Home() {
  return (
    <>
      <main className="  text-black w-full h-full">
        <section className="w-full h-[100vh] overflow-hidden">
          <Sale />
        </section>
        <section className="w-full laptop:max-h-[350vh] max-h-full overflow-hidden">
          <Collections />
        </section>
        <section className="w-full laptop:max-h-[350vh] max-h-full overflow-hidden">
          <Special />
        </section>
      </main>
      <footer className="bg-gray-950 text-white w-full h-full mt-20">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
