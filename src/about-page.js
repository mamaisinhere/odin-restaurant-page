import staffImage1 from "./staff-portrait-1.jpeg"
import staffImage2 from "./staff-portrait-2.jpeg"
import staffImage3 from "./staff-portrait-3.jpeg"
import staffImage4 from "./staff-portrait-4.jpeg"

export class AboutPage {
    static newPortrait(source, staffName) {
        // main container
        this.portrait = Object.assign(document.createElement("div"), { className: "portrait-div" });

        // contents
        // this.img = Object.assign(document.createElement("img"));
        this.img = document.createElement("img");
        this.img.src = source;

        this.p = Object.assign(document.createElement("p"), { className: "staff-name" });
        this.p.textContent = staffName;

        // append
        this.portrait.appendChild(this.img);
        this.portrait.appendChild(this.p);

        return this.portrait;
    }

    static render() {
        this.headlineTextcontent = `Meet the team.`;
        this.aboutTextcontent = `At Urban Bites Burger Co., our team is the heart and soul of our restaurant. Each member brings their unique flair and passion to create an unforgettable dining experience for you.
        We can’t wait for you to meet our amazing team and experience the best burgers in town. See you soon at Urban Bites Burger Co.!`;

        // Main container
        this.aboutDiv = Object.assign(document.createElement("div"), { className: "about-div" });

        // Content
        this.aboutTextDiv = Object.assign(document.createElement("div"), { className: "about-text-div" });
        this.aboutDiv.appendChild(this.aboutTextDiv);
        // Headline
        this.aboutHeadline = Object.assign(document.createElement("h2"), { className: "headline" });
        this.aboutHeadline.textContent = this.headlineTextcontent;
        this.aboutTextDiv.appendChild(this.aboutHeadline);

        // About text
        this.aboutTextPara = Object.assign(document.createElement("p"), { className: "marketing-text" });
        this.aboutTextPara.textContent = this.aboutTextcontent;
        this.aboutTextDiv.appendChild(this.aboutTextPara);

        // Portrait div
        this.portraitDiv = Object.assign(document.createElement("div"), { className: "portraits" });
        this.staff = [
            "Jake Thompson - Bartender",
            "Leo Martinez - Server",
            "Mia Carter - Restaurant Manager",
            "Zoe Bennett - Chef"
        ]

        // Array of images
        const staffImages = [staffImage1, staffImage2, staffImage3, staffImage4];

        this.staff.forEach((member, index) => {
            this.imgPath = staffImages[index];
            this.port = AboutPage.newPortrait(this.imgPath, member);
            this.portraitDiv.appendChild(this.port);
        });

        this.aboutDiv.appendChild(this.portraitDiv);



        parent = document.getElementById("content");
        parent.appendChild(this.aboutDiv);
    }
}