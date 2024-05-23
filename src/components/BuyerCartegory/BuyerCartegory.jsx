import { BuyerCartegoryWrapper, About, Shop, Flop } from "./BuyerCartegoryStyle";

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
              <Flop Link to={`/Flop`}>
                FLOPS
              </Flop>
              <li>Ditto</li>
              <li>Too_much_shop</li>
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
