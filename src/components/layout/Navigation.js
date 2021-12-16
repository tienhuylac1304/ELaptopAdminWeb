import "./../css/Navigation.css"
import { useState } from "react"

const Navigation = ({account}) => {
    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                {/* <img src={account.proImg}></img> */}
                            </span>
                            <span className="title">
                                {/* {localStorage['CurrentUser'].fullName} */}
                            </span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="list active">
                        <a href="#">
                            <span class="icon">
                                <i class='bx bxs-dashboard'></i>
                            </span>
                            <span class="title">Dashboard</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <a href="#">
                            <span class="icon">
                                <i class='bx bx-laptop'></i>
                            </span>
                            <span class="title">Laptop</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <a href="#">
                            <span class="icon">
                                <i class='bx bxs-user-account' ></i>
                            </span>
                            <span class="title">Users</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="list">
                        <a href="#">
                            <span class="icon">
                                <i class='bx bxs-report' ></i>
                            </span>
                            <span class="title">Report</span>
                        </a>
                    </li>
                </ul>
                <ul className="logout">
                    <li class="">
                        <a href="#">
                            <span class="icon"><i class='bx bx-log-out' ></i></span>
                            <span class="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation