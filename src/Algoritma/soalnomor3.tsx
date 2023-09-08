import React, { useState } from 'react'
import { Input, Button } from 'antd'

const WordCounter: React.FC = () => {
    const [inputArray, setInputArray] = useState<string[]>(['xc', 'dz', 'bbb', 'dz'])
    const [queryArray, setQueryArray] = useState<string[]>(['bbb', 'ac', 'dz'])
    const [outputArray, setOutputArray] = useState<number[]>([])

    const countWordsInQuery = () => {
        const output = queryArray.map((query) => {
            const count = inputArray.filter((word) => word === query).length
            return count
        })
        setOutputArray(output)
    }

    const handleInputArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputArray(e.target.value.split(',').map((item) => item.trim()))
    }

    const handleQueryArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryArray(e.target.value.split(',').map((item) => item.trim()))
    }

    return (
        <div style={{ paddingTop: '10px' }}>
            <div>
                <label>Input Array:</label>
                <br />
                <Input placeholder="Type Here..." type='text' value={inputArray.join(', ')} onChange={handleInputArrayChange} style={{ width: '300px' }} />


            </div>
            <br />

            <div>
                <label>Query Array:</label>
                <br />
                <Input placeholder="Type Here..." type='text' value={queryArray.join(', ')} onChange={handleQueryArrayChange} style={{ width: '300px' }} />
            </div>
            <div style={{ paddingTop: '10px' }}>
                <Button onClick={countWordsInQuery} type='primary'>Count Words</Button>
            </div>


            <div style={{ paddingTop: '10px' }}>
                <label>Output</label>
                <div>{outputArray.join(', ')}</div>
            </div>
        </div>
    )
}

export default WordCounter