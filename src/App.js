import { Routes, Route } from "react-router-dom";
import Dashboard from './views/Dashboard'
import Login from "./views/Login";
import Landing from"./views/Landing";
import Laptop from "./views/Laptop";
import AuthProvider from "./contexts/AuthContext";
import Profile from "./views/Profile";
import Customer from "./views/Customer";
import Vouchers from "./views/Voucher";
import Chat from "./views/Chat";
import UnChat from "./views/UnChat ";
import ChatDetails from "./views/ChatDetails";
// import io from "socket.io-client"

// const socket = io.connect("http://192.168.1.2:3001");
function App() {
      //Test
      const admin ={
        id: "-1",
        name: "Admin",
        proImg: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
        role: "Admin",
        phone: "1234567890",
        dob:"01/01/2000"
    }
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard account={admin}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/laptop" element={<Laptop account={admin}/>} />
          <Route path="/profile" elemFent={<Profile account={admin}/>} />
          <Route path="/customer" element={<Customer account={admin}/>} />
          <Route path="/vouchers" element={<Vouchers account={admin}/>} />
          <Route path="/Chats"  element={<Chat account={admin}/>}/>
          <Route path="/ChatDetails"  element={<ChatDetails account={admin}/>}/>
          <Route path="/UnChat" element={<UnChat account={admin}/>}/>
          <Route path="/" element={<Landing/>} />
        </Routes>
      </AuthProvider>
    </div>

  );
}
export default App;
