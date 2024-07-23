import React from 'react';

const BestSeller = () => {
  return (
    <div>
      <div className="title">best sellers</div>
      <div className="product-grid-wrapper" style={{ backgroundColor: '#fff', padding: '20px', marginLeft: '20px', marginTop: '20px' }}>
        <div className="product-grid">
          <div className="product-item">
            <div className="product-image">
              <img className="product-icon" src="../../../public/michigan-mini-03-1@2x.png" alt="" style={{ maxWidth: '90%', height: 'auto' }}/>
            </div>
            <div className="product-details">
              <div className="category">Best Sellers</div>
              <div className="product-name">Growbox</div>
              <div className="product-price">
                <span className="old-pricee">$ 1200.00</span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
            <img className="product-icon" src="../../../public/hhy-1@2x.png" alt="" style={{ maxWidth: '90%', height: 'auto' }}/>
            </div>
            <div className="product-details">
              <div className="category">Best Sellers</div>
              <div className="product-name">Licht</div>
              <div className="product-price">
                <span className="old-pricee">$ 1500.00</span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="product-image">
            <img className="product-icon" src="../../../public/fgrgthht-1@2x.png" alt="" style={{ maxWidth: '90%', height: 'auto' }}/>
            </div>
            <div className="product-details">
              <div className="category">Best Sellers</div>
              <div className="product-name">Töpfe</div>
              <div className="product-description">5 by 5 pots for planting</div>
              <div className="product-price">
                <span className="old-pricee">$ 7000.00</span>
              </div>
            </div>
          </div>

          <div className="product-item sale-item">
            <div className="product-image">
            <img className="product-icon" src="../../../public/hththr-1@2x.png" alt="" style={{ maxWidth: '90%', height: 'auto' }}/>
            </div>
            <div className="product-details">
              <div className="category">Best Sellers</div>
              <div className="product-name">Special Töpfe</div>
              <div className="product-description">Special 5 by 5 pots for planting</div>
              <div className="product-price">
                <span className="old-price">$ 7000.00</span>
                <span className="new-price">$ 6130.00</span>
              </div>
              <div className="sale-label">Sale</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
