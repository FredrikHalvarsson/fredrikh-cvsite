import { React, useState } from "react"
import Profileimage from './ProfileImage.jpg'
let clickCount = 0;

export default function Modal(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const openModal = () => {
    //     clickCount===9 ? setModalIsOpen(true) : clickCount++;
    //     return(console.log('modal opened'))
    // };
    const closeModal = () => {
        setModalIsOpen(false);
        clickCount=0;
        return(console.log('modal closed'))
    };
    const HandleOnClick = () => {
        
        
        console.log(clickCount)

        if(!modalIsOpen) return (((clickCount===9 ? setModalIsOpen(true) : clickCount++)), null);
        else 
            return(
                null
            );
    }

    if (!modalIsOpen)return(
        <>
        <img className='pfp' src={Profileimage} alt="Profileimage" onClick={HandleOnClick}/>
        </>
    )
    else return(
        <>
        <img className='pfp' src={Profileimage} alt="Profileimage" onClick={HandleOnClick}/>
        <script>{document.body.style.background = 'radial-gradient(red, black)'}</script>
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}>
                <div style={{background: "linear-gradient(30deg, #242228,#372624)", padding:20, borderRadius:5}}>
                    <p>Please stop poking me!</p>
                    <button onClick={closeModal} style={{background: "#e2ab74", borderRadius: 10}}>Close</button>
                </div>
        </div>
        </>
    )
}