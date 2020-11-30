import React, { Component } from 'react';
import { Card } from 'antd';

class CardItem extends Component {
    render() {
        return (
            <div>
                <Card
                    title={this.props.title}
                    style={{ width: 300 }}
                >
                    <p>{this.props.content}</p>
                </Card>
            </div>
        )
    }
}

export default CardItem;