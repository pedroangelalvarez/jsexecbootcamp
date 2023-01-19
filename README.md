# JS executor Boot camp
## 1. What is JS executor?

A JS executor is a program that runs JavaScript code. This can be done in a web browser, where the JavaScript code is executed within the context of a web page, or in a JavaScript runtime environment such as Node.js, where the code is executed on the server-side. There are also standalone JavaScript engines such as V8 or SpiderMonkey that can be embedded in other applications to provide JavaScript execution capabilities.

## 2. How use JS executor with Selenium?

Selenium is a browser automation framework that allows you to control a web browser and interact with web pages using a programming language such as Python or Java. One of the features of Selenium is the ability to execute JavaScript code within the context of a web page.

## 3. Which inputs can be used with JS executor?

The JavaScript executor in Selenium can accept various types of inputs, depending on the JavaScript code that is executed. The following are some examples of the types of inputs that can be passed to the JavaScript executor:

Primitive types: The JavaScript executor can accept primitive types such as numbers, strings, and booleans as arguments.


`
result = driver.execute_script("return arguments[0] + arguments[1];", 1, 2)
`


In this example, the JavaScript code "return arguments[0] + arguments[1];" is executed and it's passed with two numbers 1 and 2 as arguments, and the result is 3.

Objects: The JavaScript executor can accept objects such as arrays and JSON objects as arguments.


`
driver.execute_script("arguments[0][0] = 'new value';", my_array)
`


In this example, the JavaScript code "arguments[0][0] = 'new value';" is executed and it's passed with an array my_array as an argument, and it will change the first element of the array to 'new value'.

DOM elements: The JavaScript executor can accept DOM elements as arguments, which can be used to interact with the web page using Selenium's Element API.


`
driver.execute_script("arguments[0].style.border='3px solid red'", element)
`


In this example, the JavaScript code "arguments[0].style.border='3px solid red' is executed and it's passed with a DOM element element as an argument, and it will change the border of the element to 3px solid red.

Functions: The JavaScript executor can accept functions as arguments.


`
script = "return function(arg1,arg2) {return arg1+arg2};"
`


my_function = driver.execute_script(script)
print(my_function(1,2))
In this example, the javascript function "function(arg1,arg2) {return arg1+arg2};" is passed as an argument to javascript executor and stored in my_function variable, later it's called with two numbers 1 and 2 as arguments, and the result is 3.

You can use the JavaScript executor in Selenium along with CSS selectors to interact with web page elements. CSS selectors are used to select elements in the DOM (Document Object Model) of a web page, and the JavaScript executor can be used to perform actions or retrieve information about those elements.

Here's an example of how you can use a CSS selector along with the JavaScript executor to change the text of a button on a web page:


`# Use a CSS selector to find the button element`

`button = driver.find_element_by_css_selector("button")`

`# Use the JavaScript executor to change the text of the button`

`driver.execute_script("arguments[0].innerHTML = 'New Text';", button)`


In this example, the find_element_by_css_selector method is used to find the button element on the web page using its CSS selector. The execute_script method is then used to execute JavaScript code that changes the innerHTML property of the button element to "New Text".

You can also use the querySelector and querySelectorAll JavaScript function to select the elements with CSS selector,


`
element = driver.execute_script("return document.querySelector(arguments[0])", ".classname")
`


In this example, the querySelector function is used to select the first element with classname "classname" and returned by the javascript executor.

Similarly, you can use the querySelectorAll function to select all elements with a specific classname and returned as a list of elements.


`
elements = driver.execute_script("return document.querySelectorAll(arguments[0])", ".classname")
`


It's worth noting that you can also use other DOM traversal function or DOM manipulation function along with CSS selector such as getElementsByClassName, getElementsByTagName, getElementById etc to select the elements and perform actions on them.

It's worth noting that the JavaScript executor in Selenium can accept any valid JavaScript code as input, and it will execute the code within the context of the current web page.

## 4. Which types of values can be returned by JS executor?

The JavaScript executor in Selenium can return various types of values, depending on the JavaScript code that is executed. The following are some examples of the types of values that can be returned by the JavaScript executor:

Primitive types: The JavaScript executor can return primitive types such as numbers, strings, and booleans.

Objects: The JavaScript executor can return objects such as arrays and JSON objects.

DOM elements: The JavaScript executor can return DOM elements, which can be used to interact with the web page using Selenium's Element API.

null or undefined: The JavaScript executor can return null or undefined if the executed code doesn't return any value or if the variable is not defined

Functions: The JavaScript executor can return a function, this function can be called later on.