import { HButtonLight } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
import { useState } from 'react'
import styles from '../../styles/About.module.css'
import Button from './Button'
import { Date } from './Date'
import Timer from './Timer'

const About = () => {
    const [showTimer, setShowTimer] = useState(true)

    return (
        <div className={styles.container} id = 'AboutUS'>
            <div className={styles.title_container}>
                <h1 className={styles.title} >
                    What is <span>Tharang23&nbsp;?</span>
                </h1>

                <p className={styles.content}>
                Tharang is a largest Techno Cultural Fest conducted annually by the
          students of Jyothi Engineering College, Thrissur. Tharang, since its
          inception, has evolved into one of the biggest events for tech-wits
          and creative minds across the state. The new edition "Tharang 2023" is
          not different either. The fest brings together the latest in
          technology, automobiles, workshop, games, arts, dance and music, all
          inside a jam packed session of two days, march 31st and apri 1st.
                    <br />
                    

                </p>
                {/* <div className={styles.btn_container}>
                    <HButtonLight name="About Us" icon = {<ImArrowUpRight2/>}/>
                </div> */}
            </div>
            <div className={styles.date_container}>
                <div className={styles.left_date} >
                    <Date day="10" month="November" subtxt="th" />
                </div>
                <hr className={styles.line} />
                <div className={styles.right_date} >
                    <Date day="11" month="November" subtxt="st" />
                </div>
            </div>
            <br />
            <div className={styles.timer_container}>
                {showTimer ? (
                    <Timer setShowTimer={setShowTimer} />
                ) : (
                    <h1 className={styles.title}>
                        It&#39;s Show<span>time</span>
                    </h1>
                )}
            </div>
        </div>
    )
}

export default About