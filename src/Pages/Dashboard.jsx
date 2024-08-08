

export default function Dashboard({params = {username: null, password: null}}){


    const usersPossible = [
        {username: "Jao", password: "bilada"},
        {username: "lucas", password: "picanha"},
        {username: "binaldo", password: "senha2"}
    ];
    
    const login = () => {
        usersPossible.forEach((element) => 
        {
            if(params.username == element.username && params.password == element.password){

            }
        });
    }
    return(
        
        <>
        <div>
            <h1>{}</h1>
        </div>
        </>
    );
}