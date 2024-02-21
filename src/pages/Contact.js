export default function Contact(){
    return (
        <div>
            <div className="content-container">
                <div className="outer-border">
                    <div className="inner-container">
                        <h1>Contact</h1>
                        <form>
                            <div className="contact-top">
                                <div className="contact-info">
                                    <label for="fname">First name:</label><br/>
                                    <input type="text" id="fname" name="fname"/><br/>
                                    <label for="lname">Last name:</label><br/>
                                    <input type="text" id="lname" name="lname"/><br/>
                                    <label for="phone">Phone number:</label><br/>
                                    <input type="tel" id="phone" name="phone"
                                    placeholder="1234-56-78-90"
                                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}"></input><br/><br/>
                                </div>
                                <div className="contact-subject">
                                    <p>I am contacting you about:</p>
                                    <input type="radio" id="option1" name="subject" value="Job offer"/>
                                    <label for="option1">A job offer</label><br/>
                                    <input type="radio" id="option2" name="subject" value="business opportunity"/>
                                    <label for="option2">A business opportunity</label><br/>
                                    <input type="radio" id="option3" name="subject" value="pledge"/>
                                    <label for="option3">I want to pledge my allegiance</label><br/><br/>
                                </div>
                            </div>
                            <textarea name="message" rows={8} cols={60} placeholder='Message...'></textarea><br/>
                            
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <label for="vehicle3"> I agree to the Terms of Service</label><br/>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}