import React, { useState } from 'react';
import Product from './Product';

const ProductContainer = () => {

    const [store, setStore] = useState({
    income : 0,
    productList : [
      {
        name : "노트북",
        price: 300000
      },
      {
        name : "키보드",
        price: 50000
      },
      {
        name : "마우스",
        price: 30000
      },
      {
        name : "스피커",
        price: 75000
      },
      {
        name : "마이크",
        price: 150000
      },
    ]
  })
  const [p, setP] = useState("")
  // 1. store의 상품들을 모두 li 태그로 화면에 출력한다.
  // 2. 사용자에게 input 태그로 구매할 상품을 입력을 받고 엔터를 쳐서
  // productList에 존재하는 상품이라면 productList에 해당 상품을 제거 후
  // 판매 가격만큼 store에 income을 증가시킨다.
  // 3. 거래가 잘 이루어졌는지 p태그를 이용해 출력한다
  // 정상적으로 판매가 완료되었을 경우 "거래 완료" 
  // 판매 목록에 구매할 상품이 없는 경우 "거래 불가"를 출력한다.
  // 모든 상품이 판매가 이루어졌다면 "판매 완료"를 출력한다.
  // 4. 해당 태그는 컴포넌트로 분리시킨다.
    const result = store.productList.map(({name, price}, i) => <Product key={i} name={name} price={price}/>) // 
    const onInput = (e) => {
        const value = e.target.value
        const searchItem = store.productList.find(({name}) => value === name)
        if(e.key === 'Enter') {
            if (searchItem) {
                const updateProductList = store.productList.filter(({name}) => value !== name);
                setStore({
                    income: store.income + searchItem.price,
                    productList: updateProductList
                })
                setP("거래 완료")
                
            } else {
                setP("거래 불가")
            }
            if (store.productList.length === 0) {
                setP("판매 완료")
            }
        }
        
    }
    return (
        <div>
            <h1>총 수익 : {store.income}</h1>
            <div>{result}</div>
            <div>
                <input type="text" onKeyDown={onInput} name="" id="" />
            </div>
            <p>{p}</p>
        </div>
    );
};

export default ProductContainer;