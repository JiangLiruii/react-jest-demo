import React from 'react'
import {Button} from '../component/button'

export class Buttons extends React.Component<{onHandleClick: () => Promise<boolean>},{text: string}> {
  constructor(props) {
    super(props)
    this.state = {
      text: 'hello world'
    }
  }
  handleOnClick= () => {
    this.props.onHandleClick().then(() => {
      this.setState({
        text: 'hello you'
      })
    })
  }
  render() {
    return <div onClick={this.handleOnClick}>
      <Button text={this.state.text} />
    </div>
  }
}