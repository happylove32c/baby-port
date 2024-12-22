import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import DotPart from "./components/DotPart";
import Whitespace from "./components/Whitespace";
import FooterImg from '../assets/office.png'
import GitImg from '../assets/Github.svg'
import GImage from '../assets/Gmail.svg'
import WhatImage from '../assets/Whatsapp.svg'



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <main className="min-h-screen overflow-hidden ">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <div className="relative min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1730247147351-6db1dc7b2dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8 p-4">
            <h1
              className="text-white text-6xl md:text-9xl font-bold leading-snug whitespace-normal"
              data-aos="fade-up"
            >
             Loveday  <br /> Annointed
            </h1>
            <p
              className="text-white flex items-center justify-center text-xl md:text-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Graphics Designer <DotPart size="8px" color="red" className="mx-2" /> Web developer <DotPart size="8px" color="red" className="mx-2" /> Web designer
            </p>

            <div className="scroll-btn bottom-10 flex w-full items-center justify-center transform -translate-x-1/2 cursor-pointer animate-bounce"
            // onClick={scrollToSection}
            >
              <span className="material-symbols-outlined text-white text-lg ">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

          <Whitespace/>

        <div className="section-2 min-h-screen flex flex-row sm:flex-col p-6 justify-center items-center bg-black ">
          <div className="handles flex flex-col sm:flex-row justify-around items-center w-full gap-6 p-8">
            <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="" className="h-32 custom-fade " data-aos="fade-right" />
            <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" alt="" className="h-32 custom-fade " data-aos="fade-in" data-aos-delay="300" />
            <img src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="" className="h-32 custom-fade " data-aos="fade-left" data-aos-delay="600" />
          </div>

          <div className="handles flex flex-col sm:flex-row justify-around items-center w-full gap-6 p-8">
            <img src="https://www.svgrepo.com/show/343553/facebook-network-communication-internet-interaction.svg" alt="" className="h-32 custom-fade " data-aos="fade-up" data-aos-delay="900" />
            <img src="https://www.svgrepo.com/show/343519/slack-communication-interaction-message-network.svg" alt="" className="h-32 custom-fade " data-aos="fade-up" data-aos-delay="1200" />
            <img src="https://www.svgrepo.com/show/343522/telegram-communication-chat-interaction-network-connection.svg" alt="" className="h-32 custom-fade " data-aos="fade-up" data-aos-delay="1500" />
          </div>
        </div>

        <Whitespace/>

        <div className="section-works bg-black min-h-screen flex items-center justify-center p-4">
          <div className="work-1 w-full flex flex-col sm:flex-row gap-6 items-center justify-evenly ">
            <div className="img" data-aos="fade-right" ><img src="https://i.pinimg.com/736x/56/2c/d2/562cd2ce5df54b386f31c41684a897d7.jpg" alt="" className="h-[400px] sm:h-[600px] w-auto -rotate-12 transform hover:rotate-0 hover:scale-110 opacity-50 hover:opacity-100 transition-all duration-300 "   /></div>
            

            <div className="info-text flex flex-col justify-between gap-3" data-aos="fade-left" >
              <h1 className="text-3xl text-xl text-white ">Discover the Timeless <br /> Beauty of Greek Culture</h1>
              <p className="text-white text-md "> Step into a world of ancient myths, breathtaking art, and <br /> rich traditions that continue to inspire the modern world. </p>
              <div className="links flex h-12 gap-6 mt-3 ">
                <img src="https://www.svgrepo.com/show/345338/website-site-delivery-shipping-order-web-network.svg" alt="" className="h-12" />
                <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="" className="h-12" />
              </div>
            </div>
          </div>
        </div>


        <div className="section-works bg-black min-h-screen flex items-center justify-center p-4">
          <div className="work-1 w-full flex flex-col sm:flex-row gap-6 items-center justify-evenly ">
            <div className="info-text flex flex-col justify-between gap-3" data-aos="fade-left" >
              <h1 className="text-3xl text-xl text-white ">A Tranquil Escape Amidst Nature<br /></h1>
              <p className="text-white text-md "> Discover the serenity of untouched landscapes where <br /> every moment whispers peace and harmony.</p>
              <div className="links flex h-12 gap-6 mt-3 ">
                <img src="https://www.svgrepo.com/show/345338/website-site-delivery-shipping-order-web-network.svg" alt="" className="h-12" />
                <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="" className="h-12" />
              </div>
            </div>

            <div className="img" data-aos="fade-right" ><img src="https://i.pinimg.com/736x/a8/61/6a/a8616a90e9653cc479b970cb0dd551d5.jpg" alt="" className="h-[400px] sm:h-[600px] p-4 w-auto rotate-12 transform hover:rotate-0 hover:scale-110 opacity-50 hover:opacity-100 transition-all duration-300 "   /></div>
          </div>
        </div>

        <div className="section-works bg-black min-h-screen flex items-center justify-center p-4">
          <div className="work-1 w-full flex flex-col sm:flex-row gap-6 items-center justify-evenly ">
            <div className="img" data-aos="fade-right" ><img src="https://i.pinimg.com/736x/ce/bd/91/cebd918e14cf419344d65ed08df609a7.jpg" alt="" className="h-[400px] sm:h-[600px] transform hover:rotate-0 hover:scale-110 p-4 w-auto -rotate-12 opacity-50 hover:opacity-100 transition-all duration-300 "   /></div>
            

            <div className="info-text flex flex-col justify-between gap-3" data-aos="fade-left" >
              <h1 className="text-3xl text-xl text-white ">Unleash Your Destiny in the Astral Realms</h1>
              <p className="text-white text-md "> Embark on an epic journey where ancient magic<br /> and your choices shape the fate of the universe. <br /> Become the hero you were always meant to be. </p>
              <div className="links flex h-12 gap-6 mt-3 ">
                <img src="https://www.svgrepo.com/show/345338/website-site-delivery-shipping-order-web-network.svg" alt="" className="h-12" />
                <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="" className="h-12" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-works bg-black min-h-screen flex items-center justify-center p-4">
          <div className="work-1 w-full flex flex-col sm:flex-row gap-6 items-center justify-evenly ">
            <div className="info-text flex flex-col justify-between gap-3" data-aos="fade-left" >
              <h1 className="text-3xl text-xl text-white ">Unleash Your Power, Become the Legend</h1>
              <p className="text-white text-md "> Join Goku, Vegeta, and the Z Fighters in an epic battle for the universe!</p>
              <div className="links flex h-12 gap-6 mt-3 ">
                <img src="https://www.svgrepo.com/show/345338/website-site-delivery-shipping-order-web-network.svg" alt="" className="h-12" />
                <img src="https://www.svgrepo.com/show/475654/github-color.svg" alt="" className="h-12" />
              </div>
            </div>

            <div className="img" data-aos="fade-right" ><img src="https://i.pinimg.com/236x/5f/e9/80/5fe980b41389c104900dcc091ff31f2a.jpg" alt="" className="h-[400px] sm:h-[600px] transform hover:rotate-0 hover:scale-110 p-4 w-auto rotate-12 opacity-50 hover:opacity-100 transition-all duration-300 "   /></div>
          </div>
        </div>

        <Whitespace/>

          <div className="bg-black min-h-screen p-6 flex flex-col items-center justify-center">
            <div className="header">
              <h1 className="text-white text-4xl" data-aos="fade-down" >Skills and Services</h1>
            </div>

            <div className="mt-8 overflow-hidden" data-aos="fade-up">
              <div className="images flex items-center justify-evenly">
                <div className="set flex flex-col sm:flex-row items-center " data-aos="slide-right" >
                <img src="https://www.svgrepo.com/show/354259/react.svg" alt="Image 1" className="h-32" />
                <img src="https://www.svgrepo.com/show/373929/node.svg" alt="Image 1" className="h-32" />
                <img src="https://www.svgrepo.com/show/373845/mongo.svg" alt="Image 1" className="h-32" />
                <img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="" className="h-32" />
                <img src="https://www.svgrepo.com/show/353735/firebase.svg" alt="Image 1" className="h-32" />
                </div>
                <div className="set flex flex-col sm:flex-row items-center" data-aos="slide-left">
                <img src="https://www.svgrepo.com/show/475696/wordpress-color.svg" alt="Image 1" className="h-32" />
                <img src="https://www.svgrepo.com/show/354987/figma.svg" alt="" className="h-32" />
                <img src="https://www.svgrepo.com/show/303177/photoshop-cc-logo.svg" alt="" className="h-32" />
                <img src="https://www.svgrepo.com/show/303184/adobe-illustrator-cc-logo.svg" alt="" className="h-32" />
                <img src="https://www.svgrepo.com/show/303199/lightroom-cc-logo.svg" alt="" className="h-32" />
              </div>
            </div>
          </div>
        </div>

        <Whitespace/>

        <div className="bg-black flex items-center justify-center min-h-screen">
  <div
    className="image flex items-center justify-center bg-transparent w-1/2 min-h-screen animate-float-bounce"
    data-aos="fade-in"
  >
    <img src={FooterImg} alt="" className="h-auto max-w-full" />
  </div>

  <div className="w-1/2 min-h-screen flex flex-col justify-center items-center">
    <div className="header flex flex-col w-full justify-center items-center">
      <h1 className="text-7xl text-white">Contact Me</h1>
      <p className="text-2xl mt-4 text-white">
        Let's build beautiful sites together
      </p>
    </div>

    <div className="social-handles flex justify-center mt-12 w-full items-center gap-6">
      <img src={GitImg} alt="" className="h-12" />
      <img src={GImage} alt="" className="h-12" />
      <img src={WhatImage} alt="" className="h-12" />
    </div>

    <div className="form w-full flex flex-col justify-center items-center mt-8">
      <input
        type="text"
        placeholder="Let's get started"
        className="p-4 rounded-full outline-none border border-white bg-transparent text-white w-1/2"
      />
      <button className="border p-2 mt-8 rounded-full text-white px-2 py-2">
        Send message
      </button>
    </div>
  </div>
          </div>
      </main>
    </div>
  );
};

export default Home;
