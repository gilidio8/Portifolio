function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
                <div>{props.StaticDateString} (Estatico)</div> 
        
        </div>    
    )
}

export function getStaticProps() {
    const StaticDate = new Date();
    const StaticDateString = StaticDate.toGMTString();

    return {
        props: {
                StaticDateString
        },
        revalidate: 1
    }    
}

export default Tempo;