import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
import { listListing } from "../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error.message}</h3>
      ) : (
        <div className="home_section">
          {listings.map(listing => (
            <Card
            src={listing.img}
            title={listing.title}
            description={listing.description}
            price={listing.price}
          />
          ))}
          
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/ml/photo_enhancement/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720"
          title="World of Trips"
          description="Unique trips we can take together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-751206971626894382/original/e0607051-4fe3-43d4-b808-ea9422113003.jpeg?im_w=720"
          title="Unique Stays"
          description="Join us in places you've never been to"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/222ccf3f-0e89-4f8d-8d9b-236f2b9e6fd6.jpg?im_w=720"
          title="Entire homes"
          description="View homes that fit you personality and hunger for adventure"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/d1061623-322c-439e-9fb2-878b0331ab9c.jpg?im_w=720"
          title="Ponta do Ouro, Mozambique"
          description="8 guests 4 bedrooms 6 beds 4 baths"
          price="R7,661 ZAR/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/213c8609-eecb-473a-b8d8-b469dd99dbe1.jpg?im_w=720"
          title="Westville, South Africa"
          description="2 guests Studio 1 bed 1.5 baths"
          price="R990 ZAR/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-817859916440375298/original/57bdc159-8c89-4c27-99a2-26099a20bf8b.jpeg?im_w=720"
          title="Hartbeespoort, South Africa"
          description="6 guests 3 bedrooms 3 beds 3.5 baths"
          price="R5,300 ZAR/night"
        />
      </div> */}
    </div>
  );
};

export default Home;
