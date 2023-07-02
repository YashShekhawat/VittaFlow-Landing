import * as classes from './VittaFlow5.module.css'
import footerImg from '../../assets/footerImg.png'

const VittaFlow5 = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.wrapper}>
                <div className={classes.textContainer}>
                    <h1 className={classes.heading1}>Join the crypto marketand receive a bonus.</h1>
                    <p className={classes.subText2}>Various kinds of crypto markets that you can get without limits</p>
                </div>
                <div className={classes.buttonContainer}>
                    <button className={classes.buttonStyle}>Get Started</button>
                </div>
            </div>
            <div className={classes.imageContainer}>
                <img src={footerImg} alt="" />
            </div>
        </div>

    )
}

export default VittaFlow5
