import { useEffect, useState } from "react";

function EffectDemo() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name Changed:", name);
  }, [name]);

  return (
    <div>
      <h1>useEffectDemo</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <h2>Hello {name}</h2>
    </div>
  );
}

export default EffectDemo;
