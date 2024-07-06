import {Display} from './UI.module.js'
import {GetDetails} from './details.module.js'
   export class GetGames{
       constructor(){
             let that = this;
            this.options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '367c6a66c3msh2fa5e8390db2c71p183662jsn89bf9e9130ad',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            let links = Array.from(document.querySelectorAll(".nav-link"))
            for (let i = 0; i <links.length; i++) {
                links[i].addEventListener("click", function(e){
                    for (const link of links) {
                        link.classList.remove("active");
                    }
                    e.target.classList.add("active");
                     that.startGames(e.target.id);
                });
            }
        }
        async startGames(cat = "mmorpg"){
            let api = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
            let data = await this.getData(api);
            let games = new Display(data);
            games.displayGames();
            let cards = document.querySelectorAll(".card");
            let sectionDetails = document.getElementById("details");
            let sectionGames = document.getElementById("games");
            for (const card of cards) {
                card.addEventListener("click",function(e){
                    let cardId = new GetDetails(e.currentTarget.id);
                    cardId.startDetails();
                    sectionDetails.classList.remove("d-none");
                    sectionGames.classList.add("d-none");
                })
                
            }
        }
        async getData(api){
            let myHttp = await fetch(api,this.options);
            let res = await myHttp.json();
        return res
        }
    }

