import React, { useState } from "react";

interface Props {
  size: string;
  fillPercentage: number;
  inKeyboardMode: boolean;
  isHighlighted: boolean;
  isSelected: boolean;
  onChange: Function;
  onHover: Function;
}

const Star = ({
  size,
  fillPercentage,
  inKeyboardMode,
  isHighlighted,
  isSelected,
  onChange,
  onHover,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [uniqId] = useState(() => Math.random());

  let fill;
  if (inKeyboardMode || isHighlighted || fillPercentage > 0) {
    fill = "#F3A536";
  } else {
    fill = "white";
  }

  let fillOpacity;
  if ((inKeyboardMode || isHighlighted) && fillPercentage > 0) {
    fillOpacity = 1;
  } else if (!inKeyboardMode && (isHighlighted || fillPercentage > 0)) {
    fillOpacity = 0.35;
  } else {
    fillOpacity = 0;
  }

  let stroke;
  if (isSelected || isActive) {
    stroke = "#0099E0";
  } else {
    stroke = "#F3A536";
  }

  let strokeWidth;
  if (isActive) {
    strokeWidth = 1.8;
  } else {
    strokeWidth = 1;
  }

  return (
    <div
      className="aaronshaf-star-rating-star"
      style={{ display: "inline-block" }}
      onMouseOver={() => onHover()}
      onPointerMove={() => {
        onHover();
      }}
      onPointerOver={() => {
        onHover();
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        setIsActive(true);
      }}
      onMouseUp={() => {
        onChange();
        setIsActive(false);
      }}
      onPointerUp={() => {
        onChange();
        setIsActive(false);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      onPointerCancel={() => {
        setIsActive(false);
      }}
      onPointerLeave={() => {
        setIsActive(false);
      }}
      onTouchStart={() => {
        onHover();
        setIsActive(true);
      }}
      onTouchMove={() => {
        onHover();
      }}
      onPointerDown={(event) => {
        event.preventDefault();
        onHover();
        setIsActive(true);
      }}
      onTouchEnd={() => {
        onChange();
        setIsActive(false);
      }}
    >
      <svg viewBox="0 0 24 24" style={{ width: size, height: size }}>
        <filter id={`blurfilter-${uniqId}`} width="24" height="24">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
        </filter>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="transparent"
          stroke="#0099E0"
          strokeWidth="1"
          opacity={isSelected || isActive ? 1 : 0}
          style={{
            filter: `url(#blurfilter-${uniqId})`,
            transition: "opacity 0.1s ease-in-out",
          }}
        ></path>
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          fillOpacity={fillOpacity}
          style={{
            transition: "stroke-width 0.1s ease-in-out",
          }}
        ></path>
      </svg>
    </div>
  );
};

export default Star;
