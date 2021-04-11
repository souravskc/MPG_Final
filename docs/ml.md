---
id: ml
title: Machine Learning
sidebar_label: Machine Learning
---

Machine Learning provides computers with the ability to perform various tasks on their own without implicitly programming them. This opens up a plethora of possibilities that can transform the way we interact with machines, with applications in almost all of the areas of science. Interested already? Read on to get started in the field.
 

## How to get these courses for free?
If you can’t buy the specialisations, Coursera provides financial aid. If you apply for it you will get the course for free. But, it usually takes 15 days after applying to get the course. 

 
 
## Start here
* Start with [Machine Learning](https://www.coursera.org/learn/machine-learning) course on Coursera by      Stanford University.<br/>
Instructed by Andrew Ng, in this course he covers all the basics you need to get off in the field.
* **Rather than focusing on coding assignments you should focus on the concept that Andrew Ng is explaining**. As the above course is structured it will help you in getting all the basic knowledge in Machine Learning. But, it won’t help in solving problems much.

* **Learn Python for ML** <br/>
 The course mentioned above uses Matlab as its primary programming language. However, Python is widely preferred language in the real world applications. Now that you have sufficient knowledge about machine learning, get down to implementing the ML algorithms and do some toy projects using Python this time.<br/>
Learn Python from either:<br/>
[Sentdex- has videos and tutorials](https://pythonprogramming.net/python-fundamental-tutorials/)<br/> 
OR<br/>
[Python Kaggle course (Learn by doing)](https://www.kaggle.com/learn/python)



:::note

The most common mistakes that most people make is they start coding just after doing the course, but coding is the least important and the easiest part of Machine Learning.
:::


:::important
Understanding maths is very important for learning Machine Learning. While learning the course you should ask yourself **why did they use this**?
:::
 
 
## Journey after the course
 
At this point you know most of the important stuff about Machine Learning.
 
### Libraries you should know to code in python
1. Pandas(for data preprocessing)
2. Numpy(for data preprocessing)
3. Matplotlib(for visualising the results and data)<br/>

For those who are not familiar with python should go ahead first with [Python](https://www.kaggle.com/learn/python). Pandas and Numpy are very important libraries for data manipulation in python. You can learn pandas from [here](https://www.kaggle.com/learn/pandas). After reading this you will know all important concepts of pandas which is almost similar for numpy. For numpy you can refer to its [documentation](https://numpy.org/doc/1.19/user/basics.html). This contains all basic things done by numpy.
 
:::important
While going through the tutorials please make sure you have your python IDE ready so that you can also code at the same time
:::
 
 
## Hands-On Coding

Now, let's get your hands dirty by coding a simple ML algorithm in python. Implement a linear regression algorithm from scratch, follow the link
[Linear Regression from Scratch](https://machinelearningmastery.com/implement-simple-linear-regression-scratch-python/)
 
 
Now go through this [Linear Regression using library methods](https://contactsunny.medium.com/linear-regression-in-python-using-scikit-learn-f0f7b125a204) ,  and learn how you can use a simple python library also to write the linear regression.<br/>

### Assignment 1

Got some confidence in coding with python now?<br/>

Let’s do neural networks from scratch now. This will really build your confidence. 
[Neural Network from Scratch](https://github.com/vzhou842/neural-network-from-scratch/blob/master/network.py)

 
 
Assuming you are done with the above part. You know the basics of ML and have some experience with python coding as well. 
 
:::tip

Google is your best friend when it comes to coding in ML. For any query on how to write any piece of code just google it!
:::
 
### QnA
Why the Titanic problem?<br/>
The [Titanic problem](https://www.kaggle.com/c/titanic) is the basic of all Machine Learning problems yet very useful to learn many important concepts of Machine Learning.


### Assignment 2

Let's see if you can solve the basic Titanic problem or not. 
 
:::tip
Study in-depth about your data, clean your data before applying any model on it.
:::

#### Analysis

* If you look at this problem your first thought will be that it is a supervised learning problem. You can use logistic regression, SVM or Neural network. But, as Andrew Ng said, you don’t use the Neural Network until you have a decent amount of data, so it is not advisable to use neural network here. So, you have to use SVM or logistic regression or any other model which doesn't require much data. 
 
* But if you look at the given data you will find out that some fields are not integers, they are string or character and some of the fields are missing. What to do with this now?  So, this is the most important part of Machine Learning which is data preprocessing. You need to preprocess the data so that you can apply the model on it. And the better the data is preprocessed the better will be the accuracy. 

## Data Preprocessing
 
The prediction results of ML models, greatly depends on preprocessing of data. For learning about the data preprocessing refer to [data preprocessing](https://towardsdatascience.com/data-preprocessing-concepts-fa946d11c825). This will help you understand the data preprocessing concepts and why it is useful.<br/>
For coding in python, also refer to this [data preprocessing with code](https://towardsdatascience.com/introduction-to-data-preprocessing-in-machine-learning-a9fa83a5dc9d). 
 
Also refer to this course on [Data Cleaning](https://www.kaggle.com/learn/data-cleaning).
 
Till now you have learned the basics of Machine Learning and some of data preprocessing techniques. Now, if you have done all this it's time to step up. Let’s learn more about Neural Networks. 
 
 
## Neural Networks
 
Neural networks are a series of algorithms that mimic the operations of a human brain to recognize relationships between vast amounts of data.<br/> 
A neural network works similar to the human brain’s neural network. A *“neuron”* in a neural network is a mathematical function that collects and classifies information according to a specific architecture. The network bears a strong resemblance to statistical methods such as curve fitting and regression analysis.
 
 
A neural network contains layers of interconnected nodes. Each node is a perceptron and is similar to a Multiple Linear Regression. The perceptron feeds the signal produced by a multiple linear regression into an activation function that may be nonlinear.<br/>

You know all this as this is covered by Andrew Ng. 
 
 ### Q&A 

**What are the benefits of Neural Network, why should we use it?**<br/>

You know that Neural Network consists of one input layer, one output layer and one hidden layer. (*Deep neural networks required a little preprocessing*). As there is a hidden layer and input layer in the neural network it automatically pre-processes the data for you. You don’t need to make extra features for the model to understand properly. This is done by the layers of the neural network. 

 
The **problem you will face** while using a neural network <u>is tuning the model’s parameters and hyper-parameters</u>. Parameters are the ones that the “model” uses to make predictions, for eg. the weight coefficients in a linear regression model, and hyperparameters are the ones that help with the learning process, for eg. number of clusters in K-Means. 
 
### Q&A 

**What will happen if you don’t tune the parameters and hyper parameters of you neural network?**

As you know in neural network you have local minima as well. You can never be sure that your model will fall in the global minimum. If you don’t tune the parameters and hyper parameters you will always risk falling in the local minima.

 
Neural network is also of several types. Apart from the simple neural network which you discovered in the course by Andrew Ng, there is CNN and RNN. CNN ( Convolutional Neural Network ) is used to reduce the dimension of data, for e.g. each image is a 3d or 2d matrix, CNN can help you in reducing its dimension as Andrew Ng has explained how important is dimension reduction, CNN does it for you. RNN( Recurrent Neural Network ) is a type of sequence network which helps you in remembering the information from previous neurons of the same layer, it can be used in speech recognition, based on these two there are several other networks. 
 
 ### Deep Learning
 
Learn more about parameter, hyper-parameter tuning and other types of neural networks from [Deep Learning Specialisation](https://www.coursera.org/specializations/deep-learning?) by Andrew Ng.


:::important
In the Deep Learning Specialisation course <u> **make sure you do the assignments on your own without copying from the internet** </u>, also while doing the assignments <u> **read the whole code** </u>. Understand what they have already written and ask yourself why did they do this.
:::
 
This course will not only help you in learning the concepts but also help in writing code in TensorFlow and Keras.
 
By now if you have put in sincere effort and shown dedication in learning the concepts, you have a great idea and knowledge about ML and DL. 
 
It’s about time you learnt about Data Visualisation and Feature Engineering which you can study from [here](https://www.kaggle.com/learn/data-visualization) and [here](https://www.kaggle.com/learn/feature-engineering) respectively.
 
 
 
 
## High-level framework you should know

1. <u>TensorFlow</u>, it speeds up computation manifolds for neural networks and makes it easy to implement them.

2. <u>Keras</u>, is built on top of TensorFlow and makes it even easier to implement neural networks in Python and contains the most widely used libraries in the field of **Deep Learning**.
 
3. <u>Opencv</u> , it is used for another field of **AI and Computer Vision**.
 
4. <u>Scikit-learn</u>, contains implementations of almost all of the widely used algorithms in machine learning.

#### Congratulations your hard work and devotion paid off, you are now ready to take on Machine Learning to the next level and face it head on. You can also crack most of the college B.tech. Machine Learning interviews if you are thorough with the above concepts.
 
 
 
## What’s next?
 
Before coming to this section make sure you are clear with all the basics if not then it won’t benefit reading ahead.<br/>
You can focus on other models, data preprocessing techniques, regression techniques, unsupervised learning and forecasting techniques.<br/>
Below are the few mentioned topics for continuing your journey from here:
 
1. Decision Trees
2. Random forest
3. Bagging Algorithm ( Random forest is example of bagging algorithm )
4. Boosting Algorithm (xgboost, catboost etc.)
5. Naive Bayes

:::important
While learning these keep asking yourself why we need this. What are the limitations of these over other models? Knowing limitations will really help in narrowing down which model to use. 
:::


