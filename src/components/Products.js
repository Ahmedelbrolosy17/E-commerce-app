import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductType, fetchProducts } from '../rtk/slices/Products-slice';
import { add } from '../rtk/slices/Cartslice';
import { fetchcategories } from '../rtk/slices/CategorySlice';
import Landing from './Landingpage';

function Products() {
  const [selectedCost, setSelectedCost] = useState('every'); // State to manage selected cost filter
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const loaded = useRef(true);

  useEffect(() => {
    if (loaded.current) {
      dispatch(fetchProducts());
      dispatch(fetchcategories());
      loaded.current = false;
    }
  }, []);

  // Function to handle cost filter button click
  const handleCost = (value) => {
    setSelectedCost(value);
  };

  return (
    <>
      <Landing />

      <h1 className='text-center'>welcome to our Products section</h1>
      <div className='text-center mb-1'>
          <button className='btn btn-primary' onClick={() => { dispatch(fetchProducts()) }}>All</button>
          {categories.map((ele) => (
            <button key={ele} className='m-1 btn btn-primary' onClick={() => { dispatch(fetchProductType(`https://fakestoreapi.com/products/category/${ele}`)) }}>{ele}</button>
          ))}
        </div>
      <div className='row p-2'>
          <div className='col-lg-2'>
              <h3><span class="badge text-bg-secondary">manage the price:</span></h3>
            <ul className='list-unstyled d-flex flex-wrap'>
              <li className='btn btn-secondary m-2'><label><input onClick={() => { handleCost('less100') }} type='radio' name='money' value="less100" /> less than 100$</label></li>
              <li className='btn btn-secondary m-2'><label><input onClick={() => { handleCost('more100') }} type='radio' name='money' value="more100" /> more than 100$</label></li>
              <li className='btn btn-secondary m-2'><label><input onClick={() => { handleCost('every') }} type='radio' name='money' value="every" />All</label></li>
            </ul>
          </div>
        <div className='col-9 d-flex flex-wrap m-auto'>
            {products
              .filter((ele) => {
                if (selectedCost === 'less100') {
                  return ele.price < 100;
                } else if (selectedCost === 'more100') {
                  return ele.price > 100;
                }
                return true; // Show all products if no cost selected
              })
              .map((ele) => (
                <div key={ele.id} className="card m-1" style={{ width: "16rem" }}>
                  <img className="card-img-top" src={ele.image} alt={ele.title} style={{ height: "200px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{ele.titel}</h5>
                    <p className="card-text">{ele.description.slice(0, 40)}</p>
                    <p className="card-text">{ele.price}$</p>
                    <button onClick={() => {
                      dispatch(add(ele))
                    }} className="btn btn-primary">add to cart</button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Products;
