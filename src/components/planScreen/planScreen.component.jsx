import "./planScreen.styles.scss";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Alert from "../alert/alert.component";
import { loadStripe } from "@stripe/stripe-js";

function PlanScreen({ currentUser }) {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    //get subscription from firestore
    const getSubscription = async () => {
      const subscriptionCol = collection(
        db,
        "customers",
        `${currentUser.uid}`,
        "subscriptions"
      );
      const subscriptionSnapshot = await getDocs(subscriptionCol);
      subscriptionSnapshot.docs.forEach((document) => {
        setSubscription({
          role: document.data().role,
          current_period_end: document.data().current_period_end.seconds,
          current_period_start: document.data().current_period_start.seconds,
        });
      });
    };
    getSubscription();
  }, []);

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

  const checkoutHandler = async (productId) => {
    if (subscription) {
      alert("subscription exists");
    } else {
      const finalProduct = Object.entries(products).filter(
        ([id]) => id === productId
      );
      const priceId = finalProduct[0][1].prices.priceId;
      //redirect to checkout page
      const docRef = await addDoc(
        collection(db, "customers", `${currentUser.uid}`, "checkout_sessions"),
        {
          price: priceId,
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        }
      );
      onSnapshot(docRef, async (snap) => {
        const { error, sessionId } = snap.data();
        if (error) {
          //show error to customer and inspect your cloud function logs in the firebase console
          alert(`An error occured: ${error.message}`);
        }
        if (sessionId) {
          // We have a Stripe Checkout URL, let's redirect.
          // window.location.assign(url);
          const stripe = await loadStripe(
            "pk_test_51LAcbuFzEuHtMw6AQ2JvgewOaLuNIZNFaagazcSh86KwdERb0C8Ec3I9hEQyqoV14tq56XsaGSfkCkVNBuxDW9vY00mAW1tQMm"
          );
          stripe.redirectToCheckout({ sessionId });
        }
      });
    }
  };

  return (
    <section className="planscreen">
      {subscription && (
        <div className="planscreen_date">
          <span>
            Start date:{" "}
            {new Date(
              subscription?.current_period_start * 1000
            ).toLocaleDateString()}
          </span>
          <span>
            End date:{" "}
            {new Date(
              subscription?.current_period_end * 1000
            ).toLocaleDateString()}
          </span>
        </div>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        //add some logic to check if user's subscription is active
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div className="planscreen__plan" key={productId}>
            <div className="planscreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() => checkoutHandler(productId)}
              disabled={isCurrentPackage}
              className={`${
                isCurrentPackage ? "current_package " : "planscreen_button"
              }`}
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default PlanScreen;
