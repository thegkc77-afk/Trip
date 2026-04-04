import React from 'react'

function Savesmall() {
        const steps = [
        {
            id: 1,
            icon: "🧳",
            title: "Choose your trip",
            subtitle: "Pick your dream destination"
        },
        {
            id: 2,
            icon: "💰",
            title: "Set your saving goal",
            subtitle: "Example: Goa Trip ₹20,000"
        },
        {
            id: 3,
            icon: "✈️",
            title: "Save monthly",
            subtitle: "Save small amounts every month"
        },
        {
            id: 4,
            icon: "🎫",
            title: "Travel stress free",
            subtitle: "No loans. No tension."
        }
    ];



  return (
    <>
    <section className='working'>
        <div className='bg-area1'>


            <div className='start-content'>
    
                <h2>
                    Start small. Travel big.
                </h2>
    
                <div className='smallsaves-card'>
                    {steps.map((step) => (
                        <div className='card-content'>

                            <div className='card-icon'>{step.icon}</div>
                            <h3 className='card-title'>{step.title}</h3>
                            <p className='card-subtitle'>{step.subtitle}</p>

                        </div>
                    ))}
                </div>
            </div>



            {/* Bottom Section: Why Choose TripNivesh */}
             <div className="why-card">

                <h2 className="title">Why choose TripNivesh?</h2>

                <div className="content">
                {/* Left Side */}
                    <div className="left">
                      <ul>
                        <li>✔ No debt travel</li>
                        <li>✔ Simple monthly saving</li>
                        <li>✔ Transparent planning</li>
                        <li>✔ Stress-free trips</li>
                      </ul>
                    </div>

                     {/* Right Side */}
                    <div className="right">
                      <div className="trip-box">
                        <h3>Goa Trip ₹20,000</h3>
                        <p>Save ₹2,000/month</p>
                        <button>Start Saving</button>
                      </div>
                    </div>
                </div>

            </div>
            

        </div>

    </section>

    </>
  )
}

export default Savesmall