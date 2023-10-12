import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Recipes.module.css";
import React, { useState } from 'react';



const Recipes = () => {
  const navigate = useNavigate();
  const onViewRecipe1Click = useCallback(() => {
    navigate("/Recipes1");
  }, [navigate]);

  const onViewRecipe2Click = useCallback(() => {
    navigate("/Recipes2");
  }, [navigate]);

  const onViewRecipe3Click = useCallback(() => {
    navigate("/Recipes3");
  }, [navigate]);

  const onViewRecipe4Click = useCallback(() => {
    navigate("/Recipes4");
  }, [navigate]);

  const onViewRecipe5Click = useCallback(() => {
    navigate("/Recipes5");
  }, [navigate]);

  return (
    <div className={styles.recipes}>
      <div className={styles.recipesChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupWrapper}>
          <div className={styles.groupParent}>
            <div className={styles.groupContainer}>
              <img className={styles.groupItem} alt="" src="/group-3501.svg" />
              <div className={styles.email}>Email</div>
            </div>
            <div className={styles.groupDiv}>
              <img className={styles.groupItem} alt="" src="/group-3511.svg" />
              <div className={styles.wrapper}>
                <div className={styles.div}>+91 7227019911</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
          <div className={styles.exploreQminFood}>
            Explore Qmin Food world Recipes
          </div>
        </div>
      </div>
      <img
        className={styles.kindpng12149781Icon}
        alt=""
        src="/kindpng-1214978-1@2x.png"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <img
          className={styles.finalPngLogo1Icon}
          alt=""
          src="/finalpnglogo-1@2x.png"
        />
        <div className={styles.groupFrame}>
          <div className={styles.aboutUsParent}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.rice}>Rice</div>
            <b className={styles.recipes1}>Recipes</b>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Home</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild1} />
          <div className={styles.charmsearchParent}>
            <img
              className={styles.charmsearchIcon}
              alt=""
              src="/charmsearch.svg"
            />
            <div className={styles.search}>Search...</div>
          </div>
        </div>
      </div>
      <div className={styles.recipesInner}>
        <div className={styles.vectorParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-3842.svg"
          />
          <div className={styles.groupParent1}>
            <div className={styles.productCategoriesParent}>
              <div className={styles.productCategories}>Product Categories</div>
              <div className={styles.rice1}>Rice</div>
              <div className={styles.nonRice}>Non Rice</div>
            </div>
            <div className={styles.visitUsParent}>
              <div className={styles.visitUs}>VISIT US</div>
              <div className={styles.vivaAtlierNrContainer}>
                <p className={styles.vivaAtlierNr}>
                  706 viva atlier, nr. Ketan Soc. naranpura ahmedabad
                </p>
                <p className={styles.vivaAtlierNr}>- 380013</p>
              </div>
            </div>
            <div className={styles.companyParent}>
              <div className={styles.company}>Company</div>
              <div className={styles.contactUs1}>Contact Us</div>
              <div className={styles.blogs}>Blogs</div>
              <div className={styles.aboutUs1}>About Us</div>
            </div>
            <div className={styles.contactUsParent}>
              <div className={styles.contactUs2}>CONTACT US</div>
              <div className={styles.bxsphoneCallParent}>
                <img
                  className={styles.bxsphoneCallIcon}
                  alt=""
                  src="/bxsphonecall.svg"
                />
                <div className={styles.div1}>+91 7227019911</div>
              </div>
              <div className={styles.icsharpEmailParent}>
                <img
                  className={styles.icsharpEmailIcon}
                  alt=""
                  src="/icsharpemail.svg"
                />
                <div className={styles.infoqminfoodworldcom}>
                  info@qminfoodworld.com
                </div>
              </div>
              <div className={styles.linkedinParent}>
                <img
                  className={styles.linkedinIcon}
                  alt=""
                  src="/linkedin@2x.png"
                />
                <img
                  className={styles.linkedinIcon}
                  alt=""
                  src="/twitter-squared@2x.png"
                />
                <img
                  className={styles.linkedinIcon}
                  alt=""
                  src="/instagram@2x.png"
                />
                <img
                  className={styles.linkedinIcon}
                  alt=""
                  src="/facebook@2x.png"
                />
              </div>
            </div>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-10.svg" />
          <img className={styles.groupChild2} alt="" src="/vector-11.svg" />
          <div className={styles.finalPngLogo1Parent}>
            <img
              className={styles.finalPngLogo1Icon1}
              alt=""
              src="/finalpnglogo-11@2x.png"
            />
            <div className={styles.groupChild3} />
          </div>
        </div>
      </div>
      <div className={styles.recipesInner1}>
        <div className={styles.recipesWrapper}>
          <b className={styles.recipes2}>Recipes</b>
        </div>
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.groupParent3}>
          <div className={styles.heading3Parent}>
            <div className={styles.heading3}>
              <b className={styles.linkFried}>Hyderabadi Dum Chicken</b>
            </div>
            <div className={styles.linkParent}>
              <div className={styles.link}>
              <a className={styles.viewRecipe} onClick={onViewRecipe1Click}>
                View Recipe
              </a>
              </div>
              <div className={styles.link1}>
                <img
                  className={styles.friedRice1655094561pngIcon}
                  alt=""
                  src="/33friedrice1655094561png@2x.png"
                />
              </div>
              <img className={styles.divvegIcon} alt="" src="/divveg@2x.png" />
              <div className={styles.divtimepeo}>
                <div className={styles.spanmnt}>
                  <div className={styles.minutesParent}>
                    <div className={styles.minutes}>30 minutes</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divtimepeo1}>
                <div className={styles.spanmnt}>
                  <div className={styles.peopleParent}>
                    <div className={styles.minutes}>2 People</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heading3Group}>
            <div className={styles.heading31}>
              <b className={styles.linkFried1}>Anda Biryani</b>
            </div>
            <div className={styles.linkParent}>
              <div className={styles.link}>
              <a className={styles.viewRecipe} onClick={onViewRecipe2Click}>
                View Recipe
              </a>
              </div>
              <div className={styles.link3}>
                <img
                  className={styles.friedRice1655094561pngIcon}
                  alt=""
                  src="/33friedrice1655094561png1@2x.png"
                />
              </div>
              <div className={styles.divveg} />
              <div className={styles.divveg1} />
              <div className={styles.divtimepeo}>
                <div className={styles.spanmnt}>
                  <div className={styles.minutesParent}>
                    <div className={styles.minutes}>30 minutes</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divtimepeo1}>
                <div className={styles.spanmnt}>
                  <div className={styles.peopleParent}>
                    <div className={styles.minutes}>2 People</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heading3Container}>
            <div className={styles.heading32}>
              <b className={styles.linkFried1}>Easy Paneer Biryani</b>
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.link}>
              <a className={styles.viewRecipe} onClick={onViewRecipe3Click}>
                View Recipe
              </a>
              </div>
              <div className={styles.link1}>
                <img
                  className={styles.friedRice1655094561pngIcon}
                  alt=""
                  src="/33friedrice1655094561png2@2x.png"
                />
              </div>
              <img className={styles.divvegIcon} alt="" src="/divveg@2x.png" />
              <div className={styles.divtimepeo}>
                <div className={styles.spanmnt}>
                  <div className={styles.minutesParent}>
                    <div className={styles.minutes}>30 minutes</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divtimepeo1}>
                <div className={styles.spanmnt}>
                  <div className={styles.peopleParent}>
                    <div className={styles.minutes}>2 People</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.heading3Parent1}>
            <div className={styles.heading33}>
              <b className={styles.linkFried1}>Veg Biryani</b>
            </div>
            <div className={styles.linkParent1}>
              <div className={styles.link}>
              <a className={styles.viewRecipe} onClick={onViewRecipe4Click}>
                View Recipe
              </a>
              </div>
              <div className={styles.link1}>
                <img
                  className={styles.friedRice1655094561pngIcon}
                  alt=""
                  src="/33friedrice1655094561png3@2x.png"
                />
              </div>
              <img className={styles.divvegIcon} alt="" src="/divveg@2x.png" />
              <div className={styles.divtimepeo}>
                <div className={styles.spanmnt}>
                  <div className={styles.minutesParent}>
                    <div className={styles.minutes}>30 minutes</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divtimepeo1}>
                <div className={styles.spanmnt}>
                  <div className={styles.peopleParent}>
                    <div className={styles.minutes}>2 People</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heading3Parent2}>
            <div className={styles.heading34}>
              <b className={styles.linkFried1}>Paneer Biryani</b>
            </div>
            <div className={styles.linkParent}>
              <div className={styles.link}>
              <a className={styles.viewRecipe} onClick={onViewRecipe5Click}>
                View Recipe
              </a>
              </div>
              <div className={styles.link3}>
                <img
                  className={styles.friedRice1655094561pngIcon}
                  alt=""
                  src="/33friedrice1655094561png4@2x.png"
                />
              </div>
              <div className={styles.divveg} />
              <div className={styles.divveg1} />
              <div className={styles.divtimepeo}>
                <div className={styles.spanmnt}>
                  <div className={styles.minutesParent}>
                    <div className={styles.minutes}>30 minutes</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divtimepeo1}>
                <div className={styles.spanmnt}>
                  <div className={styles.peopleParent}>
                    <div className={styles.minutes}>2 People</div>
                    <img
                      className={styles.ritimeLineIcon}
                      alt=""
                      src="/ritimeline1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild4} />
        <div className={styles.copyright2023}>
          Copyright 2023 © Qmin FoodWorld Pvt. Ltd. All right reserved`
        </div>
      </div>
      <div className={styles.recipesInner2}>
        <div className={styles.linkedinGroup}>
          <img
            className={styles.linkedinIcon1}
            alt=""
            src="/linkedin1@2x.png"
          />
          <img
            className={styles.linkedinIcon1}
            alt=""
            src="/twitter-squared1@2x.png"
          />
          <img
            className={styles.linkedinIcon1}
            alt=""
            src="/instagram1@2x.png"
          />
          <img
            className={styles.linkedinIcon1}
            alt=""
            src="/facebook1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
