import "./../components/css/Customer.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";

const Customer = ({ account}) => {
    var customers=[{
        address: {
          province: "77",
          district: "751",
          ward: "26644",
          apartmentAddress: "2/3 Bàu Cát 2"
          },
          _id: 1,
          fullName: "Mạnh Thông",
          password: "$2b$10$UgYM4wgLb9MM16r4lIcwluMXbzUgXgnw1p4J4ZuHalcg.XJK01wMi",
          phone: "1",
          dateOfBirth: "1/1/2000",
          profilePicture: "https://taihinhanh.vn/wp-content/uploads/2021/06/Anh-avatar-cho-con-trai-Taihinhanh-vn-5.jpg",
          myVouchers: [
          "61acd9ee397fa9f04e1cdee7",
          "61acdd42397fa9f04e1cdf29"
          ],
          spinNum: "5"
          },
          {
          address: {
          province: "4",
          district: "43",
          ward: "1345",
          apartmentAddress: "123/11 Chi Tai"
          },
          spinNum: "3",
          myVouchers: [ ],
          _id: 2,
          fullName: "Tiến Huy",
          password: "$2b$10$LUo3mK2h9OPefBv083gdjepuxZ6ka6lYaA5ULD1Txh8mG2id9mt1y",
          phone: "2",
          dateOfBirth: "1/1/2000",
          profilePicture: "https://anhdepfree.com/wp-content/uploads/2019/08/h%C3%ACnh-dai-dien-chibi.jpg"
          },
          {
          address: {
          province: "default",
          district: "default",
          ward: "default",
          apartmentAddress: "default"
          },
          _id: 3,
          fullName: "prevlife",
          password: "$2b$10$JSl55s3Yut0Dr8RkQGq43.U2OmZdT1OiYq32ILWHq8aMKfYaxzYI.",
          phone: "4",
          dateOfBirth: "1/1/2000",
          profilePicture: "https://anhdep123.com/wp-content/uploads/2021/02/anh-avatar-hai-huoc.jpg",
          spinNum: 3,
          myVouchers: [ ]
          }
      ]
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Customer">
                    <div className="customer_tb">
                        <h1 className="tb_title">Customers List</h1>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Phone</td>
                                <td></td>
                            </tr>
                            {customers.map(cus=>(
                                <tr key={cus._id} className="tb_body">
                                <td>{cus._id}</td>
                                <td>
                                    <img src={cus.profilePicture}/>
                                </td>
                                <td>{cus.fullName}</td>
                                <td>{cus.phone}</td>
                                <td>
                                    <Button type="details" href="#"></Button>
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

export default Customer