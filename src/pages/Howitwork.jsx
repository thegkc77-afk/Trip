import React from "react";
import { FaGithub } from 'react-icons/fa';


const steps = [
  {
    number: "1",
    icon: "◎",
    title: "Set Your Travel Goal",
    text: "Pick a destination and estimate your travel costs. We'll help you break it down into achievable milestones.",
    iconClass: "purple",
  },
  {
    number: "2",
    icon: "✉",
    title: "Save Monthly",
    text: "Automate your savings with small, stress-free monthly deposits that fit perfectly into your daily budget.",
    iconClass: "green",
  },
  {
    number: "3",
    icon: "↗",
    title: "Track Progress",
    text: "Watch your dream trip get closer every month. Visualize your progress with our beautifully designed tracker.",
    iconClass: "orange",
  },
  {
    number: "4",
    icon: "✈",
    title: "Travel Stress-Free",
    text: "Pack your bags and fly knowing that everything is 100% paid for. No debt, no credit cards, zero worries.",
    iconClass: "blue",
  },
];

function HowItWork() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <span className="how-it-works__eyebrow">HOW IT WORKS</span>

        <h2 className="how-it-works__title">
          Your dream vacation in 4
          <br />
          simple steps
        </h2>

        <p className="how-it-works__subtitle">
          We make it incredibly easy to go from daydreaming to packing your bags
          without ever touching a credit card.
        </p>

        <div className="how-it-works__grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-card__number">{step.number}</span>

              <div className={`step-card__icon ${step.iconClass}`}>
                <span>{step.icon}</span>
              </div>

              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWork