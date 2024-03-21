import React,{useContext} from 'react'
import Cont from './Cont';


export default function P2() {
    const theme =useContext(Cont)
    return (
      <div className={theme?"dark":"light"}>P2</div>
    )
}
