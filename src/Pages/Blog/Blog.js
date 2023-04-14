import React from 'react';
const Blog = () => {
    return (

        <div className="dark:bg-gray-800 my-8 dark:text-gray-100 pt-8 rounded-xl">
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Database</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">How does prototypical inheritance work?</p>
                    <p className="mt-2">Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" className="flex items-center">
                            <img src=" https://cdn3d.iconscout.com/3d/premium/thumb/photographer-5691514-4741055.png?f=webp" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Backend</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">What is a unit test? Why should we write unit tests?</p>
                    <p className="mt-2">
                        Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" className="flex items-center">
                            <img src=" https://cdn3d.iconscout.com/3d/premium/thumb/photographer-5691514-4741055.png?f=webp" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">NodeJS</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">What are the different ways to manage a state in a React application?</p>
                    <p className="mt-2">
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps:
                        Local state
                        <br />
                        <br />
                        Global state
                        <br />
                        Server state
                        <br />
                        URL state
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" className="flex items-center">
                            <img src=" https://cdn3d.iconscout.com/3d/premium/thumb/photographer-5691514-4741055.png?f=webp" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 my-5 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">NodeJS</p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold hover:underline">React vs. Angular vs VueJS?</p>
                    <p className="mt-2">Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js. If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p rel="noopener noreferrer" className="hover:underline dark:text-violet-400">Read more...</p>
                    <div>
                        <p rel="noopener noreferrer" className="flex items-center">
                            <img src=" https://cdn3d.iconscout.com/3d/premium/thumb/photographer-5691514-4741055.png?f=webp" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Arnob</span>
                        </p>
                    </div>
                </div>

            </div>
            <br /><br />

        </div>
    );
};

export default Blog;