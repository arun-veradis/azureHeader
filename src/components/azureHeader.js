import React from "react"
import { Helmet } from 'react-helmet'

const Header = () => {

    return (
        <div>
            <Helmet title="azure header" defer={false}>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </Helmet>

            <div class="container-fluid">
                <div class="float-left">
                    <div class="row heading">
                        <img alt="" src="logo.png" id="logo" /> <span id="title">Microsoft Azure</span>
                    </div>

                    <div class="row navigation-items">

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link droplink-items" href="#">
                                        <span class="txt-style">Overview</span>
                                    </a>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link droplink-items" href="#" >
                                        <span class="txt-style">Solutions</span>
                                    </a>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle droplink-items" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="txt-style">Products</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link droplink-items" href="#" >
                                        <span class="txt-style">Documentation</span>
                                    </a>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link droplink-items" href="#" >
                                        <span class="txt-style">Pricing</span>
                                    </a>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link droplink-items" href="#" >
                                        <span class="txt-style">Training</span>
                                    </a>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle droplink-items" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="txt-style">Marketplace</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle droplink-items" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="txt-style">Partners</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle droplink-items" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="txt-style">Support</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link droplink-items" href="#" >
                                        <span class="txt-style">Blog</span>
                                    </a>
                                </li>
                            </div>
                        </div>

                        <div class="col-md nav-col">
                            <div class="container drop-down-container">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle droplink-items" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="txt-style">More</span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="float-right">
                    <div class="row right-row">
                        <div class="col-md right-col">
                            <div class="myaccount"><span class="txt-align">My account</span></div>
                        </div>
                        <div class="col-md right-col">
                            <div class="portal"><span class="txt-align">Portal</span></div>
                        </div>
                        <div class="col-md right-col">
                            <div class="signinbtn"><span class="txt-align">Sign in</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header