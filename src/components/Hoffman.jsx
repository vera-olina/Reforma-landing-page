import React, { useState } from "react";

export default function Hoffman() {
    const [popup, setPop] = useState(true)
    const [sliderValue, setSliderValue] = useState(40);
    const [liquidSize, setLiquidSize] = useState(0);
    const [groundCoffee, setGroundCoffee] = useState(0);
    const [iceInGrams, setIceInGrams] = useState(0);
    const [waterTotal, setWaterTotal] = useState(0);
    const [waterForBloom, setWaterForBloom] = useState(0);

    function closePopup() {
        setPop(!popup)
    }
    
    function setValue(e) {
        const value = e.target.value;
        setSliderValue(value);

        // Calculate ice in grams based on the ice proportion and liquid size.
        const iceInGrams = Math.round((value / 100) * liquidSize)
        setIceInGrams(iceInGrams)

        // Calculate ground coffee based on liquid size.
        const coffeeToWaterRatio = 1000 / 65
        const groundCoffee = Math.round(liquidSize / coffeeToWaterRatio)
        setGroundCoffee(groundCoffee)

        // Calculate total water based on liquid size.
        const waterTotal = liquidSize - iceInGrams
        setWaterTotal(waterTotal)

        // Calculate water for bloom based on total water.
        const bloomRatio = 0.13
        const waterForBloom = Math.round(bloomRatio * waterTotal)
        setWaterForBloom(waterForBloom)
    }

    function handleLiquidSizeChange(e) {
        const selectedLiquidSize = parseInt(e.target.options[e.target.selectedIndex].textContent, 10);
        setLiquidSize(selectedLiquidSize)
        setValue(e)
    }
    
    return (
        <>
        {popup ?
        <div className="wraper-hoffman">

            <div className="hoffman-header">
                <h2>Hoffmann Coffee Calculator</h2>
                <button onClick={closePopup}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.928955" y="13.4659" width="17.73" height="1.97" rx="0.985" transform="rotate(-45 0.928955 13.4659)" fill="black"/>
                        <rect x="2.39185" y="0.998901" width="17.73" height="1.97" rx="0.985" transform="rotate(45 2.39185 0.998901)" fill="black"/>
                    </svg>
                </button>
            </div>
            
            
            <div className="hoffman-main">
                <span className="note">Quickly calculate brew ratios for delicious coffee based on 
                <a className="note-link" href="https://www.jameshoffmann.co.uk" target="_blank"> James Hoffmann's</a> recipes.</span>
                <h2>Iced filter coffee</h2>

                <h4>Liquid size</h4>
                <select onChange={handleLiquidSizeChange} className="liquid-range">
                    <option selected disabled value="0">Select</option>
                    <option value="1">1000</option>
                    <option value="2">950</option>
                    <option value="3">900</option>
                    <option value="4">850</option>
                    <option value="5">800</option>
                    <option value="6">750</option>
                    <option value="7">700</option>
                    <option value="8">650</option>
                    <option value="9">600</option>
                    <option value="10">550</option>
                    <option value="11">500</option>
                    <option value="12">450</option>
                    <option value="13">400</option>
                    <option value="14">350</option>
                    <option value="15">300</option>
                    <option value="16">250</option>
                    <option value="17">200</option>
                    <option value="18">150</option>
                    <option value="19">100</option>
                </select>

                <h4>Ground coffee</h4>
                <p>{groundCoffee} g</p>

                <h4>% of ice <span className="note">· Defaults to 40%, recommended 35–45%</span></h4>
                
                <div className="range">
                    <div className="sliderValue">
                        <span>{sliderValue}</span>
                    </div>
                    <div className="field">
                            <input type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={sliderValue}
                                onChange={setValue}
                            />
                    </div>
                </div>

                <h4>Ice</h4>
                <p>{iceInGrams} g</p>

                <h4>Water <span className="note">· Total to boil</span></h4>
                <p>{waterTotal} ml</p>

                <h4>Water for bloom</h4>
                <p>{waterForBloom} ml</p>

                <h2>Breakdown:</h2>
                <p><strong>Before:</strong> Prepare decanter with {iceInGrams} g of ice, rinse paper filter under sink.</p>
                <ol className="breakdown-list">
                    <li>
                        <span className="breakdown">0:00</span>&nbsp;
                        —&nbsp;Bloom with {waterForBloom} ml, wait 45s.
                    </li>
                    <li>
                        <span className="breakdown">0:45</span>&nbsp;
                        —&nbsp;Pour {waterTotal - waterForBloom} ml in 30s. — <strong>Total: {waterTotal} ml</strong>
                    </li>
                    <li>
                        <span className="breakdown">1:15</span>&nbsp;
                        —&nbsp;Pour {liquidSize - waterTotal} ml in 30s. — <strong>Total: {liquidSize} ml</strong>
                    </li>
                    <li>
                        <span className="breakdown">1:45</span>&nbsp;
                        —&nbsp;Stir 1x clockwise and 1x counterclockwise, swirl, and let it draw down.
                    </li>
                </ol>
                <p><strong>After:</strong> Swirl brew in decanter to melt all the ice. Pour onto fresh ice cubes in a glass.</p>
            </div>
        </div> : ""}
        </>
        
    )
}




