import Image from "next/image";
import { MenuItem } from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export const HomeMenu = () => {
    return(
        <section>        
               <SectionHeaders
                subHeader={"Mais Vendidos"}
                mainHeader={"Menu"}
               />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 z-10">
               <MenuItem />
               <MenuItem />
               <MenuItem />
               <MenuItem />
               <MenuItem />
               <MenuItem />
            </div>
        </section>
    );
}