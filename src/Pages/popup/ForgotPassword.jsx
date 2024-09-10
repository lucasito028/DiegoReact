import data from './../../assets/Mock.json';
import { sha256 } from 'js-sha256';
import { useState } from 'react';

export default function ForgotPassword({ onVerification }){

    const [users] = useState(data.users);
    const [username, setUsername] = useState('');
    const [id, setId] = useState(0);

    const findUser = (e) => {
        e.preventDefault(); 

        const user = users.find(user => user.username === username);
        if (user) {
            setId(user.id)
            return true;
            } else {
            alert('Usuário ou senha incorretos'); 
            return null;
            }
    };

    const navigateToHome = (e) => {
        e.preventDefault();
        const user = users.find(user => sha256(user.id) === sha256(id)); 
        if (user) {
            onVerification({ username: user.username, password: user.password });
            return true;
        } else {
            alert('Usuário não encontrado');
            return null;
        }
    };

    return (
        <div>
            {
                id != 0 ? (
                    <div>
                    <h2>Coloca seu codigo</h2>
                        <form onSubmit={navigateToHome}>
                            <div>
                            <label>Codigo</label>
                            <input
                                type="number"
                                value={id}
                            />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                ) : (
                <div>
                    <h2>Recuperar Email</h2>
                        <form onSubmit={findUser}>
                            <div>
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                </div>
                )
            }
        </div>

        
    );
}