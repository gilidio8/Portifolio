import React , { Component } from 'react'
import Link from 'next/link';

function Home() {
    return (<div>
            
            <h1>Hi I'm Gabriel</h1>
                <Link href="/sobre">
                    <a>Acessar página Sobre</a>
                </Link>
                <div>
            
                    <Link href="/produtos/1">    
                    <a>Acesse um gerador de paginas</a>    
                    </Link> 
                </div>
              
                 

                
            </div>
    )
}


export default Home  

