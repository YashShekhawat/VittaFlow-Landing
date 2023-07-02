import * as classes from './VittaFlow3.module.css'
import customer from '../../assets/customer.svg'

const VittaFlow3 = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.textContainer}>
                <p className={classes.subText1}>OUR FEATURE</p>
                <h1 className={classes.heading1}>Communication via automatic</h1>

                <div className={classes.textAndImage}>
                    <div className={classes.textPart}>
                        <h1 className={classes.specialText}> <span className={classes.heading1}> Actions by AI </span></h1>
                        <p className={classes.subText2}>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional
                            assistance sufficient not. Letter of on become he tended active enable to.
                        </p>
                    </div>
                    <div className={classes.imageContainer}>
                        <img src={customer} alt="" />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default VittaFlow3
