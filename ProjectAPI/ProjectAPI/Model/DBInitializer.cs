using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            //Is there already a test?
            if (!context.Brawlers.Any())
            {
                Brawler[] brawlers = {
                    new Brawler()
                    {
                        Name = "Shelly",
                        Rarity = "Starting Brawler",
                        Type = "Fighter",
                        Attack = "Buckshot",
                        Super = "Super Shell",
                        StarPower = "Shell Shock"
                    },
                    new Brawler()
                    {
                    Name = "Nita",
                    Rarity = "Trophy Road Reward",
                    Type = "Fighter",
                    Attack = "Rupture",
                    Super = "Overbearing",
                    StarPower = "Bear With Me"
                    },
                    new Brawler()
                    {
                    Name = "Colt",
                    Rarity = "Trophy Road Reward",
                    Type = "Sharpshooter",
                    Attack = "Six-Shooters",
                    Super = "Bullet Storm",
                    StarPower = "Slick Boots"
                    },
                    new Brawler()
                    {
                    Name = "Bull",
                    Rarity = "Trophy Road Reward",
                    Type = "Heavyweight",
                    Attack = "Double-Barrel",
                    Super = "Bulldozer",
                    StarPower = "Beserker"
                    },
                    new Brawler()
                    {
                    Name = "Jessie",
                    Rarity = "Trophy Road Reward",
                    Type = "Fighter",
                    Attack = "Shock Rifle",
                    Super = "Scrappy!",
                    StarPower = "Energize"
                    },
                    new Brawler()
                    {
                    Name = "Brock",
                    Rarity = "Trophy Road Reward",
                    Type = "Sharpshooter",
                    Attack = "Rockin' Rocket",
                    Super = "Rocket Rain",
                    StarPower = "Incendiary"
                    },
                    new Brawler()
                    {
                    Name = "Dynamike",
                    Rarity = "Trophy Road Reward",
                    Type = "Thrower",
                    Attack = "Short Fuse",
                    Super = "Big Barrel O' Boom",
                    StarPower = "Dyna-Jump"
                    },
                     new Brawler()
                    {
                    Name = "Bo",
                    Rarity = "Trophy Road Reward",
                    Type = "Fighter",
                    Attack = "Eagle-eyes",
                    Super = "Catch A Fox",
                    StarPower = "Circling Eagle"
                    },
                    new Brawler()
                    {
                    Name = "El Primo",
                    Rarity = "Rare",
                    Type = "Heavyweight",
                    Attack = "Fists Of Fury",
                    Super = "Flying Elbow Drop",
                    StarPower = "El Fuego"
                    }, new Brawler()
                    {
                    Name = "Barley",
                    Rarity = "Rare",
                    Type = "Thrower",
                    Attack = "Undiluted",
                    Super = "Last Call",
                    StarPower = "Medical Use"
                    },
                    new Brawler()
                    {
                    Name = "Poco",
                    Rarity = "Rare",
                    Type = "Healer",
                    Attack = "Power Chords",
                    Super = "Encore",
                    StarPower = "Da Capo!"
                    }, new Brawler()
                    {
                    Name = "Rosa",
                    Rarity = "Rare",
                    Type = "Heavyweight",
                    Attack = "Hands of Stone",
                    Super = "Strong Stuff",
                    StarPower = "Plant Life"
                    },
                    new Brawler()
                    {
                    Name = "Rico",
                    Rarity = "Super Rare",
                    Type = "Sharpshooter",
                    Attack = "Bouncy Bullets",
                    Super = "Trick Shot",
                    StarPower = "Super Bouncy"
                    },
                    new Brawler()
                    {
                    Name = "Darryl",
                    Rarity = "Super Rare",
                    Type = "Heavyweight",
                    Attack = "Double Deuce",
                    Super = "Barrel Roll",
                    StarPower = "Steel Hoops"
                    },
                    new Brawler()
                    {
                    Name = "Penny",
                    Rarity = "Super Rare",
                    Type = "Sharpshooter",
                    Attack = "Plunderbuss",
                    Super = "Old Lobber",
                    StarPower = "Last Blast"
                    },
                    new Brawler()
                    {
                    Name = "Carl",
                    Rarity = "Super Rare",
                    Type = "Fighter",
                    Attack = "Pickaxe",
                    Super = "Tailspin",
                    StarPower = "Power Throw"
                    },
                    new Brawler()
                    {
                    Name = "Piper",
                    Rarity = "Epic",
                    Type = "Sharpshooter",
                    Attack = "Gunbrella",
                    Super = "Poppin'",
                    StarPower = "Ambush"
                    },
                    new Brawler()
                    {
                    Name = "Pam",
                    Rarity = "Epic",
                    Type = "Healer",
                    Attack = "Scrapstorm",
                    Super = "Mama's Kiss",
                    StarPower = "Mama's Hug"
                    },
                    new Brawler()
                    {
                    Name = "Frank",
                    Rarity = "Epic",
                    Type = "Heavyweight",
                    Attack = "Hammer Hit",
                    Super = "Stunning Blow",
                    StarPower = "Power Grab"
                    },
                    new Brawler()
                    {
                    Name = "Mortis",
                    Rarity = "Mythic",
                    Type = "Dashing Assassin",
                    Attack = "Shovel Swing",
                    Super = "Life Blood",
                    StarPower = "Creepy Harvest"
                    },
                    new Brawler()
                    {
                    Name = "Tara",
                    Rarity = "Mythic",
                    Type = "Skimisher",
                    Attack = "Triple Tarot",
                    Super = "Gravity",
                    StarPower = "Black Portal"
                    },
                    new Brawler()
                    {
                    Name = "Gene",
                    Rarity = "Mythic",
                    Type = "Support",
                    Attack = "Smoke Blast",
                    Super = "Magic Hand",
                    StarPower = "Magic Puffs"
                    },
                    new Brawler()
                    {
                    Name = "Spike",
                    Rarity = "Legendary",
                    Type = "Sharpshooter",
                    Attack = "Needle Grenade",
                    Super = "Stick Around!",
                    StarPower = "Fertilize"
                    },
                    new Brawler()
                    {
                    Name = "Crow",
                    Rarity = "Legendary",
                    Type = "Toxic Assassin",
                    Attack = "Switchblade",
                    Super = "Swoop",
                    StarPower = "Extra Toxic"
                    },
                    new Brawler()
                    {
                    Name = "Leon",
                    Rarity = "Legendary",
                    Type = "Stealthy Assassin",
                    Attack = "Spinner Blades",
                    Super = "Smoke Bomb",
                    StarPower = "Smoke Trails"
                    }
                };
                foreach (var item in brawlers)
                {
                    context.Brawlers.Add(item);
                }
                context.SaveChanges();
            }
        }
    }
}
