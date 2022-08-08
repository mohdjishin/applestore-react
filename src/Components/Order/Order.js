import React from 'react'

function Order() {
  return (
    <div>
          {/* <!-- ribborn --> */}
          <section class="bg-white ribbon">
              <div class="bg-white container">
                  <div class="row ">
                      <div class="pt-3 bg-white ribbon-covid-19 col-md-12">
                          <p class="text-center ribbon-text">Free contactless delivery. Some deliveries may be affected by local
                              Covid-19 restrictions. See checkout for details. </p>
                      </div>
                  </div>
              </div>
          </section>

          <section class="bg-white">
              <div class="text-center container">
                  <div class="row">
                      <div class="col-md-12 ">
                          <div class="bag-header mb-5">
                              <div class="m-5 rs-bag-header">
                                  <h2 class="order-header-text checkout-header-text imac-header-text  ">Products you’ve ordered.
                                  </h2>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </section>

            <section class="mt-4">
                <div class="container">
                    <div style={{borderBottom: "1px solid #d2d2d7"}} class="pb-5 row">
                        <div class="col-md-4 mt-3 ">
                          <img class="checkout-image" src="https://firebasestorage.googleapis.com/v0/b/applestore-80c22.appspot.com/o/product-image%2Fcompare_iphone_13_pro__bpn3x8hs692a_large.jpg?alt=media&token=e79aeb08-e990-4e44-b2e9-e3abb9a23730" alt=""/>
                        </div>

                        <div class="col-md-8 mt-3 ">
                            <div class="row pb-4">
                                <div class="col-md-6 ">
                                    <div class="checkout-product-name-div mt-3">
                                        <h3 class="checkout-product-name  ">iPhone -
                                            red</h3>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-12 checkout-price-container mt-3">
                                            <h3 class="text-center checkout-price">₹ 70000</h3>
                                        </div>
                                        <div class="col-md-12 checkout-price-container mt-3">
                                            <h6 class="text-center text-dark order-text checkout-price">Order Number: <span
                                                class="text-uppercase text-dark order-text">3435467345</span> </h6>
                                        </div>
                                        <div class="col-md-12 checkout-remove-container">
                                            <h6 class="text-center order-text text-dark checkout-price">Order Placed: 07/08/2022</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row ">
                                <div class="text-center col-md-12 p-0 m-0">
                                    {/* {{!-- < div class="checkout-product-name-div mt-3">
                                    <h3 class="checkout-pincode-text ">Find out how soon you can get this item. <a href="">Enter
                                        pin code <i class="fas fa-chevron-down"></i></a></h3>
                                </div>
                                <div class="shipping-text-container">
                                    <h2 class="item-shipping-detail-line"><i style="font-size: 17px; color: black;"
                                        class="bi bi-box"></i> <span style="font-size: 13px;">Ships in 3-5 business
                                            days.</span></h2>
                                </div> --}} */}
                              
                                <div style={{height: "5px"}} class="progress mb-2">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "8%"}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                                  <div style={{ height: "5px" }} class="progress mb-2">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
                                  <div style={{ height: "5px" }} class="progress mb-2">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                               
                                  <div style={{ height: "5px" }} class="progress mb-2">
                                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "100%"}}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              


                                <div class="text-center">
                                    <li class="   order-status-point mr-4 ml-4">Canceled</li>
                                </div>
                                
                                <div class="text-center">
                                    <li style={{float: "left"}} class="order-status-point ">Order Placed</li>
                                    <li class="  order-status-point mr-4 ml-4">Shipped</li>
                                    <li style={{float: "right"}} class="order-status-point  ml-4">Delivered</li>
                                </div>
                              
                                <div class="text-center">
                                      <li style={{ float: "left" }} class="order-status-point text-danger ">Order not placed , Payment pending</li>
                                      <a style={{ float: "right" }} onclick="payPendingPayment('{{this._id}}')" class="order-status-point btn btn-primary text-white  ml-4">Pay</a>
                                </div>
                               

                            </div>
                        </div>
                    </div>
                </div>


        </div>
</section >

    </div>
  )
}

export default Order