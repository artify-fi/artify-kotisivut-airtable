import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../../assets/images/logo2.jpg"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
import NavLink from "./NavLink"
import { GatsbyContext } from '../../context/context'

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext)

  const tempLinks = [
    ...new Set(
      links.map(link => {
        return link.page
      })
    )
  ]
  console.log(tempLinks);

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt='artify_logo' />
          </Link>
          {!isSidebarOpen && (
            <button className='toggle-btn' onClick={showSidebar}>
              <GoThreeBars />
            </button>
          )}
        </div>
        <ul className="nav-links">
          {tempLinks.map((page, index) => {
            return <NavLink key={index} page={page}></NavLink>
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background-color: #ebebeb;
  z-index: 1;
  height: 7rem;
  display: flex;
  align-items: center;
  position: fixed;
  .nav-center {
      width: 100vw;
    margin: auto auto;
    /* max-width: var(--max-width); */
  }
  .nav-header {
      color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 120px;      
    }
    ul, li {list-style-type: none;}

    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      margin-right: 2rem;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
      background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
      display: none;
  }
  @media (min-width: 800px) {
    .nav-header {     
      .toggle-btn {
      display: none;
      }
    }
    ul, li {list-style-type: none;}
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 1rem;
      grid-gap: 0 1rem;
      align-items: center;
      justify-items: right;
      margin-top: -3.2vh;              
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      max-width: 799px;           
    }
    ul {
      text-decoration: none;
    }
    li {
      margin-bottom: 2rem;
      position: relative;
    }
    /* ul li::marker {
    display: none;
} */
    a > img {
      display: inline-block;
      margin-top: 1.4rem;     
      margin-left: 2rem;      
    }
    button {
      color: var(--clr-primary-2);
      background: transparent;
      border: transparent;
      font-size: 1.2rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
      margin-top: 3rem;     
    }
  }
`
export default Navbar
