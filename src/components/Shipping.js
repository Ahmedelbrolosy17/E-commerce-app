import Table from "react-bootstrap/esm/Table";
import { useSelector } from "react-redux"

export default function Shipping(){
    let shippingProducts = useSelector(state=>state.ShippingPro)
    let userData = useSelector(state=>state.userData);
    console.log(userData);
    console.log(shippingProducts);
    return(
        <div className="container">
            {shippingProducts.length > 0 ?
                <>
                    <h3 className="m-3">your delivery is redy to go</h3>
                    <p>we will contact you as soon as possible</p>
                    <Table striped bordered hover className=" m-auto mt-5 w-50">
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>look</th>
                            <th>title</th>
                            <th>price</th>
                            <th>quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                {shippingProducts.map((ele)=>(
                    <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td><img src={ele.image} alt={ele.title} style={{height:"25px"}}/></td>
                    <td style={{fontSize:"10px"}}>{ele.title}</td>
                    <td>{ele.price}$</td>
                    <td>{ele.quantity}</td>
                    </tr>
            ))}
                        </tbody>
                    </Table>
                </>
            :<h1>you have no products being shippied</h1>}
        
        </div>
    )
}