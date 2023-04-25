import React from "react";

const AnimatedCard = ({ car }) => {
    const { name } = car
    return (
        <div className="animatedCard">
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3 className="text-black">{name}</h3>
                        <p className=" text-black">
                            DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardStyle = () => {
    return (
        <style>
            {`
      * { 
        margin : 0;
        padding: 0;
        box-sizing : border-box;
        font-family : "Poppins", sans-serif;
      }
        
      .container .card {
        position: relative;
        max-width : 300px;
        height : 215px;  
        background-color : #fff;
        margin : 30px 10px;
        padding : 20px 15px;
        display : flex;
        flex-direction : column;
        box-shadow : 0 5px 20px rgba(0,0,0,0.5);
        transition : 0.3s ease-in-out;
        border-radius : 15px;
      }
      
      .container .card:hover {
        height : 350px;    
      }
      
      .container .card .image {
        position : relative;
        width : 260px;
        height : 260px;
        top : -40%;
        left: 8px;
        box-shadow : 0 5px 20px rgba(0,0,0,0.2);
        z-index : 1;
      }
      
      .container .card .image img {
        max-width : 100%;
        border-radius : 15px;
      }
      
      .container .card .content {
        position : relative;
        top : -140px;
        padding : 10px 15px;
        text-align : center;
        visibility : hidden;
        opacity : 0;
        transition : 0.3s ease-in-out;
      }
      
      .container .card:hover .content {
         margin-top : 30px;
         visibility : visible;
         opacity : 1;
         transition-delay: 0.2s;  
      }
    `}
        </style>
    );
};

export default function Card({ car }) {
    return (
        <>
            <AnimatedCard car={car} />
            <CardStyle />
        </>
    );
}
