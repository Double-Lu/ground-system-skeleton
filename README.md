# bare-bones potential code structure for UAS

---

## Main Server
### Any back-end web language: Java, <span style="background-color:green;">NodeJS</span>, Python, C#, Ruby, PHP, etc.
* Receives a data stream from the UAV
  * Process these as 2D arrays, eg. position: [  [x0, y0, z0 ] , [x1, y1, z1] , [x2, y2, z2], ... , [xi, yi, zi] , ]
* Sends data to a service in the user-facing application
  * After processing data from UAV, we send the **relevant** data, formatted to our preference, to the mobile app

* Receives requests from a service in the user-facing application
  * Define routes in our server for things like "Go \<coordinates\>" and "Inspect \<coordinates\>" and "Return to base", etc.
* Sends commands to a service on the UAV
  * The format will be defined by ROS conventions in packages we use or create ourselves, because ROS controls this part of the system


---

## On-board Software (ROS)
### ROS Packages can be written in Python and C++ (as far as i know...)
* Receives directives from the Main Server, but will operate autonomously, obviously with some sort of "killswitch"
  * The format will be defined by the ROS packages we use or create
* Streams sensor data
  * The format will be defined by the ROS packages we use or create

---

## User-facing Application (Mobile, Desktop or Web)
### Any mobile application framework: <span style="background-color:green;">Xamarin (C#, cross-platform)</span>, React Native (JavaScript, cross-platorm), Android Native (Java), iOS Native (Swift or Objective-C?), Windows Native (C#, we're not doing this) 
#### and/or
### Any desktop application framework: Qt (C++), GTK+/GTK# (cross-platform, mobile too), JavaFX, Tkinter (Python)
#### and/or
### Any front-end web application framework/toolset: Angular, Ember, Polymer, React, etc. or just plain JavaScript

* Receives nicely-formatted data from Main Server
* Routes data through to the right places
  * Send appropriate data to the data visualization controller, so it can update the user display accordingly
  * Cache some data in a local database/CSV/storage
  * any other parts of the app we want can subscribe to some data from the drone, and a service in our app will be responsible to get pass the data to the right function
* Handles user input: button clicks and voice commands
  * a UI controller can manipulate the UI views or call one of the app's services to send a request to the Main Server (just functions calling other functions that send a specific TCP request )
