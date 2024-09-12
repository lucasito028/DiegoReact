import data from './../../assets/Mock.json';
import { sha256 } from 'js-sha256';
import { useState } from 'react';

export default function ForgotPassword({ onVerification }){

    const [users] = useState(data.users);
    const [username, setUsername] = useState('');
    const [formData, setFormData] = useState();

    const findUser = (e) => {
        e.preventDefault(); 

        const user = users.find(user => user.email === username);
        if (user) {
            setFormData(user)
            return true;
            } else {
            alert('Usuário ou senha incorretos'); 
            return null;
        }
    };

    const navigateToHome = (e) => {
        e.preventDefault();
        const user = users.find(user => sha256(user.id) === sha256(formData.id)); 
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
                formData != null ? (
                    <div>
                    <h2>Coloca seu codigo</h2>
                        <form onSubmit={navigateToHome}>
                            <div>
                                <label>Codigo</label>
                                <input
                                    type="number"
                                    value={formData.id}
                                />
                                </div>
                                <div>
                                    <label>Senha</label>
                                    <input
                                        type="text"
                                        value={formData.password}
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
                                type="email"
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