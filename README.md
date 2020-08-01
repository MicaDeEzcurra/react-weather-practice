Mica's README:

-   Emotion is a library designed for writing css styles with JavaScript.
    npm i @emotion/styled @emotion/core

LOGICS

Hot Color Logic:

-   Hot weather is from 12 to 40 degrees:
    . Different hues of red:
    => (R,G,B)
    R=255
    G=variable (what defines the gradient of red, see color picker)
    B=0

          temperature: from 12 to 40
          G: varies from 255 to 0

ex. w/ max & min:
t = 40
ratio = 1- (t-12) / (40-12)
ratio = 1-1 = 0
variable = ratio \* 255 = 0

    t = 12
    ratio = 1- (t-12) / (40-12)
    ratio = 1-0 = 1
    variable = ratio * 255 = 255

Cold Color Logic:

-   Cold weather is from -20 to 12 degrees
    . Different hues of blue:
    => (R,G,B)
    R=0
    G=variable (what defines the gradient of red, see color picker)
    B=255

          temperature: from -20 to 12
          G: varies from 255 to 0

ex. w/ max & min:
t = 12
ratio = 1- (t-(-20)) / (12-(-20))
ratio = 1-1 = 0
variable = ratio \* 255 = 0

    t = -20
    ratio = 1- (t-(-20)) / (12-(-20))
    ratio = 1-0 = 1
    variable = ratio * 255 = 255
