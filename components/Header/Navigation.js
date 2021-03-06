import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import NavLink from "react-bootstrap/NavLink";
import Col from 'react-bootstrap/Col'
import { APP_NAME } from "../../config";
import { signout, isAuth } from "../../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
import Search from "../Blog/Search";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Navigation = () => {
// class Navigation extends React.Component {
//     render() {
    return (
        <>
            <Navbar bg="none" expand="lg">
                <Navbar.Brand><Link href="/"><img src="/images/seoblog.png" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav>
                        <div>
                        <Link href="/categories/virtual-reality"><a className="button transparent">Virtual Reality</a></Link>
                        </div>
                    
                        <div>
                        <Link href="/categories/augmented-reality"><a className="button transparent">Augmented Reality</a></Link>
                        </div>
                    
                        <div>
                        <Link href="/categories/spatial-computing"><a className="button transparent">Spatial Computing</a></Link>
                        </div>

                        <div>
                        <Link href="/categories/game-development"><a className="button transparent">Game Development</a></Link>
                        </div>

                        <div className="opacity-1">
                            <NavDropdown title="More" id="basic-nav-dropdown" className="button transparent">
                                <div className="dropdown-row">
                                    <div className="col-md-4">
                                        <h6>Hardware</h6>
                                        <NavDropdown.Item href="#action/3.1">Single Board Computers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Desktop Computers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Setup & Accessories</NavDropdown.Item>
                                    </div>
                                    <div className="col-md-4">
                                        <NavDropdown.Item href="#action/3.1">link</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">link</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">link</NavDropdown.Item>
                                    </div>
                                    <div className="col-md-4">
                                        <NavDropdown.Item href="#action/3.1">link</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">link</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">link</NavDropdown.Item>
                                    </div>
                                </div>
                                <div className="dropdown-row">
                                    <Search />
                                </div>
                            </NavDropdown>
                        </div>

                        <div>
                        {!isAuth() && (
                        <>
                        <Link href="/signin"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>Sign In</a></Link>
                        <Link href="/signup"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>Sign Up</a></Link>
                        </>
                        )}

                        {isAuth() && (
                        <NavLink className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, padding: `.375rem .75rem`, background: `lavenderblush`}} onClick={() => signout(() => Router.replace(`/signin`))}>
                            Sign Out
                        </NavLink>
                        )}
                        </div>
                    </Nav> */}
                    <Nav className="ml-auto align-items-center">
                        <Search />

                        <Link href="/"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>Home</a></Link>

                        <Link href="/blogs"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>Blogs</a></Link>
                        
                        <Link href="/contact"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>Contact</a></Link>

                        {!isAuth() && (
                        <>
                        <Link href="/signin"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>Sign In</a></Link>
                        <Link href="/signup"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>Sign Up</a></Link>
                        </>
                        )}

                        {isAuth() && (
                        <NavLink className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, padding: `.375rem .75rem`, background: `lavenderblush`}} onClick={() => signout(() => Router.replace(`/signin`))}>
                            Sign Out
                        </NavLink>
                        )}

                        {isAuth() && isAuth().role === 0 && (
                        <Link href="/user"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>
                            {`${isAuth().name}'s Dashboard`}
                            </a></Link>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                        <Link href="/admin"><a className="ml-2 btn" style={{border: `1px solid hotpink`, color: `hotpink`, background: `lavenderblush`}}>
                            {`${isAuth().name}'s Dashboard`}
                            </a></Link>
                        )}

                        <Link href="/user/crud/blog"><a className="ml-2 btn" style={{border: `1px solid mediumorchid`, color: `mediumorchid`, background: `lavender`}}>Create Blog</a></Link>

                    </Nav>
                </Navbar.Collapse>
                <div className="social-links">
                    <div className="social-icon facebook">
                        <Link href="/">
                            <a className="button transparent">
                                <svg id="twitter_logo" xmlns="http://www.w3.org/2000/svg" viewBox="70 95 260 210">
                                    <path strokeWidth="15px" d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </Navbar>
        </>
    );
    // }
};

export default Navigation;