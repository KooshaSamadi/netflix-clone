import "./planScreen.styles.scss";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
function PlanScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //get products and prices from firestore
    const getProducts = async () => {
      const productsObj = {};
      const productsCol = collection(db, "products");
      const q = query(productsCol, where("active", "==", true));
      const productSnapshot = await getDocs(q);
      productSnapshot.docs.forEach(async (document) => {
        productsObj[document.id] = document.data();
        const priceCol = collection(db, "products", `${document.id}`, "prices");
        const priceSnapshot = await getDocs(priceCol);
        priceSnapshot.docs.forEach(async (doc) => {
          productsObj[document.id] = {
            ...productsObj[document.id],
            prices: {
              priceId: doc.id,
              priceData: doc.data(),
            },
          };
        });
      });
      setProducts(productsObj);
    };
    getProducts();
  }, []);

  return (
    <section className="planscreen">
      {Object.entries(products).map(([productId, producData]) => {
        return (
          <div className="planscreen__plan" key={productId}>
            <div className="planscreen__info">
              <h5>{producData.name}</h5>
              <h6>{producData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </section>
  );
}

export default PlanScreen;
