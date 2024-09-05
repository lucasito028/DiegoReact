import data from './../../assets/Mock.json';

export default function ForgotPassword(){

    const [users] = useState(data.users);
    const [username, setUsername] = useState('');
    const [id, setId] = useState(0);
    const [code, setCode] = useState(0);

    const findUser = (e) => {
        e.preventDefault(); 

        const user = users.find(user => user.username === params.username);
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

    };

    return (
        <div>
            {
                !id != 0 ? (
                    <div>
                    <h2>Coloca seu codigo</h2>
                        <form onSubmit={navigateToHome}>
                            <div>
                            <label>Codigo:</label>
                            <input
                                type="number"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                ) : (
                <div>
                    <h2>Recuperar Email</h2>
                        <form onSubmit={findUser}>
                            <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                </div>
                )
            }
        </div>

        
    );
}