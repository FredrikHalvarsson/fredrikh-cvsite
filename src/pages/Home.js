import { Link } from 'react-router-dom';
const Profileimage = require('../Images/ProfileImage.jpg');
export default function Home(){
    return (
        <div>
            <div className="content-container">
                <div className='top-container'>
                    <div className="outer-border">
                        <div className="inner-container">
                            <div className='img-container'>
                                <div className="img-border">
                                    <img className='pfp' src={Profileimage} alt="Profileimage"/>
                                </div>
                            </div>
                            <article>
                                <p>Hej och välkommen till min CV-sida!
                                    Jag heter Fredrik Halvarsson och för närvarande studerar jag till .NET utvecklare på yrkeshögskolan Edugrade.
                                    Min backgrund är dock inom restaurangbranchen där jag har jobbar sedan 2011, med allt från kock, bartender och restaurangchef.
                                    IT-intresset har dock alltid funnits där.
                                    Fritiden spenderar jag gärna framför datorn och spelar något strategispel eller spel med bra möjlighet att "theory crafta",
                                    jag försöker dock ta mig till gymmet ett par gånger i veckan.
                                    Utöver det har jag ett stort intresse för språk och musik. <Link to='/About' className='text-link'>Läs mer...</Link></p>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="center-container">
                    <div className="outer-border">
                        <div className="inner-container">
                        </div>
                    </div>
                    <div className='right-column'>
                        <div className="outer-border">
                            <div className="inner-container">
                            </div>
                        </div>
                        <div className="outer-border">
                            <div className="inner-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}