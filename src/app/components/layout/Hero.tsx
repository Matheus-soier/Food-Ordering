import Image from "next/image";
import { Right } from "../icons/Right";

export const Hero = () => {
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 w-full my-10 md:mt-20 items-center">
            <div className="pt-12 pb-5">
                <h1 className="text-4xl md:text-6xl font-semibold">
                Tudo é melhor<br/>
                 com uma&nbsp;
                <span className="text-primary capitalize">
                    pizza
                </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm md:text-lg">Pizza é a peça que faltava para completar <br /> o seu dia, uma alegria de vida simples mas deliciosa</p>
                <div className="flex flex-col sm:flex-row gap-4 items-start text-sm">
                    <button className="bg-primary text-white px-8 py-2 md:py-3 rounded-full flex items-center gap-2 uppercase hover:bg-red-600 font-bold">
                        Pedir Agora
                        <Right />
                    </button>
                    <button className="flex gap-2 px-8 py-2 md:py-3 text-gray-600 font-semibold transition-all hover:text-black">
                        Ver mais
                        <Right />
                    </button>
                </div>
            </div>
            <div className="mx-auto md:mx-0">
                <Image src={'/pizza.png'} alt={'pizza'} width={600} height={100}/>
            </div>
        </section>
    );
}