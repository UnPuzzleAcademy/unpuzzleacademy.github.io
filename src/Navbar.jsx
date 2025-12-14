import './styles/Navbar.css';
import unpuzzlelogo from './assets/images/unpuzzlelogo.png';
import { Link, NavLink } from 'react-router';
import { useState } from 'react';
const Navbar = () => {
  let [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
    <div className="navbar">
      <Link to="/" className="logoSection">
        <img className="logo" src={unpuzzlelogo} alt="UnPuzzle Logo"/>
        <span>UnPuzzle Academy</span>
      </Link>

      <span className="navLinks">
        <NavLink className={({ isActive, isPending, isTransitioning })=>
        [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
            "navLink"
        ].join(" ")} to="/courses">Courses</NavLink>
        <NavLink className={({ isActive, isPending, isTransitioning })=>
        [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
            "navLink"
        ].join(" ")} to="/resources">Resources</NavLink>
        <NavLink className={({ isActive, isPending, isTransitioning })=>
        [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
            "navLink"
        ].join(" ")} to="/community">Community</NavLink>
        <NavLink className={({ isActive, isPending, isTransitioning })=>
        [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
            "navLink"
        ].join(" ")} to="/about">About</NavLink>
        <NavLink className={({ isActive, isPending, isTransitioning })=>
        [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
            "navLink"

        ].join(" ")} to="/contact">Contact</NavLink>
      </span>
      <i className="bi bi-list navBtn" onClick={()=>{setShowDropdown(!showDropdown)}}></i>
    </div>
    {showDropdown && 
      <div className="nav-dropdown-container">
        <div className="nav-dropdown">
          <span className="dropdown-navLinks">
            <NavLink className={({ isActive, isPending, isTransitioning })=>
            [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                "navLink"
            ].join(" ")} to="/courses">Courses</NavLink>
            <NavLink className={({ isActive, isPending, isTransitioning })=>
            [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                "navLink"
            ].join(" ")} to="/resources">Resources</NavLink>
            <NavLink className={({ isActive, isPending, isTransitioning })=>
            [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                "navLink"
            ].join(" ")} to="/community">Community</NavLink>
            <NavLink className={({ isActive, isPending, isTransitioning })=>
            [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                "navLink"
            ].join(" ")} to="/about">About</NavLink>
            <NavLink className={({ isActive, isPending, isTransitioning })=>
            [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
                "navLink"

            ].join(" ")} to="/contact">Contact</NavLink>
          </span>
        </div>
      </div>
    }
    </>
  )
}

export default Navbar
