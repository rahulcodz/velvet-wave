# velvet-wave

> Velvet Wave is a versatile and intuitive React styling library that empowers developers to effortlessly create stunning and responsive user interfaces. Say goodbye to cumbersome CSS files and hello to an elegant and efficient styling solution that seamlessly integrates with your React applications.

[![NPM](https://img.shields.io/npm/v/velvet-wave.svg)](https://www.npmjs.com/package/velvet-wave) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save velvet-wave
```

## Usage

```tsx
import React from 'react'

import { VelvetTable } from 'velvet-wave'
import 'velvet-wave/dist/index.css'

export default const App = () => {
  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Agew', key: 'age' },
    { label: 'City', key: 'city' },
    { label: 'Action', key: '' }
  ]

  const data = [
    { name: 'Alice', age: 28, city: 'New York' },
    { name: 'Bob', age: 32, city: 'San Francisco' },
    { name: 'Charlie', age: 22, city: 'Los Angeles' }
  ]
  return <VelvetTable columns={columns} data={data} />
}
```

## License

MIT © [rahulcodz](https://github.com/rahulcodz)
