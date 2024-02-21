import GetCV from '../components/GetCV.js'
export default function CV(){
    return (
        <div className="content-container">
            <div className='center-container'>
                <div className="outer-border">
                    <div className="inner-container">
                        <GetCV dataType="Jobs"/>
                    </div>
                </div>
                <div className='right-column'>
                    <div className="outer-border">
                        <div className="inner-container">
                            <GetCV dataType="Education"/>
                        </div>
                    </div>
                    <div className="outer-border">
                        <div className="inner-container">
                            <GetCV dataType="Skills"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}