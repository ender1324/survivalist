import crafttweaker.api.block.Block;
import crafttweaker.api.world.ItemLike;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.type.block.BlockItem;
import crafttweaker.api.loot.LootContext;
import crafttweaker.api.loot.modifier.CommonLootModifiers;
import crafttweaker.api.loot.modifier.ILootModifier;

// Define the block and item
val thisRocksBlock = <block:rocks:rock>;
val earlyRocksBlock = <block:earlystage:rock>;
val splitterRockItem = <item:rocks:cobblestone_splitter>;
val rockItem = <item:earlystage:rock>;

thisRocksBlock.addLootModifier("thisrocks_standardize", CommonLootModifiers.clearing(CommonLootModifiers.add(rockItem)));
//earlyRocksBlock.addLootModifier("earlyrocks_standardize", CommonLootModifiers.clearing(CommonLootModifiers.add(rockItem % 50, splitterRockItem % 50)));