<template>
      <!-- Navigation -->
    <header class="nav-type-1">

      <div class="top-bar hidden-sm hidden-xs">
        <div class="container">
          <div class="top-bar-line">
            <div class="row">
              <div class="top-bar-links">
                <ul class="col-sm-6 top-bar-acc">
                  <li class="top-bar-link"><a href="#">My Account</a></li>
                  <li class="top-bar-link"><a href="#">My Wishlist</a></li>
                  <li class="top-bar-link"><a href="#">Newsletter</a></li>
                  <li class="top-bar-link"><router-link to="/login">Login</router-link></li>
                  <li class="top-bar-link"><a href="contact.html">Contact</a></li>
                </ul>

                <ul class="text-right col-sm-6 top-bar-currency-language">
                  <li>
                    Currency: <a href="#">USD<i class="fa fa-angle-down"></i></a>
                    <div class="currency-dropdown">
                      <ul>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="language">
                    Language: <a href="#">ENG<i class="fa fa-angle-down"></i></a>
                    <div class="language-dropdown">
                      <ul>
                        <li><a href="#">English</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">German</a></li>
                        <li><a href="#">Chinese</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="social-icons">
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                      <a href="#"><i class="fa fa-vimeo"></i></a>
                    </div>
                  </li>
                </ul>              

              </div>
            </div>
          </div>
          
        </div>
      </div> <!-- end top bar -->
    
      <nav class="navbar navbar-static-top">
        <div class="navigation" id="sticky-nav">
          <div class="container relative">

            <div class="row">

              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <!-- Mobile cart -->
                <div class="nav-cart mobile-cart hidden-lg hidden-md">
                  <div class="nav-cart-outer">
                    <div class="nav-cart-inner">
                      <a href="#" class="nav-cart-icon">2</a>
                    </div>
                  </div>
                </div>
              </div> <!-- end navbar-header -->

              <div class="header-wrap">
                <div class="header-wrap-holder">

                  <!-- Search -->
                  <div class="nav-search hidden-sm hidden-xs">
                    <form method="get">
                      <input type="search" class="form-control" placeholder="Search">
                      <button type="submit" class="search-button">
                        <i class="icon icon_search"></i>
                      </button>
                    </form>
                  </div>

                  <!-- Logo -->
                  <div class="logo-container">
                    <div class="text-center logo-wrap">
                      <a href="index.html">
                        <img class="logo" src="../../../public/dist/img/logo_dark.png" alt="logo">
                      </a>
                    </div>
                  </div>

                  <!-- Cart -->
                  <div class="nav-cart-wrap hidden-sm hidden-xs">
                    <div class="nav-cart right">
                      <div class="nav-cart-outer">
                        <div class="nav-cart-inner">
                          <a href="#" class="nav-cart-icon">2</a>
                        </div>
                      </div>
                      <div class="nav-cart-container">
                        <div class="nav-cart-items">

                          <div class="clearfix nav-cart-item">
                            <div class="nav-cart-img">
                              <a href="#">
                                <img src="img/shop/cart_small_1.jpg" alt="">
                              </a>
                            </div>
                            <div class="nav-cart-title">
                              <a href="#">
                                Ladies Bag
                              </a>
                              <div class="nav-cart-price">
                                <span>1 x</span>
                                <span>1250.00</span>
                              </div>
                            </div>
                            <div class="nav-cart-remove">
                              <a href="#"><i class="icon icon_close"></i></a>
                            </div>
                          </div>

                          <div class="clearfix nav-cart-item">
                            <div class="nav-cart-img">
                              <a href="#">
                                <img src="img/shop/cart_small_2.jpg" alt="">
                              </a>
                            </div>
                            <div class="nav-cart-title">
                              <a href="#">
                                Sequin Suit longer title
                              </a>
                              <div class="nav-cart-price">
                                <span>1 x</span>
                                <span>1250.00</span>
                              </div>
                            </div>
                            <div class="nav-cart-remove">
                              <a href="#"><i class="icon icon_close"></i></a>
                            </div>
                          </div>

                        </div> <!-- end cart items -->

                        <div class="nav-cart-summary">
                          <span>Cart Subtotal</span>
                          <span class="total-price">$1799.00</span>
                        </div>

                        <div class="mt-20 nav-cart-actions">
                          <a href="shop-cart.html" class="btn btn-md btn-dark"><span>View Cart</span></a>
                          <a href="shop-checkout.html" class="mt-10 btn btn-md btn-color"><span>Proceed to Checkout</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="menu-cart-amount right">
                      <span>
                        Cart /
                        <a href="#"> $1299.50</a>
                      </span>
                    </div>
                  </div> <!-- end cart -->

                </div>
              </div> <!-- end header wrap -->

              <div class="nav-wrap">
                <div class="collapse navbar-collapse" id="navbar-collapse">
                  
                  <ul class="nav navbar-nav">

                    <li id="mobile-search" class="hidden-lg hidden-md">
                      <form method="get" class="relative mobile-search">
                        <input type="search" class="form-control" placeholder="Search...">
                        <button type="submit" class="search-button">
                          <i class="icon icon_search"></i>
                        </button>
                      </form>
                    </li>

                    <li>
                      <a href="/">Home</a>
                    </li>

                     <li>
                      <router-link to="/shop">Shop</router-link>
                    </li>

                    <li class="dropdown">
                      <a href="#">Pages</a>
                      <i class="fa fa-angle-down dropdown-toggle" data-toggle="dropdown"></i>
                      <ul class="dropdown-menu">
                        <li><router-link to="/about-us">About Us</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                      </ul>
                    </li>

                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Categories</a>
                      <ul class="dropdown-menu megamenu">
                        <li>
                          <div class="megamenu-wrap">
                            <div class="row">

                              <div class="col-md-3 megamenu-item">
                                <h6>For Man</h6>
                                <ul class="menu-list">
                                  <li><a href="#">Shirts</a></li>
                                  <li><a href="#">Jeans</a></li>
                                  <li><a href="#">Accessories</a></li>
                                  <li><a href="#">Shoes</a></li>
                                </ul>
                              </div>

                              <div class="col-md-3 megamenu-item">
                                <h6>For Woman</h6>
                                <ul class="menu-list">
                                  <li><a href="#">Dresses</a></li>
                                  <li><a href="#">Coats</a></li>
                                  <li><a href="#">Accessories</a></li>
                                  <li><a href="#">Sandals</a></li>
                                </ul>
                              </div>

                              <div class="col-md-3 megamenu-item">
                                <h6>Accessories</h6>
                                <ul class="menu-list">
                                  <li><a href="#">Wallets</a></li>
                                  <li><a href="#">Watches</a></li>
                                  <li><a href="#">Belts</a></li>
                                  <li><a href="#">Scarfs</a></li>
                                </ul>
                              </div>

                              <div class="col-md-3 megamenu-item">
                                <h6>Bags</h6>
                                <ul class="menu-list">
                                  <li><a href="#">Leather</a></li>
                                  <li><a href="#">Sports</a></li>
                                  <li><a href="#">Street Style</a></li>
                                  <li><a href="#">Creative</a></li>
                                </ul>
                              </div>

                            </div>
                          </div>
                        </li>
                      </ul>
                    </li> <!-- end categories -->

                    <li>
                      <router-link to="/blog">Blog</router-link>
                    </li>

                    <li class="mobile-links">
                      <ul>
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">My Wishlist</a>
                        </li>
                      </ul>
                    </li>
        
                  </ul> <!-- end menu -->
                </div> <!-- end collapse -->
              </div> <!-- end col -->
          
            </div> <!-- end row -->
          </div> <!-- end container -->
        </div> <!-- end navigation -->
      </nav> <!-- end navbar -->
    </header> <!-- end navigation -->

</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
