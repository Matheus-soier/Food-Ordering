"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginPage = () => {

    const[email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const[loginInProgress, setLoginInProgress] = useState<boolean>(false);

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoginInProgress(true);
        
        await signIn('credentials', {email, password});

        setLoginInProgress(false);
    }

    return(
        <div className="max-w-screen-xl w-full flex flex-col items-center px-4 my-12 md:mt-20">
            <section  className="mt-8 w-full">
                <h1 className="text-center font-semibold text-primary text-4xl my-5">
                    Login
                </h1>
                <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                    <input type="email" name="email" id="email" placeholder="Digite seu email" value={email}
                    onChange={e=>setEmail(e.target.value)} disabled={loginInProgress} className="block w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed"/>
                    <input type="password" name="password" id="password" placeholder="Digite uma senha" value={password}
                    onChange={e=>setPassword(e.target.value)} disabled={loginInProgress} className="block w-full my-2 rounded-xl border p-2 border-gray-300 bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed"/>
                    <button 
                    disabled={loginInProgress}
                    type="submit"
                    className="font-semibold block rounded-xl px-6 py-2 bg-primary text-white w-full disabled:cursor-not-allowed disabled:bg-red-400 hover:bg-red-600"
                    >Login
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
                        Não possui conta?&nbsp;
                        <Link className="underline" href={'/register'}>Criar aqui &raquo;</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default LoginPage;