async function tempo(request, response) {

    const dynamicDate = new Date();

    //const sbscribersResponse = await fetch();
    
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
            date: dynamicDate.toGMTString()
    });
}

export default tempo;