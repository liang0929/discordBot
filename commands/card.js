const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("card")
        .setDescription("計算出兩人的牌誰比較大")
        .addNumberOption((option) =>
            option.setName("長_利奧拉").setDescription("輸入利奧拉的牌有多長").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("寬_利奧拉").setDescription("輸入利奧拉的牌有多寬").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("長_史考特").setDescription("輸入史考特的牌有多長").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("寬_史考特").setDescription("輸入史考特的牌有多寬").setRequired(true),
        ),
    async execute(client, interaction) {
        let a = interaction.options.getNumber("長_利奧拉"); // 已經幫你們宣告好變數了，這裡不需要改
        let b = interaction.options.getNumber("寬_利奧拉"); // 已經幫你們宣告好變數了，這裡不需要改
        let c = interaction.options.getNumber("長_史考特"); // 已經幫你們宣告好變數了，這裡不需要改
        let d = interaction.options.getNumber("寬_史考特"); // 已經幫你們宣告好變數了，這裡不需要改
        let bmi = a - b * b; // 公式好像怪怪的，應該要如何更改呢?
        await interaction.reply(`${bmi}`);
    },
};
