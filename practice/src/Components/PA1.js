import React,{useContext} from 'react'
import Cont from './Cont';

export default function PA1() {
    const theme =useContext(Cont)
    return (
      <div className={theme?"dark":"light"}>PA1</div>
    )
}
