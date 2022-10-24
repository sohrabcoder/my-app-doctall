import React from "react";
import logo from './image/logo.svg';

const Navbar2 = () => {
    return (
        <div className="navbar2">
            <div className="logo">
                <img src={logo} />
            </div>

            <div>
                <table className="navbar-text">

                    <tr>
                        <td className="para">
                              Who we are?
                        </td>
                        <td className="para">
                                 FAQs
                        </td>

                        <td>
                            <button className="navbar-btn">Login/Signup</button>
                        </td>
                    </tr>



                </table>
            </div>
        </div>
    );
};

export default Navbar2;