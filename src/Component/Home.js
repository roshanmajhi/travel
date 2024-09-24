import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import sec4DAta from '../Data/sec4DAta'
import Innerpage from './Innerpage'
const Home = () => {
  return (
    <>
    <section className='banner'>
      <div className='bnrimg'>
      <img src='../banner/img1.jpg' className='w-100 m-auto bnrimg'/>
      <div className='bnrab'><h1 className='bnrh mb-4'>CAMPING GUIDES FOR YOUR NEXT ADVENTURE</h1>
            <button className='bnri py-3 px-3'>READ MORE <i class="bi bi-arrow-right"></i></button>
      </div>
      </div>
      </section>
    <section classname="sec2">
  <nav className=" navbar navbar-expand-lg navbar-light nav ">
    <div className="container">
      <Link className="navbar-brand" to="/"><div className='logo d-flex'><img src={require('../logo.jpg')} className="w-100"/><h3 className='nvh'>DESTINATION</h3></div></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse pf" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto ms-4 mb-lg-0  ">
          <li className="nav-item ms-5 ps-5">
            <Link className="nav-link active " aria-current="page" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">FACEBOOK</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">DESTINATIONS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">BLOG</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">LANDING</Link>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn" type="submit">SEARCH</button>
          <div className='sec1i '><i class="bi bi-search"></i></div>
        </form>
      </div>
    </div>
  </nav>
  <div className='wndr'><img src='../sec1/img1.png' className='w-100'/></div>
</section>
     <section className='sec3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='sec3txt'>
              <h1 className='sec3h pb-2'>EXPLORING THE SUBURB SINCE 2019</h1>
              <p className='sec3p pb-2'>EXPLORING THE SUBURB SINCE 2019 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore labore et dolore.</p>
              <button className='bnri bg-success text-light border-0 py-3 px-3'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='sec3img'>
              <img src='https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h5-img-01.jpg' className='w-100 img-fluid imgsec3' />
            </div>
          </div>

        </div>

      </div>
    </section>
   <section className=' sec4 py-5'>
    <div className=' container'>
      <h6 className='sec4h6 text-center py-3'>Lorem ipsum dolor</h6>
      <h1 className='sec4h1 text-center'>FEATURED BLOG <span className='text-success'>POSTS</span></h1>
      <div className='d-flex py-5'>
        <div className='row'>
         {sec4DAta.map((a)=>(
           <div className='col-lg-4'>
         <div className='sec4img'>
         <img src={a.image} className='w-100 imgsec4'/>
         <h6 className='pt-3'><i class="bi bi-pencil-fill"></i>{a.title}</h6>
         <h1 className='sec4h12'>{a.description}</h1>
       </div>
       </div>
      ))
      }
        </div>
      </div>
      </div>
     
   </section>
   <section className='sec5 '>
    <div className='container d-flex justify-content-between align-items-center'>
   <div><Link to="/Innerpage" ><i class="bi bi-truck"></i>
   <p className='sec5p'>1 Destination</p>
   <h1 className='sec5h'>ADVENTURE</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-geo-alt-fill"></i>
   <p className='sec5p'>5 Destination</p>
   <h1 className='sec5h'>BEACHES</h1></Link></div>
  <div><Link to="/Innerpage" ><i class="bi bi-fire"></i>
   <p className='sec5p'>3 Destination</p>
   <h1 className='sec5h'>CAMPING</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-house-door"></i>
   <p className='sec5p'>1 Destination</p>
   <h1 className='sec5h'>FRIENDLY</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-bag-fill"></i>
   <p className='sec5p'>6 Destination</p>
   <h1 className='sec5h'>LOW BUDGETS</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-signpost-2"></i>
   <p className='sec5p'>8 Destination</p>
   <h1 className='sec5h'>POPULAR</h1></Link></div>
   </div>
   </section>
   <section className='sec6 my-5 py-5'>
    <div className='container'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.727221991711!2d81.13948041744385!3d29.3782752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a3c7039e06e43d%3A0x2bf2b6c6e596a807!2sKhaptad%20National%20Park!5e0!3m2!1sen!2snp!4v1678087380184!5m2!1sen!2snp" width="1120" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   </section>
   <section className='sec7'>
   <h6 className='sec4h6 text-center py-3'>Lorem ipsum dolor</h6>
      <h1 className='sec4h1 text-center pb-5'>FEATURED BLOG <span className='text-success'>POSTS</span></h1>
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
   <section className='sec8'>
    <div>
      <img src='../sec8/img1.png' className='w-100'/>
    </div>
   </section>
    </>
  )
}

export default Home

