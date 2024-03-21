
import React,{useContext} from 'react'
import Cont from './Cont';

export default function P1() {
    const theme =useContext(Cont)
  return (
    <div className={theme?"dark":"light"}>P1</div>
  )
}
