import React from "react";
import img from './image/see_specialist_dark.svg'

const Navbar4 = () => {
    return (
        <nav className="navbar4">

            <table className="table-A">
                <tr>
                    <td>
                        <img src={img} className="image-navbar" />
                    </td>
                    <td>
                        <h3> Book a appointment</h3>
                    </td>
                </tr>
            </table>

            <table className="table-B">
                <tr>
                    <td>
                        <img src={img} className="image-navbar" />
                    </td>
                    <td>
                        <h3>  See a specialist</h3>
                    </td>
                </tr>
            </table>
        </nav>
    )
};

export default Navbar4;