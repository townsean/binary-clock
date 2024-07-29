# binary-clock
A web based clock displaying time of day in binary format.

## Synopsis

This web app is a simple clock displaying the current time of day in binary format. The purpose of this project is to use it as a tool for mentorship. 

### What is binary format?

Binary is a base-2 numeral system where numbers are expressed with the digits 0 and 1. At the lowest level, computers operate with a binary system where 1 represents "on" or true and 0 represents "off" or false. 

To convert a decimal number (base-10) to a binary number, divide the decimal number by 2 and record the remainder. Continue this process until you get 0 for the quotient. The binary number is the combination of remainders in reverse order.

Consider the base-10 number 45. To convert this to a binary number:

1. Divide 45 by 2. The result is 22 remainder **1** (least significant digit).
2. Divide 22 by 2. The result is 11 remainder **0**.
3. Divide 11 by 2. The result is 5 remainder **1**.
4. Divide 5 by 2. The result is 2 remainder **1**.
5. Divide 2 by 2. The result is 1 remainder **0**.
6. Divide 1 by 2. The result is 0 remainder **1** (most significant digit). 

The binary representation of 45 is **101101**. 

Now, let's check our work by converting the binary number **101101** to decimal. To convert a binary number to decimal, take the sum of 2<sup>x</sup> where x represents the binary digit's place for each binary digit equal to 1. 

In the case of **101101**, that would look like:

| 1 | 0  | 1 | 1 | 0 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| 32 | 16 | 8 | 4 | 2 | 1 |

32 + 0 + 8 + 4 + 0 + 1 = **45**

### How can time be represented in binary format?

To display time in binary format, we will show the digits with a series of lights where *off* represents a 0 and *on* represents 1. 

The time will display in 24-hour format. Each increment of time (hours, minutes, seconds) will have it's own set of lights for displaying their numbers. To read the time on a binary clock, convert binary number (represented with the lights) to decimal. The topmost light in a column is the most siginficant digit. 

## Project Setup

Run with local web server

```bash
python -m http.server 8000
```

## Built With

* Vanilla JS
* Visual Studio Code

## Useful Resources

* [How to Read a Binary Clock | WikiHow](https://www.wikihow.com/Read-a-Binary-Clock)
* [How to convert numbers to binary](https://www.instructables.com/How-to-Convert-Numbers-to-Binary/)

## Maintainers

* [Ashley Grenon - @townsean](https://github.com/townsean)

## License (MIT)

MIT License

Copyright (c) 2024 Ashley Grenon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.