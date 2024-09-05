
export default function Home({ session = ''}){
    return (
        <div>
          <h2>Dados</h2>
            <h2>Deu certo</h2>
            <h2>{session}</h2>
        </div>
    );
}