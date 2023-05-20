import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { deleteCart, deleteQty, addQty } from "../redux/actions/card.action";

const Cart = () => {
  const sebet = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch();
  return (
    <div className="home">
      {sebet.length == 0 ? (
        <h1>Your have no products</h1>
      ) : (
        sebet.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
              onClick={() => {
                dispatch(deleteCart(item.id));
              }}
              onDeleteQty={() => {
                dispatch(deleteQty(item.id));
              }}
              onAddQty={() => {
                dispatch(addQty(item.id));
              }}
              showAddButton={false}
              showDeleteButton={true}
              addQtyBtn={true}
              delQtyBtn={true}
            />
          );
        })
      )}
    </div>
  );
};

export default Cart;
