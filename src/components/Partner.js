import { Divider } from "@mui/material";
import React from "react";
import qwe from './image/p1.png';

const Partner = () =>{
    return(
        <div className="partner">
            <h1 >
                Partners
            </h1>

            <div>
            <img src={qwe}/>
            <img src={qwe}/>
            <img src={qwe}/>
            <img src={qwe}/>

            </div>
        </div>
    )
};
export default Partner;