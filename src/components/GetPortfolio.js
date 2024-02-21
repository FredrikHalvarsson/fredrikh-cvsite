import './accordion.css';
import PortfolioJson from "../json/Portfolio.json"
import { Accordion, AccordionBody, AccordionCollapse, AccordionButton, AccordionItem } from 'react-bootstrap';
export default function GetPortfolio({}){

    const Portfolio = () => {
        return(
            <div className='accordion-container'> 
                <h1>Portfolio</h1>
                {PortfolioJson.Portfolio.map((item)=>(
                    <Accordion flush="true">
                        {/* data-bs-theme="dark"  */}
                        <AccordionItem key={item.Id}>
                            <AccordionButton>
                                    {item.Title}
                            </AccordionButton>
                            <AccordionCollapse>
                                <AccordionBody>
                                    <p>{item.Description}</p>
                                    <a href={item.Link}>To Repository</a>
                                </AccordionBody>
                            </AccordionCollapse>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        )
    }
  return (
    <div>
        {Portfolio()}
    </div>
  )
}