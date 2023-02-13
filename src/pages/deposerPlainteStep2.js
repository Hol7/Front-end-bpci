import React from "react";
import { Formik ,Form, Field} from "formik";
import Footer from "../components/footer";
import { BsUpload } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function DeposerPlainteStep2() {
  return (
    <div
      className="flex bg-bpcired-500 flex-col bg-bpciwhite
    
    justify-around item-center content-center h-screen"
    >
      <div className="flex bg-bpciwhite ">
        <div className="grid w-3/5 h-auto justify-end item-center content-center ">
          <div className="rounded overflow-hidden shadow-lg bg-bpciwhite px-9 ">
            <div className="flex gap-9 px-5 h-20   flex-wrap content-center">
            

              <div className="">
                <p>1. Identité sur le dénonciateur </p>
              </div>

              <div className=" flex gap-1">
                <p className="text-bpciorange ">2.</p>

                <p className="text-bpciorange underline">
                  {" "}
                  Description de la plainte
                </p>
              </div>
            </div>

            <div className="flex gap-9  h-20   flex-wrap content-center">
              <p className="pl-2">Les champs en astérisque (*) sont obligatoire</p>
            </div>

            <form>
             
          

                <div className="mt-3 w-full">
                  <label htmlFor="textarea " className="ml-2 ">Description de la plainte avec du  texte  *</label>
                  <textarea id="w3review" name="w3review" rows="1" cols="10"
                  className="w-full ml-2 mt-2"
                  >
                    </textarea>
                </div>

                <div className="mt-3  w-full">
                  <p className="ml-2 mb-6 text-bpcidark">Description de la plainte avec un fichier audio *</p>
                   <div className="flex gap-9">
      
                   <button type="upload" className='bg-bpciorange ml-2 p-2 w-38 h-10 px-3 flex gap-3 rounded text-bpciwhite'> 
                   <BsUpload className="mt-1" />
                   Choisir les fichiers</button>

                   <p className='p-2 w-38 h-10 px-3 flex gap-3 rounded text-bpciorange'> 
                   Télécharger votre fichier audio</p>

                   </div>
                </div>


                <div className="mt-9  w-full">
                  <p className="ml-2 mb-4 text-bpcidark">Description de la plainte avec un fichier audio *</p>
                   <div className=" gap-9">
      
                   <button type="upload" className='bg-bpciorange ml-2 p-2 w-38 h-10 px-3 flex gap-3 rounded text-bpciwhite'> 
                   <BsUpload className="mt-1" />
                   Choisir les fichiers</button>

                   <p className='p-2 w-38 h-10 px-3 flex gap-3 rounded text-bpcidark'> 
                   Formats acceptés : pdf, image, audio, vidéo</p>

                   </div>
                </div>

                
                <div className="flex flex-wrap justify-end align-center content-center w-auto gap-9  h-20   mt-4 mb-4 ml-5">
                <NavLink to="/depotplainte">
                <button type="submit" className='bg-bpciorange p-2 w-38 h-14 px-4  rounded text-bpciwhite'> Précédent</button>
                </NavLink>
                
                <NavLink to="/resumeform">
                <button type="submit" className='bg-bpciorange p-2 w-38 h-14 px-4  rounded text-bpciwhite'> Suivant</button>
                </NavLink>
               
              

                </div>

             

              
            </form>
          </div>
        </div>

        <div className="flex flex-row w-2/5  justify-start justify-self-start justify-items-end  ">
          <div className="p-10  w-4/5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-1">
            <div className=" rounded overflow-hidden shadow-lg">
              {/* <img className="w-full" src="/mountain.jpg" alt="Mountain"/> */}
              <div className="flex  justify-left align-center px-6 py-3 bg-bpciGraye content-center ">
                <div className="text-xl  h-10 w-full flex-wrap text-left  justify-center align-center">
                  A propos de ce service{" "}
                </div>
              </div>

              <div className="px-6  mt-4">
                <p className="text-gray-700 text-base">
                  Lörem ipsum evid opp. Marade direktare monok kameratelefon.
                  Transfett vafor och dida. Trisk bödat. Bösa rallylydnad
                  soligt. Döda vinkeln-varnare desk, tude megat. Nynde
                  Odellplatta. E-cigarett peligt. Bioling dibor prengen öfagt en
                  diling. Plasm dick i tisk, snålsurfa heminade. Här best. Jåvis
                  tere, flexicurity häras amosm. Kontraitet mikrosoment. Kar
                  spenade. Geotaggning vibölig poplada jårade sunat. Jyter
                  tegon. Råra hälanas degisk, tiskade. Beplapp vining are
                  dyspenera. Nyrat fare ditis tradat. Jåspelingar anar pedat och
                  tradav. Telogi hol eftersom pedyling åv tidagon. Ekocentrism
                  termotropi taspegt den interaktiv skrivtavla ifall lutt.
                  Hängen tasm. Regar ben i depesamma. Pensionärskuvös nibyling.
                  Nehonade semiktigt och ter sosena pladosm. Fyv tretektig.
                  Presaren kofov nibyrade då ekomatisk. Tiss hexarar. Krora
                  mill.
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
      <Footer/>
    </div>
  );
}
