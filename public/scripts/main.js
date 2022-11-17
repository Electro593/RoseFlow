var rhit = rhit || {};

function htmlToElement(html) {
   let template = document.createElement("template");
   template.innerHTML = html.trim();
   return template.content.firstChild;
}

rhit.professors = {
   // BBE
   "ahmed"    : "Jameel Ahmed",
   "alhalawa" : "Adel Alhalawani",
   "bhatta1"  : "Eden Bhatta",
   "knott"    : "Lisa Bosstick",
   "buckley"  : "Christine Buckley",
   "chiu"     : "Alan Chiu",
   "coppinge" : "Peter Coppinger",
   "dee"      : "Kay C Dee",
   "dosmare"  : "Emma Dosmare",
   "hamilto6" : "Michael Hamilton",
   "hill2"    : "Stephanie Hill",
   "ingram"   : "Ella Ingram",
   "oconnor"  : "Jen O'Connor",
   "rogge"    : "Renee Rogge",
   "stewaraj" : "Andy Steward",
   "tieken"   : "Shannon Tieken",
   "weiner"   : "Bill Weiner",
   "willarj"  : "Robert Williamson",
   
   // CE
   "aidoo"    : "John Aidoo",
   "collins2" : "Kevin Collins",
   "hanson"   : "Jim Hanson",
   "kershaw"  : "Kyle Kershaw",
   "lovellmd" : "Matt Lovell",
   "marincel" : "Michelle Marincel Payne",
   "muellerp" : "Jenny Mueller",
   "prosser"  : "Kevin Prosser",
   "shrestha" : "Namita Shrestha",
   "sutterer" : "Kevin Sutterer",
   "tanner2"  : "Angela Tanner",
   
   // CHE
   "anastasi" : "Dan Anastasio",
   "chenette" : "Heather Chenette",
   "cunning"  : "Frank Cunning",
   "sauer"    : "Sharon Dutrow",
   "harwood"  : "Lisa Harwood",
   "henthor1" : "Dave Henthorn",
   "henthorn" : "Kimberly Henthorn",
   "mcclell1" : "Scott McClellan",
   "neumann"  : "Greg Neumann",
   "nolte"    : "Adam Nolte",
   "brockman" : "Irene Reizman",
   "serbezov" : "Atanas Serbezov",
   "tousley"  : "Marissa Tousley",
   "warley"   : "Russ Warley",
   
   // CHEM
   "brandt"   : "Mark Brandt",
   "devasher" : "Rebecca Devasher",
   "johnson5" : "Lou Johnson",
   "kamasah"  : "Alexander Kamasah",
   "morris"   : "Dan Morris",
   "mueller"  : "Mike Mueller",
   "pfluege1" : "Jason Pflueger",
   "poland"   : "Stephanie Poland",
   "sharp"    : "Michelle Sharp",
   "sunahori" : "Fumie Sunahori",
   "tilstra"  : "Luanne Tilstra",
   "tuley"    : "Alfred Tuley",
   "weatherm" : "Ross Weatherman",
   "white"    : "Allen White",
   "conder1"  : "Shelley Winkle",
   
   // CSSE
   "bohner"   : "Shawn Bohner",
   "boutell"  : "Matt Boutell",
   "chenett1" : "Nate Chenette",
   "chenowet" : "Steve Chenoweth",
   "degler"   : "Lynn Degler",
   "fisherds" : "Dave Fisher",
   "hays"     : "Mark Hays",
   "hewner"   : "Mike Hewner",
   "hollings" : "Joseph Hollingsworth",
   "jelen"    : "Ben Jelen",
   "krohn"    : "Rachel Krohn",
   "brocker"  : "Eliza Marcum",
   "mellor"   : "JP Mellor",
   "mohan"    : "Sriram Mohan",
   "mouck"    : "Darryl Mouck",
   "mutchler" : "David Mutchler",
   "noureddi" : "Mohammad Noureddine",
   "scrivner" : "Olga Scrivner",
   "song3"    : "Lixing Song",
   "stammsl"  : "Sid Stamm",
   "stouder"  : "Amanda Stouder",
   "toevs"    : "Brian Toevs",
   "tracy"    : "Kim Tracy",
   "wilkin"   : "Aaron Wilkin",
   "williarj" : "Robert Williamson",
   "wollowsk" : "Michael Wollowski",
   "yoder1"   : "Jason Yoder",
   "zhang1"   : "Yiji Zhang",
   
   // ECE
   "berry123" : "Carlotta Berry",
   "chang1"   : "Daniel Chang",
   "cracraft" : "Michael Cracraft",
   "crosby"   : "Mark Crosby",
   "doering"  : "Ed Doering",
   "estrada"  : "Zak Estrada",
   "herniter" : "Marc Herniter",
   "hudson"   : "Tina Hudson",
   "jo"       : "Michael Jo",
   "kim2"     : "Yong Jin Daniel Kim",
   "lowe3"    : "Ashley Lowe",
   "meyer"    : "Gary Meyer",
   "miller4"  : "Chris Miller",
   "padgett"  : "Wayne Padgett",
   "richard1" : "Tony Richardson",
   "rostamko" : "Niusha Rostamkolai",
   "shrader"  : "Jack Shrader",
   "simoni"   : "Mario Simoni",
   "song"     : "Jianjian Song",
   "throne"   : "Bob Throne",
   "walter"   : "Deborah Walter",
   "wheeler"  : "Ed Wheeler",
   "yoder"    : "Mark Yoder",
   
   // EMGT
   "andrijci" : "Eva Andrijcic",
   "downing"  : "Craig Downing",
   "evans"    : "Diane Evans",
   "gosnell"  : "Terri Gosnell",
   "james3"   : "Tom James",
   "momenipo" : "Amir Momenipour",
   "stamper1" : "Rick Stamper",
   
   // ENGD
   "brackin" : "Patsy Brackin",
   "noffke"  : "Brad Noffke",
   
   //HSSA
   "abas"     : "Soully Abas",
   "bundza"   : "Alan Bundza",
   "carlsonp" : "Pat Carlson",
   "carvill"  : "Caroline Carvill",
   "casey1"   : "Terrence Casey",
   "chapman1" : "David Chapman",
   "christ"   : "Kevin Christ",
   "christen" : "Paul Christensen",
   "dyer1"    : "Rebecca Dyer",
   "edwards3" : "Mary Edwards",
   "fullin"   : "Karen Fullin",
   "garcia"   : "Gustavo Garcia",
   "gardner"  : "John Gardner",
   "grose"    : "Tim Grose",
   "hartner"  : "Daniel Hartner",
   "hartnett" : "Terence Hartnett",
   "hirotani" : "Maki Hirotani",
   "house"    : "Richard House",
   "jern"     : "Alan Jern",
   "jones10"  : "Yevonne Jones",
   "kim1"     : "Jong Hun Kim",
   "kukral"   : "Mike Kukral",
   "livingst" : "Jessica Livingston",
   "martland" : "Sam Martland",
   "michel"   : "Andreas Michel",
   "miller2"  : "Merry Miller Moon",
   "minster"  : "Mark Minster",
   "pavel"    : "Tanvir Pavel",
   "taylor13" : "Corey Taylor",
   "vastola"  : "Michael Vastola",
   "watt"     : "Annie Watt",
   "williams" : "Julia Williams",
   
   // MA
   "all1"     : "Tim All",
   "boulware" : "Naomi Boulware",
   "bryan"    : "Kurt Bryan",
   "butske"   : "Bill Butske",
   "carlisle" : "Sylvia Carlisle",
   "claassen" : "Kyle Claassen",
   "eichholz" : "Joe Eichholz",
   "eldredge" : "Lydia Eldredge",
   "finn"     : "David Finn",
   "goulet"   : "Dave Goulet",
   "green"    : "William Green",
   "gunaward" : "Lakshika Gunawardana",
   "heyman"   : "Megan Heyman",
   "holden"   : "Josh Holden",
   "holder"   : "Al Holder",
   "holder1"  : "Leanne Holder",
   "langley"  : "Tom Langley",
   "leader"   : "Jeff Leader",
   "mcsweene" : "John McSweeney",
   "mouck"    : "Darryl Mouck",
   "olsen"    : "McCabe Olsen",
   "petrik"   : "Rachel Petrik",
   "rader"    : "Dave Rader",
   "reyesem"  : "Eric Reyes",
   "rickert"  : "John Rickert",
   "riehl"    : "Manda Riehl",
   "riley"    : "Natasha Riley",
   "shibberu" : "Yosi Shibberu",
   "taha"     : "Razan Taha",
   "tarrant"  : "Wayne Tarrant",
   "weyand"   : "Tracy Weyand",
   
   // ME
   "adams1"   : "Thom Adams",
   "bercich"  : "Rebecca Bercich",
   "bernala"  : "Ashley Bernal",
   "brackin"  : "Patsy Brackin",
   "canino"   : "Miles Canino",
   "chambez"  : "Zac Chambers",
   "cloutier" : "Aimee Cloutier",
   "constans" : "Eric Constans",
   "cunningh" : "Patrick Cunningham",
   "daneshya" : "Amir Danesh-Yazdi",
   "fisherds" : "Dave Fisher",
   "guess"    : "John Guess",
   "jones5"   : "Simon Jones",
   "kawano"   : "Daniel Kawano",
   "leturgez" : "Jerry Leturgez",
   "luic"     : "Calvin Lui",
   "mayhew"   : "Jim Mayhew",
   "mccormac" : "Jay McCormack",
   "mertzb"   : "Ben Mertz",
   "moorhead" : "Michael Moorhead",
   "moseley"  : "Sean Moseley",
   "olson1"   : "Lori Olson",
   "onyancha" : "Richard Onyancha",
   "payne1"   : "Jayme Payne",
   "purdy"    : "Daniel Purdy",
   "raymann"  : "Bill Raymann",
   "riley1"   : "Matt Riley",
   "saei"     : "Mojib Saei",
   "sangelka" : "Shraddha Sangelkar",
   "stoeckle" : "Dan Stoecklein",
   "white"    : "Allen White",
   "winckrc"  : "Ryder Winck",
   
   // PHOE
   "alisafae" : "Hossein Alisafaee",
   "duree"    : "Galen Duree",
   "fair1"    : "Brian Fair",
   "granieri" : "Sergio Granieri",
   "hamilton" : "Pam Hamilton",
   "joenatha" : "Charles Joenathan",
   "kirkpatr" : "Elaine Kirkpatrick",
   "kirkpat2" : "Scott Kirkpatrick",
   "kirtley"  : "Sudipa Kirtley",
   "letfulli" : "Renat Letfullin",
   "marince1" : "Dan Marincel",
   "pfiester" : "Nicole Pfiester Latham",
   "popovic"  : "Kosta Popovic",
   "reza"     : "Syed Reza",
   "rutherr"  : "Rusty Rutherford",
   "siahmako" : "Azad Siahmakoun",
   "sladek1"  : "Roger Sladek",
   "syed"     : "Maarij Syed",
   "wagner"   : "Jerry Wagner",
   "webster"  : "Ben Webster",
   
   "tba"      : "TBA",
   "none"     : "None"
};

