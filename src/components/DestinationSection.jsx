// import React from "react";
// import DestinationCard from "./DestinationCard";
// import "../App.css";

// // sample images (replace with your assets if available)
// import goa from "../assets/bg.jpg";
// import manali from "../assets/bg.jpg";
// import jaipur from "../assets/bg.jpg";
// import bali from "../assets/bg.jpg";

// const DestinationSection = () => {
//   const data = [
//     {
//       title: "Goa",
//       price: "20,000",
//       monthly: "2,000",
//       image: goa,
//     },
//     {
//       title: "Manali",
//       price: "30,000",
//       monthly: "3,000",
//       image: manali,
//     },
//     {
//       title: "Jaipur",
//       price: "30,000",
//       monthly: "3,000",
//       image: jaipur,
//       highlight: true,
//     },
//     {
//       title: "Bali",
//       price: "75,000",
//       monthly: "5,000",
//       image: bali,
//       highlight: true,
//     },
//   ];

//   return (
//     <section className="destination-section">
//       <h2>Choose your dream destination</h2>

//       <div className="card-grid">
//         {data.map((item, index) => (
//           <DestinationCard key={index} {...item} />
//         ))}
//       </div>

//       <button className="view-all">View All Trips →</button>
//     </section>
//   );
// };

// export default DestinationSection;