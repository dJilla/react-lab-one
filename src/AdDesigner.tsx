import {useState} from 'react';
import './Ad.css';

export function AdDesigner() {

    const [flavor, setFlavor] = useState('Vanilla');
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [fontSize, setFontSize] = useState(32);

    const styles = {
        fontSize: fontSize + 'px'
    }

    return (

        <div className='designerSection'>
            <h1>Ad Designer</h1>

            <div className={ isLightTheme ? 'preview light': 'preview dark'}>
                <h2>Vote For</h2>
                <h2 className='chosenFlavor' style={styles}>{flavor}</h2>
            </div>

            <h3>What to Support</h3>
            <button onClick={() => setFlavor('Vanilla')}>Vanilla</button>
            <button onClick={() => setFlavor('Chocolate')}>Chocolate</button>
            <button onClick={() => setFlavor('Strawberry')}>Strawberry</button>

            <h3>Color Theme</h3>
            <button onClick={() => setIsLightTheme(true)}>Light</button>
            <button onClick={() => setIsLightTheme(false)}>Dark</button>

            <h3>Font Size</h3>
            <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
            <label>{fontSize}</label>
            <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
        </div>
    );
}