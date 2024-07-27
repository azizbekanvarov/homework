let dom = document.querySelector("body");

dom.innerHTML += `<div class="container">
                <header class="header-top">

                <div class="header-logo" >
                <img src="../assets/images/header-logo.png" alt="logo">
                <h4>Ecobazar</h4>
                </div>

                <div class= "header-search">
                <input type="text" placeholder="Search">
                <button>Search</button>
                </div>

                <div class= "header-end">
                <div class = "header-icons">
                <img src="../assets/images/Heart.png" alt="icon">
                <img src="../assets/images/Cart.png" alt="icon">
                </div>

                <div class = "shopping">
                <h5>Shopping cart:</h5>
                <p>$57.00</p>
                </div>
                </div>

                </header>
                    <nav class ="navbar">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>

                        <div>
                            <img src="./assets/images/phone-icon.png" alt="icon">
                            <p>(219) 555-0114</p>
                    </div>
                    </nav>


                <section class="hero">
                <div class="shop">
                <div><h2>Fresh & Healthy <br/>Organic Food</h2></div>
                <div>    
                        <div class = "sale">
                            <h4>Sale up to</h4>
                            <h3>30% OFF</h3>
                        </div>

                        <div>
                            <p>Free shipping on all your order.</p>
                        </div>

                    <div>
                        <button>Shop now</button>
                    </div>

                </div>
                <div class = "hero-left">
                    <div class="off">
                    <h4>Summer Sale</h4>
                    <h3>75% OFF</h3>
                    <p>Only Fruit & Vegetable</h>
                    <h5>Shop Now</h5>
                    </div>

                    <div class="best">
                    <h5>Best Deal</h5>
                    <h3>Special Products <br/> Deal of the Month</h3>
                    <h4>Shop Now</h4>
                    </div>
            </div>
    </section>
    </div>
`;
