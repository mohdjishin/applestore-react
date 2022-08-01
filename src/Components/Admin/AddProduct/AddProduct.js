import React from 'react';
import Header from '../Header/Header';

function AddProduct() {
  return (
      <div style={{ marginTop: "60px" }}>

          <Header />
          {/* <!-- Page Wrapper --> */}

          <div id="wrapper">

              {/* <!-- Sidebar -->
                
              {{> admin - sidebar}} */}

              {/* <!-- Content Wrapper --> */}
              <div id="content-wrapper" class="d-flex flex-column">
                  {/* <!-- Main Content --> */}

                  <div id="content">
                      {/* <!-- Begin Page Content --> */}

                      {/* <!-- Begin Page Content --> */}
                      <div class="container-fluid">

                          {/* <!-- Page Heading --> */}
                          <h1 class="h3 mb-4 text-gray-800">Add Product</h1>

                          <div class="row">

                              <div class="col-lg-11">

                                  {/* <!-- Circle Buttons --> */}
                                  <div class="card shadow mb-4">
                                      <div class="card-header py-3">
                                          <h6 class="m-0 font-weight-bold text-primary">Details</h6>
                                      </div>
                                      {/* <div class="message p-3">
                                          {{ #if deviceSucc }}
                                          <div class="alert alert-success" role="alert">
                                              {{ deviceSucc }}
                                          </div>
                                          {{/if}}
                                          {{ #if deviceError }}
                                          <div class="alert alert-danger" role="alert">
                                              {{ deviceError }}
                                          </div>
                                      </div>
                                      {{/if}} */}
                                      <form action="/admin/add-product" method="post" enctype="multipart/form-data">
                                          <div class="card-body">
                                              <span style={{marginLeft:" 13px" ,color: "green"}} id="check_availability_movie"
                                                 ></span>
                                              <span style={{ marginLeft: " 13px", color: "green" }} id="check_not_movie"></span>

                                              {/* {{!-- Product Name --}} */}
                                              <div class="row m-2">
                                                  <div class="form-group mt-3 col-md-5">
                                                      <label for="product">Product Name</label>
                                                      <input style={{borderColor:"#b4e3eb"}} type="text"
                                                          class="form-control col-md-12 mt-2" id="productname"
                                                          name="productname" required/>
                                                  </div>

                                                  <div class="form-group mt-3 col-md-5">
                                                      <label for="product">Product Price</label>
                                                      <input style={{ borderColor: "#b4e3eb" }} type="text"
                                                          class="form-control col-md-12 mt-2" id="productprice"
                                                          name="productprice" required/>
                                                  </div>
                                              </div>

                                              <div class="row m-2">

                                                  <div class="form-group mt-3 col-md-5">
                                                      <label for="product">Display</label>
                                                      <input style={{ borderColor: "#b4e3eb" }} type="text"
                                                          class="form-control col-md-12 mt-2" id="display" name="display"
                                                          required/>
                                                  </div>


                                                  <div class="form-group mt-3 col-md-5">
                                                      <label for="product">Battery life</label>
                                                      <input style={{borderColor:"#b4e3eb"}} type="text"
                                                          class="form-control col-md-12 mt-2" id="battery" name="battery"
                                                          required/>
                                                  </div>
                                              </div>

                                              <div class="form-group mt-3 col-md-5">
                                                  <div class="form-group">
                                                      <label for="Category">Select Category</label>
                                                      <input style={{ borderColor: "#b4e3eb" }} type="text"
                                                          class="form-control col-md-12 mt-2" id="category" name="category"
                                                          required />
                                                  </div>
                                              </div>

                                              {/* {{!-- Color --}} */}
                                              <div style={{borderStyle: "solid", borderColor: "#67c2d6"}} class="row m-1"
                                                  id="color">
                                                  <div class="form-group mt-1 col-md-12">
                                                      <label for="color">Color</label>
                                                      <a style={{borderRadius: "20px",width: "37px"}}
                                                          class="m-1 ml-5 btn btn-danger" id="remove"
                                                          onclick="removeElement()">-</a>
                                                      <a style={{borderRadius: "20px"}} class="m-1 btn btn-success"
                                                          id="add" onclick="addElement()">+</a>
                                                  </div>

                                                  <div class="form-group m-3 col-md-12">
                                                      <div class="row">
                                                          <label class="col-md-12" for="processor ">All Colors</label>
                                                          <input style={{borderColor:"#b4e3eb"}} type="file"
                                                              class="form-control col-md-5 mt-2" name="allcolors"
                                                              onchange="allColorImage(event)" required />
                                                              <img style={{objectFit: "contain"}} class="col-md-1 mt-2 color-image"
                                                                  src="" height="40px" width="40px" id="all-color-image"/>

                                                              </div>
                                                      </div>

                                                      <div class="form-group mt-3 col-md-5">
                                                          <label for="processor">Color</label>
                                                      <input style={{ borderColor: "#b4e3eb" }}  type="text"
                                                              class="form-control col-md-12 mt-2" id="color" name="color"
                                                              required/>
                                                      </div>
                                                      <div class="form-group mt-3 col-md-5">
                                                          <label for="Trailer Link" class="col-md-12">Image</label>
                                                          <div class="row">
                                                          <input style={{ borderColor: "#b4e3eb" }}  type="file"
                                                                  class="form-control col-md-9 mt-2" name="colorimage"
                                                                  onchange="viewImage(event,1)" required />
                                                                  <img class="col-md-3 mt-2 color-image" src="" id="color-image1"
                                                                      height="40px" width="40px"/>

                                                                  </div>
                                                          </div>
                                                      </div>



                                                      {/* {{!-- storage --}} */}

                                                      {/* {{!-- < div style=" border-style: solid; border-color: #ffbeb3;"
                                            class="row m-1 mt-5" id="storage">
                                                      <div class="form-group mt-1 col-md-12">
                                                          <label for="storage">Storage</label>
                                                          <button style="border-radius: 20px;width: 37px;"
                                                              class="m-1 ml-4 btn btn-danger" id="remove"
                                                              onblur="removeStorageElement()">-</button>
                                                          <button style="border-radius: 20px;" class="m-1 btn btn-success"
                                                              id="add" onclick="addStorageElement()">+</button>
                                                      </div>

                                                      <div class="form-group mt-3 col-md-5">
                                                          <label for="color">Storage </label>
                                                          <input style="border-color:#b4e3eb;" type="text"
                                                              class="form-control  mt-2" id="storage" name="storage" required>
                                                      </div>
                                                      <div class="form-group mt-3 col-md-5">
                                                          <label for="color">Price </label>
                                                          <input style="border-color:#b4e3eb;" type="text"
                                                              class="form-control  mt-2" id="storageprice" name="storageprice"
                                                              required>
                                                      </div>


                                                  </div> --}} */}


                                                  {/* {{!-- Processor --}} */}
                                                  <div class="row ml-1">
                                                      <div class="form-group mt-3 col-md-5">
                                                          <label for="processor">Processor</label>
                                                      <input style={{ borderColor: "#b4e3eb" }}  type="text"
                                                              class="form-control col-md-12 mt-2" id="processor" name="processor"
                                                              required />
                                                      </div>
                                                      <div class="form-group mt-3 col-md-5">
                                                          <label for="Trailer Link" class="col-md-12">Processor Image</label>
                                                          <div class="row">
                                                          <input style={{ borderColor: "#b4e3eb" }}  type="file"
                                                                  class="form-control col-md-9 mt-2" name="processorimage"
                                                                  onchange="processorImage(event)" required />
                                                                  <img style={{objectFit: "contain"}} class="col-md-3 mt-2" src=""
                                                                      id="processor-img" height="40px" width="40px" />

                                                                  </div>
                                                          </div>
                                                      </div>

                                                      <div class="form-group mt-3 col-md-10">
                                                          <label for="storage">Camera</label>
                                                  <input style={{ borderColor: "#b4e3eb" }}  type="text"
                                                              class="form-control col-md-12 mt-2" id="camera"
                                                              name="camera" required />
                                                      </div>



                                                      <div class="form-group mt-3 col-md-10">
                                                          <label for="storage">RAM</label>
                                                  <input style={{ borderColor: "#b4e3eb" }}  type="text"
                                                              class="form-control col-md-12 mt-2" id="ram"
                                                              name="ram" required />
                                                      </div>

                                                      <div class="form-group mt-3 col-md-10">
                                                          <label for="storage">Weight</label>
                                                  <input style={{ borderColor: "#b4e3eb" }}  type="text"
                                                              class="form-control col-md-12 mt-2" id="weight"
                                                              name="weight" required />
                                                      </div>

                                                      <hr/>
                                                          <label class="ml-3" for=" Trailer Link col-md-12">Product Image</label>
                                                          <div class="form-group mt-3 col-md-10">
                                                              <img src="" id="product-image"/>
                                                      <input sstyle={{ borderColor: "#b4e3eb" }}  type="file"
                                                                      class="form-control col-md-12 mt-2" name="productimage"
                                                                      onchange="productImage(event)" required />
                                                                  </div>

                                                                  <center>
                                                                      <a href="/admin/dashboard" class="btn btn-danger  mt-3 mr-2 ">Cancel</a>
                                                                      <button type="submit" id="submit"
                                                                          class="btn btn-success  mt-3">Next</button>
                                                                  </center>
                                                          </div>
                                                      </form>
                                                  </div>



                                              </div>

                                          </div>
                                  </div>
                      {/* <!-- /.container-fluid --> */}


                  </div>
                  {/* <!-- End of Main Content --> */}


              </div>
              {/* <!-- End of Content Wrapper --> */}

          </div>
      </div>
  )
}

export default AddProduct