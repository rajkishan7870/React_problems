import React, {useState } from 'react'
import styles from './form.module.css'


export default function Form() {
    const [bill, setBill] = useState(null);
    const [customerName, setCustomerName] = useState("");
    const [items, setItems] = useState([
      { product: { name: "", price: 0 }, quantity: "" },
    ]);
    const products = [
      { name: "Sugar", price: 80 },
      { name: "Oats", price: 100 },
      { name: "Coffee", price: 60 },
      { name: "Snacks", price: 50 },
    ];
  
    const [date, setDate] = useState(null);
  
    function handleCustomerNameChange(e) {
      setCustomerName(e.target.value);
    }
    const handleProductChange = (index, e) => {
      const updatedItems = [...items];
      const selectedProduct = products.find(
        (product) => product.name === e.target.value
      );
      updatedItems[index].product = selectedProduct;
      setItems(updatedItems);
    };
  
    const handleQuantityChange = (index, e) => {
      const updatedItems = [...items];
      updatedItems[index].quantity = Number(e.target.value);
      setItems(updatedItems);
    };
  
    const handleAddItem = () => {
      const newItems = [
        ...items,
        { product: { name: "", price: 0 }, quantity: "" },
      ];
      setItems(newItems);
    };
  
    const handleCreateBill = () => {
      const billItems = items.map((item) => {
        return { ...item.product, quantity: item.quantity };
      });
      const total = billItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );
      const bill = { customerName, items: billItems, total };
      setBill(bill);
      setDate(new Date().toLocaleString());
    };


    return (
        <div>
      <h1>Billing Form</h1>
      
      <label>
        <b>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={handleCustomerNameChange}
          />
        </b>{" "}
      </label>
      <hr></hr>

      

      {items.map((item, index) => (
        <div className={styles.mainDivOfForm} key={index}>
          <hr className={styles.hr} />

          <div className={styles.first}>
            <b> Select Product:</b>
            <select
              className={styles.product}
              value={item.product.name}
              onChange={(e) => handleProductChange(index, e)}
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name} (₹{product.price})
                </option>
              ))}
            </select>
          </div>
          <div className={styles.quantity}>
            <b> Product Quantity:</b>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(index, e)}
            />
          </div>
        </div>
      ))}
      <div className={styles.bttn}>
        <button onClick={handleAddItem}>
          <b>Add More Item</b>
        </button>
      </div>

      <hr/>
      


      <button onClick={handleCreateBill}>
        <b>Create Bill</b>
      </button>
      {bill && (
        <div>
          <h2>Customer Name : {bill.customerName}</h2>
          <h4>Date/time: {date}</h4>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bill.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">Total</td>
                <td>₹{bill.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
    )
}
