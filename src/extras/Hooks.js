import React, { useState, forwardRef, useRef, useMemo, useEffect } from 'react';

export const Ref1 = () => {
  const name = useRef();
  const email = useRef();

  const handleSubmit = () => {
    console.log({ n: name.current.value, e: email.current.value });
    name.current.focus();
  };

  return (
    <div>
      <div>
        Name: <input className="border-black border-2" ref={name} />
      </div>
      <div>
        Email: <input className="border-black border-2" ref={email} />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

// REF AS A VALUE
/**
 * return (
    <div>
      <div>
        Name:
        <input
          onChange={(e) => {
            name.current = e.target.value;
          }}
        />
      </div>
      <div>
        Email:
        <input
          onChange={(e) => {
            email.current = e.target.value;
          }}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
 */

const MyInput = forwardRef((props, ref) => {
  // IMPORTANT - ref is not destructured
  console.log({ props, ref });
  return <input {...props} ref={ref} className="border-black border-2" />;
});

MyInput.displayName = 'MyInput';

export const Ref2 = () => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <div>
      <MyInput ref={ref} temp={'temp'} />
      <button onClick={handleClick}>Focus child from parent</button>
    </div>
  );
};

export const Memo1 = () => {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);

  const double = useMemo(() => slowFunction('memo'), [input]);

  function slowFunction(from) {
    for (let index = 0; index < 1000000000; index++) {}
    console.log({ from });
    return input * 2;
  }

  useEffect(() => {
    slowFunction('effect');
  }, [input]);

  return (
    <div>
      <div className="m-2">
        <input
          className="border-black border-2"
          type="number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div className="m-2">
        <input className="border-black border-2" type="number" value={double} />
      </div>
      <div className="m-2">Doubled value : {double}</div>
      <div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Count
        </button>
      </div>
      <div>Counter - {count}</div>
    </div>
  );
};
