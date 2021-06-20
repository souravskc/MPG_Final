import React,{useEffect, useState,history} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Footer from '../components/Footer'
import HomePage from '../components/Home/HomePage';


export default function Home() {

  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;


  return (    

    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      >

      <div>
        <HomePage />
      </div>

      {/* <Feedback /> */}
      <Footer />
    </Layout>
  );
}

