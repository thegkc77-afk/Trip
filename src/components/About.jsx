import Hero1 from '../Images/Hero1.png'

function About(){
  return(
    <>

       <section
          className='relative min-h-screen w-full items-center bg-cover bg-center pt-20 overflow-hidden flex'
          style={{
            backgroundImage: `url(${Hero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Playfair Display'
                }}
        >
    
    
    <div className='about'>
    <h1>About TripNivesh</h1>
    <p>Helping you travel dept-free and achive your</p>
    <p>Dream vaction.</p>



   <div className='about-img'>

   </div>
   
   
   </div>

   <div className='story'>
   

    <div className='story-img'>
      


    </div>
   </div>

   </section>
   </>
  )
}
export default About