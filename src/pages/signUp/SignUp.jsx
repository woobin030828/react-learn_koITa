import React from 'react';
import {useForm} from 'react-hook-form'

const SignUp = () => {

    console.log(useForm())

    const {register, handleSubmit, getValues, formState : {isSubmitting, isSubmitted, errors}} = useForm({mode: "onChnage"})
    const handleSumbmitForm = handleSubmit(async (data) => {
        console.log(data)
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/; 

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSumbmitForm}>
                <label htmlFor="">
                    <p>이메일</p>
                    <input type="text" placeholder='이메일 입력' name="email"  {...register("email", {
                        required: true,
                        pattern : {
                            value : emailRegex
                        }
                    })}/>
                    {console.log("errors : ", errors)}
                    {errors && errors?.email?.type === "required" && (
                        <p>이메일을 입력하세요.</p>
                    )}
                    {errors && errors?.email?.type === "pattern" && (
                        <p>이메일 양식에 맞게 입력해주세요</p>
                    )}
                </label>
                <label htmlFor="">
                    <p>비밀번호</p>
                    <input type="password" placeholder='비밀번호 입력' name="password" {...register("password", {
                        required: true,
                        pattern : {
                            value : passwordRegex
                        }
                    })}/>
                    {errors && errors?.email?.type === "required" && (
                        <p>비밀번호를 입력하세요.</p>
                    )}
                    {errors && errors?.email?.type === "pattern" && (
                        <p>소문자, 대문자, 특수문자를 각 하나씩 포함한 8자리 이상이어야합니다.</p>
                    )}
                </label>
                <label htmlFor="">
                    <p>비밀번호 확인</p>
                    <input type="text" placeholder='비밀번호 확인' name="passwordConfirm"  {...register("passwordConfirm", {
                        required: true,
                        validate: {
                            matchPassword  : (passwordConfirm) => {
                            const {password} = getValues();
                            console.log(getValues)
                            return password === passwordConfirm
                            }}
                        }
                    )}/>
                    {errors && errors?.passwordConfirm?.type === "matchPassword" && (
                        <p>비밀번호가 일치하지 않습니다.</p>
                    )}
                </label>
                <div>
                    <p>취미</p>
                    <label>
                        <input type="checkbox" name="hobbys" value={"soccer"} {...register("bobbies")}/>
                        <span>축구</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobbys" value={"baseball"} {...register("bobbies")}/>
                        <span>야구</span>
                    </label>
                    <label>
                        <input type="checkbox" name="hobbys" value={"basketball"} {...register("bobbies")}/>
                        <span>농구</span>
                    </label>
                </div>
                <button disabled={isSubmitting}>회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;