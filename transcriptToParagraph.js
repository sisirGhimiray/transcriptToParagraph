const transcriptToParagraph=function(str){
let i,j=0;
let removeLine=str.split("\n");
let joinAllString=[]
for( i=0;i<removeLine.length;i++){
  if(Number(removeLine[i][0])==0||Number(removeLine[i][0])>0){
   continue
  }else{
    joinAllString[j++]=removeLine[i];
  }
}
return joinAllString.join(" ")
}

const noteBook=document.querySelector(".note-book");
noteBook.textContent=transcriptToParagraph(`so today's tutorials about finding
0:02
locations on the screen so X&Y
0:05
coordinates somewhere on the screen in
0:07
response to events when a user taps on
0:09
something or clicks on something there's
0:12
times when you're gonna need to know
0:13
where exactly the person clicked whether
0:17
you're building an animation and
0:18
building interactivity into an html5
0:20
canvas or you want to determine what
0:23
part of an image was clicked on or if
0:24
you need to know which button was
0:26
clicked on within a space we can use a
0:29
variety of properties to try and
0:31
determine where exactly this happened so
0:35
client X page X screen X and offset X
0:38
these are four different properties that
0:40
give different pieces of information
0:42
about this so I've built a very simple
0:45
page here with a main element inside the
0:50
body with some lorem ipsum text that's
0:52
all there is to this I put some padding
0:54
and margin on it to keep it away from
0:55
the edges of the screen that's
0:58
intentional and then here's the whole
1:01
script so I'm just waiting for Dom
1:04
content loaded I'm adding a click
1:05
listener into my main element and I want
1:08
to know where inside this main element
1:10
the person is clicking so when asking
1:12
that question I need to determine okay
1:14
am i asking how far away from the edge
1:17
of the main element am i talking about
1:19
am i talking about how far away from the
1:21
edge of the body element the edge of the
1:22
page the edge of my screen on my
1:25
computer so these properties are going
1:28
to give us that information let's jump
1:30
over to the browser here and here's my
1:37
element I'm going to click somewhere in
1:39
the middle here
1:40
there we go and now here are my four
1:43
dimensions my four locations now these
1:46
are all the X properties there are also
1:48
y ones as well there's a client Y page Y
1:51
screen y offset Y so I clicked inside of
1:55
here my client X and page X these are
2:00
actually at the top right now they're
2:02
giving me the same information away from
2:05
the edge
2:06
of the body right here the edge of the
2:08
screen I am 383 pixels away from that
2:12
the screen X means my whole screen so
2:17
everything was being recorded right now
2:18
away from the edge way over here from
2:21
this point all the way over to where I
2:22
clicked that was 539 pixels so there's a
2:27
difference there and offset X is inside
2:31
of this element so it's the same as
2:33
client X subtracting this distance
2:37
outside of the element so we've got
2:39
offset X inside the element
2:41
we've got client X and page X outside of
2:44
here and then screen X goes all the way
2:47
out to here so what's the difference
2:49
with client and page X those are the two
2:51
that are the same well when you have
2:53
content that exceeds the width or that
2:56
exceeds the height of the page that's
2:58
when you're gonna see a difference
2:59
between client X and paycheques page X
3:03
is going to measure from the beginning
3:05
of the page so from the left edge or
3:06
from the top edge of the screen of the
3:09
page itself so measuring down from there
3:12
and if the page Scrolls it's still
3:14
measuring from the top here and then
3:16
client X is the visible area on the page
3:19
so if I was to scroll to the left or the
3:22
right or scroll up or down it's inside
3:26
the visible area how many pixels am i
3:29
away from the left edge or the top edge
3:31
so that's the client X and the client
3:33
wine all right so that's it those are
3:35
the four properties and there Y partners
3:38
and that's how they work if you have any
3:41
questions feel free to leave them in the
3:42
comments down below I will leave a copy
3:44
of the code just so you can copy and
3:46
paste the few things that were there as
3:48
a link in a code just inside the
3:50
description and as always thanks for
3:53
watching`);

console.log(transcriptToParagraph(`so today's tutorials about finding
0:02
locations on the screen so X&Y
0:05
coordinates somewhere on the screen in
0:07
response to events when a user taps on
0:09
something or clicks on something there's
0:12
times when you're gonna need to know
0:13
where exactly the person clicked whether
0:17
you're building an animation and
0:18
building interactivity into an html5
0:20
canvas or you want to determine what
0:23
part of an image was clicked on or if
0:24
you need to know which button was
0:26
clicked on within a space we can use a
0:29
variety of properties to try and
0:31
determine where exactly this happened so
0:35
client X page X screen X and offset X
0:38
these are four different properties that
0:40
give different pieces of information
0:42
about this so I've built a very simple
0:45
page here with a main element inside the
0:50
body with some lorem ipsum text that's
0:52
all there is to this I put some padding
0:54
and margin on it to keep it away from
0:55
the edges of the screen that's
0:58
intentional and then here's the whole
1:01
script so I'm just waiting for Dom
1:04
content loaded I'm adding a click
1:05
listener into my main element and I want
1:08
to know where inside this main element
1:10
the person is clicking so when asking
1:12
that question I need to determine okay
1:14
am i asking how far away from the edge
1:17
of the main element am i talking about
1:19
am i talking about how far away from the
1:21
edge of the body element the edge of the
1:22
page the edge of my screen on my
1:25
computer so these properties are going
1:28
to give us that information let's jump
1:30
over to the browser here and here's my
1:37
element I'm going to click somewhere in
1:39
the middle here
1:40
there we go and now here are my four
1:43
dimensions my four locations now these
1:46
are all the X properties there are also
1:48
y ones as well there's a client Y page Y
1:51
screen y offset Y so I clicked inside of
1:55
here my client X and page X these are
2:00
actually at the top right now they're
2:02
giving me the same information away from
2:05
the edge
2:06
of the body right here the edge of the
2:08
screen I am 383 pixels away from that
2:12
the screen X means my whole screen so
2:17
everything was being recorded right now
2:18
away from the edge way over here from
2:21
this point all the way over to where I
2:22
clicked that was 539 pixels so there's a
2:27
difference there and offset X is inside
2:31
of this element so it's the same as
2:33
client X subtracting this distance
2:37
outside of the element so we've got
2:39
offset X inside the element
2:41
we've got client X and page X outside of
2:44
here and then screen X goes all the way
2:47
out to here so what's the difference
2:49
with client and page X those are the two
2:51
that are the same well when you have
2:53
content that exceeds the width or that
2:56
exceeds the height of the page that's
2:58
when you're gonna see a difference
2:59
between client X and paycheques page X
3:03
is going to measure from the beginning
3:05
of the page so from the left edge or
3:06
from the top edge of the screen of the
3:09
page itself so measuring down from there
3:12
and if the page Scrolls it's still
3:14
measuring from the top here and then
3:16
client X is the visible area on the page
3:19
so if I was to scroll to the left or the
3:22
right or scroll up or down it's inside
3:26
the visible area how many pixels am i
3:29
away from the left edge or the top edge
3:31
so that's the client X and the client
3:33
wine all right so that's it those are
3:35
the four properties and there Y partners
3:38
and that's how they work if you have any
3:41
questions feel free to leave them in the
3:42
comments down below I will leave a copy
3:44
of the code just so you can copy and
3:46
paste the few things that were there as
3:48
a link in a code just inside the
3:50
description and as always thanks for
3:53
watching`));