---
id: heaps
title: Heaps and Priority Queues
sidebar_label: Heaps and Priority Queues
---

## Heapify, TC of insert , delete and search

Heap is tree based data structure , where all the child and parent nodes follow a special condition between them, which will enable you to retrieve the element with either the smallest or the largest value in O(1) time ? But what is this special condition ? And are there any other conditions ? How is it implemented ? If all these questions come to your mind then your curiosity will be satisfied, all you have to do is just read on to find out. Similar to heaps, there is another advanced data structure but in order that you are able to appreciate it, it’s important you have a clear understanding of heaps here and now.

[Link 1](https://www.programiz.com/dsa/heap-data-structure)<br/>
[Link 2](https://www.hackerearth.com/practice/notes/heaps-and-priority-queues/)<br/>
[Link 3](https://www.iarcs.org.in/inoi/online-study-material/topics/heap-details.php)<br/>
[Link 4](https://www.geeksforgeeks.org/building-heap-from-array/?ref=rp)


:::important 
If you are not able to visualize how the insert, delete operations work in heaps, take your time working out a few inputs, follow the algorithm line by line and build a heap then try performing the operations in detail. Do not proceed further if you are not able to visualise just yet. Following link might help you visualise 
https://visualgo.net/en/heap
:::

QnA : Can you workout the time complexity of building a heap. Is it O(n) or O(nlogn) ?<br/>
[KNOW HERE!!](https://www.geeksforgeeks.org/time-complexity-of-building-a-heap/)

QnA : Can you answer why to use heap, when the purpose of heap can also be served by maintaining the elements in a sorted manner?


## Priority Queue

To save you the time of implementing heaps and prevent you from making unnecessary mistakes, STL in C++ provides Priority Queue which is nothing but by default max heap. Keep on reading and see for yourself 
what priority queue is all about

:::important
The following STL utilities for Priority Queues in C++ are a must know : empty(), size(), push(),pop(),top().
:::

[Link 1](https://www.geeksforgeeks.org/priority-queue-in-cpp-stl/)


:::tip
The STL default Priority Queue is a max heap, to make use of it as a min heap simply store the negative of the original value. Additionally, you can define priority queues for your own custom data type which is very very handy to know.<br/>
 [READ THISSS!!!](https://stackoverflow.com/questions/9178083/priority-queue-for-user-defined-types) <br/>
( Read upto the third answer in this post )
:::
