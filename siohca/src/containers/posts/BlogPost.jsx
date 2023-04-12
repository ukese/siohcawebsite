import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class BlogPost extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentDidMount() {
    const { filePath } = this.props; // Get the file path from props
    fetch(filePath) // Use the file path from props in the fetch call
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text })
      })
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.terms} />
      </div>
    )
  }
}

export default BlogPost
