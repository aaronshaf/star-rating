import React, { useState, useEffect, useRef, ReactElement } from "react";
import Star from "./Star";

interface Props {
  size?: string;
  children: JSX.IntrinsicElements["input"];
}

const screenReaderOnly: Partial<CSSStyleDeclaration> = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
};

const useIsMounted = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const StarRating = ({ size, children }: Props) => {
  const isMount = useIsMounted();
  const child: any = React.Children.only(children);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(child.props.value);
  const [hoverIndex, setHoverIndex] = useState(child.props.value);
  const [hasFocus, setHasFocus] = useState(false);
  const [inKeyboardMode, setInKeyboardMode] = useState(false);

  const decrement = () => {
    const step = parseFloat(child.props.step) || 1;
    const min = parseFloat(child.props.min);
    let newValue = parseFloat(value) - step;
    if (typeof child.props.min !== "undefined" && newValue < min) {
      newValue = min;
    }
    setValue(newValue);
  };

  const increment = () => {
    const step = parseFloat(child.props.step) || 1;
    const max = parseFloat(child.props.max);
    let newValue = parseFloat(value) + step;
    if (typeof child.props.max !== "undefined" && newValue > max) {
      newValue = max;
    }
    setValue(newValue);
  };

  const input = React.cloneElement(child as React.ReactElement<any>, {
    value,
    ref: (node) => {
      if (node) {
        inputRef.current = node;
      }
      return node;
    },
    inputmode: "none",
    style: screenReaderOnly,
    onChange: (event) => {
      if (event.target.value !== value) {
        setValue(event.target.value);
      }
    },
    onFocus: () => {
      setHasFocus(true);
    },
    onBlur: () => {
      setHasFocus(false);
    },
    onKeyDown: (event) => {
      if (event.keyCode >= 37 && event.keyCode <= 40) {
        setInKeyboardMode(true);
      }
      if (event.keyCode === 37) {
        // 'ArrowLeft'
        decrement();
      } else if (event.keyCode === 39) {
        // 'ArrowRight'
        increment();
      }
    },
  });

  useEffect(() => {
    if (!isMount) {
      const event2 = new CustomEvent("change");
      inputRef.current && inputRef.current.dispatchEvent(event2);
      child.props.onChange && child.props.onChange(event2);
    }
  }, [value]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleHover = (hoverIndex) => {
    setHoverIndex(hoverIndex);
    setInKeyboardMode(false);
  };

  const handleClick = (event) => {
    if (event.target !== input) {
      event.preventDefault();
      if (inputRef.current) {
        inputRef.current.focus();
      }
      setInKeyboardMode(false);
    }
  };

  const starCount = Math.ceil(parseFloat(input.props.max) || 5);
  const stars = Array(starCount)
    .fill(null)
    .map((x, i) => i + 1)
    .map((x) => {
      const fillPercentage = parseFloat(input.props.value) < x ? 0 : 100;
      return (
        <Star
          size={size || "1rem"}
          key={x}
          onChange={() => handleChange(x)}
          onHover={() => handleHover(x)}
          isSelected={
            hasFocus && Math.floor(parseFloat(input.props.value)) === x
          }
          fillPercentage={fillPercentage}
          isHighlighted={hoverIndex >= x}
          inKeyboardMode={inKeyboardMode}
        />
      );
    });
  return (
    <div
      className="aaronshaf-star-rating"
      onMouseOut={() => setInKeyboardMode(true)}
      onClick={handleClick}
      onDragStart={() => false}
      aria-hidden
    >
      {input}
      {stars}
    </div>
  );
};

export default StarRating;
