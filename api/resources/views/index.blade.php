<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Frumie</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="{{ asset('/principal/favicon.png') }}" rel="icon">
  <link href="{{ asset('/principal/apple-touch-icon.png') }}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700|Roboto:300,400,700&display=swap"
    rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="{{ asset('/principal/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{{ asset('/principal/vendor/icofont/icofont.min.css')}}" rel="stylesheet">
  <link href="{{ asset('/principal/vendor/line-awesome/css/line-awesome.min.css')}}" rel="stylesheet">
  <link href="{{ asset('/principal/vendor/aos/aos.css')}}" rel="stylesheet">
  <link href="{{ asset('/principal/vendor/owlcarousel/assets/owl.carousel.min.css')}}" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="{{ asset('/principal/css/style.css')}}" rel="stylesheet">

</head>

<body>

  <div class="site-wrap">

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <header class="site-navbar js-sticky-header site-navbar-target" role="banner">

      <div class="container">
        <div class="row align-items-center">

          <div class="col-6 col-lg-2">
            <h1 class="mb-0 site-logo"><a href="index.html" class="mb-0">Frumie</a></h1>
          </div>

          <div class="col-12 col-md-10 d-none d-lg-block">
            <nav class="site-navigation position-relative text-right" role="navigation">

              <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li class="active"><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="features.html" class="nav-link">Features</a></li>
                <li><a href="pricing.html" class="nav-link">Pricing</a></li>

                <li class="has-children">
                  <a href="blog.html" class="nav-link">Blog</a>
                  <ul class="dropdown">
                    <li><a href="blog.html" class="nav-link">Blog</a></li>
                    <li><a href="blog-single.html" class="nav-link">Blog Sigle</a></li>
                  </ul>
                </li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>


          <div class="col-6 d-inline-block d-lg-none ml-md-0 py-3" style="position: relative; top: 3px;">

            <a href="#" class="burger site-menu-toggle js-menu-toggle" data-toggle="collapse"
              data-target="#main-navbar">
              <span></span>
            </a>
          </div>

        </div>
      </div>

    </header>


    <main id="main">
      <div class="hero-section">
        <div class="wave">

          <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
                <path
                  d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                  id="Path"></path>
              </g>
            </g>
          </svg>

        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 hero-text-image">
              <div class="row">
                <div class="col-lg-7 text-center text-lg-left">
                  <h1 data-aos="fade-right">Frumie</h1>
                  <p class="mb-5" data-aos="fade-right" data-aos-delay="100">
                    Consigue casa de manera rápida.</p>
     
                        <a href="#" class="btn btn-outline-white fade-right" data-aos-delay="200" data-aos-offset="-500" >
                        <span class="icofont-brand-apple mr-3" ></span>App store</a> 
                        <a href="#"class="btn btn-outline-white fade-right" data-aos-delay="200" data-aos-offset="-500">
                        <span class="icofont-ui-play mr-3"></span>Google play</a></p>
                </div>
                <div class="col-lg-5 iphone-wrap">
                  <img src="{{ asset('/principal/img/primera.jpg') }}" alt="Image" class="phone-1" data-aos="fade-right">
                  <img src="{{ asset('/principal/img/segunda.jpg') }}" alt="Image" class="phone-2" data-aos="fade-right" data-aos-delay="200">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="site-section">
        <div class="container">

          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-5" data-aos="fade-up">
              <h2 class="section-heading">Ahorra tiempo y dinero con Frumie</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <span class="icon la la-users"></span>
                </div>
                <h3 class="mb-3">Administra tus casas</h3>
                <p>Frumie es la aplicacion que necesitas para cubrir todas tus necesidades como arrendador y arrendatario.</p>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <span class="icon la la-toggle-off"></span>
                </div>
                <h3 class="mb-3">Encuentra tu casa</h3>
                <p>Encuentra tu casa cerca de tu escuela, colonia etc. ademas de todos los servicios esenciales para tu vida diaria.</p>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div class="feature-1 text-center">
                <div class="wrap-icon icon-1">
                  <span class="icon la la-umbrella"></span>
                </div>
                <h3 class="mb-3">Encuentra Roomie</h3>
                <p>Frumie te ayuda a encontrar los roomies de acuerdo a tu estilo de vida.</p>
              </div>
            </div>
          </div>

        </div>
      </div> <!-- .site-section -->

      <div class="site-section">
        <div class="container">
          <div class="row justify-content-center text-center mb-5" data-aos="fade">
            <div class="col-md-6 mb-5">
              <img src="{{ asset('/principal/img/logof.png') }}" alt="Image" class="img-fluid">
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="step">
                <span class="number">01</span>
                <h3>Administra tus servicios</h3>
                <p>Frumie es la solucion rapida y confiable a todos tus problemas como foraneo.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="step">
                <span class="number">02</span>
                <h3>Servicio de planchado</h3>
                <p>si no conoces la ciudad, frumie encuentra la casa ideal por ti y para ti.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="step">
                <span class="number">03</span>
                <h3>Servicio de Taxi</h3>
                <p>no pierdas mas tu tiempo ni dinero viajando para buscar casa, con frumie encuentrala desde la comodidad de tu hogar</p>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- .site-section -->



      <div class="site-section pb-0">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4 mr-auto">
              <h2 class="mb-4">Servicio de lavanderia</h2>
              <p class="mb-4">Frumie hace tu vida mas sencilla.</p>
              <p><a href="#">Download Now</a></p>
            </div>
            <div class="col-md-6" data-aos="fade-left">
              <img src="{{ asset('/principal/img/lavanderia.jpg') }}" alt="Image" class="img-fluid">
            </div>
          </div>
        </div>
      </div> <!-- .site-section -->

      <div class="site-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4 ml-auto order-2">
              <h2 class="mb-4">Servicio de comida rapida</h2>
              <p class="mb-4">Casas y arrendadores 100% confiables.</p>
              <p><a href="#">Download Now</a></p>
            </div>
            <div class="col-md-6" data-aos="fade-right">
              <img src="{{ asset('/principal/img/comida.png') }}" alt="Image" class="img-fluid">
            </div>
          </div>
        </div>
      </div> <!-- .site-section -->


      <div class="site-section border-top border-bottom">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-4">
              <h2 class="section-heading">Review From Our Users</h2>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-md-7">
              <div class="owl-carousel testimonial-carousel">
                <div class="review text-center">
                  <p class="stars">
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star muted"></span>
                  </p>
                  <h3>Servicio de despensa a domicilio</h3>
                  <blockquote>
                    <p>siente confianza, frumie te brinda todos los servicios y confianza que tu necesitas.</p>
                  </blockquote>



                  <p class="review-user">
                    <img src="{{ asset('/principal/img/entrega.jpg') }}" alt="Image" class="img-fluid rounded-circle mb-3">
                    <span class="d-block">
                      <span class="text-black">Las mejores tiendas</span>, &mdash; en un click
                    </span>
                  </p>

                </div>

                <div class="review text-center">
                  <p class="stars">
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star muted"></span>
                  </p>
                  <h3>Servicio de costura</h3>
                  <blockquote>
                    <p>Todos los servicios a la vulta de la esquina.</p>
                  </blockquote>



                  <p class="review-user">
                    <img src="{{ asset('/principal/img/costura.jpg') }}" alt="Image" class="img-fluid rounded-circle mb-3">
                    <span class="d-block">
                      <span class="text-black">los mejores costureros</span>, &mdash; solo aqui
                    </span>
                  </p>

                </div>


                <div class="review text-center">
                  <p class="stars">
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star"></span>
                    <span class="icofont-star muted"></span>
                  </p>
                  <h3>Tiendas cerca de ti</h3>
                  <blockquote>
                    <p>Aqui encuentras todo lo que necesitas.</p>
                  </blockquote>



                  <p class="review-user">
                    <img src="{{ asset('/principal/img/tienda.jpg') }}" alt="Image" class="img-fluid rounded-circle mb-3">
                    <span class="d-block">
                      <span class="text-black">los mejores productos</span>, &mdash;  los mejores precios
                    </span>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="site-section cta-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mr-auto text-center text-md-left mb-5 mb-md-0">
              <h2>Publicar y encontrar casas nunca fue tan sencillo</h2>
            </div>
            <div class="col-md-5 text-center text-md-right">
              <p><a href="#" class="btn"><span class="icofont-brand-apple mr-3"></span>App store</a> <a href="#"
                  class="btn"><span class="icofont-ui-play mr-3"></span>Google play</a></p>
            </div>
          </div>
        </div>
      </div>


    </main>
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h3>Encuentra frumie en todas las plataformas</h3>
            <p>Descargala gratis en appStore y play store y disfruta de todos sus beneficios suscribiendote a frumie.</p>
            <p class="social">
              <a href="#"><span class="icofont-twitter"></span></a>
              <a href="#"><span class="icofont-facebook"></span></a>
              <a href="#"><span class="icofont-dribbble"></span></a>
              <a href="#"><span class="icofont-behance"></span></a>
            </p>
          </div>
          <div class="col-md-7 ml-auto">
            <div class="row site-section pt-0">
              <div class="col-md-4 mb-4 mb-md-0">
                <h3>Navigation</h3>
                <ul class="list-unstyled">
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
                <h3>Services</h3>
                <ul class="list-unstyled">
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Collaboration</a></li>
                  <li><a href="#">Todos</a></li>
                  <li><a href="#">Events</a></li>
                </ul>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
                <h3>Downloads</h3>
                <ul class="list-unstyled">
                  <li><a href="#">Get from the App Store</a></li>
                  <li><a href="#">Get from the Play Store</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center text-center">
          <div class="col-md-7">
            <p class="copyright">&copy; Copyright SoftLand. All Rights Reserved</p>
            <div class="credits">
              <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=SoftLand
              -->
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  </div> <!-- .site-wrap -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="{{ asset('/principal/vendor/jquery/jquery.min.js')}}"></script>
  <script src="{{ asset('/principal/vendor/jquery/jquery-migrate.min.js')}}"></script>
  <script src="{{ asset('/principal/vendor/bootstrap/js/bootstrap.min.js')}}"></script>
  <script src="{{ asset('/principal/vendor/easing/easing.min.js')}}"></script>
  <script src="{{ asset('/principal/vendor/php-email-form/validate.js')}}"></script>
  <script src="{{ asset('/principal/vendor/sticky/sticky.js')}}"></script>
  <script src="{{ asset('/principal/vendor/aos/aos.js')}}"></script>
  <script src="{{ asset('/principal/vendor/owlcarousel/owl.carousel.min.js')}}"></script>

  <!-- Template Main JS File -->
  <script src="{{asset('/principal/js/main.js')}}"></script>

</body>

</html>
