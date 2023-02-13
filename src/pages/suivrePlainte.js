import React from "react";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

export default function SuivrePlainte() {
  return (
    <div
      className="flex bg-bpcired-500 flex-col bg-bpciwhite
  
  justify-around item-center content-center h-screen"
    >
      <div className="flex bg-bpciwhite justify-around item-center content-center  mb-60">
        <div className=" h-auto justify-end item-center content-center ">
          <div className="rounded overflow-hidden shadow-lg bg-bpciwhite px-9 w-11/12 ">
            <div className="flex gap-9  h-20   flex-wrap content-center">
              <div className="">
                <p
                  className="text-bold text-bpcidark"
                  style={{ fontWeight: "800" }}
                >
                  Résumé de la demande
                </p>
              </div>
            </div>

            <form>
              <div className="flex justify-between gap-9  w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpciwhite">
                    Lörem ipsum äst dåben Lörem ipsum äst dåben{" "}
                  </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-end text-bpciwhite">
                    - Lörem ipsum äst dåben. Möst premölig dåska. Fastlans
                    stenonde, pseudodore vägt.
                  </p>
                </div>
              </div>

              <div className="w-full flex flex justify-center gap-4 align-center content-center">
                <div className="w-full ">
                  <label htmlFor="email">
                    Entrer le code de suivi de plainte{" "}
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="number"
                    className="border border-bpcidark"
                    style={{ borderWidth: "1px", borderColor: "#CED4DA" }}
                  />
                </div>

                <div className=" mt-8">
                  <NavLink to="/depotplainteStep2">
                    <button
                      type="submit"
                      className="bg-bpciorange p-2 w-38 h-12 px-4  rounded text-bpciwhite"
                    >
                      {" "}
                      Vérifier
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="flex flex-wrap justify-end align-center content-center w-auto gap-9  h-20   mt-4 mb-4 ml-5"></div>
            </form>
          </div>
        </div>
      </div>
      <Footer  />
    </div>
  );
}
