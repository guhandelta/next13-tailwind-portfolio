import CSSQueries from "../../public/images/container_vs_media_queries.png"
import Rendering from "../../public/images/csr_vs_ssr.png"
import JSPromise from "../../public/images/promise.png"

const featuredArticles = [
    {
        key: 1,
        title: "Client Side Rendering vs Server Side Rendering in JavaScript",
        time: "10 min read",
        image: Rendering,
        link: "/",
        gist:"This article discusses the differences between server-side rendering (SSR) and client-side rendering (CSR) for web applications. SSR involves rendering HTML files on the server and sending a fully rendered page to the client, while CSR involves rendering pages directly in the browser using JavaScript. The article outlines the advantages and disadvantages of each approach and provides examples of JavaScript SSR frameworks such as Next.js and Nuxt.js. The decision on which rendering approach to use depends on business requirements, such as the need for SEO optimization or a complex user interface.",
        summary: [
        `Next.js is a backend framework that is based on React.
        Everything we can do in React we can also do in Next.js – with some additional features like routing, API calls, authentication, and more. We dont have these features in React. Instead, we must install some external libraries and dependencies – like React Router, for routing in a single-page React app.
        But in Next.js, things are different. We dont have to rely on external libraries to do these things. They come built into the package when we create a Next.js app, which is why a Next.js app differs from a traditional React app.
        Client Side Rendering vs. Server Side Rendering`,

        `Next.js also uses something called server-side rendering. And to understand how that works, we also need to talk about client-side rendering.
        A client is what we see on the screen – the user interface. That is the client, what we can see. In other words, it's the front-end part of the code.
        On the other hand, a server is something we cannot see. It's the backend side of the code or the server code.
        Now in Client Side Rendering, the application loads and dynamically generates the browser output. In other words, the browser renders pages using JavaScript.
        But in Server Side Rendering, the user interface we see on the screen is generated not by the browser but on the server. When an application loads, it does not need to parse the user interface on the browser. Instead, it comes from the server side, which has been generated in advance in the server.
        How React and CSR Work
        So when we load a React application or when it is mounted and we check the source code in the browser, we get something like this:
        React source code`,

        `And if you look at the output in the UI, it will be something like this:
        React app
        In the source code of this page, we only get a few lines of code which include the title, meta tags, and link references.
        But in the body, we only have this:
        <div id="root"></div>
        So, where is the rest of the code? We don't see it in the browser when the page loads. This is because React uses client-side rendering (CSR). A React application processes the DOM on the client side, that is, in the browser.
        Whenever we load a React application, all the UI components are dynamically generated on the browser.
        How Next.js and SSR Work`,

       ` What is Pre-Rendering?
        Pre-rendering is an example of server-side rendering, where the content is generated before loading the app or the website on the browser.
        Server-side rendering (or pre-rendering) makes an application load faster as the output is already generated on the server side. It does not need to be generated on the browser.`, 
        
        `src: FreeCodeCamp
        `]
    },{
        key: 2,
        title: "How Promises work in JavaScript",
        time: "10 min read",
        image: JSPromise,
        link: "/",
        gist: `This article introduces the concept of JavaScript promises, which are used for asynchronous programming to avoid freezing the main execution thread. The article provides a simple demo to illustrate how promises work and explains nested promises. The article concludes by recommending Simplilearn's JavaScript Certification Training Course to learn more about JavaScript.` ,
        content: [`
        Promises were not always part of JavaScript. Callbacks worked together with asynchronous functions to produce desired results in the past. A callback is any function that is a parameter of an async function, which the async function invokes to complete its operation.
        To call an async function, you had to pass a callback as an argument like this:\n
        \n
        function callback(result) {\n
          // Use the result from the Async operation\n
        }\n
        `,`
        randomAsyncOperation((response) => callback(response));\n
        But callbacks had a huge problem. Demonstrating the problem makes understanding it easier.
        Assume you had an asynchronous function that fetched data somewhere on the internet. This function should accept two callbacks, successCallback and failureCallback.\n
        The success callback would run if the operation was successful and the program found the appropriate resource. But the failure callback would run if the operation was unsuccessful and could not find the resource.\n
        function SuccessCallback(result) {\n
          console.log("Resource found", result);\n
        }\n
        \n
        function failure callback(error) {\n
          console.error("Ooops. Something went wrong", error);\n
        }\n`,`
        To run the async function, you had to pass the two callback functions as arguments:\n
        fetchResource(URL, successCallback, failure callback)\n
        Here, the URL is a variable that represents the location of the resource.\n
        This code will run smoothly for now. You've taken care of both possible scenarios the function could run into. You have a callback for a successful operation and a callback for a failed operation.
        Now assume you want to perform many other fetch operations, but each operation must be successful for the next one to run. This is useful if the data you need must come in a certain order and cannot be scattered.\n
        For example, you might run into this situation if the result of the next operation depends on the result of the previous one.\n
        In this case, your success callbacks would have their success callbacks, which is important because you need to use the results if they come in.\n
        fetchResource(\n
          URL,\n
          function (result) {\n
            // Do something with the result\n
            fetchResource(\n
              newUrl,\n
              function (result) {\n
                // Do something with the new result\n
                fetchResource(\n
                  anotherUrl,\n 
                  function (result) {\n 
                    // Do something with the new result\n 
                  },\n 
                  failureCallback\n 
                );\n 
              },\n 
              failureCallback\n 
            );\n 
          },\n 
          failureCallback\n 
        );\n 
        From the example, you may notice a complication developing. It would help if you kept nesting your \n success callbacks while repeating the failure callback every time you call the async function.
        These nested callbacks led to the 'Callback Pyramid of Doom' or callback hell, which can quickly become a nightmare. Could there be a more efficient way of handling situations like this?
        JavaScript introduced Promises as part of ES6 (ES2015) to solve this problem. As you'll see shortly, it simplified working with callbacks and made for better syntax. Promises are now the foundation for most modern asynchronous operations developers use in JavaScript today.\n
        `,`
        What is a Promise?\n
        A promise is an assurance or guarantee that something will happen. A person can promise another person a specific outcome or result. Promises are not limited to individuals; governments and organizations can also make promises. You have probably made a promise before.\n
        With this assurance (Promise) comes two possible outcomes–either fulfillment or failure. A promise is tied to an outcome that will show it is fulfilled. If that outcome does not happen, then the Promise failed. A promise at the end must have one of these results.\n
        In JavaScript, a Promise is an object that will produce a single value sometime in the future. If the Promise is successful, it will produce a resolved value, but if something goes wrong, it will produce a reason for failing. The possible outcomes here are similar to that of promises in real life.
        JavaScript promises can be in one of three possible states. These states indicate the progress of the Promise. They are:\n
        pending: This is the default state of a defined promise\n
        fulfilled: This is the state of a successful promise\n
        rejected: This is the state of a failed promise\n
        A promise goes from pending to fulfilled or from pending to rejected—'fulfilled' and 'rejected' indicate the end of a promise.\n
        From now on, this article will refer to a 'promise' as the JavaScript object.\n
        How to Create a Promise in JavaScript\n
        It would help if you created an instance object using the Promise constructor function to create a promise. The Promise constructor function takes in one parameter. That parameter is a function that defines when to resolve the new Promise and, optionally when to reject it.\n
        const promise = new Promise((resolve, reject) => {\n
          // Condition to resolve or reject the Promise\n
        });\n`]
        
    },{
        key: 3,
        title: "Using Container Queries for Responsive Design Beyond the Viewport",
        time: "10 min read",
        image: CSSQueries,
        link: "/",
        gist:`This article introduces container queries, a way to style HTML elements based on the size of their containers, rather than just the viewport size as with media queries. By declaring a containment context and using the \`@container\` at-rule, developers can create fully responsive webpages without relying solely on media queries. The article includes examples and code snippets to demonstrate how to use container queries and also discusses the \`container-name\` property for working with multiple containers. Container queries are available on all major browser engines and are stable in modern browsers, making them a viable option for making websites   responsive.`,
        content: [`
        Container queries allow you to style HTML elements based on the size of their containers. It is similar in execution to media queries, except elements are styled based on the size of a viewport with media queries.

        container-queries-explanation
        Image illustrating Container Queries in CSS
        How to Use Container Queries
        The containment context
        To use container queries, you need to tell the browser which HTML element you wish to use as a container. We do this by declaring a “containment context”.
        `,`
        A containment context instructs the browser to start paying attention to the size of a container (or an element). This way, the browser knows when to apply the styles specified in your container query.
        
        To declare a containment context, we use the container-type property with a value of size, inline-size, or normal. See the container-type API reference to understand what each of these values means.
        
        Consider the following example of a soft drink card component below:
        
        <div class="drink-card-container">
          <div class="drink-card">
            <img src="images/coke.png" alt="" />
            <div class="info">. . .</div>
           </div>
         </div>
        We can then add a containment context to the container:
        
        .drink-card-container {
          container-type: inline-size; 
        }
        And now, the browser pays attention to the size of .drink-card-container. Although, we still need to apply specific styles based on this container size, so we need the @container at-rule.
        `,`
        The @container at-rule
        The @container at-rule allows you to style elements based on the size of their container. The container condition is evaluated when the container changes in size. Also, the @container at-rule is what primarily defines a container query. It takes this form:
        
        @container <container-condition> {
          <stylesheet>
        }
        It has a similar syntax to the @media at-rule in media queries.
        
        Recall our soft drink card example. We can now add a @container at-rule that modifies the flex-direction of our .drink-card when the container’s size is less than or equal to 450px.
        
        @container (max-width: 450px) {
          .drink-card-container .drink-card {
            flex-direction: column;
          }
        }
        And that’s it! That’s all you need to know to start using container queries.
        `,`
        The container-name property
        Now that you know how container queries work, let's think about it at scale—what happens when we have multiple containers or containment contexts to work with?
        
        This introduces the need for specificity when writing container queries, which is why the container-name property exists.
        
        Let’s reconsider the example from our soft drink card component.
        
        <div class="drink-card-container">
          <div class="drink-card">
            . . .
            <div class="info">
                  <h3>Coke</h3>
              <p>On May 8, 1886, the first glass of Coke was sold.</p>
              <h5>₦ 150 <sup>estimated RRP</sup></h5>
              <a href="<https://www.coca-cola.com/>">See Official Website</a>
                </div>
           </div>
         </div>
        We can then add a containment context to the .info element by giving it a container-type property, as we did earlier. But this time, we include a container-name property to give the container a specific identity.
        
        .info {
          container-type: inline-size;
          container-name: drink-info;
        }
        Our container query will then take this shape:
        
        @container drink-info (max-width: 200px) {
          .info p {
            display: none;
          }
        }
        The code above tracks the size of the .info container (named drink-info) and hides the paragraph element when the container’s size is less than or equal to 200px.
        `]
    }
];

