# Loopstudios-landing-page
This is a landing page named Loopstudios created using HTML,SCSS and Javascript.
This project has utilized a Javascript Scroll animation library called AOS(Animate on Scroll)

This is my first ever project created using SASS which happens to be a CSS preprocessor, and has various efficient functionalities such as variables, mixins, functions, etc.
Some of them that are utilized by this project are:-
## 1) Variables in SASS
Syntax
```
$[variable-name]: [value]; //This value can be a color or any property value
```
Now this variable can be used for the respective property value.
## 2) Mixins and Include
Syntax
```
@mixin [name]{
margin:30px;
padding:30px;
color:#000;
}
//Now you can add this snippt using include
h1{
@include [name];
}
```
## 3) Nesting
This concept allows us to nest the code to visit children HTML elements through the parent HTML elements.
```
.parent{
font-size:30px
  .child-one{
    color:red;
    }
  .child-two{
    color:blue;
    }
}
```
For more about SASS, you can visit the documentation site:- https://sass-lang.com/documentation
### 4) AOS(Javascript library)
   This library allows us to add stunning on scroll animations to improve user experience.
   
   GitHub repository: https://github.com/michalsnik/aos
   
   You can get started with this by either using
   
   i) CDN straight to your HTML file
   ```
     <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
   ```
   ii) Also add this script tag at the end of the file before your main.js file
   ```
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
  ```
   OR
   
   ii) Downloading it either using npm or yarn and then importing it to your file.
   
   for npm: ```npm install --save aos@next```
    
   for yarn: ```yarn add aos@next```
    
   Importing it to your file.
   ```
   import AOS from 'aos';
   import 'aos/dist/aos.css'; // You can also use <link> for styles
     // ..
   AOS.init();
   ```
   
   ## Desktop design
   ![image](https://user-images.githubusercontent.com/78952955/147336163-54d7cae4-178b-4b10-91e6-03c8c6d4d52d.png)
   ## Mobile design
   ![image](https://user-images.githubusercontent.com/78952955/147336316-a3f8840a-fd0b-4e5d-91e0-5f566f97d89b.png)
   ## Live site URL
  https://loopstudios-org.netlify.app/
