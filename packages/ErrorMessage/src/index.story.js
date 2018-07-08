import React from 'react'
import { storiesOf } from '@storybook/react'

import ErrorMessage from '.'

storiesOf('Button', module)

  .add('Default', () => (
    <ErrorMessage />
  ))

  .add('With cutom text', () => (
    <ErrorMessage title='Error' text='404 page not found' />
  ))

  .add('Small', () => (
    <ErrorMessage  width={100} height={100} />
  ))
