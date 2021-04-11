---
id: trees
title: Trees
sidebar_label: Trees
---

## Concept

Yes, Tree is a data structure very similar to the trees that you see in the real world. It is a non-linear data structure as compared to arrays and linked lists, heaps as you have studied is a tree based data structure. So, what is the structure of a tree? How is it implemented ? What are the advantages of a nonlinear tree data structure ? Answer to all of these you will find only if read on.

[Link 1](https://www.programiz.com/dsa/trees)<br/>
[Link 2](https://www.tutorialride.com/data-structures/trees-in-data-structure.htm)<br/>
[Link 3](https://www.hackerearth.com/practice/data-structures/trees/binary-and-nary-trees/tutorial/)


## Tree Traversal
Now then you know about a tree and its basic structure, here is a basic recursion based tree traversal technique that you ought to know to be able to solve more complex tree questions.

[Link 1](https://www.programiz.com/dsa/tree-traversal)

Do It Yourself : The recursive approach to tree traversals is easy but now that you know what tree traversal is, can you write an iterative approach for the same

[Verify your answer HERE](https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/)


## Different types of trees

There are different variations of trees, each having their own importance and applications, the basic variations have been discussed here, these variations have their own distinct properties that often are critical observation points to solve problems, for ex. A balanced binary tree height is always logn, that makes it a useful data structure in situations where you cannot afford the height of the tree becoming more than logn. It is recommended that you know the distinct properties of each type of tree so that you are better equipped to solve more challenging problems.


### Binary Tree

[Link 1](https://www.programiz.com/dsa/binary-tree)

### Binary Search Tree

If you have been doing your reading carefully then you must recognise the fact that map and set in C++ STL are implemented via something called as self balancing BST, so what makes a self balancing BST the appropriate data structure for implementing maps and sets ? What is the basic property of a BST ? You must be able to answer these questions post reading these articles, so what are you waiting for aren’t you a little bit curious.

[Link 1](https://www.programiz.com/dsa/binary-search-tree)


### Balanced Tree
[Link 1](https://www.programiz.com/dsa/balanced-binary-tree)

QnA :
Before you proceed further can you answer how does a BST compare with Hash Table ? What are the advantages of one over the other ?<br/>
Though from your basic understanding of the two topics you should be easily able to answer this question, but if you are not able to answer, here are a few points you should focus on, first time complexity of basic insert, search, delete operations, the fundamental properties of the two data structures. Here is a complete comparison of the two that will deepen your understanding of the two important and useful data structures

[Verify your answer here](https://www.geeksforgeeks.org/advantages-of-bst-over-hash-table/)

## LCA

Now we are going to see the different approaches to finding the LCA or the least common ancestor. Finding LCA is an intermediate step to solving more challenging and difficult tree problems, so you have a good grasp of the topic and know the approaches to finding LCA, but first what is LCA ? Once you read the following articles not only will be able to answer this question but also know the optimised approach to finding LCA in O(logn) which is super useful and mind boggling, so what are you waiting for, go ahead and start reading.

O(n) approach <br/>
[Link 1](https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/)<br/>
[Link 2](https://www.techiedelight.com/find-lowest-common-ancestor-lca-two-nodes-binary-tree/)

O(logn) approach <br/>
[Link 3](https://cp-algorithms.com/graph/lca_binary_lifting.html)


## Tree Flattening

The concept of tree flattening is very interesting and useful. Have you ever thought about how you can represent a tree efficiently as an array of numbers ? Euler Tour of trees is a general approach for tree flattening that has many applications. So what is an euler tour of a tree? What are the advantages of tree flattening ? To know the answers to these questions you have to but read on , so you better get back to reading.

[Link 1](https://codeforces.com/blog/entry/18369)<br/>
[Link 2](https://www.geeksforgeeks.org/euler-tour-tree/)


## Segment Trees 
It is one of the popular tree based data structures that lets you answer range queries efficiently. Suppose you are told to find the sum of all numbers from one index to another index in an array, then your basic implementation will have a time complexity of O(n), but after building a ST, you can answer this query efficiently in O(logn). Caught your interest, didn’t it ? Segment Tree is a super useful tool to have at your disposal and pretty easy to understand and build. So what is a Segment Tree ? and how does it help you in answering range queries ? What kind of range queries can it answer ? and how can you implement it ? Spend your time reading carefully and understanding the basic concepts of segment tree from these great articles. Post reading you should be able the questions on your own.

1. [Link 1](https://medium.com/@ojhasaurabh2099/segment-trees-ccf461b73964)<br/>
2. [Link 2](https://kartikkukreja.wordpress.com/2014/11/09/a-simple-approach-to-segment-trees/)<br/>
3. [Link 3](https://www.iarcs.org.in/inoi/online-study-material/topics/segment-tree.php)

:::important
To take your understanding of segment trees to next level and know some of the common patterns of problems that can be solved by segment trees read this awesome tutorials on codeforces segment trees part 1 and part 2
https://codeforces.com/edu/course/2/lesson/6
:::

## LCA using RMQ
Here you will learn another approach to finding LCA using euler tour and segment tree. Told you that they are very useful data structures available at your disposal.

[Link 1](https://www.geeksforgeeks.org/find-lca-in-binary-tree-using-rmq/)






