import React from "react";
import logo from "../../svg/logo1.1.svg";
import notification from "../../svg/notification_Icon.svg";
import pieChart from "../../svg/pie-chart.svg";
import settings from "../../svg/settings.svg";
import calendar from "../../svg/calendar.svg";
import category from "../../svg/category.svg";
import more from "../../svg/more.svg";
import avatar from "../../png/ellipse-1.png";
import "./style.scss";

function SideBarLeft() {
  const navMenu = [
    {
      value: "Dashboard",
      href: "#",
      className: `navItem`,
      svg: category,
    },
    {
      value: "Schedule Reminder",
      href: "#",
      className: `navItem`,
      svg: calendar,
    },
    {
      value: "Reports",
      href: "#",
      className: `navItem`,
      svg: pieChart,
    },
    {
      value: "Notifications",
      href: "#",
      className: `navItem`,
      svg: notification,
    },
    {
      value: "Settings",
      href: "#",
      className: `navItem`,
      svg: settings,
    },
  ];

  return (
    <aside className="asideLeft">
      <div>
        <div className="asideLeft__logo">
          <img src={logo} alt="logo" title="logo" />
          <span>Hydrocult</span>
        </div>
        <nav>
          <h4>Menu</h4>
          <ul className="asideLeft__navAllItem">
            {navMenu.map((el) => {
              return (
                <li className={el.className}>
                  <img src={el.svg} alt="icons" />
                  <a href={el.href}>{el.value}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="asideLeft__frame">
        <img src={avatar} alt="" />
        <div>
          <span> Mathew Perry</span>
          <a className="asideLeft__frame__a" href="mailto:mathewperry@xyz.com">
            mathewperry@xyz.com
          </a>
        </div>
        <button className="asideLeft__frame__button">
          <img src={more} alt="more" />
        </button>
      </div>
    </aside>
  );
}

export default SideBarLeft;
