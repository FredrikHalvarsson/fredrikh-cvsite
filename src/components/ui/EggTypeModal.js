import { useState } from "react";
export default function Modal() {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const closeModal = () => {
        setModalIsOpen(false);
        return(console.log('modal closed'))
    };
    if (!modalIsOpen) return null;
    return (
        <>
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
                    <p style={{color: 'white'}}>You found the easter egg! Good job!</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <button onClick={closeModal} style={{background: "#e2ab74", borderRadius: 10}}>Continue</button>
                    <a href='https://www.youtube.com/watch?v=8ybW48rKBME'><button style={{background: "#e2ab74", borderRadius: 10, alignSelf: 'right'}}>Close</button></a>
                    </div>
                </div>
        </div>
        </>
    )
}