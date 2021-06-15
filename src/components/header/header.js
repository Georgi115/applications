import React from "react";
import "./header.scss";
import logo1 from "../../img/logo1.png";
import book from "../../img/book.png";
import applications from "../../img/applications.png";
import staff from "../../img/staff.png";
import client from "../../img/client.png";
import settings from "../../img/settings.png";
import assets from "../../img/assets.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <div
          className="header__menuLogo"
          style={{ backgroundImage: `url(${logo1})` }}
        ></div>
        <ul className="header__menuList">
          <li>
            <NavLink className="header__link" to="/book">
              {" "}
              <img src={book} alt="img"></img>
              <p>База знаний</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact className="header__link" to="/">
              {" "}
              <img src={applications} alt="img"></img>
              <p>Заявки</p>
            </NavLink>
          </li>

          <li>
            <NavLink className="header__link" to="/staff">
              {" "}
              <img src={staff} alt="img"></img>
              <p>Сотрудники</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/client">
              {" "}
              <img src={client} alt="img"></img>
              <p>Клиенты</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/assets">
              {" "}
              <img src={assets} alt="img"></img>
              <p>Активы</p>
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/settings">
              {" "}
              <img src={settings} alt="img"></img>
              <p>Настройки</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
