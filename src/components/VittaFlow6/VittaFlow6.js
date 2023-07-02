import * as classes from './VittaFlow6.module.css'
import num1 from '../../assets/Number.svg'
import num2 from '../../assets/Number-1.svg'
import num3 from '../../assets/Number-2.svg'
import InfoCard from '../InfoCard'

const VittaFlow6 = () => {
    const data = [
        {
            heading: "Simply Create An Account",
            content: "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
            img: num1
        },
        {
            heading: "First Time Deposit",
            content: "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
            img: num2
        },
        {
            heading: "Withdraw Your Profit",
            content: "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
            img: num3
        }
    ]

    return (
        <div className={classes.mainContainer}>
            <div className={classes.wrapper}>
                <div className={classes.textContainer}>
                    <h1 className={classes.heading1}>How does <br /> <span className={classes.specialText}>Vitta Flow</span> work</h1>
                    <p className={classes.subText2}>Vitta Flow has been providing the highest quality services for more than 7 years. There are 16 million investors who trust us in more than 150 countries.</p>
                </div>
                <div className={classes.container}>
                    <InfoCard con={data} />
                </div>
            </div>
        </div >

    )
}

export default VittaFlow6
