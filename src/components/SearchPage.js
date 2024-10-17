import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return <div className="searchPage">
    <div className="searchPage_info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
    </div>
    <SearchResult 
    img="https://a0.muscache.com/im/pictures/miso/Hosting-1099211161787834553/original/9ad5148c-f156-4093-9571-cc8a18048cfb.jpeg?im_w=720"
    location="Entire rental unit in Durban, South Africa"
    title="3 Bed haven with Modern Elegance"
    description="6 guests 3 bedrooms 3 beds 3 baths"
    star="5.0"
    price="R2,900 ZAR / night"
    total="R17,610 ZAR Total before taxes"
    />
    <SearchResult 
    img="https://a0.muscache.com/im/pictures/1a4a77d6-8d5a-46a8-bf28-35d1c91e9b21.jpg?im_w=240"
    location="Entire home in Pretoria, South Africa"
    title="Mountain Views at a Smart Hilltop Home with Solar Power"
    description="5 guests 3 bedrooms 3 beds 3.5 baths"
    star="4.91"
    price="R1,638 ZAR / night"
    total="R9,520 ZAR Total before taxes"
    />
    <SearchResult 
    img="https://a0.muscache.com/im/pictures/fba5d238-ee64-4347-9cfd-808f1fad0d22.jpg?im_w=720"
    location="Entire rental unit in Sandton, South Africa"
    title="Exceptional Penthouse 4 Bedroom Suite Apartment"
    description="8 guests 4 bedrooms 4 beds 4 baths"
    star="4.96"
    price="R3,800 ZAR / night"
    total="R22,085 ZAR Total before taxes"
    />
    <SearchResult 
    img="https://a0.muscache.com/im/ml/photo_enhancement/pictures/041bd50d-a0a1-4730-96d9-6d7ecdd9c51d.jpg?im_w=720"
    location="Private room in guesthouse in Mbabane, Eswatini"
    title="Lovely 1 bedroom cottage with pool and firepit"
    description="2 guests 1 bedroom 1 bed 1 private bath"
    star="4.89"
    price="R790 ZAR / night"
    total="R4,694 ZAR Total before taxes"
    />
  </div>;
};

export default SearchPage;
