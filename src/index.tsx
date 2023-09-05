import * as React from 'react'
import styles from './styles.module.css'
import VelvetTable1 from '../src/components/velvet-table/velvet-table'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const VelvetTable = ({ columns, data }: any) => {
  return (
    <React.Fragment>
      <VelvetTable1 columns={columns} data={data} />
    </React.Fragment>
  )
}
