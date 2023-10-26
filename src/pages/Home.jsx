
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import AddProducts from "../components/addproducts/AddProducts";
import CardBody from "../components/cards/CardBody";
import Button from "../components/button/Button";
import { fetcher } from "../components/fetcher";
import "../App.css"


const Home = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetcher("/products?offset=0&size=20");
    setProducts(response);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }
  const itemsFilter = products.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);

  }
  return (
    <div>
      {/* <Header /> */}

      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSrarchData}
            />
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <CardBody
          products={itemsFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </div>

      
    </div>
  );
};

export default Home;