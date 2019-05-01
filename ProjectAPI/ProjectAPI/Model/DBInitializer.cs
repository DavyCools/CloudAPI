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
                        StarPower = "Shell Shock",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/5/5e/Shelly_Skin-Default.png/revision/latest?cb=20181212051920"
                    },
                    new Brawler()
                    {
                        Name = "Nita",
                        Rarity = "Trophy Road Reward",
                        Type = "Fighter",
                        Attack = "Rupture",
                        Super = "Overbearing",
                        StarPower = "Bear With Me",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/3/36/Nita_Skin-Default.png/revision/latest?cb=20181212051918"
                    },
                    new Brawler()
                    {
                        Name = "Colt",
                        Rarity = "Trophy Road Reward",
                        Type = "Sharpshooter",
                        Attack = "Six-Shooters",
                        Super = "Bullet Storm",
                        StarPower = "Slick Boots",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/8/8a/Colt_Skin-Default.png/revision/latest?cb=20190129073952"
                    },
                    new Brawler()
                    {
                        Name = "Bull",
                        Rarity = "Trophy Road Reward",
                        Type = "Heavyweight",
                        Attack = "Double-Barrel",
                        Super = "Bulldozer",
                        StarPower = "Beserker",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/b/b7/Bull_Skin-Default.png/revision/latest?cb=20181212051919"
                    },
                    new Brawler()
                    {
                        Name = "Jessie",
                        Rarity = "Trophy Road Reward",
                        Type = "Fighter",
                        Attack = "Shock Rifle",
                        Super = "Scrappy!",
                        StarPower = "Energize",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/1/15/Jessie_Skin-Default.png/revision/latest?cb=20190227034727"
                    },
                    new Brawler()
                    {
                        Name = "Brock",
                        Rarity = "Trophy Road Reward",
                        Type = "Sharpshooter",
                        Attack = "Rockin' Rocket",
                        Super = "Rocket Rain",
                        StarPower = "Incendiary",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/7/70/Brock_Skin-Default.png/revision/latest?cb=20181212051918"
                    },
                    new Brawler()
                    {
                        Name = "Dynamike",
                        Rarity = "Trophy Road Reward",
                        Type = "Thrower",
                        Attack = "Short Fuse",
                        Super = "Big Barrel O' Boom",
                        StarPower = "Dyna-Jump",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/6/6e/Dynamike_Skin-Default.png/revision/latest?cb=20181212051918"
                    },
                    new Brawler()
                    {
                        Name = "Bo",
                        Rarity = "Trophy Road Reward",
                        Type = "Fighter",
                        Attack = "Eagle-eyes",
                        Super = "Catch A Fox",
                        StarPower = "Circling Eagle",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/e/ee/Bo_Skin-Default.png/revision/latest?cb=20190416001137"
                    },
                    new Brawler()
                    {
                        Name = "El Primo",
                        Rarity = "Rare",
                        Type = "Heavyweight",
                        Attack = "Fists Of Fury",
                        Super = "Flying Elbow Drop",
                        StarPower = "El Fuego",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/0/04/El_Primo_Skin-Default.png/revision/latest?cb=20171111185859"
                    },
                    new Brawler()
                    {
                        Name = "Barley",
                        Rarity = "Rare",
                        Type = "Thrower",
                        Attack = "Undiluted",
                        Super = "Last Call",
                        StarPower = "Medical Use",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/3/3c/Barley_Skin-Default.png/revision/latest?cb=20181212051919"
                    },
                    new Brawler()
                    {
                        Name = "Poco",
                        Rarity = "Rare",
                        Type = "Healer",
                        Attack = "Power Chords",
                        Super = "Encore",
                        StarPower = "Da Capo!",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/2/24/Poco_Skin-Default.png/revision/latest?cb=20190129073926"
                    }, new Brawler()
                    {
                        Name = "Rosa",
                        Rarity = "Rare",
                        Type = "Heavyweight",
                        Attack = "Hands of Stone",
                        Super = "Strong Stuff",
                        StarPower = "Plant Life",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/3/34/Rosa_Skin-Default.png/revision/latest?cb=20190416193326"
                    },
                    new Brawler()
                    {
                        Name = "Rico",
                        Rarity = "Super Rare",
                        Type = "Sharpshooter",
                        Attack = "Bouncy Bullets",
                        Super = "Trick Shot",
                        StarPower = "Super Bouncy",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/7/71/Rico_Skin-Default.png/revision/latest?cb=20190129073925"
                    },
                    new Brawler()
                    {
                        Name = "Darryl",
                        Rarity = "Super Rare",
                        Type = "Heavyweight",
                        Attack = "Double Deuce",
                        Super = "Barrel Roll",
                        StarPower = "Steel Hoops",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/6/66/Darryl_Skin-Default.png/revision/latest?cb=20171207183139"
                    },
                    new Brawler()
                    {
                        Name = "Penny",
                        Rarity = "Super Rare",
                        Type = "Sharpshooter",
                        Attack = "Plunderbuss",
                        Super = "Old Lobber",
                        StarPower = "Last Blast",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/d/d6/Penny_Skin-Default.png/revision/latest?cb=20180518182615"
                    },
                    new Brawler()
                    {
                        Name = "Carl",
                        Rarity = "Super Rare",
                        Type = "Fighter",
                        Attack = "Pickaxe",
                        Super = "Tailspin",
                        StarPower = "Power Throw",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/4/46/Carl_Skin-Default.png/revision/latest?cb=20190228043711"
                    },
                    new Brawler()
                    {
                        Name = "Piper",
                        Rarity = "Epic",
                        Type = "Sharpshooter",
                        Attack = "Gunbrella",
                        Super = "Poppin'",
                        StarPower = "Ambush",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/5/5d/Piper_Skin-Default.png/revision/latest?cb=20170706213944"
                    },
                    new Brawler()
                    {
                        Name = "Pam",
                        Rarity = "Epic",
                        Type = "Healer",
                        Attack = "Scrapstorm",
                        Super = "Mama's Kiss",
                        StarPower = "Mama's Hug",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/6/68/Pam_Skin-Default.png/revision/latest?cb=20190416011450"
                    },
                    new Brawler()
                    {
                        Name = "Frank",
                        Rarity = "Epic",
                        Type = "Heavyweight",
                        Attack = "Hammer Hit",
                        Super = "Stunning Blow",
                        StarPower = "Power Grab",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/5/55/Frank_Skin-Default.png/revision/latest?cb=20180518182616"
                    },
                    new Brawler()
                    {
                        Name = "Mortis",
                        Rarity = "Mythic",
                        Type = "Dashing Assassin",
                        Attack = "Shovel Swing",
                        Super = "Life Blood",
                        StarPower = "Creepy Harvest",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/b/b2/Mortis_Skin-Default.png/revision/latest?cb=20181010200125"
                    },
                    new Brawler()
                    {
                        Name = "Tara",
                        Rarity = "Mythic",
                        Type = "Skimisher",
                        Attack = "Triple Tarot",
                        Super = "Gravity",
                        StarPower = "Black Portal",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/a/a7/Tara_Skin-Default.png/revision/latest?cb=20190419163832"
                    },
                    new Brawler()
                    {
                        Name = "Gene",
                        Rarity = "Mythic",
                        Type = "Support",
                        Attack = "Smoke Blast",
                        Super = "Magic Hand",
                        StarPower = "Magic Puffs",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/5/54/Gene_Skin-Default.png/revision/latest?cb=20190419163509"
                    },
                    new Brawler()
                    {
                        Name = "Spike",
                        Rarity = "Legendary",
                        Type = "Sharpshooter",
                        Attack = "Needle Grenade",
                        Super = "Stick Around!",
                        StarPower = "Fertilize",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/8/8e/Spike_Skin-Default.png/revision/latest?cb=20190129073953"
                    },
                    new Brawler()
                    {
                        Name = "Crow",
                        Rarity = "Legendary",
                        Type = "Toxic Assassin",
                        Attack = "Switchblade",
                        Super = "Swoop",
                        StarPower = "Extra Toxic",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/a/a2/Crow_Skin-Default.png/revision/latest?cb=20190222202857"
                    },
                    new Brawler()
                    {
                        Name = "Leon",
                        Rarity = "Legendary",
                        Type = "Stealthy Assassin",
                        Attack = "Spinner Blades",
                        Super = "Smoke Bomb",
                        StarPower = "Smoke Trails",
                        Picture = "https://vignette.wikia.nocookie.net/brawlstars/images/3/33/Leon_Skin-Default.png/revision/latest?cb=20181212051917"
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
