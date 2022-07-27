import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';

export default function Dropdown(props) {
    const dropMenuItem = useRef();
    const [dropclass,setDropclass]=useState("");
    const dropdownfunc = (e) => {   
        setDropclass("open");
        view("open");
    }
    const dropdownblur = (e) => {
        setTimeout(()=>{
            setDropclass("");
            view("");
        },200)
        
    }
    const view = ( arg ) =>{
        props.view(arg);
    }
    const toHashHandler = (url) =>{
        if(url !== "/about" && url !== ""){            
            setTimeout(()=>{
                let anchorElement = document.getElementById(url);
                if(anchorElement){
                   anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});  
                }                
            },2000);            
        }
    }
    return (
        <>
            <a className={`header-dropbtn ${dropclass}`} href='/#' onClick={(e) => {e.preventDefault(); dropdownfunc()} } onBlur={(e) => dropdownblur(e)}>
                {props.title}                                   
            </a>
            <ul className={`header-dropmenu ${dropclass}`} ref={dropMenuItem}>
                {props.content.map((item)=> (
                    <li key={item.id}><Link className='nav-link' to={item.url} onClick={()=> toHashHandler(item.hash)}>{item.title}</Link></li>
                ))}              
                <div className='header-dropmenu-bg'></div>
            </ul>
        </>
    )
}