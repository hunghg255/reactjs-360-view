import React from 'react';
export default class Hammer extends React.Component {
    static displayName: string;
    static propTypes: {
        className: any;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.DetailedReactHTMLElement<{}, HTMLElement>;
}
