import React from 'react';

const Service = () => {
  return (
    <div className="service-container">
      <div className="large-product">
        <img className="product-image" alt="Large Product" src="/public/adobestock-204287225-preview-1@2x.png"/>
        <div className="image-overlay">
          <div className="overlay-text">Large Product Title</div>
        </div>
      </div>
      
      <div className="small-products-grid">
        {/* Sử dụng Grid để tổ chức các sản phẩm nhỏ */}
        <div className="small-product">
          <img className="product-image" alt="Small Product 2" src="/public/gtgre-1@2x.png" />
          <div className="image-overlay">
            <div className="overlay-text">Small Product 2</div>
          </div>
        </div>

        <div className="small-product">
          <img className="product-image" alt="Small Product 3" src="/public/ffgdsa-1@2x.png" />
          <div className="image-overlay">
            <div className="overlay-text">Small Product 3</div>
          </div>
        </div>

        <div className="small-product">
          <img className="product-image" alt="Small Product 4" src="/public/gggrrr-1@2x.png" />
          <div className="image-overlay">
            <div className="overlay-text">Small Product 4</div>
          </div>
        </div>

        <div className="small-product">
          <img className="product-image" alt="Small Product 5" src="/public/bfdsa-1@2x.png" />
          <div className="image-overlay">
            <div className="overlay-text">Small Product 5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
