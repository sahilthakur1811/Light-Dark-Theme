import React,{useContext} from 'react'
import Cont from './Cont';

export default function Nav() {
    const theme =useContext(Cont)
    console.log("Navbar called");
  return (
    <div className={theme?"dark":"light"}>Nav</div>
  )
}
