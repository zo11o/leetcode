import * as React from 'react';
import './index.css';

import {Button} from 'antd'
import Hello from '../components/Hello';

export default class Index extends React.Component {

    public getRndInteger (min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public getNameArray () {
        const arr = ['zo11o', 'feng', 'li'];
        return arr[this.getRndInteger(0, 2)]
    }

    public render () {
        return (
            <div className="page-index">
                <Hello name={this.getNameArray()} enthusiasmLevel={2} />
                <Button type="primary">AntDesgin按钮</Button>
            </div>
        );
    }
}
