import React from 'react'

const ChooseRegion = () => {
    return (
        <div className="container">
            <div className="choose-region">
                <h1>Viloyatni tanlang</h1>
                <div className="custom-select">
                    <select>
                        <option value="0">Toshkent</option>
                        <option value="1">Namangan</option>
                        <option value="2">Qashqadaryo</option>
                        <option value="3">Surxondaryo</option>
                        <option value="4">Andijon</option>
                        <option value="5">Farg'ona</option>
                        <option value="6">Buxoro</option>
                        <option value="7">Xorazm</option>
                        <option value="8">Samarqand</option>
                        <option value="9">Navoiy</option>
                        <option value="10">Jizzax</option>
                        <option value="11">Sirdaryo</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ChooseRegion
