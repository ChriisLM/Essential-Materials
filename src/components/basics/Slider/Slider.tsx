import { useEffect, useState } from "react";
import { SliderProps } from "./Slider.types";
import "./Slider.css";

export function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  size = "medium",
  marks,
  disabled,
  fullWidth,
  className = "",
  onChange,
}: SliderProps) {
  const [currentValue, setCurrentValue] = useState(value);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((value - min) / (max - min)) * 100);
  }, [value, min, max]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    setProgress(((newValue - min) / (max - min)) * 100);
    onChange?.(newValue);
  };

  return (
    <div
      className={`slider-container slider-${size} ${
        fullWidth ? "slider-fullWidth" : ""
      } ${className}`}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        disabled={disabled}
        onChange={handleChange}
        className={`slider-input ${disabled ? "slider-disabled" : ""}`}
        style={{
          background: `linear-gradient(to right, #4caf50 0%, #4caf50 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`,
        }}
      />
      {marks && (
        <div className="slider-marks-container">
          {Object.entries(marks).map(([value, label]) => (
            <span key={value} className="slider-mark">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
