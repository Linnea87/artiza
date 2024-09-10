[Return to README](https://github.com/Linnea87/artiza/blob/main/README.md)

# Manual Testing 

## Methodology

Throughout testing has been performed and is described below, it contains of manual test to check that all user stories and acceptance criteria are met, as well as testing and validating the code with different online tools as presented below.

### Registration

| Testing                       | Steps                         | Expected Outcome                    | Results |
|-------------------------------|-------------------------------|-------------------------------------|---------|
| User signup page              | Test link is working          | User is directed to the signup page | PASS    |
| User signup - Form validation | Submit empty form             | Form validation prompts the user    | PASS    |
| User signup - Form validation | Submit invalid password       | Form validation prompts the user    | PASS    |
| User signup - Form validation | Submit non matching passwords | Form validation prompts the user    | PASS    |
| User login page               | Test link is working          | User is directed to the login page  | PASS    |
| User login - Form validation  | Submit incorrect password     | Form validation prompts the user    | PASS    |
| User login - Form validation  | Submit incorrect name         | Form validation prompts the user    | PASS    |
| User Logout page              | Test link is working          | User is logged out                  | PASS    |

### Redirect User

| Testing         | Steps                                                   | Expected Outcome                  | Results |
|-----------------|---------------------------------------------------------|-----------------------------------|---------|
| Logged-in User  | Test signin/signup link is disable                      | User is directed to the home page | PASS    |
| Logged-out User | Create, AddEvent, Feed, Liked and Saved link is disable | User is directed to the home page | PASS    |


### NavBar

| Testing                               | Steps                                       | Expected Outcome                                                | Results |
|---------------------------------------|---------------------------------------------|-----------------------------------------------------------------|---------|
| Home Link                             | Click on the "Home" link in the navbar      | Navigate to the home page                                       | PASS    |
| Authenticated User - Create Post Link | Click on the "Create" link in the navbar    | Navigate to the page for adding a new post                      | PASS    |
| Authenticated User - Feed Link        | Click on the "Feed" link in the navbar      | Navigate to the page for existing content that the user follows | PASS    |
| Authenticated User - Bookmarks Link   | Click on the "Bookmarks" link in the navbar | Navigate to the page for the bookmarked content                 | PASS    |
| Authenticated User - Profile          | Click on the profile in the navbar          | Sends the authenticated user to its profile page                | PASS    |
| Unauthenticated User - Signin Link    | Click on the "SignIn" link in the navbar    | Navigate to the sign-in page                                    | PASS    |
| Unauthenticated User - Sign Up Link   | Click on the "SignUp" link in the navbar    | Navigate to the sign-up page                                    | PASS    |

### Home Page - Post List

| Testing         | Steps                                                                                        | Expected Outcome                                                                                                                                    | Results |
|-----------------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Page Navigation | On the home page                                                                             | The browser should display the home page with a list of the latest published posts                                                                  | PASS    |
| Search Bar      | Check if the search bar section is visible                                                   | A functional search bar displaying should be visible at the top of the page                                                                         | PASS    |
| Post Display    | Inspect individual post cards                                                                | Each post card should display the featured image, username avatar, publication date, title, description, location, and number of likes and comments | PASS    |
| Avatar          | Click on the username's avatar                                                               | The browser should navigate to the username's profile page                                                                                          | PASS    |
| Featured Image  | Click on the "Featured Image" link                                                           | The browser should navigate to the detailed view of the respective post page                                                                        | PASS    |
| Infinite Scroll | Check if seamless browsing by continuously loading content as the user scrolls down the page | New posts are automatically loaded, enabling users to explore an endless stream of content effortlessly                                             | PASS    |

### Single Post Page

| Testing                       | Steps                                              | Expected Outcome                                                                                                                                                                | Results |
|-------------------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Access Page                   | Navigate to the post page for a specific post      | The browser should display detailed information about the post, including title, username's avatar, creation date, featured image, description and number of likes and comments | PASS    |
| Username Avatar               | Check if username profile information is displayed | The post should include the user's profile image, username, and render the link to the username's profile page                                                                  | PASS    |
| Like Post                     | If logged in, click the like button                | The like status should toggle, and the number of likes should be updated                                                                                                        | PASS    |
| Unlike Post                   | If logged in, click the unlike button              | The unlike status should toggle, and the number of likes should be updated                                                                                                      | PASS    |
| Like Post (Not Logged In)     | If not logged in                                   | A message should encourage the user to log in, and the like button functionality should be disable                                                                              | PASS    |
| Like Post (Owner's Post)      | If user tries to like their own content            | A message should inform the owner that can not like their own content and the like button functionality is disable                                                              | PASS    |
| Bookmark Post                 | If logged in, click the bookmark button            | The bookmark status should toggle,  the number of bookmarkes should be updated and the saved post should be displayed under the bookmarks page                                                                              | PASS    |
| Remove Bookmarks              | If logged in, click the bookmark button            | The bookmark status should toggle,  the number of bookmarks should be updated and the removed bookmark post should be deleted from the bookmark page                                                                       | PASS    |
| Bookmark Post (Not Logged In) | If not logged in                                   | A message should encourage the user to log in, and the bookmark button functionality should be disable                                                                          | PASS    |
| Bookmark Post (Owner's Post)  | If user tries to bookmark their own content        | A message should inform the owner that can not like their own content and the like button functionality is disable                                                              | PASS    |

### Create Post

| Testing                  | Steps                                                                            | Expected Outcome                                                                                                         | Results |
|--------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|---------|
| Access Create Post Page  | Navigate to the "Create" page by logging in and clicking on the appropriate link | The browser should display a form for creating a new post                                                                | PASS    |
| Form Fields              | Inspect the form fields and labels                                               | The form should include fields for title, content, dropdown menu for categories and an option to upload a featured image | PASS    |
| Publish Post             | Fill in the requireded fields and click on the "Create" button                   | The form data should be saved, and redirect the user to the post page sucessfully posted                                 | PASS    |
| Edit Post (Authorized)   | Access the "Edit Post" page for a previously saved post                          | The browser should display a form populated with the existing data of the selected post                                  | PASS    |
| Edit Post (Submit)       | Make changes to the post data and submit the form                                | The post data should be updated, and redirected to the post page                                                         | PASS    |
| Delete Post (Authorized) | Click the "DropDownMenu" from the specific post page                             | The browser should display a delete option for the specific post                                                         | PASS    |
| Delete Post (Confirm)    | Confirm the deletion of the post                                                 | The post should be deleted from the browser                                                                              | PASS    |
| Navigation               | Click the "cancel" button if the user decides not to create a post               | The browser should navigate back to the previous page                                                                    | PASS    |


### Feed List

| Testing         | Steps                                                                                        | Expected Outcome                                                                                                                         | Results |
|-----------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Access Page     | Navigate to the "Feed" page                                                                  | If the user is logged in, the browser should display existing content that the user follows                                              | PASS    |
| Content Display | Check if seamless browsing by continuously loading content as the user scrolls down the page | New posts are automatically loaded, enabling users to explore an endless stream of content from the profile users they decided to follow | PASS    |


### Bookmarks List

| Testing         | Steps                                                                     | Expected Outcome                                                           | Results |
|-----------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------|---------|
| Access Page     | Navigate to the "Bookmarks" page                                          | Browser displays existing bookmarked content if user is logged in          | PASS    |
| Content Display | Check if loads recent bookmarks content as the user scrolls down the page | Bookmarked posts automatically load, allowing users to explore easily saved content | PASS    |


### Search Bar

| Testing        | Steps                                                                        | Expected Outcome                                                                                                                                                   | Results |
|----------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Posts Found    | Enter a search query in the search bar. Click on the search button.          | Display a list of posts that match the search query. Each post should show: - Featured image - Number of likes and comments - Title -Bookmark - Description - Date | PASS    |
| No Posts Found | Enter a search query that has no matching posts. Click on the search button. | Display a message stating "No results found. Adjust the search keyboard."                                                                                          | PASS    |


### Profile 

| Testing                 | Steps                          | Expected Outcome                                                                                            | Results |
|-------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------|---------|
| Access Page             | Navigate to the "Profile" page | The browser should display existing user profile and an three dots drop down menu, if the user is logged in | PASS    |
| Follow/Unfollown Button | on the "Profile" page          | Should appear a button to follow the user's profile if other user are logged in                             | PASS    |


### Popular Profiles

| Testing     | Steps                       | Expected Outcome                                                                                                                                                           | Results |
|-------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Access Page | Navigate to the "Home" page | Browser displays a popular list of profiles with usernames and avatars linking to their respective profile pages, along with a follow/unfollow button if user is logged in | PASS    |


### Followers

| Testing                 | Steps                                                  | Expected Outcome                                                              | Results |
|-------------------------|--------------------------------------------------------|-------------------------------------------------------------------------------|---------|
| Follow/Unfollow Section | Navigate to the "Profile" page or Popular Profile List | The browser should display a follow/unfollow button, if the user is logged in | PASS    |


### Categories List

| Testing                      | Steps                       | Expected Outcome                                                                                               | Results |
|------------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------|---------|
| Access Page                  | Navigate to the "Home" page | Browser displays a list of categories names and icon linking to their respective filtering post pages | PASS    |
| Filtering categories valid   | Click on a category name    | Browser displays all fetched posts in that category                                                            | PASS    |
| Filtering categories invalid | Click on a category name    |  Browser displays a message "No posts in this category."                                                       | PASS    |

