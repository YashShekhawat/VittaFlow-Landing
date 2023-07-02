import * as classes from './VittaFlow2.module.css'
import Map from '../../assets/Map.svg'

const VittaFlow2 = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.textContainer}>
                <p className={classes.subText1}>SEND AND RECEIVE</p>
                <h1 className={classes.heading1}>Easily send and receive <span className={classes.specialText}>Cryptocurrency</span></h1>
                <div className={classes.buttonContainer}>
                    <button className={classes.buttonStyle}>Start Now</button>
                </div>
            </div>

            <div className={classes.imageContainer}>
                <img src={Map} alt="" />
            </div>


        </div>
    )
}

export default VittaFlow2
