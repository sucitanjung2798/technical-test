import React, { useState } from 'react'
import { Input, Button } from 'antd'

const LongestWordFinder: React.FC = () => {
    const [sentence, setSentence] = useState<string>('')
    const [longestWord, setLongestWord] = useState<string | null>(null)

    const findLongestWord = (sentence: string) => {
        const words = sentence.split(' ')
        let longest = ''

        words.forEach((word) => {
            if (word.length > longest.length) {
                longest = word
            }
        })

        return longest
    }

    const handleSentenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSentence(e.target.value)
    }

    const handleFindLongestWord = () => {
        const longest = findLongestWord(sentence)
        setLongestWord(longest)
    }





    return (
        <div>
            <Input placeholder="Type Here..." type='text' value={sentence} onChange={handleSentenceChange} style={{ width: '300px' }} />
            <br />
            <br />

            <Button onClick={handleFindLongestWord} type='primary'>Find Longest Word</Button>
            <br />

            {longestWord && <div style={{ paddingTop: '10px' }}>Longest Word: {longestWord}</div>}
        </div>
    )
}

export default LongestWordFinder