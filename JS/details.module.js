import {Display} from './UI.module.js'
   export class GetDetails{
       constructor(...id){
             this.card = id;
             this.options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '367c6a66c3msh2fa5e8390db2c71p183662jsn89bf9e9130ad',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            
        }
        async startDetails(){
            let api = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${String(this.card)}`;
            let data = await this.getData(api);
            let details = new Display(data);
            details.displayDetails();
            let closeIcon = document.querySelector(".closeIcon")
            let sectionDetails = document.getElementById("details")
            let sectionGames = document.getElementById("games")
            closeIcon.addEventListener("click",function () {
                sectionDetails.classList.add("d-none");
                sectionGames.classList.remove("d-none");
            })
        }
       async getData(api){
        let myHttp = await fetch(api,this.options);
        let res = await myHttp.json();
        return res
        }
    }