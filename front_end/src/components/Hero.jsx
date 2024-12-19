


const Hero = () => {
    return(
        <div className="hero sm:flex sm:items-center sm:justify-between sm:px-[100px] " sm:style={{height:"calc(100vh - 100px)"}}>
       <div className="left sm:w-[50%]">
  <h3 className=" text-[30px] mt-5 text-center sm:text-[60px]" style={{lineHeight:1}}>Unlock the Secrets to  <span className="sp">Masterful Programming</span>Here</h3>
  <div className="flex items-center gap-[15px] mt-16 pl-14">
   <button className="btnnormal">Get Started</button>
   <button className="btn btnwhite">Learn More</button>
  </div>
  
       </div>
       <div className="right sm:w-[50%]">
       <div className="w-full">
    <img src="/images/hero.gif"  alt="heroImage" />
  </div>
       </div>
        </div>
    )
}

export default Hero