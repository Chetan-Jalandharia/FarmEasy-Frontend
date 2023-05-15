import React from 'react'
import {FaRupeeSign, FaUser} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
import {GiFertilizerBag} from 'react-icons/gi'


function DashBoard() {
    function DashCard(props) {
        return (
            <div>
                <div className="col mb-5 p-1">
                    <div className="card h-100 card-lift" style={{ backgroundColor: "#F8F4EA" }}>
                        <div className="card-body">
                            <div className="d-flex justify-content-around align-items-center">
                                <span className=" fw-semi-bold fs-5 text-primary">{props.title}</span>
                                <span >{props.svg}</span>

                            </div>
                            <div className="my-4  d-flex align-items-center justify-content-center lh-1">
                                <h3 className="fw-bold text-success ">{props.cardValue}</h3>

                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#!" className="btn btn-outline-primary w-75  fw-semi-bold">{props.btnValue}</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='container-fluid'>
            <div className="row row-cols-1  row-cols-xl-4 row-cols-md-2 mt-5 ">

                <DashCard svg={<FiShoppingCart size={25} color='#15aebf'/>} cardValue={5837} btnValue={"View all"} title={"Products"} />

                <DashCard svg={<GiFertilizerBag size={25} color='#15aebf'/>} cardValue={5277} btnValue={"View all"} title={"Commodity"} />

                <DashCard svg={<FiShoppingCart size={25} color='#15aebf'/>} cardValue={5277} btnValue={"View Requests"} title={"Product Request"} />

                <DashCard svg={<GiFertilizerBag size={25} color='#15aebf'/>} cardValue={50} btnValue={"View Requests"} title={"Commodity Request"} />

                <DashCard svg={<FaUser size={25} color='#15aebf'/>} cardValue={2390} btnValue={"View Customers"} title={"Customers"} />

                <DashCard svg={<FaRupeeSign size={25} color='#15aebf'/>} cardValue={`$54534`} btnValue={"View Earnings"} title={"Revenue"} />

            </div>
        </div>
    )
}

export default DashBoard