import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Setgoal from '../assets/Setgoal.png'
import Greenpig from '../assets/Greenpig.png'


function HowItWork() {
  return (
    <section className="how-section">

      <p className="subtitle">HOW IT WORKS</p>

      <h1 className="title">
        Your dream vacation in 4 simple steps
      </h1>

      <p className="desc">
        We make it incredibly easy to go from daydreaming to packing your bags without ever touching a credit card.
      </p>

      <div className="card-container">

        <Card
          number="1"
          icon = {<img src={Setgoal} alt='setgoal' />}
          title="Set Your Travel Goal"
          description="Pick a destination and estimate your travel costs. We'll help you break it down into achievable milestones."
        />

        <Card
          number="2"
          icon = {<img src={Greenpig} alt="pig money photos" className="w-[30px] h-[50px]"/>}
          title="Save Monthly"
          description="Automate your savings with small, stress-free monthly deposits that fit perfectly into your daily budget."
        />

        <Card
          number="3"
          title="Track Progress"
          description="Watch your dream trip get closer every month. Visualize your progress with our beautifully designed tracker."
        />

        <Card
          number="4"
          title="Travel Stress-Free"
          description="Pack your bags and fly knowing that everything is 100% paid for. No debt, no credit cards, zero worries."
        />

      </div>

      <div className="btn-container">
        <Button btn="Get Started Today" />
      </div>

      
    </section>
  );
}

export default HowItWork;