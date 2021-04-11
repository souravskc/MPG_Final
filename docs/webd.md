---
id: webd
title: Web Development
sidebar_label: Web Development
---

The path to web development can be divided into 2 phases - **frontend development** and **server-side (or backend) development.** This roadmap gets you started with the necessary common skills required, then provides a path to learn both the phases, one by one, and at last, lets you connect things up. 

This roadmap will primarily focus on the **MERN stack**, which is one of the most popular tech stacks of today’s web developers. Once you master the MERN stack, you can shift to any other tech stack easily in the future, if needed.


## Recommended Common Skills

:::tip

You can use the [VS Code editor](https://code.visualstudio.com/download), as it is the most popular choice of web developers, and it contains hundreds of extensions available to help you code smoothly.

:::

:::note

There are several other editors which you can choose too but at this point it doesn't matter much.

:::

---

### HTML

HTML is the basic skeleton of a web page that gives it structure. It’s quite easy to learn. Just go through the basic tags, forms, etc. from any one of the below resources :

(a) W3Schools: https://www.w3schools.com/html/default.asp

:::important

At least, go through the topics up to **HTML iframe**, in the HTML tutorial and try to complete the **HTML Form** section **fully**.
:::

Generally, these will be needed in building the structure of any web page. You can always come back later and read any remaining section later if needed.

You can use the **Try it yourself** option, make some changes in code, run it, and observe the changes. _This will certainly help you in understanding things better._

(b) Traversy Media’s HTML crash course: https://www.youtube.com/watch?v=UB1O30fR-EE

**If you like learning stuff by watching videos, then you may prefer watching this crash course.**


---

### CSS

CSS is used for styling a web page. CSS lets you change various properties of the HTML elements to modify their styling.  **You need not cram all the properties.** You should just have an idea of the properties, you can use in CSS to change the styles. Just go through the basic syntaxes, properties, etc. from any one of the below resources :


(a) W3Schools : https://www.w3schools.com/css/default.asp

:::important

At least go through the full CSS tutorial and the topics upto CSS Text Effect in CSS Advanced. 

:::


Apart from this, you can also go through the topics “RWD Images” in CSS Responsive, which are used a lot in today’s world to make the web pages responsive. A responsive website means the appearance of website changes, according to the size of the device (mobile, laptop, tablet) in which it is viewed. For more understanding of responsive websites, check out http://ami.responsivedesign.is/ and enter the URL of any of your favorite websites there.

(b) Traversy Media’s CSS Crash Course: https://www.youtube.com/watch?v=yfoY53QXEnI

If you like learning stuff by watching videos, then you may prefer watching this crash course.

---

### JS (JavaScript)

JavaScript is the only programming language supported by web browsers. For those thinking “Why not HTML ?”, I would like to mention that HTML is not a programming language, it is just a markup language i.e. You can’t do stuff like calculating sum of a few numbers, run loops, etc. using HTML. Learning JS is also beneficial because once you have a strong understanding of the concepts and syntax of JS, you can expertise both front end and back end development easily because there are frameworks for both in JS.


Whatever syntax you learn in JS, **always just try it out**, in your browser console. (Right-click anywhere on the browser and click _inspect_ and go to **console**). This would really help you later when you want to debug some piece of code later.

For learning JS, at least learn the basic syntax from any of these :

(a) If you like learning through videos you watch these videos in order :

1. Mosh’s JS Tutorial for beginners: https://www.youtube.com/watch?v=W6NZfCO5SIk

2. Traversy Media’s JS Crash Course: https://youtu.be/hdI2bqOjy3c


(b) W3Schools: https://www.w3schools.com/js/default.asp

:::important

At least, go through the topics upto “JS Mistakes” in JS Tutorial, JS Objects **fully** and JS Functions **also fully**. Along with this, you may complete JS Arrays in JS JSON and full JS HTML DOM.

:::

After learning JS, if you wish to try out some mini projects based on HTML DOM manipulation, you may check this playlist : 

[Click here for playlist](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=2)

---

## Front End Development

Frontend development, also known as client-side development refers to building the UI/UX of a website, to which the user directly interacts using his browser.

---

### Bootstrap

The main advantage of bootstrap is that it allows you to make your website responsive in quite an easy manner. Bootstrap provides a lot of ready-made components using some ready-made CSS classes, which saves much time. 

For learning Bootstrap, you may go through these in order-

1.  [Introduction to Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
2.  [Grid System of Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/)
3.  [Explore the components that Bootstrap provides](https://getbootstrap.com/docs/4.0/components)


:::note

Just try to get an overall idea, of what all components, bootstrap provides. You can just use these components in your project, whenever you like. **There is no point in cramming the classes of these components as you may explore the documentation, whenever you need it.** 

:::

4.  You may also like to go through this Bootstrap Crash Course by Traversy Media:
 https://www.youtube.com/watch?v=5GcQtLDGXy8

---

 ### React

 React is one of the most popular frameworks for frontend development. React provides a lot of features like Reusable components, Virtual DOM, conditional rendering, etc., and allows you to build even complex UI/UX in a much easy manner. 
For learning React, you may go through these, in order :


1. [React Tutorial for beginners, by Mosh](https://youtu.be/Ke90Tje7VS0)

For reference, Go through the [React JS documentation](https://reactjs.org/docs/hello-world.html) (Only **Main Concepts** section)

2.  Go through [React Hooks](https://reactjs.org/docs/hooks-intro.html), the modern syntax of React.

3.  If you wish to build some mini-project using React, you may go through this tutorial on building a quizzing website using React :

  - [Part I](https://www.youtube.com/watch?v=4uCaryTF0Cc)

  - [Part II](https://www.youtube.com/watch?v=spiAD-1zSHg)

:::tip
Try to code along with the video and for reference, you can check the source code, which is also available in the video description.

:::

---

### Redux

Once you have learned React, you may observe that you need to pass the state of one component in the form of props to some other components. But, when you would be a building large project, which contains hundreds of components, this passing of state as props, may reduce the code readability to a large extent. 
Basically, you need something to manage your state in some central store, which can be directly accessed by any of the components, without the need to pass props to it. This is what Redux does. Redux maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using actions and reducers).


You may learn Redux through [this crash course](https://www.youtube.com/watch?v=93p3LxR9xfM) by Traversy Media.

Do have a look at its [documentation](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) for reference.

---

## Back End Development

Backend development or Server-side development deals with the building up of an API that can be used by the frontend or web pages to manipulate data stored in a database. Now, a question in your mind would be “What is an API?”. For a while, you can just understand API is an interface that acts as a waiter, who brings the data from some database and provides it to the frontend when requested. Not only this, but API can also be used to manipulate data in a database.

You can watch this short video for understanding this idea more: [video](https://www.youtube.com/watch?v=s7wmiS2mSXY)

---

### Node.js

Node.js is a running time environment for running JS codes. Node.js can be used to build the backend API. You may go through this video for its tutorial:
https://www.youtube.com/watch?v=TlB_eWDSMt4

---

### Express

Express is a flexible Node.js framework that allows you to build APIs very easily. Follow this to learn Express:

1. Watch this video, to get the basics of Express, REST API, and Postman:
  https://youtu.be/pKd0Rpw7O48

  You can also use [**this**](https://expressjs.com/en/starter/installing.html) Express documentation for reference.


After watching this video, you must be able to answer the following questions by yourself:
 - What is an API?
 - What is a REST API? Why is it called REST?
 - What is a client?
 - What is a server?
 - If a client sends a request to a REST API (server), how many responses can he receive, at maximum, for that request?
 - What is an endpoint?
 - What are the purposes of using different types of requests, like     - GET,  POST, PUT, DELETE
 - How can one test an API? 

2. You always need to follow some good practices for creating a REST API, for which we would recommend reading this  [**blog**](https://medium.com/hashmapinc/rest-good-practices-for-api-design-881439796dc9).

---

### MongoDB

MongoDB is a flexible NoSQL database. It is easy to use and understand, for beginners.
For learning MongoDB, go through the following:

1. [MongoDB crash course](https://www.youtube.com/watch?v=-56x56UppqQ)
2.  *Mongoose* is an ODM for MongoDB, which helps to manage the validation of data and maintaining relationships between them in a much easy manner. We would recommend reading [**this short blog**](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/) on mongoose .

3. To know how to build a REST API in Express using MongoDB as database :
https://www.youtube.com/watch?v=vjf774RKrLc

 After watching this video, you must be able to create your own backend (REST API) and test it, using Postman.

4.  If you are interested in setting up a cloud database for MongoDB, you may watch [**this video**](https://www.youtube.com/watch?v=KKyag6t98g8)

---

## Connecting the frontend and backend

 - Basically, you would need to send a request to an endpoint on your server. So, just go through the syntax of axios(), which does this for you from [**here**](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)

 - Sometimes, you may require to store some information in the local storage or the session of the browser itself, so you should go through [**this tutorial**](https://javascript.info/localstorage) to know about how to use the local storage and session storage.

  - It’s all done. But if you still face some issues or want to build a complete project consisting of both frontend and backend using the MERN stack, we recommend going through [**this tutorial**](https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE) and code along:



