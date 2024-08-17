import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SideBarWrapper, About, Shop, Flop, Ditto, TooMuchShop, Notice, QandA, Review, SearchForm, SearchInput, SearchButton } from "./SideBarStyle";

export default function SideBar() {
  const [searchKeyword, setSearchKeyword] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products/search/${searchKeyword}`);
  };

  return (
    <>
      <SideBarWrapper>
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
        <SearchForm onSubmit={handleSearch}>
          <span>Search</span>
          <SearchInput type="text" placeholder="" value={searchKeyword} onChange={handleChange} />
          <SearchButton type="submit"></SearchButton>
        </SearchForm>
      </SideBarWrapper>
    </>
  );
}
