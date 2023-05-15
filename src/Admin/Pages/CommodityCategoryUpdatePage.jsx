import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminApis from '../../api/AdminApis'
import { Alert } from "../../Common/Alert";
function CommodityCategoryUpdatePage() {
    const { id } = useParams()

    const [Category, setCategory] = useState({})
    useEffect(() => {
        AdminApis.showSingleCommodityCat(id)
            .then(val => {
                console.log(val.data.data);
                let catData = val.data.data
                setCategory({
                    name: catData?.categoryName,
                    description: catData?.categoryDesc,
                })
            })

    }, [])

    // console.log(Product.type);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setCategory({
            ...Category,
            [name]: value
        })

    }

    const handleImg = (e) => {
        let value = e.target.files[0]
        setCategory({
            ...Category,
            image: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { image, name, description } = Category;
        const formdata = new FormData()

        formdata.append('id', id)
        formdata.append('image', image)
        formdata.append('name', name)
        formdata.append('description', description)

        AdminApis.updateCommodityCategory(formdata)
            .then((val) => {
                if (val.status === 200) {
                    console.log(val);
                    // alert("added")
                    Alert.fire({
                        icon: 'success',
                        title: val?.data?.message,
                    })
                }

            })
            .catch((err) => {
                console.log(err);

            })
    }

    return (
        <>


            <div className="myForm">
                <h2>Update Commodity Category</h2>
                <form onSubmit={handleSubmit} >
                    <div className="form-group" >
                        <label htmlFor="category_name">Category Name:</label>
                        <input type="text" className="form-control" id="category_name" placeholder="Enter Category name" name="name" value={Category?.name} onChange={handleInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category_description">Category Description:</label>
                        <textarea className="form-control inpFeild" value={Category?.description} id="category_description" placeholder="Enter Category description" name="description" onChange={handleInput}></textarea>
                    </div>


                    <div className="form-group">
                        <label htmlFor="category_image">Image:</label>
                        <input type="file" className="form-control-file" id="category_image" name="image" onChange={handleImg} />
                    </div>

                    <button type="submit" className=" mt-4">Submit</button>

                </form>
            </div>

        </>
    )
}

export default CommodityCategoryUpdatePage