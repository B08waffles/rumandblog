---
title: 'Next.js First Impressions'
date: '2022-06-11'
description: 'A brief overview of the perks of using Next.js'
---

# Hello World!

I am very excited to be writing my first post on this site. This has been my
first experience with a few different technologies, namely Next.js and
Bulma.css. I come from React so it's not been too big of a jump, allot of the
grunt work is done by Next.js, like routing for example. There are some cool
things to know about Next.js that aren't part of base React, for example, let's
take a look at the \<Head> component.

## Next.js \<Head> component example

```ts
// component/Example.tsx
import Head from "next/head"
\\ 
export default function Example() {
    return(
        <>
            <Head>
                <title>
                    B08waffles | Home
                </title>
                <meta name="description" content="Blogs and Portfolio" />
            </Head>
        </>
    );
};
```
Here we define a functional component that defines our title that appears in the
tab of the Browser. This is accomplished by the \<Head> component provided by
Next.js. We also defined the meta information, we could also define links to
Content Delivery Networks, link various fonts or style-sheets and more. The
\<head> component may be used on any page or component and its presence takes
precedence over any default header settings that may have been set in
"_app.jsx". It's a nice to have. Now lets dive into another benefit of Next.js,
routing.

## Routing

Next.js does us a huge favour by handling the routing for us, this includes
dynamic routing as well! The framework has been setup in such a way that
any .jsx and .tsx files that have an exported function that returns HTML that is
placed within the "pages" folder is automatically made into a viewable page.
This is such a convenience as it allows us developers to spend more time
elsewhere, somewhere like [r/unixporn](https://libreddit.tiekoetter.com/r/unixporn/)!
Routing looks allot nicer in Next.js compared to React as there is nothing to
see! Provided below is an excerpt of React v17 routing, something Next.js is
doing for us in the background:
```ts
// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Dashboard} from './components/Dashboard';

export default function App() {
    return (
        <>
            <Container className="app">
                <Navbar />
                <Container className="bg-dark text-white">
                    <Routes>
                        <Route path="*" element={<Dashboard /> } />
                        <Route path="/login" element={<LoginForm /> } />
                        <Route path="/register" element={<RegistrationForm /> } />
                    </Routes>
                <Footer />
                </Container>
            </Container>
        </>
    );
};
```

---
Some developers may have differing opinions on how opinionated their tools and
frameworks ought to be. Some prefer to have more control than not, frameworks
like Express.js and Flask are for these people however, a junior developer such
as myself that knows enough to know that I don't know enough to have an opinion
is sure grateful for the opinions offered! I see Next.js as a "training wheels
included" sort of thing, its rather similar to Django in that regard.

## Bonus features

There are many other benefits to using Next.js over a base React app. Next.js is
a full-stack framework meaning it has both front-end __and__ back-end
capabilities. Any .ts or .js files inside the pages/api folder are made into
viable API endpoints. I have yet to explore this feature fully but I am very
excited about the possibilities offered. An honourable mention for the \<Image>
component must be included in any Next.js conversation as it allows one to
include images into their site in an optimised fashion. The \<Image> component
has already proven itself as a performant way to include images, this is due to
the component's viewport sensitivity, images are automatically sized according
to the height and width of the screen. This allows network load to be reduced as
images are only ever the size they need to be according to the user's screen
size.

## Conclusion

There is still plenty more features that Next.js graces us with however that
will be covered at another time. For now I am happy to develop and maintain this
website using Next.js as it's offered me many conveniences, especially regarding
routing and image optimisation. I would recommend anyone who's made it this far
in this read to open up a terminal and type:
```bash
# command to generate a JavaScript Next.js application
npx create-next-app@latest app-name

# Command to generate a TypeScript Next.js applicaiton
npx create-next-app@latest app-name --ts
```
A boiler plate app will be generated for you which you can run by typing:
```bash
npm run dev
```
This command will launch the application in development mode where you will be
provided with various links and guides to learn Next.js as provided by Vercel. 
Thanks for reading!





