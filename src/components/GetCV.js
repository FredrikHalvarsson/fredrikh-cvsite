import CVJson from "../json/CV.json"
import { Accordion, AccordionBody, AccordionCollapse, AccordionButton, AccordionItem } from 'react-bootstrap';
import './accordion.css';
export default function GetCV({dataType}){
    console.log(dataType)
    const CV = () => {
        if (dataType === "Jobs"){
            return(
                // <> 
                //     <h1 style={{textAlign: "center"}}>Employment history</h1>
                //     {CVJson.Jobs.map((job)=>(
                //         <ul>
                //             <li key={job.Id}>
                //                 <h2>{job.Title}</h2>
                //                 <p>{job.Company}</p>
                //                 <p>{job.Date}</p>
                //             </li>
                //         </ul>
                //     ))}
                // </>
                <div> 
                    <h1>Employment history</h1>
                    {CVJson.Jobs.map((item)=>(
                        <Accordion flush>
                            <AccordionItem key={item.Id}>
                                <AccordionButton>
                                        <h2>{item.Title}</h2>
                                </AccordionButton>
                                <AccordionCollapse>
                                    <AccordionBody>
                                        <p>{item.Company}</p>
                                        <p>{item.Date}</p>
                                        <p>{item.Description}</p>
                                    </AccordionBody>
                                </AccordionCollapse>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            )}
        else if (dataType === "Education"){
            return(
                <>
                    <h1 style={{textAlign: "center"}}>Education</h1>
                    {CVJson.Education.map((edu)=>(
                        <ul>
                            <li key={edu.Id}>
                                <h2>{edu.Title}</h2>
                                <p>{edu.School}</p>
                                <p>{edu.Date}</p>
                            </li>
                        </ul>
                    ))}
                </>
            )
        }
        else if (dataType === "Languages"){
            return(
                <>
                    <h1 style={{textAlign: "center"}}>Languages</h1>
                    {CVJson.Languages.map((item)=>(
                        <ul>
                            <li key={item.Id}>
                                <h2>{item.Language}</h2>
                                <p>{item.Info}</p>
                            </li>
                        </ul>
                    ))}
                </>
            )
        }
    }
  return (
    <div>
        {CV()}
    </div>
  )
}