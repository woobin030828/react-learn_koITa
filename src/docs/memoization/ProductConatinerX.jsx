import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductConatinerX = () => {

    
    const containerDivStyle = {
        width: "500px",
        height: "300px",
        margin: "20px auto"
    }
    
    const productStyle = {
        border: "solid 1px lightgray",
        padding: "30px",
        lineHeight : "1.3"
    }

    const divStyle = {
        border : "solid 1px blue",
        height : "60px",
        display : "flex",
        justifyContent : "space-evenly",
        alignItem : "center",
        marginTop : "20px",
        padding : "20px"
    }

    const buttonStyle = {
        width : "40px",
        height : "40px"
    }

    const [like, setLike] = useState(15)
    const [unLike, setUnLike] = useState(150)

    const increaseLike = () => setLike(like + 1)
    const increaseUnLike = () => setUnLike(unLike + 1)

    const [amount, setAmount] = useState(1)
    const [coupon, setCoupon] = useState(0)
    
    // useMemo 값
    const amountMemo = useMemo(() => amount, [amount])
    const couponMemo = useMemo(() => coupon, [coupon])
    // useCallback 함수
    const addAmountCallback = useCallback(() => { 
        console.log("amount 실행")
        setAmount(amount + 1) 
    }, [amount])
    const subtractAmountCallback = useCallback(() => { 
        console.log("amount 실행")
        amount === 0 ? setAmount(0) : setAmount(amount- 1) 
    }, [amount])
    const addCouponCallback = useCallback(() => { 
        console.log("coupon 실행")
        setCoupon(coupon + 1) 
    }, [coupon])
    const subtractCouponCallback = useCallback(() => { 
        console.log("coupon 실행")
        coupon === 0 ? setCoupon(0) : setCoupon(coupon- 1) 
    }, [coupon])

    const props = { divStyle, buttonStyle, addAmountCallback, subtractAmountCallback, addCouponCallback, subtractCouponCallback, amountMemo, couponMemo }

    console.log("부모 랜더링")
    return (
        <div style={containerDivStyle}>
            <div style={productStyle}>
                <p>[책] 열 아홉 스물, 그 사이 스물 하나</p>
                <p>저자 : 이승찬</p>
                <button onClick={increaseLike}>좋아요 {like}</button>
                <button onClick={increaseUnLike}>싫어요 {unLike}</button>
                <Amount {...props}/>
            </div>
        </div>
    );
};

export default ProductConatinerX;