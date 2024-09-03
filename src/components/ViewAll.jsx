import React, { useState } from 'react'
import Header from './Header'

const ViewAll = () => {
  const [data, changeData] = useState(
    [{ "empid": 1001, "name": "Bibin", "position": "Manager", "image": "https://freerangestock.com/sample/141820/happy-office-worker-working-on-a-laptop-with-paper-notes.jpg" },
    { "empid": 1002, "name": "Tom", "position": "Devoloper", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBNAere82P-23Wz9_dcqpsjckzeqsSdGE1rhtYvliG3xgLrA2YiAgSNr6iAOfHXcThj8&usqp=CAU" },
    { "empid": 1003, "name": "Leo", "position": "Accountant", "image": "https://st.focusedcollection.com/3839757/i/1800/focused_178411440-stock-photo-male-office-worker-working-laptop.jpg" }]

  )
  return (
    <div>
      <Header></Header>
      <br></br>
      <div class="container">
        <div class="row ">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
              {data.map(
                (value, index) => {
                  return <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src={value.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Name:{value.name}</h5>
                        <p class="card-text">
                          Emp ID:{value.empid}</p>
                        <p class="card-text">
                          Position : {value.position}</p>
                        <a href="#" class="btn btn-primary">View Details</a>
                      </div>
                    </div>
                  </div>
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll

