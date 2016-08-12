import React, {Component} from 'react'

import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  }

  handleUserInput = (filterText, inStockOnly) => {
    this.setState({filterText, inStockOnly})
  }

  render() {
    return <div>
      <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        onUserInput={this.handleUserInput}
      />
      <ProductTable
        products={this.props.products}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
      />
    </div>
  }
}

export default FilterableProductTable
