import Link from 'next/link'
import { BotaoAzul } from 'ui'
import { BotaoBranco } from 'ui'
import InputCheckbox from '../atomos/InputCheckBox/InputCheckBox'
import InputEmail from '../atomos/InputEmail/InputEmail'
import InputSenha from '../atomos/InputSenha/InputSenha'

const LoginForm = () => {

    function enviarForm(e: { preventDefault: () => void }) {
        e.preventDefault()
        console.log('form enviado')
    }

    return (
        <form className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                    Login
                </h2>
                <div className="intro-x mt-8">
                    <InputEmail />
                    <InputSenha />

                    <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                        <div className="flex items-center mr-auto">
                            <InputCheckbox text='Lembrar me' />
                        </div>
                        <Link href="/ResetSenha">Esqueceu a senha?</Link>
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <BotaoAzul onSubmit={enviarForm} type='submit' texto="Login" />
                        <BotaoBranco texto='Registrar-se' />
                    </div>
                </div>
            </div>
        </form>

    )
}

export default LoginForm