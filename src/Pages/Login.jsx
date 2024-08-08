

export default function Login({params = {name: null, password: null}}){



    return(
        <form action="">
            <div>
                <label>Login</label>
                <input type="text" />
            </div>
            <div>
                <label>Senha</label>
                <input type="Password" />
            </div>
            <div>
                <a href="">Esqueceu Senha?</a>
            </div>
            <div>
                <button>Logar</button>
            </div>
        </form>
    );
}