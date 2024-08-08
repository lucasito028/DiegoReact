import Login from '../Login';
import Dashboard from '../Dashboard';
import './App.css'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const usersPossible = [
    {username: "Jao", password: "bilada"},
    {username: "lucas", password: "picanha"},
    {username: "binaldo", password: "senha2"}
  ];

  const login = (email, password) => {
      usersPossible.forEach((element) => 
      {
          if(params.username == element.username && params.password == element.password){
            setLoggedIn(true);
          }
      });
  };


  return (
    <>
      {loggedIn ? <Dashboard /> : <Login onLogin={login}></Login>}
    </>
  )
}

export default App