rhit.Display = class {
   constructor(uid) {
      this.menuIsOpen = false;
      this.currPage = 0;
      this.termNames = ["Spring", "Summer", "Fall", "Winter"];
      this.currTerm = null;
      this.expandedTermDropdown = false;
      
      this.expandedFilter = null;
      
      this.currTable = null;
      this.tableIndex = 0;
      this.favoriteIndex = null;
      this.favoriteIdToIndex = {};
      this.favoriteIndexToId = {};
      this.favorites = {};
      this.termMap = {};
      
      this.uid = uid;
      this.currUser = null;
      this.usersCol   = firebase.firestore().collection("users");
      this.coursesCol = firebase.firestore().collection("courses");
      this.courses = {};
      this.courseToCrn = {};
      this.users = [];
      this.unsubscibeFromUsers = null;
      this.unsubscibeFromCourses = null;
      
      this.colors = ["#F9C74F", "#0D3B66", "#90BE6D", "#F8961E", "#00FFE7", "#F94144", "#C200FB", "#FEFAE0", "#43AA8B"];
      
      this.professors = rhit.professors;
      
      this.selectedColors = [];
      this.filterData = {
         courses: [],
         professors: {},
         sections: {},
         colors: [],
         times: []
      };
      this.updateColors();
      
      this.selectedColorIndex = 1;
      this.selectedColorCourseIndex = 0;
      for(let i=0; i < document.querySelectorAll(".color-option").length; i++) {
         document.querySelectorAll(".color-option")[i].addEventListener ("click", (event) => {
            this.selectedColorIndex = i;
            this.selectedColors[this.selectedColorCourseIndex] = this.colors[this.selectedColorIndex]; 
            this.updateFilterColors(this.selectedColorCourseIndex);
         })
      }

      document.querySelector("#resetChangesButton").addEventListener("click", (event) => {
         // profs reset
         for(let i = 0; i < this.filterData.courses.length; i++) {
            for(let prof of document.querySelectorAll(`.${this.filterData.courses[i]}profs`)) {
               prof.checked = true;
            }
         }

         // sections save
         for(let i = 0; i < this.filterData.courses.length; i++) {
            for(let sect of document.querySelectorAll(`.${this.filterData.courses[i]}sects`)) {
               sect.checked = true;
            }
         }

         // times reset
         for(let time of document.querySelectorAll(".times")) {
            time.checked = true;
         }

         // color reset 
         for(let i = 0; i < this.filterData.courses.length; i++) {
            this.selectedColors[i] = this.colors[i];
            this.filterData.colors[i] = this.colors[i];
         }

         document.querySelector("#saveChangesButton").click();
         this.remakeTables();
         this.updateColors();
      })  

      document.querySelector("#saveChangesButton").addEventListener("click", (event) => {
         // colors save 
         for(let i = 0; i < this.filterData.colors.length; i++) {
            this.filterData.colors[i] = this.selectedColors[i];
         }

         // profs save
         for(let i = 0; i < this.filterData.courses.length; i++) {
            let newProfs = [];
            for(let prof of document.querySelectorAll(`.${this.filterData.courses[i]}profs`)) {
               if(prof.checked) {
                  newProfs.push(prof.value);
               }
            }
            this.filterData.professors[`${this.filterData.courses[i]}`] = newProfs;
         }

         // sections save
         for(let i = 0; i < this.filterData.courses.length; i++) {
            let newSects = [];
            for(let sect of document.querySelectorAll(`.${this.filterData.courses[i]}sects`)) {
               if(sect.checked) {
                  newSects.push(sect.value);
               }
            }
            this.filterData.sections[`${this.filterData.courses[i]}`] = newSects;
         }
         console.log(this.filterData.sections);

         // times save
         let newTimes = [];
         let index = 8;
         for(let time of document.querySelectorAll(".times")) {
            if(index == 13) index = 1;
            if(time.checked) {
               newTimes.push(index);
            }
            index++;
         }
         console.log(newTimes);
         this.filterData.times = newTimes;

         // colors save
         for(let i = 0; i < this.filterData.courses.length; i++) {
            this.filterData.colors[i] = this.selectedColors[i] ;
         }
         console.log(this.filterData.colors);
         this.updateColors();
         this.remakeTables();
      })

      document.querySelector("#logOutButton").onclick = (event) => {
         rhit.FbAuthManager.signOut();
         rhit.checkForRedirects();
      }
      
      let resizeHandler = () => {
         let prev = this.overlayFilter;
         this.overlayFilter = window.matchMedia("(max-width: 1000px)").matches;
         if(prev != this.overlayFilter) {
            if(this.filtersAreOpen) this.showFilters();
            else this.hideFilters();
         }
      };
      window.onresize = resizeHandler;
      resizeHandler();
      
      let menuPage = document.querySelector("#menuPage");
      let termSelector = document.querySelector("#termSelector");
      document.onclick = (event) => {
         if(!menuPage.contains(event.target) && event.target != menuIcon) {
            this.hideMenu();
         }
         if(!termSelector.contains(event.target)) {
            this.hideTermSelector();
         }
      };
      
      this.initMenu();
      
      this.initFilters();
      
      this.initFavorites();
      
      document.querySelector("#termSelector").onclick = (event) => {
         if(this.expandedTermDropdown) {
            let entries = document.querySelectorAll(".term-dropdown-entry");
            let index = Array.from(entries).indexOf(event.target);
            if(index != -1) {
               let name = event.target.innerHTML;
               let parts = name.split(" ");
               let year = parts[1];
               let season = this.termNames.indexOf(parts[0]).toString();
               this.currTerm = year + season;
               this.updateTerm();
            }
            
            this.hideTermSelector();
         } else {
            document.querySelector("#termDropdownWrapper").style.maxHeight = "fit-content";
            document.querySelector("#termDropdown").style.transform = "translateY(0%)";
            document.querySelector("#termDropdown").style.transition = "transform 0.17s ease-in-out";
            this.expandedTermDropdown = true;
         }
      };
      
      this.startListeningToUsers(() => {
         let subList = document.querySelectorAll(".menu-sublist")[0];
         for(let item of document.querySelectorAll(".menu-sublist-item")) {
            subList.removeChild(item);
         }
         
         this.favorites = JSON.parse(this.currUser.get("favorites"));
         let i = 0;
         let entries = Object.entries(this.favorites);
         if(entries.length == 0) {
            document.querySelectorAll(".menu-list-item")[1].classList.remove("with-sublist");
         } else {
            document.querySelectorAll(".menu-list-item")[1].classList.add("with-sublist");
         }
         for(let [id, table] of Object.entries(this.favorites)) {
            let item = htmlToElement(`
               <div class="menu-sublist-item">
                  <span>${table.name ? table.name : "Unnamed"}</span>
                  <img class="chevron-right" src="images/chevron_right.svg">
               </div>`
            );
            
            if(this.favoriteIndex == i) {
               item.classList.add("menu-sublist-active");
            }
            
            this.favoriteIdToIndex[id] = i;
            this.favoriteIndexToId[i] = id;
            
            let _i = i;
            item.onclick = (event) => {
               document.querySelectorAll(".menu-sublist-active").forEach((active) => {
                  active.classList.remove("menu-sublist-active");
               });
               item.classList.add("menu-sublist-active");
               document.querySelectorAll(".menu-list-active").forEach((active) => {
                  active.classList.remove("menu-list-active");
               });
               
               this.favoriteIndex = _i;
               this.switchToFavoritePage(table);
            };
            
            subList.appendChild(item);
            i++;
         };
         
         if(this.currTable) {
            this.updateDisplay();
         }
      });
      
      this.startListeningToCourses();
      
      document.querySelector("#tableNameInput").onchange = (event) => {
         this.currTable.name = event.target.value;
         let id = this.encodeTableID(this.currTable);
         if(this.favorites[id]) {
            this.currUser.ref.update("favorites", JSON.stringify(this.favorites));
         }
      }
      
      let circles = document.querySelectorAll(".circle");
      document.addEventListener("keydown", (event) => {
         if(event.target.nodeName == "INPUT") return;
         if(event.code == "ArrowLeft") {
            circles[0].classList.add("active");
            let onclick = document.onclick;
            document.onclick = null;
            circles[0].click();
            document.onclick = onclick;
         } else if(event.code == "ArrowRight") {
            circles[1].classList.add("active");
            let onclick = document.onclick;
            document.onclick = null;
            circles[1].click();
            document.onclick = onclick;
         }
      });
      document.addEventListener("keyup", (event) => {
         if(event.target.nodeName == "INPUT") return;
         if(event.code == "ArrowLeft") {
            circles[0].classList.remove("active");
         } else if(event.code == "ArrowRight") {
            circles[1].classList.remove("active");
         }
      });
   }
   
   updateTerm() {
      this.loadTermData(this.currTerm);
      this.initFilters();
      this.remakeTables();
   }
   
   updateColors() {
      for(let i = 0; i < this.colors.length; i++) {
         document.documentElement.style.setProperty(`--course-color-${i}`, this.filterData.colors[i]);
         
         let red = parseInt(this.colors[i].substring(1,3), 16);
         let green = parseInt(this.colors[i].substring(3,5), 16);
         let blue = parseInt(this.colors[i].substring(5,7), 16);
         let gray = (red+green+blue)/3;
         if(gray < 115) {
            document.documentElement.style.setProperty(`--course-text-${i}`, "white");
         } else {
            document.documentElement.style.setProperty(`--course-text-${i}`, "black");
         }
      }
   }
   
   switchToTable(index) {
      if(this.options.length == 0) {
         document.querySelector("#scheduleIndex").innerHTML = "Schedule 0 out of 0";
         this.displayTable(null);
      } else {
         document.querySelector("#scheduleIndex").innerHTML = `Schedule ${this.tableIndex+1} out of ${this.options.length}`;
         
         let id = this.encodeTableIDFromCRNs(this.options[this.tableIndex]);
         let table = this.createTableFromCRNs(this.options[this.tableIndex]);
         this.displayTable(table);
      }
   }
   
   encodeTableID(table) {
      if(!table) return "";
      
      let id = "";
      for(let desc of table.descriptors) {
         id += "_" + desc.crn;
      }
      return id.substring(1);
   }
   encodeTableIDFromCRNs(CRNs) {
      let id = "";
      for(let crn of CRNs) {
         id += "_" + crn;
      }
      return id.substring(1);
   }
   createTableFromCRNs(CRNs) {
      let descriptors = [];
      for(let i = 0; i < CRNs.length; i++) {
         descriptors.push({
            crn: parseInt(CRNs[i]),
            color: this.colors[i]
         });
      }
      
      return {
         name: "",
         descriptors: descriptors
      }
   }
   async createTable(table) {
      let id = this.encodeTableID(table);
      
      let htmlTable = htmlToElement(`
         <div id="table-${id}" class="display-table" style="display: none">
            <div></div>
            <div class="table-header">Monday</div>
            <div class="table-header">Tuesday</div>
            <div class="table-header">Wednesday</div>
            <div class="table-header">Thursday</div>
            <div class="table-header">Friday</div>
            
            <div class="table-header">8am</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">9am</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">10am</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">11am</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">12pm</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">1pm</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">2pm</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">3pm</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div class="table-header">4pm</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>`
      );
      
      let descriptors = table.descriptors;
      let cells = htmlTable.querySelectorAll("div");
      for(let i = 0; i < descriptors.length; i++) {
         let desc = descriptors[i];
         let data = this.courses[desc.crn];
         let days = data.days.split(";");
         let times = data.times.split(";");
         let locations = data.locations.split(";");
         for(let j = 0; j < days.length; j++) {
            for(let k = 0; k < days[j].length; k++) {
               let time = times[j].split("-");
               this.addCell(cells, days[j][k], time[0], time[1], i, data.course, data.professor, data.section, locations[j]);
            }
         }
      }
      
      document.querySelector("#displayMain").appendChild(htmlTable, document.querySelector("#displayHeader"));
   }
   
   remakeTables() {
      this.createOptionsFromFilters()
      .then(options => {
         this.options = options;
         
         this.tableIndex = 0;
         document.querySelector("#scheduleIndex").innerHTML = `Schedule ${this.tableIndex+1} out of ${this.options.length}`;
         
         let circles = document.querySelectorAll(".circle");
         circles[0].onclick = (event) => {
            if(this.currPage == 0) {
               this.tableIndex = (this.tableIndex+this.options.length-1) % this.options.length;
               this.switchToTable(this.tableIndex);
            } else if(this.currPage == 1) {
               let favoriteCount = Object.keys(this.favorites).length;
               this.favoriteIndex = (this.favoriteIndex+favoriteCount-1) % favoriteCount;
               document.querySelectorAll(".menu-sublist-item")[this.favoriteIndex].click();
            }
         };
         circles[1].onclick = (event) => {
            if(this.currPage == 0) {
               this.tableIndex = (this.tableIndex+1) % this.options.length;
               this.switchToTable(this.tableIndex);
            } else if(this.currPage == 1) {
               let favoriteCount = Object.keys(this.favorites).length;
               this.favoriteIndex = (this.favoriteIndex+1) % favoriteCount;
               document.querySelectorAll(".menu-sublist-item")[this.favoriteIndex].click();
            }
         };
         
         this.switchToTable(this.tableIndex);
      });
   }
   
   async displayTable(table) {
      let id = this.encodeTableID(table);
      
      if(this.currTable) {
         let prevId = this.encodeTableID(this.currTable);
         if(id != prevId) {
            document.querySelector(`#table-${prevId}`).style.display = "none";
         }
      } else {
         document.querySelector(`#table-`).style.display = "none";
      }
      
      let currTable = document.querySelector(`#table-${id}`)
      if(!currTable) {
         await this.createTable(table);
         currTable = document.querySelector(`#table-${id}`)
      }
      currTable.style.display = null;
      
      document.querySelector("#displayKeyEntryList").remove();
      let keyEntryList = htmlToElement(`<div id="displayKeyEntryList"></div>`);
      if(table) {
         let descriptors = table.descriptors;
         let keys = document.querySelectorAll(".display-key-entry");
         for(let i = 0; i < descriptors.length; i++) {
            let desc = descriptors[i];
            let data = this.courses[desc.crn];
            let keyEntry = htmlToElement(`
               <div class="display-key-entry">
                  <div class="display-key-color" style="background-color: var(--course-color-${i})"></div>
                  <span>${data.course} - ${data.section}:<br>
                        CRN ${desc.crn}<br>
                        ${data.name}<br>
                        Prof. ${this.professors[data.professor] || data.professor}
                  </span>
               </div>`
            );
            keyEntryList.appendChild(keyEntry);
         }
      }
      document.querySelector("#keyPage").appendChild(keyEntryList);
      
      this.currTable = table;
      
      this.updateDisplay();
   }
   updateDisplay() {
      let termYear = this.currTerm.substring(0, this.currTerm.length-1);
      let termIndex = parseInt(this.currTerm.charAt(this.currTerm.length-1));
      let termSeason = this.termNames[termIndex];
      document.querySelector("#termSelectorLabel").innerHTML = `Term: ${termSeason} ${termYear}`;
      
      let id = this.encodeTableID(this.currTable);
      if(this.favorites[id]) {
         document.querySelector("#favoriteStar").src = "images/star_gold.svg";
      } else {
         document.querySelector("#favoriteStar").src = "images/star_gray.svg";
      }
   }
   
   addCell(cells, dayName, timeStart, timeEnd, color, course, professor, section, location) {
      let days = {M:0,T:1,W:2,R:3,F:4};
      let day = days[dayName];
      
      timeStart = (parseInt(timeStart,10)+5) % 12;
      timeEnd = (parseInt(timeEnd,10)+5) % 12;
      
      let index = (timeStart)*6 + day + 1;
      let cell = cells[index];
      cell.style.backgroundColor = `var(--course-color-${color})`;
      cell.innerHTML = `${course.replace(" ", "")}-${section} (${location})<br>
                        Prof. ${professor}`;
      
      cell.style.color = `var(--course-text-${color})`;
      
      let deltaTime = timeEnd - timeStart;
      if(deltaTime > 1) {
         cell.style.gridColumn = `${day+2}`;
         cell.style.gridRow = `${timeStart+1} / ${timeEnd+1}`;
         for(let i = 1; i < deltaTime; i++) {
            cells[(timeStart+i)*6 + day + 1].style.display = "none";
         }
      }
   }
   
   
   
   //
   // Term Selector
   //
   hideTermSelector() {
      document.querySelector("#termDropdownWrapper").style.maxHeight = null;
      document.querySelector("#termDropdown").style.transform = null;
      this.expandedTermDropdown = false;
   }
   
   
   
   //
   // Menu
   //
   showMenu() {
      let menuPage = document.querySelector("#menuPage");
      menuPage.style.left = 0;
      document.querySelector("#menuIcon").src = "images/menu_red.svg";
      this.menuIsOpen = true;
   }
   hideMenu() {
      let page = document.querySelector("#menuPage");
      page.style.left = "-300px";
      document.querySelector("#menuIcon").src = "images/menu_white.svg";
      this.menuIsOpen = false;
   }
   initMenu() {
      let menuIcon = document.querySelector("#menuIcon");
      menuIcon.onclick = (event) => {
         if(this.menuIsOpen)
            this.hideMenu();
         else
            this.showMenu();
      };
      
      let menuLists = document.querySelectorAll(".menu-list-item");
      
      menuLists[0].onclick = (event) => {
         if(this.filtersAreOpen) this.showFilters();
         document.querySelectorAll(".menu-list-active").forEach((item) => {
            item.classList.remove("menu-list-active");
         });
         document.querySelectorAll(".menu-sublist-active").forEach((item) => {
            item.classList.remove("menu-sublist-active");
         });
         document.querySelectorAll(".menu-list-item")[0].classList.add("menu-list-active");
         
         document.querySelector("#filter").style.visibility = null;
         document.querySelector("#tableNameInput").style.display = "none";
         document.querySelector("#termSelector").style.display = "initial";
         document.querySelector("#favoritesLabel").style.display = "none";
         document.querySelector("#scheduleIndex").innerHTML = `Schedule ${this.tableIndex+1} out of ${this.options.length}`;
         
         this.currPage = 0;
         this.switchToTable(this.tableIndex);
      }
      menuLists[1].onclick = (event) => {
         let expanded = document.querySelector(".menu-sublist-expanded");
         if(expanded) {
            expanded.classList.remove("menu-sublist-expanded");
            document.querySelector(".with-expanded-sublist").classList.remove("with-expanded-sublist");
         } else {
            document.querySelector(".menu-sublist").classList.add("menu-sublist-expanded");
            document.querySelectorAll(".menu-list-item")[1].classList.add("with-expanded-sublist");
         }
      };
   }
   switchToFavoritePage(table) {
      if(this.currPage == 0) {
         this.hideFilters();
         document.querySelector("#filter").style.visibility = "hidden";
         document.querySelector("#termSelector").style.display = "none";
         document.querySelector("#favoritesLabel").style.display = "initial";
         document.querySelector("#tableNameInput").style.display = "initial";
         document.querySelector("#scheduleIndex").style.innerHTML = "";
         this.currPage = 1;
      }
      
      document.querySelector("#tableNameInput").value = table.name;
      document.querySelector("#scheduleIndex").innerHTML = `${this.favoriteIndex+1} out of ${Object.keys(this.favorites).length}`;
      
      this.displayTable(table);
   }
   
   
   
   //
   // Filters
   //
   async createOptionsFromFilters() {
      let dayMap = {M:0,T:1,W:2,R:3,F:4};
      let options = [];
      
      let courses = this.filterData.courses.map(x => x);
      let sections = JSON.parse(JSON.stringify(this.filterData.sections));
      
      for(let i = 0; i < courses.length; i++) {
         let course  = courses[i];
         for(let j = 0; j < sections[course].length; j++) {
            let shouldBreak = false;
            let section = sections[course][j];
            let crn = this.courseToCrn[course + "-" + section];
            let data = this.courses[crn];
            if(!data) {
               sections[course].splice(j, 1);
               j--;
               continue;
            }
            
            if(!this.filterData.professors[data.course.replace(" ", "")].includes(data.professor)) {
               sections[course].splice(j, 1);
               j--
               continue;
            }
            
            let timeses = data.times.split(";");
            for(let _times of timeses) {
               let strTimes = _times.split("-");
               let times = [parseInt(strTimes[0]), parseInt(strTimes[1])];
               for(let k = (times[0]+4)%12; k < (times[1]+4)%12; k++) {
                  if(this.filterData.times.indexOf(((k+7)%12)+1) == -1) {
                     sections[course].splice(j, 1);
                     shouldBreak = true;
                     j--;
                     break;
                  }
               }
               if(shouldBreak) break;
            }
         }
         if(sections[course].length == 0) {
            delete sections[course];
            courses.splice(i, 1);
            i--;
         }
      }
      
      if(courses.length == 0) return options;
      
      let max = 1;
      for(let i = 0; i < courses.length; i++) {
         let course = courses[i];
         max *= sections[course].length;
      }
      
      for(let i = 0; i < max; i++) {
         let optionIsInvalid = false;
         let timesPerDay = [[],[],[],[],[]];
         let option = [];
         let thresh = 1;
         
         for(let j = 0; j < courses.length; j++) {
            let course  = courses[j];
            let sectionCount = sections[course].length;
            if(thresh == 0) return [];
            let section = sections[course][Math.floor(i/thresh) % sectionCount];
            
            let crn = this.courseToCrn[course + "-" + section];
            if(!crn) {
               optionIsInvalid = true;
               break;
            }
            
            let data = this.courses[crn];
            
            let dayses = data.days.split(";");
            let timeses = data.times.split(";");
            for(let k = 0; k < dayses.length; k++) {
               let days = dayses[k];
               let times = timeses[k].split("-");
               for(let m = 0; m < days.length; m++) {
                  let dayIndex = dayMap[days.charAt(m)];
                  for(let ts of timesPerDay[dayIndex]) {
                     if(!((parseInt(times[1])+4)%12 <= (parseInt(ts[0])+4)%12 ||
                          (parseInt(times[0])+4)%12 >= (parseInt(ts[1])+4)%12)) {
                        optionIsInvalid = true;
                        break;
                     }
                  }
                  if(optionIsInvalid) break;
                  timesPerDay[dayIndex].push(times);
               }
               if(optionIsInvalid) break;
            }
            if(optionIsInvalid) break;
            
            option.push(crn);
            
            thresh *= sectionCount;
         }
         if(optionIsInvalid) continue;
         
         options.push(option);
      }
      
      return options;
   }
   showFilters() {
      let filterPage = document.querySelector("#filterPage");
      let filterPageContent = document.querySelector("#filterPageContent");
      if(this.overlayFilter) {
         this.hideFilters();
         filterPage.style.position = "fixed";
         filterPage.style.height = `${window.innerHeight-50}px`;
      } else {
         filterPage.style.position = "static";
         filterPage.style.height = null;
      }
      
      filterPage.style.width = "min(430px, 100vw)";
      filterPageContent.style.right = 0;
      
      this.filtersAreOpen = true;
   }
   hideFilters() {
      let filterPage = document.querySelector("#filterPage");
      let filterPageContent = document.querySelector("#filterPageContent");
      filterPage.style.width = null;
      filterPageContent.style.right = null;
      
      this.filtersAreOpen = false;
   }
   initFilters() {
      let filter = document.querySelector("#filter");
      filter.onclick = (event) => {
         if(this.filtersAreOpen)
            this.hideFilters();
         else
            this.showFilters();
      };
      
      let filterSections = document.querySelectorAll(".filter-section");
      let filterContents = document.querySelectorAll(".filter-content");
      for(let i = 0; i < filterSections.length; i++) {
         let section = filterSections[i];
         let content = filterContents[i];
         section.onclick = (event) => {
            if(this.expandedFilter != null) {
               let prevContent = filterContents[this.expandedFilter];
               let prevSection = filterSections[this.expandedFilter];
               
               prevContent.classList.remove("filter-content-expanded");
               prevSection.querySelector(".filter-arrow").src = "images/expand_gray.svg";
            }
            if(this.expandedFilter != i) {
               content.classList.add("filter-content-expanded");
               section.querySelector(".filter-arrow").src = "images/expand_red.svg";
            }
            if(this.expandedFilter == i) {
               this.expandedFilter = null;
            } else {
               this.expandedFilter = i;
            }
         };
         
         if(i == 0) {
            let addCourseButton = htmlToElement(`
               <div class="course" id="addCourse">
                  <img id="addImage" src="images/plus.svg" alt="add course">
                  <select id="addCourseSelector" name="coursesSelector">
                     &nbsp;
                  </select>
               </div>
            `);
            
            document.querySelector("#addCourse").remove();
            
            content.appendChild(addCourseButton);
            
            document.querySelector("#addImage").onclick = (event) => {
               let selector = document.querySelector("#addCourseSelector");
               
               let dropCourseButton = htmlToElement(`
                  <div class="course">
                     <img id="dropImage" src="images/drop.svg" alt="drop course">
                     <p>${selector.value}</p>
                  </div>
               `);
               
               content.insertBefore(dropCourseButton, event.target);
               
               // Reset and insert something just prior
            };
         }
      }
   }
   
   
   
   //
   // Favorites
   //
   initFavorites() {
      let favoriteStar = document.querySelector("#favoriteStar");
      favoriteStar.onclick = (event) => {
         let id = this.encodeTableID(this.currTable);
         if(this.favorites[id]) {
            favoriteStar.src = "images/star_gray.svg";
            delete this.favorites[id];
         } else {
            favoriteStar.src = "images/star_gold.svg";
            let id = this.encodeTableID(this.currTable);
            this.favorites[id] = this.currTable;
         }
         this.currUser.ref.update("favorites", JSON.stringify(this.favorites));
      };
   }
   
   
   
   //
   // Firebase
   //
   startListeningToUsers(callback) {
      this.unsubscribeFromUsers = this.usersCol.onSnapshot((snapshot) => {
         for(let doc of snapshot.docs) {
            if(doc.id == this.uid) {
               this.currUser = doc;
            }
         }
         if(this.currUser) {
            callback();
         } else {
            console.log(this.uid);
            let doc = this.usersCol.doc(this.uid);
            doc.set({
               favorites: "{}"
            });
            doc.get().then(ref => {
               this.currUser = ref;
               callback();
            });
         }
      });
   }
   startListeningToCourses() {
      this.unsubscribeFromCourses = this.coursesCol.onSnapshot((snapshot) => {
         let latest = 0;
         let wrapper = document.querySelector("#termDropdownWrapper");
         document.querySelector("#termDropdown").remove();
         let termDropdown = htmlToElement('<div id="termDropdown"></div>');
         for(let i = snapshot.docs.length-1; i >= 0; i--) {
            let doc = snapshot.docs[i];
            this.termMap[doc.id] = doc;
            let season = this.termNames[parseInt(doc.id.charAt(2))];
            let year = doc.id.substring(0,2);
            let entry = htmlToElement(`<div class="term-dropdown-entry">${season} ${year}</div>`);
            termDropdown.appendChild(entry);
            
            if(latest < doc.id) latest = doc.id;
         }
         
         wrapper.appendChild(termDropdown);
         
         this.currTerm = latest;
         this.updateTerm();
      });
   }
   loadTermData(termName) {
      let data = this.termMap[termName].data().data;
      this.courses = JSON.parse(data);
      for(let [crn, courseData] of Object.entries(this.courses)) {
         let name = courseData.course.replace(" ", "") + "-" + courseData.section;
         this.courseToCrn[name] = crn;
      }
   }
};

