import * as classes from './VittaFlowAbout.module.css'
import num1 from '../../assets/Number.svg'
import num2 from '../../assets/Number-1.svg'
import num3 from '../../assets/Number-2.svg'
import InfoCard from '../InfoCard'
import AboutCard from '../AboutCard'


const VittaFlowAbout = () => {
    const data = [
        {
            heading: "Open Source",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
            img: num1
        },
        {
            heading: "Worldwide",
            content: "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
            img: num2
        },
        {
            heading: "Transparent",
            content: "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
            img: num3
        },
        {
            heading: "Community Driven",
            content: "We always help you save and manage your finances, we have a system that can manage expenses that are limited each month",
            img: num3
        }
    ]

    return (
        <div className={classes.mainContainer}>
            <div className={classes.wrapper}>
                <div className={classes.textContainer}>
                    <h1 className={classes.heading1}>About <span className={classes.specialText}>Vitta Flow</span></h1>
                    <p className={classes.subText2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae dolor non aliquam. Malesuada.</p>
                </div>
                <div className={classes.subHeading}>
                    <h3 className={classes.heading2}>What drives Vitta Flow?</h3>
                    <p className={classes.subText3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
                </div>
                <div className={classes.container}>
                    <AboutCard con={data} />
                </div>
            </div>
        </div >

    )
}

export default VittaFlowAbout 
