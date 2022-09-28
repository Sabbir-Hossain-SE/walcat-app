import Image from 'next/image';
import React from 'react';
import dressIcon from '../public/assets/icons/dress.png';
import elecIcon from '../public/assets/icons/electronic.png';
import fastFoodIcon from '../public/assets/icons/fast-food.png';
import popIcon from '../public/assets/icons/foo-box.png';
import laptop from '../public/assets/icons/laptop.png';
import avatarIcon from '../public/assets/icons/profile.png';
import basketIcon from '../public/assets/icons/shopping-basket.png';
import styles from '../styles/popular-category.module.css';

const PopularCategory = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>Popular Product Categories</h3>
                <div className={styles.card_wr}>
                    <div className={styles.card_item}>
                        <Image src={elecIcon} />
                        <h5>Electronics Appliances</h5>
                    </div>
                    <div className={styles.card_item}>
                        <Image src={avatarIcon} />
                        <h5>Electronics Appliances</h5>
                    </div>
                    <div className={styles.card_item}>
                        <Image src={dressIcon} />
                        <h5>Electronics Appliances</h5>
                    </div>
                    <div className={styles.card_item}>
                        <Image src={popIcon} />
                        <h5>Electronics Appliances</h5>
                    </div>
                    <div className={styles.card_item}>
                        <Image src={avatarIcon} />
                        <h5>Electronics Appliances</h5>
                    </div>
                    <div className={styles.card_item}>
                        <Image src={basketIcon} />
                        <h5>Electronics Appliances</h5>
                    </div>
                    <div className={styles.card_item}>
                        <Image src={laptop} />
                        <h5>Electronics Appliances</h5>
                    </div>
                    <div className={styles.card_item}>
                        <Image src={fastFoodIcon} />
                        <h5>Electronics Appliances</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategory;
