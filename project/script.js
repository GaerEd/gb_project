'use strict';

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor ({ title = '', price = 0 }) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item">
            <h3>Наименование товара: ${this.title}</h3>
            <p>Цена товара: ${this.price}</p>
          </div>`;
  }
};

class GoodsList {
  list = [];
  fetchGoods() {
    this.list = goods;
  }
  render() {
    let goodsList = this.list.map(item => {
      const goodsItem = new GoodsItem(item)
      return goodsItem.render();
    }).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
  sumPrice() {
    let initialValue = 0;
    const sum = this.list.reduce(function(acc, currentValue) {
      return acc + currentValue.price
    }, initialValue)
    console.log(sum);
  }
  // calculatePrice() {  решение преподавателя
  //   return this.list.reduce((prev, { price }) => {
  //     return prev + price;
  //   }, 0)
  // }
};

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
goodsList.sumPrice();
// const element = goodsList.calculatePrice();  решение преподавателя
