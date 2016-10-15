# bare-bones potential code structure for UAS

----

## Main Server
### Any back-end web language: Java, NodeJS, Python, Ruby, C#
* Receives a data stream from the UAV
...Process these as 2D arrays, [  [x0, y0, z0 ] , [x1, y1, z1] , [x2, y2, z2],  ... , [xi, yi, zi] , ... ]
* Sends data to a service in the user-facing application
...After processing data from UAV, we send the **relevant** data, formatted to our preference, to the mobile app

* Receives requests from a service in the user-facing application
...Define routes in our server for things like "Go <coordinates>" and "Inspect <coordinates>" and "Return to base", etc..? We can think of more
* Sends commands to a service on the UAV
...The format will be defined by ROS conventions in packages we use or create ourselves, because ROS controls this part of the system

----


## On-board Software (ROS)
### ROS Packages can be written in Python and C++ (as far as i know...)
* Receives directives from the Main Server, but will operate autonomously, obviously with some sort of "killswitch" implemented so it doesn't try to take over the planet
...The format will be defined by the ROS packages we use or create
* Streams sensor data
...The format will be defined by the ROS packages we use or create

-----

## User Interface (Mobile or Desktop App)
### Any mobile application framework: Xamarin (C#, cross-platform), React Native (JavaScript, cross-platorm), Android Native (Java), iOS Native (Swift or Objective-C?), Windows Native (C#, we're not doing this) 
#### and/or
### Any desktop application framework: Qt (C++), GTK+/GTK# (cross-platform, mobile too), JavaFX, Tkinter (Python)
#### and/or
### Any front-end web application framework/toolset: Angular, Ember, Polymer, React, etc. or just plain JavaScript

* Receives nicely-formatted data from Main Server
* Routes data through to the right places
...Send appropriate data to the "visualization" controller, so it can update the user display accordingly
...Cache some data in the local SQLite db? 
...any other parts of the app we want can subscribe to some data from the drone, and a service in our app will be responsible to get pass the data to the right function
* Handles user input: button clicks, voice commands, etc?
...a UI controller can manipulate the UI views or call one of the app's services to send a request to the Main Server (just functions calling other functions that send a specific TCP request )
