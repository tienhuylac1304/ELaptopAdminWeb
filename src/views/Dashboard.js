import "./../components/css/Dashboard.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";

const Dashboard = ({ account}) => {
    var staffs=[{
        _id: "1",
        img:"https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg",
        name: "Huy",
        role: "BE",
        phone: "0123456789"
      },
      {
        _id: "2",
        img:"https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg",
        name: "Thông",
        role: "FE",
        phone: "0123456789"
      },
      {
        _id: "3",
        img:"https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg",
        name: "Thanh",
        role: "SP",
        phone: "0123456789"
      }]
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Dashboard">
                    <div className="cards">
                        <div className="card">
                            <h1 className="detail">2022</h1>
                            <h3 className="title">Products</h3>
                            <i className='bx bx-desktop'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2022</h1>
                            <h3 className="title">Customers</h3>
                            <i className='bx bx-user'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2022</h1>
                            <h3 className="title">View</h3>
                            <i className='bx bx-show'></i>
                        </div>
                        <div className="card">
                            <h1 className="detail">2022</h1>
                            <h3 className="title">Orders</h3>
                            <i class='bx bx-cart-alt' ></i>
                        </div>
                    </div>
                    <div className="staff_tb">
                        <h1 className="tb_title">Staff List</h1>
                        <div className="ctn_btnCre">
                            <Button type="create" href="#"/>
                        </div>
                    <table className="tb">
                        <tr className="tb_header">
                            <td>ID</td>
                            <td>Profile Image</td>
                            <td>Name</td>
                            <td>Role</td>
                            <td>Phone</td>
                            <td></td>
                        </tr>
                        {staffs.map(staff=>(
                            <tr key={staff._id} className="tb_body">
                            <td>{staff._id}</td>
                            <td>
                                <img src={staff.img}/>
                            </td>
                            <td>{staff.name}</td>
                            <td>{staff.role}</td>
                            <td>{staff.phone}</td>
                            <td>
                                <Button type="details" href="#"></Button>
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