import classicSmashImg from "./img/classic-smash.jpeg"
import spicyJalapenoSmashImg from "./img/spicy-jalapeno-smash.jpeg"
import bbqBaconSmashImg from "./img/bbq-bacon-smash.jpeg"
import mushroomSwissSmashImg from "./img/mushroom-swiss-smash.jpeg"
import avocadoSmashImg from "./img/avocado-smash.jpeg"

export class MenuPage {
    static newElement(type, className, parent) {
        this.element = Object.assign(document.createElement(type), {className: className});
        if (parent) {
            parent.appendChild(this.element);
            return this.element;
        }
        else {
            return this.element;
        }
    }
    
    static newLunchListitem (day, itemName, description) {
        this.listItem = this.newElement("li", "lunch-list-item");
        // Headline
        this.headline = this.newElement("h2", "lunch-day headline", this.listItem);
        this.headline.textContent = day;
        // Item name
        this.menuItemName = this.newElement("h2", "menu-item-name marketing-text", this.listItem);
        this.menuItemName.textContent = itemName;
        // Description
        this.menuItemDesc = this.newElement("p", "menu-item-desc marketing-text", this.listItem);
        this.menuItemDesc.textContent = description;

        return this.listItem;
    }

    static newMenuCard (imgPath, itemName, description) {
        // card
        this.card = this.newElement("div", "menu-card");
        // img
        this.cardImg = this.newElement("img", "", this.card);
        this.cardImg.src = imgPath;
        // overlay
        this.overlay = this.newElement("div", "card-overlay", this.card);
        //text
        this.cardHeadline = this.newElement("h2", "headline", this.overlay);
        this.cardHeadline.textContent = itemName;
        this.cardDesc = this.newElement("p", "marketing-text", this.overlay);
        this.cardDesc.textContent = description;

        return this.card;
    }

    static render() {
        // text variables
        this.lunchInfoHeadlineText = `Todays Lunch`;
        this.lunchInfoParaText = `Drinks, fries and Signature Dip included with todays lunch.`;

        // Main div
        // this.menuContainer = Object.assign(document.createElement("div"), {className: "menu-div"});
        this.menuContainer = this.newElement("div", "menu-div");
        // header image
        this.newElement("div", "menu-header-img", this.menuContainer);
        // Todays lunch div
        this.lunchSection = this.newElement("div", "menu-lunch-section", this.menuContainer);
        // lunch info div
        this.lunchInfo = this.newElement("div", "lunch-info", this.lunchSection);
        // info headline
        this.lunchInfoHeadline = this.newElement("h2", "headline", this.lunchInfo);
        this.lunchInfoHeadline.textContent = this.lunchInfoHeadlineText;
        //info para
        this.lunchInfoPara = this.newElement("p", "marketing-text", this.lunchInfo);
        this.lunchInfoPara.textContent = this.lunchInfoParaText;

        // Lunch menu div
        this.lunchMenu = this.newElement("div", "lunch-menu", this.lunchSection);

        // lunch list
        this.lunchList = this.newElement("ul", "lunch-list", this.lunchMenu);





        // lunch list items
        this.lunchMenuItemArr = [
            {
                day: "Monday",
                itemName: "Classic Smash",
                itemDescription: "Juicy beef patty, melted cheddar cheese, lettuce, tomato, pickles, and our signature Urban sauce on a toasted brioche bun.",
                imgPath: classicSmashImg
            },
            {
                day: "Tuesday",
                itemName: "Spicy Jalapeño Smash",
                itemDescription: "Spicy beef patty, pepper jack cheese, jalapeños, lettuce, tomato, and chipotle mayo on a toasted sesame seed bun.",
                imgPath: spicyJalapenoSmashImg
            },
            {
                day: "Wednesday",
                itemName: "BBQ Bacon Smash",
                itemDescription: "Beef patty, crispy bacon, cheddar cheese, onion rings, lettuce, and smoky BBQ sauce on a toasted brioche bun.",
                imgPath: bbqBaconSmashImg
            },
            {
                day: "Thursday",
                itemName: "Mushroom Swiss Smash",
                itemDescription: "Beef patty, sautéed mushrooms, Swiss cheese, caramelized onions, and garlic aioli on a toasted ciabatta bun.",
                imgPath: mushroomSwissSmashImg
            },
            {
                day: "Friday",
                itemName: "Avocado Smash",
                itemDescription: "Beef patty, fresh avocado slices, pepper jack cheese, lettuce, tomato, and cilantro lime mayo on a toasted whole wheat bun.",
                imgPath: avocadoSmashImg
            }
        ];
        

        this.lunchMenuItemArr.forEach(item => {
            this.newItem = this.newLunchListitem(item.day, item.itemName, item.itemDescription);
            this.lunchList.appendChild(this.newItem);
        });

        // menu cards
        this.menuCardSection = this.newElement("div", "menu-cards-section", this.menuContainer);
        // headline
        this.menuCardHeadline = this.newElement("h2", "headline", this.menuCardSection);
        this.menuCardHeadline.textContent = "Burgers";

        // menu cards content
        this.menuCardsContent = this.newElement("div", "menu-cards-content", this.menuCardSection);

        this.lunchMenuItemArr.forEach(item => {
            this.newCard = this.newMenuCard(item.imgPath, item.itemName, item.itemDescription);
            this.menuCardsContent.appendChild(this.newCard);
        });



        parent = document.getElementById("content");
        parent.appendChild(this.menuContainer);
    }
}