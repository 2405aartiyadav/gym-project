import React from 'react'
import '../pricing/pricing.css'


function Pricing() {

  return (
    <div className='pricingContainer' id="pricing">
      <div className="card" >
        <div className="card-body cards">
          <div className="header">
            <h3 className="card-title text-center">Regular Member</h3>
            <h6 className="card-subtitle mb-2 text-body-secondary text-center">1000₹/month</h6>

          </div>
          <div className="items">
            <ul class="list-group">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="joinBtn">
            <button className='btn btn-primary '>Join</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing