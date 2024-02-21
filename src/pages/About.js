const Profileimage = require('../Images/ProfileImage.jpg');
const Profileimage2 = require('../Images/Food.jpg');
const Profileimage3 = require('../Images/Hudik.jpg');
export default function About(){
    return (
        <div className="content-container">
            <div className="center-container">
                <div className="outer-border">
                    <div className="inner-container">
                        <article className="aboutme">
                            <h2>Om mig</h2>
                            <p>Hej och välkommen till min CV-sida! Jag heter Fredrik Halvarsson och för närvarande studerar jag till .NET utvecklare på yrkeshögskolan Edugrade. Min bakgrund är inom restaurangbranchen där jag har jobbat sedan 2011, med allt från kock, bartender till restaurangchef. IT-intresset har dock alltid funnits där. Fritiden spenderar jag gärna framför datorn och spelar något strategispel eller ett spel med bra möjlighet att "theory crafta", där jag får tänka fram smarta lösningar. Jag försöker dock ta mig till gymmet ett par gånger i veckan. Utöver det har jag ett stort intresse för språk och musik... </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corporis, facere delectus quod beatae unde obcaecati numquam iste quo in necessitatibus ducimus id fuga rem autem architecto tenetur magni non.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe explicabo harum rem, laboriosam culpa, quidem labore possimus quasi ducimus dolores repudiandae dignissimos, accusantium soluta eius earum praesentium accusamus doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquam soluta eum, a exercitationem repudiandae animi incidunt corrupti eligendi iste minima obcaecati accusamus eius ea dolorem reiciendis natus quos adipisci!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus nemo pariatur expedita, dicta veritatis? Excepturi consequatur, pariatur vel impedit praesentium esse ipsam sapiente voluptas quam, illum dolore perspiciatis ut!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum corporis, facere delectus quod beatae unde obcaecati numquam iste quo in necessitatibus ducimus id fuga rem autem architecto tenetur magni non.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe explicabo harum rem, laboriosam culpa, quidem labore possimus quasi ducimus dolores repudiandae dignissimos, accusantium soluta eius earum praesentium accusamus doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquam soluta eum, a exercitationem repudiandae animi incidunt corrupti eligendi iste minima obcaecati accusamus eius ea dolorem reiciendis natus quos adipisci!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus nemo pariatur expedita, dicta veritatis? Excepturi consequatur, pariatur vel impedit praesentium esse ipsam sapiente voluptas quam, illum dolore perspiciatis ut!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe explicabo harum rem, laboriosam culpa, quidem labore possimus quasi ducimus dolores repudiandae dignissimos, accusantium soluta eius earum praesentium accusamus doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquam soluta eum, a exercitationem repudiandae animi incidunt corrupti eligendi iste minima obcaecati accusamus eius ea dolorem reiciendis natus quos adipisci!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus nemo pariatur expedita, dicta veritatis? Excepturi consequatur, pariatur vel impedit praesentium esse ipsam sapiente voluptas quam, illum dolore perspiciatis ut!</p>
                        </article>
                    </div>
                </div>
                <div className="right-column">
                    <div className="outer-border">
                        <div className="inner-container">
                            <div className="about-images">
                                <img src={Profileimage} alt="ProfileImage" width="150px" style={{border: '2px solid #e2ab74', borderRadius: '7px'}}/>
                                <img src={Profileimage2} alt="ProfileImage2" width="150px" style={{border: '2px solid #e2ab74', borderRadius: '7px'}}/>
                                <img src={Profileimage3} alt="ProfileImage3" width="150px" style={{border: '2px solid #e2ab74', borderRadius: '7px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}