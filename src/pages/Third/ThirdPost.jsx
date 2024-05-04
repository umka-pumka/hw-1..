import React from 'react'
import classes from './Third.module.css'

const ThirdPost = () => {

    return (
        <div>
            <div className={classes.img}><img src="./img/000.jpg" alt="" /></div>

            <div className={classes.designcontainer}>
                <div className={classes.container}>
                    <h1>The foodbalist of the whole world</h1>
                    <div className={classes.profile}>
                        <img src="./img/Ranal.jpg" alt="" />
                        <div className={classes.profile_name}>
                            <h2>Cristiano ronaldo</h2>
                            <h5>Foodball</h5>
                        </div>
                        <div className={classes.photoshop}>
                            <h2>Photoshop</h2>
                            <h5>Categories</h5>
                        </div>
                        <div className={classes.reviews}>
                            <h2>25 Reviews</h2>
                            <h5>Reviews</h5>
                        </div>

                       
                    </div>
                    <div className={classes.uxui}>
                        <img src="./img/rr.png" alt="" />
                        </div>
                </div>
                <div className={classes.second_container}>
                    <h1>Categories</h1>
                    <div className={classes.line}></div>

                    <div  className={classes.web_design}> <h3>Web Design (9)</h3></div>
                    <div  className={classes.web_design}><h3 >App Design (3)</h3></div>
                    <div  className={classes.web_design}><h3 >Game Design (23)</h3></div>
                    <div  className={classes.web_design}><h3 >Graphic Design (5)</h3></div>
                    <div  className={classes.web_design}><h3 >UX-UI Design (7)</h3></div>
                    <div  className={classes.web_design}><h3 >Print Design (2)</h3></div>
                   <div  className={classes.web_design}> <h3 >Logo- Design (5)</h3></div>
                    <div className={classes.browse}>
                        <h1>Browse by Teacher</h1>
                        <div className={classes.lini}></div>

                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore voluptates adipisci dignissimos minus doloremque. Sit tenetur at cum similique!</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ThirdPost