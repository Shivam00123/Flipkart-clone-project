import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Offers from "../assets/OffersAndProducts";
import AdConatiner from "../assets/AdContainer";
import Products from "../assets/Products";
import Marginer from "../assets/Marginer";
import { TopDeals, Trending } from "../assets/Data";
import axios from "../axios";

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export default function Conatent(props) {
  const [mobilesCart, setMobilesCart] = useState([]);
  const [documnetsLength, setDocumentsLength] = useState(0);
  const [TopOffers, setTopOffers] = useState([]);
  const [DealsOfTheDays, setDealsOfTheDay] = useState([]);
  const [BestPhones, setBestPhones] = useState([]);
  const TopOffersArr = [];
  const DealsOfTheDayArr = [];
  const BestPhonesArr = [];
  const Arr = [TopOffersArr, DealsOfTheDayArr];
  const Arr2 = ["TopOffers", "DealsOfTheDay"];
  const { login } = props;

  useEffect(() => {
    if (TopOffersArr || DealsOfTheDayArr) {
      fetchMob();
    }
    return () => {
      console.log("last", TopOffersArr);
    };
  }, []);

  const fetchMob = () => {
    console.log("making request", Arr2[0]);
    if (Arr2.length === 0) {
      return;
    }
    axios
      .get(`/fetch/products:${Arr2[0]}`)
      .then((res) => {
        console.log("get response", res.data);
        if (Arr2[0] === "TopOffers") {
          setTopOffers([...res.data.data]);
        } else if (Arr2[0] === "DealsOfTheDay") {
          setDealsOfTheDay([...res.data.data]);
        } else {
          setBestPhones([...res.data.data]);
        }
        Arr2.shift();
        fetchMob();
      })
      .catch((err) => console.error(err));
  };

  return (
    <ContentContainer>
      <Offers />
      <AdConatiner />
      <Marginer direction="vertical" margin="2rem" />
      {TopOffers.length > 0 && (
        <Products data={TopOffers} length={TopOffers.length} Tag="Top Offers" />
      )}
      {DealsOfTheDays.length > 0 && (
        <Products
          data={DealsOfTheDays}
          length={DealsOfTheDays.length}
          Tag="Deals Of The Day"
        />
      )}
    </ContentContainer>
  );
}
