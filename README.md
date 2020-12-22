# star-rating

> Star rating component. Upgrades input element.

[![NPM](https://img.shields.io/npm/v/star-rating.svg)](https://www.npmjs.com/package/star-rating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save star-rating
```

## Usage

```tsx
import React, { Component } from "react";
import StarRating from "@aaronshaf/star-rating";

const Example = () => {
  return (
    <StarRating size="2rem">
      <input
        type="number"
        onChange={handleChange}
        min="1"
        max="5"
        step="1"
        value="0"
      />
    </StarRating>
  );
};
```

## License

MIT © [aaronshaf](https://github.com/aaronshaf)
