import React from "react";
import image from './image/nav-logo-1.svg';
import hello from './image/nav-logo-2.svg';

const Navbar = () => {
    return (
        <nav className="navbar" style={{paddingTop:"0"}}>

            <table className="table-one">
                <tr>
                    <td>
                        <img src={image} className="image-navbar" />
                    </td>
                    <td>
                        <h3> Doctall Care</h3>
                    </td>
                </tr>
            </table>

            <table className="table-two">
                <tr>
                    <td>
                        <img src={hello} />
                    </td>
                    <td>
                        <h3>  Doctall Test</h3>
                    </td>
                </tr>
            </table>
        </nav>
    )
};

export default Navbar;