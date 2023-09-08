import React from 'react'
import SoalNomor1 from './soalnomor1'
import SoalNomor2 from './soalnomor2'
import SoalNomor3 from './soalnomor3'
import SoalNomor4 from './soalnomor4'

const Algoritma: React.FC = () => {
    return (
        <>
            <div>Soal Nomor 1</div>
            <SoalNomor1 />
            <hr />
            <div>Soal Nomor 2</div>
            <SoalNomor2 />
            <hr />

            <div>Soal Nomor 3</div>
            <SoalNomor3 />
            <hr />
            <div>Soal Nomor 4</div>
            <SoalNomor4 />


        </>


    )
}

export default Algoritma