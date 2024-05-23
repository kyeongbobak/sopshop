import { BuyerCartegoryWrapper, About, Shop, Flop, Ditto, TooMuchShop } from "./BuyerCartegoryStyle";

export default function BuyerCartegory() {
  return (
    <>
      <BuyerCartegoryWrapper>
        <div>
          <ul>
            <li>
              <About Link to={`/About`}>
                About
              </About>
            </li>
            <li>
              <Shop Link to={`/mainPage`}>
                Shop
              </Shop>
            </li>
            <div>
              <Flop to={`/FLOPS`}>FLOPS</Flop>
              <Ditto Link to={`/Ditto`}>
                Ditto
              </Ditto>
              <TooMuchShop Link to={`/Too_much_shop`}>
                Too_much_shop
              </TooMuchShop>
            </div>
            <li>Notice</li>
            <li>Q & A</li>
            <li>Review</li>
          </ul>
        </div>
      </BuyerCartegoryWrapper>
    </>
  );
}
