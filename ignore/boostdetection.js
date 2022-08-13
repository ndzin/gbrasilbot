const client = require('discord.js');
const Discord = require('discord.js');
const dotenv = require('dotenv');
const { EmbedBuilder } = require('discord.js');
const { ActivityType } = require('discord.js');
const { Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const wait = require('node:timers/promises').setTimeout;
const { ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { retry } = require('rxjs');
require('dotenv').config();



module.exports = {
	name: 'guildMemberUpdate',
    once: true,
	execute(oldMember, newMember) {
            const oldStatus = oldMember.premium_since;
            const newStatus = newMember.premium_since;
            const channel = client.DMChannel.cache.get('994744835183480990');
            if(!oldStatus && newStatus) {
                
                channel.send(`${newMember.user.tag} deu boost no servidor!`)
            }
            if (oldStatus && !newStatus) {

                channel.send(`${newMember.user.tag} parou de dar boost no servidor!`)
            }
	    
    }
    }

