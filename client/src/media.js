import { css } from 'styled-components';

const sizes = {
  mobile: 500,
  tablet: 900,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media;

export const primaryTheme = "#0277bd";
export const secondaryTheme = "#004c8c";