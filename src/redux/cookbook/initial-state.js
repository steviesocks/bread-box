const date = new Date("Mon Nov 16 2020 11:12:59 GMT-0500 (Eastern Standard Time)").toString()

export const INITIAL_STATE = [{
    key: "9d489bb6-b282-4b2e-8df7-0fd5c3454425",
    name: "My First Sourdough",
    dateCreated: date,
    ingredients: [{
        key: "d1a34c29-26d0-4971-b1be-17b4c36c4918",
        amount: 1,
        ingredient: {
            cupsToGrams: 241,
            name: "Starter - 100%",
            type: "starter",
        },
        unit: {
            name: "Tablespoon",
            toBase: 0.0625,
            type: "volume"
        }
    },
    {
        key: "d1a34c29-26d0-4971-b1be-17b4c36c4918",
        ingredient: {
            name: "Starter - 100%",
            cupsToGrams: 241,
            type: "starter"
        },
        amount: 1,
        unit: {
            name: "Tablespoon",
            toBase: 0.0625,
            type: "volume"
        }
    },
    {
        key: "4876c34f-0d14-4542-84d5-d03efff401ba",
        ingredient: {
            name: "Bread Flour",
            cupsToGrams: 120,
            type: "flour"
        },
        amount: 75,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    },
    {
        key: "3d40a5c9-75a9-47a1-813e-a01aca63c182",
        ingredient: {
            name: "Water",
            cupsToGrams: 237,
            type: "liquid"
        },
        amount: 75,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    },
    {
        key: "d0f0358a-3894-4811-8371-c38d8516875d",
        ingredient: {
            name: "Water",
            cupsToGrams: 237,
            type: "liquid"
        },
        amount: 525,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    },
    {
        key: "ab499ce3-66d3-497d-95a6-d41b261d3819",
        ingredient: {
            name: "Fine Salt",
            cupsToGrams: 273,
            type: "salt"
        },
        amount: 1,
        unit: {
            name: "Tablespoon",
            toBase: 0.0625,
            type: "volume"
        }
    },
    {
        key: "809a4464-22ff-40bc-beed-cdeb99c73368",
        ingredient: {
            name: "Bread Flour",
            cupsToGrams: 120,
            type: "flour"
        },
        amount: 700,
        unit: {
            name: "Grams",
            toBase: 1,
            type: "weight"
        }
    }
    ],
    notes: "How to Make Sourdough Bread | Kitchn",
    link: "https://www.thekitchn.com/how-to-make-sourdough-bread-224367",
    imageUrl: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1392,h_1740/k%2FPhoto%2FRecipes%2F2020-01-How-to-Sourdough-Bread%2F98652-beautiful-finished-bread-LEAD_How-to-make-sourdough-bread",
    steps: [
        {
            id: '370902fc-55e0-461f-a4ca-e0db476d32f2',
            header: 'Make sure your sourdough culture is active',
            notes: 'If your sourdough has been in the refrigerator, take it out 2 to 3 days before you plan to bake. Feed it daily to make sure it\'s strong and very active before you make the bread.'
        },
        {
            id: '3ae76cb8-990d-45d4-a59b-492f3ef95e04',
            header: 'Make the leaven and let it sit overnight',
            notes: 'The night before you plan to make the dough, place all the leaven ingredients in a large bowl and mix thoroughly to form a thick batter. Cover and let stand at room temperature overnight, about 12 hours.'
        },
        {
            id: '70197651-33ff-430c-9583-0887f4c496a4',
            header: 'Test that the leaven is ready',
            notes: 'Generally, if the surface of the leaven is very bubbly, it\'s ready to be used. To double check, drop a small spoonful of the leaven in a cup of water; if the leaven floats, it\'s ready.'
    
        },
        {
            id: '7f3f9858-7bc6-41b2-8865-22579e4f3f74',
            header: 'Dissolve the salt',
            notes: 'Place 50 grams (about 1/4 cup) of the water and the salt for the dough in a small bowl. Set aside, stirring occasionally to make sure the salt dissolves.'
        },
        {
            id: '1bb1deb4-06cd-4d37-9a7b-6d720aeb6ba7',
            header: 'Mix the leaven and water',
            notes: 'Add the remaining 475 grams (2 cups) of water for the dough to the bowl of leaven. Stir with a spatula or use your hands to break up and dissolve the leaven into the water. It\'s OK if the leaven doesn\'t fully dissolve and a few clumps remain.'
    
        },
        {
            id: '36363bc0-f367-4e47-a6f5-687025e812b2',
            header: 'Add the flour',
            notes: 'Add the flour and stir with a rubber spatula until there are no more bits of dry flour and it forms a very shaggy dough.'
    
        },
        {
            id: '0c653696-2335-4e61-a688-46cf6088e1ab',
            header: 'Rest the dough (30 minutes, or up to 4 hours)',
            notes: 'Cover the bowl with plastic wrap or a clean kitchen towel. Let the dough rest for at least 30 minutes or up to 4 hours. This is the autolyse stage where the flour is fully absorbing the water and enzymes in the flour begin breaking down the starches and proteins.'
    
        },
        {
            id: '38ba18d4-0cc3-4004-b54f-e37a6d205081',
            header: 'Mix in the salt',
            notes: 'Pour the dissolved salt over the dough. Work the liquid and salt into the dough by pinching and squeezing the dough. The dough will feel quite wet and loose at this point.'
    
        },
        {
            id: '53ead408-e323-4d59-8193-8a5b11251b82',
            header: 'Begin folding the dough (2 1/2 hours)',
            notes: 'To fold the dough, grab the dough at one side, lift it up, and fold it over on top of itself. Fold the dough four times, moving clockwise from the top of the bowl (or giving the bowl a quarter turn in between folds). Let the dough rest 30 minutes, then repeat. Do this a total of 6 times, every half hour, for a total of 2 1/2 hours. The dough will start out shaggy and very loose, but will gradually smooth out and become tighter as you continue folding.'
    
        },
        {
            id: 'c6c1a641-5909-45a6-a40e-51f7bf05f3e7',
            header: 'Let the dough rise undisturbed (30 to 60 minutes)',
            notes: 'Once you\'ve finished the folds, cover and let the dough rise undisturbed for 30 to 60 minutes, until it looks slightly puffed. This dough won\'t double in size the way regular, non-sourdough breads will; it should just look larger than it did when you started.'
    
        },
        {
            id: '163ad60d-8344-49d2-81f6-b55fcbec95ea',
            header: 'Divide the dough',
            notes: 'Sprinkle some flour on a work surface and turn the dough out on top. Work gently to avoid deflating the dough. Use a pastry scraper to divide the dough in half.'
    
        },
        {
            id: 'd5191068-20f6-4abb-b03f-150cc6a03d2f',
            header: 'Shape the dough into loose rounds',
            notes: 'Sprinkle a little flour over each piece of dough. Use your pastry scraper to shape each one into loose rounds — this isn\'t the final shaping, just a preliminary shaping to prep the dough for further shaping. Shape them into rounds by slipping your pastry scraper under the edge of the dough and then scraping it around curve of the dough, like turning left when driving. Do this a few times to build the surface tension in the dough (it makes more sense to do it than to read about it!). Flour your pastry scraper as needed to keep it from sticking to the dough.'
    
        },
        {
            id: '7dec7424-3595-40bd-866a-f1284dbb9636',
            header: 'Rest the dough (20 to 30 minutes)',
            notes: 'Once both pieces of dough are shaped, let them rest for 20 to 30 minutes to relax the gluten again before final shaping.'
    
        },
        {
            id: '4911ca7c-fac7-4913-9fee-6f7c6661f1ec',
            header: 'Prepare 2 bread proofing baskets, colanders, or mixing bowls',
            notes: 'Line 2 bread proofing baskets, colanders, or clean mixing bowls with clean kitchen towels. Dust them heavily with flour, rubbing the flour into the cloth on the bottom and up the sides with your fingers. Use more flour than you think you\'ll need — it should form a thin layer over the surface of the towel.'
    
        },
        {
            id: '825bbe20-b2ba-412d-b33d-b6fbded2bd79',
            header: 'Shape the loaves',
            notes: 'Dust the top of one of the balls of dough with flour. Flip it over with a pastry scraper so that the floured side is against the board and the un-floured, sticky surface is up. Shape the loaf much like you folded the dough earlier: Grab the lip of the dough at the bottom, pull it gently up, then fold it over onto the center of the dough. Repeat with the right and left side of the dough. Repeat with the top of the dough, but once you fold it downward, use your thumb to grab the bottom lip again and gently roll the dough right-side up. If it\'s not quite a round or doesn\'t seem taut to you, cup your palms around the dough and rotate it against the counter to shape it up. Repeat with the second ball of dough.'
    
        },
        {
            id: 'c45c9a4d-70e5-49e4-a4c8-1f0680d10e13',
            header: 'Transfer to the proofing baskets',
            notes: 'Dust the tops and sides of the shaped loaves generously with flour. Place them into the proofing baskets upside down, so the seams from shaping are on top.'
    
        },
        {
            id: '815e63a0-745d-441f-a738-1760cd5194a5',
            header: 'Let the dough rise (3 to 4 hours, or overnight in the fridge)',
            notes: 'Cover the baskets loosely with plastic wrap, or place them inside clean plastic bags. Let them rise at room temperature until they look billowy and poofy, 3 to 4 hours. Alternatively, place the covered basket in the refrigerator and let them rise slowly overnight, 12 to 15 hours. If rising overnight, bake the loaves straight from the fridge; no need to warm before baking.'
    
        },
        {
            id: '33b714cc-1a04-4dae-a754-e72419cf7be0',
            header: 'Heat the oven to 500°F',
            notes: 'Place two Dutch ovens or other heavy-bottomed pots with lids in the oven, and heat to 500°F. (If you don\'t have two pots, you can bake one loaf after the next.)'
    
        },
        {
            id: 'cfd1b3e7-d7fb-409e-99d1-f11015ea3118',
            header: 'Transfer the loaves to the Dutch ovens',
            notes: 'Carefully remove one of the heated Dutch ovens from the oven and remove the lid. Tip the loaf into the pot so the seam-side is down. Repeat with the second loaf. (See Recipe Note if your loaf sticks to the basket.)'
    
        },
        {
            id: '955a9653-b847-40e0-8e76-efc994b0040',
            header: 'Score the top of the loaf',
            notes: 'Use a lame, sharp knife, or serrated knife to quickly score the surface of the loaves. Try to score at a slight angle, so you\'re cutting almost parallel to the surface of the loaf; this gives the loaves the distinctive "shelf" along the score line.'
    
        },
        {
            id: '01f75c3a-db5d-472c-981f-a64c8e9d1c11',
            header: 'Bake the loaves for 20 minutes',
            notes: 'Cover and bake for 20 minutes.'
    
        },
        {
            id: '5c5f16ed-e1a8-4a05-8416-1fa8d2a704e0',
            header: 'Reduce the oven temperature to 450°F and bake another 10 minutes',
            notes: 'Resist the temptation to check the loaves at this point; just reduce the oven temperature to 450°F. Bake another 10 minutes.'
    
        },
        {
            id: 'e2f07387-56de-4752-bf9d-ee705e68a91e',
            header: 'Remove the lids and continue baking 15 to 25 minutes',
            notes: 'Uncover the pots to release any remaining steam. At this point, the loaves should have "sprung" up, have a dry surface, and be just beginning to show golden color.'
    
        },
        {
            id: '80c86bdf-0356-4677-a3f1-765db0ba35a1',
            header: 'Bake another 15 to 25 minutes',
            notes: 'Continue baking uncovered until the crust is deeply browned; aim for just short of burnt. It might feel a bit unnatural to bake loaves this fully, but this is where a lot of the flavor and texture of the crust comes in.'
        },
        {
            id: '1f79130a-e5cd-404c-8588-be4668bfea22',
            header: 'Cool the loaves completely',
            notes: 'When done, lift the loaves out of the pots using a spatula. Transfer them to wire racks to cool completely. Wait until they have cooled to room temperature before slicing.'
        },
    ]
}];