rhit.FbAuthManager = class {
	constructor() {   
		this._user = null; }
	beginListening(changeListener) {
		firebase.auth().onAuthStateChanged((user) => {
			this._user = user;
			changeListener();
		  });
	}
	signIn() { 
		Rosefire.signIn("83194cff-bc0f-403e-9dd5-9200fee72d93", (err, rfUser) => {
			if(err) {
				console.log("Rosefire error! ", err);
				return;
			}
			console.log("Rosefire success! ", rfUser);
			firebase.auth().signInWithCustomToken(rfUser.token).catch(function(error) {
				if (error.code === 'auth/invalid-custom-token') {
				  alert('The token you provided is not valid.');
				} else {
					console.log("Custom auth error", error.code, error.message);;
				}
			  });
		});
	}

	signOut() {	
		firebase.auth().signOut().catch((error) => {
         console.log("sign out error", error);
		}); 
	}
	get isSignedIn() {   
		return !!this._user; 
	}
	get uid() {   
		return this._user.uid; 
	}
}

rhit.checkForRedirects = function () {
	if (document.querySelector("#loginPage") && rhit.FbAuthManager.isSignedIn) {
		window.location.href = "/schedule.html";
	}
   if (document.querySelector("#loginPage") && !rhit.FbAuthManager.isSignedIn) {
		document.querySelector("#rosefireButton").onclick = (event) => {
			rhit.FbAuthManager.signIn();
		}
	}
	if (!document.querySelector("#loginPage") && !rhit.FbAuthManager.isSignedIn) {
		window.location.href = "/";
	}
   if(document.querySelector("#schedulePage") && rhit.FbAuthManager.isSignedIn) {
      // parseListings();
      rhit.display = new rhit.Display(rhit.FbAuthManager.uid);
   }}

