import { useState } from 'react';

export default function ForgotPassword({ datas, setDatas }){

    const [user, setUser] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleForgotPassword = (e) => {
        e.preventDefault();

        const username = e.target.username.value

        const userFind = datas.find(user => user.username === username)

        e.target.username.value = ""
        setUser(userFind);
        setShowPassword(true)
    };

    const createNewPassword = (e) => {
        e.preventDefault()

        const userWithoutOne = datas.find(userData => userData.username != user.username)

        setDatas([...datas, {
            user
        }])
    }

    return (
        <div>
            <h2>Recuperar Senha</h2>

            {!showPassword ? (
                <form onSubmit={handleForgotPassword}>
                    <div>
                        <label>Username:</label>
                        
                        <input
                            id='username'
                            name='username'
                            type="text"
                        />
                    </div>
                    <button type="submit">Recuperar senha</button>
                </form>
            ) : (
                <form onSubmit={createNewPassword}>
                    <div>
                        <label>New password:</label>
            
                        <input
                            id='password'
                            name='password'
                            type="text"
                        />
                    </div>
                    <button type="submit">Atualizar senha</button>
                    {user && <p>{user.password}</p>}
                </form>
            )}

            
        </div>

        
    );
}