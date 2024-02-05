import Image from "next/image";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/layout/Hero";
import { HomeMenu } from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";
import { Footer } from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl w-full flex flex-col items-center px-4">
        <Hero />
        <HomeMenu />
        <section className="my-8">
          <SectionHeaders 
            subHeader={"Nossa História"}
            mainHeader={"Sobre Nós"}
          />
          <div className="flex flex-col-reverse items-center md:flex-row mt-4 gap-4 md:gap-20">
            <div className="text-gray-500 max-w-md mt-4 flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reprehenderit totam praesentium repellat, expedita non suscipit earum, asperiores obcaecati, eum ad nemo similique excepturi? Fugiat maxime odit animi quae natus iure totam in corrupti nam a!
              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reprehenderit totam praesentium repellat, expedita non suscipit earum,
              </p>
            </div>
            <div className="mx-auto md:mx-0">
              <Image src={"/pizzaria.png"} alt={"Pizzaria"} width={1080} height={1080}
              className="max-w-96 rounded-lg w-full"
              />
            </div>
          </div>
        </section>
        <section className="my-8 md:my-8 text-center">
          <SectionHeaders 
            subHeader={"Precisa de Suporte?"}
            mainHeader={"Entre em contato"}
          />
            <div className="text-gray-500 max-w-md mt-4">
              <a href="tel:11976989038" className="text-4xl underline">
                +11 97698 4038
            </a>
            </div>
        </section>
      </div>
      </>
    );
}
