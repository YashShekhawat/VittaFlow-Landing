import * as classes from './VittaFlow.module.css'
import logo from '../../assets/table.svg'
const VittaFlow = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.textContent}>
                <h1 className={classes.heading1}><span className={classes.specialTextColor}>Crypto: </span>Where Innovation Meets Financial Freedom</h1>
                <p className={classes.subText1}>The easy way to buy, sell, send, and receive bitcoin*</p>
            </div>
            <div className={classes.imageConatiner}>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default VittaFlow;
