import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home1.module.css";
import React, { useState } from 'react';

const Home1 = () => {
  const navigate = useNavigate();
  
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const autocompleteList = document.getElementById('autocompleteList');
  
    // Sample data for autocomplete (replace with your own data)
    const autocompleteData = [
      'Basmati Rice',
      'Non-Basmati Rice',
      'Pasta',
      'Spaghetti',
      'Rice Noodles',
      'Brown Rice',
      'Wild Rice',
      'Jasmine Rice',
      'Sushi Rice',
      'Quinoa'
    ];
  
    searchInput.addEventListener('input', () => {
      const inputValue = searchInput.value.toLowerCase();
      
      // Clear the previous autocomplete items
      autocompleteList.innerHTML = '';
  
      const matchingItems = autocompleteData.filter(item => item.toLowerCase().includes(inputValue));
  
      // Populate the dropdown with matching items
      matchingItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        autocompleteList.appendChild(listItem);
      });
  
      // Show the dropdown if there are matching items
      autocompleteList.style.display = matchingItems.length > 0 ? 'block' : 'none';
    });
  
    // Handle item selection from the dropdown
    autocompleteList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        searchInput.value = event.target.textContent;
        autocompleteList.style.display = 'none';
      }
    });
  });
  
 const onAboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContactUsClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onBlogsClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onRecipesClick = useCallback(() => {
    navigate("/Recipes");
  }, [navigate]);

  return (
    <div className={styles.home1}>
      <div className={styles.home1Child} />
      <div className={styles.home1Item} />
      <img
        className={styles.finalPngLogo1Icon}
        alt=""
        src="/finalpnglogo-1@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupWrapper}>
          <div className={styles.groupParent}>
            <div className={styles.groupContainer}>
              <img className={styles.groupItem} alt="" src="/group-350.svg" />
              <div className={styles.email}>Email</div>
            </div>
            <div className={styles.groupDiv}>
              <img className={styles.groupItem} alt="" src="/group-351.svg" />
              <div className={styles.wrapper}>
                <div className={styles.div}>+91 7227019911</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home1Inner}>
        <div className={styles.aboutUsParent}>
          <a className={styles.aboutUs} onClick={onAboutUsClick}>
            About Us
          </a>
          <div className={styles.rice}>Rice</div>
          <a className={styles.recipes} onClick={onRecipesClick}>
                Recipes
              </a>
          <a className={styles.contactUs} onClick={onContactUsClick}>
            Contact Us
          </a>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
        </div>
      </div>
      <div className={styles.styleParent}>
        <div className={styles.style} />
        <div className={styles.style1} />
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <div className={styles.successfullyProjectCompleted}>
          <div className={styles.successfullyProjectCompletedChild} />
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.successfullyProjectCompletedItem} />
          <div className={styles.parent}>
            <div className={styles.div1}>86,700</div>
            <div className={styles.successfullyProjectCompleted1}>
              Successfully Project Completed
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <div className={styles.ourIntroduction}>OUR INTRODUCTION</div>
            <div className={styles.bestQualityIn}>Best Quality in Rice</div>
          </div>
          <div className={styles.wereLeaderInAgricultureMaParent}>
            <div className={styles.wereLeaderIn}>
              We’re Leader in Agriculture Market
            </div>
            <div className={styles.dissuadeEcstaticAnd}>
              Our mission is simple yet profound: to provide you with the very
              best rice nature has to offer. We believe that exceptional rice is
              the foundation of delicious, nutritious meals, and we're dedicated
              to ensuring that every grain meets the highest standards.
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.materialSymbolscheckCircleParent}>
              <img
                className={styles.materialSymbolscheckCircleIcon}
                alt=""
                src="/materialsymbolscheckcircle.svg"
              />
              <div className={styles.organicFoodContains}>
                Organic food contains more vitamins
              </div>
            </div>
            <div className={styles.materialSymbolscheckCircleParent}>
              <img
                className={styles.materialSymbolscheckCircleIcon}
                alt=""
                src="/materialsymbolscheckcircle.svg"
              />
              <div className={styles.organicFoodContains}>
                Eat organic because supply meets demand
              </div>
            </div>
            <div className={styles.materialSymbolscheckCircleParent}>
              <img
                className={styles.materialSymbolscheckCircleIcon}
                alt=""
                src="/materialsymbolscheckcircle.svg"
              />
              <div className={styles.organicFoodContains}>
                Organic food is never irradiated
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-3856@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.component6Parent}>
        <div className={styles.component6}>
          <img
            className={styles.component6Child}
            alt=""
            src="/rectangle-38511@2x.png"
          />
          <div className={styles.component6Item} />
          <div className={styles.component6Inner} />
          <div className={styles.group}>
            <b className={styles.b}>1121</b>
            <b className={styles.basmatiRice}>Basmati Rice</b>
          </div>
        </div>
        <div className={styles.component7}>
          <img
            className={styles.component6Child}
            alt=""
            src="/rectangle-3855@2x.png"
          />
          <div className={styles.component7Item} />
          <div className={styles.component7Inner} />
          <div className={styles.group}>
            <b className={styles.b1}>1509</b>
            <b className={styles.basmatiRice}>Basmati Rice</b>
          </div>
        </div>
        <div className={styles.component8}>
          <img
            className={styles.component6Child}
            alt=""
            src="/rectangle-3851@2x.png"
          />
          <div className={styles.component7Inner} />
          <div className={styles.ir64Parent}>
            <b className={styles.ir64}>IR 64</b>
            <b className={styles.nonBasmatiRice}>Non Basmati Rice</b>
          </div>
        </div>
      </div>
      <div className={styles.qminFoodWorldParent}>
        <b className={styles.qminFoodWorld}>Qmin Food World</b>
        <div className={styles.riceComesIn}>
          Rice comes in a multitude of varieties, each with its own unique
          characteristics and culinary uses. Some popular rice varieties include
        </div>
      </div>
      <div className={styles.fromTheBlogParent}>
        <b className={styles.fromTheBlog}>From The Blog</b>
        <b className={styles.newsArticles}>{`News & Articles`}</b>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild1} />
          <b className={styles.worldBestBasmati}>World Best Basmati Rice</b>
          <div className={styles.exploringTheWorld}>
            Exploring the world of non-Basmati Rice: A Comprehensive Guide...
          </div>
          <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <div className={styles.byAdmin}>By Admin</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-3858.svg"
            />
            <div className={styles.sep2023}>18 Sep, 2023</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild3} />
          <b className={styles.healthyEatingWith}>
            "Healthy Eating with Qmin Basmati Rice"
          </b>
          <div className={styles.boostYourWellBeing}>
            Boost your well-being one grain at a time.
          </div>
          <img className={styles.image26Icon} alt="" src="/image-261@2x.png" />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user1.svg" />
            <div className={styles.byAdmin}>By Admin</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-38581.svg"
            />
            <div className={styles.sep2023}>18 Sep, 2023</div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild1} />
          <b className={styles.worldBestBasmati}>
            "India's Top Rice Exporter: Qmin Food"
          </b>
          <div className={styles.savorQualityRice}>
            Savor quality rice from India.
          </div>
          <img className={styles.image26Icon} alt="" src="/image-262@2x.png" />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <div className={styles.byAdmin}>By Admin</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-3858.svg"
            />
            <div className={styles.sep2023}>18 Sep, 2023</div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild3} />
          <b className={styles.theHeartOf}>
            "Qmin Food World: Rice for Health"
          </b>
          <div className={styles.exploreTheHealthContainer}>
            <p className={styles.exploreTheHealth}>
              Explore the health benefits of Basmati.
            </p>
          </div>
          <img className={styles.image26Icon} alt="" src="/image-263@2x.png" />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user1.svg" />
            <div className={styles.byAdmin}>By Admin</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-38581.svg"
            />
            <div className={styles.sep2023}>18 Sep, 2023</div>
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild1} />
          <b className={styles.basmatiBlissQmins}>
            "Basmati Bliss: Qmin's Premium Rice Collection"
          </b>
          <div className={styles.elevateYourCulinaryContainer}>
            <p className={styles.exploreTheHealth}>
              Elevate your culinary experience with us.
            </p>
          </div>
          <img className={styles.image26Icon} alt="" src="/image-264@2x.png" />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <div className={styles.byAdmin}>By Admin</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-3858.svg"
            />
            <div className={styles.sep2023}>18 Sep, 2023</div>
          </div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild11} />
          <b className={styles.theHeartOf}>"The Heart of Qmin: Basmati Rice"</b>
          <div className={styles.nourishYourHeart}>
            Nourish your heart with our rice.
          </div>
          <img className={styles.image26Icon} alt="" src="/image-265@2x.png" />
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user1.svg" />
            <div className={styles.byAdmin}>By Admin</div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild2}
              alt=""
              src="/rectangle-38581.svg"
            />
            <div className={styles.sep2023}>18 Sep, 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.rectangleParent5}>
          <img
            className={styles.groupChild13}
            alt=""
            src="/rectangle-3843@2x.png"
          />
          <div className={styles.joinOurNewsletter}>Join Our Newsletter</div>
          <div className={styles.willSendYou}>
            * Will send you weekly updates for your better tool management.
          </div>
          <div className={styles.rectangleParent6}>
  <div className={styles.groupChild14} contentEditable="true">
  <div className={styles.enterYourEmail}> Enter Your Email</div>
  </div>
