"use client"
import Image from "next/image";
import { useState } from "react";

const RegisterPage = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-type': 'application/json'},
        });
    }

    return (
        <div className="max-w-screen-xl w-full flex flex-col items-center px-4 my-12 md:mt-20">
            <section className="mt-8 w-full">
                <h1 className="text-center font-semibold text-primary text-4xl my-5">
                    Crie Sua Conta
                </h1>
                <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                    <input type="email" name="email" id="email" 
                    className="block w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password" name="senha" id="senha" 
                    className="block w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100"
                    placeholder="Digite uma senha"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    />
                    <button type="submit"
                    className="font-semibold block rounded-xl px-6 py-2 bg-primary text-white w-full"
                    >Criar Conta
                    </button>
                    <div className="my-4 text-center text-gray-500">
                        Ou Entrar com provedor
                    </div>
                    <button
                    className="font-semibold rounded-xl px-6 py-2 bg-white text-black border border-gray-300 w-full flex items-center justify-center gap-2">
                        <Image src={'/google.png'} alt={'Google'} width={24} height={24}/>
                        Login com Google
                    </button>
                </form>
            </section>
        </div>
    );
};

export default RegisterPage;