import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Orders() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchMyOrder = async () => {
      console.log(localStorage.getItem("userEmail"));
      await fetch("http://localhost:5001/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      }).then(async (res) => {
        let response = await res.json();
        setOrderData(response);
      });
    };
    fetchMyOrder();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="container">
        <div className="row-auto">
          {Array(orderData).map((data) => {
            return data.orderData
              ? data.orderData.order_data
                  .slice(0)
                  .reverse()
                  .map((item) => {
                    if (Array.isArray(item)) {
                      return item.map((arrayData) => {
                        return (
                          <div>
                            {arrayData.Order_date ? (
                              <div className="m-auto px-3 mt-5">
                                {(data = arrayData.Order_date)}
                                <hr />
                              </div>
                            ) : (
                              <div className="w-full md:w-1/2 lg:w-1/5 ml-4">
                                <div className="mt-3 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                                  <div className="p-4 flex flex-col">
                                    <h5 className="text-lg font-bold ml-1">
                                      {arrayData.name}
                                    </h5>
                                    <div className="container w-full p-0">
                                      <span className="m-1">
                                        {arrayData.qty}
                                      </span>
                                      <span className="m-1">
                                        {arrayData.size}
                                      </span>
                                      <span className="m-1">{data}</span>
                                      <div className="ms-2 text-lg font-bold">
                                        Rs. {arrayData.price}/-
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      });
                    }
                  })
              : "";
          })}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
