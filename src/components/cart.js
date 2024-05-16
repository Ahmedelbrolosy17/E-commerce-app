import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { clear, deleteProduct } from '../rtk/slices/Cartslice';
import { setProducts } from "../rtk/slices/Shippingslice";
import { useState } from 'react';
export default function Cart(){
    const cartProducts = useSelector(state=> state.soldProducts)
    const dispatch = useDispatch();
    let [sold, setSold] = useState(false);
    return(
        <>
        <div className='container'>
        <h1 className="text-center mb-5">here you will find the products you are welling to buy</h1>
        {cartProducts.length > 0 ? (
            <>        
            <div className="d-flex justify-content-between my-3 flex-wrap ">
                <table className="table ms-auto w-25">
                    <thead>
                        <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>look</th>
                        <th scope='col'>title</th>
                        <th scope='col'>price</th>
                        <th scope='col'>quantity</th>
                        <th scope='col'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    cartProducts.map((ele)=>(
                        <tr key={ele.id}>
                        <th scope='row'>{ele.id}</th>
                        <td><img src={ele.image} alt={ele.title} style={{height:200}}/></td>
                        <td>{ele.title}</td>
                        <td>{ele.price}$</td>
                        <td>{ele.quantity}</td>
                        <td><Button variant="danger" onClick={()=>{
                            dispatch(deleteProduct(ele))
                        }}>delete</Button></td>
                        </tr>
                    ))
                }
                    </tbody>
            </table>
            </div>
            <div className="m-3">
                <div className='w-50 px-5 ms-auto d-flex flex-wrap justify-content-between'>
                <Button variant="danger" onClick={()=>{
                    dispatch(clear())
                }}>clear cart</Button>

                <div className='bg-light p-1'>
                <h3>total price is: {cartProducts.reduce((acc, ele)=>{
                    return acc + (ele.price*ele.quantity);
                }, 0).toFixed(2)}</h3>
                </div>

                {cartProducts.length > 0 && (<Button onClick={()=>{
                    dispatch(setProducts(cartProducts))
                    setSold(true)
                    dispatch(clear())
                }} variant="success" className="px-4">buy</Button>)}
                </div>
            </div>
            </>
        ): sold === true ? <h3>your delivery is transferred to shipping service</h3>:<h3 className="text-end m-5">your cart is empty </h3>
        }
        </div >
        </>
    )
}