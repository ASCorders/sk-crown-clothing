import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
          <h3>SK Crown Clothing</h3>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser !== null ? (
            <>
              <Link className="nav-link" to="/dashboard">
                Account
              </Link>
              <span className="nav-link" onClick={signOutUser}>
                Logout
              </span>
            </>
          ) : (
            <Link className="nav-link" to="/auth">
              Signin
            </Link>
          )}
          <CartIcon />
          { isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
