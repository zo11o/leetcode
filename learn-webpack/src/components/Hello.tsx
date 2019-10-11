import * as React from 'react'

export interface ViewProps {
    name: string;
    age?: number;
}

export interface ViewStates {}

export default class Hello extends React.Component<ViewProps,ViewStates> {
    constructor (props: ViewProps) {
        super(props);
        this.state = {}
    }
    render () {
        const {name, age} = this.props;
        return (
            <div>
                <h1>信息：</h1>
                <p>姓名：{name}</p>
                <p>年龄：{age}</p>
            </div>
        )
    }
}
