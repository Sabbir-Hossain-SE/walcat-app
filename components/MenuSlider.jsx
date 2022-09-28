import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import bookIcon from '../public/assets/icons/book.svg';
import fArrowIcon from '../public/assets/icons/forward-aarow.svg';
import applianceIcon from '../public/assets/icons/hoom-appliances.svg';
import laptopIcon from '../public/assets/icons/laptop.svg';
import v2img2 from '../public/assets/images/11.png';
import imgMain from '../public/assets/images/all-season-15.png';
import v2img1 from '../public/assets/images/image-3.png';
import sideIMG1 from '../public/assets/images/image-4.png';
import sideIMG2 from '../public/assets/images/image-5.png';
import img2 from '../public/assets/images/img2.png';
import img3 from '../public/assets/images/img3.png';
import img5 from '../public/assets/images/img5.png';
import styles from '../styles/menu-slider.module.css';
import CustomSlider from './Slider';

const MenuSlider = () => {
    const router = useRouter();
    const url = router.asPath;
    const v1Slider = [imgMain, img2, img3.img4, img5];
    const v2Slider = [v2img1, v2img2];
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.menu_slider}>
                    <div className={styles.menu}>
                        <ul className={styles.menu_ul}>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={laptopIcon} />
                                    Laptop and Desktop
                                </div>
                                <div>
                                    <Image src={fArrowIcon} />
                                </div>
                            </li>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={applianceIcon} />
                                    home living
                                </div>
                                {/* <div>
                                    <Image src='/assets/icons/forward-aarow.svg' />
                                    </div> */}
                            </li>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={applianceIcon} />
                                    Laptop and Desktop
                                </div>
                                <div>
                                    <Image src={fArrowIcon} />
                                </div>

                                {/* droup down */}
                                <ul className={styles.menu_first_ul}>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>
                                    </li>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>

                                        {/* second drop d */}
                                        <ul className={styles.menu_2dn_ul}>
                                            <li className={styles.menu_2nd_ul_li}>
                                                <div className={styles.menu_item}>
                                                    <Image src={laptopIcon} />
                                                    Laptop and Desktop
                                                </div>
                                                {/* <div>
                                                <Image src='/assets/icons/forward-aarow.svg' />
                                                </div> */}
                                            </li>
                                            <li className={styles.menu_2nd_ul_li}>
                                                <div className={styles.menu_item}>
                                                    <Image src={laptopIcon} />
                                                    Laptop and Desktop
                                                </div>
                                                {/* <div>
                                                <Image src='/assets/icons/forward-aarow.svg' />
                                                </div> */}
                                            </li>
                                            <li className={styles.menu_2nd_ul_li}>
                                                <div className={styles.menu_item}>
                                                    <Image src={laptopIcon} />
                                                    Laptop and Desktop
                                                </div>
                                                {/* <div>
                                                <Image src='/assets/icons/forward-aarow.svg' />
                                                </div> */}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>
                                    </li>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={bookIcon} />
                                    Book and Stationary
                                </div>
                                <div className={styles.menu_item}>
                                    <Image src={fArrowIcon} />
                                </div>
                            </li>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={laptopIcon} />
                                    Laptop and Desktop
                                </div>
                                <div>
                                    <Image src={fArrowIcon} />
                                </div>
                            </li>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={applianceIcon} />
                                    home living
                                </div>
                                {/* <div>
                                    <Image src='/assets/icons/forward-aarow.svg' />
                                    </div> */}
                            </li>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={applianceIcon} />
                                    Laptop and Desktop
                                </div>
                                <div>
                                    <Image src={fArrowIcon} />
                                </div>

                                {/* droup down */}
                                <ul className={styles.menu_first_ul}>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>
                                    </li>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>

                                        {/* second drop d */}
                                        <ul className={styles.menu_2dn_ul}>
                                            <li className={styles.menu_2nd_ul_li}>
                                                <div className={styles.menu_item}>
                                                    <Image src={laptopIcon} />
                                                    Laptop and Desktop
                                                </div>
                                                {/* <div>
                                                <Image src='/assets/icons/forward-aarow.svg' />
                                                </div> */}
                                            </li>
                                            <li className={styles.menu_2nd_ul_li}>
                                                <div className={styles.menu_item}>
                                                    <Image src={laptopIcon} />
                                                    Laptop and Desktop
                                                </div>
                                                {/* <div>
                                                <Image src='/assets/icons/forward-aarow.svg' />
                                                </div> */}
                                            </li>
                                            <li className={styles.menu_2nd_ul_li}>
                                                <div className={styles.menu_item}>
                                                    <Image src={laptopIcon} />
                                                    Laptop and Desktop
                                                </div>
                                                {/* <div>
                                                <Image src='/assets/icons/forward-aarow.svg' />
                                                </div> */}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>
                                    </li>
                                    <li className={styles.menu_first_ul_li}>
                                        <div className={styles.menu_item}>
                                            <Image src={laptopIcon} />
                                            Laptop and Desktop
                                        </div>
                                        <div>
                                            <Image src={fArrowIcon} />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.menu_ul_li}>
                                <div className={styles.menu_item}>
                                    <Image src={bookIcon} />
                                    Book and Stationary
                                </div>
                                <div className={styles.menu_item}>
                                    <Image src={fArrowIcon} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.slider}>
                        {url !== '/v2' ? (
                            <CustomSlider images={v1Slider} />
                        ) : (
                            <div className={styles.slider_Wrapper}>
                                <CustomSlider images={v2Slider} isVersionV2 />
                                <div className={styles.slider_left_img_wrapper}>
                                    <div className={styles.slider_img}>
                                        <Image src={sideIMG1} />
                                    </div>
                                    <div className={styles.slider_img}>
                                        <Image src={sideIMG2} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuSlider;
