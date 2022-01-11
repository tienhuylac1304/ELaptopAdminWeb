/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import '../components/css/ChatDetails.css';
import Navigation from "../components/layout/Navigation";
import Header from "../components/layout/Header";
import { Link, useLocation } from "react-router-dom";
import { apiUrl } from '../api';
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import io from "socket.io-client"

const StaffDetails=()=>{
    return(
        <>
            <div className='container'>
            </div>
        </>
    )
}
export default StaffDetails