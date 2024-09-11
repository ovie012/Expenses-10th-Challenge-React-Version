import { useState, useEffect } from 'react'
import './App.css'
import data from '../data.json';

function App() {
  const [randomAmount, setRandomAmount] = useState([]);

  useEffect(() => {
    const generateRandomAmount = () => {
      const updateData = data.map((item) => ({
        ...item,
        amount : (Math.random() * 100).toFixed(2),
      }))
    setRandomAmount(updateData);
    }
    generateRandomAmount()
  }, []);

  const getCurrentDay = () => {
    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = new Date();
    return daysOfWeek[today.getDay()];
  }

  const today = getCurrentDay();
  const percentAmount = (Math.random() * 10).toFixed(1);
  const totalDataAmount = ((randomAmount.reduce((acc, item) => acc + parseFloat(item.amount.replace('$', '')), 0)) * 5).toFixed(2);
  const balance = (3000 - totalDataAmount).toFixed(2);

  return (
    <>
      {/* <main> */}
        <div className="container">
          <div className="balance">
              <div className="inner-balance">
                  <div className="text">
                      <p>My balance</p>
                      <h2>${balance}</h2>
                  </div>
                  <div className="circles">
                      <img src="/logo.svg" alt="logo" />
                  </div>
              </div>
          </div>
          <div className="chart">
              <div className="inner-chart">
                  <div className="major-chart">
                      <h2>Spending - Last 7 days</h2>
                      <div className="chart-section">
                          <section className="bars">
                              {randomAmount.map(item => (
                                <section key={item.day} className={`days-bars ${today === item.day ? 'today' : ''}`}>
                                  <p style={{ marginTop : `${-item.amount}px` }}>${item.amount}</p>
                                  <span style={{ height : `${item.amount}px` }}></span>
                                  <h6>{item.day}</h6>
                                </section>
                              ))}
                          </section>
                      </div>
                  </div>
              </div>
              <section className="last-line"></section>
              <div className="total-expense">
                  <div className="this-month">
                      <h6>Total this month</h6>
                      <h2>${totalDataAmount}</h2>
                  </div>
                  <div className="last-month">
                      <h6>+{percentAmount}%</h6>
                      <h2>from last month</h2>
                  </div>
              </div>
          </div>
        </div>
      {/* </main> */}
    </>
  )
}

export default App


//LEGEND.DEV coded this





















//below is a more concise and professional way of writing the above code




// import { useState, useEffect, useMemo } from 'react';
// import './App.css';
// import data from '../data.json';

// function App() {
//   const [randomAmount, setRandomAmount] = useState([]);

//   useEffect(() => {
//     const updateData = data.map(item => ({
//       ...item,
//       amount: (Math.random() * 100).toFixed(2),
//     }));
//     setRandomAmount(updateData);
//   }, []);

//   const today = useMemo(() => {
//     const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
//     return daysOfWeek[new Date().getDay()];
//   }, []);

//   const totalDataAmount = useMemo(() => {
//     return (randomAmount.reduce((acc, { amount }) => acc + parseFloat(amount), 0) * 5).toFixed(2);
//   }, [randomAmount]);

//   const balance = useMemo(() => (3000 - totalDataAmount).toFixed(2), [totalDataAmount]);
//   const percentAmount = useMemo(() => (Math.random() * 10).toFixed(1), []);

//   return (
//     <main>
//       <div className="container">
//         <div className="balance">
//           <div className="inner-balance">
//             <div className="text">
//               <p>My balance</p>
//               <h2>${balance}</h2>
//             </div>
//             <div className="circles">
//               <img src="/logo.svg" alt="logo" />
//             </div>
//           </div>
//         </div>
//         <div className="chart">
//           <div className="inner-chart">
//             <div className="major-chart">
//               <h2>Spending - Last 7 days</h2>
//               <div className="chart-section">
//                 <section className="bars">
//                   {randomAmount.map(({ day, amount }) => (
//                     <section key={day} className={`days-bars ${today === day ? 'today' : ''}`}>
//                       <p style={{ marginTop: `-${amount}px` }}>${amount}</p>
//                       <span style={{ height: `${amount}px` }}></span>
//                       <h6>{day}</h6>
//                     </section>
//                   ))}
//                 </section>
//               </div>
//             </div>
//           </div>
//           <section className="last-line"></section>
//           <div className="total-expense">
//             <div className="this-month">
//               <h6>Total this month</h6>
//               <h2>${totalDataAmount}</h2>
//             </div>
//             <div className="last-month">
//               <h6>+{percentAmount}%</h6>
//               <h2>from last month</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