rhit.main = function() {
   rhit.FbAuthManager = new rhit.FbAuthManager();
   rhit.FbAuthManager.beginListening(() => {
   	rhit.checkForRedirects();
   });
};


rhit.main();



















async function parseListings() {
   let colRef = firebase.firestore().collection("courses");
   
   let professors = [];
   
   let terms = [
      "221",
      "222"
   ];
   let depts = [
      "bbe",
      "ce",
      "che",
      "chem",
      "csse",
      "ece",
      "emgt",
      "engd",
      "hssa",
      "ma",
      "me",
      "phoe"
   ];
   
   for(let term of terms) {
      let termData = {};
      for(let dept of depts) {
         await parseListing(`data/${term}/${dept}.html`, termData, professors);
      }
      colRef.doc(term).set({data: JSON.stringify(termData)});
   }
   
   for(let added in rhit.professors) {
      let index = professors.indexOf(added);
      if(index != -1) {
         professors.splice(index, 1);
      }
   }
   
   console.log("Usernames without known names: " + professors);
}

async function parseListing(fileName, datas, professors) {
   await fetch(fileName)
   .then(response => response.text())
   .then(data => {
      let rows = data.split(/<[tT][rR]>/);
      rows.shift();
      rows.shift();
      rows.shift();
      rows.shift();
      rows.shift();
      for(let row of rows) {
         if(row.toLowerCase().indexOf("term grid") != -1) return;
         let itemIsInvalid = false;
         
         let values = row.split(/<\/[tT][dD]>/);
         
         let cs = values[0].split(">").at(-1).split("-");
         let course = cs[0].toUpperCase();
         course = course.substring(0,course.length-3) + " " + course.substring(course.length-3);
         let section = cs[1];
         
         let CRN = values[1].split(">").at(-1);
         
         let name = values[2].split(">").at(-1);
         if(name.toLowerCase().indexOf("cancelled") != -1 || name.toLowerCase().indexOf("unavailable") != -1)
            continue;
         
         let prof = values[3].split(">")[2].split("<")[0];
         if(!professors.includes(prof)) {
            professors.push(prof);
         }
         
         let schedule = values[7].split(">").at(-1).split(";");
         if(schedule[0].length == 0) continue;
         
         let days = "";
         let times = "";
         let locations = "";
         for(let item of schedule) {
            if(item.toLowerCase().includes("tba")) {
               itemIsInvalid = true;
               break;
            }
            
            times += ";";
            let parts = item.split("/");
            let timeParts = parts[1].split("-");
            if(timeParts.length == 1) {
               let num = parseInt(timeParts[0].split(":")[0]);
               times += num + "-" + (num+1);
            } else {
               let num1 = parseInt(timeParts[0].split(":")[0]);
               let num2 = parseInt(timeParts[1].split(":")[0])+1;
               times += num1 + "-" + num2;
            }
            
            days += ";" + parts[0].trim();
            locations += ";" + parts[2];
         }
         
         if(itemIsInvalid) continue;
         
         days = days.substring(1);
         times = times.substring(1);
         locations = locations.substring(1);
         
         datas[CRN] = {
            course:    course,
            section:   section,
            name:      name,
            professor: prof,
            days:      days,
            times:     times,
            locations: locations
         };
      }
   });
}