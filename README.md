# React Shopping List Template 

https://groceristar.github.io/documentation/docs/shop-list-information/components-structure.html

https://ant.design/components/form/


#### Table of contents
 - [Trello Board](https://trello.com/b/Wm9rrQRk/shopping-list-template)
 - [:(Article]()
 - [Documentation website](https://groceristar.github.io/documentation/)
 - [Gifs from our application](https://github.com/GroceriStar/react-native-shoppin-list#shopping-list-app-videos)
 - [Routes](https://github.com/GroceriStar/documentation/blob/master/docs/routes.md)

#### Overview

Basic functionality:

- Page with grocery list collection
- Grocery list details page
- Departments list
- Shopping list
- Login screen


## User Stories

User can:
* Create an account
* Successfully login
* Add items to the shopping list
* Edit items previously created
* Delete items from grocery list
* Mark items as purchased
* Mark items as favorites
* View all favorite items in one page
* Click on item to get more information about item
* User can logout


#### Clone Grocery List Template
1) Click Clone on template
2) Edit grocery list name
3) Review Departments and Ingredients. Make changes if you need
4) Hide or delete unnecessary Department on manage page.

#### Department
You can
- hide
- delete
- skip
- view
- edit




Inventory of all shopping lists. Shopping/grocery can
* Adding items (quantity, measurements, additional notes);
* Sorting items (A-Z, Z-A, 1-99, 99-1 ). Or drag-n-drop sorting;
* Marking items as "purchased" or "non-purchased”;
* Deleting items (delete one/all);
* Moving items (move items to another list, copy items);
* Product Suggestions;
* Sharing with community, family members, via email
* Deparments management
* Predefined grocery lists. GL collection.
* Grocery list cloning
* Empty grocery list creation
* Autogeneration of GL from recipes
* Import grocery items from Excel file


"Cloning"(when user "clone" a list, it's appears in his account). User cannot change a template(grocery list from collection), but can apply changes to cloned version. We change a Grocery List ID and if user change Departments, Ingredients - we replace them(in order to keep main GL in save).


You can add grocery lists, you can create them from collection, or make your own list.
All ingredients are non-purchased from the begining.
When you check ingredient(we assume you are buying it) - this ingredient get status purchased.
Purchased items will have this information: qty / Date / notes/ place where it was buyed.

Note: If we uncheck ingredient - it change it's status and removed from purchased list.

Note: we should have an ACL(Controlling data access), so user are not able to delete data of other people.

---

## Important Notes
- We'll use [Sentry Releases](https://docs.sentry.io/learn/releases/) to ship better code
- We'll use [git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) so we'll not intersect between developers
- We'll use PR for pushing your code into master and I'll be a reviewer
- We'll use [bin-flow](https://github.com/facebook/flow)
- For making react components ready for cross-projects we'll use [Bit](https://bitsrc.io/).
- We'll use [Jest + Enzyme for tests](https://facebook.github.io/jest/)
- We'll use [Netlify](https://www.netlify.com/) in order to have ability review our pages online
- We'll use [Travis CI](http://travis-ci.org) for setting up tests coverage
- Send API calls to server. @TODO share with team an API endpoints. for making calls use Axious.
- For subscription service we'll use [Paddle.js](https://paddle.com/docs/paddle-js-overlay-checkout/)

- Each component should looks simple and understandable
- We should use [ReactStrap](https://reactstrap.github.io/) components for faster development process
