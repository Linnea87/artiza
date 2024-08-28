# ARTiza
## Table of Contents
- [UX](#ux)
    - [Site Purpose](#site-purpose)
    - [Site Goal](#site-goal)
    - [Audience](#audience)
    - [Communication](#communication)
    - [Current User Goals](#current-user-goals)
    - [New User Goals](#new-use-goals)
- [User Stories](#user-stories)
    - [User Stories and Issues](#user-stories-and-issues)
    - [User Stories List](#user-stories-list)
    - [MoSCoW Prioritization](#moscow-prioritization)    
    - [GitHub Kanban Board](#github-kanban-board)   
- [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
- [Features](#features)
    - [Existing Features](#existing-features)
    - [C.R.U.D](#c.r.u.d)
- [Testing](#testing)
    - [Manual Testing](#manual.testing)
    - [Automated Testing](#automated-testing)
    - [Validator Testing](#validator-testing)
    - [Bugs](#bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Technologies Used](#technologies-used)
    - [Main Languages Used](#main-languages-used)
    - [Frameworks, Libraries & Programs Used](#frameworks-libraries-&-programs-used)
    - [Databases Platform and Cloud Storage](#databases-platform-and-cloud-storage)
- [Components](#components)
    - [Contexts](#context)
    - [Hooks](#hooks)
    - [Utils](#utils)
- [Deployment](#deployment)
    - [Running the project by using Gitpod](#running-the-project-by-using-gitpod)
    - [Deploying with Heroku](#deploying-with-heroku)
    - [Connecting Frontend to the API](#connecting-frontend-to-the-api)
    - [Final Deploy to Heroku](#final-deploy-to-heroku)
- [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

## Deployment

### Running the project by using Gitpod

1. Go to the [project repository](https://github.com/Linnea87/artiza)
2. Click the green button that says "Gitpod" and the project will now open up in Gitpod.

### Deploying with Heroku

I followed the below steps using the Code Institute tutorial:


1. Go to [Heroku.com](https://.heroku.com) and log in; if you do not already have an account then you will need to create one.

2. Click the `New` dropdown and select `Create New App`.

3. Enter a name for your new project, all Heroku apps need to have a unique name, you will be prompted if you need to change it.

4. Select the region you are working in.

In the Deploy tab:

1. Connect your Heroku account to your Github Repository following these steps:

    * Click on the `Deploy` tab and choose `Github-Connect to Github`.
    * Enter the GitHub repository name and click on `Search`.
    * Choose the correct repository for your application and click on `Connect`.

2. You can then choose to deploy the project manually or automatically, automatic deployment will generate a new application every time you push a change to Github, whereas manual deployment requires you to push the `Deploy Branch` button whenever you want a change made.

3. Once you have chosen your deployment method and have clicked Deploy Branch your application will be built and you should now see the `View button`, click this to open your application.

    The site was deployed to Heroku. The steps to deploy are as follows:

    1. Launch the gitpod workspace.
    
    2. Install ReactJS:
            
        ```
        npx create-react-app . --use-npm
        npm start
        ```

    3. Install the following packages using the command npm install:
        
        ```
        react-bootstrap@1.6.3 bootstrap@4.6.0
        react-router-dom@5.3.0
        axios
        react-infinite-scroll-component
        msw --save-dev
        jwt-decode
        -g eslint
        ```
    
    4. Git add, commit, and push changes to gitpod.
    
    5. Create the project app on Heroku, and link the GitHub repository by navigating to the 'Deploy' tab.

### Connecting Frontend to the API

1. Navigated to the Heroku app of the project pp5-drf-api, and under the Settings tab, added the following configvars:

    * Key: `CLIENT_ORIGIN` | Value: https://react-app-name.herokuapp.com
    * Key: `CLIENT_ORIGIN_DEV` | Value: https://gitpod-browser-link.ws-eu54.gitpod.io

2. Check that the trailing slash \ at the end of both links has been removed, and save the configvar pairs.

3. Install the Axios package, & create supporting `axiosDefaults.js` as shown in [Moments Walkthrough](https://github.com/Code-Institute-Solutions/moments/blob/cf955d2f2e6f70f61c92d1f9de85558d8e49f3a8/src/api/axiosDefaults.js).

### Final Deploy to Heroku:

1. In the `scripts` section of `package.json` in gitpod, added the following command:
    ```
    "heroku-prebuild": "npm install -g serve",
    ```

2. Add Procfile to project root & populate with the following:
    ```
    web: serve -s build
    ```

3. Repeat the steps of git add/commit/push.

4. Deploy the project via the deploy button on Heroku.
