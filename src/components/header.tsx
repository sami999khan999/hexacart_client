import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "u", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="header">
      <Link to={"/"}>Home</Link>

      <Link to={"/search"}>
        <FaSearch />
      </Link>

      <Link to={"/cart"}>
        <FaShoppingBag></FaShoppingBag>
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prv) => !prv)}>
            <FaUser />
          </button>

          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to={"/admin/dashboard"}>Admin</Link>
              )}
              <Link to={"/order"}>Order</Link>
              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
