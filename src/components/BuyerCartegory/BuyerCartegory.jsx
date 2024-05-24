import { BuyerCartegoryWrapper, About, Shop, Flop, Ditto, TooMuchShop, Notice, QandA, Review } from "./BuyerCartegoryStyle";

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
              <Shop Link to={`/`}>
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
            <li>
              <Notice Link to={`/Notice`}>
                Notice
              </Notice>
            </li>
            <li>
              <QandA Link to={`/QandA`}>
                Q & A
              </QandA>
            </li>
            <li>
              <Review Link to={`/Review`}>
                Review
              </Review>
            </li>
          </ul>
        </div>
      </BuyerCartegoryWrapper>
    </>
  );
}
