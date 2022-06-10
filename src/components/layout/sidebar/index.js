import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useOutsideClick } from "helpers/outsideClick";
import { closeMenu } from "store/reducer/global";
import { useRef } from "react";

export default function Sidebar() {
  const showMenu = useSelector(state => state.global.showMenu);
  const dispatch = useDispatch();
  const ref = useRef();

  useOutsideClick(ref, () => dispatch(closeMenu()))

  return (
    <aside ref={ref} className={`bg-white w-[280px] h-screen p-8 absolute md:relative top-0 left-0 transition md:translate-x-0
    ${!showMenu ? '-translate-x-full' : 'shadow-lg md:shadow-none'}
    `}>
      <img className="mb-10" src="assets/images/logo_gadjian.png" alt="" />
      <nav>
        <ul className="font-bold space-y-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-main' : ''}>
              <i className="fas fa-home w-5 text-center"/> Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/personnel" className={({ isActive }) => isActive ? 'text-main' : ''}>
            <i className="fas fa-users w-5 text-center"/> Personnel List
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-main' : ''}>
            <i className="fas fa-calendar w-5 text-center"/> Daily Attendance
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}