// Pickup ThisRocks mod items on right click
const rockBlocks = ["rocks:rock", "rocks:granite_rock", "rocks:andesite_rock", "rocks:diorite_rock", "rocks:sand_rock", "rocks:gravel_rock", "rocks:red_sand_rock",
    "rocks:oak_stick", "rocks:spruce_stick", "rocks:birch_stick", "rocks:jungle_stick", "rocks:acacia_stick", "rocks:dark_oak_stick", "rocks:crimson_stick", "rocks:warped_stick", "rocks:cherry_stick", "rocks:bamboo_stick", "rocks:mangrove_stick"];

for (const rockBlock of rockBlocks) {
    BlockEvents.rightClicked(rockBlock, (event) => {
        //event.block.popItem(event.block.drops[0]);
        if (event.player.getMainHandItem().isEmpty()) {
            event.player.swing();
            event.player.give(event.block.drops[0]);
            event.block.set(Blocks.AIR);
        }
    });
}