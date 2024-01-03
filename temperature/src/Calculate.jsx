import React, { useState } from "react";
import Input from "./Input";
import Temperature from "./Temperature";
import { ToCelcious, Tofahrenheit, convertTO } from "./assets/calculate";

export default function Calculate() {
  const dataModel = {
    temperature: "",
    scale: "c",
  };
  const [temperature, setTemperature] = useState(dataModel);
  const { temperature: currentTemperature, scale } = temperature;

  const handleInput = (e, newScale) => {
    setTemperature({
      temperature: e.target.value,
      scale: newScale,
    });
  };
  console.log(temperature);

  const clcious =
    scale === "f"
      ? convertTO(currentTemperature, Tofahrenheit)
      : currentTemperature;

  const fahrenheit =
    scale === "c"
      ? convertTO(currentTemperature, ToCelcious)
      : currentTemperature;

  return (
    <div>
      <Input temperature={clcious} scale="c" handleInput={handleInput} />
      <Input temperature={fahrenheit} scale="f" handleInput={handleInput} />

      <Temperature temp={parseFloat(clcious)} />
    </div>
  );
}
