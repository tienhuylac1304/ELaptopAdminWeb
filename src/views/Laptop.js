import "./../components/css/Laptop.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";

const Laptop = ({ account}) => {
    const products=[
        {
        description: {
        category: 1,
        brand: "Lenovo",
        cpu: "Intel core I5, 1135G7, 2.4GHz",
        pin: "4000mah",
        ram: "8GB",
        rom: "128GB"
        },
        rating: [ ],
        _id: "1",
        name: "Lenovo Yoga 7",
        price: 1420,
        promotion: 0,
        image: [
        "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/5/637717449036171573_lenovo-yoga-7-14acn6-r7-5800u-xam-5.jpg",
        "1635353672481lenovo-yoga-7-14itl5-i7-82bh00ckvn-120821-0324000.jpg",
        "1635353672484vi-vn-lenovo-yoga-7-14itl5-i7-82bh00ckvn-11.jpg"
        ],
        star: 4,
        remaining: 5
        },
        {
        description: {
        category: 2,
        brand: "Acer",
        cpu: "Intel core I5, 1135G7, 2.4GHz",
        pin: "4000mah",
        ram: "8GB",
        rom: "128GB"
        },
        _id: "2",
        name: "Acer Nitro 5 Gaming",
        price: 1230,
        promotion: 0,
        image: [
        "https://laptopcare.vn/upload/news/nitro-an515-52.jpg",
        "1635441203545vi-vn-acer-nitro-5-gaming-an515-57-50ft-i5-nhqd8sv003-4.jpg",
        "1635441203547vi-vn-acer-nitro-5-gaming-an515-57-50ft-i5-nhqd8sv003-6.jpg"
        ],
        star: 5,
        remaining: 0,
        rating: [
        {
        user: {
        image: "",
        name: "Tiến Huy"
        },
        star: 5,
        comment: "máy rất mạnh thích hợp lm đồ họa và hơi game",
        time: "1-12-2021 23:55"
        }
        ]
        }]
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Laptop">
                    <div className="laptop_tb">
                        <h1 className="tb_title">Laptop List</h1>
                        <div className="ctn_btnCre">
                            <Button type="create" href="#"/>
                        </div>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Brand</td>
                                <td>Price</td>
                                <td></td>
                            </tr>
                            {products.map(pro=>(
                                <tr key={pro._id} className="tb_body">
                                <td>{pro._id}</td>
                                <td>
                                    <img src={pro.image[0]}/>
                                </td>
                                <td>{pro.name}</td>
                                <td>{pro.description.category}</td>
                                <td>{pro.description.brand}</td>
                                <td>{pro.price}</td>
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

export default Laptop