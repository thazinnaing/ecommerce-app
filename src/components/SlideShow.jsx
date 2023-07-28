import React,{useEffect, useState} from "react";
import "./SlideShowCss.css"

const Image=({image})=>{
    return(
        <img src={image} alt="image" className="slide-image"/>
    )
}

const SlideShow=()=>{

    const [images, setImages]=useState([]);
    
    useEffect(()=>{
        setImages(
            ["https://img.freepik.com/free-photo/shopping-trolleys-packets-gift-tags_23-2147961963.jpg?size=626&ext=jpg&ga=GA1.1.1633012741.1684645608&semt=sph",
                "https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.webp?b=1&s=170667a&w=0&k=20&c=ag_iAVhF9G24GHgRIXdwt50NUn7xvmz3ORGTlFPHv7Q=",
            "http://rb.gy/05prt",
            "http://rb.gy/noff2",
            "https://media.istockphoto.com/id/476272517/photo/cosmetics-set-into-a-womans-pink-shoe-with-pearl-necklace.jpg?s=612x612&w=0&k=20&c=LOS1bbgNeUWHoHm_RkHL4BrHCFY2ap_NcSolZ4HHCpI=",
            "https://rebrand.ly/43rjfu7"]
        )

    },[])

    console.log("arr", images);

    return(
        <div className="slide-container">
            {
                images.map((image)=>{
                    return(
                        <Image image={image} key={(Math.random()*100)} />
                    )
                    
                })
            }
           

        </div>

    )
}
export default SlideShow;