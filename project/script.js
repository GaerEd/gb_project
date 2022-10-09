// 'use strict';

const goods = [
  { product_name: 'Shirt', price: 150 },
  { product_name: 'Socks', price: 50 },
  { product_name: 'Jacket', price: 350 },
  { product_name: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor ({ product_name = '', price = 0 }) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class="goods-item">
            <h3>Наименование товара: ${this.product_name}</h3>
            <p>Цена товара: ${this.price}</p>
          </div>`;
  }
};

const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

function service(callback) {
  xhr = new XMLHttpRequest();
  xhr.open('GET', GET_GOODS_ITEMS);
  xhr.send();
  xhr.onload = () => {
    callback(JSON.parse(xhr.response));
  }
};

class GoodsList {
  list = [];
  fetchGoods(callback) {
    service((data) => {
      this.list = data;
      callback()
    })
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
goodsList.fetchGoods(() => {
  goodsList.render();
});

goodsList.sumPrice();


// const element = goodsList.calculatePrice();  решение преподавателя
