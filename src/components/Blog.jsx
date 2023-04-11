import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-50 my-10 container mx-auto text-justify">
      <h1 className="text-2xl font-bold underline">
        a. When should you use context API?
      </h1>
      <p className="mt-6">
        he Context API in React should be used when you have data or state that
        needs to be shared between multiple components in your application.
        Rather than passing data through multiple levels of component hierarchy
        via props, the Context API allows you to create a centralized store of
        data that can be accessed by any component that needs it, regardless of
        where it is in the component tree. The Context API can also be useful
        when dealing with global application settings or themes that need to be
        accessed by multiple components. By using the Context API, you can avoid
        the need to manually pass these settings or themes down through each
        level of your component hierarchy. However, it's important to note that
        the Context API should not be used as a replacement for component state
        or props. It should only be used when you need to share data or settings
        between components that are not directly related through the component
        hierarchy. Additionally, overuse of the Context API can lead to
        unnecessary complexity in your application, so it's important to use it
        judiciously.
      </p>
      <h1 className="text-2xl font-bold underline">
        b. What is a custom hook?
      </h1>
      <p className="mt-6">
        In React, a custom hook is a JavaScript function that allows you to
        reuse logic across multiple components. Custom hooks allow you to
        extract and encapsulate complex logic that would otherwise be repeated
        across multiple components, reducing duplication and making your code
        more modular and easier to maintain. To use a custom hook in a
        component, you simply call the function as you would any other hook. The
        custom hook will then provide you with the values or functions that you
        need to reuse the logic across multiple components. Custom hooks are a
        powerful tool for code reuse and can help make your React components
        more modular and easier to maintain over time.
      </p>

      <h1 className="text-2xl font-bold underline">c. What is useRef?</h1>
      <p className="mt-6">
        useRef is a built-in hook in React that returns a mutable ref object
        whose current property is initialized to the provided argument (or to
        null if no argument is provided). The useRef hook can be used to
        maintain a reference to a DOM element, or to any other value that needs
        to persist between renders and should not trigger a re-render when it
        changes. The ref object returned by useRef can be used in a variety of
        ways. For example: Referencing a DOM element: You can pass the ref
        object returned by useRef to the ref attribute of a React element to
        maintain a reference to the corresponding DOM node. This can be useful
        when you need to manipulate the DOM directly, for example to focus an
        input field or to measure its dimensions. Caching expensive
        computations: If you have an expensive computation that needs to be
        performed on every render, you can use useRef to cache the result and
        avoid recomputing it unnecessarily. Since the ref object returned by
        useRef persists between renders, you can store the result of the
        computation in the current property of the ref object and use it in
        subsequent renders without re-computing. Storing mutable values: Since
        the ref object returned by useRef is mutable, you can use it to store
        values that need to persist between renders but should not trigger a
        re-render when they change. For example, you can use a ref object to
        store a value that is updated by an event listener, without causing the
        component to re-render.
      </p>
      <h1 className="text-2xl font-bold underline">d. What is useMemo?</h1>
      <p className="mt-6">useMemo is a built-in hook in React that allows you to memoize expensive computations so that they are only recomputed when their dependencies change. The useMemo hook takes a function and an array of dependencies, and returns the memoized result of the function.</p>
      
    </div>
  );
};

export default Blog;
