import React, { Fragment } from "react"
//////////////////////////////
/// 문자열 처리 관련 메소드 ///
//////////////////////////////

/* 자연수(1,2,3)를 서수(1st, 2nd, 3rd)로 변경하는 Formatter */
//export function rankFormatter(rank){
export const rankFormatter = (rank) => {

    var result = "";    
    var resultTxt = ""; 
    if(rank == 1) {
        result = rank;        
        resultTxt = "st";        
    } else if(rank == 2){
        result = rank;
        resultTxt = "nd";        
    } else if(rank == 3){
        result = rank;
        resultTxt = "rd";        
    } else{
        result = rank;
        resultTxt = "th";                
    }
    
return (
    <Fragment>
        {result} <em>{resultTxt}</em>
    </Fragment>
    )
}

/* Data 분할 함수 ( string => array) */
export function Split(value, sep){
    if(value === null)
        return ""

    if(value === "")
    return ""

    const arryVal = value.split(sep)
    return arryVal
}