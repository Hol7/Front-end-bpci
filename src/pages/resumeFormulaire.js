import React from "react";
import { Formik ,Form, Field} from "formik";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";


export default function ResumeFormulaire() {
  return (
    <div
      className="flex bg-bpcired-500 flex-col bg-bpciwhite
    
    justify-around item-center content-center h-screen"
    >
      <div className="flex bg-bpciwhite justify-around item-center content-center ">
        <div className=" h-auto justify-end item-center content-center ">
          <div className="rounded overflow-hidden shadow-lg bg-bpciwhite px-9 w-11/12 ">
            <div className="flex gap-9 px-5 h-20   flex-wrap content-center">
           

              <div className="">
                <p className="text-bold text-bpcidark">Résumé de la demande</p>
              </div>
            </div>

            

            <form>
              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Nom: </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">- </p>
                </div>
              </div>

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Prénom : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">- </p>
                </div>
              </div>

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Contact téléphonique : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">-: </p>
                </div>
              </div>

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Adresse email : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">- </p>
                </div>
              </div>

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Organisme concerné : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">- </p>
                </div>
              </div>

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Personnes impliquées : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">- </p>
                </div>
              </div>

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Description de la plainte : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-end text-bpcidark">- Lörem ipsum äst dåben. Möst premölig dåska. Fastlans stenonde, pseudodore vägt. 
 
</p>
                </div>
              </div> 

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Description de la plainte avec un fichier audio  : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">- AUD_558896654.mp3</p>
                </div>
              </div>

              <div className="flex justify-between gap-9 m-7 mt-4 w-11/12">
                <div className=" ">
                  <p className="text-bold text-bpcidark">Preuve de la plainte : </p>
                </div>

                <div className=" ">
                  <p className="text-bold text-bpcidark">- docpreuv.docx</p>
                </div>
              </div>




                
                <div className="flex flex-wrap justify-end align-center content-center w-auto gap-9  h-20   mt-4 mb-4 ml-5">
                <NavLink to="/depotplainteStep2"> 
                <button type="submit" className='bg-bpciorange p-2 w-38 h-14 px-4  rounded text-bpciwhite'> Précédent</button>
                </NavLink>

                <NavLink to="/depotplainteStep2">
                <button type="submit" className='bg-bpciorange p-2 w-38 h-14 px-4  rounded text-bpciwhite'> Envoyer ma plainte</button>
                </NavLink>

               
               

                </div>

             

              
            </form>
          </div>
        </div>



       
      </div>
      <Footer/>
    </div>
  );
}
