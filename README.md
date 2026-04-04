# gatos inferno

## DISCLAIMER:
if you plan on reading or editing the code good luck it genuinley is bad like thats all i can say

## the story
one fateful day, gato wanted to raid people with no admin so he set out to find bots to do that

he found insomnia! but it sucked and pushed its stupid fucking branding in each raid

but then he found hidden!! same issue and spammed some skid ass gifs and king gato cant be asscociated with that ykyk

and there was no more bots for gato to find...
so he decided that there was only one solution to his issue - make his own, and that is how gatos inferno was born.


## why am i publishing the src
gatos inferno was my first ever public tool and i will never stop loving it like my own child - its userbase grew a lot and brought me a lot of members and my projects a lot of attention, but theres only so much ideas one gato can have for one bot. so im handing it off to you guys; make forks, improve the code, self host it, skid it do whatever you want to it! also open source is cool and shit
p.s: im not gonna stop hosting it tho u can still use my bot find the link on my discord server

## commands
im just gonna put a screenshot of the /help here so idk theres that
(i gave chatgpt the embed json and asked it to make a .md equivilent)


<sub>

## COMMAND: /spam {msg} {amount} {delay} {special} {length}

The main spam command.  
- msg  
The main message you want to spam, if unset will be a random 100 character b64 string.  
- amount  
Amount of messages you want to be sent at a time, max 5 due to discord limit reasons.  
- delay  
Delay (in ms) that you want between messages, defualt 500 however we recommend 3000-4000 for more protected servers.  
- special (**optional**)  
Choose a special format for the messages, RandomUnicode/LongUnicode/MessageRepeat/ShitSpam/ShitSpam-Clean/PromoSpam, the msg field does not have to be filled for this, if unset it will simply spam your message unfiltered through this.  
- length (**optional**)  
If a special format is enabled it will set the length for it, for example MessageRepeat will normally do your message 50 times but with this parameter you can edit it.  


## COMMAND: /credit {servername} {target}

Frame someone for raiding the server.  
- servername  
The name of the server to put in the fake frame message.  
- target  
The target user to frame for raiding.  


## COMMAND: /tsarbomba

Simple and fast unicode flood with no parameters.  


## COMMAND: /blankflood

Floods chat with whitespace unicode, makes chat look empty, no parameters.  


## COMMAND: /shitspam

Spams shitpost gifs and images, contains NSFW.  


## COMMAND: /shitspam-clean

Spams shitpost gifs and images, does NOT contain direct nudity.  


## COMMAND: /promospam

Spams our promotional memes and gifs for Gatos Inferno.  


## COMMAND: /ipinfo {ip} {ephermal}

Uses an API to find info about an ip including geolocation, internet provider and other shit idk.  


## COMMAND: /maskurl {url} {maskurl} {maskurl-method} {ephermal}

Mask a url as another using a link shortener  
- url  
The URL you want to mask  
- maskurl  
The mask you want to use for the URL  
- maskurl-method  
Method to use for masking (Email doesnt work when sent over discord bc its patched)  


## COMMAND: /idlookup {userid} {ephermal}

Retrieves info about a Discord userid  


## COMMAND: /webhookspam {webhook-url} {msg} {amount} {name} {pfp-image-link}

Mask a url as another using a link shortener  
- webhook-url  
URL of the target webhook  
- msg  
The message content to spam in the webhook  
- amount  
Amount of messages to spam (1-999)  
- name  
Webhook message profile name  
- pfp-image-link  
Image address to the profile picture of the webhook messages  


## COMMAND: /servernuke {bottoken} {serverid} {servername} {channelname} {channelamount} {message} {messageamount} {messageloop} {banall?} {kickall?} {muteall?} {lockdown?}

Nuke a server with NO downloads and easy setup, even on mobile - [Video Tutorial](https://www.youtube.com/watch?v=o-a-3BYZfDE)  
- bottoken  
The token of the bot you made for nuking (must have admin in the target server)  
- serverid  
Guild ID of the target server  
- servername  
What name to rename the server to  
- channelname  
What to name the channels that are spam created  
- channelamount  
Amount of channels to spam create (1-500)  
- message  
Message that is spammed in channels  
- messageamount  
Amount of messages to bulkspam per spam cycle (1-15)  
- messageloop  
Amount of spam cycles (1-3)  
- banall  
Wether to attempt banning of all members  
- kickall  
Wether to attempt kicking of all members  
- muteall  
Wether to attempt muting of all members (1 week)  
- lockdown  
Wether to lockdown the server (remove Send Messages permission from all roles)  


## COMMAND: /threadspam {token} {channelid} {amount} {delay} {message}

Use a selfbot to spam threads in channels [DISCLAIMER: Use an alt or you might get banned]  
- token  
The token of the account you want to run the selfbot on  
- channelid  
ID of the channel you want to thread spam  
- amount  
Amount of threads to spam (1-25)  
- delay  
Delay between thread creation (1000-any)  
- message  
What to name the threads  


## COMMAND: /promotext {ephemeral}

Command for our partners - send our PromoText  

</sub>
