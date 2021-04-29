import link from 'next/link';

function Home() {
    return (<div>
            
            <h1>Pagina Inicial</h1>
                <link href="/sobre">
                    <a>Acessar página Sobre</a>
                </link>    

            </div>
    )
}



export default Home  
