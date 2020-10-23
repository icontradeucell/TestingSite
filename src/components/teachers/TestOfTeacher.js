import React from 'react';
import Button from '../global/Button';

const TestOfTeacher = ({ date, variant, num, subName }) => {
    return (
        <div className="test-of-teacher">
            <div className="white-border">
                <div className="test-date">
                    <p>{date}</p>
                </div>
                <div className="test-variant">
                    <p>{variant} -Variant</p>
                </div>
                <div className="test-number">
                    <p>{num} ta</p>
                </div>
                <div className="subject-name">
                    <p>{subName}</p>
                </div>

                <Button text="Testni boshlash" bgClass="greenBtn" size={0.9} />
            </div>
        </div>
    )
}

export default TestOfTeacher
