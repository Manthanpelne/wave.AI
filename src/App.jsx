import "./App.css";
import { Header } from "./components/header";
import { FlexDivs } from "./components/flexdivs";
import { Button } from "./components/button";
import { AnimationScroller } from "./components/animationScroller";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <FlexDivs />
      <p className="text-left pt-20">GEAR UP</p>
      <div className="pt-2">
        <img
          src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702018429.jpg"
          alt=""
        />
        <h4 className="pt-7 font-semibold">Nike Football</h4>
        <h1 className="pt-3 md:text-[34px] font-extrabold">
          2024 NATIONAL TEAM KITS
        </h1>
        <p className="pt-6 text-sm">
          Featuring Dri-FIT ADV, built for the moments that matters most.
        </p>
        <Button />

        <p className="mt-20 text-left">TRENDING</p>
        <div className="flex mt-4">
          <img
            className="w-1/2 cursor-pointer"
            src="https://images.unsplash.com/photo-1615451210353-cbcf249f392a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-1/2 cursor-pointer"
            src="https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <h4 className="pt-7 font-semibold">Nike Dunk</h4>
        <h1 className="pt-3 md:text-[34px] font-bold">
          UNAPOLOGETICALLY ORIGINAL
        </h1>
        <p className="pt-6 text-sm">
          Serve up your undeniable style in the iconic versatility of a hoops
          legend.
        </p>
        <Button />

        <AnimationScroller />

        <p className="mt-20 text-left">ALWAYS ICONIC</p>
        <div className="mt-5 lg:flex sm:grid grid-cols-2">
          <img
            className="lg:h-96 w-80 p-2"
            src="https://images.unsplash.com/photo-1695697104675-429f5fcdede6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2UlMjBhaXIlMjBqb3JkYW4lMjAxJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="lg:h-96 w-80 p-2"
            src="https://images.unsplash.com/photo-1695831440805-1b623520e70e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2UlMjBhaXIlMjBqb3JkYW4lMjAxJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="lg:h-96 w-80 p-2"
            src="https://images.unsplash.com/photo-1700407592504-f4de855d559a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pa2UlMjBhaXIlMjBqb3JkYW4lMjAxJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="lg:h-96 w-80 p-2"
            src="https://images.unsplash.com/photo-1591370409347-2fd43b7842de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMGFpciUyMGpvcmRhbiUyMDElMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <img
            className="lg:h-96 w-80 p-2"
            src="https://images.unsplash.com/photo-1698609467326-fab7045d773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5pa2UlMjBhaXIlMjBqb3JkYW4lMjAxJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>

        <p className="mt-20">scroll</p>
        <div className="md:flex">
          <div className="flex overflow-x-scroll mt-6">
            <div className="flex gap-4">
              <div class="bg-[url(https://images.unsplash.com/photo-1608444265903-d7883082872b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww)] h-[700px] w-[500px] relative">
                <div class="absolute bottom-20 text-left px-4 py-3 bg-gray-500/50 w-full">
                  <h1 class="text-white font-semibold text-lg">
                    {" "}
                    Member Product{" "}
                  </h1>
                  <p class="text-white text-2xl">Your Exclusive Access</p>
                  <Button />
                </div>
              </div>
              <div class="bg-[url(https://images.unsplash.com/photo-1588882077358-3553d45a57dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww)] h-[700px] w-[500px] relative">
                <div class="absolute bottom-20 text-left px-4 py-3 bg-gray-500/50 w-full">
                  <h1 class="text-white font-semibold text-lg">
                    {" "}
                    Member Product{" "}
                  </h1>
                  <p class="text-white text-2xl">Your Exclusive Access</p>
                  <Button />
                </div>
              </div>
              <div class="bg-[url(https://images.unsplash.com/photo-1611886163562-95d25f547930?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5pa2UlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D)] h-[700px] w-[500px] relative">
                <div class="absolute bottom-20 text-left px-4 py-3 bg-gray-500/50 w-full">
                  <h1 class="text-white font-semibold text-lg">
                    {" "}
                    Member Product{" "}
                  </h1>
                  <p class="text-white text-2xl">Your Exclusive Access</p>
                  <Button />
                </div>
              </div>
              <div class="bg-[url(https://images.unsplash.com/photo-1582113943690-eb2d7b74cdb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmlrZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww)] h-[700px] w-[500px] relative">
                <div class="absolute bottom-20 text-left px-4 py-3 bg-gray-500/50 w-full">
                  <h1 class="text-white font-semibold text-lg">
                    {" "}
                    Member Product{" "}
                  </h1>
                  <p class="text-white text-2xl">Your Exclusive Access</p>
                  <Button />
                </div>
              </div>
              <div class="bg-[url(https://images.unsplash.com/photo-1598623335306-5d0040e41f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMGNsb3RoaW5nfGVufDB8fDB8fHww)] h-[7+00px] w-[500px] relative">
                <div class="absolute bottom-20 text-left px-4 py-3 bg-gray-500/50 w-full">
                  <h1 class="text-white font-semibold text-lg">
                    {" "}
                    Member Product{" "}
                  </h1>
                  <p class="text-white text-2xl">Your Exclusive Access</p>
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex justify-between text-left w-2/4 m-auto">
          <div className="mt-20">
            <p className="font-bold">Icons</p>
            <p className="pt-3 text-gray-300">Air Force 1</p>
            <p className="pt-2 text-gray-300">Huarache</p>
            <p className="pt-2 text-gray-300">Air Max 90</p>
            <p className="pt-2 text-gray-300">Air Max 95</p>
          </div>
          <div className="mt-20">
            <p className="font-bold">Icons</p>
            <p className="pt-3 text-gray-300">Air Force 1</p>
            <p className="pt-2 text-gray-300">Huarache</p>
            <p className="pt-2 text-gray-300">Air Max 90</p>
            <p className="pt-2 text-gray-300">Air Max 95</p>
          </div>
          <div className="mt-20">
            <p className="font-bold">Icons</p>
            <p className="pt-3 text-gray-300">Air Force 1</p>
            <p className="pt-2 text-gray-300">Huarache</p>
            <p className="pt-2 text-gray-300">Air Max 90</p>
            <p className="pt-2 text-gray-300">Air Max 95</p>
          </div>
          <div className="mt-20">
            <p className="font-bold">Icons</p>
            <p className="pt-3 text-gray-300">Air Force 1</p>
            <p className="pt-2 text-gray-300">Huarache</p>
            <p className="pt-2 text-gray-300">Air Max 90</p>
            <p className="pt-2 text-gray-300">Air Max 95</p>
          </div>
          <div></div>
          <div></div>
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default App;
