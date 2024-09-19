import data from './../../assets/Mock.json';
import { sha256 } from 'js-sha256';
import { useState } from 'react';

export default function ForgotPassword({ onVerification }){

    const [users] = useState(data.users);
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState();

    const findUser = (e) => {
        e.preventDefault(); 

        const user = users.find(user => user.email === email);
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
            onVerification({ id: user.id});
            alert("Login Bem sucedido")
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
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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