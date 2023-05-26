import React from "react";
import logo from "../../svg/logo1.1.svg";
import notification from "../../svg/notification_Icon.svg";
import pieChart from "../../svg/pie-chart.svg";
import settings from "../../svg/settings.svg";
import calendar from "../../svg/calendar.svg";
import category from "../../svg/category.svg";
import more from "../../svg/more.svg";
import avatar from "../../png/ellipse-1.png";

function SideBarLeft() {
  const navMenu = [
    {
      value: "Dashboard",
      href: "#",
      className: `nav_item`,
      svg: category,
    },
    {
      value: "Schedule Reminder",
      href: "#",
      className: `nav_item`,
      svg: calendar,
    },
    {
      value: "Reports",
      href: "#",
      className: `nav_item`,
      svg: pieChart,
    },
    {
      value: "Notifications",
      href: "#",
      className: `nav_item`,
      svg: notification,
    },
    {
      value: "Settings",
      href: "#",
      className: `nav_item`,
      svg: settings,
    },
  ];

  return (
    <aside className="aside-left">
      <div>
        <div className="logo">
          <img src={logo} alt="logo" title="logo" />
          <span>Hydrocult</span>
        </div>
        <nav>
          <h4>Menu</h4>
          <ul className="nav__All_item">
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
      <div className="frame">
        <img className="frame__img" src={avatar} alt="" />
        <div>
          <span className="frame_span"> Mathew Perry</span>
          <a className="frame__a" href="mailto:mathewperry@xyz.com">
            mathewperry@xyz.com
          </a>
        </div>
        <button className="frame__button">
          <img className="frame__button__img" src={more} alt="more" />
        </button>
      </div>
    </aside>
  );
}

export default SideBarLeft;
