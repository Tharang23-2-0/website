import styles from './TL.module.css';
import { useState } from 'react';
import classNames from 'classnames';
import Dcard from '@components/Accessories/dcard';
import Ecard from '@components/Accessories/ecard';
import { event } from '@data/timeline';

export default function Timeline() {
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleDepartmentClick = (department) => {
        setSelectedDepartment(department);
    };

    return (
        <div className={styles.main} id="Events">
            <div className={styles.header}>
                <p className={styles.err}>Timeline</p>
            </div>
            <div className={styles.tabs}>
                <div className={styles.departments}>
                    {['mech', 'civil', 'computer', 'ad', 'mr', 'robo'].map((department) => (
                        <div
                            key={department}
                            onClick={() => handleDepartmentClick(department)}
                        >
                            <Dcard name={department} day={selectedDepartment === department} />
                        </div>
                    ))}
                </div>
                <div className={styles.events}>
                    {event.map((item) => {
                        if (!selectedDepartment || item.department === selectedDepartment) {
                            return (
                                <div
                                    key={item.name}
                                    className={classNames(
                                        styles.events,
                                        !item.department && styles.events2,
                                    )}
                                >
                                    <Ecard
                                        name={item.name}
                                        time={item.time}
                                        link={item.link}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className={styles.mobile}>
                {/* Mobile version code */}
            </div>
        </div>
    );
}
