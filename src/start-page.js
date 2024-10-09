export class StartPage {
    
    static render() {
        
        this.headlineTextcontent = `Welcome to Urban Bites Burger Co.`;
        this.marketingTextTextcontent = `At Urban Bites, we believe in more than just a meal – we believe in an experience. Our burgers are crafted with the finest ingredients, from juicy, grass-fed beef to fresh, locally-sourced veggies, all nestled in our signature artisan buns. Each bite is a burst of flavor, designed to tantalize your taste buds and leave you craving more.
        But we’re not just about great food. Our vibe is the perfect backdrop for catching up with friends, enjoying a family meal, or just taking a break from the hustle. With a team that’s as passionate about burgers as you are, we’re here to make every visit memorable.
        Come for the burgers, stay for the vibe. Welcome to your new favorite spot.`

        this.heroImg = Object.assign(document.createElement("div"), { className: "hero-img" });
        this.welcomeDiv = Object.assign(document.createElement("div"), { className: "welcome-div" });
        this.heroImg.appendChild(this.welcomeDiv);
        
        
        
        this.headline = Object.assign(document.createElement("h2"), { className: "headline" });
        this.headline.textContent = this.headlineTextcontent;
        this.marketingText = Object.assign(document.createElement("div"), { className: "marketing-text" });
        this.marketingText.textContent = this.marketingTextTextcontent;
        this.welcomeDiv.appendChild(this.headline);
        this.welcomeDiv.appendChild(this.marketingText);
        
        
        parent = document.getElementById("content");
        parent.appendChild(this.heroImg);
    }
}