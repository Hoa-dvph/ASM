import React from 'react';

const Kategorien = () => {
  return (
    <div className="category-container"style={{ backgroundColor: '#fff', padding: '20px', marginLeft: '20px', marginTop: '20px' }}>
      <header className="category-header">
        <div className="category-title">
          <a href="#" className="category-link">Kategorien</a>
        </div>
        <div className="category-separator"></div>
      </header>
      <main className="category-main">
        <div className="category-column">
          <div className="category-item">
            <div className="category-item-content">
              <img className="category-icon" alt="" src="../../../public/mask-group@2x.png" />
              <div className="category-text">
                <a href="#" className="category-name">Beleuchtung</a>
                <span className="category-count">30 items</span>
              </div>
            </div>
          </div>
          <div className="category-item">
            <div className="category-item-content">
            <img className="category-icon" alt="" src="../../../public/mask-group1@2x.png" />
            <div className="category-text">
                <a href="#" className="category-name">Möbel</a>
                <span className="category-count">15 items</span>
              </div>
            </div>
          </div>
          <div className="category-item">
            <div className="category-item-content">
              <img className="category-icon" alt="" src="../../../public/Mask group (8).png" />
              <div className="category-text">
                <a href="#" className="category-name">Dekoration</a>
                <span className="category-count">20 items</span>
              </div>
            </div>
          </div>

          <div className="category-item">
            <div className="category-item-content">
            <img className="category-icon" alt="" src="../../../public/Mask group (9).png" />
            <div className="category-text">
                <a href="#" className="category-name">Dekoration</a>
                <span className="category-count">20 items</span>
              </div>
            </div>
          </div>

          <div className="category-item">
            <div className="category-item-content">
            <img className="category-icon" alt="" src="../../../public/Mask group (10).png" />
            <div className="category-text">
                <a href="#" className="category-name">Dekoration</a>
                <span className="category-count">20 items</span>
              </div>
            </div>
          </div>

          <div className="category-item">
            <div className="category-item-content">
            <img className="category-icon" alt="" src="../../../public/Mask group (11).png" />
            <div className="category-text">
                <a href="#" className="category-name">Dekoration</a>
                <span className="category-count">20 items</span>
              </div>
            </div>
          </div>

          <div className="category-item">
            <div className="category-item-content">
            <img className="category-icon" alt="" src="../../../public/Mask group (12).png" />
            <div className="category-text">
                <a href="#" className="category-name">Dekoration</a>
                <span className="category-count">20 items</span>
              </div>
            </div>
          </div>
          <div className="category-item">
            <div className="category-item-content">
            <img className="category-icon" alt="" src="../../../public/Mask group (13).png" />
            <div className="category-text">
                <a href="#" className="category-name">Dekoration</a>
                <span className="category-count">20 items</span>
              </div>
            </div>
          </div>
          
          
        </div>
      </main>
    </div>
  );
};

export default Kategorien;
