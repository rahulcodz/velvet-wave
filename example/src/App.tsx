import React from 'react'

import { VelvetTable } from 'velvet-wave'
import 'velvet-wave/dist/index.css'

const App = () => {
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

export default App
