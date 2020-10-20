import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomeComponent() {

    const [inputsCount, setInputsCount] = useState(Array.from(Array(30).keys()))
    const [inputsValues, setInputValues] = useState({})
    const [showInput, setShowInput] = useState(false)

    useEffect(() => {
        let valuesObj = {}
        inputsCount.map((el, index) => {
            valuesObj[index] = ''
        })

        setInputValues(valuesObj)
    }, [])

    const handleChange = (index, e) => {
        inputsValues[index] = e.target.value
        setInputValues({...inputsValues})
        setShowInput(true)
    }

    const submitInputsValues = () => {
        axios.post('http://localhost:3000/rest', inputsValues)
            .then(res => {
                console.log(res)
            });
    }

    const clearInputsValues = () => {

        inputsCount.map((el, index) => {
            inputsValues[index] = ''
        })
        setInputValues({...inputsValues})
        setShowInput(false)

    }

    return(
        <div className="inputsParent">
            {
                inputsCount.map((el, index) => {
                    return(
                        <div key={index}>
                            <p>Input N {el + 1}</p>
                            <input type="text" className="inputs" value={inputsValues[index] || ''} onChange={handleChange.bind(this, index)} />
                        </div>
                    )
                })
            }

            <div className="sbmClrButtons">
                <button type="button" onClick={submitInputsValues}>Submit</button>
                {
                    showInput && <button type="button" onClick={clearInputsValues}>Clear</button>
                }
            </div>
        </div>
    )

}

export default HomeComponent
