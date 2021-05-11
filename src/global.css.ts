import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css'

globalStyle('body, body *', {
  all: 'unset',
  boxSizing: 'border-box',
});

globalStyle('body', {
  background: vars.background.default
})
