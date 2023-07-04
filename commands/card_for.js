const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("card_for")
        .setDescription("計算出兩人的牌誰比較大")
        .addNumberOption((option) =>
            option.setName("長_史考特").setDescription("輸入史考特的牌有多長").setRequired(true),
        )
        .addNumberOption((option) =>
            option.setName("寬_史考特").setDescription("輸入史考特的牌有多寬").setRequired(true),
        ),
    async execute(client, interaction) {
        const a = [3, 5, 4, 2, 7]; // 這就是利奧拉手上的牌(長)了，為減少你們一個個輸入數據的時間，已經幫你們把利奧拉的牌準備好了
        const b = [5, 8, 9, 7, 3]; // 這就是利奧拉手上的牌(寬)了，為減少你們一個個輸入數據的時間，已經幫你們把利奧拉的牌準備好了
        let c = interaction.options.getNumber("長_史考特"); // 已經幫你們宣告好變數了，這裡不需要改
        let d = interaction.options.getNumber("寬_史考特"); // 已經幫你們宣告好變數了，這裡不需要改
        let  found = 0
        let e = []
        let counter=0
        let reply = ""; // 可以透過更改這裡的內容來決定回覆的文字
        for (let i = 0; i < a.length; i++) {
            if (c * d < a[i] * b[i])
            {
                e[counter]=a[i] * b[i]
                counter++
            }
        }
        let tmp
        for (let i = 0; i<counter; i++){
            if(i==0)
            {
                tmp=e[i]
            }
            if(e[i]<tmp)
            {
                tmp=e[i]
            }
        }
        await interaction.reply(`${tmp}`);
    },
};
