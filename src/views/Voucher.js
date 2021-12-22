import "./../components/css/Vouchers.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";

const Vouchers = ({ account}) => {
    const vouchers=[
        {
        _id: "1",
        name: "Voucher discount 10% price",
        code: "ELAP10PERCENT",
        image: "voucher.jpg",
        type: "percent",
        value: 0.1,
        limit: 10,
        start: "2-12-2021",
        end: "5-1-2022",
        description: "This voucher will discount your order 10%"
        },
        {
        _id: "2",
        name: "Voucher discount 30% price",
        code: "ELAP30PERCENT",
        image: "voucher.jpg",
        type: "percent",
        value: 0.3,
        limit: 5,
        start: "1-12-2021",
        end: "10-12-2021",
        description: "This voucher will discount your order 30%"
        },
        {
        _id: "3",
        name: "Voucher discount 20$",
        code: "ELAP20UT11",
        image: "voucher.jpg",
        type: "minus",
        value: 20,
        limit: 5,
        start: "5-12-2021",
        end: "11-12-2021",
        description: "This Voucher discount 20$ if your order minimum 1000$"
        }
        ]
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Vouchers">
                    <div className="laptop_tb">
                        <h1 className="tb_title">Vouchers List</h1>
                        <div className="ctn_btnCre">
                            <Button className="btn_create" type="create" href="#"/>
                        </div>
                        <table className="tb">
                            <tr className="tb_header">
                                <td>ID</td>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Start</td>
                                <td>End</td>
                                <td>Quality</td>
                                <td></td>
                            </tr>
                            {vouchers.map(voucher=>(
                                <tr key={voucher._id} className="tb_body">
                                <td>{voucher._id}</td>
                                <td>{voucher.name}</td>
                                <td>{voucher.type}</td>
                                <td>{voucher.start}</td>
                                <td>{voucher.end}</td>
                                <td>{voucher.limit}</td>
                                <td className="btn_ctn">
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

export default Vouchers