# Hacker News API + Next JS example

3-hr technical test as part of a job application.

## Spec

In summary, I was asked to produce an app using the Hacker News API, which could list and search articles. I was given a 3-hr time limit, and asked to write up about what I did and what shortcuts were taken.

## Response (summarised)

My default go-to for starting a React project from scratch is to use `npx create-next-app` or `yarn create next-app`, as this means React is working with SSR and routing out of the box, and it can self-setup TypeScript as an additional step. From there I added eslint and editorconfig with my usual preferences.

When I saw Hacker News API was built on Algolia, I was expecting to be able to shove in the [Algolia React InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/) connected to their cloud and spend the next 2 hours leisurely working on the styling before calling it a day. Unfortunately it turns out that public use is limitted to the customised REST API, meaning I had to create my own API caller, context wrapper and components and adapt my plans and time management.

**Home Page**

The SearchContext acts as the Instant Search provider would have done, passing data and function props to the search-related components (text field, results-per-page and pagination), results and params segment of the URL.

SSR implemenation means that if the search params are set in the URL at time of page load, the search settings will be preset and results already fetched.

Looking back I realise a couple of bugs:
1. I misconfig'd the default value for the "Results per page" selector
2. Typo for the comment count

**Item Page**

For some posts with huge volumes of response, this page takes a while to load. I could have added a loading indicator or maybe loaded the comments separately, as the API allows.

It's obvious I rushed this page as the styling is minimal and the code is relatively untidy. With more time I'd have improved the styling and added some of the post/comment meta-data.

The API returns HTML instead of plain text/md for the content, so I used _dangerouslySetInnerHTML_. With more time I would have preferred to find a sanitizing library.

**Overall**

I'm happy with the general cleanliness of the code, though linting wasn't strictly enforced, and believe the structure makes sense and the code is reasonably self-explanatory.

I didn't make much use of TypeScript or prop-types, or testing. Typically it's around this point, as a prototype is done and I'm more certain about how parts will work together, that I then set up the definitions and unit tests ready for development towards the final product. I'd also start to document finalised components in Storybook.

In hindsight, as SSR wasn't specified as a requirement, I could have spent less time on that and made some improvements to the layout and styling.

## Further thoughts (that have come to me since submitting the write-up)

I realised that pagination was never part of the spec. I think it just naturally embedded in my mind as I was seeing the REST API is built for pagination, but it doesn't neccesarily need to be used as such. If I hadn't got my mind settled on pagination, I would have found it easier to conceptualise and therefore implement some additional features that were mentioned in the spec.

## To run

As usual for any next.js project:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```
