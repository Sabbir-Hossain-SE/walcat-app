/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import React from 'react';
import rArrowIcon from '../public/assets/icons/arrow-down.svg';
import dArrowIcon from '../public/assets/icons/carnov-down.svg';
import cartIcon from '../public/assets/icons/cart.svg';
import menuIcon from '../public/assets/icons/menu.svg';
import percentCircle from '../public/assets/icons/percent-circle.svg';
import srcIcon from '../public/assets/icons/search.svg';
import userIcon from '../public/assets/icons/user.svg';
import brandLogo from '../public/assets/images/walcart-logo.png';
import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.top_left}>
                        <ul>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Featured Products</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.top_right}>
                        <div className={styles.top_tracking}>Order Tracking</div>
                        <select className={styles.country}>
                            <option>BD</option>
                            <option>EN</option>
                            <option>US</option>
                        </select>
                        <select className={styles.currency}>
                            <option>USD</option>
                            <option>TAKA</option>
                        </select>
                    </div>
                </div>
                {/* search bar design */}
                <div className={styles.search}>
                    <a href="#" className={styles.search_left}>
                        <Image src={brandLogo} alt="Image" />
                    </a>
                    <div className={styles.search_middle}>
                        <input placeholder="What do you want to order?" />
                        <Image src={srcIcon} alt="Search" />
                        <button type="submit">search</button>
                    </div>
                    <div className={styles.search_right}>
                        <div className={styles.search_right_user}>
                            <Image src={userIcon} />
                            <div className={styles.search_right_user_content}>
                                <h4>Sign in</h4>
                                <h5>Account</h5>
                            </div>
                        </div>
                        <div className={styles.search_right_cart}>
                            <img src="../assets/icons/favorite.svg" />
                            <span>1</span>
                        </div>
                        <div className={styles.search_right_fav}>
                            <Image src={cartIcon} />
                            <img src="../assets/icons/cart.svg" />
                            <span>1</span>
                        </div>
                    </div>
                </div>

                {/* nav bar */}

                <div className={styles.navbar}>
                    <div className={styles.navbar_left}>
                        <div className={styles.navbar_left_btn}>
                            <Image src={menuIcon} />
                            <p>Top Categories</p>
                            <Image src={dArrowIcon} />
                        </div>
                    </div>
                    <div className={styles.navbar_middle}>
                        <ul>
                            <li>
                                Exclusive Deals
                                <Image src={rArrowIcon} />
                            </li>
                            <li>
                                Smart Watches
                                <Image src={rArrowIcon} />
                            </li>
                            <li>Call Phone</li>
                            <li>Headphone</li>
                        </ul>
                    </div>
                    <div className={styles.navbar_right}>
                        <Image src={percentCircle} />
                        <div className={styles.navbar_right_weekend}>
                            <h5>only this weekend</h5>
                            <h4>Super Discount</h4>
                        </div>
                        <Image className={styles.navbar_right_arrow} src={rArrowIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
