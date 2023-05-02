import { useState, useEffect } from 'react';

// learnt about cleanup function cycle

var a = 10;
export default function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log('unmount', a);
    const x = setInterval(() => {
      a--;
      console.log(a);
      setCount(count - 1);
    }, 1000);
    console.log(x, 'x');
    if (count === 0) {
      clearInterval(x);
    }
    return () => {
      console.log('return', a);
      clearInterval(x);
    };
  }, [count]);

  return <div className="App">{count}</div>;
}

// ALTERNATIVE

// learnt about strict fetch

// import { useState, useEffect } from "react";
// let id;
// export default function App() {
//   const [count, setCount] = useState(10);

//   useEffect(() => {
//     clearInterval(id);
//     id = setInterval(() => {
//       setCount((prev) => prev -1);
//     }, 1000);
//     console.log({ id });
//     return () => {
//       console.log("return");
//     };
//   }, []);
//   if (count === 0) clearInterval(id);

//   return <div className="App">{count}</div>;
// }
