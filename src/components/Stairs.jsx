// import React, { useState, useEffect } from "react";
// import "../styles/Stairs.css";
// import { IoWomanSharp } from "react-icons/io5";
// import "animate.css";
// const Stairs = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [points, setPoints] = useState(0);
//   const [lastStepCompleted, setLastStepCompleted] = useState(false);
//   const [lastStepPointsAdded, setLastStepPointsAdded] = useState(false);
//   //   const [halfcompleted, sethalfcompleted] = useState(false);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentStep < 7) {
//         setPoints((prevPoints) => prevPoints + 10);
//         setCurrentStep((prevStep) => prevStep + 1);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [currentStep]);

//   useEffect(() => {
//     if (currentStep === 7 && !lastStepPointsAdded) {
//       setTimeout(() => {
//         setPoints((prevPoints) => prevPoints + 10);
//         setLastStepCompleted(true);
//         setLastStepPointsAdded(true);
//       }, 1000);
//     }
//   }, [currentStep, lastStepPointsAdded]);

//   return (
//     <div>
//       <div className="points">Points: {points}</div>
//       <div className="stairs-container">
//         <div
//           style={{ position: "relative" }}
//           className={`step step-1 ${currentStep > 1 ? "passed" : ""} ${
//             currentStep === 1 ? "character" : ""
//           }`}
//         >
//           {currentStep === 1 ? (
//             <div style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//           {currentStep === 2 ? (
//             <div
//               className=" animate__animated animate__fadeOutTopRight"
//               style={{ position: "absolute", bottom: "0px", left: "60px" }}
//             >
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         <div
//           className={`step step-2 ${currentStep > 2 ? "passed" : ""} ${
//             currentStep === 2 ? "character" : ""
//           }`}
//         >
//           {currentStep === 2 ? (
//             <div
//               className=" animate__animated animate__fadeInTopLeft"
//               style={{ position: "absolute", bottom: "0px", left: "60px" }}
//             >
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//             {currentStep === 3 ? (
//             <div
//               className=" animate__animated animate__fadeOutTopRight"
//               style={{ position: "absolute", bottom: "0px", left: "60px" }}
//             >
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
          
//         </div>
//         <div
//           className={`step step-3 ${currentStep > 3 ? "passed" : ""} ${
//             currentStep === 3 ? "character" : ""
//           }`}
//         >
//           {currentStep === 3 ? (
//             <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//           {currentStep === 4 ? (
//             <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         <div
//           className={`step step-4 ${currentStep > 4 ? "passed" : ""} ${
//             currentStep === 4 ? "character" : ""
//           }`}
//         >
//            {currentStep === 4 ? (
//             <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//           {currentStep === 5 ? (
//             <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         <div
//           className={`step step-5 ${currentStep > 5 ? "passed" : ""} ${
//             currentStep === 5 ? "character" : ""
//           }`}
//         >
//           {currentStep === 5 ? (
//             <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//           {currentStep === 6 ? (
//             <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         <div
//           className={`step step-6 ${currentStep > 6 ? "passed" : ""} ${
//             currentStep === 6 ? "character" : ""
//           }`}
//         >
//            {currentStep === 6 ? (
//             <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//           {currentStep === 7 ? (
//             <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//         <div
//           className={`step step-7 ${
//             currentStep > 7 || lastStepCompleted ? "passed" : ""
//           } ${currentStep === 7 ? "character" : ""}`}
//         >
//           {currentStep === 7 ? (
//             <div  className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
//               <h1 style={{ color: "pink" }}>
//                 <IoWomanSharp />
//               </h1>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stairs;



import React, { useState, useEffect } from "react";
import "../styles/Stairs.css";
import { IoWomanSharp } from "react-icons/io5";
import "animate.css";

const Step = ({ step, currentStep, children }) => (
  <div className={`step step-${step} ${currentStep > step ? "passed" : ""} ${currentStep === step ? "character" : ""}`}>
    {children}
  </div>
);

const Character = ({ animateClass }) => (
  <div className={`animate__animated ${animateClass}`} style={{ position: "absolute", bottom: "0px", left: "60px" }}>
    <h1 style={{ color: "pink" }}>
      <IoWomanSharp />
    </h1>
  </div>
);

const Stairs = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [points, setPoints] = useState(0);
  const [lastStepCompleted, setLastStepCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 7) {
        setPoints((prevPoints) => prevPoints + 10);
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 7 && !lastStepCompleted) {
      setTimeout(() => {
        setPoints((prevPoints) => prevPoints + 10);
        setLastStepCompleted(true);
      }, 1000);
    }
  }, [currentStep, lastStepCompleted]);

  const getCharacter = (step) => {
    if (currentStep === step) {
      return <Character animateClass="animate__fadeInTopLeft" />;
    }
    if (currentStep === step + 1) {
      return <Character animateClass="animate__fadeOutTopRight" />;
    }
    return null;
  };

  return (
    <div>
      <div className="points">Points: {points}</div>
      <div className="stairs-container">
        {[...Array(7).keys()].map((_, index) => (
          <Step key={index + 1} step={index + 1} currentStep={currentStep}>
            {getCharacter(index + 1)}
          </Step>
        ))}
      </div>
    </div>
  );
};

export default Stairs;

