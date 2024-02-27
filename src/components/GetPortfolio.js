import './accordion.css';
import PortfolioJson from "../json/Portfolio.json"
import { Accordion, AccordionBody, AccordionCollapse, AccordionButton, AccordionItem } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios"; 
export default function GetPortfolio({}){
    const [loading, setLoading] = useState(false); 
    const [posts, setPosts] = useState([]); 
    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const response = await axios.get("https://api.github.com/users/FredrikHalvarsson/repos");
            setPosts(response.data);
            setLoading(false);
        };
        loadPosts();
    }, []);

    const Portfolio = () => {
        return(
        <> 
            <div className="App"> 
                {loading ? ( 
                    <h4>Loading...</h4> 
                ) : ( 
                    <div className='accordion-container'>
                        <h1>Portfolio</h1>
                        {posts.map((item) => (
                            <>
                                <Accordion flush="true">
                                    <AccordionItem key={item.id}>
                                        <AccordionButton>
                                                {item.name}
                                        </AccordionButton>
                                        <AccordionCollapse>
                                            <AccordionBody>
                                                <p>{item.description}</p>
                                                <a href={item.html_url}>To Repository</a>
                                            </AccordionBody>
                                        </AccordionCollapse>
                                    </AccordionItem>
                                </Accordion>
                            </>
                        ))}
                    </div>
                )} 
            </div> 
        </> 
        )
    }
  return (
    <div>
        {Portfolio()}
    </div>
  )
}