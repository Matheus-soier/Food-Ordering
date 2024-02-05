import Image from "next/image";

export const MenuItem = () => {
    return (
        <section>
            <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-lg hover:shadow-black/25 cursor-pointer transition-all duration-200 ease-in">
                <div className="text-center">
                <Image src={'/pizza-2.png'} alt={"Pizza"} width={600} height={600} className="mx-auto max-w-52"/>
                </div>
                <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quia tempore voluptatem, ut inventore ullam sed dolorum est sunt?</p>
                <button className="bg-primary text-white rounded-full px-8 py-2 mt-4 cursor-pointer hover:bg-red-600">Adicionar ao Carrinho R$30</button>
            </div>
        </section> 
    );
};