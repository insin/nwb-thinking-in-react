import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import ProductTable from 'src/ProductTable'

let productsFixture = [
  {category: 'Sportsball', price: '$19.99', stocked: true, name: 'Football'},
  {category: 'Sportsball', price: '$29.99', stocked: true, name: 'Baseball'},
  {category: 'Sportsball', price: '$39.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$199.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$299.99', stocked: true, name: 'Nexus 7'},
]

describe('ProductTable component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays all items without filtering', () => {
    render(<ProductTable
      filterText=""
      inStockOnly={false}
      products={productsFixture}
    />, node)
    expect(node.textContent)
      .toContain('Sportsball')
        .toContain('Football')
        .toContain('Baseball')
        .toContain('Basketball')
      .toContain('Electronics')
        .toContain('iPod Touch')
        .toContain('iPhone 5')
        .toContain('Nexus 7')
  })

  it('displays in stock items only', () => {
    render(<ProductTable
      filterText=""
      inStockOnly
      products={productsFixture}
    />, node)
    expect(node.textContent)
      .toContain('Sportsball')
        .toContain('Football')
        .toContain('Baseball')
        .toNotContain('Basketball')
      .toContain('Electronics')
        .toContain('iPod Touch')
        .toNotContain('iPhone 5')
        .toContain('Nexus 7')
  })

  it('filters by product name', () => {
    render(<ProductTable
      filterText="Bas"
      inStockOnly={false}
      products={productsFixture}
    />, node)
    expect(node.textContent)
      .toContain('Sportsball')
        .toNotContain('Football')
        .toContain('Baseball')
        .toContain('Basketball')
      .toNotContain('Electronics')
        .toNotContain('iPod Touch')
        .toNotContain('iPhone 5')
        .toNotContain('Nexus 7')
  })

  it('filters by in stock product name', () => {
    render(<ProductTable
      filterText="Bas"
      inStockOnly
      products={productsFixture}
    />, node)
    expect(node.textContent)
      .toContain('Sportsball')
        .toNotContain('Football')
        .toContain('Baseball')
        .toNotContain('Basketball')
      .toNotContain('Electronics')
        .toNotContain('iPod Touch')
        .toNotContain('iPhone 5')
        .toNotContain('Nexus 7')
  })

  it('filters everything when there are no matches', () => {
    render(<ProductTable
      filterText="Flarbus"
      inStockOnly={false}
      products={productsFixture}
    />, node)
    expect(node.textContent)
      .toNotContain('Sportsball')
        .toNotContain('Football')
        .toNotContain('Baseball')
        .toNotContain('Basketball')
      .toNotContain('Electronics')
        .toNotContain('iPod Touch')
        .toNotContain('iPhone 5')
        .toNotContain('Nexus 7')
  })
})
