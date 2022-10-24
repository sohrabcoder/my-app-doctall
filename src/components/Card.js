import React from "react";
import './Card.css'

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                    {/* <img src={props.imgsrc} style={{ width: "400px", height: "250px" }} alt={props.imgsrc} className="card-img-top" /> */}
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">
                            {props.detail}
                        </p>
                        <a href="#" className="btn btn-primary"> Read More  &nbsp; &nbsp; 
                         <img href="#" src="https://doctall.com/static/media/ButtonArrow.526f3fcb361412c13dd34348093dd7db.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;