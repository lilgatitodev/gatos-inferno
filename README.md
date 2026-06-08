# gatos inferno

## DISCLAIMER:
if you plan on reading or editing the code good luck it genuinley is bad like thats all i can say

## setup 
[video tut](https://files.catbox.moe/2w3atn.mp4)

## why am i publishing the src
gatos inferno was my first ever public tool and i will never stop loving it like my own child - its userbase grew a lot and brought me a lot of members and my projects a lot of attention, but theres only so much ideas one gato can have for one bot. so im handing it off to you guys; make forks, improve the code, send pull requests, self host it, skid it do whatever you want to it! also open source is cool and shit

p.s: im not gonna stop hosting it u can still use my bot find the link on my discord server

## commands
im just gonna put a screenshot of the /help here so idk theres that
(i gave chatgpt the embed json and asked it to make a .md equivilent)





#### COMMAND: /spam {msg} {amount} {delay} {special} {length}

<sub>The main spam command.</sub>  
- <sub>msg  
The main message you want to spam, if unset will be a random 100 character b64 string.</sub>  
- <sub>amount  
Amount of messages you want to be sent at a time, max 5 due to discord limit reasons.</sub>  
- <sub>delay  
Delay (in ms) that you want between messages, defualt 500 however we recommend 3000-4000 for more protected servers.</sub>  
- <sub>special (**optional**)  
Choose a special format for the messages, RandomUnicode/LongUnicode/MessageRepeat/ShitSpam/ShitSpam-Clean/PromoSpam, the msg field does not have to be filled for this, if unset it will simply spam your message unfiltered through this.</sub>  
- <sub>length (**optional**)  
If a special format is enabled it will set the length for it, for example MessageRepeat will normally do your message 50 times but with this parameter you can edit it.</sub>  


#### COMMAND: /credit {servername} {target}

<sub>Frame someone for raiding the server.</sub>  
- <sub>servername  
The name of the server to put in the fake frame message.</sub>  
- <sub>target  
The target user to frame for raiding.</sub>  


#### COMMAND: /tsarbomba

<sub>Simple and fast unicode flood with no parameters.</sub>  


#### COMMAND: /blankflood

<sub>Floods chat with whitespace unicode, makes chat look empty, no parameters.</sub>  


#### COMMAND: /shitspam

<sub>Spams shitpost gifs and images, contains NSFW.</sub>  


#### COMMAND: /shitspam-clean

<sub>Spams shitpost gifs and images, does NOT contain direct nudity.</sub>  


#### COMMAND: /promospam

<sub>Spams our promotional memes and gifs for Gatos Inferno.</sub>  


#### COMMAND: /ipinfo {ip} {ephermal}

<sub>Uses an API to find info about an ip including geolocation, internet provider and other shit idk.</sub>  


#### COMMAND: /maskurl {url} {maskurl} {maskurl-method} {ephermal}

<sub>Mask a url as another using a link shortener</sub>  
- <sub>url  
The URL you want to mask</sub>  
- <sub>maskurl  
The mask you want to use for the URL</sub>  
- <sub>maskurl-method  
Method to use for masking (Email doesnt work when sent over discord bc its patched)</sub>  


#### COMMAND: /idlookup {userid} {ephermal}

<sub>Retrieves info about a Discord userid</sub>  


#### COMMAND: /webhookspam {webhook-url} {msg} {amount} {name} {pfp-image-link}

<sub>Mask a url as another using a link shortener</sub>  
- <sub>webhook-url  
URL of the target webhook</sub>  
- <sub>msg  
The message content to spam in the webhook</sub>  
- <sub>amount  
Amount of messages to spam (1-999)</sub>  
- <sub>name  
Webhook message profile name</sub>  
- <sub>pfp-image-link  
Image address to the profile picture of the webhook messages</sub>  


#### COMMAND: /servernuke {bottoken} {serverid} {servername} {channelname} {channelamount} {message} {messageamount} {messageloop} {banall?} {kickall?} {muteall?} {lockdown?}

<sub>Nuke a server with NO downloads and easy setup, even on mobile - [Video Tutorial](https://www.youtube.com/watch?v=o-a-3BYZfDE)</sub>  
- <sub>bottoken  
The token of the bot you made for nuking (must have admin in the target server)</sub>  
- <sub>serverid  
Guild ID of the target server</sub>  
- <sub>servername  
What name to rename the server to</sub>  
- <sub>channelname  
What to name the channels that are spam created</sub>  
- <sub>channelamount  
Amount of channels to spam create (1-500)</sub>  
- <sub>message  
Message that is spammed in channels</sub>  
- <sub>messageamount  
Amount of messages to bulkspam per spam cycle (1-15)</sub>  
- <sub>messageloop  
Amount of spam cycles (1-3)</sub>  
- <sub>banall  
Wether to attempt banning of all members</sub>  
- <sub>kickall  
Wether to attempt kicking of all members</sub>  
- <sub>muteall  
Wether to attempt muting of all members (1 week)</sub>  
- <sub>lockdown  
Wether to lockdown the server (remove Send Messages permission from all roles)</sub>  


#### COMMAND: /threadspam {token} {channelid} {amount} {delay} {message}

<sub>Use a selfbot to spam threads in channels [DISCLAIMER: Use an alt or you might get banned]</sub>  
- <sub>token  
The token of the account you want to run the selfbot on</sub>  
- <sub>channelid  
ID of the channel you want to thread spam</sub>  
- <sub>amount  
Amount of threads to spam (1-25)</sub>  
- <sub>delay  
Delay between thread creation (1000-any)</sub>  
- <sub>message  
What to name the threads</sub>  


#### COMMAND: /promotext {ephemeral}

<sub>Command for our partners - send our PromoText</sub>  
