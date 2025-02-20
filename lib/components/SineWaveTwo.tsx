import React from "react";

export default function Sine() {
  // Declare a new state variable
  const [degree, setDegree] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      //If the new state is computed using the previous state, you can pass a function to setState.
      //https://reactjs.org/docs/hooks-reference.html#functional-updates
      setDegree((c) => {
        if (c < 360) {
          return c + 3;
        } else {
          return 0;
        }
      });
    }, 1);
    return () => clearInterval(id);
  }, []);

  return <SinusDraw startingPoint={degree} />;
}

interface SinusDrawProps {
  degree?: number;
  startingPoint?: number;
}

const SinusDraw = ({ startingPoint = 0 }: SinusDrawProps) => {
  const cycles = 2;
  const yValues: number[] = [];

  const xValues = Array.from({ length: 360 * cycles }, (_, key) => {
    return key;
  });

  for (let i = 0; i < cycles; i++) {
    const _points = Array.from({ length: 360 }, (_, key) => {
      const offset = i * 360;
      const _key = key + offset + startingPoint;
      return -Math.sin((_key / 360) * 2 * Math.PI) * 100 + 100;
    });

    yValues.push(..._points);
  }

  const points = xValues.reduce<string[]>((acc, currentValue, currentIndex) => {
    acc.push(`${currentValue} ${yValues[currentIndex]}`);
    return acc;
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 240">
      <polyline
        stroke="url(#paint0_linear_1515_20420)"
        strokeWidth="15"
        strokeLinecap="round"
        style={{
          fill: "transparent",
        }}
        className="grey"
        points={points.join(", ")}
      />

      <defs>
        <linearGradient
          id="paint0_linear_1515_20420"
          x1="393.4238"
          y1="15.5"
          x2="1.42383"
          y2="15.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#00BD9D" />
          <stop offset="1" stopColor="#00BD9D" />
        </linearGradient>
      </defs>
    </svg>
  );
};
