import React from 'react'

type Props = {}

const Top_function = (props: Props) => {
  return (
    <div className="main-search">
        <div className="search-container">
          <input type="text" placeholder="Suchen Sie nach Produkten, Marken und mehr" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="functions">
          <div className="function-item">
            <select className="language-select">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <div className="function-item">
            <img src="../../../public/user.svg" alt="Tài khoản" title="Tài khoản" />
            <span className="function-name">Account</span>
          </div>
          <div className="function-item">
            <img src="../../../public/bag-alt.svg" alt="Giỏ hàng" title="Giỏ hàng" />
            <span className="function-name">Cart</span>
          </div>
        </div>
      </div>
  )
}

export default Top_function