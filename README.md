# Project Four - Cirque du Sore-Legs

## Description

Project Three was a solo where I had to create a Python-Django full-stack application with full CRUD capabilities and multiple relationships in the back end. Server-side created with Django, Python and connect it with a React frontend.
The topic of the application is another passion of mine; which is competitive obstacle course racing and ultra endurance trail running. So, this application is a running event listing - where event organisers can add events, and runner will be able to leave comments, and also “like” if they are attending the event.


## Deployment Link

Link broken - coming soon

## Instructions 

Follow the link and enjoy the site. No need to install any packages. Click and play.

## Timeframe & Team

This was a solo project. It was officially worked on from 4th Jan until the 12th Jan.

## Technology

Technologies used:
VS Code
Excalidraw
Heroku
Opera browser (Chromatic)
Neon

Packages for VS Code used:
React
React Router Dom
React Bootstrap
React Leaflet (Map package)
Django
Sass

Languages used:
HTML
Javascript
CSS/ SCSS (with Sass)
Python

## Brief

This project was to demonstrate our skill in creating a backend server and then feeding the information to a frontend application.

Requirements:
Build a full-stack application by making your own backend and your own front-end.
Use an Express API to serve your data from a Django database.
Consume your API with a separate front-end built with React.
Be a complete product which means to add multiple relationships and CRUD functionality for at least a couple of models.
Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
Have a visually impressive design to kick your portfolio up a notch.
Be deployed online.

## Planning

After thinking about an idea/topic for my application; I decided to go with something I am truly passionate about, other than something alcohol based (which I have done twice before).

To flesh out the idea, I made sure my model was complete and didn’t have to have too much changing later on, which would complicate things.
Then I started on my wireframes and model relationship. While writing these out I also added tabs to my Trello planning board, which helped me keep track of the project; and also made sure I didn’t get too distracted with stretch goals and let me focus on delivering my MVP.



### Wireframe
The first step was to generate my wireframe. Below you can see my frontend path, and also the client  facing design.

![wireframe setup](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/fd39e7f0-14d4-4fa7-a9fe-056c3aa12aa4)
![wire-home](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/90a1a1e6-396b-4efd-a2bd-63786c730c98)
![wire-indexpage](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/5fe8ea40-0996-436b-888f-9b31d90a8f52)
![wire-single](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/3a0ba02b-e4c2-4bcd-b4bb-9f07c0124e65)


### Pseudocode/Trello
While planning and designing my wireframe I simultaneously put together a rough pseudocode. This code list was then transformed into my trello board. Seen below

![trello](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/3e0368c1-876b-418e-b6bf-40cf168b8085)

## Build. Code Process

### Backend setup
First I began setting up the server side. Here I started by creating urls, views and serializers for my main model (Events) and then to build on the relationships connected to it.
My well-thought out model that I preplanned helped tremendously; as I also noted down what type field I would use for each.

 ![model](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/d5e1de80-04fb-404d-9f73-4fde605f2e8b)

After this I then added the urls, views, and serializers for the User to register and log-in, along with adding the JWT Authentication which would act as a secure route in the back end. The User/owner was also in a relationship with my Events model via ForeignKey; This was to make sure that users could see their own created events on their profile; and also be the only ones to update/delete them.



### Frontend
Next I decided to see that my backend works. I should create a basic bones frontend using Vite to create my client folder. Here I set up all my paths in main.jsx and created several component pages: home, index, single-event, error-page, create, and update.

Then I also added all my ‘utilities’; here are my functionality files that included my ‘actions’ folder - which had my methods for deleting, creating, updating, as well as register and login. A ‘helper’ file with common.js that lets me code as DRY as possible throughout my page by referring to this file for all JWT queries. And lastly my ‘loader’ file for my method to GET all events/ single events, and get user data.

![jwt auth](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/e69939a5-75f4-47f5-841e-09d44c75957a)

Now that I have a barebone react page going, I started with my register/login components. To make the page more sleek I opted for a modal to overlay the page. And to make it even smoother in the design stage - I wrote one button for register/login. The modal pops up with the register form; with an option to login at the bottom. Once logged in, the button will change to a logout button.

![login-btn before](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/f104d768-fe31-42a4-821c-99fc1fb378bc)

![login-code](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/d67db4f3-f24e-4363-9485-479a22b16af1)

![modal](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/5953f115-476f-457e-98ea-4f953e5c5db4)

![login-btn after](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/2b5fe6cc-feb3-4cc4-b4cf-f1f351049418)



Once I finished with login/logout and JWT authentication and tested it all, the rest fell into place fairly quickly.
To get a decent portion of the visual out of the way; it was time to display all my information for the user to see. Using Loaderdata and my little actions folder; I accessed all the info from my database (five fake events - so I had something to play with). Thankfully wireframing this part in advance made the HTML structure easy.

![wire-index](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/ca070521-45b3-40f2-93b3-0394f9ea6446)
![index display](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/f1045a68-c353-4e2e-a6d2-76870fc3f6be)

Using some clever logic, I wrote a dynamic search bar. When typed in it will filter the items below by number, distance, type, or any particular word, e.g. Nuclear, Beast, etc..

![searchbar](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/0ba76b51-abe7-47bc-8a51-e62bdee5ef23)


