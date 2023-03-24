import React from 'react'
import { Link } from 'react-router-dom'
import inner1Data from '../Data/inner1Data'
import innersec5Data from '../Data/innersec5Data'
import '../Scss/innner.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import inner5Data from '../Data/inner5Data'
import Carousel from 'react-bootstrap/Carousel';
const Innerpage = () => {
  return (
    <>
      <section className='sec1'>
        <div className='top'>
           <img src='../inner/img3.jpg' alt='' className='w-100 img-fluid bnr'/ >
      <div className='container d-flex justify-content-between lr'>
         <div className='left '>
           <p className='pl d-flex gap-2'><i class="bi bi-telephone"></i>+123 45677 789 <i class="bi bi-envelope"></i> wanderland@qodeinteractive.com</p>
         </div>
         <div className='right'>
            <p className='pr d-flex gap-2'>Socials <i class="bi bi-instagram"></i><i class="bi bi-twitter"></i><i class="bi bi-facebook"></i><i class="bi bi-youtube"></i></p>
         </div>
      </div>
      <nav class="container navbar navbar-expand-lg nb ">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
             <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">PAGES</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">DESTINATIONS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">
              <img src='../inner/logo.png' alt='' className='w-100 logo'/>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">BLOG</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">SHOP</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">LANDING</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='txt1 text-center'>
    <h1 className='h1 pt-3'>WHOOPS… PAGE NOT FOUND</h1>
    <p className='p1 px-5'>Oops! The page you are looking for does not <br/>exist. It might have been moved or deleted.
</p>
    <div><input type="text" placeholder='Enter Keywords..'className='input'/> <button className='btn1'>SEARCH<i class="bi bi-arrow-right-short fs-5"></i></button></div>
</div>
      </div>
      </section>
     <section className='sec2 '>
        <div className='container'>
            <div className='row'>
                    {inner1Data.map((a)=>(
                         <div className='col-lg-3'>
                      <div className='sec2bx'>
                       <img src={a.Image} alt=""/>
                      </div>
                      </div>
                    ))}
            </div>
        </div>
     </section>
     <section className='sec3'>
   <h6 className='sec4h6 text-center py-3'>Lorem ipsum dolor</h6>
      <h1 className='sec4h1 text-center pb-5'>TRAVEL ESSENTIALS  <span className='text-success'>TIPS</span></h1>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6 py-5'>
            <div className='sec7img'>
              <img src='../sec7/img1.jpg' className='w-100 img-fluid imgsec7' />
            </div>
          </div>
          <div className='col-lg-6 py-5'>
            <div className='sec7txt'>
              <h6> <i class="bi bi-calendar2-minus"></i>  October 8, 2019  <i class="bi bi-pencil"></i> by Alisa Michaels</h6>
              <h1 className='sec7h'>MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY</h1>
              <p className='sec7p '>EXPLORING THE SUBURB SINCE 2019 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore labore et dolore....</p>
              <button className='btn7 border-0'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='sec7txt'>
              <h6><i class="bi bi-calendar2-minus"></i>  October 8, 2019 <i class="bi bi-pencil"></i> by Alisa Michaels</h6>
              <h1 className='sec7h'>TOP HIKING TRAILS IN THE PERUVIAN AMAZON RAIN FOREST</h1>
              <p className='sec7p '>EXPLORING THE SUBURB SINCE 2019 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore labore et dolore...</p>
              <button className='btn7 border-0'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='sec7img'>
              <img src='../sec7/img2.jpg' className='w-100 img-fluid imgsec7' />
            </div>
          </div>
        </div>

      </div>
    </section>
    <section className='sec4 py-4'>
    <div>
      <img src='../sec8/img1.png' className='w-100'/>
    </div>
   </section>
   <section className='sec5 mb-5'>
   <h6 className='sec4h6 text-center py-3'>Lorem ipsum dolor</h6>
      <h1 className='sec4h1 text-center pb-5 text-dark'>FEATURED BLOG  <span className='text-success'>POSTS</span></h1>
      <div className='container'>
        <div className='row'>
        <OwlCarousel className='owl-theme' loop margin={10} nav items={3}>
          {innersec5Data.map((a)=>(
             <div className='py-5'>
              <img src={a.Image} alt='' className='w-100'/>
              <p className='innersec5p pt-2'><i class="bi bi-calendar2-check"></i> October 10, 2019 <i class="bi bi-pencil"></i>{a.title}</p>
              <h1 className='innersec5h'>{a.description}</h1>

             </div>
          ))}
       </OwlCarousel>
      </div>
      </div>
    </section>
    <section className='sec6 mb-5 pb-5'>
   <h6 className='sec4h6 text-center py-4'>Lorem ipsum dolor</h6>
      <h1 className='sec4h1 text-center pb-5 text-dark'>FEATURED BLOG  <span className='text-success'>POSTS</span></h1>
      <div className='container'>
        <div className='row'>
          {inner5Data.map((a)=>(
           <div className='col-lg-3'>
           <div className='innersec5bx'>
             <img src={a.Image} alt='' className='w-100'/>
             <p className='innersec6p text-center pt-5'>{a.title}</p>
             <h2 className='innersec6h text-center'>{a.description}</h2>
             <label className='d-flex gap-2 mx-5 px-3 text-warning'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></label>
           </div>
         </div>
          ))}
        
      </div>
      </div>
    </section>
    <section className='sec7 pb-5'>
      <div className='container'>
     <div className='innersec7img'>
      <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-fluid img1"
          src="../innersec7/img1.jpg"
          alt="First slide" 
        />
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-fluid img1 "
          src="../innersec7/img2.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img1"
          src="../innersec7/img3.jpeg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </div>
      </div>
    </section>
    <section className='innersec8 pb-5 mb-5'>
    <div className='container d-flex justify-content-between align-items-center'>
   <div><i class="bi bi-truck"></i>
   <p className='sec5p'>1 Destination</p>
   <h1 className='sec5h'>ADVENTURE</h1></div>
   <div><i class="bi bi-geo-alt-fill"></i>
   <p className='sec5p'>5 Destination</p>
   <h1 className='sec5h'>BEACHES</h1></div>
  <div><i class="bi bi-fire"></i>
   <p className='sec5p'>3 Destination</p>
   <h1 className='sec5h'>CAMPING</h1></div>
   <div><i class="bi bi-house-door"></i>
   <p className='sec5p'>1 Destination</p>
   <h1 className='sec5h'>FRIENDLY</h1></div>
   <div><i class="bi bi-bag-fill"></i>
   <p className='sec5p'>6 Destination</p>
   <h1 className='sec5h'>LOW BUDGETS</h1></div>
   <div><i class="bi bi-signpost-2"></i>
   <p className='sec5p'>8 Destination</p>
   <h1 className='sec5h'>POPULAR</h1></div>
   </div>
   </section>
   <section className='innersec9 pb-5'>
    <div className='container'>
      <div className='row '>
         <div className='col-lg-4 mb-5'>
             <div className='innersec9bx'>
                <img src='../innersecc9/img1.jpg'alt='' className='w-100'/>
                <p className='innersec9p pt-4'><i class="bi bi-calendar2-check"></i> October 10, 2019 <i class="bi bi-pencil"></i> by Alisa Michaels</p>
                <h1 className='innersec9h'>ESSENTIAL SKIING TIPS FOR BEGINNERS & NOVICES</h1>
             </div>
         </div>
         <div className='col-lg-4 mb-5'>
             <div className='innersec9bx'>
                <img src='../innersecc9/img2.jpg'alt='' className='w-100'/>
                <p className='innersec9p pt-4 '> <i class="bi bi-calendar2-check"></i> October 10, 2019 <i class="bi bi-pencil"></i> by Alisa Michaels</p>
                <h1 className='innersec9h'>ESSENTIAL SKIING TIPS FOR BEGINNERS & NOVICES</h1>
             </div>
         </div>
         <div className='col-lg-4 mb-5'>
             <div className='innersec9bx'>
                <h1 className='inrsec9h2'>Lorem ipsum dolor sit amet</h1>
                <h1 className='inrsec9h1'>HOW TO FIND YOUR DIGITAL RESORT</h1>
                <p className='inrsec9p'>Lorem ipsum dolor sit amet, conse ctetur nus adipisic ing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation mas ullamco laboris nisi.ut aliquip ex ea commodo consequat. Duis.</p>
                <div className='d-flex gap-4'>
                <p className='f'>f</p>
                <i class="bi bi-twitter t"></i>
                <p className='f'>t</p>
                <p className='s'>Share</p>
                
                </div>
             </div>
         </div>
         <div className='col-lg-4 mb-5'>
             <div className='innersec9bx'>
                <img src='../innersecc9/img3.jpg'alt='' className='w-100'/>
                <p className='innersec9p pt-4'> <i class="bi bi-calendar2-check"></i> October 10, 2019 <i class="bi bi-pencil"></i> by Alisa Michaels</p>
                <h1 className='innersec9h'>ESSENTIAL SKIING TIPS FOR BEGINNERS & NOVICES</h1>
             </div>
         </div>
         <div className='col-lg-4 mb-5'>
             <div className='innersec9bx'>
                <img src='../innersecc9/img4.jpg'alt='' className='w-100'/>
                <p className='innersec9p pt-4'> <i class="bi bi-calendar2-check"></i> October 10, 2019 <i class="bi bi-pencil"></i> by Alisa Michaels</p>
                <h1 className='innersec9h'>ESSENTIAL SKIING TIPS FOR BEGINNERS & NOVICES</h1>
             </div>
         </div>
      </div>

    </div>

   </section>
    </>
  )
}

export default Innerpage

