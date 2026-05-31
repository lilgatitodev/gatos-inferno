// this wasnt working in dms so i asked chatgpt to fix it and it changed the ENTIRE thing but it worked so i js dont touch it now yeah


const {
  REST,
  Routes,
  SlashCommandBuilder,
  InteractionContextType,
  ApplicationIntegrationType,
} = require('discord.js');
require('dotenv').config();

const dmCapable = (cmd) =>
  cmd
    .setDMPermission(true)
    .setContexts(
      InteractionContextType.Guild,
      InteractionContextType.BotDM,
      InteractionContextType.PrivateChannel
    )
    .setIntegrationTypes(
      ApplicationIntegrationType.GuildInstall,
      ApplicationIntegrationType.UserInstall
    );

const commands = [
  dmCapable(
    new SlashCommandBuilder()
      .setName('credit')
      .setDescription('Frame a user for raiding the server')
      .addStringOption(opt =>
        opt.setName('servername')
          .setDescription('Name of the server')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('target')
          .setDescription('User to credit the raid to')
          .setRequired(true))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('threadspam')
      .setDescription('Spam threads with a selfbot')
      .addStringOption(opt =>
        opt.setName('token')
          .setDescription('User token of the account to use')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('channelid')
          .setDescription('Channel to thread spam')
          .setRequired(true))
      .addIntegerOption(opt =>
        opt.setName('amount')
          .setDescription('Amount of threads (1-25)')
          .setRequired(true))
      .addIntegerOption(opt =>
        opt.setName('delay')
          .setDescription('Delay between thread creation (500-10000)')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('message')
          .setDescription('What to name the threads')
          .setRequired(true))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('servernuke')
      .setDescription('Full nuke a server')
      .addStringOption(opt =>
        opt.setName('bottoken')
          .setDescription('Your bot token')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('serverid')
          .setDescription('The ID of the server to nuke (your bot has to have admin in it)')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('servername')
          .setDescription('Server name to rename to')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('channelname')
          .setDescription('Name for the channels that will be spam created')
          .setRequired(true))
      .addIntegerOption(opt =>
        opt.setName('channelamount')
          .setDescription('Number of channels to create (1–500)')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('message')
          .setDescription('Message to spam in each channel')
          .setRequired(true))
      .addIntegerOption(opt =>
        opt.setName('messageamount')
          .setDescription('Number of messages to spam in each channel per cycle (1-50)')
          .setRequired(true))
      .addIntegerOption(opt =>
        opt.setName('messageloop')
          .setDescription('Number of bulk spam cycles (1-10)')
          .setRequired(true))
      .addBooleanOption(opt =>
        opt.setName('banall')
          .setDescription('Ban all members?')
          .setRequired(true))
      .addBooleanOption(opt =>
        opt.setName('kickall')
          .setDescription('Kick all members?')
          .setRequired(true))
      .addBooleanOption(opt =>
        opt.setName('muteall')
          .setDescription('Mute all members for a week?')
          .setRequired(true))
      .addBooleanOption(opt =>
        opt.setName('lockdown')
          .setDescription("Disable 'Send Messages' permission for @everyone")
          .setRequired(true))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('ghostping')
      .setDescription('Ghostping someone 5 times')
      .addStringOption(opt =>
        opt.setName('target')
          .setDescription('mf to ping')
          .setRequired(true))
      .addIntegerOption(opt =>
        opt.setName('delay')
          .setDescription('Delay before each message is deleted')
          .setRequired(false))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('promotext')
      .setDescription('Send our promo text')
      .addBooleanOption(opt =>
        opt.setName('ephemeral')
          .setDescription('Whether the response should be ephemeral')
          .setRequired(false))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('webhookspam')
      .setDescription('Spam a webhook')
      .addStringOption(opt =>
        opt.setName('webhook-url')
          .setDescription('The Discord webhook URL')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('msg')
          .setDescription('The message to send')
          .setRequired(true))
      .addIntegerOption(opt =>
        opt.setName('amount')
          .setDescription('How many messages to send (1–999)')
          .setRequired(false)
          .setMinValue(1)
          .setMaxValue(999))
      .addStringOption(opt =>
        opt.setName('name')
          .setDescription('Custom webhook username')
          .setRequired(false))
      .addStringOption(opt =>
        opt.setName('pfp-image-link')
          .setDescription('Custom webhook profile picture (image URL)')
          .setRequired(false))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('idlookup')
      .setDescription('User ID information lookup')
      .addStringOption(opt =>
        opt.setName('id')
          .setDescription('The Discord user ID to look up')
          .setRequired(true))
      .addBooleanOption(opt =>
        opt.setName('ephemeral')
          .setDescription('Whether the response should be ephemeral (default true)')
          .setRequired(false))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('maskurl')
      .setDescription('Mask a URL as another one')
      .addStringOption(opt =>
        opt.setName('url')
          .setDescription('URL to shorten')
          .setRequired(true))
      .addStringOption(opt =>
        opt.setName('maskurl')
          .setDescription('Mask URL (optional)')
          .setRequired(false))
      .addBooleanOption(opt =>
        opt.setName('ephemeral')
          .setDescription('Whether the reply should be ephemeral (default: true)')
          .setRequired(false))
      .addStringOption(opt =>
        opt.setName('maskurl-method')
          .setDescription('Method to generate masked URL')
          .setRequired(false)
          .addChoices(
            { name: 'Email', value: 'Email' },
            { name: 'CustomSuffix', value: 'CustomSuffix' }
          ))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('ipinfo')
      .setDescription('Get information about an IP address')
      .addStringOption(opt =>
        opt.setName('ip')
          .setDescription('The IP address to lookup')
          .setRequired(false))
      .addBooleanOption(opt =>
        opt.setName('ephemeral')
          .setDescription('Should the response be ephemeral (default: yes)')
          .setRequired(false))
  ),

  dmCapable(new SlashCommandBuilder().setName('shitspam').setDescription('Spam 5 random shitpost gifs/vids')),
  dmCapable(new SlashCommandBuilder().setName('shitspam-clean').setDescription('Spam 5 random shitpost gifs/vids [NO NUDITY]')),
  dmCapable(new SlashCommandBuilder().setName('promospam').setDescription('Spam 5 random promo gifs/vids')),
  dmCapable(new SlashCommandBuilder().setName('tsarbomba').setDescription('Fast unicode flood')),
  dmCapable(new SlashCommandBuilder().setName('blankflood').setDescription('Fast blankspace flood, makes chat look empty')),

  dmCapable(
    new SlashCommandBuilder()
      .setName('spam')
      .setDescription('Main spam command')
      .addStringOption(opt =>
        opt.setName('msg')
          .setDescription('Message to spam')
          .setRequired(false))
      .addIntegerOption(opt =>
        opt.setName('amount')
          .setDescription('How many times to send it (1-5)')
          .setRequired(false))
      .addIntegerOption(opt =>
        opt.setName('delay')
          .setDescription('Delay in ms between messages')
          .setRequired(false))
      .addStringOption(opt =>
        opt.setName('special')
          .setDescription('Special formatting for spam')
          .addChoices(
            { name: 'off', value: 'off' },
            { name: 'RandomUnicode', value: 'RandomUnicode' },
            { name: 'LongUnicode', value: 'LongUnicode' },
            { name: 'MessageRepeat', value: 'MessageRepeat' },
            { name: 'ShitSpam', value: 'ShitSpam' },
            { name: 'ShitSpam-Clean', value: 'ShitSpam-Clean' },
            { name: 'PromoSpam', value: 'PromoSpam' }
          )
          .setRequired(false))
      .addIntegerOption(opt =>
        opt.setName('length')
          .setDescription('Length for the special format (characters or number of GIFs for GIF specials)')
          .setRequired(false))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('access')
      .setDescription('admin')
      .addSubcommand(sub => sub.setName('list').setDescription('admin'))
      .addSubcommand(sub =>
        sub.setName('add')
          .setDescription('admin')
          .addStringOption(opt =>
            opt.setName('userid')
              .setDescription('admin')
              .setRequired(true)))
      .addSubcommand(sub =>
        sub.setName('remove')
          .setDescription('admin')
          .addStringOption(opt =>
            opt.setName('userid')
              .setDescription('admin')
              .setRequired(true)))
      .addSubcommand(sub =>
        sub.setName('check')
          .setDescription('admin')
          .addStringOption(opt =>
            opt.setName('userid')
              .setDescription('admin')
              .setRequired(true)))
  ),

  dmCapable(
    new SlashCommandBuilder()
      .setName('help')
      .setDescription('Shows help for user commands')
  ),
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log('registering commands...');
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log('commands registered.');
  } catch (error) {
    console.error('error:', error);
  }
})();
