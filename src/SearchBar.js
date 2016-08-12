import React, {Component} from 'react'

class SearchBar extends Component {
  handleChange = (e) => {
    let {elements} = e.target.form
    this.props.onUserInput(
      elements.filterTextInput.value,
      elements.inStockOnlyInput.checked
    )
  }

  render() {
    return <form>
      <div className="form-group">
        <input
          className="form-control"
          name="filterTextInput"
          onChange={this.handleChange}
          placeholder="Search..."
          type="text"
          value={this.props.filterText}
        />
      </div>
      <div className="form-group">
        <div className="checkbox">
          <label>
            <input
              checked={this.props.inStockOnly}
              name="inStockOnlyInput"
              onChange={this.handleChange}
              type="checkbox"
            />
            {' '}
            Only show products in stock
          </label>
        </div>
      </div>
    </form>
  }
}

export default SearchBar
