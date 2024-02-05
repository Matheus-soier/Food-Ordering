import Image from "next/image";
import { MenuItem } from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export const HomeMenu = () => {
    return(
        <section>
            <div className="hidden md:flex absolute left-0 right-0 w-full justify-start">
                <div className="absolute top-[-150px] right-0 -z-10">
                    <Image src={'/bacon-1.png'} alt={'sallad'} width={200} height={200}/>
                </div>
            </div>            
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