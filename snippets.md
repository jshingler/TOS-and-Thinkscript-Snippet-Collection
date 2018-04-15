# TOS & THINKSCRIPT SNIPPET COLLECTION INTRODUCTION

A 'snippet' is a small piece(s) of script, oriented towards accomplishing a specific function identified by the snippet's title. A snippet is not a TOS study or strategy, although it may be. A snippet is often used in developing such studies to accomplish a specific feature or function. This PDF also takes the liberty to include TOS-platform-features that are not script snippets but may be features worth being well known by TOS users. However, the emphasis herein will be on script snippets. Some snippets may be simple or complex. While simple, the snippet may seem superfluous. They exist because this PDF is also oriented towards those learning ThinkScript from scratch. Also, the hyperlinked Table Of Contents allows one to skip to exactly the subject of interest and usage is not burdoned by the inclusion of simple snippets.

## <a name="toc"></a>Table of Contents
1. INTRODUCTION.....Page 1
2. [B-ADD INFO BUBBLES TO A STUDY OR A STUDY'S INPUTS.....Page 5](#2)
3. [B-IF EXPRESSIONS AND STATEMENTS EXPLAINED.....Page 5](#3)
4. [B-CHANGE THE COLORING OF A PLOT BASED ON A CONDITION.....Page 6](#4)
5. [B-HOW THINKSCRIPT CALCULATES.....Page 7](#5)
6. [B-COLORS AS USED IN TOS/THINKSCRIPT.....Page 8](#6)
7. [B-OFTEN USED COLORING CODE STATEMENTS.....Page 9](#7)
8. [B-IMPLEMENTING LABELS.....Page 10](#8)
9. [B-AGGREGATION.....Page 12](#9)
10. [B-EXPLANATION OF '=' , '=='AND '!' .....Page 13](#10)
11. [B-REFERENCING OTHER STUDIES.....Page 13](#11)
12. [T-USING CUSTOM COLUMN AGGREGATION.....Page 14](#12)
13. [B+C-NORMALIZATION.....Page 15](#13)
14. [B-COUNTING AND USE OF 'COMPOUNDVALUE'.....Page 16](#14)
15. [B-LINEAR REGRESSION .....Page 16](#15)
16. [S-LINEAR REGRESSION-VAR SCAN.....Page 17](#16)
17. [B-TWO WAYS TO CALCULATE % CHANGE.....Page 17](#17)
18. [B-FORMATTING WITH 'AsText', 'AsDollars' AND OTHERS.....Page 18](#18)
19. [B-LITERAL TEXT IN LABEL FOR THE 11 CHOICES OF INPUT PRICE.....Page 19 ](#19)
20. [C-UPPER & LOWER BANDS AT DEFINED PERCENT .....Page 19](#20)
21. [C-STANDARD DEVIATION CHANNELS.....Page 19](#21)
22. [B-THE SIMPLEST REC IN TS.....Page 20](#22)
23. [B+C-EXAMPLE OF 4 NORMALIZATIONS.....Page 20](#23)
24. [C-DATE LABEL IN MM/DD/YYYY FORMAT.....Page 21](#24)
25. [B-WHAT IS SWING-HIGH, SWING-LOW.....Page 21](#25)
26. [B-USAGE OF THE SWITCH FUNCTION.....Page 22](#26)
27. [C-HORIZONTAL LINES OF HIGHEST-HIGHS AND LOWEST-LOWS.....Page 22 ](#27)
28. [C-VARIOUS MARKET TIME VARIABLES .....Page 24](#28)
29. [C-VERTICAL LINES AT START AND END TIMES.....Page 25](#29)
30. [C-VERTICAL LINES AT INPUTTED BAR LOCATIONS.....Page 25](#30)
31. [C-COUNTING & PLOTTING OF BARNUMBERS.....Page 26](#31)
32. [C-BAR COUNT BETWEEN HIGHS & SHOW BAR NUMBERS.....Page 26](#32)
33. [C-MARKET OPEN AND LUNCH TIMES.....Page 27](#33)
34. [C-SQUEEZE SCAN WITH MACD EXIT .....Page 27](#34)
35. [C-SHOWING WHERE A CANDLE PATTERN EXISTS.....Page 27](#35)
36. [C-VOLUME AS A % OF THE ??-DAY-AVERAGE.....Page 28](#36)
37. [SC-IDENTIFY CURRENT LOW THAT HAS GAPED UP.....Page 29 ](#37)
38. [C&S-PERCENTAGECHANGEOFANAVERAGE(SCANOR PLOT).....Page29](#38)
39. [C-ARROW AT THE DEFINED TIME EACH DAY .....Page 30](#39)
40. [C-SHOWS ARROWS WHEN THE PRICE CROSSES THE MOVING AVERAGE.....Page 30 ](#40)
41. [C-LINE FROM OPEN OF FIRST BAR OF DAY OR YESTERDAY'S CLOSE.....Page 31](#41)
42. [C-% CHANGE OF THE FIRST BAR VALUE.....Page 31](#42)
43. [C-% CHANGE COMPARED TO ? DAYS-AGO.....Page 32](#43)
44. [C-LOW IS ?% ABOVE YESTERDAY'S HIGH.....Page 32](#44)
45. [C-IMP-VOLATILITY PERCENTILE.....Page 32](#45)
46. [C-YTD PERCENT CHANGE.....Page 32](#46)
47. [C-PLOT A HORIZONTAL LINE THRU A DEFINED DATE.....Page 33 ](#47)
48. [C-ADD AN INDEX OR FUTURE LOWER CHART.....Page 34](#48)
49. [S-SCAN FOR TRENDING CONDITIONS.....Page 35](#49)
50. [S-SCAN FOR MACD AVG AND MACD DIVERGENCE.....Page 35](#50)
51. [S-PRICE DIRECTION SCAN.....Page 35](#51)
52. [S-SCAN FOR HAS-EARNINGS IN FUTURE.....Page 36](#52)
53. [C-LINE RSI WITH MACD HISTOGRAM.....Page 36](#53)
54. [C-MARKET SENTIMENT.....Page 37](#54)
55. [S-SCAN FOR CORRELATED STOCKS.....Page 37](#55)
56. [C-MARKET FORECAST PLOTTED BY REFERENCE.....Page 37](#56)
57. [S-DMI_OSCILLATOR SCAN FOR TRENDING-UP STOCKS.....Page 38](#57)
58. [C-TRIPLE EMA & STD DEV MONITORING.....Page 38](#58)
59. [C-FAST-MED-SLOW TRUE RANGE OSC.....Page 39](#59)
60. [S-EXAMPLE OF TIME BRACKETED SCAN.....Page 39](#60)
61. [C-CHANGE STUDIES BASED ON SYMBOL VIEWED.....Page 40](#61)
62. [S-SCAN FOR HIGHS OR LOWS.....Page 40](#62)
63. [C-PLOTS HIGHER-HIGHS AND LOWER-LOWS.....Page 41](#63)
64. [T-HOW TO DECIPHER COMPLEX STUDY PLOTS.....Page 42](#64)
65. [C-CANDLESTICK PLOTS.....Page 42](#65)
66. [C-ATR TRAILING STOP.....Page 43](#66)
67. [C-EARNINGS.....Page 44](#67)
68. [C-SLOPE OF AN AVERAGE + 'AVERAGE TYPE' USAGE IN A LABEL.....Page 45](#68)
69. [C-TODAY'S MARKET OPENING PRICE.....Page 45](#69)
70. [S-SCAN RSI UNDER 20 & CLOSE > 200-DAY SMA.....Page 46](#70)
71. [S-SCAN FOR CROSS OF MOVING AVERAGES.....Page 46](#71)
72. [S-SCAN CROSS OF STANDARD DEVIATION CHANNEL.....Page 46](#72)
73. [S-ABOVE 20-DAY MA FOR 65 DAYS.....Page 46](#73)
74. [S-SCAN FOR 200-DAY MA.....Page 47](#74)
75. [S-SCAN FOR A BULLISH ADX.....Page 47](#75)
76. [S-SCAN FOR DMI.....Page 47](#76)
77. [S-SCAN USING PRE-DEFINED CROSSOVERS.....Page 48](#77)
78. [S-MACD SCAN.....Page 50](#78)
79. [C-PLACING OF PLOTTED ARROWS.....Page 50](#79)
80. [B-SPECIFYING 'AVERAGETYPE' INPUT.....Page 50](#80)
81. [C-ORDER BASED ON DIFFERENCE OF 3 MOVING AVERAGES.....Page 51](#81)
82. [C-DEFINING CONDITIONS IN BUY/SELL STRATEGY.....Page 51](#82)
83. [C- THE 'AdvanceDecline' STUDY.....Page 51](#83)
84. [C-PLOT FOR ? DAYS FROM A DATE.....Page 53](#84)
85. [B-ALERTS TUTORIAL.....Page 53](#85)
86. [B-MAKE A CUSTOM SCAN TUTORIAL.....Page 53](#86)
87. [B-MAKE A DYNAMIC WATCHLIST TUTORIAL.....Page 53](#87)
88. [C-PLOT THE CURRENT PRICE ACROSS AN ENTIRE CHART.....Page 53](#88)
89. [C-% VOLUME CHANGE FROM THE PREVIOUS BAR.....Page 53](#89)
90. [C-INTRADAY CURRENT PRICE CLOUD ATOP DAY'S HIGHEST CLOUD.....Page 54](#90)
91. [C-PLOT DUAL MOVING AVERAGES.....Page 55](#91)
92. [C-SIMPLE MOVING AVERAGE CROSS TRADING.....Page 55](#92)
93. [C-A VERSATILE ROBUST MOVING AVERAGE CROSS STUDY.....Page 56](#93)
94. [C-IMPLIED VOLATILITY LABEL AND PLOT.....Page 58](#94)
95. [C-INSIDE-BAR CODING.....Page 59](#95)
96. [C-FIRST AND LAST BAR FOR PLACING A BUBBLE.....Page 60](#96)
97. [C-DEFINE PREVIOUS DAY'S CLOSE.....Page 60](#97)
98. [C-CLOUDS WITHOUT A PLOT.....Page 60](#98)
99. [C-COUNTS OF CONSECUTIVE RISES OR DROPS OF THE CLOSE.....Page 61](#99)
100. [B-COMPARISON TO ANOTHER INSTRUMENT.....Page 61](#100)
101. [B-THE FOLD FUNCTION EXPLAINED.....Page 62](#101)
102. [C-DEFINE BAR AT A TIME AND DATE.....Page 65](#102)
103. [C-PRE/POST-MARKET SCAN & CHART.....Page 65](#103)
104. [S-NEW 52 WEEK HIGHS IN THE PAST ? DAYS.....Page 66](#104)
105. [C-ORDER BASED ON VALUE DIFFERENCE OF THREE AVERAGES.....Page 66 ](#105)
106. [C-DEFINES AGGREGATION IN A LABEL.....Page 67](#106)
107. [C-FIRST AND LAST BAR BUBBLES.....Page 68](#107)
108. [C- WEIGHTED MOVING AVERAGE AND FOLD USAGE.....Page 68](#108)
109. [T-A REFERENCE RECALL OF A STRATEGY'S RULES (SETUP).....Page 68](#109)
110. [T-FAST ACCESS TO EDITING A STUDY.....Page 68](#110)
111. [T-A NEW-TO-THINKSCRIPT MUST READ.....Page 69](#111)
112. [T-USING MULTIPLE TIME FRAMES TO PLAN ENTRIES .....Page 69](#112)
113. [T-WIZARD ACCESS FOR EDITING EXISTING STUDIES.....Page 69](#113)
114. [T-PRE MARKET MOVERS.....Page 69](#114)
115. [B-THE STOCHASTIC OSCILLATOR EXPLAINED.....Page 69](#115)
116. [C-COUNTER FOR NUMBER OF UP BARS.....Page 70](#116)
117. [C-COUNT OF CLOSE RISEN BY AN INPUTTED PERCENT .....Page 70](#117)
118. [C-PLOTS THE HIGH, LOW AND CLOSE OF ? DAYS AGO.....Page 71](#118)
119. [B-ACCESSING THE CONDITION WIZARD.....Page 72](#119)
120. [C-DATE AND TIME USAGE EXAMPLES.....Page 72](#120)
121. [C- SCALPER'S HELPER W/ SQUEEZE.....Page 78](#121)
122. [S-PRICE CORRELATION WITH THE SPX.....Page 80](#122)
123. [T-VERTICAL LINES AT MARKET OPEN AND CLOSED TIMES.....Page 80](#123)
124. [C-COLOR A PORTION OF A CHART.....Page 80](#124)
125. [C-CLOUD USAGE VIA MOVING AVERAGES.....Page 81](#125)
126. [T-EASILY VIEWING CHARTS OF STOCKS IN A LIST.....Page 82](#126)
127. [C-PLOTS THE DAILY HIGH AND LOW.....Page 82](#127)
128. [C-SELF-ADJUSTING RSI BANDS.....Page 83](#128)
129. [C-3 MOVING AVERAGES: CHANGING COLOR.....Page 84](#129)
130. [C-T3, ADAPTIVE SMOOTHING INDICATOR.....Page 85](#130)
131. [C- RSI ZEROLINE OSCILLATOR.....Page 85](#131)
132. [C-INSYNC INDEX .....Page 86](#132)
133. [C- CLOUD A TIME INTERVAL WITHOUT PLOTS.....Page 88](#133)
134. [C- IMPROVED TIME SERIES FORECAST STUDY.....Page 88](#134)
135. [C-VOLATILITY LABEL.....Page 89](#135)
136. [C-'BATTLE OF THE BANDS' RE IMPLIED VOLATILITY.....Page 89](#136)
137. [C-THE BEAUTIFUL 'GAUSSIAN RAINBOW' .....Page 91](#137)
138. [C- PRICE-TO-EARNINGS (P/E) RATIO FOR A WATCHLIST COLUMN.....Page 95 ](#138)
139. [C-OPENING RANGE (OR) STUDY WITH A TWIST:.....Page 95](#139)
140. [T-CHANGING THE HEADER TEXT COLOR .....Page 98](#140)
141. [C&S-THE MARKET FORECAST REPLICA.....Page 98](#141)
142. [C-DRAW A LINE BETWEEN TWO PRICE POINTS.....Page 100 ](#142)
143. [C-VOLUMELABELASAPERCENTOFANINPUTTED X-DAYS-AVGVOLUME.....Page100](#143)
144. [C-SHOWS WHEN A DIVERGENCE EXISTS BETWEEN PRICE AND THE MACD. USED IN A WLC......Page 101 ](#144)
145. [T-SEQUENCECOUNTER AND GRID UASGE.....Page 102](#145)
146. [T,C-!6 EXAMPLES OF THE USAGE OF THE 'SUM' FUNCTION.....Page 102](#146)
147. [NEXT ITEM TO BE ADDED .....Page 106](#147)
148. [NEXT ITEM TO BE ADDED .....Page 106](#148)
149. [REFERENCES.....Page 107](#149)


**Legend**

Click the underlined Page ? to go to that page When there, you can return to here by clicking [TOC Return](#toc) Headings appearing in the Table Of Contents above are colored blue throughout this document

Revised: 01/08/14 12:51:52 AM

Organization: The first letter indicates the category of the subject.

B- = Basic platform or coding subjects, fundamental principles, fundamental examples and how-to-do's

S- = Scan

C- = Coding of studies, strategies, snippets, et al that accomplish a purpose/result

U- = Undefined. May be of multiple categories or just didn't comfortably fit a specific defined category

T-- = A Tip or Trick on how you might use TOS or TS to accomplish a specific useful purpose

?- = In the subject's heading, ? means that the data is variable 'inputted' data defined by the user


**Acknowledgements**

The people on the ThinkScript Lounge generously contribute much time and effort helping those learning and using ThinkOrSwim and ThinkScript. Many items herein originated on the ThinkScript Lounge chatroom postings. Much credit and thanks are due those people. We are all grateful to them for their selfless contributions.

**Usage**

Although a subject may not be of interest to you, the coding techniques involved may be pertinent to what you desire to code, either today or at some time in the future. It is useful to be aware of the techniques so that, when the time comes, you will know where to look to get the how-to-do specifics.

Hope you find this document useful. Any suggestion for improvement or inclusion are welcome.

Acronyms used herein

TOS = ThinkOrSwim

TS = ThinkScript

WLC = An abbreviation for "Watch List Column"

TOC = 'Table Of Contents' in this document

PDF = Portable Document Format = the type of file format of this document. Readers of PDF files are readily available.

See REFERENCES for a reader source.
Use of '...' and "..." Often the single and double quotes are used to identify precise coding, words or statements whose use is not intended to include the quote marks themselves. At times coloring may also be used to do the same.

Pre-defined and built-in are synonymous when referring to studies. Continued on Next Page

TOS & THINKSCRIPT SNIPPET COLLECTION Page 5

## <a name="2"></a>B-ADD INFO BUBBLES TO A STUDY OR A STUDY'S INPUTS
[TOC Return](#toc)

![Info Bubble](images/2-1.png?raw=true "Info Bubble")
![Info Bubble](images/2-2.png?raw=true "Info Bubble")

As shown above the study list and the inputs have info bubbles. You may add these info bubbles to your studies.
To make an 'Info Bubble' for a study and strategy:
1. Above the code lines, place #hint: ???????? where ???????? is the description you want displayed when the bubble is clicked.
2. The tags listed under 'TAGS and their PURPOSE:' may be used to format the ????????.
3. An example is ---> #hint: Plots a <b>trend line</b> between the two input dates.
To make an 'Info Bubble' for 'Edit Studies' input
1. Immediately after the semi-colon on the input's line (preferred location), place #hint <the input variable name>: (the desired text you want displayed when the bubble is clicked).
2. The tags listed under 'TAGS and their PURPOSE:' may be used to format the desired text.
3. An example is ---> input Length = 10 #hint Length: The number of bars used to calculate the average.
4. Notice that the colon is placed after the input variable name (in this case Length).
Formatting is possible using HTML tags. Some of the common tags you may be interested in are listed below:

### TAGS and their PURPOSE:
*****************************
```
<b> ......... </b>     Makes the text between the tags bold.
\n                      Starts a new line  
<li>........... </li>   Creates indented lists
```

Example of the following script and its result:

#hint: <b>Bar Count Between Highs</b>\n Counts the number of bars between each high in the specified length.

## <a name="3"></a>B-IF EXPRESSIONS AND STATEMENTS EXPLAINED
[TOC Return](#toc)


There are three forms of if statements. The 'immediate-if' is the shortest and is documented at http://demo.thinkorswim.com:7001/manual/metal/thinkscript/reference/Functions/Others/If.html . The other two are the 'if-expression' and the 'if-statement', both of which are documented at http://demo.thinkorswim.com:7001/manual/metal/thinkscript/reference/Reserved%20Words/if.html . The thinkscript documentation infers that there are more forms of the if-then-else, but the additional examples are merely the base form shown with nested if-then-else statements/expressions.

### The 'immediate-if' explained

The syntax is: `If(double condition, double true value, double false value);` This is the simplest and easiest to use. An example is: `Plot Maximum1 = If(close > open, close, open);` This reads as “If the close is greater than the open, then plot the close. Otherwise/else, if the close is not greater than the open, then plot the open.” This form is very useful as the right-hand side of the equal sign in a Plot or Def statement. Also this form can be used with `else` to create more complex conditions. This form is a function and returns a type of double that is very useful for the if-then-else statements/expressions when you are processing numbers and nesting.


The word 'double' is often vague in its meaning in ThinkScript but it means a floating-decimal-point-number of double
Makes the text between the tags bold. Starts a new line
Creates indented lists
precision in programming terminology. Any further meaning-clarification is unnecessary here. The impact of 'double' is that constants such as the names of the 23 ThinkScript colors, like LIGHT_RED, BLUE, UPTICK, etc., are not floating point numbers and hence cannot be used in this immediate-if. In this case, the if-expression would be used.

### The 'if-expression' explained
The syntax is: `if close > open then close else open;` An example is: `plot Maximum2 = if close > open then close else open;` An __IF....THEN....ELSE__ are all required. A nesting (putting if's within if's) example, in the recommended layout for easy reading, is:
```
plot Maximum2 = if close > open
then close
else if close = open
then (low + high)/2
else open;
```

Note that the last 'else open' relates to the 'if close > open' and applies when the intermediate 'else-if close = open' is not true. This nested-if reads as: If close is greater than the open then plot the close. If the close equals the open then plot the (low + high)/2 . If the close is not greater than the open and the close does not equal the open, then plot the open.
The if-expression will have only one semi-colon that will terminate the entire expression, regardless of the complexity.

### The 'if-statement' explained
The syntax and example is:

```
plot Maximum3;
if close > open [then]{
Maximum3 = close; } else {
Maximum3 = open; }
```
The `[then]` above means that it is optional but it is recommended that it always be used for clarity. Notice that each statement is enclosed within a block (the parts enclosed in the { } ) and must end with a semi-colon.

### Comparison of all three 'if' syntaxs

```
plot Maximum1 = If(close > open, close, open); # This is the immediate-if syntax
plot Maximum2 = if close > open then close else open; # This is an if-expression plot Maximum3; # This and the lines below make up an if-statement
if close > open {
Maximum3 = close; } else {
Maximum3 = open;
```

Excellent examples of the power of __if..then..else__ can be seen in these documents herein: ADD AN INDEX OR FUTURE LOWER CHART and SLOPE OF AN AVERAGE

## <a name="4"></a>B-CHANGE THE COLORING OF A PLOT BASED ON A CONDITION
[TOC Return](#toc)


A very favorite feature is to change the color of a plot based on a condition that you define. The 'HullMovingAvg' illustrates this very well. Here is its code:

```
input price = close;
input length = 20;
input displace = 0;
plot HMA = MovingAverage(AverageType.HULL, price, length)[-displace]; HMA.DefineColor("Up", GetColor(1));
HMA.DefineColor("Down", GetColor(0));
HMA.AssignValueColor(if HMA > HMA[1] then HMA.color("Up") else HMA.color("Down"));
```

In the above HMA>HMA[1] is the condition that says __IF__ the current HMA is greater than the previous value of the HMA, i.e. HMA > HMA[1] , __THEN__ paint the plot with the “Up” color which is defined as color(1) __OTHERWISE/ELSE__ paint the plot with the “Down” color which is defined as color (2). (1) and (2) are color index numbers. Color-assigned-index- numbers are explained in the separate topic.

The condition is always in a 'if.... then.... else' format. If-statements may be nested without limits. The format then becomes 'if.....then..... else if.....then.....else if.....then......else'. The closing 'else' is always present and relates to the initial if.... then when none of the nested if ...then's produce a result.

Example:
if SlowK > SlowD then color.green else if SlowK < SlowD then color.red else color.gray

The multiple conditions may be used to define a conditional statements. They are joined by 'and' or its equivalent '&&'. Example: def RangeCondition = ADX > 0 && ADX < 13;# ADX is between 0 and 13
Conditions may be nested as in this example:
```
Diamonds.AssignValueColor(
   If BullishCondition then color.green else
   If RangeCondition then color.white else
   If BearishCondition then color.red else
   color.black);
```
Note in the above, since color.green, color.white, color.red and color.black are constants and not double variables, the if-expression must be used and that requires the presence of all IF.....THEN.....ELSE parts.

Here is another example of multiple coloring in a label:
```
AddLabel(1, Concat("IV Percentile ", AsPercent(perct)), if perct > 0.80
  then Color.Green
  else if perct < 0.80 and perct > 0.50 then Color.Yellow
  else color.Red);
```


## <a name="5"></a>B-HOW THINKSCRIPT CALCULATES
[TOC Return](#toc)


In scans, conditional orders, and custom quotes there is only one bar, the latest or current bar. All scripts are run in real-time and the script processor only runs one iteration of the script. So within that context, certain functions make no sense, like barNumber(), HighestAll() to name a few, also rec variables. Functions that take a look back value or length, such as average( data, length ), highest( data, length ), etc. work because the internal logic of the function performs the action of looking back. No matter what the timeframe, in those contexts (scans, etc.), your script only runs once and only against the current (latest) bar.

In studies or strategies, ThinkScript runs your script once __for each and every bar__ on your chart, regardless of the aggregation period.

You will often hear knowledgeable programmers say with disappointment that 'ThinkScript' does not have arrays. Arrays are a common powerful programming feature for storing/recalling various data and data types. This is a limitation of ThinkScript that we must live with as best we can.

## <a name="6"></a>B-COLORS AS USED IN TOS/THINKSCRIPT
[TOC Return](#toc)


TOS has defined ten colors corresponding to index numbers on two different background colors as below:
The colors are used via the function __'GetColor(index number);'__ Example: GetColor(1) as used in the HullMovingAvg previous topic. Reference: [See Index Colors](https://tlc.thinkorswim.com/center/charting/thinkscript/reference/Functions/Look---Feel/GetColor.html)

![Colors](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/6-1.png?raw=true "Colors")

| Index | RGB Values  | Name of Color |
|:-----:|-------------|---------------|
|   0   | 255,16,253  | magenta       |
|   1   | 0,255,255   | cyan          |
|   2   | 255,174,174 | pink          |
|   3   | 191,191,191 | white         |
|   4   | 254,199,22  | gold          |
|   5   | 255,3,2     | red           |
|   6   | 0,254,30    | green         |
|   7   | 127,127,127 | dark_gray     |
|   8   | 254,254,31  | yellow        |
|   9   | 255,255,255 | white         |



RGB values for any color you desire to compose.

This free tool will help you to get the
http://www.colorschemer.com/online.html

TOS has also assigned names to 23 colors per the following:

![Color Chart](images/6-2.png?raw=true "Color Chart")

Reference: [See all color constants](https://www.thinkorswim.com/tos/thinkScriptHelp.jsp?laf=dark#constants)

Note that colors 'UPTICK' and 'DOWNTICK' are defined respectively as a red and green tone because they are frequently used in chart coloring. In the above chart the capitalized words are the names used to specify that color i.e. color.CYAN or color.LIGHT_RED.

Not all colors are defined: for example, PURPLE. You may find any color at http://en.wikipedia.org/wiki/List_of_colors:_A%E2%80%93F or http://en.wikipedia.org/wiki/X11_color_names . You can create that color for use in TOS by using the function 'CreateColor(double red, double green, double blue); ' similar to the RGB Code in the chart above. Each RGB component ranges in value from 0 (meaning none or 0%) to 255 (meaning the max 100% value).

You may also assign a text-name, for later use, to any color you create via

`DefineGlobalColor("Purple" , CreateColor(160,32,240) );`

## <a name="7"></a>B-OFTEN USED COLORING CODE STATEMENTS
[TOC Return](#toc)


__Comment:__ When writing code you may not have the coloring coding at your finger tips. This provides a ready place to go to to get the code words to paste.

### Typical chart plot settings
```
Data.SetPaintingStrategy(PaintingStrategy.LINE);# See Others Painting Strategies below.
Data.SetLineWeight(1);# 1 thru 5. ! is the default if 'SetLineWeight' is not defined.
Data.SetDefaultColor(Color.White); #Color.'TOS predefined color constant'
```

See all predefined color constants: [See predefined color constants](https://www.thinkorswim.com/tos/thinkScriptHelp.jsp?laf=dark#constants)


### Other Painting Stategies
```
ARROW_DOWN, ARROW_UP, BOOLEAN_ARROW_DOWN, BOOLEAN_ARROW_UP, BOOLEAN_POINTS,
DASHES, HISTOGRAM, HORIZONTAL, LINE, LINE_VS_POINTS, LINE_VS_SQUARES, LINE_VS_TRIANGLES, POINTS,
SQUARED_HISTOGRAM, SQUARES, TRIANGLES, VALUES_ABOVE, VALUES_BELOW
```

LINE is the default if none is specified.


### For curves define the line styles
```
Data.SetStyle(Curve.SHORT_DASH);
```

### Other constants:

FIRM, LONG_DASH, MEDIUM_DASH, SHORT_DASH, POINTS

SHORT_DASH is the default value of 'SetStyle'

### assign a name to a color
You may assign a name to a color like:
```
Plot RSI = 50 * (ChgRatio + 1);
RSI.DefineColor("Normal", GetColor(7));
```

The name "normal" above is unique to the RSI plot. Another plot cannot use the name 'normal' without redefining it.

To define and name a color for use in multiple plots do as follows:

```
DefineGlobalColor("normal", CreateColor(128, 0, 128));
plot signal = high > Highest(high[1]);
signal.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
signal.SetDefaultColor(GlobalColor("normal"));
plot NinetyPercent = 0.9*close;
NinetyPercent.SetDefaultColor(GlobalColor("normal"));
```

### Color based on a condition
```
plot Diff = close - close[1];
Diff.assignValueColor(if Diff >= 0 then Color.UPTICK else Color.DOWNTICK);
```
Note that UPTICK and DOWNTICK are TOS predefined color constants

### Create your own color

`plot Price = close; Price.SetDefaultColor(CreateColor(255, 220, 210));`
Or
`DefineGlobalColor("Purple" , CreateColor(160,32,240) );`

After the above global definition, GlobalColor("Purple") can be use wherever a color is needed. For example:
`Price.SetDefaultColor(GlobalColor("Purple"));`

### Use predefined index colors

```
plot Price = close;
Price.SetDefaultColor(GetColor(1));# 1 is an index color of 0 thru 9 Reference: See all color index numbers
```
### Default and global color text names
```
plot Data = close;
Data.SetDefaultColor(color.RED);
```
or
`Data.SetDefaultColor(GlobalColor("normal"));# Provided 'normal' is previously defined.`

##end


## <a name="8"></a>B-IMPLEMENTING LABELS
[TOC Return](#toc)


Labels are boxes of info placed at the top-left of a study. They are very useful and well worth the time to master them. The label function is `AddLabel(boolean visible, Any text, CustomColor color);` and has three components.

1. __'boolean visible'__ is a true or false statement that defines when the label shows or doesn't show. If you use a __'1'__ or __'yes'__ here it will always show the label, Otherwise you define a condition or an input selection-value that evaluates to 'true' or 'false' and reference that condition statement here.

2. __'Any text'__ is what appears inside the label box. There are two way to compose this text using __'concat'__ or __'+'__ syntax(known as the string concatenation symbol). __Concat__ is a term that means to connect two text phrases together. This includes converting ThinkScript variable-values into text.

3. __' CustomColor color'__ defines the background color of the label box. The text font color is always black.
boolean visible

This can be a __'yes'__ or __'no'__, or any condition statement or a reference to: (1) a previously defined condition statement; or (2) an input true/false value. When this evaluates to 'true' then the label will show or, when false, will not show. This is very handy when referring to an input whose value choices are __'yes'__ or __'no'__. Programmers use the yes/no input in condition statements to display or not-display certain features such as the labels or plots.

### Any text
The label's text can be defined using using __'concat'__ or __'+'__ which is known as the string concatenation symbol. Using the __'+'__ symbol is much easier to master and is recommended. Examples will help explain:

```input weeks = 4;
AddLabel(yes, concat(weeks, " Weeks till expiration"), color.YELLOW);
```

produces the following label:

![Weeks till expiration label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/8-1.png?raw=true "Weeks till expiration label")

Using the '+' symbol .... AddLabel(yes, weeks + " Weeks till expiration", color.YELLOW);.....produces the same label as above. You will find that complex texts with numerous segments are much easier to compose using the '+' symbol. There is, however, one pitfall to be avoided using the '+' symbol as discussed below:
The key is when using the + syntax, one must put all calculations-within-a-label inside of parentheses. Also multiple conditions such as HiTrue && LoTrue should be within parenthesis like (HiTrue && LoTrue).To illustrate this, a right and wrong is shown below:
### This works:

```
input ManADR = 25;
Addlabel(yes,"Exit = Stop Loss @ 10% of ADR = " + (0.10 * ManADR) ,color.PINK);
```
![Exit = Stop Loss label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/8-2.png?raw=true "Exit = Stop Loss label")

### This is wrong and produces an error:

```			
Addlabel(yes,"Exit = Stop Loss @ 10% of ADR = " + 0.10 * ManADR ,color.PINK);
```

See also B-LITERAL TEXT IN LABEL FOR THE 11 CHOICES OF INPUT PRICE and C-% CHANGE OF THE FIRST BAR VALUE and C-ADD AN INDEX OR FUTURE LOWER CHART for examples of putting drop-down literals into label text.

### CustomColor Color

Defines the color of the label box. Conditional coloring can also be had with the addition of if....then.....else statements. There are no limits to the number of conditional statements but they follow the format if.....then....else if.....then.....else if.....then.....else. Note the closing else that relates to the very first 'if.....then'.

### Tip for moving labels up

There are times when a label interferes with the top of a plotted chart's data. To avoid that, you can plot a line at the top of the chart at a value above the plots data. The labels will then have their centerline equal to the value of the line.

To make the line invisible, paint it the same color as your background.

### Tip for debugging
AddLabel is an excellent tool to observe a value for debugging purposes. In addition to that, a neat trick is, while in the code editor, drag the editor window down so that you can see the chart's label and header values. That way, when you change the code and press apply, you can see the value change while staying in the code editor.
__If you are inclined towards the use of concat,__ here is a guide on its use as well as an example of conditional coloring.

![Concat](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/8-3.png?raw=true "Concat")
![Concat label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/8-4.png?raw=true "Concat label")

__The equivalent using the '+' syntax is:__

`AddLabel(Display_Labels, "ADX(" + length + ") = " + Round(ADX,1) + " = Strong bullish (rating 3.5)", if "DI+" >"DI-" then Color.GREEN else if "DI-" > "DI+" then Color.RED else Color.WHITE);`

The built-in ZigZagPercent study demonstrates the excellent use of conditional showing of the label itself, the use of the + syntax and conditional coloring. The code is duplicated below:

```
AddLabel(showLabel and barNumber != 1, (if isConf then "Confirmed " else "Unconfirmed ") + "ZigZag: " + round(chg) + "%", if !isConf then globalColor("Unconfirmed") else if isUp then globalColor("Up") else globalColor("Down"));
```

SLOPE OF AN AVERAGE herein shows how to reteieve the literal of 'AverageType' choices in a label.

### A trap to avoid:
If your definition of the label text involves long and multiple 'if...then...else' statements, to insure that they all print, enclose each 'if...then else' statement in parentheses e.g. '(if...then...else)'. Otherwise, you may not get an error but an 'if...then...else' statement may not print. C- THE 'AdvanceDecline' STUDY herein is an excellent example of this.

## <a name="9"></a>B-AGGREGATION
[TOC Return](#toc)

![Length and Aggregation](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/9-1.png?raw=true "Length and Aggregation")
![Dropdown](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/9-2.png?raw=true "Dropdown")

Each bar on a plot represents a period of time known as the primary aggregation: one minute, five minutes, day, etc.

A chart may also have one or more secondary aggregations. Variables are assumed to be of primary aggregation and __those of a secondary aggregation must have their aggregation specified__ every time they are used.

A very common way of specifying the secondary aggregation is:

```
def Agg = AggregationPeriod.FIFTEEN_MIN;# Use the desired constant to specify the time
plot Data = close(period = agg) / close(period = agg)[3];# The phrase 'period =' is always used when referring to the variable aggregation. In this case 'agg'.
```

You may need to learn other ways of specifying aggregation to read other people's code such as in the built-in DailySMA.

__RULES__
1. The secondary aggregation period cannot be less than the primary aggregation period defined by chart
settings. This is a hard-fast rule that often comes into play.
2. Two different secondary aggregation periods cannot be used within a single variable. You can define each separately and then use the two definitions in a single statement.
It has been observed that using more than one secondary aggregation may affect the proper plotting. Using 'Expansion Area: ? Bars to the right' in chart settings may have an improvement.

There is a complete tutorial named __Aggregation Tutorial,PDF__ available at http://mytrade.com/StanL


## <a name="10"></a>B-EXPLANATION OF '=' , '=='AND '!'
[TOC Return](#toc)


### The difference between = and ==
A single "=" is the assignment operator. The statement "input Show_ChartPeriod = yes;" reads: assign (or set) the memory location labeled 'Show_ChartPeriod' to yes (boolean TRUE);
The double "==" is the logical equality operator. The statement "if AggPeriod == AggregationPeriod.DAY then ... else...;" reads: if the variable AggPeriod equals (is the same as) AggregationPeriod.DAY then do something else (otherwise) if it's not, then do some other thing. When evaluating equality in an 'if' statement, two equal signs must be used ('==').

### The ! bang exclamation mark
Not related to the above = and == is the "bang" (exclamation mark). As an example, use isnan() which returns `true `if the specified parameter is __not a number,__ returns `false` otherwise. The ! ( exclamation mark called "bang" ) is a logical NOT operator. So if `'isnan(close)'` is true i.e. since/when close is not a number then `'isnan(close)'` reads as true. Using the "bang" and close remains not being a number, then `'!isnan(close)'` reads as " NOT close is not a number" or NOT true = false when close is not a number (<=0).

## <a name="11"></a>B-REFERENCING OTHER STUDIES
[TOC Return](#toc)


This subject is about including existing studies in your code 'by reference' in lieu of duplicating its actual code. The syntax for this procedure is: `reference <StudyName>(parameter1=value1,.., parameterN=valueN ).<PlotName>`

A simple example is: `plot MyMACD = reference MACDHistogram;`

Occasionally a study and a function may have the same name e.g. vwap and moneyflow. In that case:
• Call the vwap function like .... `plot MyVWAP1 = vwap;`
• Reference the vwap study like .... `plot MyVWAP1 = reference VWAP;`
• The use of the word 'reference' is optional but, if 'reference' is omitted, the () must always follow the study's name. Example: `plot MyVWAP1 = VWAP();`

In studies, you may reference built-in studies but not user-defined studies in (currently). However, user-defined studies
may be referenced in scans.
In the following, the 'StochasticSlow' study will be used as an example for explanation.

### Specifying plots
Studies may have a single plot or multiple plots: ' StochasticSlow' has four plots named SlowK, SlowD, OverBought and OverSold. Referencing the SlowD plot would be via `StochasticSlow().SlowD` Just using `StochasticSlow()` would plot the SlowK because SlowK is the first plot in the actual code and is the default. Since no parameters are specified, the default parameters specified in the actual code are automatically used. Using parameters is explained below.

### Specifying parameters
If you look at the actual code of StochasticSlow study you'll see that it has a series of "input" variables. Those are the default parameters and cannot be changed because they are in a pre-defined study which is __not editable.__ There are three ways to specify parameters: (1) Full form; (2) Compact form; and (3) A combo of (1) and (2). Specifying no parameters will use all the default values. The parameter list is in a fixed order of inputs from left to right i.e. each parameter/input has a fixed location in the list.

### Full form
The full form specifies the input variable name with its intended value. An example is:
`def SlowK = StochasticSlow( KPeriod = 10, DPeriod = 10, priceH = High, smoothingType = "SMA" );` Any parameter not listed herein takes on its default value. Note that the names like 'KPeriod', 'DPeriod', 'priceH', 'smoothingType' and others are as defined in the actual code's input list.

### Compact Form
The compact form is simplest in that you simply put your values in the place/position of the default parameter you wish to change. You start with the first input value as the left most value in the reference. An example is:
`def SlowK = StochasticSlow( 80, 20, 10, 10, high, low, close, "SMA" ).SlowK;` Note that you cannot omit any intermediate values or modify their positions. Only the right-most parameters may be dropped off and those will then take on their default values.

### Combo Form
This allows you to choose only the variables you want to change. An example is:
``def SlowK = StochasticSlow( 80, 20, 10, 10, smoothingType = "SMA" ).SlowK;`
Here you have omitted the price parameters. Once again, you must preserve the parameter's position rule.

There are two ways of referencing constant inputs : `smoothingType = "SMA"` and `smoothingType == smoothingType.SMA` __are equivalent.__ The first is the short syntax ("SMA"), while the second is the full syntax . A different but related subject is referencing pre-defined studies using 'Script'. See http://tda.thinkorswim.com/manual/metal/thinkscript/tutorials/advanced/referencing/other%20study.html

## <a name="12"></a>T-USING CUSTOM COLUMN AGGREGATION
[TOC Return](#toc)


Here's an interesting concept/tip that you may find very useful and it's not obvious. The '%HL Custom Column' (available at http://mytrade.com/StanL) tells where, in today's prices, a stock is now i.e. 35% means it is now at 35% of today's range (low to high). 100% means it is at its high of today's range. These numbers are based on the columns "day" aggregation. That agg can be changed to say '4 days'. The column will then tell where in the range of the last 4 days, the stock currently is. Use a month agg and it will tell where in the last month's range the stock currently is. The same concept applies to all aggs. Isn't that neat? And it is so easy to change the agg. Also custom columns have some aggs that are different from the normal chart aggs. For example 4-days is a column agg choice but is not a choice of the chart settings (the agg dropdown).

The example used here, %HL, is a custom column study available at http://mytrade.com/StanL Of course, you will need to keep track of what agg you are currently using. Perhaps you can do that with the title of the custom column.

After installing the %HL you access editing it by right-clicking the watchlist column headings to customize and follow the snapshots below:

![Click the scroll](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/12-1.png?raw=true "Click the scroll")
![Click to Change Aggregation](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/12-2.png?raw=true "Click to Change Aggregation")

## <a name="13"></a>B+C-NORMALIZATION
[TOC Return](#toc)


If you want to compare two (or more) indicators that have values much different that are non-receptive to comparison, you can normalize each of the two (or more) indicators and compare them on a basis you define i.e. 0 to 100%, -1 to +1, -100 to +100, or whatever you want. Below is the code to do normalization and an example. Note that not all studies can be normalized e.g. 'AccDist' has no parameters and cannot be normalized.
__Code that does normalization__

```
#Usage: 'input data = close' is substituted by an indicator and its parameters.
declare lower;
script normalizePlot {
  input data = close;
  input newRngMin = -1;
  input newRngMax = 1;
  def HHData = HighestAll( data );
  def LLData = LowestAll( data );
  plot nr = ((( newRngMax - newRngMin ) * ( data - LLData )) / ( HHData - LLData )) + newRngMin;
}
```

__Examples__
```
input price = close;
input CCI_length = 7;
input Momentum_length = 12;
input RSI_length = 4;
input WR_length = 10;
input newRngMax = 100;#Maximum normalized value
input newRngMin = 0;#Minimum normalized value
input OverBought = 80;#Fixed value upper line for reference
input OverSold = 20;#Fixed lower value line for reference
def newCCI = normalizePlot( CCI( CCI_length).CCI, newRngMin, newRngMax );
def newMomentum = normalizePlot( Momentum( length = Momentum_length ).Momentum, newRngMin, newRngMax ); def newWPR = normalizePlot( WilliamsPercentR( length = WR_length ).WR, newRngMin, newRngMax );
def newRSIWilder = normalizePlot( RSIWilder( length = RSI_length ).RSI, newRngMin, newRngMax );
plot CCI = newCCI;
plot Momentum = newMomentum;
plot WPR = newWPR;
plot RSIWilder = newRSIWilder;
plot Over_Bought = 80;
plot Over_Sold = 20;
```

## <a name="14"></a>B-COUNTING AND USE OF 'COMPOUNDVALUE'
[TOC Return](#toc)


Counting is often used. This shows the construct for a 'def count' variable and also takes this opportunity to define the usage of CompoundValue to initialize this recursive variable. Previous versions of TS would require this to be written as 'Rec count = ' statement but TS corrently recognizes both 'def' and 'rec' to define a recursive variable. The below annotated picture explains how counting is accomplished. Naturally any valid condition may be substituted for the one shown.

![Count](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/14-1.png?raw=true "Count")

By the way, you can identify a recursive variable definition when the variable itself, in this case 'count', also appears on right side of the equal sign/equation like, in this case, 'count[1]'.
If you have a reason to re-start the counting from 0 or 1 based on a defined condition, you place the condition after the 'else' like 'else if <condition to restart counting> then 0 ' and close with 'else count[1]'.
Refer to PastOffset discussed at Click to read about it. In short, it says that if you have multiple past references in your code, for example 'Average(close, 11) or close[6], __'the longest past reference value will be used for all past reference'__ regardless of what your code says. You would use 'CompoundValue' to prevent the longest reference being used by initializing the affected calculation with the 'CompoundValue' function.

## <a name="15"></a>B-LINEAR REGRESSION
[TOC Return](#toc)


There are several built-in Linear Regression studies in ThinkScript. This section is intended to clarify their differences and usage.
Definition = 'Linear regression' is a mathematical procedure know as the 'least-squares method', used for drawing the best straight line thruogh a group of data points. ThinkScript's linear regression function is titled 'Inertia'. You may view it at http://tda.thinkorswim.com/manual/metal/thinkscript/reference/Functions/Statistical/Inertia.html

The key studies are:
1. LinearRegCh100
2. LinearRegCh50
3. LinearRegChVar
4. LinearRegCurve
5. LinearRegTrendline
6. LinearRegrReversal
7. LinearRegressionSlope

### LinearRegCh100

Uses the data of the entire plot. The upper and lower channel lines, parallel to the centerline (the true linear regression)., indicate the furthest that the data has been from the middle line The '100' in the title means that it shows the upper and lower lines at 100% of the data difference from the centerline .

### LinearRegCh50

Is the same as the LinearRegCh100 except that the upper and lower lines ar at 50% of the of the data difference from the centerline in lieu of 100%.

### LinearRegChVar

This version allows the user to define the 'percentage-distance-from-the-centerline' of the upper and lower lines. Also, this version allows the user to select the number of bars for the linear regression plot in lieu of the previous two studies that use the entire chart (all bars).

### LinearRegCurve

Plots a single curve in which you have defined the type of price and the number of bars as the basis for the curve.

### LinearRegTrendline

Uses the data of the entire chart. Plots a straight linear regression line for whichever of the eleven choices you have selected. The choices include other than price items such as volume and 'imp volatility'.

### LinearRegrReversal

This study indicates "+1" when the current value of Linear Regression Curve is equal to or greater than that of the previous bar and "-1" otherwise. If you compare this to the LinearRegCurve be sure to use the same number of bars input for each study.

### LinearRegressionSlope

Plots the changing slope of the LinearRegCurve based on the price and length that you select.

Note that __LinearRegCurve, LinearRegTrendline, and LinearRegressionSlope__ all have the same eleven price input choices.
Studies #1, #2 and #3 are very popular in searching for stocks that are at buy-low prices. You may find these especially beneficial to learn and comfortably use them.

## <a name="16"></a>S-LINEAR REGRESSION-VAR SCAN
[TOC Return](#toc)


This is a scan that works well in a dynamic watch list with your favorite companies to trade. It works well as a signal when a company is moving up through resistance in a trough or lower area for a long trade. Vary the "width of channel" and “length” to suit your own preferences.

```
Plot scan = low crosses LinearRegChVar ("width of channel" = 69, "full range" = no, "length" = 252)."LowerLR"
```

## <a name="17"></a>B-TWO WAYS TO CALCULATE % CHANGE
[TOC Return](#toc)


There are two ways to calculate a % change. You may see both ways used in coding. As an example let 10 be the original value and 15 the final value.

### First way:
In words, final value divided by the original value; minus one; times 100. or15/10=1.5;1.5-1=0.5; 0.5 X100=50%increase

Example:
```
def length = 10;# [10] means 10 agg-bars ago
def price = close;# The current close
plot PercentChg = (price / price[length] - 1) * 100;
```

### Second way:
In words, the change difference (final minus the original) divided by the original value times 100. or 15 -10 = 5 = change difference; 5/10 = 0.5; 0.5 X 100 = 50% increase.
If the difference is negative the percent is a 'decrease'.


Example:
```
def length = 10;# [10] means 10 agg-bars ago
def price = close; # The current close
plot PercentChg = ((price - price[length])/ price) * 100;
```

### Additional Comments:
The two ways above relate to 'change between two numbers' but there are other percentages that can be had. For example, "value1 is what percent larger/smaller than value2." For value1 = 85 and value2 = 38 then: 85 /38 = 2.24; 2.24 X 100 = 224%. In words value1 is 224% of value2. Or, in a different way, it can be said that 2.24 -1 = 1.24 X 100 = 124% which reads reads that value1 is 124% larger than (or above) value2.
__An aside:__ A calculated value of -0.0331 will be formatted with 'AsPercent' to show the below label in cyan.
```
input length = 9;
AddLabel(yes, AsPercent((close - close[length]) / close[length]),color.cyan);
```
![label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/17-1.png?raw=true "label")

## <a name="18"></a>B-FORMATTING WITH 'AsText', 'AsDollars' AND OTHERS
[TOC Return](#toc)

The following formatting functions are especially useful in custom columns and labels.

### An 'AsDollars' example
```
def x = CompoundValue(1, if IsNan(GetActualEarnings()) then x[1] else GetActualEarnings(), GetActualEarnings()); AddLabel(yes, "'Earnings = " + asDollars((round(x,2))) + "'", color.cyan);
```
![label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/18-1.png?raw=true "label")

### An 'AsText' plus 'decimal-places' example
```
def x = CompoundValue(1, if IsNan(GetActualEarnings()) then x[1] else GetActualEarnings(), GetActualEarnings()); AddLabel(yes, "'Earnings = " + AsText(x,NumberFormat.TWO_DECIMAL_PLACES) + "'", color.cyan);
```
![label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/18-2.png?raw=true "label")

Comment: 'NumberFormat.TWO_DECIMAL_PLACES', 'NumberFormat.THREE_DECIMAL_PLACES' and 'NumberFormat.DOLLAR' are the three choices that can be used with 'AsText'. Using 'NumberFormat.DOLLAR' produces the same look as using 'AsDollars'. Also the decimal places can be gotten by using the Round() function as shown above in the 'AsDollars' example.

### An AsDollars example
`AddLabel(yes, "Current True Range is " + AsDollars(TrueRange(high, close, low)),color.cyan);`
![label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/18-3.png?raw=true "label")

### An AsPercent example
```
def Range = 1 - ((high - close)/ (high - low));
AddLabel(yes,"Range percent = " + asPercent(round(Range,2)),color.cyan);
```
![label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/18-4.png?raw=true "label")

### An AsPrice example
`AddLabel(yes, "10 period SMA of Close price using 1/32nds price notation (XXX'YYZ) = "+ AsPrice(Average(close, 10)),color.cyan);`
![label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/18-5.png?raw=true "label")


## <a name="19"></a>B-LITERAL TEXT IN LABEL FOR THE 11 CHOICES OF INPUT PRICE
[TOC Return](#toc)

```
#Puts any of the 11 price choices into a literal text in a label like ohlc4 = 75
input price = close;#Price automatically avails 11 choices and the label below tells which was selected.
#Puts any of the 11 price-choices into a literal text in a label like ohlc4 = 75
input price = close;#Price automatically avails 11 choices
AddLabel(yes, if price == close then "The price-variable selected is close = " + Round(close,2)
else if price == open then ""The price-variable selected is open = " + Round(open,2)
else if price == high then ""The price-variable selected is high = " + Round(high,2)
else if price == low then ""The price-variable selected is low = " + Round(low,2)
else if price == hl2 then ""The price-variable selected is hl2 = " + Round(hl2,2)
else if price == hlc3 then ""The price-variable selected is hlc3 = " + Round(hlc3,2)
else if price == imp_volatility then ""The price-variable selected is current imp_volatility = " + AsPercent(imp_volatility) else if price == ohlc4 then ""The price-variable selected is ohlc4 = " + Round(ohlc4,2)
else if price == open_interest then ""The price-variable selected is Open_interest = " + Round(open_interest,0)
else if price == volume then ""The price-variable selected is Volume = " + Round(volume,0)
else if price == VWAP then ""The price-variable selected is VWAP = " + Round(VWAP,0)
else "N/A" + price,color.white);
```

Comments: The 11 choices of Price are close, high, hl2, hlc3, imp_volatility, low, ohlc4, open, open_interest, volume, vwap.

## <a name="20"></a>C-UPPER & LOWER BANDS AT DEFINED PERCENT
[TOC Return](#toc)

```
#hint:Draws upper & lower bands at defined percent
input length = 10;#hint length:Length of base ExpAverage
input percentShift = 5.0;#hint PercentShift: Percent of upper & lower bands from ExpAverage input price = close;#hint price: Basis for base ExpAverage
def base = ExpAverage(price, length);
plot UpperBand = base * (1 + percentShift / 100); UpperBand.setDefaultColor(GetColor(1));
plot LowerBand = base * (1 - percentShift / 100); LowerBand.setDefaultColor(GetColor(1));
assignBackgroundColor(if close > upperBand then color.Green else color.current);
```

## <a name="21"></a>C-STANDARD DEVIATION CHANNELS
[TOC Return](#toc)


Standard deviations follow the 68–95–99.7 rule. That is, that a data distribution with a 1 standard deviation (SD) contains 68% of all data. Likewise 2 SD contains 95% and 3 SD contains 99.7%.

```
#STD Deviation channel plots
input price = close;#hint Price:The choice of what is being plotted.
input length = 14;#hint length:The agg-bars of the average which is the basis for the SD channels input SD1Up = 1;
input SD1Dn = -1;
input SD2Up = 2;
input SD2Dn = -2;

def avg = Average(price, length);
def StdDev = StDev(price, length);
plot StDev1Up = avg + (SD1up * StdDev);
plot StDev1Dn = avg + (SD1dn * StdDev);
plot StDev2Up = avg + (SD2up * StdDev);
plot StDev2Dn = avg + (SD2dn * StdDev);
plot StDev3Up = avg + (SD3up * StdDev);
plot StDev3Dn = avg + (SD3dn * StdDev);
```

## <a name="22"></a>B-THE SIMPLEST REC IN TS
[TOC Return](#toc)


To comprehend a recursive statement, start with the simplest in concept. Here the previous value is recalled so 1 can be added to it to form the new value of x. In realtime coding, the +1 is replace by all kinds of conditions and resulting actions.

```
#Straight line REC = 2 to (number-of-bars + 1)
Def x = x[1] + 1;
plot y = x;
```
Alternate: Subject to an 'if' statement:
`plot y = if x <= 200 then x else double.NaN;`

## <a name="23"></a>B+C-EXAMPLE OF 4 NORMALIZATIONS
[TOC Return](#toc)

```
Usage: 'input data = close' is substituted by any indicator and its parameters. declare lower;
script normalizePlot {
  input data = close;
  input newRngMin = -1;
  input newRngMax = 1;
  def HHData = HighestAll( data );
  def LLData = LowestAll( data );
  plot nr = ((( newRngMax - newRngMin ) * ( data - LLData )) / ( HHData - LLData )) + newRngMin;
}
```
Examples
```
input price = close;
input CCI_length = 7;
input Momentum_length = 12;
input RSI_length = 4;
input WR_length = 10;
input newRngMax = 100;#Maximum normalized value
input newRngMin = 0;#Minimum normalized value
input OverBought = 80;#Fixed value upper line for reference
input OverSold = 20;#Fixed lower value line for reference
def newCCI = normalizePlot( CCI( CCI_length).CCI, newRngMin, newRngMax );
def newMomentum = normalizePlot( Momentum( length = Momentum_length ).Momentum, newRngMin, newRngMax ); def newWPR = normalizePlot( WilliamsPercentR( length = WR_length ).WR, newRngMin, newRngMax );
 input SD3Up = 3; input SD3Dn = -3;

def newRSIWilder = normalizePlot( RSIWilder( length = RSI_length ).RSI, newRngMin, newRngMax );
plot CCI = newCCI;
plot Momentum = newMomentum; plot WPR = newWPR;
plot RSIWilder = newRSIWilder; plot Over_Bought = 80;
plot Over_Sold = 20;
### EOC ###
```

## <a name="24"></a>C-DATE LABEL IN MM/DD/YYYY FORMAT
[TOC Return](#toc)

```
#hint produces a date label in MMDDYYYY format
def year = (Round(GetYYYYMMDD() / 10000, 0));#This produces the year as1,210 
def Month = GetMonth();
def Day = GetDayofMonth(GetYYYYMMDD());
def date = GetYYYYMMDD() * 10000 + GetMonth() + GetDay() + 1; 

AddLabel(yes,"date: " + Month +"/" + Day + "/" + AsPrice(Year) , Color.WHITE);
```
![label](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/24-1.png?raw=true "label")

## <a name="25"></a>B-WHAT IS SWING-HIGH, SWING-LOW
[TOC Return](#toc)


What is a swing high / low? Basically a swing high is the highest high looking a few bars back and a few bars forward. A swing low is the lowest low looking a few bars back and a few bars forward. The more bars you include in the series, the more significant the swing, but the confirmation comes further from the actual swing point. If you wanted to define a swing high as a bar high that is higher than the highs of the two bars just before it AND higher than the highs of the two bars just after it, the thinkscript code would look like this:

`Def swinghigh = if high > high[1] and high > high[2] and high > high[-1] and high > high[-2] then 1 else 0;`

Or if you are interested in the rise of the last 5 bars, you may use something like this:

`plot pivotHigh = if high == (highest(high, 5) and sum(high > high[-1], 5) == 5) then high else Double.NAN;`

The code for a swing low is similar. Note that the confirmation of a swing point does not come until 2 bars after the swing high in this case. If you wanted to extend the swing check to 3 bars before and after, you would add the checks for a high > high[3] and high > high [-3]. The resulting swing will be more significant, but the signal comes 3 bars after the fact.

To plot the swing high you could code it like this:

```
Plot swing_hi = if swinghigh then high else double.nan;
swing_hi.setstyle(curve.points);
```

This would paint a dot on all the swing highs, and nothing everywhere else. The code for swing lows is similar.
This is the simplified basics of swingHi/SwingLo. Many coders add all kinds of conditions to supplement the simplified code herein. Also the look-back and the look-forward lengths do not need to be the same.

## <a name="26"></a>B-USAGE OF THE SWITCH FUNCTION
[TOC Return](#toc)


Here is a example of the 'switch' function being discussed:

![switch](https://github.com/jshingler/TOS-and-Thinkscript-Snippet-Collection/blob/master/images/26-1.png?raw=true "switch")

The switch statement is used to control the flow of program execution via a multi-branch using the enum Def, and enum input: Its features are:
- It processes an enumeration: In this case 'input exchange'. Each enum value has a case ????: where ???? is the enum value.
- If each item in the enum's list i.e. {default NYSE, NASDAQ, AMEX}, does not have a case, then there must be a case default: In this example, each of the enums has a case so there is no case default:.
- If a case default: is present, its code is applicable to ALL the enum values that do not have a case.
- The variables being processed, i.e. 'def advances;' and 'def declines;', must be addressed in each case ????:
Otherwise an error is produced.
- Any enum item having a space should have that item enclosed within quotes whenever used.
- Use of a switch inside a switch is possible but is very complex. Hence it is not addressed herein.

Other examples of switch usage can be found at S-PRICE DIRECTION SCAN , S-PRICE DIRECTION SCAN, C-ATR TRAILING STOP and C- THE 'AdvanceDecline' STUDY

## <a name="27"></a>C-HORIZONTAL LINES OF HIGHEST-HIGHS AND LOWEST-LOWS
[TOC Return](#toc)

```
#Hint: Plots Horizontal lines of highest-highs and lowest-lows
#TOS Name = HorizLines_HH_LL
input length = 20;#hint length: The number of bars being evaluated for the HH and LL. Also is the length of the longest lines. Longer lines may show when two adjacent lines have the same HH or LL values.
input ShowHi_Lines = yes;#hint ShowHi_Lines:Shows or hides HH lines
input ShowLo_Lines = yes;#hint ShowLo_Lines:Shows or hides LL lines
def a = Lowest(low, length);
def b = if low == a then a else b[1];
plot LL_Lines = if b == 0 then double.nan else if ShowLo_Lines then b else double.nan; LL_Lines.SetPaintingStrategy(paintingStrategy.hORIZONTAL);
def d = Highest(high, length);
def e = if high >= d then d else e[1];
plot HH_Lines = if ShowHi_Lines && e == 0 then double.nan else if ShowHi_Lines then e else double.nan;
HH_Lines.SetPaintingStrategy(paintingStrategy.horizontal);
```

### Alertnate 1:
```
#hint <b> Highest High and Lowest Low lines & bubble for 3, 6 or 12 momths</b>
declare upper;
input timeFrame = { default threeMonths, sixMonths, twelveMonths };#hint timeFrame: select the TimeFrame desired
def numBars;
switch( timeFrame ) {
  case threeMonths:
    numBars = 63;
  case sixMonths:
    numBars = 126;
  case twelveMonths:
    numBars = 252;
}
def barNum = if IsNaN( close ) then Double.NaN else barNumber();
def lastBar = HighestAll( barNum );
def startBar = if lastBar <= numBars then 1 else lastBar - numBars;
def numMonths = round( ( lastBar - startBar + 1 ) / 21, 0 );
def Hidata;
def Lodata;
if barNum < startBar then {
  Hidata = Double.NaN;
  Lodata = Double.NaN;
} else {
  Hidata = high;
  Lodata = low;
}
def highestData = HighestAll( Hidata );
def lowestData = LowestAll( Lodata );
plot HighestHigh = highestData;
plot LowestLow = LowestData;
#===================[ Look & Feel ]=====================
HighestHigh.SetPaintingStrategy( PaintingStrategy.LINE );
HighestHigh.SetLineWeight(5);
HighestHigh.SetDefaultColor(Color.PINK);
HighestHigh.HideBubble();
LowestLow.SetPaintingStrategy( PaintingStrategy.LINE );
LowestLow.SetLineWeight(5);
LowestLow.SetDefaultColor(Color.PINK);
LowestLow.HideBubble();
AddChartBubble( barNum == startBar, HighestHigh, "Highest High in " + numMonths + " Months" , Color.cyan, yes );
AddChartBubble( barNum == startBar, LowestLow, "Lowest Low in " + numMonths + " Months" , Color.pink, no );
```

### Alertnate 2:
```
#hint:<b>Plots a line for the highest in the last ? bars</b>\nHas option for a % lower plot declare upper;
input numBars = 50;#hint numBars: The number of bars monitored
input price = high;#hint price:Select the price to monitor
input hidePctLowerPlot = yes;#hint hidePctLowerPlot: Yes hides the hidePctLowerPlot input PctLower = 5;#hint PctLower: define the % lower plot criteria

def barNum = barNumber();
def lastBar = HighestAll( if IsNaN(price) then 0 else barNum ); def startBar = if lastBar <= numBars then 1 else lastBar - numBars; def totBars = if lastBar <= numBars then lastBar else numBars; def data = if barNum < startBar then 0 else price;
def highestData = HighestAll( data );
plot HighestHigh = highestData;
plot PercentDown = highestData * (1 - (PctLower/100));
HighestHigh.SetPaintingStrategy( PaintingStrategy.LINE ); HighestHigh.SetLineWeight(3); HighestHigh.AssignValueColor( color.CYAN ); #HighestHigh.SetDefaultColor(Color.CYAN); HighestHigh.HideBubble();
PercentDown.SetStyle( Curve.SHORT_DASH ); PercentDown.SetLineWeight(1); PercentDown.SetDefaultColor(Color.RED); PercentDown.HideBubble(); PercentDown.SetHiding( hidePctLowerPlot );
AddChartBubble( barNum == startBar, HighestHigh, "Highest High in the Past " +
  totBars +" bars: " + HighestHigh, color.CYAN );
AddChartBubble( barNum == startBar and !hidePctLowerPlot, PercentDown, PctLower + " % Below Highest High in the Past " + totBars + " bars: " + PercentDown,
color.RED );
#---------- END ---------------------
```

## <a name="28"></a>C-VARIOUS MARKET TIME VARIABLES
[TOC Return](#toc)

```
input showOnlyToday = YES;
input Market_Open_Time = 0930;
input Market_Close_Time = 1600;
def day = getDay();
def lastDay = getLastDay();
def isToday = if(day == lastDay, 1, 0);
def shouldPlot = if(showOnlyToday and isToday, 1, if(!showOnlyToday, 1, 0));
def pastOpen = if((secondsTillTime(Market_Open_Time) > 0), 0, 1);# True if market is already open i.e past 9:30 AM def pastClose = if((secondsTillTime(Market_Close_Time) > 0), 0, 1);# True if market is already closed i.e. past 4:30 PM def marketOpen = if(pastOpen and !pastClose, 1, 0);# True if market is past the open but before the close i.e. market is open
def firstBar = if (day[1] != day, day - 1, 0);
#EOD stands for End of Day
def EOD = secondsFromTime(1600) > 0; #After 4 pm, EOD is true
```

## <a name="29"></a>C-VERTICAL LINES AT START AND END TIMES
[TOC Return](#toc)

```
#hint:Places vertical lines at start and end times #TOS title = VertLines_at_START_END_times input time1 = 1000;
input time2 = 1200;
def StartTime = SecondsFromTime(time1) ==0;
def EndTime = SecondsFromTime(time2) ==0; AddVerticalLine(StartTime,"Start Line",Color.RED,Curve.SHORT_DASH); AddVerticalLine(EndTime,"End Line",Color.RED,Curve.SHORT_DASH);
```

### A vertical line at a specific time
```
Input time = 1200;
def starttime = secondsFromTime(time)==0;
def ext = if starttime then close else ext[1];
plot x = ext;
AddVerticalLine(starttime, "Vertical Line Time!", color = Color.CYAN, stroke = Curve.POINTS);
```

## <a name="30"></a>C-VERTICAL LINES AT INPUTTED BAR LOCATIONS
[TOC Return](#toc)

```
#hint: <b>Plots a vertical line at up to 6 specified agg-bars-locations.</b>\n#LinePos1 must always be greater than 0. Set any other LinePos to zero (0) to omit its display.
#By R. Houser Modified by StanL

declare upper;
input linePos1 = 10;#hint linePos1:Must be greater than zero
input linePos2 = 20;#hint linePos2:Enter the agg-bars larger than previous input. Enter zero to omit the plot.
input linePos3 = 50;#hint linePos3:Enter the agg-bars larger than previous input. Enter zero to omit the plot.
input linePos4 = 100;#hint linePos4:Enter the agg-bars larger than previous input. Enter zero to omit the plot.
input linePos5 = 150;#hint linePos5:Enter the agg-bars larger than previous input. Enter zero to omit the plot.
input linePos6 = 200;#hint linePos6:Enter the agg-bars larger than previous input. Enter zero to omit the plot.

Assert( linePos1 > 0, "linePos1 must be greater than zero" );
Assert( linePos2 == 0 or linePos2 > linePos1, "linePos2 ("+linePos2+") must be zero or greater than linePos1 ("+linePos1+")" );
Assert( linePos3 == 0 or linePos3 > linePos2, "linePos3 ("+linePos3+") must be zero or greater than linePos2 ("+linePos2+")" );
Assert( linePos4 == 0 or linePos4 > linePos3, "linePos4 ("+linePos4+") must be zero or greater than linePos3 ("+linePos3+")" );
Assert( linePos5 == 0 or linePos5 > linePos4, "linePos5 ("+linePos4+") must be zero or greater than linePos4 ("+linePos4+")" );
Assert( linePos6 == 0 or linePos6 > linePos5, "linePos6 ("+linePos4+") must be zero or greater than linePos5 ("+linePos5+")" );

def barNum = if IsNaN( close ) then Double.NaN else BarNumber();
def highestBarNum = HighestAll( barNum );
def show1 = if barNum == highestBarNum - linePos1 then yes else no;
def show2 = if linePos2 > linePos1 and barNum == highestBarNum - linePos2 then yes else no;
def show3 = if linePos3 > linePos2 and barNum == highestBarNum - linePos3 then yes else no;
def show4 = if linePos4 > linePos3 and barNum == highestBarNum - linePos4 then yes else no;
def show5 = if linePos5 > linePos4 and barNum == highestBarNum - linePos5 then yes else no;
def show6 = if linePos6 > linePos5 and barNum == highestBarNum - linePos6 then yes else no;

AddVerticalLine( show1, linePos1+" Agg-bars", GetColor( 0 ) );
AddVerticalLine( show2, linePos2+" Agg-bars", GetColor( 1 ) );
AddVerticalLine( show3, linePos3+" Agg-bars", GetColor( 2 ) );
AddVerticalLine( show4, linePos4+" Agg-bars", GetColor( 3 ) );
AddVerticalLine( show5, linePos5+" Agg-bars", GetColor( 4 ) );
AddVerticalLine( show6, linePos6+" Agg-bars", GetColor( 5 ) );
AddLabel(1, "Vertical lines have been placed at the inputted locations", color.white);
```

__Comment:__ This is a good example illustrating the use of the Assert function.

## <a name="31"></a>C-COUNTING & PLOTTING OF BARNUMBERS
[TOC Return](#toc)


Bar-number data and counting can be very useful when debugging code. The script below may be useful.

```
# Title = Bar_Number_Plot_Interval
#hint: Numbers the bars at inputted intervals. A line plot is also selectable. This may be shown on the upper or lower plot by using 'EDIT STUDIES'.
Input Interval = 5;#hint Interval: Enter the desired interval for showing the bar mumber.\n 0 and 1 plots at every bar.
Input BarNumbLine = Yes;#hint BarNumbLine: YES shows a line plot of bar number at the 'high' price.
def Every_Interval = interval - 1;
plot Data = if BarNumbLine == 1 then high else double.nan;
def barNumber = barNumber();
Plot bn = if (barNumber -1) % Interval == 1 then barNumber else double.nan;
bn.SetPaintingStrategy(PaintingStrategy.VALUES_BELOW);
plot bn_1 = if interval == 0 or interval == 1 then barNumber else double.nan;
bn_1.SetPaintingStrategy(PaintingStrategy.VALUES_BELOW);
#####################
def TotalBars = HighestAll(barNumber());
AddLabel( yes, "TotalBars = " + TotalBars , Color.white);
AddLabel( yes, "Numbering Interval = " + Interval, Color.pink);
########### EOC ########
```

The above is a study named Bar_Number_Plot_Interval.txt available at http://mytrade.com/StanL

## <a name="32"></a>C-BAR COUNT BETWEEN HIGHS & SHOW BAR NUMBERS
[TOC Return](#toc)

```
#hint: <b>Bar Count Between Highs</b>\n Counts the number of bars between each high in the specified length,
default 20.
def barnumber = barnumber();
input length = 20;#hint Length: Looks for new highs within every Agg-bars length. <b>(Default is 20)</b>
input gap_length = 200;#hint gap_length: If there is a large gap between new highs, this gap_length is used to find the previous highest high and it subtracts the current high bar number from the previous high barnumber. <b>\n(Default is 200)</b>
input show_Bar_number = NO;#hint show_Bar_number:Yes shows each bar number
def numberold1 = if highest(high, length)[1] then barnumber else double.nan;
def signal = if highest(high, length) > highest(high, length)[1] then barnumber() else 0;
def signal1 = if signal > 0 then (signal - highest(signal, length)[1]) else 0;

plot count = if signal1 > 0 and signal1 != barnumber() then signal1 else if signal1 == barnumber() then (signal1 - highest(signal[1], gap_length)) else double.nan;
count.SetPaintingStrategy(PaintingStrategy.VALUES_ABOVE);

plot Bar_number = if show_Bar_number == yes then barnumber() else double.nan;
Bar_Number.setPaintingStrategy(paintingStrategy.VALUES_BELOW);
```

## <a name="33"></a>C-MARKET OPEN AND LUNCH TIMES
[TOC Return](#toc)

```
def NineThirty = secondsFromTime(930) > 0;
def TwelveOclock = secondsFromTime(1200) > 0;
def MarketOpen = NineThirty > 0 && NineThirty [1] <= 0;
def LunchTime = TwelveOclock > 0 && TwelveOclock[1] <= 0;
AddVerticalLine(MarketOpen or LunchTime,if MarketOpen then "TIME TO TRADE!" else "LUNCH TIME",if MarketOpen then color.GREEN else color.BLUE);
```

## <a name="34"></a>C-SQUEEZE SCAN WITH MACD EXIT
[TOC Return](#toc)

```
# Squeeze Exit / MACD Scan
BollingerBandsSMA()."UpperBand" is greater than KeltnerChannels()."Upper_Band" and BollingerBandsSMA()."UpperBand"[1] is less than KeltnerChannels()."Upper_Band"[1] and MACD() > 0 and
MACD() > MACD()[1]
```

## <a name="35"></a>C-SHOWING WHERE A CANDLE PATTERN EXISTS
[TOC Return](#toc)


You can show/plot where any particular candle pattern exists. Below is code that shows where the popular Doji pattern exists:

```
plot d = Doji();# If a Doji is present Doji() is true.The below lines format what to show at that location.
d.setPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
d.setLineWeight(2);
d.setDefaultColor(Color.White);
```

You may find this reference on the Doji of value....http://ezinearticles.com/?Candlestick-Charting-and-Reversal-Patterns---The-Doji&id=1068331

Doji() as used above is the simplest of all candles to show because it has only a single plot. But other patterns are more complicated. For example, some candles may be bullish (up) or bearish (down) patterns. As an example on how to substitute them for the Doji() used above, we'll use Harami. When we inspect its code , we see that it has three input variables and two plots named 'bullish' and 'bearish'. In this example, we'll retain all the parameters (assuming that ThinkScript knows the best parameters to use) and show the 'bullish' plot only. The def condition above now becomes:

`def condition = if (Harami().Bullish , 1, 0); # Whenever Harami().Bullish is present, condition is true`

The remainder of the code statements can be changed to reflect reading correctness but what plots will be unaffected if they are not changed.

If you want to also change the candle's parameters then the code becomes as follows with you providing values for the ????. The code becomes `def condition = if (Harami(length = ????, trendSetup = ????, bodyFactor = ????).Bullish , 1, 0);`

Note that the parameter names (length, trendSetup and bodyFactor) are exactly the same as in the Harami code.

## <a name="36"></a>C-VOLUME AS A % OF THE ??-DAY-AVERAGE
[TOC Return](#toc)

```
#hint:Uses the VolumeAvg study and adds a label showing volume as the percent of the average daily volume. The average daily volume length is based on the variable inputted length.
#Title = VolumeAvg_WithLabel
declare lower;
declare zerobase;
input length = 50;
plot Vol = volume;
plot VolAvg = Average(volume, length);
Vol.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
Vol.SetLineWeight(3);
Vol.DefineColor("Up", Color.UPTICK);
Vol.DefineColor("Down", Color.DOWNTICK);
Vol.AssignValueColor(if close > close[1] then Vol.color("Up") else if close < close[1] then Vol.color("Down") else GetColor(1));
VolAvg.SetDefaultColor(GetColor(8));

##### calc label ######
#def AggPeriod = getAggregationPeriod();
def Pct_Avg = Volume(period = AggregationPeriod.DAY) / Average(volume(period = AggregationPeriod.DAY), length) * 100;
AddLabel(yes, "Today's Vol = " + round(Pct_Avg,1) + " % of the " + length + "-day-average" ,color.PINK);
```

### Alternate 1:
```
#Hint: <b>Shows a label of current Volume as a % of the input Period Average Volume</b>\n Colors Label based on current Volume being > or < Average Volume
#Usage: All 'edit studies' check boxes are blank when used as a pure label only. If you want to see the percentage for any bar under your cursor, then: (1) Check the 'show study' box in edit studies; OR (2) Change 'declare upper' to 'declare lower' and check all boxes in 'edit studies'.
declare upper;
input VolAvgLength = 50;#hint VolAvgLength:Insert the base agg-bars volume length
def data = (Volume / VolumeAvg(VolAvgLength).VolAvg)-1;#Vol as fraction of VolAvgLength
plot VolPct = 100 * data;
#VolPct.SetPaintingStrategy(PaintingStrategy.LINE);
#VolPct.SetLineWeight(1);
#VolPct.SetDefaultColor(Color.PINK);
VolPct.hide();# can be over-ridden by the edit-studies check boxes
addlabel(yes,"Vol as % of " + VolAvgLength + " agg-bar avg volume = " + aspercent(Round(data,2)),if data < 0 then color.RED else color.GREEN);
# end
```

### Alternate 2:
```
#hint: Plots: 1. The volume histogram; 2. The inputted agg-bar average; and 3. A arrow when the volume exceeds the inputted average with an info label.
declare lower;
input length = 10;#hint length:The length of the average volume plot
input pct = 25.0;#hint pct:Plots an arrow when volume exceeds the average by this percent

def volAvg = Average( volume, length );
def volTest = volume >= volAvg * ( 1+ ( pct / 100 ) );

plot Vol = volume;
Vol.SetPaintingStrategy( PaintingStrategy.HISTOGRAM );
Vol.SetLineWeight(3);
Vol.DefineColor("Up", Color.UPTICK);
Vol.DefineColor("Down", Color.DOWNTICK);
Vol.AssignValueColor(if close > close[1] then Vol.color("Up") else if close < close[1] then Vol.color("Down") else GetColor(1));

plot VolAvg = volAvg;
VolAvg.SetDefaultColor(GetColor(8));
plot VolAlert = if volTest then volume * 1.30 else Double.NaN;
VolAlert.SetPaintingStrategy( PaintingStrategy.ARROW_UP);
VolAlert.SetDefaultColor( Color.GREEN );
VolAlert.SetLineWeight(2);
Addlabel(yes, "Arrow shows when volume is >= "+ pct + "above the " + length +"-bar-average",color.GREEN);
#end
```

## <a name="37"></a>SC-IDENTIFY CURRENT LOW THAT HAS GAPED UP
[TOC Return](#toc)

```
#Plot or scan for current low that has gaped-up by an input percent
input price1 = low;#hint Price1:The post-gap-up basis
input GapPct = 0.5;#Hint GapPct: The gap-up percent
input price2 = high;#hint Price2: The prior gap-up-bar-basis
input WithinBars = 15;#hint WithinBars:The number of bars-back to evaluate
def x = 1+GapPct/100; # factor for above 100 %
def term = x*price2[1]; # = factor * previous high
plot scan = price1 >= term;
#To scan for above happening within the last 15 days the above would read
#plot scan = price1 >= term within WithinBars bars;
##### below items not needed for a scan #####
scan.SetpaintingStrategy(paintingStrategy.BOOLEAN_ARROW_up);
scan.SetLineWeight(5);
scan.SetDefaultColor(Color.White);
```

## <a name="38"></a>C&S-PERCENTAGE CHANGE OF AN AVERAGE (SCAN OR PLOT)
[TOC Return](#toc)

```
#Hint:Scan/plot for a increase or decrease % of an inputted Parameter and average-length
#The 'Inputted Parameter' has a choice of eleven different parameters
#Give an up arrow where true
input price = volume;#hint Price:Parameter being measured
input choice = {default increase, decrease};#hint Choice: Choose Increase or Decrease %
input percent = 20;#hint percent: Enter the percent increse/decrease
input length = 50;#hint length: The average length being evaluated
def avg = average(price, length)[1];
def chg = 100*(price/avg -1);
plot scan;

switch (choice) {
  case increase:
    scan = chg >= percent;
  case decrease:
    scan = chg <= -percent;
}

#### Below items not needed for a scan ####
#scan.setpaintingStrategy(paintingStrategy.BOOLEAN_ARROW_DOWN);
scan.SetpaintingStrategy(paintingStrategy.BOOLEAN_ARROW_UP);
scan.SetLineWeight(5);
scan.SetDefaultColor(Color.White);
AddLabel(yes,Percent + " % " + Choice + " of the " + length + "-bar-average of a selected input price",color.white);
```

## <a name="39"></a>C-ARROW AT THE DEFINED TIME EACH DAY
[TOC Return](#toc)

```
#hint:Places an arrow at the defined time each day
declare hide_on_daily;
def barnumber = BarNumber();
input time = 1000;#hint time:Time to place the arrow at
def timeTest = SecondsFromTime(time) == 0;
def plotPrice = CompoundValue(1, if timeTest then barnumber else plotPrice[1], barnumber);
def data = plotPrice;
def a = barnumber - data;
Plot Arrow = If TimeTest then close else double.nan;
Arrow.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
Arrow.SetLineWeight(5);
Arrow.SetDefaultColor(Color.White);
AddLabel(yes, "Arrow is at time = " + AsPrice(time) +" of each day" ,color.white);
```

## <a name="40"></a>C-SHOWS ARROWS WHEN THE PRICE CROSSES THE MOVING AVERAGE
[TOC Return](#toc)

```
#hint: <b>MovingAverage Crossover - Once Per Chart</b>\nThis study shows arrows when the price crosses the moving average. The study by default only shows the latest crossing to free up screen space for more awesome studies.\n Enjoy - Jesse (author on the Mr. Script show)
input price = close;#hint price:Select the price of choice
input length = 10;#hint Length:Length of the average
input averageType = AverageType.EXPONENTIAL;#hint averageType:Select the type of average desired
input MostRecentOnly = Yes;#hint MostRecentOnly: Shows the most recent crossing only. \n <b>(Default is Yes)</b>
def avg = MovingAverage(averageType, price, length);
def crossingdown = price crosses below avg;
def crossingup = price crosses above avg;
def crossingover = close("Greatest Show Ever!");
def barnumber = barnumber();
def count = if crossingdown or crossingup then barnumber else 0;

plot onceperchartup = if MostRecentOnly and crossingUP and count == highestall(count) then low else double.nan;
plot onceperchartdown = if MostRecentOnly and crossingdown and count == highestall(count) then high else double.nan;

onceperchartdown.setPaintingStrategy(paintingStrategy.bOOLEAN_ARROW_down);
onceperchartup.setPaintingStrategy(paintingStrategy.bOOLEAN_ARROW_UP);
onceperchartup.setDefaultColor(color.light_green);
onceperchartdown.setDefaultColor(color.light_red);
onceperchartdown.setLineWeight(3);
onceperchartup.setLineWeight(3);
onceperchartdown.hidetitle();
onceperchartup.hidetitle();

Plot CrossUp = !mostRecentOnly and crossingup;
crossup.setPaintingStrategy(paintingStrategy.bOOLEAN_ARROW_UP);
crossup.setDefaultColor(color.light_green);
crossUp.setLineWeight(3);
crossup.hidetitle();

Plot Crossdown = !mostRecentOnly and crossingdown;
crossdown.setPaintingStrategy(paintingStrategy.bOOLEAN_ARROW_down);
crossdown.setDefaultColor(color.light_red);
crossdown.setLineWeight(3);
crossdown.hidetitle();
### EOC ###
```

## <a name="41"></a>C-LINE FROM OPEN OF FIRST BAR OF DAY OR YESTERDAY'S CLOSE
[TOC Return](#toc)

```
#plot a flat line from open of first bar of day. For use on multi-day charts.
def day = getDay();
def firstBar = day != day[1];
AssignPriceColor(if firstBar then color.ORANGE else color.CURRENT);
def dayOpen = if firstBar then high else dayOpen[1];
plot x = dayOpen;
```

### Alternate 1: Line from/for yesterday's close
```
declare upper;
def barNum = if IsNaN( close ) then Double.NaN else BarNumber();
def highestBar = HighestAll( barNum );
def previousClose = if barNum == highestBar - 1 then close else Double.NaN;
plot CloseLine = HighestAll( previousClose );
CloseLine.SetDefaultColor( Color.gray);
```

## <a name="42"></a>C-% CHANGE OF THE FIRST BAR VALUE
[TOC Return](#toc)

```
#Hint:<b> Plots the %-change-of-the-first-bar-value.</b>
declare lower;
input price = close;#hint price:This is the variable (11 choices) that will be plotted.
def close1 = First(price);#Defines the first bar value
plot Data = ( price - close1) / close1 * 100;
Plot ZeroLine = 0;
AddLabel(1,"Shown is the %-change-of-the-first-bar-value of " + close1,color.white);

#Puts any of the 11 price choices into a literal text in a label like ohlc4 = 75
AddLabel(yes, if price == close then "The price-variable selected is close = " + Round(close,2)
else if price == open then "The price-variable selected is open = " + Round(open,2)
else if price == high then "The price-variable selected is high = " + Round(high,2)
else if price == low then "The price-variable selected is low = " + Round(low,2)
else if price == hl2 then "The price-variable selected is hl2 = " + Round(hl2,2)
else if price == hlc3 then "The price-variable selected is hlc3 = " + Round(hlc3,2)
else if price == imp_volatility then "The price-variable selected is current imp_volatility = " + AsPercent(imp_volatility)
else if price == ohlc4 then "The price-variable selected is ohlc4 = " + Round(ohlc4,2)
else if price == open_interest then "The price-variable selected is Open_interest = " + Round(open_interest,0)
else if price == volume then "The price-variable selected is Volume = " + Round(volume,0)
else if price == VWAP then "The price-variable selected is VWAP = " + Round(VWAP,0)
else "N/A",color.white);
```

## <a name="43"></a>C-% CHANGE COMPARED TO ? DAYS-AGO
[TOC Return](#toc)

```
#hint:Plots and shows a label for the change compared to the past inputted-number-of-days.
declare lower;
input length = 30;#hint length:the number of trading days-ago for the change
def price = close(period = AggregationPeriod.day);
def Change = (price / price[length] - 1);
Plot PctChange = 100 * change;
AddLabel(yes,"% Change compared to " + length + " days ago = " + Round(PctChange, 1) + "%",color.PINK);
```

## <a name="44"></a>C-LOW IS ?% ABOVE YESTERDAY'S HIGH
[TOC Return](#toc)

```
#Plot or scan for current low that is ?% above yesterday's high #this is run on a 'day' aggregation
input price1 = low;
input percentage = 2.0;
input price2 = high;
def x = 1+percentage/100; # Equals 1.02 = factor for above 100 %
def term = x*price2[1]; # = 1.02 * previous high
plot scan = price1 >= term; scan.SetpaintingStrategy(paintingStrategy.BOOLEAN_ARROW_DOWN); scan.SetLineWeight(5);
scan.SetDefaultColor(Color.White);
```

## <a name="45"></a>C-IMP-VOLATILITY PERCENTILE
[TOC Return](#toc)

```
# hint: you can also copy/paste this code to create a custom IV percentile column for a watch list
def vol = impVolatility();
def hi = highest(vol,252);#is a one-year-day value. Use 189 for 6-month-day value
def lo = lowest(vol,252);#is a one-year-day value. Use 189 for 6-month-day value
def perct = (vol - lo) / (hi - lo);
AddLabel(1, "IV Percentile + " + AsPercent(perct)+ " of the yearly range", if perct > 0.80
then Color.Green
else if perct < 0.80 and perct > 0.50
then Color.Yellow
else color.Light_Red);
```

## <a name="46"></a>C-YTD PERCENT CHANGE
[TOC Return](#toc)

```
#Hint:watchlist or label YTD-percent-change
input price = close;#hint price:<b>Must be close for intended value</b>/n An error is in the label if close is not selected
def day = getDay();
def month = getmonth();
def year = getyear();
def lastDay = getLastDay();
def lastmonth = getlastmonth();
def lastyear = getlastyear();
def isToday = if(day == lastDay and month == lastmonth and year== lastyear, 1, 0);
#def yearswitch = if Highest(GetYYYYMMDD(), 300) > 20130000 then 20130102 else 20120103;# this line was in the original version and is replaced by the following
def yearswitch = if highest(getyyyymmdd(), 300) > 20140000 then 20140102 else 20130102;
def yearstart = if getyyyymmdd() == yearswitch then price else 0;
def todayend = if istoday then price else 0;
def jan1 = highest(yearstart, 300);
def now = highest(todayend, 300);
plot "YTD Percent Change" = round((((now - jan1)/ jan1) * 100), 2);
"YTD Percent Change".AssignValueColor(If "YTD Percent Change" > 0 then color.Green else if "YTD Percent Change" < 0 then color.red else color.yellow);
### Comment out the next hide code if this is used as a column watchlist #####
"YTD Percent Change".hide();#Plot has nothing of value to see
#### Comment-out the below label if this is used as a column watchList ####
AddLabel(1,"YTD % Change of the " + if price == close then "close = "+ "YTD Percent Change" + " %" else "'ERROR...WRONG PRICE-VARIABLE SELECTED'" ,if price == close then color.cyan else color.red);
#### EOC ######
```

### Alternate = current close as percent of the last-52-week-range
```
#Current price as % of 52-week-range
input price = close;
def YearHigh = highest(high, 252);
def YearLow = lowest(low, 252);
def YPR = round((price – YearLow) / (YearHigh – YearLow) * 100,2);
addlabel(yes, "Current price as % of 52-week-range = "+ round(YPR,0) + " %" , Color.white);
# If used as a custom column the below label is appropriate
#addlabel(yes, concat(YPR, "%"), if YPR > 75 then color.green else if YPR < 25 then color.red else color.current);
```

## <a name="47"></a>C-PLOT A HORIZONTAL LINE THRU A DEFINED DATE
[TOC Return](#toc)


#hint: <b>Plot a H-line on a date</b>\nPlots a horizontal line at the close on a specified date. Use on a daily chart. declare hide_on_intraday;
input Date = 20130801;#hint Date: Set the date you want see.<b>\n(Enter in YYYYMMDD)</b>
input price = CLOSE;
input show_line = Yes;#hint show_line: Show a horizontal line at this price<b>(Default is Yes)</b>
def timeTest = getYyyyMmDd() == date;
def data = if timetest then price else double.nan;
plot Line = if show_line then highestall(data) else double.nan;
line.assignValueColor((if price == close then color.cyan else if price == open then color.pink else if price == low then color.yellow else if price == high then color.green else color.red));

TOS & THINKSCRIPT SNIPPET COLLECTION Page 34 def monthday = if timetest then getdayOfMonth(date) else double.nan;
def month = if timetest then getmonth() else double.nan;
AddChartBubble(timetest, price, concat(concat(concat("Date: ",Concat(month, "/")), monthday), concat((if price == close then " Close: $" else if price == open then " Open: $" else if price == low then " Low: $" else if price == high then " High: $" else " Value: "), price)), (if price == close then color.cyan else if price == open then color.pink else if price == low then color.yellow else if price == high then color.green else color.red), yes);
#### EOC ######

## <a name="48"></a>C-ADD AN INDEX OR FUTURE LOWER CHART
[TOC Return](#toc)


The AddChart function is unsupported in TOS, Hence there is no documentation to support its use and color formatting. Also, not all chart types are supported.
Usage example: You may have a stock plotted on the upper panel:Say an oil company, CVX. You may want to see how its price varies with the oil futures. The code below allows you to show the oil futures (/CL) below for comparison.
declare lower;
input chartType = ChartType.CANDLE;
input Security = {default "SPX", "COMP", "DJX", "HUI", "MNX", "SOX", "NDX", "OEX", "QQQQ","QQQ","RUT", "VIX", "VXO", "XAU", "QQV", "TNX","/ES","/CL"};
AddChart( high = high( Security ), low = low( Security ),
open = open( Security ), close = close( Security ), type = chartType );
AddLabel(1, if Security == Security."SPX" then "SPX = S&P 500 INDEX is showing"
else if Security == Security."COMP" then " COMP = NASDAQ COMPOSITE is showing "
else if Security == Security."DJX" then " DJX = DOW JONES INDUSTRIAL AVERAGE INDEX is showing" else if Security == Security."HUI" then "HUI = AMEX GOLD BUGS INDEX is showing"
else if Security == Security."MNX" then "MNX = CBOE MINI NASDAQ INDEX is showing"
else if Security == Security."SOX" then "SOX = PHLX SEMI CONDUCTOR INDEX is showing"
else if Security == Security."NDX" then " NDX = NASDAQ 100 INDEX INDEX is showing"
else if Security == Security."OEX" then "OEX = S & P 100 INDEX is showing"
else if Security == Security."RUT" then " RUT = Russel 2000 Index is showing "
else if Security == Security."QQQ" then "QQQ = POWERSHARES QQQ is showing"
else if Security == Security."VIX" then "VIX = CBOE MARKET VOLATILITY INDEX is showing"
else if Security == Security."VXO" then "VXO = CBOE OEX IMPLIED VOLATILITY INDEX is showing"
else if Security == Security."XAU" then " XAU = GOLD & SILVER INDEX is showing"
else if Security == Security."QQV" then "QQV = QQQQ VOLATILITY INDEX is showing"
else if Security == Security."TNX" then " TNX = 10-YR TREASURY INDEX is showing"
else if Security == Security."/CL" then "/CL = Light Sweet Crude Oil Futures is showing"
else if Security == Security."/ES" then "/ES = E-mini S&P 500 Index Futures is showing"
else "ERROR – none were found", Color.WHITE);
## EOC ###

TOS & THINKSCRIPT SNIPPET COLLECTION Page 35

## <a name="49"></a>S-SCAN FOR TRENDING CONDITIONS
[TOC Return](#toc)


input length = 20;#hint length:Number of agg-bars to test for ascending conditions input bars_up = 5;#hint bars_up:Number of agg-bars being evaluated in <b>sum</b> def trend_up = IsAscending(close,length);
def trend_up2 = sum(close > close[1],Bars_up) >= Bars_up;
plot scan = trend_up && trend_up2;
Another example
input length = 20;#hint length:Number of agg-bars to test for ascending conditions input bars = 5;#hint bars:Number of agg-bars being evaluated in <b>sum</b>
def trendup = IsAscending(close,length);
def trendup2 = sum(close > close[1],bars) >= bars;
def mcd = MACD();
def mcdtrend = sum(mcd > mcd[1],bars) == bars;
plot scan = trendup && trendup2 && mcdtrend;

## <a name="50"></a>S-SCAN FOR MACD AVG AND MACD DIVERGENCE
[TOC Return](#toc)


Input Bars = 3;#hint bars:The consecutive number of agg-bars being evaluated. def mcda = MACD().Avg;
def mcdv = MACD();
def div = sum(mcda > mcda[1],Bars) == Bars ;
def div2 = sum(mcdv < mcdv[1],Bars) == Bars;
plot scan = div and div2;
========================================
This scan does a good job finding stocks that are tanking!
Plot scan = Crosses( MACD( 12, 26, 9, "SMA" ).Avg, 0, CrossingDirection.Below )

## <a name="51"></a>S-SCAN DECLINE FOR ? BARS
[TOC Return](#toc)


input Bars = 5;#hint bars:The consecutive number of agg-bars being evaluated. plot decline = sum(close < close[1],Bars) == Bars

## <a name="52"></a>S-PRICE DIRECTION SCAN
[TOC Return](#toc)


input price = close;
input length = 3;#hint length:Number of consecutive bars being evaluated
input Choice = {default "increased", "decreased"};#hint choice:Choose direction up or down plot scan;
switch (Choice){
case "increased":
scan = sum(price > price[1], length) == length; case "decreased":
scan = sum(price < price[1], length) == length; }
Comment: When entering the scan, the set aggregation defines the length of a bar. It likely is 'day' but doesn't have to be. Also, this is a simple clear example of how the 'switch; function operates.
Scan for a price increase
input price1 = low;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 36
input percentage = 2.0;#hint percentage: Percent increase in price input price2 = high;
def x = 1+percentage/100;
def term = x*price2[1];
plot scan = price1 >= term;# The current low is 2% above the previous high scan.SetpaintingStrategy(paintingStrategy.BOOLEAN_ARROW_DOWN);

## <a name="53"></a>S-SCAN FOR HAS-EARNINGS IN FUTURE
[TOC Return](#toc)


Input length = 10;#Hint length:The number of future/ahead agg-bars to evaluate
def earnings = hasearnings();#When true this evaluates to one which then appears in the following 'sum' plot scan = sum(earnings,length)[-length +1] > 0;
Comment: This could be very useful as a watchlist custom column.

## <a name="54"></a>C-LINE RSI WITH MACD HISTOGRAM
[TOC Return](#toc)


An RSI indicator on a single line with over-bought/over-sold color indication. This RSI is in conjunction with a MACD ########
declare lower;
input RSI_Wilder_length = 14;
input RSI_Wilder_over_bought = 70; input RSI_Wilder_over_sold = 30; input RSI_Wilder_price_type = close;
def RSIplot = RSIWilder(RSI_Wilder_length, RSI_Wilder_over_bought, RSI_Wilder_over_sold, RSI_Wilder_price_type);
plot RSI_line = 0; RSI_line.SetPaintingStrategy(PaintingStrategy.POINTS);
RSI_line.AssignValueColor(if RSIplot >= RSI_Wilder_over_bought then Color.RED else if RSIplot <= RSI_Wilder_over_sold then Color.GREEN else Color.YELLOW);
####################### ## MACD HISTOGRAM PLOT##### #######################
input MACD_Histogram_fastLength = 12;
input MACD_Histogram_slowLength = 26;
input MACD_Histogram_MACDLength = 9;
input MACD_Histogram_AverageType = {SMA, default EMA};
plot Diff = MACD(MACD_Histogram_fastLength, MACD_Histogram_slowLength, MACD_Histogram_MACDLength, MACD_Histogram_AverageType).Diff;
Diff.SetDefaultColor(GetColor(5)); Diff.SetPaintingStrategy(PaintingStrategy.HISTOGRAM); Diff.SetLineWeight(3);
Diff.DefineColor("Positive and Up", Color.GREEN); Diff.DefineColor("Positive and Down", Color.DARK_GREEN);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 37
Diff.DefineColor("Negative and Down", Color.RED);
Diff.DefineColor("Negative and Up", Color.DARK_RED);
Diff.AssignValueColor(if Diff >= 0 then if Diff > Diff[1] then Diff.color("Positive and Up") else Diff.color("Positive and Down") else if Diff < Diff[1] then Diff.color("Negative and Down") else Diff.color("Negative and Up"));
AddLabel(yes, if RSIplot >= RSI_Wilder_over_bought then "RSI on the line is Overbought" else if RSIplot <= RSI_Wilder_over_sold then "RSI on the line is Oversold" else "RSI on the line is Neutral",if RSIplot >= RSI_Wilder_over_bought then Color.RED else if RSIplot <= RSI_Wilder_over_sold then Color.GREEN else Color.YELLOW);

## <a name="55"></a>C-MARKET SENTIMENT
[TOC Return](#toc)


#hint: <b>Market Sentiment</b>\nThe Market Sentiment study is a popular study in Prophet Charts. declare lower;
input perioda = 51;
input periodb = 47;
input RoundingValue = 4;
def llow = Lowest(low, perioda);
def c_ln = close - llow;
def hhigh = Highest(high, perioda);
def hn_ln = hhigh - llow;
def numerator = Sum(c_ln, periodb);
def denominator = Sum(hn_ln, perioda);
plot MarketSentiment = round(100* (numerator/denominator), RoundingValue); marketsentiment.setDefaultColor(color.yellow);

## <a name="56"></a>S-SCAN FOR CORRELATED STOCKS
[TOC Return](#toc)


High correlation
input length = 10;#hint length: the agg-bar length being compared
input correlationWithSecurity = "SPX";#hint correlationWithSecurity; The security that the stock is correlated with input inarow = 10;#hint inarow:The number of agg-bars in a row with >0.9 correlation
def x = Correlation(close, close(correlationWithSecurity), length) > .9;#greater then 0.9 indicates a high correlation plot scan = sum(x, inarow) >= inarow;
Low correlation
input length = 10;
input correlationWithSecurity = "SPX";
input inarow = 10;
def x = Correlation(close, close(correlationWithSecurity), length) < =.5; plot scan = sum(x, inarow) >= inarow;

## <a name="57"></a>C-MARKET FORECAST PLOTTED BY REFERENCE
[TOC Return](#toc)


Comment: This illustrates how to plot a study (MarketForecast) by reference.
declare lower;
plot x = MarketForecast();#Momentum is the default plot: The first listed in the study code. plot y = MarketForecast().NearTerm;
plot z = MarketForecast().Intermediate;
plot HighValue = 80;
plot LowValue = 20;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 38
x.setdefaultColor(color.green);
addlabel(1,"Market Forecast Momentum",color.green); addlabel(1,"Market Forecast NearTerm",color.pink); addlabel(1,"Market Forecast Intermediate",color.white);

## <a name="58"></a>S-DMI_OSCILLATOR SCAN FOR TRENDING-UP STOCKS
[TOC Return](#toc)


Comment: A good scan for stocks trending up. The aggregation for this is “day”. Change length for a more powerful trend. def length = 5;# The numbers of agg-bars DMI is climbing
def x =DMI_Oscillator();
def up = x > x[1];
Plot Scan = x > 10 && sum(up,length) >= length;

## <a name="59"></a>C-TRIPLE EMA & STD DEV MONITORING
[TOC Return](#toc)


#by Mr. Script. Formatting added by SFL. #Triple EMA & Std Dev monitoring #start code
declare lower;
input bperiod = 18;
input TEMAavg = 8;
input std_dev_up = 1.5; input std_dev_down = -1.5; input stdev_length = 63;
def haopen = CompoundValue(1, ((open[1] + high[1] + low[1] + close[1]) / 4 + haopen[1]) / 2, hl2); def haclose = ((open + high + low + close) / 4 + haopen + Max(high, haopen) + Min(low, haopen)) / 4; def TMA1 = TEMA(haclose, TEMAavg);
def TMA2 = TEMA(TMA1, TEMAavg);
def Diff = TMA1 - TMA2;
def ZIHA = TMA1 + Diff;
plot percB = (TEMA(ZIHA, TEMAavg) + 2 * StDev(TEMA(ZIHA, TEMAavg), bperiod) - WMA(TEMA(ZIHA, TEMAavg), bperiod)) / (4 * StDev(TEMA(ZIHA, TEMAavg), bperiod)) * 100; #.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
percB.SetLineWeight(1);
percB.SetDefaultColor(Color.cyan);
plot overbought = 50 + std_dev_up * stdev(percB, stdev_length); overbought.SetLineWeight(1); overbought.SetDefaultColor(Color.red);
plot oversold = 50 + std_dev_down * stdev(percB, stdev_length); oversold.SetLineWeight(1);
oversold.SetDefaultColor(Color.red);
plot midline = 50;
Addlabel(1,"RED = overbought/oversold lines", color.light_red); Addlabel(1,"Above mid-line is bullish. Below is bearish.", color.cyan); #end code

TOS & THINKSCRIPT SNIPPET COLLECTION Page 39

## <a name="60"></a>C-FAST-MED-SLOW TRUE RANGE OSC
[TOC Return](#toc)


#by Pacodeveux in Mr. Script show #Fast, med, slow true range osc declare lower;
input fastLength = 7; input medLength = 14; input slowLength = 28; input FactorFast = 4; input FactorMed = 2; input FactorSlow = 1;
def trRng = TrueRange(high, close, low);
def trRngFast = sum(trRng, fastLength); def trRngMed = sum(trRng, medLength); def trRngSlow = sum(trRng, slowLength);
def diff = close - Min(close[1], low);
def diffFast = sum(diff, fastLength); def diffMed = sum(diff, medLength); def diffSlow = sum(diff, slowLength);
def valFast = (diffFast / trRngFast) * factorFast; def valMed = (diffMed / trRngMed) * factorMed; def valSlow = (diffSlow / trRngSlow) * FactorSlow; Plot midLine = 0.5;
midLine.SetLineWeight(2);
midLine.SetDefaultColor(Color.yellow);
plot UltOsc = if trRngFast == 0 or trRngMed == 0 or trRngSlow == 0 then 0 else (valFast + valMed + valSlow) / (factorFast + factorMed + 1); UltOsc.SetDefaultColor(GetColor(1));
AddLabel(1,”Fast-Med-Slow True Range Oscillator”, color.white);
#End of Code

## <a name="61"></a>S-EXAMPLE OF TIME BRACKETED SCAN
[TOC Return](#toc)


Example of Time Bracketed Scan by Mobius # Time Bracket
input Begin = 0930;
input End = 1030;
def Active = if SecondsFromTime(Begin) > 0 and SecondsTillTime(End) >= 0 then 1 else 0;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 40 def Cond1 = if MACD()."Value" crosses above 0 then 1 else 0;
plot Signal = Active == 1 and Cond1 == 1;

## <a name="62"></a>C-CHANGE STUDIES BASED ON SYMBOL VIEWED
[TOC Return](#toc)


# by Mr. Script:
#Change studies based on symbol viewed input symbol_1 = "SPY";
input symbol_2 = "DIA";
input symbol_3 = "IWM";
input symbol_4 = "AMTD";
plot x;
plot y;
plot z;
if (GetUnderlyingSymbol() == symbol_1)
{
x = LinearRegChVar("width of channel" = 25.0, "full range" = No, length = 50).UpperLR; y = LinearRegChVar("width of channel" = 25.0, "full range" = No, length = 50);
z = LinearRegChVar("width of channel" = 25.0, "full range" = No, length = 50).LowerLR; }
else if (GetUnderlyingSymbol() == symbol_2)
{
x = BollingerBandsSMA().UpperBand;
y = BollingerBandsSMA();
z = BollingerBandsSMA().LowerBand;
}
else if (GetUnderlyingSymbol() == symbol_3) {
x = close + 5;
y = hlc3;
z = close - 5;
}
else if (GetUnderlyingSymbol() == symbol_4) {
x = SimpleMovingAvg(length = 50);
y = SimpleMovingAvg(length = 200);
Z = PPS().BuySignal;
}
else
{
x = double.nan;
y = double.nan;
z = double.nan;
}
#end

## <a name="63"></a>S-SCAN FOR HIGHS OR LOWS
[TOC Return](#toc)



TOS & THINKSCRIPT SNIPPET COLLECTION Page 41
#hint: scan for stocks with a new 52-week-high
# BE SURE to change D to Wk for the filter's aggregation Plot scan = close > highest(high,52)
Alternate 1 = Stocks in top 10 percentile of their 52-week high-low range
# Hint: scan for stocks in the top 10 percentile of their 52-week high-low range # Set aggregation to 'day'
input range = 252;#hint range:Number of trading days in a year
input price = close;
def hi = highest(high,range);
def lo = lowest(low,range);
def x = (price - lo) / (hi - lo) * 100;
plot scan = x > 90;
Alternate 2 = Stocks between 47% and 53% (or the middle of) their 52-week-high-low range #Hint: scan for stocks between 47% and 53% (or the middle of) their 52-week-high-low range
input low_pct = 47;
input hi_pct = 53;
input range = 252;
input price = close;
def hi = highest(high,range);
def lo = lowest(low,range);
def x = (price - lo) / (hi - lo) * 100;
plot scan = x <= hi_pct and x >= low_pct;
Alternate 3 = scan to find stocks which made new 20-day-low input range = 20;
plot scan = Low <= Lowest(Low, range)
Alternate 4 = scan to find stocks which made new 20-day-high input range = 20;
plot scan = High <= Highest(High, range)

## <a name="64"></a>C-PLOTS HIGHER-HIGHS AND LOWER-LOWS
[TOC Return](#toc)


# Hint: Plots consecutive (defined by number) higher-highs AND lower-lows
input price = close;
input number = 3;#hint number: Arrows are plotted after this number of consecutives are observed
def hi = high;
def lo = low;
def higher = if hi > hi[1] then hi else higher[1]; def lower = if lo < lo[1] then lo else lower[1];
      plot h = higher;
TOS & THINKSCRIPT SNIPPET COLLECTION Page 42
h.SetLineWeight(1); h.SetDefaultColor(Color.cyan); plot l =lower; l.SetLineWeight(1); l.SetDefaultColor(Color.pink); def hig = higher > higher[1]; def lowe = lower < lower[1];
plot x = sum(hig,number) >= number; x.setPaintingStrategy(paintingStrategy.BOOLEAN_ARROW_DOWN); x.SetLineWeight(1);
x.SetDefaultColor(Color.White);
plot y = sum(lowe,number) >= number; y.setPaintingStrategy(paintingStrategy.BOOLEAN_ARROW_UP); y.SetLineWeight(1);
y.SetDefaultColor(Color.yellow);
AddLabel(1,"Plot of highs", color.cyan); AddLabel(1,"Plot of lows", color.pink);
AddLabel(1,"Plot arrows of higher-highs", color.white); AddLabel(1,"Plot arrows of lower-lows", color.yellow);

## <a name="65"></a>T-HOW TO DECIPHER COMPLEX STUDY PLOTS
[TOC Return](#toc)


There are some studies that have numerous plots. Deciphering what plot corresponds to particular code can be a challenge. Here is a tricky way to do it.
Here is the situation in a Edit Studies example.
In this example, if you want to identify what plot is the ORH, you uncheck 'Show Plot' and the click 'Apply'. While doing this you can observe which plot is ORH because it disappears. This can be reversed and redone if you missed the observation.This works on any highlighted plot. You can also use color changes to identify various plots.

## <a name="66"></a>C-CANDLESTICK PLOTS
[TOC Return](#toc)


If you are interested in seeing examples of various candlesticks, there are two studies available. They are: (1) Bearish candle plots.txt; and (2) Bullish candle plots.txt. They are too big to include here but may be downloaded from http://mytrade.com/StanL There are many examples of coding procedures within those files. They are also excellent for

TOS & THINKSCRIPT SNIPPET COLLECTION Page 43 correlating the looks of a candle with its title.

## <a name="67"></a>C-ATR TRAILING STOP
[TOC Return](#toc)


Trailing Stop By Jesse on the Mr. Script show
input trailType = {default modified, unmodified}; input ATRPeriod = 5;
input ATRFactor = 3.5;
input firstTrade = {default long, short};
assert(ATRFactor > 0, "'atr factor' must be positive: " + ATRFactor);
def HiLo = Min(high - low, 1.5 * Average(high - low, ATRPeriod)); def HRef = if low <= high[1]
then high - close[1]
else (high - close[1]) - 0.5 * (low - high[1]); def LRef = if high >= low[1]
then close[1] - low
else (close[1] - low) - 0.5 * (low[1] - high);
def ATRMod = ExpAverage(Max(HiLo, Max(HRef, LRef)), 2 * ATRPeriod - 1);
def loss;
switch (trailType) { case modified:
loss = ATRFactor * ATRMod; case unmodified:
loss = ATRFactor * AvgTrueRange(high, close, low, ATRPeriod); }
def state = {default init, long, short}; def trail;
switch (state[1]) {
case init:
if (!IsNaN(loss)) { switch (firstTrade) { case long:
state = state.long;
trail = close - loss; case short:
state = state.short;
trail = close + loss; }
} else {
state = state.init; trail = Double.NaN;
}
case long:
if (close > trail[1]) {
state = state.long;
trail = Max(trail[1], close - loss);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 44
 } else {
state = state.short;
trail = close + loss; }
case short:
if (close < trail[1]) {
state = state.short;
trail = Min(trail[1], close + loss); }
else {
state = state.long; trail = close - loss;
} }
def BuySignal = Crosses(state == state.long, 0, CrossingDirection.Above); def SellSignal = Crosses(state == state.short, 0, CrossingDirection.Above);
plot TrailingStop = trail;
TrailingStop.SetPaintingStrategy(PaintingStrategy.POINTS); TrailingStop.DefineColor("Buy", GetColor(0)); TrailingStop.DefineColor("Sell", GetColor(1)); TrailingStop.AssignValueColor(if state == state.long
then TrailingStop.color("Sell") else TrailingStop.color("Buy"));
plot cross = close crosses trailingstop; cross.setPaintingStrategy(paintingStrategy.BOOLEAN_ARROW_DOWN);

## <a name="68"></a>C-EARNINGS
[TOC Return](#toc)


On Earnings by Jesse on Mr Script show #The move after earnings
declare lower;
plot EstEarning = getEstimatedEarnings(); EstEarning.SetPaintingStrategy(PaintingStrategy.POINTS);
plot actual_earnings= getactualearnings(); actual_earnings.setpaintingstrategy(paintingstrategy.points);
def c = if actual_earnings then getyyyymmdd() else double.nan;
def d = c + 1;
def e = if c then close(period = aggregationperiod.day) else double.nan; def f = if d then open(period = aggregationperiod.day)[-1] else double.nan; plot "Move after earnings" = f - e;
"Move after earnings".setpaintingstrategy(paintingstrategy.points); ###########################
#The below is how to scan for earnings

TOS & THINKSCRIPT SNIPPET COLLECTION Page 45
Input length = 10;#hint length: The days to scan for def a = hasearnings();
def b = getday();
def c = if a then b else 0;
def d = average(c, length); def e = d[-length];
plot f = e > 0;

## <a name="69"></a>C-SLOPE OF AN AVERAGE + 'AVERAGE TYPE' USAGE IN A LABEL
[TOC Return](#toc)


#hint:Plots the tangent angle of the inputted average
declare lower;
input length = 9;#hint length:The number agg-bars of the average
input price = close;#hint Price:The price choice being evaluated
input averageType = AverageType.EXPONENTIAL;#hint averageType:Select the average type desired
def avg = MovingAverage(averageType, price, length);
def height = avg - avg[length];
plot "Angle, deg" = ATan(height / length) * 180 / Double.Pi;
"Angle, deg".AssignValueColor(if "Angle, deg" >= 0 then Color.green else Color.red);
plot xavg = avg;
plot xheight = height;
plot ZeroLine = 0;
addlabel(1,"Plot is the tangent angle of the " + length + "-bar " + If averageType == AverageType.EXPONENTIAL then "Exponential average"
else if averageType == AverageType.Hull then "Hull average"
else if averageType == AverageType.simple then "Simple average"
else if averageType == AverageType.wilders then "Wilders average"
else if averageType == AverageType.weighted then "Weighted average"
else "" ,color.white);
Comment: In the label, note the retrieval of the literal AverageType selection. The code shown is very reusable. Comment2: This plot follows a trend very well

## <a name="70"></a>C-TODAY'S MARKET OPENING PRICE
[TOC Return](#toc)


# by Mobius©:
#hint: Plots a horizontal line at a value of today's market opening price
input CashOpen = 0930; input Settlement = 1615;
def Today = GetDay() == GetLastDay();
def TodaysOpen = if SecondsFromTime(CashOpen) == 0 and
SecondsTillTime(Settlement) >= 24300 and
Today
then open
else TodaysOpen[1];
plot DaysOpen = if TodaysOpen then TodaysOpen else Double.NaN; DaysOpen.SetPaintingStrategy(PaintingStrategy.DASHES); DaysOpen.SetDefaultColor(Color.WHITE);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 46

## <a name="71"></a>S-SCAN RSI UNDER 20 & CLOSE > 200-DAY SMA
[TOC Return](#toc)


Alternate 1
Stocks that have a RSI under 20 for 3 days and a closing price above the 200 SMA
Plot scan = (RSIWilder(length = 2) < 20 && RSIWilder(length = 2)[1] < 20 && RSIWilder(length = 2)[2] < 20 && Close > SimpleMovingAvg(length = 200))
Alternate 2
stocks that have a 3-day RSI under 20 a closing price above the 200 SMA
Plot Scan =(RSIWilder(length = 3) < 20 && Close > SimpleMovingAvg(length = 200))
Comment: Set agg to day.

## <a name="72"></a>S-SCAN FOR CROSS OF MOVING AVERAGES
[TOC Return](#toc)


Alternate 1: Today's cross of a 10-bar MA above 20-bar EMA. Set agg = day. def MA = average(close,10); #10 bar MA
def EMA = expaverage(close,20); # 20-Bar EMA
def cross = MA[1]<EMA[1] && MA>EMA;
Alternate 2: Cross 3 days back. Set agg = day. input DaysBack = 3;
def MA = average(close,10); #10 bar MA
def EMA = expaverage(close,20); # 20-Bar EMA
def cross = MA[DaysBack] < EMA[DaysBack] && MA>EMA;
Alternate 3: Plot a dot below the bar that crosses and only that bar.
If you want to see a dot anytime the condition is true, then remove the '&& !cross[1]' plot Crossing = if cross && !cross[1] then low else double.nan; Crossing.SetPaintingStrategy(PaintingStrategy.points);

## <a name="73"></a>S-SCAN CROSS OF STANDARD DEVIATION CHANNEL
[TOC Return](#toc)


Scan for price crossing the upper/lower line of the Standard Deviation Channel (SDC).
```
def sdcU = StandardDevChannel().UpperLine;
plot scanSDC = close >= sdcU and close[1] < sdcU[1];
Following the same logic the sdcL would be :
def sdcL = StandardDevChannel().LowerLine;
plot scanSDC = close <= sdcL and close[1] > sdcL[1];
```

## <a name="74"></a>S-ABOVE 20-DAY MA FOR 65 DAYS
[TOC Return](#toc)


Scan for stocks above their 20 day MA for 65 days. Set agg = day.
```
input ConsecutiveClose = 65;#Number of days
def avg = Average(close,20);# 20-bar average
def above20 = if close >= avg then above20[1] + 1 else 0;
plot scan = if above20 >= ConsecutiveClose then 1 else 0;
```

## <a name="75"></a>S-SCAN FOR 200-DAY MA
[TOC Return](#toc)


Alternate 1: A scan that looks for stocks touching the 200-day MA. Set agg = day. Plot scan = high > average(close,200) && low < average(close,200)
Alternate 2: Price crosses the 200-day MA
def SMA = SimpleMovingAvg( close, 200, 0 );
plot SmaScan = crosses( close, SMA, CrossingDirection.Any );
Alternate 3: For a better study for the scan, use this. You’ll get more hits. This one doesn’t care if the close is above the 200-day MA as long as EITHER the close is above the 200-day MA OR the 200-day MA is bracketed. Same for the reverse case.
def avg = Average(close, 200);
def Bracketing = high > average(close,200) && low < average(close,200); def above200 = if close >= avg or Bracketing then above200[1] + 1 else 0; Plot scan = above200;
OR
def below200 = if close<=avg or Bracketing then below200[1] + 1 else 0; Plot scan = below200;

## <a name="76"></a>S-SCAN FOR A BULLISH ADX
[TOC Return](#toc)


Comment: Use the DMI along with the ADX. The ADX can be bullish or bearish depending on whether the DMIplus is greater than the DMIminus.
ADX()."ADX" > 40 && DIPlus()."DI+" > DIMinus()."DI-"

## <a name="77"></a>S-SCAN FOR DMI
[TOC Return](#toc)


Comment: Use the DMI along with the ADX. The ADX can be bullish or bearish depending on whether the DMIplus is greater than the DMIminus.
Alternate 1: DMI+ crosses above DMI-
def DMIplus = DMI(length = 25)."DI+";
def DMIminus = DMI(length = 25)."DI-";
plot Scan = DMIplus > DMIminus and DMIplus[1] <= DMIminus[1];
Alternate 2: DMI+ is above DMI-
def DMIplus = DMI(length = 25)."DI+"; def DMIminus = DMI(length = 25)."DI-"; plot Scan = DMIplus > DMIminus;
Alternate 2: DMI+ crosses below DMI-
def DMIplus = DMI(length = 25)."DI+";
def DMIminus = DMI(length = 25)."DI-";
plot Scan = DMIplus < DMIminus and DMIplus[1] >= DMIminus[1];
Alternate 2: DMI+ is below the DMI- def DMIplus = DMI(length = 25)."DI+"; def DMIminus = DMI(length = 25)."DI-"; plot Scan = DMIplus < DMIminus;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 48

## <a name="78"></a>S-SCAN USING PRE-DEFINED CROSSOVERS
[TOC Return](#toc)


MACDHistogramCrossover: Scan for the MACD Histogram value crossing from positive to negative or vice versa. Uses default parameters of fastLength = 12, slowLength = 26, MACDLength = 9, AverageType = EMA
input crossingType = {default "Positive to Negative", "Negative to Positive"};
def MACD_cross_above = MACDHistogramCrossover(crossingType == "Negative to Positive").signal;
plot scan = MACD_cross_above;
OR
def MACD_cross_below = MACDHistogramCrossover(crossingType == "Positive to Negative").signal; plot scan = MACD_cross_below;
ADXCrossover: Scan for the ADX (bullish or bearish) crossing a specified level (threshold). The default parameters are length = 14, threshold = 20. When the DMIplus is greater than the DMIminus the ADX is 'Bullish' or vice versa is 'Bearish'.
input crossingType = {default above, below};
Plot ADX_Bull = ADXCrossover(crossingType = "above") .signal && DMI."DI+" > DMI."DI-";
OR
Plot ADX_Bear = ADXCrossover(crossingType = "above") .signal && DMI."DI-" > DMI."DI+";
MomentumCrossover: Scans for the Momentum crosses the zero line. The default length = 12; input crossingType = {default "Positive to Negative", "Negative to Positive"};
plot RisingMomentum = MomentumCrossover(crossingType == CrossingType."Negative to Positive").signal;
OR
plot FallingMomentum = MomentumCrossover(crossingType == CrossingType."Positive to Negative").signal;
MoneyFlowIndexCrossover: Scans for the Money Flow Index crossing the specified level. The default parameters are length = 14, threshold = 20.
input crossingType = {default above, below};
Plot MFI_above = MoneyFlowIndexCrossover(crossingType == crossingType.above).signal;
OR
Plot MFI_below = MoneyFlowIndexCrossover(crossingType == crossingType.below).signal;
MovingAvgCrossover: Scans for crossovers of moving averages of different types and lengths. The defaults parameters are price = close, length1 = 15, length2 = 30. This example will specify all parameters to avoid confusion.
input averageType1 = {default Simple, Exponential, Weighted, Wilders, Hull};
input averageType2 = {default Simple, Exponential, Weighted, Wilders, Hull};
input crossingType = {default above, below};
Plot MA_above = MovingAvgCrossover(price = close, Length1 = 15, length2 = 30, averageType1 = "simple",averageType2 = "Exponential", crossingType = "above").signal;
The above reads as a'based on the close, simple average1 of length = 15 crosses above exponential average2 of length = 30.'
OR
Plot MA_below = MovingAvgCrossover(price = close, Length1 = 15, length2 = 30, averageType1 = "simple",averageType2 = "Exponential", crossingType = "below").signal;
The above reads as a'based on the close, simple average1 of length = 15 crosses below exponential average2 of length = 30.'

TOS & THINKSCRIPT SNIPPET COLLECTION Page 49
ParabolicSARCrossover: Scans for the Parabolic SAR crossing the price plot close. The defaults are accelerationFactor = 0.02, accelerationLimit = 0.2
input crossingType = {default Bearish, Bullish};
Plot SAR_Bear = ParabolicSARCrossover(crossingType = "Bearish").signal;
OR
Plot SAR_Bull = ParabolicSARCrossover(crossingType = "Bullish").signal;
PriceAverageCrossover: The Price Average Crossover scans for crossovers of price with its moving average. The default parameters are price = close, length = 15
input averageType = {default Simple, Exponential, Weighted, Wilders, Hull};
input crossingType = {default above, below};
Plot PAC_above = PriceAverageCrossover( averageType = "Exponential", crossingType = "above").signal; The above reads 'scan for when the 15 bar exponential moving average crosses above the close'.
OR
Plot PAC_below = PriceAverageCrossover( averageType = "Exponential", crossingType = "below").signal; The above reads 'scan for when the 15 bar exponential moving average crosses below the close'.
RSIWilderCrossover: The RSI Wilder Crossover scans for an overbought-oversold indicator of specified levels. The defaults are length = 14, threshold = 30. Specify the threshold for the overbought-oversold value desired input crossingType = {default above, below};
Plot RSI_Cross_Above = RSIWilderCrossover(threshold = 30, crossingType = "above").signal; The above reads 'scan for when the RSI Wilder crosses above 30'.
OR
Plot RSI_Cross_Below = RSIWilderCrossover(threshold = 30, crossingType = "Below").signal; The above reads 'scan for when the RSI Wilder crosses below 30'.
RateOfChangeCrossover: The Rate Of Change Crossover for where Rate Of Change crosses zero level. The default is length = 14.
input crossingType = {default "Positive to Negative", "Negative to Positive"};
plot ROC_Neg = RateOfChangeCrossover( crossingType = "Positive to Negative").signal;
The above reads as 'scan for when the rate of change crosses below zero (or goes negative).' OR
plot ROC_Pos = RateOfChangeCrossover( crossingType = "Negative to Positive").signal;
The above reads as 'scan for when the rate of change crosses above zero (or goes positive).'
StochasticCrossover:
The Stochastic Crossover for when the Stochastic Slow or Stochastic Fast crosses overbought (80%) or oversold (20%) level. The default parameters are KPeriod = 14. Note the overbought and oversold levels are predefine as 80/20 respectively and can't be changed when using this crossover study.
input stochasticMode = {default StochasticFast, StochasticSlow};
input crossingType = {default Overbought, Oversold};
Plot Stoch_Fast_OB = StochasticCrossover(stochasticMode = "StochasticFast", crossingType = "Overbought").signal; The above reads as 'scan for when the 14 period fast stochastic crosses above 80'.
OR
Plot Stoch_Slow_OS = StochasticCrossover(stochasticMode = "StochasticSlow", crossingType = "Oversold").signal; The above reads as 'scan for when the 14 period slow stochastic crosses below 20'.
Comment1: Re all crossover scans, refer to "Referencing other studies" for a complete explanation of the applicable

TOS & THINKSCRIPT SNIPPET COLLECTION Page 50
rules for specifying parameters
Comment2: The examples shown above do not represent all possible combinations of the parameters available. Using the examples guides you re what parameters are applicable and how you may change them to suit your desires.
Comment3: Each of the 11 crossover scans are selectable in the Scan/StockHacker tab. This is a very easy way to implement these scans since all the parameters are presented for easy assgnment.

## <a name="79"></a>S-MACD SCAN
[TOC Return](#toc)


Bullish Scan: The MACD value crosses above the MACD average while both are below zero def MACD_Val = MACD(12,26,9).Value;
def MACD_Avg = MACD(12,26,9).Avg;
def xOver = MACD_Val [1] < MACD_Avg [1] and MACD_Val >= MACD_Avg ;
plot bullishScan = xOver and MACD_Val < 0 and MACD_Avg < 0;
Bearish scan: The MACD value crosses above the MACD average while both are Above zero def MACD_Val = MACD(12,26,9).Value;
def MACD_Avg = MACD(12,26,9).Avg;
def xOver = MACD_Val [1] < MACD_Avg [1] and MACD_Val >= MACD_Avg ;
plot bearishScan = xOver and MACD_Val > 0 and MACD_Avg > 0;
Scanning for stocks that have just crossed over produces less hits that a scan that looks for a xOver within one (1) day. def MACD_Val = MACD(12,26,9).Value;
def MACD_Avg = MACD(12,26,9).Avg;
def xOver = MACD_Val[1] < MACD_Avg[1] and MACD_Val >= MACD_Avg;
plot bearishScan = ( xOver or xOver[1] ) and MACD_Val > 0 and MACD_Avg > 0;
Suggest: To get a meaningful scan use: 1) fundamental filter: close >=10, and 2) study filter: VolumeAvg(50) >= 500000

## <a name="80"></a>C-PLACING OF PLOTTED ARROWS
[TOC Return](#toc)


When you want to move a plotted arrow you can place it with the 'values_above' or 'values_below' painting strategy constants. See: http://tda.thinkorswim.com/manual/metal/thinkscript/reference/Constants/PaintingStrategy/PaintingStrategy.VALUES _ABOVE.html
Another method has been used that plots a value and assigns an arrow to it with 'SetPaintingStrategy'. An example follows:
input spacer= 3;
plot arrowdn= if BarNumber() == SundayBar and SundayOpen < FridayClose then high+ticksize()*spacer else double.nan;
ArrowDn.SetPaintingStrategy(PaintingStrategy.Arrow_Down); ArrowDn.SetLineWeight(3); ArrowDn.SetDefaultColor(Color.Red);

## <a name="81"></a>B-SPECIFYING 'AVERAGETYPE' INPUT
[TOC Return](#toc)


input AverageType = {default Simple, Exponential, Weighted, Wilders, Hull};
To specify an individual selection use, as an example, AverageType == AverageType.Weighted Example:
input averageType1 = {default Simple, Exponential, Weighted, Wilders, Hull};
input length1 = 10;
def price = close;
plot MovAvg1 = MovingAverage(averageType1, price, length1);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 51

## <a name="82"></a>C-ORDER BASED ON DIFFERENCE OF 3 MOVING AVERAGES
[TOC Return](#toc)


#hint:Order based on value difference of three averages
input averageType1 = {default Simple, Exponential, Weighted, Wilders, Hull}; input averageType2 = {default Simple, Exponential, Weighted, Wilders, Hull}; input averageType3 = {default Simple, Exponential, Weighted, Wilders, Hull}; input length1 = 10;
input length2 = 46;
input length3 = 230;
input val_diff = .05;
def price = close;
plot MovAvg1 = MovingAverage(averageType1,price, length1);
plot MovAvg2 = MovingAverage(averageType2,price, length1);
plot MovAvg3 = MovingAverage(averageType3,price, length1);
plot condition = absValue(MovAvg1 - MovAvg2) <= val_diff AND absValue(MovAvg1 - MovAvg3) <= val_diff AND absValue(MovAvg2 - MovAvg3) <= val_diff;
condition.setPaintingStrategy(paintingStrategy.BOOLEAN_ARROW_UP); addOrder(OrderType.BUY_AUTO, condition);
addOrder(type = OrderType.SELL_TO_CLOSE,!condition);

## <a name="83"></a>C-DEFINING CONDITIONS IN BUY/SELL STRATEGY
[TOC Return](#toc)


#Defining conditions in buy/sell strategy def mcd = MACD();
def price = close;
def condition1 = mcd > mcd[1] AND average(price,20) > price; def condition2 = price < price[1] AND price[1]< price[2];
def condition3 = condition1 AND condition2;
def condition4 = !condition2 and !condition1;
addOrder(OrderType.BUY_AUTO, condition3); addOrder(OrderType.SELL_TO_CLOSE,condition4);

## <a name="84"></a>C- THE 'AdvanceDecline' STUDY
[TOC Return](#toc)


Comment: This is the built-in 'AdvanceDecline' study. It is duplicated here because it demonstrates so well the selection of various choices and because it is so popular for viewing the market conditions. There is a lot to learn by studying this script. Even the label coding is neat. The bottom label was added to the built-in for clarity.
declare lower;
input type = {default "Advance/Decline Line", "Advance/Decline Line (Breadth)", "Advance/Decline Line (Daily)", "Advance/Decline Ratio", "Advance/Decline Spread (Issues)", "Absolute Breadth Index"};
input exchange = {default NYSE, NASDAQ, AMEX};
def advances; def declines;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 52
 switch (exchange) { case NYSE:
advances = close("$ADVN");
declines = close("$DECN"); case NASDAQ:
advances = close("$ADVN/Q");
declines = close("$DECN/Q"); case AMEX:
advances = close("$ADVA");
declines = close("$DECA"); }
def advnDecl;
def level;
switch (type){
case "Advance/Decline Line":
advnDecl = advnDecl[1] + if !IsNaN(advances - declines) then advances - declines else 0;
level = 0;
case "Advance/Decline Line (Breadth)":
advnDecl = advances / (advances + declines);
level = 0.5;
case "Advance/Decline Line (Daily)":
advnDecl = (advances - declines) / (advances + declines);
level = 0;
case "Advance/Decline Ratio":
advnDecl = advances / declines;
level = 1;
case "Advance/Decline Spread (Issues)":
advnDecl = advances - declines;
level = 0;
case "Absolute Breadth Index":
advnDecl = AbsValue(advances - declines);
level = 0; }
plot AD = if !IsNaN(close) then advnDecl else Double.NaN; plot LevelLine = level;
AD.DefineColor("Up", Color.UPTICK);
AD.DefineColor("Down", Color.DOWNTICK);
AD.AssignValueColor(if advnDecl > advnDecl[1] then AD.color("Up") else AD.color("Down")); LevelLine.SetDefaultColor(GetColor(7));
AddLabel(type == type."Advance/Decline Ratio", (if advances > declines then round(advances / declines, 2) else round(- declines / advances, 2)) + ":1 Ratio");
AddLabel(yes, "Showing is the " + (if type == type."Advance/Decline Line" then "Advance/Decline Line"
else if type == type."Advance/Decline Line (Breadth)" then "Advance/Decline Line (Breadth)"
else if type == type."Advance/Decline Line (Daily)" then "Advance/Decline Line (Daily)"
else if type == type."Advance/Decline Ratio" then "Advance/Decline Ratio"
else if type == type."Advance/Decline Spread (Issues)" then "Advance/Decline Spread (Issues)" else if type == type."Absolute Breadth Index" then "Absolute Breadth Index"
else "") + " for the " +
TOS & THINKSCRIPT SNIPPET COLLECTION Page 53
(if exchange == exchange.NYSE then "NYSE"
else if exchange == exchange.NASDAQ then "NASDAQ"
else if exchange == exchange.AMEX then "AMEX"
else ""), color.white);
Comment: Each 'if...then...else' statement should be within parentheses to insure printing.

## <a name="85"></a>C-PLOT FOR ? DAYS FROM A DATE
[TOC Return](#toc)

```
#Hint: Plot for ? calendar (not trading) days from an inputted date\n This works only on a lower plot and <b>not for HA and EquiVolume charts.</b>
Input DaysToPlot = 20;  #hint DaysToPlot: the number of calendar days to plot.
Input Price = Close;
input BeginDate =20130810;  #hint BeginDate: The start date in YYYYMMDD format
plot Days = if DaysFromDate(BeginDate) >= 0 and DaysFromDate(BeginDate) <= DaysToPlot then Price else double.NaN; AddLabel(1, "If you do not see a plot, check if the chart timeframe cover the input date", Color.WHITE);
```

## <a name="86"></a>B-ALERTS TUTORIAL
[TOC Return](#toc)


There is a complete tutorial named Alerts Tutorial.PDF available at http://mytrade.com/StanL

## <a name="87"></a>B-MAKE A CUSTOM SCAN TUTORIAL
[TOC Return](#toc)


There is a complete tutorial named Make a custom scan,PDF available at http://mytrade.com/StanL

## <a name="88"></a>B-MAKE A DYNAMIC WATCHLIST TUTORIAL
[TOC Return](#toc)


There is a complete tutorial named Making a dynamic watchList,PDF available at http://mytrade.com/StanL
C-PLOT THE CURRENT PRICE ACROSS AN ENTIRE CHART TOC Return

## <a name="89"></a>C-% VOLUME CHANGE FROM THE PREVIOUS BAR
[TOC Return](#toc)

```
#hint:Shows the percentage volume change from the previous bar
declare lower;
input ShowBubble = No;#hint ShowBubble:Yes shows the over-reference-% bubble
input Ref_val = 25;#hint Ref_val:The reference percent
def Vol_Change =((volume / volume[1]) -1) * 100;
plot Ratio_vol = Vol_Change;
Ratio_vol.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
Ratio_vol.AssignValueColor(if Ratio_vol >= Ref_val then Color.green else if Ratio_vol < Ref_val and Ratio_vol > 0 then Color.Light_green else Color.Light_red);
Ratio_vol.SetLineWeight(5);
Ratio_vol.HideBubble();
```

#plots the current price across an entire chart..... a true snippet
 input price = close;
 plot price_across_chart = HighestAll(if !IsNaN(price) and IsNaN(price[-1]) then price else Double.NaN);
 #end

RefLine.SetDefaultColor(Color.Yellow);
 plot RefLine = Ref_val; RefLine.SetLineWeight(2);
AddChartBubble(ShowBubble && Vol_Change > Ref_val, Ratio_vol, round(Ratio_vol,0) + "%", Color.green); addLabel(1,"Shows the % change in volume compared to the previous bar", Color.pink);
addLabel(1,"Yellow line = " + Ref_val + "% reference line" , Color.yellow); addLabel(!ShowBubble,"%-value-bubbles available when above " + Ref_val + "% reference line", Color.white); addLabel(ShowBubble,"Bubble percent shown when above the " + Ref_val + "% reference line" , Color.Green);


##  C-INTRADAY CURRENT PRICE CLOUD ATOP DAY'S HIGHEST CLOUD
[TOC Return](#toc)


#Hint:For intraday values, plots the days highest cloud and overlays the current price cloud
declare lower;
input IntraDay = Yes;#Hint IntraDay:Yes for intraday only
input price = high;#hint Price:Pick the price option desired.\nHigh is the default.\nOpen_Interest and Imp_Volatility are not valid choices.
input Mkt_Start = 0930;#hint Mkt_Start:Show market start time e.g. 930 input Mkt_End = 1600;#hint Mkt_End:Show market end time e.g. 1600
def Past_Mkt_Start = If((SecondsTillTime(Mkt_Start) > 0), 0, 1);
def Past_Mkt_End = If((SecondsTillTime(Mkt_End) > 0), 0, 1);
def MktIsOpen = If(Past_Mkt_Start and !Past_Mkt_End, 1, 0); def day = GetDay();
def lastDay = GetLastDay();
def Today = If(day == lastDay, 1, 0);
def Show = If(IntraDay and Today, 1, If(!IntraDay, 1, 0));
def Bar1 = If (day[1] != day, day - 1, 0);
def HighestHigh = If(price > HighestHigh[1] and MktIsOpen, price, If(MktIsOpen and !Bar1, HighestHigh[1], price)); def LowestLow = If(price < LowestLow[1] and MktIsOpen, price, If(MktIsOpen and LowestLow[1] > 0 and !Bar1, LowestLow[1], price));
def Highest_High = If(MktIsOpen and Show, HighestHigh, Double.NaN);
def Lowest_Low = If(MktIsOpen and Show, LowestLow, Double.NaN);
plot HH_LL_Pct = ((Highest_High / Lowest_Low) - 1) * 100;
HH_LL_Pct.SetDefaultColor(Color.GREEN);
plot Lower = 0;
Lower.HideBubble();
Lower.HideTitle();
plot CurrentPrice = ((price / Lowest_Low) - 1) * 100;
AddCloud(HH_LL_Pct, CurrentPrice, Color.GREEN);
AddCloud(CurrentPrice, Lower, Color.WHITE);
AddLabel(1, "Green is HH cloud", Color.GREEN);
AddLabel(1, "Lower cloud is price choice", Color.VIOLET);
AddLabel(1, "Input price choice = " + (if price == close then "close"
else if price == open then "open"
else if price == high then "high"
else if price == low then "low"
else if price == hl2 then "hl2"
else if price == hlc3 then "hlc3"
else if price == IMP_VOLATILITY then "imp_volatility is not a valid choice"
else if price == ohlc4 then "ohlc4"
else if price == open_interest then "Open_interest is not a valid choice"

TOS & THINKSCRIPT SNIPPET COLLECTION Page 55
else if price == volume then "Volume" else if price == vwap then "VWAP" else "ERROR"), Color.WHITE);
### END
C-PLOT DUAL MOVING AVERAGES
[TOC Return](#toc)


#hint:<b>Moving Averages</b>\nShows the ??-DAY and a ???-DAY moving averages on your intraday and day charts. declare upper;
input price = close;#hint price:Select the price choice
input MA1_length = 50;#hint MA1_length:Input a MA1 length
input MA2_length = 200;#hint MA2_length:Input a MA2 length
Input ShowBubbles = yes;
def MovAvg50 = Average(close (period = "Day"), MA1_length);
plot MA50 = MovAvg50;
MA50.SetDefaultColor(Color.ORANGE);
AddChartBubble(Isnan(Close[-1]) && ShowBubbles, MovAvg50,(MA1_length + "-Day MA"), Color.YELLOW); def MovAvg200 = Average(close (period = "Day"), MA2_length);
plot MA200= MovAvg200;
MA200.SetDefaultColor(Color.DARK_ORANGE);
AddChartBubble(Isnan(Close[-1]) && ShowBubbles, MovAvg200, (MA2_length + "-Day MA"), Color.DARK_ORANGE); addLabel(1,"Mov Avg input price choice = " + (if price == close then "close"
else if price == open then "open"
else if price == high then "high"
else if price == low then "low"
else if price == hl2 then "hl2"
else if price == hlc3 then "hlc3"
else if price == imp_volatility then "imp_volatility"
else if price == ohlc4 then "ohlc4"
else if price == open_interest then "Open_interest"
else if price == volume then "Volume"
else if price == VWAP then "VWAP"
else "ERROR"),color.white);
## end
Comment: A more complex study that allows all five moving average types for all nine price choices is available but is too long (245 lines) for inclusion here. This is the abridged version using a simple moving average for the nine price choices.
C-SIMPLE MOVING AVERAGE CROSS TRADING
[TOC Return](#toc)


Comment: The effectiveness of this system has not been verified. It is included here for its presentation value. #BreakPointTrades.com Mechanical System
#Trade the crossovers on a 15 minute chart (daily buy/sell, exit on close system).
#SRS - 9/39 EMA
#SKF - 29/86 EMA (so change EMALength1 to 29, EMALength2 to 86 on a 5 min chart)
declare upper; input price = close; input displace = 0;
     input EMALength1 = 9;
TOS & THINKSCRIPT SNIPPET COLLECTION Page 56 input EMALength2 = 39;
plot upper = ExpAverage(data = price[-displace], length = EMALength1); upper.SetDefaultColor(Color.RED);
plot lower = ExpAverage(data = price[-displace], length = EMALength2); lower.SetDefaultColor(Color.BLUE);
AddCloud(upper,lower);
C-A VERSATILE ROBUST MOVING AVERAGE CROSS STUDY
[TOC Return](#toc)


#hint: <b>Find Moving Average Xover</b>\nFinds when a fast moving average crosses over or under a slow.\n The fast average going above the slow average (bullish crossover) is a signal to buy, while the opposite situation (bearish crossover) is a signal to sell.
input price = close;#hint price: The price used to calculate the crossover. <b>(Default is CLOSE)</b>
input fastLength = 3;#hint fastLength: The number of bars used to calculate the fast moving average. <b>(Default is 3)</b>
input slowLength = 8;#hint slowLength: The number of bars used to calculate the slow moving average. <b>(Default is 8)</b>
input slowAvgType = {default Simple, Exponential, Weighted, Wilders, Hull};#hint slowAvgType: Type of the fast moving average to be used for calculation. <b>(Default is Expontential)</b>
input fastAvgType = {default Simple, Exponential, Weighted, Wilders, Hull};#hint fastAvgType: Type of the fast moving average to be used for calculation. <b>(Default is Exponential)</b>
Input DoArrows = no;#hint DoArrows:Yes shows arrows to define crosses
Input DoPlots = yes;#hint DoPlots: Yes shows MA plots to define crosses. Default is 'YES'
Input DoAlerts = No;#hint DoAlerts:No turns off alerts
Assert( fastLength < slowLength, "fastLength ["+fastLength+"] must be less than slowLength["+slowLength+"]");
def fastAvg;
switch (slowAvgType) { case Simple:
fastAvg = Average(price, fastLength); case Exponential:
fastAvg = ExpAverage(price, fastLength); case Weighted:
fastAvg = wma(price, fastLength); case Wilders:
fastAvg = WildersAverage(price, fastLength); case Hull:
fastAvg = HullMovingAvg(price, fastLength); }
def slowAvg;
switch (fastAvgType) { case Simple:
slowAvg = Average(price, slowLength); case Exponential:
slowAvg = ExpAverage(price, slowLength); case Weighted:
slowAvg = wma(price, slowLength); case Wilders:

TOS & THINKSCRIPT SNIPPET COLLECTION Page 57
slowAvg = WildersAverage(price, slowLength); case Hull:
slowAvg = HullMovingAvg(price, slowLength); }
plot signalXup = If DoArrows Then crosses(fastAvg, slowAvg, CrossingDirection.above) else Double.nan; signalXup.SetDefaultColor(Color.pink); signalXup.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
signalXup.SetLineWeight(3);
plot signalXdn = If DoArrows Then crosses(fastAvg, slowAvg, CrossingDirection.below) else Double.nan; signalXdn.SetDefaultColor(Color.Green); signalXdn.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN); signalXdn.SetLineWeight(3);
Alert(signalXup && DoAlerts, "UP...Fast MA Cross Above Slow MA", Alert.BAR, Sound.Ring ); Alert(signalXdn && DoAlerts, "Down...Fast Ma Cross Below Slow MA", Alert.BAR, Sound.Bell ); Plot fast_Avg = If DoPlots then Fastavg else double.nan; fast_Avg.SetDefaultColor(Color.pink);
fast_Avg.SetPaintingStrategy(PaintingStrategy.line); fast_Avg.SetLineWeight(2);
Plot Slo_Avg = If DoPlots then Slowavg else double.nan; Slo_Avg.SetDefaultColor(Color.cyan); Slo_Avg.SetPaintingStrategy(PaintingStrategy.line); Slo_Avg.SetLineWeight(2);
AddCloud(fastAvg, slowAvg, color.green, color.red); AddLabel(1, "Fast MA(" + fastLength + ")",color.pink); AddLabel(1, "Slow MA(" + slowLength + ")",color.cyan); #end
C-AVOIDING FALSE SIGNALS
[TOC Return](#toc)


Situation: "I want to find the best time to enter and exit an order. EMA's are great but so many times a fast line will cross a slow line but then turn right around and un-cross. I want a way to keep from entering and exiting orders to often. It seems like whenever the fast EMA crosses the slow EMA AND a certain amount of time passes the combination of those 3 events signals a longer term trend. When I say "long" I mean like half a day for day trading"
Solution: Here's a study for you. The indicator stays 'red' after the Moving Averages cross. When it turns green you are in the safe zone. This is great for true mechanical systems to make sure you don't enter and exit on false signals.
input price = close;
input Shorter_Time = 10;
input Longer_Time = 21;
Def difference = average(data = price[1], length = Longer_Time) - average(data = price[1], length = Shorter_Time); plot timer = price[1];
timer.AssignValueColor(if difference < 0 then
Color.UPTICK
else
if difference >= 0 then
Color.DOWNTICK
else
GetColor(1)

);
TOS & THINKSCRIPT SNIPPET COLLECTION Page 58
 C-Using the SetHiding function
[TOC Return](#toc)


#hint:This illustrates the use of the SetHiding function. which controls visibility of a plot depending on a condition. If this condition is true, the plot is hidden; otherwise the plot is visible.
input offset = 1 ;# Used to position the plot this amount above the high
plot EachBar = if close < close[1] && close[1] < close[2] then high + offset else double.NaN; EachBar.SetPaintingStrategy(paintingStrategy.POINTS);
EachBar.SetDefaultColor(color.LIGHT_GREEN); EachBar.SetLineWeight(5);
EachBar.setHiding(if(close > reference SimpleMovingAvg(length = 21),1,0)); Plot MA = SimpleMovingAvg(length=21);
Comment: The above plots a light_green point (dot) whenever there are two consecutive lower closes. However, EachBar.setHiding... hides that point when it's condition is true i.e. the close > SimpleMovingAvg(21).
C-Moving Average Spectrum
[TOC Return](#toc)


#hint:<b>Moving Average Spectrum</b>\nPlots MAs (close) from lengths of 2 to 54 in increments of 2. Colors range from red/yellows, thru blues to magenta/pink respectively.\nSquashing of the colors indicate MAs are getting ready to cross and change direction.\n Consistent spacing of the lines indicate a pattern in place and maintaing the trend.
declare upper;
input L1 = 2;input L2 = 4;input L3 = 6;input L4 = 8;input L5 = 10;input L6 = 12;input L7 = 14;input L8 = 16;input L9 = 18; input L10 = 20;input L11 = 22;input L12 = 24;input L13 = 26;input L14 = 28;input L15 = 30;input L16 = 32;input L17 = 34; input L18 = 36;input L19 = 38;input L20 = 40;input L21 = 42;input L22 = 44;input L23 = 46;input L24 = 48;input L25 = 50; input L26 = 52;input L27 = 54;
plot A1 = Average(close, L1);plot A2 = Average(close, L2);plot A3 = Average(close, L3);plot A4 = Average(close, L4);
plot A5 = Average(close, L5);plot A6 = Average(close, L6);plot A7 = Average(close, L7);plot A8 = Average(close, L8);
plot A9 = Average(close, L9);plot A10 = Average(close, L10);plot A11 = Average(close, L11);plot A12 = Average(close, L12); plot A13 = Average(close, L13);plot A14 = Average(close, L14);plot A15 = Average(close, L15);
plot A16 = Average(close, L16);plot A17 = Average(close, L17);plot A18 = Average(close, L18);
plot A19 = Average(close, L19);plot A20 = Average(close, L20);plot A21 = Average(close, L21);
plot A22 = Average(close, L22);plot A23 = Average(close, L23);plot A24 = Average(close, L24);
plot A25 = Average(close, L25);plot A26 = Average(close, L26);plot A27 = Average(close, L27);
A1.SetDefaultColor(Color.RED);A2.SetDefaultColor(Color.RED);A3.SetDefaultColor(Color.RED); A4.SetDefaultColor(Color.ORANGE);A5.SetDefaultColor(Color.ORANGE);A6.SetDefaultColor(Color.ORANGE); A7.SetDefaultColor(Color.YELLOW);A8.SetDefaultColor(Color.YELLOW);A9.SetDefaultColor(Color.YELLOW); A10.SetDefaultColor(Color.GREEN);A11.SetDefaultColor(Color.GREEN);A12.SetDefaultColor(Color.GREEN); A13.SetDefaultColor(Color.CYAN);A14.SetDefaultColor(Color.CYAN);A15.SetDefaultColor(Color.CYAN); A16.SetDefaultColor(Color.PLUM);A17.SetDefaultColor(Color.PLUM);A18.SetDefaultColor(Color.PLUM); A19.SetDefaultColor(Color.Violet);A20.SetDefaultColor(Color.Violet);A21.SetDefaultColor(Color.Violet); A22.SetDefaultColor(Color.MAGENTA);A23.SetDefaultColor(Color.MAGENTA);A24.SetDefaultColor(Color.MAGENTA); A25.SetDefaultColor(Color.PINK);A26.SetDefaultColor(Color.PINK);A27.SetDefaultColor(Color.PINK);
## end
C-IMPLIED VOLATILITY LABEL AND PLOT
[TOC Return](#toc)



TOS & THINKSCRIPT SNIPPET COLLECTION Page 59
#hint: Implied Volatility label and plot
def Imp_Vol = imp_volatility(period = aggregationPeriod.DAY);
def impv = CompoundValue(1, if IsNaN(Imp_Vol) then impv[1] else Imp_Vol, Imp_Vol ); def value = impv;
#AddLabel(yes, "Implied Volatility = " + AsPercent(value));
plot x = value ;
C-INSIDE-BAR CODING
[TOC Return](#toc)


Comment: An inside bar is a frequent item of interest. Code related to such a bar is below: ##### Current bar is an inside Bar: Green if true #######
plot Data = if high <= high [1] and low >= low[1] then 1 else 0;
AssignBackgroundColor( if Data > 0 then Color.GREEN else Color.BLACK ); Data.assignValueColor(color.BLACK);
### Prior Bar was an inside bar and current bar's high broke above prior bar high:Green if true ### plot Data = if (high[1] <= high [2] and low[1] >= low[2]) and (high > high[1]) then 1 else 0; AssignBackgroundColor( if Data > 0 then Color.GREEN else Color.BLACK ); Data.assignValueColor(color.BLACK);
#### Prior Bar was an inside bar and current bar's low broke below prior bar's low:Red if true ##### plot Data = if (high[1] <= high [2] and low[1] >= low[2]) and (low < low[1]) then -1 else 0; AssignBackgroundColor( if Data < 0 then Color.RED else Color.BLACK ); Data.assignValueColor(color.BLACK);
### Prior Bar was an inside bar and current bar broke above or below: Green above/Red below ###
plot Data = if (high[1] <= high [2] and low[1] >= low[2]) and (high > high[1]) then 1 else if (high[1] <= high [2] and low[1] >= low[2]) and (low < low[1]) then -1 else 0;
AssignBackgroundColor( if Data > 0 then Color.GREEN else if Data < 0 then Color.RED else Color.BLACK ); Data.assignValueColor(color.BLACK);
### Another way to do it ###
def InUp = (high[1] <= high [2] and low[1] >= low[2]) and (high > high[1]);
def InDn = (high[1] <= high [2] and low[1] >= low[2]) and (low < low[1]);
plot Data = if InUp then 1 else if InDn then -1 else 0;
data.assignValueColor(color.BLACK);
assignBackgroundColor(if InUp then color.UPTICK else if InDn then color.DOWNTICK else color.BLACK);
####### bulld: here is another related one ... NR7 bar ####### def range = AbsValue(high - low);
def diff = (range < range[1] and range < range[2] and range < range[3] and range < range[4] and range < range[5] and range < range[6]);
plot disp = high + (1/5);
disp.setDefaultColor(Color.White);
disp.assignValueColor(if diff > 0 then Color.White else Color.BLACK); ### EOC ###
  C-IDENTIFYING AGGREGATION IN A LABEL

TOS & THINKSCRIPT SNIPPET COLLECTION Page 60
 TOC Return
#hint: Identifying aggregation in a label input Show_ChartPeriod = yes;
def AggPeriod = getAggregationPeriod(); AddLabel(Show_ChartPeriod,
if AggPeriod == AggregationPeriod.DAY
then "DAY"
else if AggPeriod == AggregationPeriod.WEEK
then "WEEK"
else if AggPeriod == AggregationPeriod.MONTH
then "MONTH"
else if Aggperiod < AggregationPeriod.DAY
then "<D"
else ">M", Color.RED );
#----End Of Code ----
C-FIRST AND LAST BAR FOR PLACING A BUBBLE
[TOC Return](#toc)


#hint:Selects the first and last bar for placing a bubble declare upper;
Input Offset = -10;
def LastBar = !IsNaN(open) and IsNaN(open [-1] ) ;
Def BubbleLocation = LastBar[Offset];
def barNum = barNumber();
def FirstBar = if barNum == 1 then 1 else 0;
AddLabel( yes, "Total bars = " + barNum, ), Color.pink );
addchartbubble(BubbleLocation , close, "Last Bar", color.white);
addchartbubble(FirstBar, close, "FirstBar", color.white);
Comment: HideBubble() Makes the last value bubble of a plot invisible. This is the bubble in the right margin and not on the chart itself.
C-DEFINE PREVIOUS DAY'S CLOSE
[TOC Return](#toc)


#Hint:Define Previous day's close
declare upper;
input price = FundamentalType.Close;
def barNum = if IsNaN( close ) then Double.NaN else barNumber(); def prevBarNum = HighestAll( barNum ) - 1;
def prevPrice = if barNum == prevBarNum then fundamental( price ) else Double.NaN;
plot PreviousPriceLine = HighestAll( prevPrice ); PreviousPriceLine.SetDefaultColor( CreateColor( 102, 102, 102 );
C-CLOUDS WITHOUT A PLOT
[TOC Return](#toc)


#hint:Creating a cloud without a plot
input CloudThicknessPercentage = 100;#Hint CloudThicknessPercentage:Percent of the cloud thickness to be plotted def CloudThickness = ((close[1] - close) / 100) * CloudThicknessPercentage;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 61
 def highh = close + CloudThickness;
def highl = close - CloudThickness; AddCloud(highh, highl, Color.RED, Color.GREEN);
C-COUNTS OF CONSECUTIVE RISES OR DROPS OF THE CLOSE
[TOC Return](#toc)


Comment: This is an excellent example of a simple recursive that counts #hint:Plots of counts of consecutive rises or drops of the close.
def count_CloseDrops =
if Close < close[1] then count_CloseDrops[1] +1 else 0;
plot close_going_down = count_CloseDrops ; close_going_down.SetPaintingStrategy(PaintingStrategy.line); close_going_down.SetLineWeight(1); close_going_down.SetDefaultColor(Color.red);
AddLabel(yes, "Count of consecutive drops of the CLOSE = " + Close_going_down ,color.red); ######### on the up side ###############
def count_CloseUps =
if Close > close[1] then count_CloseUps[1] +1 else 0;
plot close_going_up = count_CloseUps ; close_going_up.SetPaintingStrategy(PaintingStrategy.line); close_going_up.SetLineWeight(1); close_going_up.SetDefaultColor(Color.green);
AddLabel(yes, "Count of consecutive rises of the CLOSE = " + Close_going_up ,color.green); ########## Reference lines ############
Plot line2 = 2;
line2.SetDefaultColor(Color.light_gray);
Plot line4 = 4; line4.SetDefaultColor(Color.gray);
Plot line6 = 6; line6.SetDefaultColor(Color.light_gray); Plot line8 = 8; line8.SetDefaultColor(Color.gray);
Plot line10 = 10; line10.SetDefaultColor(Color.light_gray); Plot line12 = 12; line12.SetDefaultColor(Color.gray); ##eoc
B-COMPARISON TO ANOTHER INSTRUMENT
[TOC Return](#toc)


Comparison to another stock, index or any instrument having a symbol.
• Click 'studies' then 'Add Study' then 'Compare With'
• If none of the ready-made comparisons have what you want, then click 'Custom Symbol....'
• You will then be presented with the following dialog:

TOS & THINKSCRIPT SNIPPET COLLECTION Page 62
  If you have forgotten or are unsure of the symbol, you can find it easily as follows:
The comparison will be overlaid on the upper panel using the left-hand price scale. You can edit the study to change the symbol or the type of plot, i.e. Line, Bar, Candle, or the color. Choose any aggregation but 'day' is most meaningful.
B-THE FOLD FUNCTION EXPLAINED
[TOC Return](#toc)


The Fold syntax is: def <result> = fold <index> = <start> to <end> [ with <variable> [ = <init> ] ] [ while <condition> ] do <expression>;
Each component of the fold function will be explained separately. The function is not easy to use but understanding the purpose of the components will help you to feel comfortable with it.
General Comment:
• The fold function is used to define the value for a named variable i.e. def <result>. You cannot operate on other variables or do anything within the fold. Studies may be used within a fold.
• Rather than define a variable, the fold may be plotted directly i.e. def <result> = becomes Plot <result> =.
• Remember that the fold calculation is executed at every bar as ThinkScript processes from bar 1 to the last bar.
• As discussed in GetValue below, studies may be used in the Fold function especially in the do <expression>.
• The names assigned <index> and <variable> are persistent variables. Hence, if you have two folds in a study and
you assign 'idx' to <index> in the first fold you cannot assign 'idx' to <index> in the second fold. This will create
an error.
• Fold will normally work in a scan and custom columns. Complexity may become an issue especially if the servers are
loaded up.
fold
A fixed word that identifies the following as a 'Fold' function.
<index> = <start> to <end>
This defines how many times the fold calculation loops on each bar. You need to figure out how many times "fold" needs

TOS & THINKSCRIPT SNIPPET COLLECTION Page 63
to repeat itself, OR at what value it is going to stop churning away. Let's say you want a calculation to repeat 5 times. If the <start> is at 0 and the <end> is at 5, then the calculation will repeat 5 times. <start> is inclusive but <end> is exclusive. When the counter gets to 5, fold stops and there is no results related to loop 5. <index> can be any name you want but 'i' or 'index' is commonly used e.g. i = 0 to 50. The value of the index can be used in the do <expression>. When <index> is used in the do statement, the last value of <index> is used and not the current value. The current value would be <index> + 1.
[ with <variable> [ = <init> ] ]
First of all, anything within brackets is optional. So when/why would you include this.?The answer lies in that this is an internal variable that fold uses. So when is it needed? If the 'do' section of the fold performs a activity like 'add to', 'multiply by' or similar, it must have a previous number to 'add to' for example. This 'with <variable>' is the value that will be added to when you see code like 'do nice + idx3'. This means that 'nice' is the with <variable> that fold has been keeping tract of internally and '+ idx3' is the current loop's calculated value that is to be added to nice. 'nice + idx3' then becomes the new value of the internal variable nice and nice is available for the next loop's calculation. <variable> can be any name you want to assign. In this example, 'nice' was used.
[ = <init> ] is the initial value of the 'with <variable>' and is optional. If it is omitted, then the default value of 0 is used. <init> is a number. Since it is in brackets, it is optional if there is a with <variable>.
[ while <condition> ]
This defines a condition, upon violation of which, the loop (not the fold itself) is terminated when calculating the fold function and TOS procedes to the next bar. The fold will do some action but that action may be subject to certain conditions. This [ while <condition> ] defines conditions/ limitations that are imposed on the actions that follow. The conditions may qualify the do-actions results or they may define conditions that terminate any further loops at the current bar. Conditions here do not preclude the 'do' statements from having an 'if' statement that may also set conditions but those conditions are used in getting the desired result from the 'do' statement. A example would look like 'while close > 40'.
do <expression>
Defines an action to be performed, for each loop, when calculating the fold function. The do <expression> may be of numerous types. For example, if it is a true/false type then the fold results will be a true/false. Or it may be a arithmetic type like 'do nice * index' which multiplies fold's internal variable, nice, by the index value. Another example is 'do nice + getValue(close, n, length - 1)) / length'(a simple moving average) which gets a close value; divides it by a length variable; and adds it to the internal variable, nice. Or it may be a more complicated fold such as: fold i = 0 to 100 with price = Double.NaN while !IsNaN(price) do if getValue(high, -i) > 40 then getValue(high, -i) else Double.NaN; This finds the next high price value greater than 40 among the following 100 bars and terminates looping if price is no longer a number.
GetValue function
The syntax for GetValue is: GetValue(IDataHolder data, IDataHolder dynamic offset, int max offset);
A discussion of fold would not be complete without discussing the GetValue function. This function goes and gets data used in the do <expression>.
The third parameter, int max offset,is a fail stop value to prevent an endless loop in the scripting engine. Ideally it should be set to the maximum number that the dynamic index is expected to be. Set it too small and the script engine stops the loop before all index values are processed. Set it too high and you may unnecessarily be wasting server capacity. It would be OK to set it a little higher than you know is needed. If the script engine hits the stop value you'll get a run-time error message.
Note that int max offset is a fixed integer value, while IDataHolder dynamic offset is an expression that defines the offset value. The expression used for the IDataHolder dynamic offset often has a length parameter in it and that length parameter is also the value used for int max offset. Two very popular expressiona for IDataHolder dynamic offset are LookUpHighest(price,'look up price',length) and LookUpLowest(price,'look up price',length). The length in

TOS & THINKSCRIPT SNIPPET COLLECTION Page 64 these two studies is often the value that int max offset is set to.
Examples of do <expression>
The heart of the fold function is the 'do expression' which is crucial for success but is not naturally intuitive. A number of examples may be helpful.
Example 1 :
input n = 10;
plot factorial = fold index = 1 to n + 1 with Var = 1 do Var * index;
Calculates the factorial of a number. 10 loops are executed and each loop is multiplied by the value of the previous loop. The initial value for the start of the first loop is 1.
Example 2 :
input price = close;
input length = 9;
plot SMA = (fold n = 0 to length with Var_ma do Var_ma + getValue(price, n, length - 1)) / length;
Calculates the simple moving average using fold. 9 loops are run i.e. 0 thru 8 with the internal variable named Var_ma. Note the importance of the index starting with 0. The first value is getValue(price,n) or price[0] . If the index was to be 1 thru 10, the current value of price would not be included in the average because the first value would be price[1]. Example 3:
input length = 10;
def Test = fold index = 0 to length + 1 with nice = 0 do nice + index;
AddLabel(1,"Test = " + test, color.green);
This simple fold sums the 'index' values. The AddLabel enables you to change any variable and predict what the label will show. If not determine where your thinking went astray.
Example 4:
input length = 10;
def bigCount = compoundValue( 1, fold idx = 1 to length with a = 0 do a + bigCount[1], 1 );
This is interesting because it illustrates the concept of the fold and def being applied to every bar. The def causes each bar to hold the value of bigCount and the fold's 'do a + bigCount[1]' essentially causes each bar to be increased by a factor of 9 due to its looping. It is easy to see that the result will eventually reach infinity for a normal sized chart. It's not likely that you will ever use a def value in a do statement of a fold like this. This is known as a runaway calculation. Example 5:
input length = 10
def smlCount = compoundValue( 1, fold idx2 = 1 to length with b = 0 do if smlCount[1] >= 1000 and b >= 1000 then 1000 else b + smlCount[1], 1 );
This allows 'smlCount' to rise to 1000 and then it limits smlCount toa value of 1000.
Example6:
plot Test = fold i = 0 to 4 with x = 1 do x + i;
What is the value of test? If your answer was not 7, rethink it.
======================
If we change it to:
plot Test = fold i = 1 to 5 with x = 10 do x + i; What is its value?
If your answer was not 20, rethink it.
Example7:
input period = 20;#hint period:Number of bars to look in
def Hi = fold i = 0 to period with n = high do Max(n, GetValue(high, i, period - 1)); def Lo = fold k = 0 to period with m = low do Min(m, GetValue(low, k, period - 1)); AddLabel(1, "High in last " + period + " bars = " + Round(Hi,2), Color.GREEN); AddLabel(1, "Low in last " + period + " bars = " + Round(Lo,2), Color.GREEN); Labels allow you to look at the chart and verify the values.
Example8:
input length = 21;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 65
def SDr = StDev(r, length);
plot IVSwitch = ( fold i = 0 to length with count do count + if SDr[i] <= SDr then 1 else 0 ) / length;
This fold counts the number of times, in the last 20 bars, the SDr (std dev of the change ratio) has fallen below the SD. Example9:
declare lower;
input volTarget = 200000;
input length = 20;
plot atLeastVolumeTgt = fold idx = 0 to length + 1 with s = yes while s == yes do if GetValue( volume, idx, length + 2 ) > volTarget then yes else no;
#The above works as a study, omit the "declare lower;" if you want to use it directly in a scan or column.
#This code that will check for "daily" average volume greater than 200,000 in the last 20 days, meaning that the stock should have traded at least 200,000 shares every single day for at least the last 20 days. If it complies, 1 is plotted if not 0 is plotted. In a study, it is more meaningful to put the 1 or 0 result in an clarifying label.
C-DEFINE BAR AT A TIME AND DATE
[TOC Return](#toc)


###### Define Bar at a time and date ####### plot Data1 = volume;
declare hide_on_daily;
def barnumber = BarNumber();
input time = 1100;
Input TodayDate = 20130104;
def GetYMD = GetYYYYMMDD() == TodayDate; def timeTest = SecondsFromTime(time) == 0;
def BarID = CompoundValue(1, if timeTest && GetYMD then barnumber else Double.nan, barnumber()); #def BarIDNo = if(!isnan(BarID), Double.nan,barID);
AddLabel(yes, "BarNumber at arrow = " + BarID, color.white);#?????why this doesn't show BarID Plot Data2 = BarID;#The barnumber value Data2.setPaintingStrategy(PaintingStrategy.VALUES_below); # Arrow_Down, Arrow_Points, Data2.SetDefaultColor(Color.Green); # for data plot
Data2.SetLineWeight(5);
Plot Data3 = BarID;#An arrow at the selected barnumber Data3.setPaintingStrategy(PaintingStrategy.Arrow_down); # Arrow_Down, Arrow_Points, Data3.SetDefaultColor(Color.Green); # for data plot
Data3.SetLineWeight(5);
AddChartBubble( timeTest && GetYMD, Volume , BarID + " is the base \nbar for comparison", Color.white, no);#Bubble at the selected barnumber stating the barnumber
### end
C-PRE/POST-MARKET SCAN & CHART
[TOC Return](#toc)


by Mobius©
input Begin = 0930; input End = 1600;
def IsClosed = if SecondsFromTime(End) == 0 and SecondsTillTime(End) == 0

TOS & THINKSCRIPT SNIPPET COLLECTION Page 66 then close
else IsClosed [1];#If market IsClosed then IsClosed's value = close def data = if IsClosed > 0 then IsClosed else Double.NaN;
plot cond = close(priceType = "Mark") * 1.01 > IsClosed ;#Must use Mark in Pre/PostMarket #Above uses 1.01 to scan for close > 1%. Change for your % desired. ################
Mobius©: this is the corresponding chart study
input Begin = 0930; input End = 1600;
def Islosed = if SecondsFromTime(End) == 0 and SecondsTillTime(End) == 0
then close
else IsClosed[1];#If market IsClosed then IsClosed's value = close
plot data = if IsClosed > 0 then IsClosed else Double.NaN;#Data is the fixed line to add or subtract the percentage from for the crossing condition
data.SetPaintingStrategy(PaintingStrategy.Dashes);
# In the plot below change 1.01 (1%) to your desired %
plot cond = if close(priceType = "Mark") crosses above Data * 1.01 then low else Double.NaN; #Must use Mark in pre/postmarket
cond.SetPaintingStrategy(PaintingStrategy.Arrow_Up);
#Comment1: Pre-market scan and chart may be had by changing 'End' to 'Begin' in the above code
Comment2: To display pre and post- market chart displays, click the wrench to open 'Chart Settings' and then go to 'equities' and check 'Show Extended Session'

## S-NEW 52 WEEK HIGHS IN THE PAST ? DAYS
[TOC Return](#toc)


Scan for equities that have made new 52 week highs in the past 5 days.
```
input lookback = 5; # past N days
def hhy = Highest( high, 252 );
plot h = Highest( high, lookback ) == hhy;
```

## C-ORDER BASED ON VALUE DIFFERENCE OF THREE AVERAGES
[TOC Return](#toc)

```
#hint:Order based on value difference of three averages
input averageType1 = {default Simple, Exponential, Weighted, Wilders, Hull}; input averageType2 = {default Simple, Exponential, Weighted, Wilders, Hull}; input averageType3 = {default Simple, Exponential, Weighted, Wilders, Hull}; input length1 = 10;
input length2 = 46;
input length3 = 230;
input val_diff = .05;
def price = close;
plot MovAvg1 = MovingAverage(averageType1,price, length1);
plot MovAvg2 = MovingAverage(averageType2,price, length1);
plot MovAvg3 = MovingAverage(averageType3,price, length1);

plot condition = absValue(MovAvg1 - MovAvg2) <= val_diff AND absValue(MovAvg1 - MovAvg3) <= val_diff AND
absValue(MovAvg2 - MovAvg3) <= val_diff; condition.setPaintingStrategy(paintingStrategy.BOOLEAN_ARROW_UP);
addOrder(OrderType.BUY_AUTO, condition); addOrder(type = OrderType.SELL_TO_CLOSE,!condition);
```

## C-DEFINES AGGREGATION IN A LABEL
[TOC Return](#toc)

```
#hint:Defines the aggregation in a label
def AggPeriod = getAggregationPeriod(); AddLabel(yes,concat("Aggregation Period = ",
if AggPeriod == AggregationPeriod.min then "1 MIN"
else if AggPeriod == AggregationPeriod.Two_Min then "2 MINS"
else if AggPeriod == AggregationPeriod.Three_min then "3 MINS"
else if AggPeriod == AggregationPeriod.Four_Min then "4 MINS"
else if AggPeriod == AggregationPeriod.Five_min then "5 MINS"
else if AggPeriod == AggregationPeriod.ten_min then "10 MINS"
else if AggPeriod == AggregationPeriod.fifteen_min then "15 MINS"
else if AggPeriod == AggregationPeriod.Twenty_min then "20 MINS"
else if AggPeriod == AggregationPeriod.Thirty_min then "30 MINS"
else if AggPeriod == AggregationPeriod.hour then "1 HOUR"
else if AggPeriod == AggregationPeriod.TWO_Hours then "2 HOURS"
else if AggPeriod == AggregationPeriod.Four_hours then "4 HOURS"
else if AggPeriod == AggregationPeriod.DAY then "DAY"
else if AggPeriod == AggregationPeriod.two_DAYs then "2 DAYS"
else if AggPeriod == AggregationPeriod.three_DAYs then "3 DAYS"
else if AggPeriod == AggregationPeriod.four_DAYs then "4 DAYS"
else if AggPeriod == AggregationPeriod.week then "WEEK"
else if AggPeriod == AggregationPeriod.MONTH then "MONTH"
else "Use time charts only"),
  Color.cyan);
AddLabel(yes,"Not for TICK or RANGE bar usage",color.red);
# end
```

## C-FIRST AND LAST BAR BUBBLES
[TOC Return](#toc)


declare upper;
Input Offset = -10;
def LastBar = !IsNaN(open) and IsNaN(open [-1] ) ; Def BubbleLocation = LastBar[Offset];
def barNum = barNumber();
def FirstBar = if barNum == 1 then 1 else 0;
AddLabel( yes, "Total bars = " + barNum, ), Color.pink );
addchartbubble(BubbleLocation , close, "Last Bar", color.white);
addchartbubble(FirstBar, close, "FirstBar", color.white);
Comment HideBubble() Makes the last value bubble of a plot invisible. This is the bubble in the right margin and not on the chart itself.
C- WEIGHTED MOVING AVERAGE AND FOLD USAGE
[TOC Return](#toc)


# Weighted Moving Average by Mobius input price = close;
input length = 21;
plot WMA = (fold n = 0 to length with s
do s + getValue(price, n, length - 1) + (fold i = 0 to length
with t
do t + getValue((1/price[1]), i, length - 1)))
/ length; ##end
Comment: A good example of a nested fold. Note that the variable designations (n, s, i and t) cannot be duplicated in the folds.
T-A REFERENCE RECALL OF A STRATEGY'S RULES (SETUP)
[TOC Return](#toc)


A 'setup' is a term/title applied to a group of charts and indicators that are used to implement a trading strategy. For example, there is a 9/30 setup that is openly discussed on the internet. Also an esteemed TS coder has written the '3X oscillator' for use specifically with the 9/30 setup.
Setups frequently have rules re what needs to exist to implement its buy/sell strategy. Such rules may be simple or complex but, regardless, are not easy to remember. This tip is to use TOS 'ThinkLog' to store those rules for easy reference. ThinkLog is accessed via the 'Tools/ThinkLog' tab and is a ready reference place where you could refresh you memory on the implementation details of the 9/30 strategy's particulars.
T-FAST ACCESS TO EDITING A STUDY
[TOC Return](#toc)


The fastest way to edit a study is to double click on the plot on the chart. However, at times, clicking the right location can take many tries. This is where study highlighting can come in handy for finding the right place and time to double- click. Here is where highlighting hoovering is set:

TOS & THINKSCRIPT SNIPPET COLLECTION Page 69
  T-A NEW-TO-THINKSCRIPT MUST READ
[TOC Return](#toc)


TOS has many valuable resources that may, for some, be hard to keep track of. This is a reminder of an especially valuable resource for new learners of ThinkScript as well as a refresher for you 'pros' out there. The Learning Center's 'charting/ThinkScript' ( Click here to see it ) is a must read for all newcomers to ThinkScript. Although this has three sections the 'ThinkScript Tutorials' are especially pertinent.
T-USING MULTIPLE TIME FRAMES TO PLAN ENTRIES
[TOC Return](#toc)


Using multiple time frames to plan entries is smart ( See Article ). To facilitate implementing a multiple-time-frame approach consider establishing a named grid with each grid component having the charts and indicators at the time frames that you are interested in. You can navigate from one grid-box to another with a single click of the grid navigation buttons. Giving the grid a name allows you to call it up whenever you want. A 'flexible grid' would be ideal for such a purpose.
T-WIZARD ACCESS FOR EDITING EXISTING STUDIES
[TOC Return](#toc)


When editing existing studies and you want to use the wizard, you have two choices: 1. Open a new study. Copy the wizard result via CTRL-C and then 'CANCEL' the new study; or 2. Use the wizard in the 'scan/stock hacker' and copy the wizard result via CTRL-C for pasting into the existing study editing.
T-PRE MARKET MOVERS
[TOC Return](#toc)


Pre market scans are not very efficient. TOS provides a good source for pre-market movers that is accessed in the left panel by: (1) Click the + at the bottom of the left panel; (2) click 'Use The News'; and (3) Select Pre-Market Movers. Note that the columns can be customized and adding a 'Send to [4] Green', for example, gives a quick chart of the stock.
B-THE STOCHASTIC OSCILLATOR EXPLAINED
[TOC Return](#toc)


Comment 1: The stochastics indicator can be confusing because it is referred to as: 1. Fast Stochastics; 2. Slow Stochastics; or 3. Full Stochastics. This video gives a clear explanation of the differences between the three in Part 1 and usage in Part 2. See video (2 parts)
Comment 2: While at this site check out the other indicator tutorials that may interest you. View indicator tutorial list

TOS & THINKSCRIPT SNIPPET COLLECTION Page 70 C-COUNTER FOR NUMBER OF UP BARS
[TOC Return](#toc)


#hint:<b> Counts the number of bars where close > open. </b>\n Yes/No options to show a summary label, count numbers and bar numbers.
input ShowBarNumb = No;#hint ShowBarNumb: Yes show the bar numbers below the low.
input ShowCountNos = yes;#hint ShowCountNos:Yes show the count of when close > open. It shows above the high.
input ShowLabel = yes;#hint ShowLabel:yes shows a summary label of the percent of bars that are up.
Def counter_AnyDay = CompoundValue (1,if close > open then counter_AnyDay[1] + 1 else counter_AnyDay[1],1); plot count = if close > open && ShowCountNos then counter_AnyDay else double.nan; Count.SetPaintingStrategy(PaintingStrategy.VALUES_ABOVE);
### below 2 lines convert to a line plot ###
#Count.SetPaintingStrategy(PaintingStrategy.line); #Count.SetStyle(Curve.firm);
def BarNum = Barnumber();
plot Bar_Nos = if ShowBarNumb then BarNum else Double.NaN; Bar_Nos.SetPaintingStrategy(PaintingStrategy.VALUES_BELOW);
Addlabel(ShowLabel, counter_AnyDay + " bars (" + (AsPercent(round(counter_AnyDay / barnumber(),2))) + ") out of a total of " + Barnumber() + " bars have close > open",color.cyan);
#end
Comment: This counter can be easily converted to counting whatever you want. For example, if you want to count the number of days that have risen 1%, you would substitute the term 'close > open' with '(close/close[1] > 1.01) '. Naturally the aggregation is set to what you want to count like days, hours, 15 min bars, etc. The below code illustrates how this existing code can be taken and easily modified into another study. Compare the two.
C-COUNT OF CLOSE RISEN BY AN INPUTTED PERCENT
[TOC Return](#toc)


#hint:<b> Counts the number of bars where close has risen an inputted percent. </b>\n Yes/No options for label, count numbers and bar numbers.
input ShowBarNumb = No;#hint ShowBarNumb: Yes show the bar numbers below the low.
input ShowCountNos = yes;#hint ShowCountNos:Yes show the count of occurences. It shows above the high.
input ShowLabel = yes;#hint ShowLabel:Yes shows a summary label of the percent of bars that are up by the inputted percentage.
input PctUp = 0.5; #hint PctUp:<b>Show the percent rise desired</b>\nA stock infrequently rises more than 2% in a day. def PctFactor = 1 + (PctUp /100);
Def counter_AnyDay =if close !=first(close) && (close/close[1] > PctFactor) then counter_AnyDay[1] + 1 else counter_AnyDay[1];
#Def counter_AnyDay = CompoundValue (1,if (close/close[1] > PctFactor) then counter_AnyDay[1] + 1 else counter_AnyDay[1],1);
plot count = if (close/close[1] > PctFactor) && ShowCountNos then counter_AnyDay else double.nan; Count.SetPaintingStrategy(PaintingStrategy.VALUES_ABOVE);
### below 2 lines convert to a line plot in lieu of showing values ### #Count.SetPaintingStrategy(PaintingStrategy.line);
#Count.SetStyle(Curve.firm);
def BarNum = Barnumber();
plot Bar_Nos = if ShowBarNumb then BarNum else Double.NaN; Bar_Nos.SetPaintingStrategy(PaintingStrategy.VALUES_BELOW);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 71
Addlabel(ShowLabel, counter_AnyDay + " bars (" + (AsPercent(round(counter_AnyDay / barnumber(),2))) + ") out of a total of " + Barnumber() + " bars have (close/close[1] > " + PctUp + "%",color.cyan);
addlabel(ShowLabel,"PctUp = " + PctUp + "%", color.pink);
#end
Comment: The label is complex and a good example of the use of '+' in lieu of the concat function.


C-PLOTS THE HIGH, LOW AND CLOSE OF ? DAYS AGO
[TOC Return](#toc)

```
#hint:<b>Plots the high, low and close of inputted days ago</b>\n The plots persist across the entire chart.\n Bubbles identify the plots.\nWorks for all aggregations thru 'Day'.
declare upper;
input LastBubble = No;#hint LastBubble: No omits the last bubble. May affect reading of data. Input DaysAgo = 1;#hint DaysAgo: Excludes today
def AdjDaysAgo = DaysAgo + 1;#Adjusted to match a true LastDate which includes today def day = GetDay();
def lastDay = GetLastDay();
def year = GetYear();
def lastYear = GetLastYear();
def yyyymmdd = GetYYYYMMDD();
def lastDate = HighestAll( if day == lastDay and year == lastYear
then yyyymmdd else Double.NaN );
def currentDate = if yyyymmdd < lastDate then yyyymmdd else lastDate;
def previousDay = if CountTradingDays( currentDate, lastDate ) == AdjDaysAgo then yes else no;
plot PreviousHigh = HighestAll( if previousDay then high( period = "DAY" ) else Double.NaN );
plot PreviousLow = HighestAll( if previousDay then low( period = "DAY" ) else Double.NaN );
Plot PreviousClose = HighestAll( if previousDay then close( period = "DAY" ) else double.NaN);

#================ Look & Feel ==============
PreviousHigh.SetDefaultColor( Color.green );
PreviousHigh.SetLineWeight( 2 );
PreviousHigh.HideBubble();
PreviousLow.SetDefaultColor( Color.red); PreviousLow.SetLineWeight( 2 ); PreviousLow.HideBubble();
PreviousClose.SetDefaultColor( Color.Yellow ); PreviousClose.SetLineWeight( 2 ); PreviousClose.HideBubble();

#=========== ID Bubbles ===================
Def barnum = barnumber();
def FirstBar = if barNum == 1 then 1 else 0;
addchartbubble(FirstBar, PreviousHigh, ("High of " + DaysAgo + " day(s) ago"), color.white); addchartbubble(FirstBar, PreviousLow, ("Low of " + DaysAgo + " day(s) ago"), color.white); addchartbubble(FirstBar, PreviousClose, ("Close of " + DaysAgo + " day(s) ago"), color.white);

#========= Last ID bubbles ==========
Input Offset = -10;
def LastBar = !IsNaN(open) and IsNaN(open [-1] ) ;
Def BubbleLocation = LastBar[Offset];
addchartbubble(BubbleLocation && LastBubble, PreviousHigh, ("High of " + DaysAgo + " day(s) ago"), color.white); addchartbubble(BubbleLocation && LastBubble,PreviousLow, ("Low of " + DaysAgo + " day(s) ago"), color.white); addchartbubble(BubbleLocation && LastBubble, PreviousClose, ("Close of " + DaysAgo + " day(s) ago"), color.white);
#### EOC ####
```
Comment: The presence of 'HighestAll' in the plot statements causes to plots to persist across the entire chart. Otherwise, the plot will be for the single day defined.
B-ACCESSING THE CONDITION WIZARD
[TOC Return](#toc)


The wizard, short for 'Condition Wizard', is a valuable and beneficial tool. This item is here to insure that it is clear about how to access the wizard. The wizard is auto accessible when coding new studies. Editing existing studies does not have the wizard accessible but the wizard in the following picture can be used and the wizard result can be copied for pasting in the existing study editing.
In the above 'Scan/StockHacker' tab, all fundamental filters have been deleted using 'red-circled-X'. To re-establish, click 'Add Fundamental Filter'. Only a 'Study Filter' is showing now.
C-DATE AND TIME USAGE EXAMPLES
[TOC Return](#toc)


======= Introduction and overview =======
The date and time functions take a lot of time to learn and much usage to feel comfortable with them. Hence, this section will be as thorough as possible with many examples to illustrate their usage. Additional examples will be added as they may surface online and in the chatroom.
• GetDay, GetWeek, GetMonth and GetYear all relate to the CURRENT BAR and return values that relate to the ENTIRE YEAR: i.e. 1 to 366, 1 to 53, 1 to 12, and the year respectively.
• GetLastDay, GetLastWeek, GetLastMonth and GetLastYear all relate to the LAST BAR and return values that relate to the ENTIRE YEAR: i.e. 1 to 366, 1 to 53, 1 to 12, and the year respectively.
• GetYYYYMMDD() is the most frequently used. Returns the date of the current bar in the YYYYMMDD format. This date corresponds to the day whose trading session contains the current bar. Note that on intraday charts, this date and the actual date might not be the same for Forex and Futures symbols.
• GetDayofWeek, GetDayofMonth, RegularTradingEnd and RegularTradingStart all utilize a yyyyMmDd input parameter format:The same output format as GetYYYYMMDD().
• The 'fromDate', 'toDate'and 'tillDate' used in CountTradingDays, DaysFromDate and DaysTillDate are all in the YYYYMMDD format.
• In summary, all date/time functions beginning with 'Get........', except for GetDayOfWeek and GetDayOfMonth, have no parameters. All date/time functions having parameters, except for 'SecondsFromTime' and 'SecondsTillTime', use a parameter format of YYYYMMDD. 'SecondsFromTime' and 'SecondsTillTime' use a HHMM format.
• REMEMBER THAT DATE/TIME FUNCTIONS RELATE TO A BAR ON A CHART. NO BAR THEN THE DATE/TIME RETURNED VALUES ARE NOT RELIABLE.

TOS & THINKSCRIPT SNIPPET COLLECTION Page 73
 ========= Define previous day =========
def previousDay = if CountTradingDays(CurrentDate, LastDate ) == 2 then
yes else no;
Comment 1: The '==2' may be changed to represent any previous days-ago
Comment 2: CountTradingDays includes the CurrentDate and the LastDate in the count
======== Between two input dates =========
#hint: Between the two input dates
#hint startDateYyyyMmDd: Select starting date of line.
#hint endDateYyyyMmDd: Select ending date of line.
input startDateYyyyMmDd = 20100720;
input endDateYyyyMmDd = 20100916;
def start = if getYyyyMmDd()==startDateYyyyMmDd then 1 else 0;
def end = if getYyyyMmDd()==endDateYyyyMmDd then 1 else 0;
Usage: The above two line are conditions that you use to restrict your data
Example: plot trendLine = if start then startPrice else if end then endPrice else double.nan;
========== Return 'the day-of-the-week' of the first bar of the chart =========
Def DayOfWeek = GetDayOfWeek(First(yyyymmdd)); #Mon =1, Tues =2, Wed = 3, Thurs = 4, Fri = 5, Sat = 6, Sun = 7
[TOC Return](#toc)


============ Define a time range (beginning and end) ==============
Comment 1: 'SecondsFromTime' and 'Seconds TillTime' work smoothly during market hours but beware after-hours.
A time is always associated with a bar. If there is no bar, TOS will have a problem
Comment 2: Thinly trader stocks may not have a bar at the time defined. Beware for the same reason as above.
Example 1: ======== SecondsFromTime ========
#Hint: his defines a time range during which the close will be plotted.
input OpenTime = 1130;
input DurationHours = 5;
def durationSec = DurationHours * 60 * 60;
def secondsPassed = SecondsFromTime(OpenTime);
plot Price = if secondsPassed >= 0 and secondsPassed <= durationSec then close else double.NaN;
Comment 3: "if secondsPassed >= 0 and secondsPassed <= durationSec then....." may be applied to any activity you want to do.
Example 2: ======== SecondsFromTime & SecondsTillTime ========
# Defines the hours from last bar till end-of-day (midnight) on an intra-day chart
input time = 0001;# Is midnight which is the start of counting seconds in the functions below.
def TimeFrom = SecondsFromTime(time);# Returns the seconds from 'time'. If not an intra-day chart, returns 0. def TimeLeft = SecondsTillTime(time);# Returns the seconds till input 'time'. If not an intra-day chart, returns 0. AddLabel(1, "Time from last bar till end-of-day (midnight) = " +(Round( (24 + (TimeLeft / 3600)),1)) + "
Hours",color.white);
[TOC Return](#toc)


======== GetYYYYMMDD() & its formatting ===========
Returns the date of the current bar. If there is no bar on a chart, like in pre and after-market hours or weekends and holidays, then results, including label values, from the date/time functions are not reliable.
A typical GetYYYYMMDD() result date is 20,131,107. This result doesn't look like a date especially with the commas but it is.
When GetYYYYMMDD() is compared to an inputted date the commas are omitted in the input date. An example is 'input endDate = 20100101;'
Functions that use GetYYYYMMDD() as a parameter are:

TOS & THINKSCRIPT SNIPPET COLLECTION Page 74
• GetDayOfWeek(int yyyyMmDd);#Returns the day of week from 1 (Monday) to 7 (Sunday).
• GetDayOfMonth(int yyyyMmDd);#Returns number of the day in the month.
• RegularTradingEnd(int yyyyMmDd);#Returns the end of the regular trading hours for the current symbol on the
trading day specified in the YYYYMMDD. This value is the number of milliseconds since the epoch (January 1,
1970, 00:00:00 GMT).
• RegularTradingStart(int yyyyMmDd);Returns the start of the regular trading hours for the current symbol on
the trading day specified in the YYYYDDMM format. This value is the number of milliseconds since the epoch
(January 1, 1970, 00:00:00 GMT).
Usage example 1:
def yyyymmdd = GetYYYYMMDD();#Returns the date of the chart's current bar. During trading hours this is also today's date. If run on a weekend, this is not today's date since there is no current bar for today.
Assuming that 20,131,107 was returned it can be formatted into a normal view as follows: AddLabel(yes,"Converted getYyyyMmDd() = " + getMonth() +
"/" + getDayOfMonth(getYyyyMmDd()) + "/" + AsPrice(getYear()) ,color.pink); This label produces
[TOC Return](#toc)


Usage example 2:
def yyyymmdd = GetYYYYMMDD();# The date of the chart's current(last) bard DaysFromDate(First(yyyymmdd));# This defines the number of days from the first bar of the chart to the last bar (current bar).
GetDayOfWeek(First(yyyymmdd));# Returns the day-of-week (mon to sun = 1 yo 7) of the charts first bar.
Usage example 3:
input anchor_date = 20111004;
def start = if getYyyyMmDd() == anchor_date then 1 else 0;# If at the anchor date, start is true.
def startprice = if start then close else startprice[1];# Gets the close at the 'start' date def gain = close - startprice;# defines the gain from the start price at the start date
======= DaysFromDate( ) & GetYYYYMMDD() =======
Returns the number of days from the specified date in YYYYMMDD format.
Usage example 1:
input anchor_date = 20111004;
def num_days = DaysFromDate(anchor_date);
def gain = close - close[num_days];
Usage example 2:
#hint Plots the close for 50 days from the 'BeginDate'
input BeginDate = 20090101;
plot Price = if DaysFromDate(BeginDate) >= 0 and DaysFromDate(BeginDate) <= 50 then close else double.NaN;
Usage example 3:
# Hint: In the script below, "count" counts calendar days, while "count2" counts trading days, between the startDate and today.
declare lower;
input startDate = 20130201;
plot count = if startDate <= GetYYYYMMDD() then DaysFromDate( startDate ) else Double.NaN;
plot count2 = if startDate <= GetYYYYMMDD() then CountTradingDays( startDate, if( GetYYYYMMDD() < startDate, startDate, GetYYYYMMDD() ) ) else Double.NaN;
Usage example 4:
#Stock scan for all stocks down 25% (from example) from the Highest over the last ?? months
#Enter numMonths and PctDown

TOS & THINKSCRIPT SNIPPET COLLECTION Page 75
input numMonths = 6; #Months to be scanned input daysInMonth = 21; # average std.
input price = close;
input PctDown = 25; #percent below highestHigh
Def TotalDays = numMonths * daysInMonth;
Def PriceTrue = if close <= ((1 - PctDown/100) * Highest(Price,TotalDays)) then 1 else 0;
Plot AllTrue = if PriceTrue then 1 else 0;
###### Alternate ######
#Def TimeTrue = if 0 < daysFromDate(20120101) and daysFromDate(20120101) < 160 then 1 else 0; #Plot AllTrue = if PriceTrue and TimeTrue then 1 else 0;
======== SecondsFromTime() & SecondsTillTime() & others ========
Returns the number of seconds from/till the specified time (24-hour clock notation) in the EST timezone. For intra-day only.
Usage example 1:
Scan for PreMarket that shows stocks > 1% from Bid above Close last nite? After-hours must be activated in settings. input Begin = 0930;
input End = 1600;
def IsClosed = if SecondsFromTime(End) == 0 and
SecondsTillTime(End) == 0 then close
else IsClosed [1];
def data = if IsClosed > 0 then IsClosed else Double.NaN;
plot cond = close(priceType = "Mark") * 1.01 > IsClosed ;#Must use Mark in Pre/PostMarket
[TOC Return](#toc)


Usage example 2:
#hint: Used in opening range studies to define that market is open. input OpenTime = 0930;
input CloseTime = 1600;
      def secondsFromOpen def secondsTillClose def marketOpen Usage example 3:
= SecondsFromTime( OpenTime );
= SecondsTillTime( CloseTime );
= secondsFromOpen >= 0 and secondsTillClose >= 0;
 # Defines properties for showing vertical lines input ShowLines = Yes;
input ShowTodayOnly = Yes;
def day = getDay();
def last = getLastDay();
def Today = if(day==last,1,0);
def Show = if(ShowTodayOnly and Today, 1,if(!ShowTodayOnly,1,0));
input LowerMiddayBound = 1130;
input UpperMiddayBound = 1330;
def Lines = if((between(secondsFromTime(LowerMiddayBound), 1, 300)), 1, if((between(secondsFromTime(UpperMiddayBound), 1, 300)), 1, 0));
AddVerticalLine(Show and ShowLines and Lines,"", Color.RED);
Usage example 4:
#hint: Used to define if OR (Opening Range) is active.
def ORBegin = 955;
def OREnd = 1005;
Def ORActive = if secondstilltime(OREnd) > 0 AND secondsfromtime(ORBegin) >= 0 then 1 else 0;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 76
 Usage example 5:
#hint: Used to define whether market is open
input marketOpenTime = 0930;
input marketCloseTime = 1615;
def closeByPeriod = close(period = "DAY")[-1];
def openbyperiod = open(period = "DAY")[-1];
def secondsFromOpen = secondsFromTime(marketOpenTime);
def secondsTillClose = secondsTillTime(marketCloseTime);
def marketOpen = if secondsFromOpen >= 0 and secondsTillClose > 0 then yes else no; def newDay = if !IsNaN(closeByPeriod) then 0 else 1;
Usage example 6:
#hint:Add Vertical Line
def NineThirty = secondsFromTime(930) > 0;
def TwelveOclock = secondsFromTime(1200) > 0;
def MarketOpen = NineThirty > 0 && NineThirty [1] <= 0;
def LunchTime = TwelveOclock > 0 && TwelveOclock[1] <= 0;
AddVerticalLine(MarketOpen or LunchTime,if MarketOpen then "TIME TO TRADE!" else "LUNCH TIME",if MarketOpen then color.GREEN else color.BLUE);
Usage example 7:
#Hint: Identifies a bar at a time and date
plot Data1 = volume;
declare hide_on_daily;
def barnumber = BarNumber();
input time = 1100;
Input TodayDate = 20130104;
def GetYMD = GetYYYYMMDD() == TodayDate;
def timeTest = SecondsFromTime(time) == 0;
def BarID = CompoundValue(1, if timeTest && GetYMD then barnumber else Double.nan, barnumber()); #def BarIDNo = if(!isnan(BarID), Double.nan,barID);
AddLabel(yes, "BarNumber at arrow = " + BarID, color.white);#?????why this doesn't show BarID Plot Data2 = BarID;#The barnumber value Data2.setPaintingStrategy(PaintingStrategy.VALUES_below); # Arrow_Down, Arrow_Points, Data2.SetDefaultColor(Color.Green); # for data plot
Data2.SetLineWeight(5);
Plot Data3 = BarID;#An arrow at the selected barnumber
Data3.setPaintingStrategy(PaintingStrategy.Arrow_down); # Arrow_Down, Arrow_Points, Data3.SetDefaultColor(Color.Green); # for data plot
Data3.SetLineWeight(5);
AddChartBubble( timeTest && GetYMD, Volume , BarID + " is the base \nbar for comparison", Color.white, no);#Bubble at the selected barnumber stating the barnumber
#AddLabel(yes, Concat("GetYYYYMMDD() = ", GetYYYYMMDD()));
#end TOC Return
======= CountTradingDays & YearStart ========
#Counts the number of trading days from first of the year to current day.
def YearStart = GetYear() * 10000 + 101;#This defines January 1 of the current year. Good to keep handy. AddLabel(yes, CountTradingDays(yearstart, GetYYYYMMDD()) + " trading days since year start")
======= DaysTillDate & GetLastDay & GetYear & GetYYYYMMDD() ========
Usage example 1:
declare lower;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 77
input DaysToInclude = 90;
def Last90Days = daysTillDate(getYyyyMmDd()[-DaysToInclude]) < 0;
plot Data = Last90Days;
Comment: Above plots a horizontal line at a value of 1 (true)for 90 days. The following code will plot the close for 90 days.
Plot data2 = If Last90Days then close else double.nan;
Usage example 2:
#Hint: Plots a horizontal line at yesterday's low across the entire chart.This works if you have at least two days data on the chart.
declare upper;
def lastDaysDate = HighestAll( if getLastDay() == getDay() and getLastYear() == getYear() then getYyyyMmDd() else Double.NaN );
def lastDaysLow = if daysTillDate( lastDaysDate ) == 1 then Low( period = "DAY" ) else Double.NaN;
plot yesterdaysClose = HighestAll( lastDaysLow );
[TOC Return](#toc)


======= DaysFromDate & GetYyyyMmDd() & getDayOfWeek ========
Usage example 1:
#hint: Plots the close for bars in the 50 days interval starting from BeginDate input BeginDate = 20130101;
plot Price = if DaysFromDate(BeginDate) >= 0 and DaysFromDate(BeginDate) <= 50 then close else double.NaN;
Usage example 2:
#hint: Displays the Point of Control plot for weekly TPO profiles.
def yyyymmdd = getYyyyMmDd();
def day_number = daysFromDate(first(yyyymmdd)) + getDayOfWeek(first(yyyymmdd)); def period = floor(day_number / 7);
def cond = 0 < period - period[1];
profile tpo = timeProfile("startNewProfile" = cond, "onExpansion" = no);
tpo.show();
plot b = tpo.getPointOfControl();
======= DaysFromDate & GetMonth & GetDayOfMonth & GetYyyyMmDd() ======== #hint:Draws a vertical line at 10 bars from the last bar
input x = 10;
DefineGlobalColor( "VertLine", Color.Yellow );
def highestBar = HighestAll( if IsNaN(close) then Double.NaN else barNumber() ); def referenceBar = highestBar - x;
addVerticalLine( barNumber() == referenceBar,
getMonth() + "/" + getDayOfMonth(getYyyyMmDd()) + "/" + getYear(),
globalColor( "VertLine" )) ;
[TOC Return](#toc)


======= GetMonth & GetDayOfMonth & GetYyyyMmDd() ========
#By Jesse on the Mr. Script show
#hint: <b>Plot a line with value of a specified date</b>\nPlots a horizontal line across the entire chart. The line value is the close of the specified date. \nA bubble identifies the line
declare hide_on_intraday;
input Date = 20130604;#hint Date: Set the date you want see.<b>\n(Enter in YYYYMMDD)</b>
input price = CLOSE;
input show_line = Yes;#hint show_line: Show a horizontal line at this price<b>(Default is Yes)</b>
    def timeTest = getYyyyMmDd() == date;
TOS & THINKSCRIPT SNIPPET COLLECTION Page 78 def data = if timetest then price else double.nan;
plot Line = if show_line then highestall(data) else double.nan;
line.assignValueColor((if price == close then color.cyan else if price == open then color.pink else if price == low then color.yellow else if price == high then color.green else color.red));
def monthday = if timetest then getdayOfMonth(date) else double.nan; def month = if timetest then getmonth() else double.nan;
AddChartBubble(timetest, price, "Date: " + month + "/" + monthday + (if price == close then " Close: $" else if price == open then " Open: $" else if price == low then " Low: $" else if price == high then " High: $" else " Value: " )+ price, (if price == close then color.cyan else if price == open then color.pink else if price == low then color.yellow else if price == high then color.green else color.red), yes);
## end ##
Comment: The AddChartBubble has coding worth studying. Using the '+' formatting syntax is recommended and has replaced the original 'Concat' syntax used by the author.
C- SCALPER'S HELPER W/ SQUEEZE
[TOC Return](#toc)


## START STUDY
## Scalper's Helper w/ Squeeze, by Linus, Version = 2013-11-12.2
#hint: The Count plot adds the sum of price momentum comparisons with a counter of concurrent bars with no signaled direction change. The Sig plot is a signal line colored to show if in or out of the squeeze. (Lighter color is out of squeeze, by default.) \n\n Possible uses: \n\n If current Count is greater than previous Count of a different direction, and if not in the squeeze, look for possible breakout/breakdown or extension. \n\n If current Count is below Sig and previous Count was way above Sig, look for possible price direction change. \n\n Notes: \n\n Direction changes occur when the PPS signal changes and all the filters for that direction are either off or valid. The Count plot is colored to show the current direction. (Green for up and Red for down, by default.)
   declare lower;
input paintBars = No; input diFilter = Yes; input avgFilter = Yes; input prFilter = Yes; input price = close; input prMom = 1; input diLength = 13; input signal = 13;
############################################# # Keltner Channel and Bollinger Band Squeeze:
input avgType = AverageType.SIMPLE; # Mov. avg type.
input avgLength = 20; input numDev = 2.0; input factor = 1.5;
# length for band and channel mov. avg. # number of std devs of band.
# hint paintBars: Yes to color price bars. #hint diFilter: No to turn off DI filter.
#hint avgFilter: No to turn off mov. avg. filter. #hint prFilter: No to turn off price filter.
#hint price: price fundamental.
#hint prMom: offset for price (mom)entum.
#hint diLength: For DI+, DI- calc, and mom sum. #hint signal: Horiz. position of the Sig line.
# factor for offsetting channel. def MA = MovingAverage(avgType, price, avgLength);
# inSqueeze is true if the upper band is inside the upper channel:
TOS & THINKSCRIPT SNIPPET COLLECTION Page 79
def inSqueeze = (MA + numDev * stdev(price, avgLength)) < (MA + (factor * AvgTrueRange(high, close, low, avgLength))); #
#############################################
def hiDiff = high - high[1]; def loDiff = low[1] - low;
def ATR = WildersAverage(TrueRange(high, close, low), diLength);
# diDif is ("DI+" - "DI-")
def diDif = (100 * WildersAverage(if hiDiff > loDiff and hiDiff > 0 then hiDiff else 0, diLength) / ATR) - (100 * WildersAverage(if loDiff > hiDiff and loDiff > 0 then loDiff else 0, diLength) / ATR);
def ppsDir = CompoundValue(1, if !IsNaN(PPS().BuySignal) then 1 else if !IsNaN(PPS().SellSignal) then -1 else ppsDir[1], 0);
def diUp = !diFilter or (diFilter and diDif > 0 and diDif > diDif[1]); def diDn = !diFilter or (diFilter and diDif < 0 and diDif < diDif[1]);
def avgUp = !avgFilter or (avgFilter and price > MA); def avgDn = !avgFilter or (avgFilter and price < MA);
# Price momentum sums:
def sumUp = if prFilter then Sum(price > price[prMom], diLength) else 0; def sumDn = if prFilter then Sum(price < price[prMom], diLength) else 0;
# prLbl=Off: Hide price momentum label.
# prLbl=All: Show prMom, sumUp and sumDn values. # prLbl=UD: Show only sumUp and sumDn values. input prLbl = {default Off, All, UD};
AddLabel(prLbl!=prLbl.Off, (if prLbl==prLbl.All then "prMom=" + prMom + " :: " else "") + "U=" + sumUp + " :: D=" + sumDn, if sumUp > sumDn then Color.GREEN else if sumUp < sumDn then Color.RED else Color.GRAY);
# dir is 1 if last PPS signal was up, and up filters are valid or turned off; dir is -1 if last PPS signal was down, and down filters are valid or turned off.
def dir = CompoundValue(1, if ppsDir > 0 and avgUp and diUp then 1 else if ppsDir < 0 and avgDn and diDn then -1 else dir[1], 0);
# Count the number of times dir is in one direction.
def dirCnt = compoundValue(1, if dir crosses 0 then 1 else dirCnt[1] + 1, 0);
# If dir is up (> 0) then add to dirCnt the sum of price bars moving up, else add to dir the sum of price bars moving down. plot Count = if !isNaN(close) then
if dir > 0 then dirCnt + sumUp else dirCnt + sumDn else Double.NaN;
# Sig is colored differently when in or out of squeeze.
plot Sig = if !isNaN(close) then signal else Double.NaN; Sig.SetPaintingStrategy(PaintingStrategy.POINTS);
Sig.AssignValueColor(if inSqueeze then Color.DARK_GRAY else Color.WHITE);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 80 Sig.SetDefaultColor(Color.GRAY);
Count.SetPaintingStrategy(PaintingStrategy.LINE_VS_POINTS);
Count.AssignValueColor(if dir > 0 then if count > Sig then Color.GREEN else Color.DARK_GREEN else if count > Sig then Color.RED else Color.DARK_RED);
AssignPriceColor(if !paintBars then Color.CURRENT else if dir > 0 then
if Count > Sig then Color.GREEN
else Color.DARK_GREEN else if dir < 0 then
if Count > Sig then Color.RED
else Color.DARK_RED else Color.GRAY);
## END STUDY
S-PRICE CORRELATION WITH THE SPX
[TOC Return](#toc)


This is a price correlation scan compared to the SPX with a correlation of 0.95 to 1.0 for the last 50 bars. Below is the picture of the StockHacker composition. Use a 'day' aggregation:
Alternate:
#hint:High correlation scan. By Mr Script
input length = 10;#hint length: the agg-bar length being compared
input correlationWithSecurity = "SPX";#hint correlationWithSecurity; The security that the stock is correlated with input inarow = 10;#hint inarow:The number of agg-bars in a row with >0.9 correlation
def x = Correlation(close, close(correlationWithSecurity), length) > .9;#greater then 0.9 indicates a high correlation plot scan = sum(x, inarow) >= inarow;
T-VERTICAL LINES AT MARKET OPEN AND CLOSED TIMES
[TOC Return](#toc)


Granted that not all personal preferences are the same. I find that frequently changing the timeframe of charts is much easier to read when I have vertical lines as market start and end times. The following code will establish those markers. The end-time markers may seem redundant and they are if you do not 'Show Extended Session' or 'Expansion Area' for stocks. Futures and Forex are a different story.
#hint:Places vertical lines at start and end times #TOS title = VertLines_at_START_END_times input time1 = 930;
input time2 = 1630;
def StartTime = SecondsFromTime(time1) ==0;
def EndTime = SecondsFromTime(time2) ==0; AddVerticalLine(StartTime,"Market Open",Color.RED,Curve.SHORT_DASH); AddVerticalLine(EndTime," Market Closed",Color.RED,Curve.SHORT_DASH);
C-COLOR A PORTION OF A CHART
[TOC Return](#toc)



TOS & THINKSCRIPT SNIPPET COLLECTION Page 81
By Krill at http://groups.yahoo.com/neo/groups/TOS_thinkscript/info #Colors a portion of a chart from top to bottom between the times entered input start = 0930; # time in ET
input end = 1200;
def toPaint = SecondsFromTime(start) >= 0 and SecondsTillTime(end) > 0; def up = if toPaint then Double.POSITIVE_INFINITY else Double.NaN;
# Unfortunetly Double.NEGATIVE_INFINITY does not work in AddCluod() def down = if toPaint then LowestAll(low) else Double.NaN;
AddCloud(up, down, Color.RED); # end
C-CLOUD USAGE VIA MOVING AVERAGES
[TOC Return](#toc)


Comment: Clouds create nice looking charts. This illustrates the use of clouds using a popular analysis technique of two moving averages crossing.
# created Richard Houser - tos_thinkscript@yahoogroups.com
#Labels added by SFL
#TOS Title = CloudBetweenMovingAverages #hint:Cloud usage between two moving averages declare upper;
input price = close;
input fastLength = 8;
input fastAvgType = AverageType.SIMPLE; input slowLength = 20;
input slowAvgType = AverageType.SIMPLE;
plot FastMva = MovingAverage( fastAvgType, price, fastLength ); plot SlowMva = MovingAverage( slowAvgType, price, slowLength );
AddCloud( FastMva, SlowMva, Color.YELLOW, Color.RED );
addlabel(1,"Slow MA(" + slowLength + ") is " + (If fastAvgType == AverageType.EXPONENTIAL then "Exponential average"
else if fastAvgType == AverageType.Hull then "Hull average"
else if fastAvgType == AverageType.simple then "Simple average"
else if fastAvgType == AverageType.wilders then "Wilders average" else if fastAvgType == AverageType.weighted then "Weighted average" else "") ,color.cyan);
addlabel(1,"Fast MA(" + fastLength + ") is " + (If slowAvgType == AverageType.EXPONENTIAL then "Exponential average"
else if slowAvgType == AverageType.Hull then "Hull average"
else if slowAvgType == AverageType.simple then "Simple average"
else if slowAvgType == AverageType.wilders then "Wilders average" else if slowAvgType == AverageType.weighted then "Weighted average" else "") ,color.pink);
# end

TOS & THINKSCRIPT SNIPPET COLLECTION Page 82 T-EASILY VIEWING CHARTS OF STOCKS IN A LIST
[TOC Return](#toc)


Comment: You have a watchlist in either the left-hand panel or in 'Market Watch/Quotes'. Wouldn't it be nice to move thru the list looking at a chart for any stock that you want. This technique is too neat not to call it to your attention herein. Here is how it's done. In the left panel:
To set the color 'Send To' buttons:
In the left panel In the Market Watch/Quotes In the Market Watch/Quotes
The procedure for charting the stock is different in the two locations:
1. In the left panel, highlighting the stock will chart it:
2. In 'Market Watch/ Quotes', clicking on the 'Send To' button (in this case the green square) will chart the
stock.
C-PLOTS THE DAILY HIGH AND LOW
[TOC Return](#toc)


#hint:<b>Daily_Hi_Lo</b>\nWhite lines show the current day's H/L range. Cyan shows the previous day's. The red line shows the previous day's close
input showOnlyLastPeriod = no;#hint showOnlyLastPeriod: NO shows today's and previous day's H/L. YES shows only the previous day's H/L
def aggregationPeriod = AggregationPeriod.DAY;
def length = 1;
def displace = 0; plot DailyHigh; plot DailyLow;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 83
if showOnlyLastPeriod and !IsNaN(close(period = aggregationPeriod)[-1]) { DailyHigh = Double.NaN;
DailyLow = Double.NaN;
} else {
DailyHigh = Highest(high(period = aggregationPeriod)[-displace], length);
DailyLow = Lowest(low(period = aggregationPeriod)[-displace], length); }
DailyHigh.SetDefaultColor(GetColor(9)); DailyHigh.SetPaintingStrategy(PaintingStrategy.HORIZONTAL); DailyLow.SetDefaultColor(GetColor(9)); DailyLow.SetPaintingStrategy(PaintingStrategy.HORIZONTAL); #************************************************************ def PreDailyHigh = Highest(high(period = aggregationPeriod)[1], length); def PreDailyLow = Lowest(low(period = aggregationPeriod)[1], length); plot YesterHi = PreDailyHigh;
plot YesterLo = PreDailyLow;
YesterHi.SetDefaultColor(color.cyan); YesterHi.SetPaintingStrategy(PaintingStrategy.HORIZONTAL); YesterLo.SetDefaultColor(color.cyan); YesterLo.SetPaintingStrategy(PaintingStrategy.HORIZONTAL);
#input timeFrame = {default DAY, WEEK, MONTH};
def YstrdaysClose = close(period = aggregationPeriod)[1]; plot YesterClose = YstrdaysClose;
YesterClose.SetDefaultColor(GetColor(5)); YesterClose.SetPaintingStrategy(PaintingStrategy.HORIZONTAL); ############## End of Day vert line ######################## input time = 0930;
def StartTime = SecondsFromTime(time) ==0;
plot x = if StartTime then close else double.nan;
AddVerticalLine(StartTime,"Opening @ 9:30",Color.pink,Curve.SHORT_DASH);
X.Hide();
addLabel(yes,"Current Day's Hi/Lo",color.white);
addLabel(yes,"Previous day's Hi/Lo",color.cyan);
addLabel(yes,"Yesterday's Close",color.red);
#------- End of Code -----------
C-SELF-ADJUSTING RSI BANDS
# Adapted by R. Houser from The Self-Adjusting RSI script at http://www.metastock.com/Customer/Resources/TASC/Article.aspx?Id=72
#hint:<b>Self-Adjusting RSI bands</b>\nThe RSI herein is exactly the same as TOS builtin RSI. The conventional OB/OS levels are replaced by the upper and lower bands based on the std dev of the RSI itself. The RSI above the upper band is bullish and below the lower band is bearish. Within the the bands is a choppy area. The widening of the bands indicates increasing volatility similar to the Bollinger Bands. The upper band may be interpreted as an moving OB level and the lower band a moving OS level.
declare lower; input Length = 14;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 84 input StdDevConst = 1.8;
 input SMA_const input Method
= 2.0;
= { default SD, SMA };
input price def _rsi def _stdev def top
def bottom
= close;
= RSIWilder( Length, price = price ).RSI;
= StDev( _rsi, Length ); = if Method == Method.SD
then 50 + ( StdDevConst *_stdev )
else 50 + ( SMA_const * Average( AbsValue(_rsi - Average( _rsi, Length ) ), Length ) );
= if Method == Method.SD
then 50 - ( StdDevConst * _stdev )
else 50 - ( SMA_const * Average( AbsValue( _rsi - Average( _rsi, Length ) ), Length ) );
plot RSI = _rsi;
plot TopBand = top;
plot LowerBand = bottom;
Plot MidLine = 50; MidLine.SetPaintingStrategy(PaintingStrategy.LINE); MidLine.SetLineWeight(2); MidLine.SetDefaultColor(Color.YELLOW); MidLine.SetStyle(Curve.SHORT_DASH);
# end
C-3 MOVING AVERAGES: CHANGING COLOR
[TOC Return](#toc)


#by R. Houser
#hint:<b>Three MVSs ascending/descending color change</b> \nWhen the MovingAverage is increasing in value it will change color, and when it is decreasing in value change color again. User is able to select color of MovingAverage line when it is increasing or decreasing
declare upper;
input fastLength = 3; input mediumLength = 8; input slowLength = 21;
 input price input avgType
= close;
= AverageType.EXPONENTIAL;
plot fastMVA plot mediumMVA plot slowMVA
= MovingAverage( avgType, price, fastLength );
= MovingAverage( avgType, price, mediumLength );
= MovingAverage( avgType, price, slowLength );
fastMVA.DefineColor( "up", GetColor( 0 ) );
fastMVA.DefineColor( "dn", GetColor( 1 ) );
fastMVA.DefineColor( "def", GetColor( 2 ) );
fastMVA.AssignValueColor( if fastMVA > fastMVA[1] then fastMVA.Color( "up" ) else if fastMVA < fastMVA[1] then fastMVA.Color( "dn" ) else fastMVA.Color( "def" ) );
mediumMva.DefineColor( "up", GetColor( 3 ) ); mediumMva.DefineColor( "dn", GetColor( 4 ) ); mediumMva.DefineColor( "def", GetColor( 5 ) );
TOS & THINKSCRIPT SNIPPET COLLECTION Page 85 mediumMva.AssignValueColor( if mediumMva > mediumMva[1] then mediumMva.Color( "up" ) else if mediumMva <
mediumMva[1] then mediumMva.Color( "dn" ) else mediumMva.Color( "def" ) );
slowMVA.DefineColor( "up", GetColor( 6 ) );
slowMVA.DefineColor( "dn", GetColor( 7 ) );
slowMVA.DefineColor( "def", GetColor( 8 ) );
slowMVA.AssignValueColor( if slowMva > slowMva[1] then slowMva.Color( "up" ) else if slowMva < slowMva[1] then slowMva.Color( "dn" ) else slowMva.Color( "def" ) );
slowMVA.Hide(); #end
C-T3, ADAPTIVE SMOOTHING INDICATOR
[TOC Return](#toc)


#Hint:<b>T3 - Adaptive Smoothing Indicator</b>
# by Richard Houser tos_thinkscript@yahoo.groups
# --------------------------------------------------------------------------------
# The Formula . . . . . .more on Formulas
# T3(n) = GD(GD(GD(n)))
# GD(n,v) = EMA(n)*(1+v) - EMA(EMA(n))*v
# GD stands for Generalized DEMA (double-smoothed exponential MA)
# where
# n = Period
# v = Volume Factor
# http://www.linnsoft.com/tour/techind/t3.htm
declare upper; script GD {
input period = 10; input volumeFactor = 0.7; input price = close;
plot GD = ExpAverage( price, period ) * ( 1 + volumeFactor ) - ( ExpAverage( ExpAverage( price, period ), period ) * volumeFactor );
}
input period = 10;
input volumeFactor = 0.7;
input price = close;
plot T3 = GD( period, volumeFactor, GD( period, volumeFactor, GD( period, volumeFactor, price ) ) ); #end
C- RSI ZEROLINE OSCILLATOR
TOC RetuC-INSYNC INDEX rn
#hint: Plots the RSI oscillating about the ZeroLine in lieu of a OB/OS format
#TOS Title = RSI_Zero_Osc
#Comment: See the two methods of coloring a histogram in "#=== COLORING =" below. declare lower;
input length = 14; input price = close;
     def NetChgAvg = WildersAverage(price - price[1], length);
TOS & THINKSCRIPT SNIPPET COLLECTION Page 86 def TotChgAvg = WildersAverage(AbsValue(price - price[1]), length);
def ChgRatio = if TotChgAvg != 0 then NetChgAvg / TotChgAvg else 0; plot RSI = (50 * (ChgRatio + 1) - 50);
RSI.SetPaintingStrategy(PaintingStrategy.HISTOGRAM); RSI.SetLineWeight(3);
RSI.HideTitle();
RSI.HideBubble();
#=== COLORING = If you want to omit the histogram bar coloring of light-to-dark, then un-comment the '====THE THREE====" code lines below and comment-out the 5 lines shown below as '==== THE FIVE ====' below it.
# ==== THE THREE ====
RSI.DefineColor("Positive", Color.UPTICK);
RSI.DefineColor("Negative", Color.DOWNTICK);
RSI.AssignValueColor(if RSI > 0 then RSI.Color("Positive") else RSI.Color("Negative")); # ==== THE FIVE ====
#RSI.DefineColor("Positive and Up", Color.GREEN);
#RSI.DefineColor("Positive and Down", Color.DARK_GREEN);
#RSI.DefineColor("Negative and Down", Color.RED);
#RSI.DefineColor("Negative and Up", Color.DARK_RED);
#RSI.AssignValueColor(if RSI >= 0 then if RSI > RSI[1] then RSI.Color("Positive and Up") else RSI.Color("Positive and Down") else if RSI < RSI[1] then RSI.Color("Negative and Down") else RSI.Color("Negative and Up")); #################################
plot ZeroLine = 0;
ZeroLine.SetDefaultColor(Color.YELLOW);
ZeroLine.SetLineWeight(1);
#The line below plots at the bar values and adds a lot of class to the looks of a histogram plot RSI_Line = (50 * (ChgRatio + 1) - 50);
RSI_Line.SetDefaultColor(GetColor(1));
#end
C-INSYNC INDEX
[TOC Return](#toc)


#Hint:<b>InSync Index</b>\nThis is index is formed from signals on a variety of different technical indicators, and used to determine extreme overbought/oversold values in the market.
# InSync Index
# Coded by Eric Rasmussen #
# The InSync Index is used detect extreme levels.
# Values higher or equal to 50 are considered to be high extreme levels. (sell)
# Values lower or equal than -50 are considered to be low extreme levels. (buy)
declare lower;
# Data Smoothing Input input smooth = 1;
# Study Definitions
def bbUpper = BollingerBandsEMA().UpperBand;

TOS & THINKSCRIPT SNIPPET COLLECTION Page 87 def bbLower = BollingerBandsEMA().LowerBand;
 def bbCalc def macd1
def macd2 def rsi
def change def dpo def eom def mf def stoch def bomp def cc
= (close - bbLower)/(bbUpper - bbLower); = MACD(8, 17);
= cci();
# Indicator Scoring
def bb
def cci
def macd
def roc
10) then -5 else 0;
def sto def rsiW def bop -5 else 0; def dp def emv def mfi
= if stoch > 80 then 10 else if stoch < 20 then -10 else 0; = if rsi > 70 then 5 else if rsi < 30 then -5 else 0;
= if bomp > 0 and bomp > expAverage(bomp, 10) then 5 else if bomp < 0 and bomp < expAverage(bomp, 10) then
= if dpo > 0 then 5 else if dpo < 0 then -5 else 0; = if eom > 0 then 5 else if eom < 0 then -5 else 0; = if mf > 50 then 5 else if mf < 40 then -5 else 0;
= macd1 - (MACD(8, 10) - MACD(17, 20)); = rsIWilder();
= RateOfChange(10); = detrendedPriceOsc();
= easeOfMovement(); = moneyFlowIndex();
= StochasticFull("k period" = 14); = balanceOfMarketPower();
= if bbCalc > .95 then 5 else if bbCalc < .05 then -5 else 0; = if cc > 100 then 5 else if cc < -100 then -5 else 0;
= if macd1 > 0 and macd2 > 0 then 5 else if macd1 < 0 and macd2 < 0 then -5 else 0;
= if change > 1 and change > expAverage(change, 10) then 5 else if change < 1 and change < expAverage(change,
# Point Sum
def sum = bb + cci + macd + roc + sto + rsiW + bop + dp + emv + mfi;
# Plots
plot inSync = expAverage(sum, smooth);
plot zero plot pos55 plot neg55
= if isNaN(close) then double.NaN else 0;
= if isNaN(close) then double.NaN else 50; = if isNaN(close) then double.NaN else -50;
inSync.assignValueColor(if sum > 0 then color.GREEN else color.RED); inSync.setLineWeight(2);
zero.assignValueColor(color.LIGHT_GRAY); pos55.assignValueColor(color.RED); neg55.assignValueColor(color.GREEN);
zero.hideTitle(); pos55.hideTitle(); neg55.hideTitle(); #end
COMMENT: You can alter the criteria and/or the indicators to suit your trading style

TOS & THINKSCRIPT SNIPPET COLLECTION Page 88 C- CLOUD A TIME INTERVAL WITHOUT PLOTS
[TOC Return](#toc)


#hint:<b>Cloud a time interval without plots</b>
input start = 1000; # hint start: Beginning time in 24-hour format ET input end = 1300; #hint end:Ending time of the cloud
def toPaint = SecondsFromTime(start) >= 0 and SecondsTillTime(end) > 0; def up = if toPaint then Double.POSITIVE_INFINITY else Double.NaN;
# Unfortunetly Double.NEGATIVE_INFINITY does not work in AddCluod() def down = if toPaint then LowestAll(low) else Double.NaN;
AddCloud(up, down, Color.RED);
C- IMPROVED TIME SERIES FORECAST STUDY
[TOC Return](#toc)


#hint:<b>An improved TimeSeriesForecast study.</b> \nThe improvement is done here using a non-TOS correct regression slope calculation comparable with the RH's code on this topic. This is a substitute for the builtin 'TimeSeriesForecast'.
input price = close;
input avgType = AverageType.SIMPLE;
input avgLength = 1;#hint avgLength:Retain 1 used to get smoothPrice used herein
input regLength = 8;#hint regLength:The number of bars for which the statistical data is collected.
input barPlus = 3;#hint barplus:The number of bars for which the price is predicted. Specify positive number to obtain the forecast data, negative number to backtest indicator accuracy.
input numDevUp = 2.0;#hint numDevUp:Std Deviation for the upper band
input numDevDn = -2.0;#hint numDevDn:Std Deviation for the lower band
def smoothPrice = MovingAverage(avgType, price, avgLength); def std = StDev(smoothPrice, regLength);
plot RegressionBand = reference TimeSeriesForecast(smoothPrice, regLength, barPlus); plot UpperBand = RegressionBand + std * numDevUp;
plot LowerBand = RegressionBand + std * numDevDn;
#The buy/sell signals nelow are rudimentary and should not be used without other strong confirmatioms
plot Buy = if RegressionBand < RegressionBand[1] && RegressionBand[-1] > RegressionBand && RegressionBand[-2] > (RegressionBand[-1] ) then RegressionBand Else double.nan; Buy.SetPaintingStrategy(PaintingStrategy.ARROW_UP);
Buy.SetLineWeight(5);
Buy.SetDefaultColor(Color.GREEN);
plot Sell = if RegressionBand > RegressionBand[1] && RegressionBand[-1] < (RegressionBand ) && RegressionBand[-2] < (RegressionBand[-1] ) then RegressionBand Else double.nan; Sell.SetPaintingStrategy(PaintingStrategy.ARROW_DOWN);
Sell.SetLineWeight(5);
Sell.SetDefaultColor(Color.RED);
#end
Comment: Higher aggregations of 15 and 30-mins produce less whipsaw.

TOS & THINKSCRIPT SNIPPET COLLECTION Page 89 C-VOLATILITY LABEL
[TOC Return](#toc)


#hint:Places a volatility label on the upper panel #begin
declare upper;
def IV = Round(ImpVolatility() * 100);
def HV = Round(HistoricalVolatility() * 100);
AddLabel(yes, "ImpVolatility = " + IV + " % and HistoricalVolatility = " + HV + " %", color.green);
#end
Comment:HV and IV do not plot on intraday. The default HV is annual and that is what will show in the label. On an intraday chart the IV will show N/A and the HV will be annual HV. to get the daily value of Implied Volatility:
def DaysIV = IV / Sqrt(252);
C-'BATTLE OF THE BANDS' RE IMPLIED VOLATILITY
[TOC Return](#toc)


#hint:Battle of the Bands Indicates the range of price using Implied Volatility, Bollinger Bands or Keltner Channel. No direction (up or down) is implied since price is assumed random by the calculations.
Mobius©: # Battle of the Bands # Implied Volatility Bands
# ATR Bands
# Bollinger Bands
# Mobius
# Added ATR label. Added conditional color for labels. Altered bands on lower aggs. to 100% IV spread from mean. Altered coding structure to be more efficient.
# V02.10.17.2013
declare hide_on_daily;
input n = 21;
input IvDailyBands = no; input IvHourBands = no; input IV15minBands = yes; input AtrBands = no;
input BollingerBands = yes; input DisplayLabels = yes;
def o = open;
def h = high;
def l = low;
def c = close;
def period = AggregationPeriod.DAY; def hd = high(period = period);
def ld = low(period = period);
def cd = close(period = period);
def DaysMean = hl2(period = period);
def HoursMean = hl2(period = AggregationPeriod.HOUR); def IVd = imp_Volatility(period = period);
def IV = if isNaN(IVd) then IV[1] else IVd;
def hIV = Highest(IV, 252);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 90
def lIV = Lowest(IV, 252);
def IVpercentile = (IV - lIV) / (hIV - lIV); AddLabel(DisplayLabels, "IV " + AsPercent(IV) +
" IV Percentile: " + AsPercent(IVpercentile) , if IsAscending(IV)
then Color.GREEN
else if IsDescending(IV) then Color.RED
else Color.WHITE);
def ATR = Average(TrueRange(h, c, l), n);
def ATRd = Average(TrueRange(hd, cd, ld), n);
def SDatr = StDev(ATRd, 252);
def hATR = Highest(SDatr, 252);
def lATR = Lowest(SDatr, 252);
def ATRpercentile = (SDatr - lATR) / (hATR - lATR);
def DaysIV = IV / Sqrt(252);
def DaysIVSD = StDev(DaysIV, n);
def DaysIVValue = Round((DaysMean * DaysIV) / TickSize(), 0) * TickSize(); AddLabel(DisplayLabels, Concat("Days IV " + AsPercent(DaysIV), " Value $" + DaysIVValue),
if IsAscending(DaysIV)
then Color.GREEN
else if IsDescending(DaysIV) then Color.RED
else Color.WHITE);
def HoursIV = IV / Sqrt(5796);
def HoursIVSD = StDev(HoursIV, n);
def HoursIVValue = Round((HoursMean * HoursIV) / TickSize(), 0) * TickSize(); AddLabel(DisplayLabels, Concat("Hours IV " + AsPercent(HoursIV), " Value $" + HoursIVValue),
if IsAscending(HoursIV)
then Color.GREEN
else if IsDescending(HoursIV) then Color.RED
else Color.WHITE);
def IV15min = IV / Sqrt(23184);
def IV15minSD = StDev(IV15min, n);
def IV15mValue = Round((c * IV15min) / TickSize(), 0) * TickSize();
AddLabel(DisplayLabels, Concat("15min IV " + AsPercent(IV15min), " Value $" + IV15mValue),
if IsAscending(IV15min)
then Color.GREEN
else if IsDescending(IV15min) then Color.RED
else Color.WHITE);
plot DaysIVhigh = DaysMean + ((DaysIVValue) / 2); DaysIVhigh.SetDefaultColor(Color.WHITE); DaysIVhigh.SetHiding(!IvDailyBands); DaysIVhigh.SetPaintingStrategy(PaintingStrategy.DASHES); plot DaysIVlow = DaysMean - ((DaysIVValue) / 2); DaysIVlow.SetDefaultColor(Color.WHITE); DaysIVlow.SetHiding(!IvDailyBands); DaysIVlow.SetPaintingStrategy(PaintingStrategy.DASHES);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 91
plot HoursIVhigh = Average(HoursMean + HoursIVValue, n); HoursIVhigh.SetDefaultColor(Color.CYAN); HoursIVhigh.SetHiding(!IvHourBands);
plot HoursIVlow = Average(HoursMean - HoursIVValue, n); HoursIVlow.SetDefaultColor(Color.CYAN); HoursIVlow.SetHiding(!IvHourBands);
plot IV15minhigh = Inertia(c + (c * IV15minSD), n); IV15minhigh.SetDefaultColor(Color.YELLOW); IV15minhigh.SetHiding(!IV15minBands);
plot IV15minlow = Inertia(c - (c * IV15minSD), n); IV15minlow.SetDefaultColor(Color.YELLOW); IV15minlow.SetHiding(!IV15minBands);
plot ATRup = Inertia(c + ATR, n); ATRup.SetHiding(!AtrBands); plot ATRdn = Inertia(c - ATR, n); ATRdn.SetHiding(!AtrBands);
def SD = StDev(close, n); def Avg = Average(close, n);
plot SDup = Avg + (2 * SD); SDup.SetDefaultColor(Color.GREEN); SDup.SetHiding(!BollingerBands); plot SDdn = Avg + (-2 * SD); SDdn.SetDefaultColor(Color.GREEN); SDdn.SetHiding(!BollingerBands);
AssignPriceColor(if (SDup < IV15minhigh) or (SDdn > IV15minlow)
then Color.PLUM
else Color.CURRENT);
AddLabel(DisplayLabels, "ATR Chart Agg. = $" + (Round(ATR / TickSize(), 0) * TickSize()) +
" ATR Daily $" + (Round(ATRd / TickSize(), 0) * TickSize()) + " ATR Percentile: " + AsPercent(ATRpercentile),
if ATR > ATR[1] then Color.GREEN else if ATR < ATR[1] then Color.RED
else Color.WHITE);
# End Code Battle of the Bands
C-THE BEAUTIFUL 'GAUSSIAN RAINBOW'
[TOC Return](#toc)


#hint:Possibly the most beautiful chart you will see in ThinkScript. # Gaussian Rainbow
# - Coded and Developed by Eric Rasmussen
# - 11/24/2013
declare upper; # Study Inputs

w beta alpha
= ( 2 * double.Pi / length );
= ( 1 - cos( w ) ) / ( power( 1.414, 2.0 / gaussianOrder ) - 1 ); = ( -beta + sqRt( beta * beta + 2 * beta) );
# Average Calculations
switch( gaussian
case "ONE":
rbi1 =
rbi2 =
rbi3 =
rbi4 =
rbi5 =
rbi6 =
rbi7 =
rbi8 =
) {
case "TWO": rbi1 =
power( alpha, 2 ) * data + 2* (1-alpha) *rbi1[1]-
TOS & THINKSCRIPT SNIPPET COLLECTION Page 92
 input gaussian
input data
input length
input gaussianOrder = 3; input cloud = yes;
= { "ONE", "TWO", "THREE", default "FOUR" }; = OHLC4;
= 10;
# Definitions
def w; def beta; def alpha;
def rbi1; def rbi2; def rbi3; def rbi4; def rbi5; def rbi6;def rbi7; def rbi8;
# Alpha Calculation
alpha * data + ( 1 - alpha ) * rbi1[1]; alpha*rbi1+(1-alpha)*rbi2[1]; alpha*rbi2+(1-alpha)*rbi3[1]; alpha*rbi3+(1-alpha)*rbi4[1]; alpha*rbi4+(1-alpha)*rbi5[1]; alpha*rbi5+(1-alpha)*rbi6[1]; alpha*rbi6+(1-alpha)*rbi7[1]; alpha*rbi7+(1-alpha)*rbi8[1];
power( 1 - alpha, 2 ) * rbi1[2];
rbi2 = power( alpha, 2 ) * rbi1 +
2* (1-alpha) *rbi2[1]- power( 1 - alpha, 2 ) * rbi2[2];
rbi3 = power( alpha, 2 ) * rbi2 + 2* (1-alpha) *rbi3[1]-
power( 1 - alpha, 2 ) * rbi3[2];
rbi4 = power( alpha, 2 ) * rbi3 +
2* (1-alpha) *rbi4[1]- power( 1 - alpha, 2 ) * rbi4[2];
rbi5 = power( alpha, 2 ) * rbi4 + 2* (1-alpha) *rbi5[1]-
power( 1 - alpha, 2 ) * rbi5[2];
rbi6 = power( alpha, 2 ) * rbi5 +
2* (1-alpha) *rbi6[1]- power( 1 - alpha, 2 ) * rbi6[2];
rbi7 = power( alpha, 2 ) * rbi6 + 2* (1-alpha) *rbi7[1]-
power( 1 - alpha, 2 ) * rbi7[2];
TOS & THINKSCRIPT SNIPPET COLLECTION Page 93
rbi8 = power( alpha, 2 ) * rbi7 + 2* (1-alpha) *rbi8[1]-
power( 1 - alpha, 2 ) * rbi8[2];
case "THREE":
rbi1 = power( alpha, 3 ) * data +
3* (1–alpha) *rbi1[1]-
3 * power( 1 - alpha, 2 ) * rbi1[2] +
power( 1 - alpha, 3 ) * rbi1[3];
rbi2 = power( alpha, 3 ) * rbi1 +
3* (1–alpha) *rbi2[1]-
3 * power( 1 - alpha, 2 ) * rbi2[2] +
power( 1 - alpha, 3 ) * rbi2[3];
rbi3 = power( alpha, 3 ) * rbi2 +
3* (1–alpha) *rbi3[1]-
3 * power( 1 - alpha, 2 ) * rbi3[2] +
power( 1 - alpha, 3 ) * rbi3[3];
rbi4 = power( alpha, 3 ) * rbi3 +
3* (1–alpha) *rbi4[1]-
3 * power( 1 - alpha, 2 ) * rbi4[2] +
power( 1 - alpha, 3 ) * rbi4[3];
rbi5 = power( alpha, 3 ) * rbi4 +
3* (1–alpha) *rbi5[1]-
3 * power( 1 - alpha, 2 ) * rbi5[2] +
power( 1 - alpha, 3 ) * rbi5[3];
rbi6 = power( alpha, 3 ) * rbi5 +
3* (1–alpha) *rbi6[1]-
3 * power( 1 - alpha, 2 ) * rbi6[2] +
power( 1 - alpha, 3 ) * rbi6[3];
rbi7 = power( alpha, 3 ) * rbi6 +
3* (1–alpha) *rbi7[1]-
3 * power( 1 - alpha, 2 ) * rbi7[2] +
power( 1 - alpha, 3 ) * rbi7[3];
rbi8 = power( alpha, 3 ) * rbi7 +
3* (1–alpha) *rbi8[1]-
3 * power( 1 - alpha, 2 ) * rbi8[2] +
 case "FOUR":
rbi1
rbi2
rbi3
= power( alpha, 4 ) * data + 4* (1–alpha) *rbi1[1]–
6 * power( 1 - alpha, 2 ) * rbi1[2] + 4 * power( 1 - alpha, 3 ) * rbi1[3] -
power( 1 - alpha, 4 ) * rbi1[4]; = power( alpha, 4 ) * rbi1 +
4* (1–alpha) *rbi2[1]–
6 * power( 1 - alpha, 2 ) * rbi2[2] + 4 * power( 1 - alpha, 3 ) * rbi2[3] -
power( 1 - alpha, 4 ) * rbi2[4]; = power( alpha, 4 ) * rbi2 +
power( 1 - alpha, 3 ) * rbi8[3];
4* (1–alpha) *rbi3[1]–
 }
TOS & THINKSCRIPT SNIPPET COLLECTION Page 94
6 * power( 1 - alpha, 2 ) * rbi3[2] + 4 * power( 1 - alpha, 3 ) * rbi3[3] - power( 1 - alpha, 4 ) * rbi3[4];
rbi4 = power( alpha, 4 ) * rbi3 + 4* (1–alpha) *rbi4[1]–
6 * power( 1 - alpha, 2 ) * rbi4[2] + 4 * power( 1 - alpha, 3 ) * rbi4[3] - power( 1 - alpha, 4 ) * rbi4[4];
rbi5 = power( alpha, 4 ) * rbi4 + 4* (1–alpha) *rbi5[1]–
6 * power( 1 - alpha, 2 ) * rbi5[2] + 4 * power( 1 - alpha, 3 ) * rbi5[3] - power( 1 - alpha, 4 ) * rbi5[4];
rbi6 = power( alpha, 4 ) * rbi5 + 4* (1–alpha) *rbi6[1]–
6 * power( 1 - alpha, 2 ) * rbi6[2] + 4 * power( 1 - alpha, 3 ) * rbi6[3] - power( 1 - alpha, 4 ) * rbi6[4];
rbi7 = power( alpha, 4 ) * rbi6 + 4* (1–alpha) *rbi7[1]–
6 * power( 1 - alpha, 2 ) * rbi7[2] + 4 * power( 1 - alpha, 3 ) * rbi7[3] - power( 1 - alpha, 4 ) * rbi7[4];
rbi8 = power( alpha, 4 ) * rbi7 + 4* (1–alpha) *rbi8[1]–
6 * power( 1 - alpha, 2 ) * rbi8[2] + 4 * power( 1 - alpha, 3 ) * rbi8[3] - power( 1 - alpha, 4 ) * rbi8[4];
#plots
plot ga1 = rbi1; plot ga2 = rbi2; plot ga3 = rbi3; plot ga4 = rbi4; plot ga5 = rbi5; plot ga6 = rbi6; plot ga7 = rbi7; plot ga8 = rbi8;
# Look and Feel
ga1.assignValueColor( color.MAGENTA ); ga2.assignValueColor( color.PLUM ); ga3.assignValueColor( color.BLUE ); ga4.assignValueColor( color.CYAN ); ga5.assignValueColor( color.GREEN ); ga6.assignValueColor( color.YELLOW ); ga7.assignValueColor( color.DARK_ORANGE ); ga8.assignValueColor( color.RED );
ga1.hideTitle(); ga2.hideTitle(); ga3.hideTitle(); ga4.hideTitle(); ga5.hideTitle(); ga6.hideTitle(); ga7.hideTitle(); ga8.hideTitle();
# Cloud Plots
addCloud( if cloud == yes then ga1 else double.NaN, ga8, color.RED, color.BLACK );
addCloud( if cloud == yes then ga1 else double.NaN, ga7, color.DARK_ORANGE, color.BLACK ); addCloud( if cloud == yes then ga1 else double.NaN, ga6, color.YELLOW, color.YELLOW );
TOS & THINKSCRIPT SNIPPET COLLECTION Page 95
addCloud( if cloud == yes then ga1 else double.NaN, ga5, color.GREEN, color.GREEN ); addCloud( if cloud == yes then ga1 else double.NaN, ga4, color.BLUE, color.BLUE );
addCloud( if cloud == yes then ga1 else double.NaN, ga3, color.PLUM, color.PLUM );
addCloud( if cloud == yes then ga1 else double.NaN, ga2, color.MAGENTA, color.MAGENTA ); #end
C- PRICE-TO-EARNINGS (P/E) RATIO FOR A WATCHLIST COLUMN
[TOC Return](#toc)


#hint:For a WatchList Column (WLC), shows the price-to-earnings (P/E) ratio. In trader's jargon this tells how expensive a stock's earnings are.
Discussions and the literature often relate this to the over-all-market P/E average.
rec AE = if IsNaN(GetActualEarnings()) then 0 else GetActualEarnings();
def EPS_TTM = Sum(AE, 252);#The sum of the trailing twelve months EPS def PE = close/EPS_TTM ;#The P/E ratio
AddLabel(yes, round(PE,1));
C-OPENING RANGE (OR) STUDY WITH A TWIST:
[TOC Return](#toc)


#hint:<b>Opening Range(OR) Study w/ a twist:</b>\n The twist consists of: <li>1. A definotion of two opening ranges e.g. 5 & 60 minutes <li>2. The OR or the post-OR portion of the day may be clouded showing the OR's high, low and the smaller-OR-average. <li>3. Dots indicate 10% levels of the two ORs. <li>4. A choice to show either today's OR only or also previous days' ORs.
input ORBegin = 0930;#hint ORBegin:The start of the smaller OR
input OREnd = 0935;#hint OREnd:The end of the smaller OR
input ShowTodayOnly = { default "No", "Yes"};#hint ShowTodayOnly:YES shows only today's OR plot input ORBegin2 = 0930;#hint ORBegin2:The start of the larger OR
input OREnd2 = 1030;#hint OREnd2:The end of the larger OR
input ShadeOR = YES;#hint ShadeOR:Shades the opening range in lieu of after the opening range def s = ShowTodayOnly;
def na = Double.NaN;
def ORActive = if SecondsTillTime(OREnd) > 0 and SecondsFromTime(ORBegin) >= 0 then 1 else 0; def today = if s == 0 or GetDay() == GetLastDay() and SecondsFromTime(ORBegin) >= 0 then 1 else 0;
rec ORHigh = if ORHigh[1] == 0 or ORActive[1] == 0 and ORActive == 1 then high else if ORActive and high > ORHigh[1] then high else ORHigh[1];
rec ORLow = if ORLow[1] == 0 or ORActive[1] == 0 and ORActive == 1 then low else if ORActive and low < ORLow[1] then low else ORLow[1];
def ORWidth = ORHigh - ORLow;
def ORHA = if ORActive or today < 1 then na else ORHigh;
def ORLA = if ORActive or today < 1 then na else ORLow; def O = ORHA - (ORHA - ORLA) / 2;
plot ORL = If (O == 0 , na, O); ORL.SetDefaultColor(Color.YELLOW); ORL.SetStyle(Curve.LONG_DASH); ORL.SetLineWeight(3);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 96
#====== The larger OR =========
def ORActive2 = if SecondsTillTime(OREnd2) > 0 and SecondsFromTime(ORBegin2) >= 0 then 1 else 0;
rec ORHigh2 = if ORHigh2[1] == 0 or ORActive2[1] == 0 and ORActive2 == 1 then high else if ORActive2 and high > ORHigh2[1] then high else ORHigh2[1];
rec ORLow2 = if ORLow2[1] == 0 or ORActive2[1] == 0 and ORActive2 == 1 then low else if ORActive2 and low < ORLow2[1] then low else ORLow2[1];
def ORWidth2 = ORHigh2 - ORLow2;
# ======= Define all the plots ===========
plot ORH2 = if ORActive2 or today < 1 then na else ORHigh2;
plot ORL2 = if ORActive2 or today < 1 then na else ORLow2;
ORH2.SetDefaultColor(Color.GREEN);
ORH2.SetStyle(Curve.LONG_DASH);
ORH2.SetLineWeight(3);
ORL2.SetDefaultColor(Color.RED);
ORL2.SetStyle(Curve.LONG_DASH);
ORL2.SetLineWeight(3);
def TimeLine = if SecondsTillTime(OREnd2) == 0 then 1 else 0;
def pos = (ORH2 - ORL2) / 10;#The value for each 10% of the H-L range
 plot d1 = If (TimeLine , ORH2, na); plot d2 = If (TimeLine , ORH2 - ( pos plot d3 = If (TimeLine , ORH2 - ( pos plot d4 = If (TimeLine , ORH2 - ( pos plot d5 = If (TimeLine , ORH2 - ( pos plot d6 = If (TimeLine , ORH2 - ( pos plot d7 = If (TimeLine , ORH2 - ( pos plot d8 = If (TimeLine , ORH2 - ( pos plot d9 = If (TimeLine , ORH2 - ( pos plot d10 = If (TimeLine , (ORL2), na);
* 2), na); * 3), na); * 4), na); * 5), na); * 6), na); * 7), na); * 8), na); * 9), na);
d1.SetPaintingStrategy(PaintingStrategy.POINTS); d2.SetPaintingStrategy(PaintingStrategy.POINTS); d3.SetPaintingStrategy(PaintingStrategy.POINTS); d4.SetPaintingStrategy(PaintingStrategy.POINTS); d5.SetPaintingStrategy(PaintingStrategy.POINTS); d6.SetPaintingStrategy(PaintingStrategy.POINTS); d7.SetPaintingStrategy(PaintingStrategy.POINTS); d8.SetPaintingStrategy(PaintingStrategy.POINTS); d9.SetPaintingStrategy(PaintingStrategy.POINTS); d10.SetPaintingStrategy(PaintingStrategy.POINTS);
def Span = (O - ORL2) / (ORH2 - ORL2); rec colorState = if Span > 0.66 then -1 else if Span < 0.33 then 1 else 0;
d1.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d2.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d3.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d4.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d5.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW);
TOS & THINKSCRIPT SNIPPET COLLECTION Page 97
d6.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d7.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d8.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d9.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d10.AssignValueColor(if colorState < 0 then Color.RED else if colorState > 0 then Color.GREEN else Color.YELLOW); d1.SetLineWeight(5);d2.SetLineWeight(5);d3.SetLineWeight(5);d4.SetLineWeight(5);d5.SetLineWeight(5); d6.SetLineWeight(5);d7.SetLineWeight(5);d8.SetLineWeight(5);d9.SetLineWeight(5);d10.SetLineWeight(5);
def TimeLineb = if SecondsTillTime(OREnd) == 0 then 1 else 0; def posbd = (ORHA - ORLA) / 10;
plot bd1 = If (TimeLineb , ORHA, na); plot bd2 = If (TimeLineb , ORHA - ( posbd * 2), na);
plot bd3 = If (TimeLineb , ORHA - ( posbd * 3), na); plot bd4 = If (TimeLineb , ORHA - ( posbd * 4), na); plot bd5 = If (TimeLineb , ORHA - ( posbd * 5), na); plot bd6 = If (TimeLineb , ORHA - ( posbd * 6), na); plot bd7 = If (TimeLineb , ORHA - ( posbd * 7), na); plot bd8 = If (TimeLineb , ORHA - ( posbd * 8), na); plot bd9 = If (TimeLineb , ORHA - ( posbd * 9), na); plot bd10 = If (TimeLineb , (ORL2), na);
bd1.SetPaintingStrategy(PaintingStrategy.POINTS); bd2.SetPaintingStrategy(PaintingStrategy.POINTS); bd3.SetPaintingStrategy(PaintingStrategy.POINTS); bd4.SetPaintingStrategy(PaintingStrategy.POINTS); bd5.SetPaintingStrategy(PaintingStrategy.POINTS); bd6.SetPaintingStrategy(PaintingStrategy.POINTS); bd7.SetPaintingStrategy(PaintingStrategy.POINTS); bd8.SetPaintingStrategy(PaintingStrategy.POINTS); bd9.SetPaintingStrategy(PaintingStrategy.POINTS); bd10.SetPaintingStrategy(PaintingStrategy.POINTS);
bd1.SetDefaultColor(Color.YELLOW); bd2.SetDefaultColor(Color.YELLOW); bd3.SetDefaultColor(Color.YELLOW); bd4.SetDefaultColor(Color.YELLOW); bd5.SetDefaultColor(Color.YELLOW); bd6.SetDefaultColor(Color.YELLOW); bd7.SetDefaultColor(Color.YELLOW); bd8.SetDefaultColor(Color.YELLOW); bd9.SetDefaultColor(Color.YELLOW); bd10.SetDefaultColor(Color.YELLOW);
#========== To shade the opening active range =====================
def ORActive3= if GetLastDay() == GetDay() and SecondsFromTime(ORBegin2) >= 0 and SecondsFromTime(OREnd2) <= 0 then 1 else 0;
def ORHigh3 = if ORActive3 then high else na;
def ORLow3 = if ORActive3 then low else na;
plot ORAH3 = if (GetLastDay() != GetDay() or !ORActive3) or !ShadeOR then na else HighestAll(ORHigh3);
plot ORAL3= if (GetLastDay() != GetDay() or !ORActive3) or !ShadeOR then na else LowestAll(ORLow3);
#========= end of To shad the opening active range ==================
#====== Shade option selection ==========
#AddCloud(ORL2, ORH2, color.downtick, color.downtick);#If ORShade = NO #AddCloud(ORAL3, ORAH3,color.light_red,color.light_red);#If ORShade = YES def Shade1 = If ShadeOR then ORAL3 else ORL2;
def Shade2 = If ShadeOR then ORAH3 else ORH2;
AddCloud(Shade1, shade2,color.light_red,color.light_red);
#======= end of Shade option selection ========
#========= labels ==============
AddLabel(yes, "OR Time = " + ORBegin2 + " to " + AsPrice( OREnd2) + " and Smaller OR is " + AsPrice(ORBegin) + " to " + AsPrice(OREnd) , Color.PINK);
AddLabel(yes,"OR High = "+ ORH2 + " & OR Low = " + ORL2, color.pink);
#end

TOS & THINKSCRIPT SNIPPET COLLECTION Page 98 T-CHANGING THE HEADER TEXT COLOR
[TOC Return](#toc)


The header text color is set to the first color definition found in the code.
Occasionally this color is hard to read if it is close to your screens background color. The following code, placed as the top lines in your study, will reset the header text color and affect nothing else except a shown below in 'edit studies'. plot WhiteLabel = Double.NaN;
WhiteLabel.SetDefaultColor(Color.WHITE);#Use any color you desire
The above will now look like:
Note that the LinearRegCh100 color cannot be changed because it is a built-in study and its code is non-editable. However, there are unintended consequences as shown below in this 'edit studies' screen.
C&S-THE MARKET FORECAST REPLICA
[TOC Return](#toc)


Comment:The reference for 'The Market Forecast' concept is www.themarketforecast.com/index.html
#hint:Plots a <b>replica of the builtin 'MarketForecast'</b> with labels added & colors altered\nThis replica provides parameters that can be used in a subsequent plot/scan to identify the powerful cluster concept.
declare lower;
#plot WhiteLabel = Double.NaN;
#WhiteLabel.SetDefaultColor(Color.White);
def na = Double.NaN;
Plot MidLine = 50; MidLine.SetPaintingStrategy(PaintingStrategy.LINE); MidLine.SetLineWeight(1); MidLine.SetDefaultColor(Color.YELLOW);
plot Momentum = MarketForecast().Momentum; Momentum.SetPaintingStrategy(PaintingStrategy.LINE); Momentum.SetLineWeight(2); Momentum.SetDefaultColor(Color.RED
);
plot NearT = MarketForecast().NearTerm; NearT.SetPaintingStrategy(PaintingStrategy.LINE); NearT.SetLineWeight(2);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 99 NearT.SetDefaultColor(Color.CYAN);
plot Intermed = MarketForecast().Intermediate; Intermed.SetPaintingStrategy(PaintingStrategy.LINE); Intermed.SetLineWeight(2); Intermed.SetDefaultColor(Color.upTICK);
Plot OB =80; OB.SetPaintingStrategy(PaintingStrategy.LINE); OB.SetLineWeight(1); OB.SetDefaultColor(Color.YELLOW);
Plot OS = 20; OS.SetPaintingStrategy(PaintingStrategy.LINE); OS.SetLineWeight(1); OS.SetDefaultColor(Color.YELLOW);
Plot upperLine = 110; upperLine.SetDefaultColor(Color.BLUE);
AddLabel(yes, "Momentum = " + round(Momentum,1), Color.RED);
AddLabel(yes, "NearTerm = " + round(NearT,1), Color.CYAN);
AddLabel(yes, "Intermediate = " + round(Momentum,1), Color.UPTICK);
AddLabel(yes, "Sum Total = " + round( Momentum + NearT + Intermed, 1), Color.PINK); AddLabel(yes, "MOM+NEAR Total = " + Round(Momentum + NearT,1), Color.PINK); AddCloud (NearT, MidLine , color. green, color. red);
# end
Comment:The following code plots when a cluster exists in the above code. A cluster is when all three plots are either above OB (80) or below OS (20). Clusters are powerful points for buy/sell decisions.
#Hint: <b>Plots when the market forecast high or low clusters are true.</b>\n When used as a scan, <b>EITHER</b> 'Plot Cluster_Hi' or 'Plot Cluster_Lo' need to be commented-out with #. When used as a plot the day agg is most meaningful #Title = Cluster_TMF
declare lower;
def c1I = close - lowest(low,31);
def c2I = highest(high,31) - lowest(low,31);
def FastK_I = c1I / c2I * 100;
def c1N = close - lowest(low,3);
def c2N = highest(high,3) - lowest(low,3);
def FastK_N = c1N / c2N * 100;
def Intermediate = Average(FastK_I, 5);
def NearTerm = Average(FastK_N, 2);
def Momentum = reference marketforecast.Momentum;
def ClusterHigh = Intermediate>=80 && NearTerm>=80 && Momentum>=80 ;
def ClusterLow = Intermediate<=20 && NearTerm<=20 && Momentum<=20;
#===== When used as a study plot, all four lines below are active ========#
#===== When used as a scan, two of the four lines below are commented out depending on the scan desired =======# Plot Cluster_Hi = if clusterhigh then 1 else 0;
Cluster_Hi.SetDefaultColor(Color.CYAN);
plot Cluster_Lo = if clusterlow then 1 else 0;
Cluster_Lo.SetDefaultColor(Color.PINK);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 100
AddLabel(yes, "High Cluster above 80", color.CYAN); AddLabel(yes, "Low Cluster below 20", color.PINK); # end
C-DRAW A LINE BETWEEN TWO PRICE POINTS
[TOC Return](#toc)


#Hint: Draws a line between to points defined by dates, times and price type Developed by RCG3 and StanL on the ThinkScript Lounge 1/2/14
input time1 = 1000;#hint time1:Time of first point using the 24-hour clock
input date1 = 20140102;#hint date1:Date of the first point in YYYYMMDD format input time2 = 1300;#hint time2: Time of second point using the 24-hour clock
input date2 = 20140102;#hint date2: Date of the first point in YYYYMMDD format input price = high;#hint price: Select the price type desired
#====== To see dots on the inputted dates/times change the def below for
# ===== 'asdf' and 'asdf2' to plot and uncomment the setpaintingstrategy ===== def asdf= secondsfromtime(time1) == 0; #asdf.setpaintingstrategy(paintingstrategy.boolean_points);
def asdf2= secondsfromtime(time2) == 0; #asdf2.setpaintingstrategy(paintingstrategy.boolean_points);
def date= getyyyymmdd();
rec x1= if secondsfromtime(time1) == 0 and date1==date then barnumber() else x1[1]; rec x2= if secondsfromtime(time2) == 0 and date2==date then barnumber() else x2[1];
rec y1= if secondsfromtime(time1) == 0 and date1==date then price else y1[1]; rec y2= if secondsfromtime(time2) == 0 and date2==date then price else y2[1];
def x22= highestall(x2);
def y22= highestall(y2);
def slope= (y22-y1)/(x22-x1);
#plot line= if x1!=0 then y1+((barnumber()-x1)*slope) else double.nan;
plot line= if x1!=0 and x2[1]==0 then y1+((barnumber()-x1)*slope) else double.nan;
def Angle_deg = ATan(slope) * 180 / Double.Pi;
#addLabel(yes, "Slope = " + Angle_deg + "degrees", color.CYAN);#Angle printout has no consistency at various aggs #alert(price crosses line, "Price crossed trendline", alert.once,sound.chimes);# uncomment this line if used as a trendline #end
C-VOLUME LABEL AS A PERCENT OF AN INPUTTED X-DAYS-AVGVOLUME
[TOC Return](#toc)


#hint:Shows a label stating the current day's volume as a percent of an inputted X-days-AvgVolume declare upper;
input Days = 30;#hint Days:The number-of-days average volume that is compared to today's volume
def AvgVol = RoundUp( Average(volume (period = AggregationPeriod.DAY), Days)); def TodaysVol = volume(period = ”DAY”);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 101 def Percent = TodaysVol / AvgVol;#not a true % but is a ratio
def dayOpen = open(period = AggregationPeriod.DAY); def curClose = close(period = AggregationPeriod.DAY);
#AddLabel(1, "Vol is " + aspercent(Percent) + " of " + Days + "-day-AvgVol", if Percent < .80 then Color.LIGHT_GRAY else Color.GREEN);#This is an optional label
AddLabel(1, "Vol is " + aspercent(Percent) + " of " + Days + "-day-AvgVol", if Percent <= .70 AND ( dayOpen < curClose or dayOpen > curClose ) then Color.LIGHT_GRAY else if (.80 >= Percent > .70) AND ( dayOpen < curClose or dayOpen > curClose ) then Color.YELLOW else if Percent > .80 AND dayOpen < curClose then Color.Green else if Percent > .80 AND dayOpen > curClose then Color.red else Color.WHITE );
#AddLabel(1,aspercent(Percent),if Percent <= .70 AND ( dayOpen < curClose or dayOpen > curClose ) then Color.LIGHT_GRAY else if (.80 >= Percent > .70) AND ( dayOpen < curClose or dayOpen > curClose ) then Color.YELLOW else if Percent > .80 AND dayOpen < curClose then Color.Green else if Percent > .80 AND dayOpen > curClose then Color.red else Color.WHITE );# This label may be used in a custom column
# end
Comment1: This has all the ingredients for a custom column except the label text is too verbose for a column. The lower label is suitable for a custom column
C-SHOWS WHEN A DIVERGENCE EXISTS BETWEEN PRICE AND THE MACD. USED IN A WLC.
[TOC Return](#toc)


#hint:Looks for and indicates positive (price rising) and negative (price declining) divergences of price and the MACD Input Bars = 3;#Hint Bars:The number of bars in the pattern to evaluate
def mcdv = MACD();
def MACD_rising = sum(mcdv > mcdv[1],bars) == bars;#True if MACD is rising for the last number-of-bars (Bars) def price_rising = sum(close > close[1],bars) == bars;#True if close is rising for the last number-of-bars (Bars)
def MACD_falling = sum(mcdv < mcdv[1],bars) == bars;#True if MACD is falling for the last number-of-bars (Bars) def price_falling = sum(close < close[1],bars) == bars;#True if close is falling for the last number-of-bars (Bars) def pos_div = price_rising && MACD_falling;
def neg_div = price_falling && MACD_rising;
AddLabel(1, if pos_div then "pos" else if neg_div then "neg" else "none", if pos_div == 1 then color.green else if neg_div == 1 then color.red else color.pink );
AssignBackgroundColor(if pos_div then color.dark_green
else if neg_div then
color.dark_RED
else color.current);#Divergence with MACD rising & price falling is RED. The opposite is GREEN. Neither is the normal color.
# =====to prove out the code or to use this as astudy, plot the below
# and evaluate that the conditions and results are correct ========
plot Positive = pos_div;# A CYAN value of 'one' plots where true exists Plot Negative = neg_div;# A PINK value of 'one' plots where true exists #==================================================================

TOS & THINKSCRIPT SNIPPET COLLECTION Page 102 T-SEQUENCECOUNTER AND GRID UASGE
[TOC Return](#toc)


The use of the TOS 'SequenceCounter', for intra-day trading, has an advantage when the count can be viewed ot multiple aggregations simultaneously. This can be done by setting up a grid of 4 components, as an example. The below picture illustrates doing this. Also configure the chart to synchronize the cursor across all grid charts via Chart settings/general tab/Synchronize crosshair position. A tick chart seems to present a neat plot. Regular grids is suggested in lieu of flexible grids. A picture of the setup is shown below:
   Comment: The Sequence Counter is used as an example and is not a recommended indicator: reviews are not in unison. T,C-!6 EXAMPLES OF THE USAGE OF THE 'SUM' FUNCTION
[TOC Return](#toc)


The SUM function has some versatile usage as illustrated in the coding examples below.
Def Example1 = sum(low > Average(close, 21), 5) == 5;# Is true when the 21-bar-average-of-the-close exists (is true) for the last 5 consecutive bars.
def Example2 = Sum(MACDHistogramCrossover(), 8) ;#This plots the count of "Positive to Negative" crosses in the last 8 bars including the current bar.
The MACDHistogramCrossover() has a choice of "Positive to Negative" or "Negative to Positive". Using a reference without parameters specified, TS will use the default which is "Positive to Negative".
def Example2A = Sum(MACDHistogramCrossover(crossingType = "Negative to Positive"), 8) ;#This plots the count of "Negative to Positive" crosses in the last 8 bars including the current bar.
To change the above to a condition use:
def Example3 = Sum(MACDHistogramCrossover(), 8) >= 2;#If the count of "Positive to Negative" crosses in the last 8 bars is greater than or equal to 2, then Example3 evaluates to 'true' (or 1). Otherwise it is false (0).

TOS & THINKSCRIPT SNIPPET COLLECTION Page 103
Def Example4 = sum(close > close[1],5) >= 5;#Is true when the close has been rising (trending up) for the last 5 bars
Example 5: Uses sum to look for a divergence. Can be useful in a custom watchlist column. Here the MACD average is going up while the MACD itself is going down for the number of 'Bars'.
Input Bars = 3;
def macdAvg = MACD().Avg;
def macdValue = MACD();
def div = sum( macdAvg > macdAvg[1],Bars) == Bars ;#True if rising for the last 'Bars' bars
def div2 = sum( macdValue < macdValue[1],Bars) == Bars;#True if falling for the last 'Bars' bars plot scan = div and div2;
Def Example6 = sum(close < close[1],5) == 5;# The has declined for the last 5 bars
Example 7 = A more flexible code having selectable price, length and direction (Choice). input price = close;
input length = 3;
input Choice = {default "increased", "decreased"};
plot scan;
switch (Choice){ case "increased":
scan = sum(price > price[1], length) == length; case "decreased":
scan = sum(price < price[1], length) == length; }
Comment: If the above code was in a saved study named 'MyPriceTrend', you would run it by entering the following code in the custom scan location. This procedure is applicable for all saved custom studies.
Plot scan = reference MypriceTrend(Price = hlc3, length = 7, choice = "increased");
Note that 'hlc3' may be any parameter such as open, hugh, low, hl2, volume, etc. Be sure to set the time aggregation you desired i.e. 5 min, hour, day, etc.
Def Example8: The following code is used to scan for stocks having future earnings.
Input length = 10;#Hint length:The number of future/ahead agg-bars to look in
def earnings = hasearnings();#When true this evaluates to one which then appears in the following 'sum'
plot scan = sum(earnings,length)[-length +1] > 0;# Will return all stocks having earnings within the next 10 days.
Def Example 9
#hint: <b>Market Sentiment</b>\nThe Market Sentiment study is a popular study on Prophet Charts. declare lower;
input period1 = 51;
input period2 = 47;
input RoundingValue = 4;
def LowLow = Lowest(low, period1);
def Close_LowLow_Diff = close - LowLow;
def Hi_Hi = Highest(high, period2);
def HH_LL_Diff = Hi_Hi - LowLow;
def numerator = Sum(Close_LowLow_Diff, period2);
def denominator = Sum(HH_LL_Diff, period1);
plot MarketSentiment = round(100* (numerator/denominator), RoundingValue); marketsentiment.setDefaultColor(color.yellow);

TOS & THINKSCRIPT SNIPPET COLLECTION Page 104
Example 10 #hint:High correlation scan
input length = 10;#hint length: the agg-bar length being compared
input correlationWithSecurity = "SPX";#hint correlationWithSecurity; The security that the stock is correlated with input inarow = 10;#hint inarow:The number of agg-bars in a row with >0.9 correlation
def x = Correlation(close, close(correlationWithSecurity), length) > =.9;#greater then 0.9 indicates a high correlation plot scan = sum(x, inarow) >= inarow;# Returns stocks twhose 10-bar-close have a greater than or equal to .9 correlation with SPX for the last 10 (inarow) bars.
Example 11 #hint: Uses the DMI to scan the up-trending ADX def length = 5;# The numbers of agg-bars DMI is climbing def x =DMI_Oscillator();
def up = x > x[1];
Plot Scan = x > 10 && sum(up,length) >= length;# This returns stocks whose DMI_Oscillator value is greater than +10 and has been up for the last 5 bars. The DMI is the driving force behind the ADX, so this is equivalent to the bullish ADX trending up for the last 5 bars.
Example 12 # by Pacodeveux in Mr. Script show #hint:Fast, med, slow true range osc
declare lower;
input fastLength = 7;
input medLength = 14; input slowLength = 28; input FactorFast = 4; input FactorMed = 2; input FactorSlow = 1;
def trRng = TrueRange(high, close, low); def trRngFast = sum(trRng, fastLength); def trRngMed = sum(trRng, medLength); def trRngSlow = sum(trRng, slowLength);
def diff = close - Min(close[1], low);
def diffFast = sum(diff, fastLength); def diffMed = sum(diff, medLength); def diffSlow = sum(diff, slowLength);
def valFast = (diffFast / trRngFast) * factorFast; def valMed = (diffMed / trRngMed) * factorMed; def valSlow = (diffSlow / trRngSlow) * FactorSlow; Plot midLine = 0.5;
midLine.SetLineWeight(2);
midLine.SetDefaultColor(Color.yellow);
plot UltOsc = if trRngFast == 0 or trRngMed == 0 or trRngSlow == 0 then 0 else (valFast + valMed + valSlow) / (factorFast + factorMed + 1); UltOsc.SetDefaultColor(GetColor(1));
AddLabel(1,”Fast-Med-Slow True Range Oscillator”, color.white);
#End

TOS & THINKSCRIPT SNIPPET COLLECTION Page 105
Example 13 #hint:Projection bands are narrowing for 5 bars def pro = projectionBands();
def prol = ProjectionBands().MinBound;
def cond = pro - prol < pro[1] - prol[1];
plot scan = sum(cond,5) >= 5;# Returns stocks whose projrction bands have been narrowing for the last 5 bars
Example 14 # Hint: Plots consecutive higher-highs AND lower-lows
input price = close;
input number = 3;#hint number: Arrows are plotted after this number of consecutives are observed
def hi = high;
def lo = low;
def higher = if hi > hi[1] then hi else higher[1]; def lower = if lo < lo[1] then lo else lower[1];
plot h = higher; h.SetLineWeight(1); h.SetDefaultColor(Color.cyan); plot l =lower; l.SetLineWeight(1); l.SetDefaultColor(Color.pink); def hig = higher > higher[1]; def lowe = lower < lower[1];
plot x = sum(hig,number) >= number;# Plots an arrow down when a higher high exists for 3 (number) bars. x.setPaintingStrategy(paintingStrategy.BOOLEAN_ARROW_DOWN);
x.SetLineWeight(1);
x.SetDefaultColor(Color.White);
plot y = sum(lowe,number) >= number;# Plots an arrow up when a lower low exists for 3 (number) bars. y.setPaintingStrategy(paintingStrategy.BOOLEAN_ARROW_UP);
y.SetLineWeight(1);
y.SetDefaultColor(Color.yellow);
AddLabel(1,"Plot of highs", color.cyan); AddLabel(1,"Plot of lows", color.pink);
AddLabel(1,"Plot arrows of higher-highs", color.white); AddLabel(1,"Plot arrows of lower-lows", color.yellow);
Example 15 #Scan for stocks with the consecutive number of higher-highs(plot scan1) or lower-lows (plot scan2) input price = close;
input number = 7;#hint number: The number of consecutive bars
def hi = high;
def lo = low;
def higher = if hi > hi[1] then hi else higher[1]; def lower = if lo < lo[1] then lo else lower[1]; def hig = higher > higher[1];
def lowe = lower < lower[1];
plot scan1 = sum(hig,number) >= number;#returns stocks that have a higher high for the last 7 (number) bars #plot scan2 = sum(lowe,number) >= number;#returns stocks that have a lower low for the last 7 (number) bars

TOS & THINKSCRIPT SNIPPET COLLECTION Page 106
Example 16 #HINT: scan filter that searches for up-trending symbols
def trenup = IsAscending(close,20);#Close has been rising for 20 bars
def trenup2 = sum(close > close[1],5) >= 5;#Close has risen for the last 5 bars plot scan = trenup AND trenup2;
NEXT ITEM TO BE ADDED
[TOC Return](#toc)


x
NEXT ITEM TO BE ADDED
[TOC Return](#toc)


x

TOS & THINKSCRIPT SNIPPET COLLECTION Page 107
1. The learning center is a valuable excellent resource: http://tlc.thinkorswim.com/center.html?
utm_source=thinkorswim&utm_medium=tosred&utm_campaign=HelpPage
2. TOS' Tools tab/MyTrade is used by many to post useful code. It is recommended that you learn the locations of those posters to access their code listings. The author of this document has code resources posted at http://www.mytrade.com/StanL in a browser format or within TOS via TOOLS/MYTRADE/PEOPLE TAB and search for 'StanL'. MyTrade also has postings by people wishing to discuss various trades. Any TOS user is eligible to establish a MyTrade page.
3. http://finance.groups.yahoo.com/group/TOS_thinkscript/ has been a popular location for help and posting of ThinkScript code. It is a free site. It has been active since 2008.
4. The site http://www.thinkscripter.com/ has subscriber and non-subscriber code by very capable coders.
5. The ThinkOrSwim Resource Center is invaluable to all TS coders....
http://tda.thinkorswim.com/manual/metal/thinkscript/
6. The Thinkscript Lounge presents an after-market show on Tuesday. The show, called Mr. Script, provides invaluable code examples and discussions. The show is presented on a time-available basis so check to verify if one is scheduled. This show is very useful, informative and educational for anyone involved in ThinkScript coding.
7. A popular PDF reader for this document is available at http://helpx.adobe.com/reader.html
 REFERENCES
[TOC Return](#toc)


         END OF DOCUMENT
