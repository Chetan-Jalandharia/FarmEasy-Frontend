import { useState, useContext } from 'react'
import { Alert } from '../../Common/Alert';
import AdminApis from '../../api/AdminApis';

export default function AddCommodityCatPage() {
    const [Category, setCategory] = useState({
        name: "",
        desc: "",
        image: ""
    })

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setCategory({
            ...Category,
            [name]: value
        })
    }
    const handleImg = (e) => {

        setCategory({
            ...Category,
            image: e.target.files[0]
        })
    }

    const resetForm = () => {
        setCategory({
            name: "",
            desc: "",

        })

        document.getElementById("category_image").value = "";

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('image', Category.image)
        formdata.append('name', Category.name)
        formdata.append('desc', Category.desc)

        // console.log(Product);
        AdminApis.addCommodityCategory(formdata)
            .then((val) => {
                if (val.status === 200) {
                    // alert("Category added successfuly")
                    resetForm()
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
            <div >
                <div className="myForm">
                    <h2>Add Commodity Category</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="category_name">Category Name:</label>
                            <input type="text" className="form-control" name="name" value={Category.name} onChange={handleInput} id="category_name" placeholder="Enter product name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category_description">Description:</label>
                            <textarea className="form-control inpFeild" name="desc" value={Category.desc} onChange={handleInput} id="category_description" placeholder="Enter product description" ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category_image">Image:</label>
                            <input type="file" className="form-control-file" onChange={handleImg} name="image" id="category_image" />
                        </div>

                        <button type="submit" className=" mt-4">Submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}
