import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Show = () => {

    const [show,setShow]=useState([])

    useEffect(()=>{
         fetch('https://api.tvmaze.com/search/shows?q=all')
         .then(res=>res.json())
         .then(data=>setShow(data))
    },[])
    console.log(show)
    return (
        <div>

            {/* <h1>{show.name}</h1> */}
            <h1>this is many data</h1>

            <div className='container'>
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            {
                        show.map(services => <Service
                            services={services}
                        >

                        </Service>)
                    }

            </div>

            </div>

        </div>
    );
};

export default Show;