import React, {Component} from 'react'
import './TodoInput.css'

export default class TodoInput extends Component {
    render() {
        return <input type="text" value={this.props.content}
                      className="TodoInput"
                      onChange={this.changeTitle.bind(this)}
                      onKeyPress={this.submit.bind(this)}/>
    }

    submit(e) {
        if (e.key === 'Enter') {
            console.log(this)
            console.log(e)
            this.props.onSubmit(e)
        }
    }

    changeTitle(e) {
        console.log(e)
        this.props.onChange(e)
    }
}