</div>

        </div>
        <div className={styles.component2}>
          <div className={styles.component2Child} />
          <b className={styles.goldenSella}>Subscribe Now</b>
        </div>
      </div>
      <div className={styles.home1Inner1}>
        <div className={styles.vectorParent4}>
          <img
            className={styles.groupChild15}
            alt=""
            src="/rectangle-3842.svg"
          />
          <div className={styles.groupParent2}>
            <div className={styles.productCategoriesParent}>
              <div className={styles.productCategories}>Product Categories</div>
              <div className={styles.rice1}>Rice</div>
              <div className={styles.nonRice}>Non Rice</div>
            </div>
            <div className={styles.visitUsParent}>
              <div className={styles.visitUs}>VISIT US</div>
              <div className={styles.vivaAtlierNrContainer}>
                <p className={styles.exploreTheHealth}>
                  706 viva atlier, nr. Ketan Soc. naranpura ahmedabad
                </p>
                <p className={styles.exploreTheHealth}>- 380013</p>
              </div>
            </div>
            <div className={styles.companyParent}>
              <div className={styles.company}>Company</div>
              <div className={styles.contactUs1}>Contact Us</div>
              <a className={styles.blogs} onClick={onBlogsClick}>
                Blogs
              </a>
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
                <div className={styles.div2}>+91 7227019911</div>
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
          <img className={styles.groupChild16} alt="" src="/vector-11.svg" />
          <div className={styles.finalPngLogo1Parent}>
            <img
              className={styles.finalPngLogo1Icon1}
              alt=""
              src="/finalpnglogo-11@2x.png"
            />
            <div className={styles.groupChild17} />
          </div>
          <div className={styles.div3}>+91 7227019911</div>
        </div>
      </div>
      <div className={styles.rectangleParent7}>
        <div className={styles.instanceChild} />
        <b className={styles.readNow}>Read Now</b>
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.instanceChild} />
        <b className={styles.readNow}>Read Now</b>
      </div>
      <div className={styles.rectangleParent9}>
        <div className={styles.instanceChild} />
        <b className={styles.readNow}>Read Now</b>
      </div>
      <div className={styles.rectangleParent10}>
        <div className={styles.instanceChild} />
        <b className={styles.readNow}>Read Now</b>
      </div>
      <div className={styles.rectangleParent11}>
        <div className={styles.instanceChild} />
        <b className={styles.readNow}>Read Now</b>
      </div>
      <div className={styles.rectangleParent12}>
        <div className={styles.instanceChild} />
        <b className={styles.readNow}>Read Now</b>
      </div>
      <div className={styles.rectangleParent13}>
        <img
          className={styles.groupChild18}
          alt=""
          src="/rectangle-3848@2x.png"
        />
        <div className={styles.thereAreThousandsOfRiceVaParent}>
          <div className={styles.thereAreThousands}>
            There are thousands of rice varieties grown around the world, each
            with its unique characteristics, flavors, and culinary uses. It's
            impossible to list all of them, but I can provide you with a list of
            some popular rice varieties from different regions:
          </div>
          <div className={styles.component4}>
            <div className={styles.component4Child} />
            <b className={styles.enquiryNow}>Enquiry Now</b>

          </div>
          <div className={styles.relishTheTaste}>Relish the taste of India</div>
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group-1000001793.svg" />
      <div className={styles.component9}>
        <div class="charmsearchParent">
            <div className={styles.charmsearchParent}/>
        </div>
        <div class="search-container">
            <input
                type="text"
                class="search-input"
                placeholder="Search..."
                id="searchInput"
                oninput="mySearch()"
                title="Type Series Title"
            />
            
        </div>
    </div>
      <div className={styles.rectangleParent14}>
        <div className={styles.groupChild19} />
        <div className={styles.copyright2023}>
          Copyright 2023 © Qmin FoodWorld Pvt. Ltd. All right reserved`
        </div>
      </div>
      <div className={styles.home1Inner2}>
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

export default Home1;
