import React from "react";

const Map = ({record}) => {

    return (
        <div style={{textDecoration: "none", overflow: "hidden", maxWidth: "100%", width: "100%", height: "400px"}}>
            <div id="gmapcanvas" style={{height: "100%", width: "100%", maxWidth: "100%"}}>
                <iframe style={{height: "100%", width: "100%", border: 0}} title="Google map" frameBorder="0"
                        src={`https://www.google.com/maps/embed/v1/place?q=${+record.address.geo.lat},${+record.address.geo.lng}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}></iframe>
            </div>
            <a className="codefor-googlemap" rel="nofollow" href="https://www.embed-map.com"
               id="grabmaps-authorization">https://www.embed-map.com</a>
        </div>
    )
};

export default Map;

