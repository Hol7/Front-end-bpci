import React from "react";
import { media } from "../libs/media";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import img from "../images/backgrounds/carte.png";
import Footer from "../components/footer";
// /   flex  h-screen bg-bpciwhite flex-wrap w-screen
//  h-screen flex-wrap w-screen justify-around item-center content-center
export default function Home() {
  return (
    <div
      className="flex bg-bpcired-500 flex-col bg-bpciwhite
    
      justify-around item-center content-center"
    >
      <div
        className="flex bg-bpciwhite "
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="grid w-2/4 h-auto justify-center item-center content-center ">
          <div className="w-100 h-100 mb-20">
            <p
              className="text-left text-bpcidark"
              style={{ fontSize: "50px", fontWeight: "600" }}
            >
              Plateforme de <br />
              remonté d’allerte de la <br />
              banque populaire de <br />
              Côte- d’Ivoire{" "}
            </p>
          </div>

          <div className="flex w-100 justify-left gap-8 ">
          <Link to="/depotplainte">
          <button className="bg-bpciorange p-2 w-60 h-16 rounded text-bpciwhite">
              Déposer une plainte{" "}
            </button>

          </Link>
          <Link to="/suivreplainte">
          <button className="bg-bpcidark p-2 w-60 h-16 rounded text-bpciwhite">
         Suivre une plainte
            </button>

          </Link>
          
          </div>
        </div>

        <div className="flex flex-row w-2/4  h-screen  ">
          <div className=" ">
            <img
              src={media.Logos.woman}
              className="h-screen  bg-bpciwhite'"
              alt="logo"
              style={{ width: "1400px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
