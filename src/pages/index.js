import React from 'react';

import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/* 
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'; 
import Banner from "../img/banner.jpeg";
*/
import Stepby from '../img/stairs.svg'
import Master from '../img/certificate.svg'
import Handpick from '../img/rating.svg'
import Hero from '../img/hero2.png'

import Learning from '../img/features/learning.webp'
import Mentor from '../img/features/mentor.webp'
import Improv from '../img/features/improv.webp'
import Step from '../img/features/step.webp'

//import {GrSteps} from 'react-icons/gr'

import FeatureCard from '../components/FeatureCard'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'

const features = [
  {
    titlesm:'Free Resources',
    title: 'Learn for FREE from FREE resources',
    imgUrl: Learning,
    description:( <div> We empower you to learn from good quality resources available for FREE on the web. Now, there is no more need to spend your hard-earned money for buying that course or that book .  </div>),
    id:true,
    more:( <div> Lack of money won’t be a problem anymore, so you never have to stop your learning. We at MPG always strive to provide you with the best learning experience for free. </div> ) 
  },
  {
    titlesm:'Advancement',
    title: 'Step by Step advancement',
    imgUrl: Step,
    description: (<div>Our pathway of learning has been designed by experienced professionals, who have selectively chosen the best resources and curated the pathway to make your learning journey smoother and easier.<br/><br/>You learn to face bigger challenges and solve tough problems by breaking them down into smaller easier ones.</div>),
    id:false,
    more:(<div>We take care of the smallest critical details so that you don’t hassle up, step by step taking your skills from beginner to advanced level .</div> )
  },
  {
    titlesm:'Mentor',
    title: 'Mentor like Guidance',
    imgUrl: Mentor,
    description: ( <div>Having a mentor is valuable and we know it. That’s why we provide you with mentor-like guidance, to help you keep track of your progress.<br /><br/>Just as a good mentor,we become your partner to help you overcome roadblocks in your journey and highlight the important points you should always keep in mind, to be the best.</div>),
    id:true,
    more:(<div>We take into consideration psychological aspects of learning to retain your interest. We address your doubts so you never stop moving forward.</div>)

  },
  {
    titlesm:'Improvement',
    title: 'Tried, Tested and constantly Improving',
    imgUrl: Improv,
    description:( <div>We aim for becoming better and better each day, so our methods are constantly evolving to best suit the needs of our learners.We curate our paths to best cater to the requirements of the constantly-evolving tech industry.</div>),
    id:false,
    more:(<div> We appreciate and review every feedback in our efforts to bring out the best in you.We set new perfection goals for ourselves as we follow the mantra -  “Iterate until perfect”.</div>)
  },
  
];


export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header> */}
      
      {/* Hero Start */}

      <div className="lg:flex lg:ml-36 lg:mr-10 lg:py-24 px-10 py-8">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="mt-10">
          <h1 className="font-medium text-3xl lg:text-5xl lg:leading-tight align-middle pb-8 ">Exclusive guide for your <span className="text-blue-500 ">learning journey.</span></h1>
            <div className="grid">
              <div className=" text-base lg:text-2xl font-medium pb-4"><Stepby className="fill-current align-middle text-blue-300 h-8 w-auto mr-2 text-2xl" />Learn competitive coding <span className="text-blue-500 ">step by step</span> </div>
              <div className=" text-base lg:text-2xl font-medium pb-4"><Handpick className="fill-current align-middle text-blue-300 h-8 w-auto mr-2 text-2xl" /><span className="text-blue-500 ">Handpicked </span>practice problems</div>
              <div className=" text-base lg:text-2xl font-medium pb-4"><Master className="fill-current align-middle text-blue-300 h-8 w-auto mr-2 text-2xl" />Master the basics from <span className="text-blue-500 ">beginner to advanced</span> </div>
            </div>
            {/*  <h1 className="header-h1">Get your sstructured path for <span className="free-word">free</span> resources now.</h1>
              <div className="flex"> 
                <h3 className="header-h3"> 
                  <Typist style={{width:"75%"}} key={count} avgTypingDelay={100} cursor={{show:false}} onTypingDone={() => setCount(0)}>
                    Get <span style={{color:"rgb(50,137,199)"}}>curated path</span>
                    <Typist.Backspace count={12} delay={600} style={{color:"blue"}} />
                    <span style={{color:"rgb(50,137,199)"}}>best resources</span>
                    <Typist.Backspace count={14} delay={600}  />
                    <span style={{color:"rgb(50,137,199)"}}>virtual mentoring</span>
                    <Typist.Backspace count={17} delay={600}  />
                    <span style={{color:"rgb(50,137,199)"}}>programming guidance </span>
                    <Typist.Backspace count={21} delay={800}  />
                  </Typist>
                  </h3>
                  <h3 className="free">&nbsp;for free</h3>
                </div>  */}
            <div>
            <div className="text-center lg:float-left py-10">
            
              {/* <a href="/docs/ml"><Button className="header-button" size="lg">
                Learn Development
              </Button></a> */}

              
              <a href="/docs/compi">
                <button className="bg-blue-600 text-white p-2 px-3 border-none rounded-lg text-xl hover:bg-blue-700" size="lg">
                Learn Programming
                </button>
              </a>
            </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 h-full">
          <div>
          <img className="imgsize" alt="Hero" src={Hero}></img>
          </div>
        </div>
      </div>

      {/* Hero End */}


      {/* Feature Section Start*/}
      <div className="w-full text-center">
              <h1 className="font-medium text-3xl lg:text-5xl lg:leading-tight align-middle pt-16" >Our <span className="text-blue-500 ">Features</span></h1>
      </div>
      {
        features.map((value,index)=>{
          return(
            <div>
              <FeatureCard id={value.id} imgUrl={value.imgUrl} title={value.title} description={value.description} more={value.more} />
            </div>
          )
        })
      }
      {/* Feature Section End*/}

      
      {/* Discord Start */}

      <div className="p-1 text-center pb-2 px-10 py-10">
        <div className="m-0 lg:px-32">
          <div className="lg:flex flex-col-reverse lg:flex-row ">
            <div className="lg:w-1/2" >
              <img src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg" alt="Discord" ></img>
            </div>
            <div className="lg:w-1/2 text-left align-middle lg:p-8 lg:pr-10 h-full mt-5">
                <h1 className="font-medium text-2xl lg:text-4xl align-middle pb-2 lg:pr-16 font-sans lg:leading-tight">Join Our Discord Server to <span className="text-blue-500">interact and grow</span> now.</h1>
                <span className="text-blue-500 text-lg lg:text-xl">Where Community meets Guides </span><br />
                <div className="mt-5">
                <div>
                  <button className=" border-0 bg-blue-600 text-white p-2 px-3 rounded-md mb-5 hover:bg-blue-700" size="lg">
                    Coming Soon
                  </button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discord End */}

      <Feedback />
      <Footer />
    </Layout>
  );
}
