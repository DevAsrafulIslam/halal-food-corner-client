import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/userhome">
              <FaHome /> User Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt /> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <GiWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdReviews /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <BiSolidCalendarEvent /> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/dashboard/home">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/menu">
              <IoMdMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop">
              <FaBagShopping /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <IoMdMail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
