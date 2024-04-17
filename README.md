# The Sneaker Quiz

## PROJECT OVERVIEW

[Link to live project](https://smbiko.github.io/sneaker-quiz/) 

Welcome to the Sneaker Quiz, where your passion for sneakers meets the thrill of trivia! Lace up your favorite kicks and get ready to put your sneaker knowledge to the test. From iconic releases to legendary collaborations, this quiz is designed for sneakerheads of all levels. Are you ready to step up to the challenge and prove that you're the ultimate sneaker aficionado? Let's dive in and see if you can ace every question!

![Responsive Mockup](assets/images/media/frames.png)

## **Table of contents**

- [**The Sneaker Quiz**](#Sneaker Quiz)
  - [**Table of contents**](#table-of-contents)
  - [**Planning**](#planning)
    - [**External user goals**](#external-user-goals)
    - [**Site owner goals**](#site-owner-goals)
    - [**User Stories**](#user-stories)
    - [**Features to achieve the goals**](#features-to-achieve-the-goals)
    - [**Wireframes**](#wireframes)
    - [**Color Scheme**](#color-scheme)
    - [**Fonts**](#fonts)
    - [**Logo and Images**](#logo-and-images)
  - [**Features**](#features)
    - [**Header**](#header)
    - [**Home Page**](#home-page)
    - [**Game Page**](#game-page)
    - [**End Page**](#end-page)
    - [**Highscore Page**](#highscore-page)
    - [**Custom 404 Page**](#custom-404-page)
    - [**Future Enhancements**](#future-enhancements)
- [**Testing**](#testing)
    - [**Manual Testing**](#manual-testing)
    - [**Issues**](#issues)
    - [**Validation**](#validation)
        - [**HTML**](#html)
        - [**CSS**](#css)
    - [**Lighthouse Testing**](#lighthouse-testing)
    - [**Accessibility Testing**](#accessibilty-testing)
    - [**User Story Testing**](#user-story-testing)
- [**Deployment**](#deployment)
- [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media and Design**](#media-and-design)

  ## **Planning**


  ### **External user goals**

- I want to take part in a sneaker quiz online and improve my general knowledge. I want to be able to play at any time, anywhere.
- I want the site to be responsive to my device.
- I want the site to be easy to navigate.
- I want to be able to log my high scores to see how I am performing.

  ### **Site owner goals**

  - provide test sneaker heads with whether they understand the general knowledge of sneakers
  - get people to sign up for events

    ### **User Stories**

    - As a user, I want to navigate the quiz using multiple devices.
    - As a user, I want to find general information about the quiz.
    - As a user, I want to find out whats my score
    - As a user, I want to find how many questions did I get right and wrong .
    - As a user, I want to find my score after playing the game.


### **Features to achieve the goals**

The website is comprised of a home page, a games page, a high scores page, a 404 error page .

All Pages on the website are responsive and have:
    - The website will be built with a mobile-first approach, to ensure it is responsive. I will also test it on various devices and screen sizes.
    - General information about the quiz like how to play  will be included in the home page .
    - A favicon in the browser tab.
    - The title of the site at the top of every page. This title also acts as a link back to the home page.


### **Wireframes**

I created wireframes to visualize my ideas using [Balsamiq](assets/images/media/colour-schemes.png) . As I want to stick to the mobile-first approach I created wireframes for mobile.

### **Color Scheme**

As the pages of the site have a background image, I wanted to keep the colour scheme used on the site quite small so as to not overwhelm users. Red and white  are very typical colours in use.

Then I used http://colormind.io/ to find matching colors for my scheme. After picking out my five main colors I used [contrast-grid.eightshapes.com](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=262525%0D%0AEB3947%0D%0AEEEDEC%0D%0A8C928F%0D%0A8C8D93%0D%0A%237C8C7C&es-color-form__tile-size=regular&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp) to check the contrast and possible color combinations.

![Color contrast](assets/images/media/colour-schemes.png)

### **Fonts**

Google Fonts was used to import the chosen fonts for use in the site.

- For the Page Title I have used the google font Nova Square. Nova Square  is a stunning font family that offers a wealth of creative possibilities.

- For the body of the page I have used the google font nova square to keep the pages typography uniform.

### **Logo and Images**

After choosing my colors and fonts I wanted to make a simple Logo for my website.

![The Sneaker Logo](assets/images/logo.PNG)


## **Features**

* The title of the site at the top of every page. This title also acts as a link back to the home page.
  ![The Sneaker Quiz Title](assets/images/media/logo-title.png)

* A favicon in the browser tab.

  ![favicon](assets/favicon/android-chrome-192x192.png)

  ### **Home Page**

  The home page of The Sneaker Quiz displays the sites name as a title and then a container which holds some welcome text, including alerting the users that they can navigate back to the home page at any time by clicking on the page name. Below this are three buttons, how to play, play and high scores.

![Home page image](assets/images/media/homepage.png)

The how to play  button opens a modal showing the user how to play the game. The modal contains a close button which will close the modal, and show the home page again.

![Modal open image](assets/images/media/modal.png)

The play button will redirect the user to the game page  of their quiz and the high Scores button redirects the user to the high scores page.



### **Game Page**

The game page displays the sites name as a title. This also acts as a link back to the home page. They will then be shown the quiz area. The quiz area contains the question and the 4  answer choices.
When a user selects an answer, they will then be prevented from selecting any more answers. The quiz area border and the button selected will change styles depending on whether the answer selected was correct or incorrect.

![Image of quiz area](assets/images/media/quiz-area.png)

### **End Page**

Once a user has answered the 10 questions they will be taken to the end of the game which will allow them to enter their  name and submit it to be entered onto the high scores page if it is in the top 5 scores. The submit button is disabled by default to prevent the user from submitting without a team name. 

![End of game](assets/images/media/end.png)

### **Highscore Page**

The high scores page displays the sites name as a title. This also acts as a link back to the home page. The page then displays the high scores recorded - showing the name a user chooses and their score. The high scores page will list the top five scores recorded. 

![High Scores Page Image](assets/images/media/highscore.png)


### **Custom 404 Page**

The 404 error page displays the sites name as a title. This also acts as a link back to the home page. Within the page container there is a sorry message explaining to the user that there has been an error directing them to the page they were looking for. 

![Error page image]()

### **Future Enhancements**

In future implementations I would like to

1. Allow users to share their quiz results on social media platforms like Facebook or Twitter.
2. Instead of a fixed set of questions, implement a dynamic question pool where questions are randomly selected from a larger database each time a user takes the quiz. 
3. Allow users to create accounts and log in.
4. Implement different difficulty levels for the quiz, ranging from beginner to expert.









