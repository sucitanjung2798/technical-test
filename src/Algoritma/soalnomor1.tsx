import React, { useState } from 'react'
import { Input } from 'antd'

const ReverseString: React.FC = () => {
    const [inputString, setInputString] = useState<string>('NEGIE1')

    const reverseAlphabet = (str: string) => {
        const alphabetChars = str.match(/[a-zA-Z]/g)
        if (!alphabetChars) return str

        const reversedAlphabet = alphabetChars.reverse().join('')
        const nonAlphabetChars = str.replace(/[a-zA-Z]/g, '')

        return reversedAlphabet + nonAlphabetChars
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputString(e.target.value)
    }

    return (
        <div>
            <Input placeholder="Type Here..." type='text' value={inputString} onChange={handleInputChange} style={{ width: '300px' }} />
            <br />
            <br />
            <div >Hasil: {reverseAlphabet(inputString)}</div>
        </div>
    )
}

export default ReverseString