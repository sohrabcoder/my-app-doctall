import React from "react";
import qax from './image/banner.svg';

const Banner = () => {
    return (
        <div>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active  header ">
                       
                    <div >
                    <h1>
                        “ Doctall has helped me to live <br />
                        healthy and get my medications <br />
                        conveniently”
                    </h1>

                    <button className="banner-btn">Book a Doctor Now</button>
                </div>
                {/* <img src={qax} class="d-block w-100" alt="..." /> */}
                    </div>
                    <div class="carousel-item  header1">
                    <div >
                    <h1>
                    “ Speak to doctors and specialists <br />
from wherever you are.<br />
Book an appointment now.”
                    </h1>

                    <button className="banner-btn">Book a Doctor Now</button>
                </div>
                        {/* <img src="..." class="d-block w-100" alt="..." /> */}
                    </div>
                    <div class="carousel-item  header2">
                    <div >
                    <h1>
                    “ Get <span style={{color: "orangered"}}>10% off</span> your first appointment <br />
when you sign up to Doctall.”
                    </h1>

                    <button className="banner-btn">Book a Doctor Now</button>
                </div>
                        {/* <img src="..." class="d-block w-100" alt="..." /> */}
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="">

                
            </div>
        </div>

    );
};

export default Banner;