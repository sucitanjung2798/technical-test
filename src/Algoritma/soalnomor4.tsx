import React, { useState } from 'react'
import { Input, Button } from 'antd'

const { TextArea } = Input

const DiagonalMatrixDifference: React.FC = () => {
    const [matrix, setMatrix] = useState<number[][]>([
        [1, 2, 0],
        [4, 5, 6],
        [7, 8, 9]
    ])
    const [result, setResult] = useState<number | null>(null)

    const calculateDifference = () => {
        let diagonal1 = 0
        let diagonal2 = 0
        const n = matrix.length

        for (let i = 0; i < n; i++) {
            diagonal1 += matrix[i][i]
            diagonal2 += matrix[i][n - 1 - i]
        }

        const difference = diagonal1 - diagonal2
        setResult(difference)
    }

    const handleMatrixChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputArray = e.target.value.split(':').map((row) => row.split(',').map((item) => parseInt(item)))

        setMatrix(inputArray)
    }

    return (
        <div>
            <label>Matrix</label>
            <br />
            <TextArea value={matrix.map((row) => row.join(', ')).join('; ')} onChange={handleMatrixChange} rows={4} placeholder="Type Here..." maxLength={6} />

            <br />

            <div style={{ paddingTop: '10px' }}>
                <Button onClick={calculateDifference} type='primary'>Calculate Difference</Button>
            </div>

            <br />
            {result !== null && <div>Result: {result}</div>}

        </div>
    )
}

export default DiagonalMatrixDifference