My next big chunk of work was to make my ‘create and update’ pages. Once logged in, you could navigate to the Profile section where the Create button is waiting. Using State and formData, the fields would be filled in and then on handleSubmit sent to the database for storage. Incidentally I used that formData to populate all the fields for the User, if they want to update anyevent; as my update method was set as PUT, this meant all fields needed to be “updated” in order to form a valid request. Since all fields were populated; this stopped the user from encountering a bad request/error.
I also love using a map. In a previous project I used React-Leaflet. The issue was during creation; the user had to add a latitude and longitude coordinate. This was clunky. Using the MapBox API - a user could enter an address line; the API would find it on the map, and then return a lat & long value and populate the model in saved data.

![mapbox](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/dc4bb971-f077-46e3-859d-bd1a84b6219a)
![create](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/649b18b3-953c-45a2-b06f-1c1d8db8a41d)
![create form](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/5cbcc55c-aaae-4d2d-8bc5-efd5efd39c65)

Once saved; LoaderData and Leaflet extract these values and display them on the map. One map on the index page for all events, and one map for just the single event on the event page.


Since users often make unpredictable moves, there is, as always with my work, an error-page to which the user will be redirected. This is featuring the chrome-dino running game. Since my app is focused on running events; I thought this to be appropriate.

![dino](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/e89ffb59-7983-461a-844a-03f6a2f5d8ae)

### STYLING TIME - A bit more effort this time!
Since the frontend part of this project was rather similar to a previous project; I decided to focus on new little tricks to include.

Playing around with gradients + colouring and then throwing in some blend-modes. I designed my own background in pure CSS. Personally, pretty chuffed how this turned out.
![background](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/8115b554-579e-4e2b-bc6a-3fa7ec432934)
![background code](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/95ccba60-f972-4e77-a9e8-39082500c557)

	
More playing around; I managed to create a 3d effect to what I am now calling “Jelly/Candy Buttons”.

![login-btn before](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/f104d768-fe31-42a4-821c-99fc1fb378bc)
![jelly 2](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/dac1acf2-7ded-4c61-b26b-1c213fca57c2)
![jelly1](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/5fa92d97-bebb-4c64-b82b-0e7bcc610d69)

And lastly, my Hero. Here are two images overlaid and the top one divided into divs. When mouse-hover is detected; the bottom image will reveal itself on that vertical and fade back to the original image. So, dragging the mouse across, shows the whole picture for a moment.

![hero](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/78d3e1c7-c59b-4cf5-a033-a0e514bdf85e)
![hero-code1](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/b8370eaa-1928-4a94-9b50-faa04b60aadb)
![hero-code2](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/fbb29ec7-fce2-4fb1-a192-714c806dce1d)
![hero-code3](https://github.com/player1xs/Cirque-du-Sore-Legs/assets/148089820/1e5978dd-d897-4857-a9d8-fa55e580f897)

### INCOMPLETE!
For the moment the Profile page, for example, is bare apart from the create button. This is intentional. The plan is to create a multi-user model on the backend - one for Event Organisers, and one for Runners/attendees; then using authentication/validation to check what kind of user is logged in, which would allow them certain permissions.
Sadly, I did not get round to creating the multi-user model and focused on my deliverables and deadline.

The plan in the future is to implement this feature. This is why the profile page is bare. But also, in my back-end I have written the functions to leave comments on events and even a ‘like/attend’ button for the runners, ready to go.
Leaving the sections as they are is to my design, so that in future when the multi-user model is implemented all the features can be easily added in without having to delete/ major rewrite code with the least amount of complication.


## Challenges
	Trying to create a multi-user model in python was a little challenging. This is not something we went over in class and to my knowledge was the only one to attempt this. After playing with the idea over the weekend - I scrapped the entire code and started fresh on the monday. Meaning, I had 3 days less to complete the project. As mentioned; I took this decision to make sure I hit the deadline and delivered all requested features. My plan is to work on this in future; I have left an open path in my code to do so with future planning.


## Win
Setting multiple relationships made my backend more complex. But, this worked rather smoothly, mostly because of my preplanning.
But, the major win here is playing around with what I am calling ‘advanced’ CSS tricks. Presenting these features to my classmates delivered a wow-factor; as most weren’t aware how far one can push CSS/SASS.

## Takeaways
After setting myself a challenging task, I was personally glad I could take a step back, breathe, and focus on what was important, rather than crudely implement a reach-goal.
As always, preplanning is just hugely important, which is why I still (super-analog) have a notepad and pen by my side when something pops in my head, and when I have a minute to convert that idea into pseudocode and then into reality.

Given my previous work-life; I can easily work by myself. Time management and staying dedicated are not things I struggle with. But, I realised the importance of still talking to your peers; which is why I reached out and organised water-cooler chats/ standups. Show and tell and cheering others on/being cheered are rather motivating - when living/ working remotely all by oneself.

## Bugs
Sometimes other users can access the update/delete page although they don’t own the event. (but only sometimes)
If the image isselected in the upload-create section and the create button is clicked before the image is rendered; it will not save. No errors shown; just have to wait a moment. (using State and better logic, this will be fixed.)

## Future Improvements
Implement the multi-user model
Sort events by date
