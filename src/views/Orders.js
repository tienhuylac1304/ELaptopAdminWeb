import "./../components/css/Laptop.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { apiUrl } from '../api';
import React, { useState, useEffect } from 'react'

const Orders = ({ account}) => {
    // const [statusData, setStatusData] = useState([
    //     {
    //         id: 0,
    //         name: "Waiting Confirm",
    //     },
    //     {
    //         id: 1,
    //         name: "Preparing",
    //     },
    //     {
    //         id: 2,
    //         name: "Delivering",
    //     },
    //     {
    //         id: 3,
    //         name: "Completed",
    //     },
    //     {
    //         id: 4,
    //         name: "Cancelled",
    //     },
    //     {
    //         id: 5,
    //         name: "Return Refund",
    //     },
    // ])
    const [productsData, setProductsData] = useState([])
    // api data 
    //     {
    //     description: {
    //     category: 1,
    //     brand: "Lenovo",
    //     cpu: "Intel core I5, 1135G7, 2.4GHz",
    //     pin: "4000mah",
    //     ram: "8GB",
    //     rom: "128GB"
    //     },
    //     rating: [ ],
    //     _id: "1",
    //     name: "Lenovo Yoga 7",
    //     price: 1420,
    //     promotion: 0,
    //     image: [
    //     "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/5/637717449036171573_lenovo-yoga-7-14acn6-r7-5800u-xam-5.jpg",
    //     "1635353672481lenovo-yoga-7-14itl5-i7-82bh00ckvn-120821-0324000.jpg",
    //     "1635353672484vi-vn-lenovo-yoga-7-14itl5-i7-82bh00ckvn-11.jpg"
    //     ],
    //     star: 4,
    //     remaining: 5
    //     }
    useEffect(() => {
        axios.get(`${apiUrl}/orders`)
        .then(data=>{
            setProductsData(data["data"])
        })
    }, [productsData])
    
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Laptop">
                    <div className="laptop_tb">
                        <h1 className="tb_title">Orders List</h1>
                        <div className="ctn_btnCre">
                            <Button type="create" href="#"/>
                        </div>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Customer</td>
                                <td>Payment method</td>
                                <td>Create time</td>
                                <td>State</td>
                                <td></td>
                            </tr>
                            {productsData.map(pro=>(
                                <tr key={pro._id} className="tb_body">
                                <td>{pro._id}</td>
                                <td>{pro.DeliveryInfo.name}</td>
                                <td>{pro.PaymentMethod}</td>
                                <td>{pro.createdAt}</td>
                                <td>{pro.Status}</td>
                                <td>
                                    <Button type="details" href="/OrderDetails" state={pro}></Button>
                                </td>
                            </tr>
                            ))}
                            
                        </table>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Orders