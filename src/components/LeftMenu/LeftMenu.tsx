import { useState } from "react"
import { menuItemsArray } from "./LeftMenuContent"
import "./style.scss"

const LeftMenu = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState("0")

  return (
    <div
      className={`menu ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="profil-avatar">
        <span className="profil-circular">
          <img src="/assets/https_specials-2.png" alt="avatar" />
        </span>
        <p className="profil-name">Daniel</p>
      </div>
      <div className="menu-items">
        {menuItemsArray?.map(({ title, id, source }) => (
          <div id={id} key={id}>
            <button className={`menu-item ${id === selectedMenu && "selected"}`} onClick={() => setSelectedMenu(id)}>
              <img src={source} alt={title} />
              <span className={isHovered ? "title" : "hidden"}>{title}</span>
            </button>
          </div>
        ))}
      </div>
      <div className="menu-footer">
        <span>LANGUAGE</span>
        <span>GET HELP</span>
        <span>EXIT</span>
      </div>
    </div>
  )
}

export default LeftMenu
