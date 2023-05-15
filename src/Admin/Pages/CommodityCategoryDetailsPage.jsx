import { Box, Typography } from '@mui/material';

import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import AdminApis from '../../api/AdminApis';

function CommodityCategoryDetailsPage() {
    let { id } = useParams()
    const [category, setcategory] = useState()
    useEffect(() => {
        AdminApis.showSingleCommodityCat(id)
            .then(val => {
                setcategory(val.data.data)
                // console.log(val.data.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    // console.log(id);
    return (
        <>
            <Box className="row ">
                <Box className="col-sm-12 col-md-6 mt-4 d-flex justify-content-center">
                    <img src={ category?.imgPath} className='rounded border' height={500} width={"90%"} alt="" />
                </Box>
                <Box className="col-sm-12 col-md-6 mt-5 p-2">
                    <Typography variant='h3'>
                        {category?.categoryName}
                    </Typography>
                    <Typography variant='body1'>
                        {category?.categoryDesc}
                    </Typography>

                </Box>
            </Box>
        </>
    )
}

export default CommodityCategoryDetailsPage