import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import DotPart from "./components/DotPart";
import Whitespace from "./components/Whitespace";

const HomeSample = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div> 
      <main className="min-h-screen overflow-hidden">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <div className="relative min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-fixed md:bg-contain"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1730247147351-6db1dc7b2dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8 p-4">
            <h1
              className="text-white text-6xl sm:text-5xl md:text-9xl font-bold leading-snug whitespace-normal"
              data-aos="fade-up"
            >
              Loveday <br /> Annointed
            </h1>
            <p
              className="text-white text-xl sm:text-lg md:text-3xl flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Graphics Designer <DotPart size="8px" color="red" className="mx-2" /> Web Developer{" "}
              <DotPart size="8px" color="red" className="mx-2" /> Web Designer
            </p>

            <div
              className="scroll-btn bottom-10 flex w-full items-center justify-center transform -translate-x-1/2 cursor-pointer animate-bounce"
              // onClick={scrollToSection}
            >
              <span className="material-symbols-outlined text-white text-lg" aria-label="Scroll down">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        <Whitespace />

        <div className="section-2 min-h-screen flex flex-col p-6 justify-center items-center bg-black">
          <div className="handles flex flex-col sm:flex-row justify-evenly items-center w-full gap-6 p-8">
            <img
              src="https://www.svgrepo.com/show/475654/github-color.svg"
              alt="GitHub"
              className="h-24 sm:h-32 custom-fade"
              data-aos="fade-right"
            />
            <img
              src="https://www.svgrepo.com/show/475661/linkedin-color.svg"
              alt="LinkedIn"
              className="h-24 sm:h-32 custom-fade"
              data-aos="fade-in"
              data-aos-delay="300"
            />
            <img
              src="https://www.svgrepo.com/show/475689/twitter-color.svg"
              alt="Twitter"
              className="h-24 sm:h-32 custom-fade"
              data-aos="fade-left"
              data-aos-delay="600"
            />
          </div>

          <div className="handles flex flex-col sm:flex-row justify-evenly items-center w-full gap-6 p-8">
            <img
              src="https://www.svgrepo.com/show/343553/facebook-network-communication-internet-interaction.svg"
              alt="Facebook"
              className="h-24 sm:h-32 custom-fade"
              data-aos="fade-up"
              data-aos-delay="900"
            />
            <img
              src="https://www.svgrepo.com/show/343519/slack-communication-interaction-message-network.svg"
              alt="Slack"
              className="h-24 sm:h-32 custom-fade"
              data-aos="fade-up"
              data-aos-delay="1200"
            />
            <img
              src="https://www.svgrepo.com/show/343522/telegram-communication-chat-interaction-network-connection.svg"
              alt="Telegram"
              className="h-24 sm:h-32 custom-fade"
              data-aos="fade-up"
              data-aos-delay="1500"
            />
          </div>
        </div>

        <Whitespace />

        <div className="section-works bg-black min-h-screen flex items-center justify-center p-4">
          <div className="work-1 w-full flex flex-col sm:flex-row items-center justify-evenly gap-6">
            <div className="img" data-aos="fade-right">
              <img
                src="https://i.pinimg.com/736x/56/2c/d2/562cd2ce5df54b386f31c41684a897d7.jpg"
                alt="Greek Culture"
                className="h-[400px] sm:h-[600px] w-auto -rotate-12 opacity-50 hover:opacity-100 transition-all duration-300 max-w-full"
              />
            </div>

            <div className="info-text flex flex-col justify-between gap-3" data-aos="fade-left">
              <h1 className="text-2xl sm:text-3xl text-white">
                Discover the Timeless <br /> Beauty of Greek Culture
              </h1>
              <p className="text-white text-md">
                Step into a world of ancient myths, breathtaking art, and <br /> rich traditions that continue to inspire the
                modern world.
              </p>
              <div className="links flex h-12 gap-6 mt-3 ">
                <img
                  src="https://www.svgrepo.com/show/345338/website-site-delivery-shipping-order-web-network.svg"
                  alt="Website"
                  className="h-12"
                />
                <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="GitHub" className="h-12" />
              </div>
            </div>
          </div>
        </div>

        <Whitespace />

        <div className="bg-black min-h-screen p-6 flex flex-col items-center justify-center">
          <div className="header text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white">Crafted With Care by Loveday Annointed</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeSample;