const articles = [
    {
        key: 1,
        title: "How to Create an MDX Blog in TypeScript With Next.js",
        image:"/images/gatsbyMDX.png",
        date: "June 15, 2023",
        link: "https://www.codemotion.com/magazine/frontend/how-to-create-an-mdx-blog-in-typescript-with-next-js/"
    },{
        key: 2,
        title: "React app with Python Django backend using WSGI",
        image:"/images/react_django.png",
        date: "June 15, 2023",
        link: "https://blog.logrocket.com/using-react-django-create-app-tutorial/"
    },{
        key: 3,
        title: "Implementing Micro-frontend with React and Next.js ",
        image:"/images/reac_next_mfe.png",
        date: "May 21, 2023",
        link: "https://www.solutelabs.com/blog/micro-frontend-with-react-and-next-js"
    },{
        key: 4,
        title: "Getting started with D3.js and React",
        image:"/images/react_d3.png",
        date: "May 02, 2023",
        link: "https://blog.logrocket.com/getting-started-d3-js-react/"
    },{
        key: 5,
        title: "Effortlessly Manage Data in Next.js with React Query",
        image:"/images/next_react_query.png",
        date: "April 21, 2023",
        link: "https://upmostly.com/next-js/effortlessly-manage-data-in-next-js-with-react-query"
    },{
        key: 6,
        title: "How to Use Three.js And React to Render a 3D Model of Your Self",
        image:"/images/react_threejs.png",
        date: "March 11, 2023",
        link: "https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf"
    },{
        key: 7,
        title: "How to Setup and Use Apollo Client in Next.js 13 App Directory",
        image:"/images/apollo.png",
        date: "Feb 14, 2023",
        link: "https://codevoweb.com/setup-and-use-apollo-client-in-nextjs-13-app-directory/"
    }
];

export { featuredArticles, articles };