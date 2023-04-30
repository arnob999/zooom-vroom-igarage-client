import React from "react";
const AnimatedCard = ({ advertisedProduct }) => {
    console.log(advertisedProduct)
    const { name, pic, description } = advertisedProduct
    return (
        <div className="animatedCard">
            <div className="container">
                <div className="card">
                    <div className="image rounded-lg">
                        <img className="max-h-[350px] rounded-lg" src={pic} alt="" />
                    </div>
                    <h3 className="text-black text-2xl font-serif font-bold -mt-6 text-center align-middle name">{name}</h3>
                    <div className="content">
                        <h3 className="text-black text-xl font-bold font-serif">{name}</h3>
                        <p className=" text-black">
                            {description.slice(0, 80)}
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
        height : 200px;  
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

export default function Card({ advertisedProduct }) {
    return (
        <>
            <AnimatedCard advertisedProduct={advertisedProduct} />
            <CardStyle />
        </>
    );
}
