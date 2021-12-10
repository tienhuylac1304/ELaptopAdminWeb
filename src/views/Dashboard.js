import "./../components/css/Dashboard.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";

const Dashboard = ({staffs, account}) => {
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Dashboard">
                    <div className="cards">
                        <div className="card">
                            <h1 className="detail">2021</h1>
                            <h3 className="title">Products</h3>
                            <i className='bx bx-desktop'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2021</h1>
                            <h3 className="title">Customers</h3>
                            <i className='bx bx-user'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2021</h1>
                            <h3 className="title">Views</h3>
                            <i className='bx bx-show'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2021</h1>
                            <h3 className="title">Bill</h3>
                            <i class='bx bx-cart-alt' ></i>
                        </div>
                    </div>
                    <div className="staff_tb">
                        <h1 className="tb_title">Staff List</h1>
                    <table className="tb">
                        <tr className="tb_header">
                            <td>ID</td>
                            <td>Name</td>
                            <td>Regency</td>
                            <td>Phone</td>
                            <td></td>
                        </tr>
                        {staffs.map(staff=>(
                            <tr key={staff.id} className="tb_body">
                            <td>{staff.id}</td>
                            <td>{staff.name}</td>
                            <td>{staff.regency}</td>
                            <td>{staff.phone}</td>
                            <td>
                                <Button type="details" href="#"></Button>
                                <Button type="edit" href="#"></Button>
                                <Button type="delete" href="#"></Button>
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

export default Dashboard