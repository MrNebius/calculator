import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: '',
            result: 0,
            tempNum: '',
            tempCalc: ''
        };
        this.numberInput = this.numberInput.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.calcInput = this.calcInput.bind(this);
        this.clean = this.clean.bind(this);
    }

    numberInput(num) {
        const change = this.state.tempNum + num;
        this.setState({
            tempNum: change,
            display: change
        });

    }

    addDigit() {
        if (this.state.tempNum.indexOf('.') === -1) {
            if (Number(this.state.tempNum) === 0) {
                this.setState({
                    tempNum: '0.',
                    display: '0.'
                })
            } else {
                const change = this.state.tempNum + '.';
                this.setState({
                    tempNum: change,
                    display: change
                })
            }
        } else {
            alert('error')
        }
    }

    calcInput(char) {
        if (!this.state.tempCalc || this.state.tempCalc === '=' && Boolean(this.state.tempNum)) {
            this.setState({
                result: Number(this.state.tempNum),
            })
        } else if (this.state.tempCalc === '=' ) {

            } else {
                const add = this.state.result + Number(this.state.tempNum);
                const subtract = this.state.result - Number(this.state.tempNum);
                const multiply = this.state.result * Number(this.state.tempNum);
                const divide = this.state.result / Number(this.state.tempNum);

                if (this.state.tempCalc === '/') this.setState({result: divide, display: divide});
                if (this.state.tempCalc === '*') this.setState({result: multiply, display: multiply});
                if (this.state.tempCalc === '+') this.setState({result: add, display: add});
                if (this.state.tempCalc === '-') this.setState({result: subtract, display: subtract});
            }
        this.setState({
            tempCalc: char,
            tempNum: ''
        })
    }

    clean() {
        this.setState({
            result: 0,
            tempNum: '',
            tempCalc: '',
            display: ''
        })
    }


    render() {
        return (
            <div className="calc">
                <div className="calc-display">
                    <input type="text" value={this.state.display} readOnly className="calc-display-input"/>
                </div>
                <div className="calc-row">
                    <button className="calcbutton calc-button-gray">mrc</button>
                    <button className="calcbutton calc-button-gray">m-</button>
                    <button className="calcbutton calc-button-gray">m+</button>
                    <button className="calcbutton calc-button-red calc-button-big" onClick={() => this.calcInput('/')}>
                        ÷
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calcbutton" onClick={() => this.numberInput('7')}>7</button>
                    <button className="calcbutton" onClick={() => this.numberInput('8')}>8</button>
                    <button className="calcbutton" onClick={() => this.numberInput('9')}>9</button>
                    <button className="calcbutton calc-button-red calc-button-big" onClick={() => this.calcInput('*')}>
                        x
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calcbutton" onClick={() => this.numberInput('4')}>4</button>
                    <button className="calcbutton" onClick={() => this.numberInput('5')}>5</button>
                    <button className="calcbutton" onClick={() => this.numberInput('6')}>6</button>
                    <button className="calcbutton calc-button-red calc-button-big" onClick={() => this.calcInput('-')}>
                        -
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calcbutton" onClick={() => this.numberInput('1')}>1</button>
                    <button className="calcbutton" onClick={() => this.numberInput('2')}>2</button>
                    <button className="calcbutton" onClick={() => this.numberInput('3')}>3</button>
                    <button className="calcbutton calc-button-red calc-button-big" onClick={() => this.calcInput('+')}>
                        +
                    </button>
                </div>
                <div className="calc-row">
                    <button className="calcbutton" onClick={() => this.numberInput('0')}>0</button>
                    <button className="calcbutton" onClick={this.addDigit}>.</button>
                    <button className="calcbutton" onClick={this.clean}>C</button>
                    <button className="calcbutton calc-button-red calc-button-big" onClick={() => this.calcInput('=')}>
                        =
                    </button>
                </div>
            </div>

        )
    }
}
render(<Calculator />, document.getElementById('container'));
