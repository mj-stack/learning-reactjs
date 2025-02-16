import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    
    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleComment(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }
    
    function handleShipping(event) {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instructions" rows={10}></textarea>
            <p>Comments: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Please select a card</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'} onChange={handleShipping}/>
                Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={handleShipping}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent;