const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder().setName("embed").setDescription("show an embed"),
    async execute(client, interaction) {
        const embed = new EmbedBuilder().setTitle("I'm an Embed")
        .setColor('Red')
        .setURL('https://www.youtube.com/watch?v=1pYtVwIAvhY&t=6683s')
        .setAuthor({ name: '123', iconURL: 'https://www.youtube.com/watch?v=YDThCZ_QxVE', url: 'https://www.youtube.com/watch?v=1pYtVwIAvhY&t=6683s' })
        .setDescription('236')
        .setThumbnail('https://www.youtube.com/watch?v=1pYtVwIAvhY&t=6683s')
        .addFields({ name: '456', value: '123', inline: true  })
        .setImage('https://medium.com/pm%E7%9A%84%E7%94%9F%E7%94%A2%E5%8A%9B%E5%B7%A5%E5%85%B7%E7%AE%B1/%E5%A6%82%E4%BD%95%E6%94%BE%E5%A4%A7%E5%9C%96%E7%89%87%E4%BD%86%E4%B8%8D%E5%A4%B1%E7%9C%9F-6add02a1a280')
        .setTimestamp()
        .setFooter({ text: '789', iconURL: 'https://www.youtube.com/watch?v=1pYtVwIAvhY&t=6683s' });;
        interaction.reply({ embeds: [embed] });
    },
};
/*
.setURL('放URL')
.setAuthor({ name: '', iconURL: '放URL', url: '放URL' })
.setDescription('')
.setThumbnail('放URL')
.addFields({ name: '', value: '', inline: true or false })
.setImage('放URL')
.setTimestamp()
.setFooter({ text: '', iconURL: '放URL' });
*/
