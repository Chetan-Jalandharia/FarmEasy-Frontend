
import { Puff } from 'react-loader-spinner'

import React from 'react'

export default function Loader() {
    return (
        <div className='d-flex justify-content-center' style={{marginTop:"36vh"}}>
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

