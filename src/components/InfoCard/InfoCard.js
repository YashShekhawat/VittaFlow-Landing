import * as classes from './InfoCard.module.css'
import num1 from '../../assets/Number.svg'
import num2 from '../../assets/Number-1.svg'
import num3 from '../../assets/Number-2.svg'

const InfoCard = (props) => {
    return (
        <div className={classes.container}>
            {props.con.map((data, key) =>
                <div key={key} className={classes.card}>
                    <div className={classes.topPart}><img className={classes.img} src={data.img} alt="" /><h3>{data.heading}</h3></div>
                    <div className={classes.bottomPart}><p className={classes.subText1}>{data.content}</p></div>
                </div>
            )}
        </div>
    )
}

export default InfoCard
