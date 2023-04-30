import { PureComponent, memo, useState } from 'react';

// class Greeting extends PureComponent {
//   render() {
//     console.log('Greeting was rendered at', new Date().toLocaleTimeString());
//     return (
//       <h3>
//         Hello{this.props.name && ', '}
//         {this.props.name}!
//       </h3>
//     );
//   }
// }

// Pure react component gives same result for same props and state. it skips re-renders for same props and state.

// wrap function iside memo to make it pure react component
const Greeting = memo((props) => {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{props.name && ', '}
      {props.name}!
    </h3>
  );
});

export default function PureReactComponent() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  console.log('state changed');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      {/* Greeting will not be called on address change because it is pure function on name state */}
      <Greeting name={name} />
    </>
  );
}
