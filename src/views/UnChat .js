import "./../components/css/Chats.css";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Button from "../components/layout/Button";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const UnChat = ({ account}) => {
    const chats=[{
        chatId:"1",
        cusImg:"https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
        cusName:"Thông",
        lastMess:{
            sendUser:"Thông",
            content:"Hello",
            sendTime:"4h ago"
        }
    },
    {
        chatId:"2",
        cusImg:"https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
        cusName:"Thanh",
        lastMess:{
            sendUser:"You",
            content:"Thanks!!",
            sendTime:"5h ago"
        }
    },
    {
        chatId:"3",
        cusImg:"https://thuthuatnhanh.com/wp-content/uploads/2021/02/Anh-avatar-bua-cute-dep-390x390.jpg",
        cusName:"Huy",
        lastMess:{
            sendUser:"Huy",
            content:"Hi",
            sendTime:"3h ago"
        }
    }
]
    return (
        <>
            <Header />
            <Navigation account={account} />
            {/* Body */}
            <div className="page_content">
                <div className="Chat">
                    <div className="chat_tb">
                        <div className="Chats_tb_titles">
                            <Link to="/Chats">
                                <h3 className="tb_title">Processing</h3>
                            </Link>
                            <h1 className="tb_title">|</h1>
                            <Link to="/UnChat">
                                <h1 className="tb_title">Waiting for processing</h1>
                            </Link>
                        </div>
                        <table className="tb">
                            {chats.map(chat=>(
                                <div className="tb_row" key={chat.chatID}>
                                    <Link className="mess" to="#">

                                    <tr className="tb_body">
                                        <td rowSpan="2">
                                            <img src={chat.cusImg}/>
                                        </td>
                                        <td className="col_2">
                                            {chat.cusName}
                                        </td>
                                        <td rowSpan="2" className="col_3">
                                            {chat.lastMess.sendTime}
                                        </td>
                                        <td rowSpan="2" className="col_4">
                                            <Button type="accept" href="#"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="chat_content col_2">
                                            {chat.lastMess.sendUser}: {chat.lastMess.content}
                                        </td>
                                    </tr>
                                    </Link>
                                </div>   
                            ))}
                            
                        </table>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default UnChat