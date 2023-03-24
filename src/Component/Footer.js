import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='fsec1'>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-3'>
               <div className='fimg'>
                  <img src="../footer/img1.png" className='w-100'/>
               </div>
            </div>
            <div className='col-lg-9'>
               <div className='ftxt'>
                 <h6 className='ftrp'>Based in Utah, USA, Wanderland is a blog by Markus Thompson. His posts
                  explore outdoor experiences through photos and diaries with tips & tricks.</h6>
               </div>
            </div>
            <div className='col-lg-3'>
                <div className='txt1'>
                   <h1 className='fh1'>ABOUT THE BLOG</h1>
                   <h6 className='fp1'>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod mas.</h6>
                </div>

            </div>
            <div className='col-lg-3 '>
                <div className='txt1'>
                   <h1 className='fh1'>SUBSCRIBE TO NEWSLETTER</h1>
                   <form >
                    <input text="" placeholder='Your name...' className='np1 ps-4'/>
                    <input text="" placeholder="Your e-mail..." className='np1 ps-4'/>
                    <button className='npbtn pt-3'>SUBSCRIB <i class="bi bi-arrow-right-short" ></i></button>
                   </form>
                </div>

            </div>
            <div className='col-lg-3'>
                <div className='txt1'>
                   <h1 className='fh1'>RECENT NEWS</h1>
                   <h6 className='fn'><i class="bi bi-newspaper"></i> October 2, <span className='fp'>2019 Trip to Iceland</span></h6>
                   <h6 className='fn'><i class="bi bi-newspaper"></i> October 2, <span className='fp'>2019 On the Shores of a Vanishing Island in India</span> </h6>
                   <h6 className='fn'><i class="bi bi-newspaper"></i> October 2,  <span className='fp'>2019 Visiting Rabat</span> </h6>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='txt1'>
                   <h1 className='fh1'>RECENT NEWS</h1>
                   <div className='d-flex flex-column gap-2'>
                   <div className='imgl d-flex gap-2'>
                    <img src='../sec4/img6.jpg' className='w-100'/>
                    <img src='../sec4/img6.jpg' className='w-100'/>
                   </div>
                   
                   </div>
                </div>
            </div>
        </div>
     </div>
    </section>
      <section className='fsec2 '>
       <div className='container'>
        <div className='row'>
            <div className='col-lg-12 d-flex justify-content-between align-items pt-4'>
             <h6 className='xxxx'>Socials <i class="bi bi-facebook"></i><i class="bi bi-twitter"></i><i class="bi bi-youtube"></i><i class="bi bi-instagram"></i></h6>
             <h6 className=''>© 2020 Qode Interactive, All Rights Reserved</h6>
            </div>
        </div>
       </div>
      </section>
    </>
  )
}

export default Footer
