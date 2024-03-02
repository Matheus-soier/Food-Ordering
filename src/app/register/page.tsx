"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [creatingUser, setCreatingUser] = useState<boolean>(false);
    const [userCreated, setUserCreated] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

        async function handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
            ev.preventDefault();
            setCreatingUser(true);
            setError(false);
            setUserCreated(false);
                const response = await fetch('/api/register', {
                    method: 'POST',
                    body: JSON.stringify({email, password}),
                    headers: {'Content-Type': 'application/json'},
                });
                if (response.ok) {
                    setUserCreated(true);
                } else {
                    setError(true);
                }
               
                setCreatingUser(false);
        }

    return (
        <div className="max-w-screen-xl w-full flex flex-col items-center px-4 my-12 md:mt-20">
            <section className="mt-8 w-full">
                <h1 className="text-center font-semibold text-primary text-4xl my-5">
                    Crie Sua Conta
                </h1>
                {userCreated && (
                    <div className="my-4 text-center">
                        Já possui uma conta. Faça&nbsp; 
                        <Link 
                        className="cursor-pointer text-blue-600 underline"
                        href={'/login'}>
                            Login &raquo;
                        </Link>
                    </div>
                )}
                {error && (
                    <div className="my-4 text-center">
                       Ocorreu um erro. <br />
                       Tente novamente mais tarde.
                    </div>
                )}
                <form className="block max-w-xs mx-auto" 
                onSubmit={handleFormSubmit}>
                    <input type="email" name="email" id="email" 
                    className="block w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    placeholder="Digite seu email"
                    disabled={creatingUser}
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password" name="senha" id="senha" 
                    className="block w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    placeholder="Digite uma senha"
                    disabled={creatingUser}
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    />
                    <button 
                    disabled={creatingUser}
                    type="submit"
                    className="font-semibold block rounded-xl px-6 py-2 bg-primary text-white w-full disabled:cursor-not-allowed disabled:bg-red-400 hover:bg-red-600" 
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
                    <div className="text-center my-4 text-gray-500 border-t pt-4">
                        Possui conta?&nbsp;
                        <Link className="underline" href={'/login'}>Login aqui &raquo;</Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default RegisterPage;