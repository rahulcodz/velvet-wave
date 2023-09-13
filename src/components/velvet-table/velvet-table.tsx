/* eslint-disable prettier/prettier */
import React from 'react'
import './styles.module.css'
interface TableColumn {
  label: string
  key: string
}

interface TableRow {
  [key: string]: string | number
}

interface Props {
  columns: TableColumn[]
  data: TableRow[]
}

function VelvetTable({ columns, data }: Props) {
  const styles = {
    filterButton: {
      margin: '10px',
      background: '#e7e0e0',
      padding: '0 7px',
      borderRadius: '3px',
      cursor: 'pointer'
    },
    tableHeader: {
      background: '#e7e0e0',
      padding: '5px'
    }
  }
  return (
    <table>
      <thead>
        <tr className='header'>
          {columns?.map((column, index) => (
            <th key={index} style={styles.tableHeader}>
              <span>{column.label}</span>
              {/* {false ? (
                <span className='container' style={styles.filterButton}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='0.75em'
                    viewBox='0 0 384 512'
                  >
                    <path d='M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z' />
                  </svg>
                </span>
              ) : (
                <span className='container' style={styles.filterButton}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='0.75em'
                    viewBox='0 0 384 512'
                  >
                    <path d='M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
                  </svg>
                </span>
              )} */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default VelvetTable
