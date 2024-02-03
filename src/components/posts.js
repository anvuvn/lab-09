import { useState } from 'react';
import Post from './post';

const Posts = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Introduction to React Hooks',
      content:
        'Learn about the power of React Hooks and how they simplify state management and lifecycle in functional components.',
      author: 'John Doe',
      comments: [
        'Great article!',
        "I've been using Hooks in my projects, and they're fantastic.",
        'Looking forward to more content on React.',
      ],
    },
    {
      id: 2,
      title: 'Exploring the World of Machine Learning',
      content:
        'Dive into the fascinating world of machine learning and discover its applications in various industries.',
      author: 'Alice Smith',
      comments: [
        'This is a complex but exciting field!',
        "I never thought I'd be interested in machine learning, but this article changed my mind.",
        'Can you recommend any beginner-friendly resources?',
      ],
    },
    {
      id: 3,
      title: 'Healthy Eating Habits for a Productive Day',
      content:
        'Discover the importance of maintaining healthy eating habits and how it positively impacts your productivity throughout the day.',
      author: 'Emily Johnson',
      comments: [
        'I needed this reminder to prioritize my health.',
        'Do you have any favorite quick and healthy recipes?',
        'Thanks for sharing this valuable information.',
      ],
    },
    {
      id: 4,
      title: 'JavaScript Frameworks Comparison',
      content:
        'Compare popular JavaScript frameworks like React, Angular, and Vue to understand their strengths, weaknesses, and use cases.',
      author: 'Mark Williams',
      comments: [
        "I'm a React fan, but it's interesting to see the pros and cons of other frameworks.",
        'Choosing the right framework can be challenging; this article helps a lot.',
        'Great analysis! Looking forward to more comparisons.',
      ],
    },
    {
      id: 5,
      title: 'Traveling on a Budget: Tips and Tricks',
      content:
        'Explore budget-friendly travel tips that allow you to experience new destinations without breaking the bank.',
      author: 'Sophie Davis',
      comments: [
        'I love traveling! These tips will be handy for my next trip.',
        'Backpacking sounds like a fantastic way to explore on a budget.',
        'Any recommendations for affordable accommodations?',
      ],
    },
  ]);

  return (
    <div className="posts">
      {data.map((d) => {
        return <Post post={d} key={d.id}></Post>;
      })}
    </div>
  );
};

export default Posts;
