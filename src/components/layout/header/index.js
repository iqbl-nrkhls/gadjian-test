import { useDispatch } from "react-redux"
import { toggleMenu } from "store/reducer/global"

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center gap-4">
      <div className="flex gap-4 md:hidden">
        <button onClick={() => dispatch(toggleMenu())}>
          <i className="fas fa-bars text-xl" />
        </button>
        <img className="h-10" src="./assets/images/logo_gadjian.png" alt="" />
      </div>
      <div className="w-max ml-auto text-lg font-semibold hidden md:block">
        Hallo,
        <span className="text-main ml-1">Gadjian User</span>
      </div>
      <button className="w-12 rounded-full overflow-hidden">
        <img src="https://ui-avatars.com/api/?name=Gadjian+User" alt="" />
      </button>
    </header>
  )
}