import React, {Component, PropTypes as t} from 'react'

let ProductCategoryRow = ({category}) => <tr>
  <th colSpan="2">{category}</th>
</tr>

let ProductRow = ({product}) => <tr>
  <td>
    {product.stocked ?
      product.name :
      <span style={{color: 'red'}}>{product.name}</span>
    }
  </td>
  <td>{product.price}</td>
</tr>

class ProductTable extends Component {
  static propTypes = {
    filterText: t.string.isRequired,
    inStockOnly: t.bool.isRequired,
    products: t.array.isRequired,
  }

  render() {
    return <table className="table table-bordered table-compact">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.renderRows()}
      </tbody>
    </table>
  }

  renderRows() {
    let {filterText, inStockOnly, products} = this.props
    let rows = []
    let lastCategory = null
    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
        return
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      rows.push(<ProductRow product={product} key={product.name}/>)
      lastCategory = product.category
    })
    return rows
  }
}

export default ProductTable
