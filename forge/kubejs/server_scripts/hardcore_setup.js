// Setup hardcore mode
// Sets season to winter and weather to thunder on hardcore world start, otherwise just introduces the player to the modpack.
ServerEvents.loaded((event) => {
    if (event.server.hardcore && !event.server.persistentData.firstStart) {
        event.server.persistentData.firstStart = true;
        event.server.runCommandSilent("season set early_winter");
        event.server.runCommandSilent("weather thunder");
        //event.server.runCommand("say hardcore test"); //doesnt do shit cause player hasnt joined when it happens
    } else if (!event.server.persistentData.firstStart) {
        event.server.persistentData.firstStart = true;
        //event.server.runCommand("say tesssst"); //doesnt do shit cause player hasnt joined when it happens
    }
});

PlayerEvents.loggedIn((event) => {
    if (!event.player.stages.has("first_login")) {
        if (event.player.hardcore) {
            event.player.tell("Welcome to Survivalist! You seem to have made the terrible decision to be playing in hardcore mode. Some key changes have been made to the world to make your experience \"fairer\". You need to move QUICK before you freeze to death. Check out the guidebook for help. Good luck :)\n\nCheck out our discord if you have any questions!");
        } else {
            event.player.tell("Welcome to Survivalist! This modpack might make you feel like you never played Minecraft before. Check out the guidebook to get started! Good luck and check out our discord if you have any questions!");
        }
        event.player.giveInHand(Item.of("patchouli:guide_book", {"patchouli:book": "patchouli:survivalist_guide" }));
        event.player.stages.add("first_login");
    }
});