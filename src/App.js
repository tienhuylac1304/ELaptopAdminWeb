import { Routes, Route } from "react-router-dom";

// import anhDaiDien from './images/anh_dai_dien.jpg';
// import eLaptop from './images/logo_E-Laptop_complete.png';
// import Navigation from './component/Navigation';
// import Header from './component/Header';
// import Dashboard from './component/Dashboard';

import Dashboard from './views/Dashboard'

function App() {
      //Test
      const admin ={
        id: "-1",
        name: "Admin",
        proImg: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
        regency: "Admin",
        phone: "",
    }
      var staffs=[{
        id: "1",
        name: "Huy",
        regency: "FE",
        phone: "0123456789"
      },
      {
        id: "2",
        name: "Thông",
        regency: "BE",
        phone: "0123456789"
      },
      {
        id: "3",
        name: "Thanh",
        regency: "SP",
        phone: "0123456789"
      }]
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard staffs={staffs} account={admin}/>} />
      </Routes>
    </div>

  );
}
export default App;
