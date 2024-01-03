export default function Input({ temperature, scale, handleInput }) {
  const scaleState = {
    c: "Celcious",
    f: "Farenheight",
  };

  return (
    <div>
      <legend>Enter temperature {scaleState[scale]}</legend>
      <input
        placeholder="Input temperature"
        value={temperature}
        onChange={(e) => handleInput(e, scale)}
      />
    </div>
  );
}
