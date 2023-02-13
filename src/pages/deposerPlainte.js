import React from "react";
import { Formik ,Form, Field} from "formik";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

export default function DeposerPlainte() {
  return (
    <div
      className="flex bg-bpcired-500 flex-col bg-bpciwhite
    
    justify-around item-center content-center h-screen"
    >
      <div className="flex bg-bpciwhite ">
        <div className="grid w-3/5 h-auto justify-end item-center content-center ">
          <div className="rounded overflow-hidden shadow-lg bg-bpciwhite px-9 ">
            <div className="flex gap-9 px-5 h-20   flex-wrap content-center">
              <div className=" flex gap-1">
                <p className="text-bpciorange ">1.</p>

                <p className="text-bpciorange underline">
                  {" "}
                  Identité sur le dénonciateur
                </p>
              </div>

              <div className="">
                <p>2. Description de la plainte</p>
              </div>
            </div>

            <div className="flex gap-9  h-20   flex-wrap content-center">
              <p className="pl-2">Les champs en astérisque (*) sont obligatoire</p>
            </div>

            <form>
              <div className="flex gap-9 m-2 w-full">
                <div className=" w-full">
                  <label htmlFor="Nom">Nom</label>
                  <input id="Nom" name="Nom" type="text" 
                  style={{ borderWidth:"1px", borderColor:"#CED4DA"  }}/>
                </div>

                <div className=" w-full">
                  <label htmlFor="text">Prénoms</label>
                  <input id="text" name="text" type="text" 
                  style={{ borderWidth:"1px", borderColor:"#CED4DA"  }}/>
                </div>
              </div>

              <div className="flex gap-9 m-2 w-full">
                <div className="w-full">
                  <label htmlFor="phone">Contact téléphonique</label>
                  <input id="phone" name="phone" type="number"
                  
                  style={{ borderWidth:"1px", borderColor:"#CED4DA"  }}/>
                </div>

                <div className="w-full">
                  <label htmlFor="email">Email </label>
                  <input id="email" name="email" type="email" 
                  className="border border-bpcidark"
                  style={{ borderWidth:"1px", borderColor:"#CED4DA"  }}
                  />
                </div>
              </div>

              <div className="w-full m-2">
                  <label htmlFor="select">Organisme concernée * </label>
                 
                  <select name="Option" id="Option">
                    <option value="Option 01">Option 01</option>
                    <option value="Option 01">Option 02</option>
                    <option value="Option 01">Option 03</option>
                    <option value="Option 01">Option 01</option>
                    </select>
                </div>

                <div className="mt-3 w-full">
                  <label htmlFor="textarea " className="ml-2">Personnes impliquées *</label>
                  <textarea id="w3review" name="w3review" rows="1" cols="10"
                  className="w-full ml-2 mt-2"
                  >
                    </textarea>
                </div>

                
                <div className="flex flex-wrap justify-end align-center content-center w-auto  h-20   mt-4 mb-4 ml-5">

                  <NavLink to="/depotplainteStep2">
                    <div className="h-full w- md:w-20 lg:w-20">
                    <button type="submit" className='bg-bpciorange p-2 w-38 h-14 px-4  rounded text-bpciwhite'> Suivant</button>
                    </div>
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
