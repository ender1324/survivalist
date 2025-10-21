// Survivalist Guide Book Recipe
ServerEvents.recipes((event) => {
    event.shapeless(Item.of("patchouli:guide_book", {"patchouli:book": "patchouli:survivalist_guide" }), [
        "minecraft:leather",
        "minecraft:stick",
        "#forge:dyes"
    ]);
});