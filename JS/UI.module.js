
export class Display{
	constructor(data){
	this.data = data;
	}
	displayGames(){
		let container = "";
		let data = this.data
		for (let i = 0; i< data.length; i++) {
			container += `<div class="col-lg-3 col-md-4 col-sm-6">
                    <div id="${data[i].id}" class="card position-relative bg-transparent p-0 ">
                        <div class="card-container p-2">
                            <img src="${data[i].thumbnail}" class="card-img-top w-100 h-50" alt="...">
                            <div class="card-body text-white text-center">
                                <div class=" d-flex justify-content-between">
                                    <h6 class="card-title">${data[i].title}</h6>
                                    <h6> <span class="badge free p-2">Free</span></h6>
                                </div>
                                <p class="card-text">${data[i].short_description.split(" ").splice(0,10).join(" ")}</p>
                        </div>
                    </div>
                    <footer class=" position-absolute bottom-0 end-0 start-0 border-top border-black d-flex align-items-center justify-content-between px-2 py-1"><h6>
                        <span class="badge text-bg-secondary">${data[i].genre}</span></h6>
                        <span class="badge text-bg-secondary">${data[i].platform}</span></h6>
                    </footer>
                      </div>
            </div>`
			
		}
		document.getElementById("gameCard").innerHTML=container;
	}
	displayDetails(){
		let data = this.data;
		let container = `<div class="container text-white p-4 position-relative">
            <span class="closeIcon position-absolute"><i class="fa-solid fa-xmark close"></i></span>
            <h2>Details Game</h2>
            <div class="d-flex mt-5">
                <div class=" w-25 me-5">
                    <img src="${data.thumbnail}" class="w-100" alt="">
                </div>
                <div class=" w-75">
                    <h3>title : ${data.title} </h3>
                    <div class="d-flex">
                        <h4 class="me-2">Category :</h4>
                        <h4><span class="badge bg-info text-black">${data.genre}</span></h4>
                   </div>
                    <div class="d-flex">
                        <h4 class="me-2">Platform :</h4>
                        <h4><span class="badge bg-info text-black">${data.platform}</span></h4>
                   </div>
                    <div class="d-flex">
                         <h4 class="me-2">Status :</h4>
                         <h4><span class="badge bg-info text-black">Live</span></h4>
                    </div>
                    <p class="w-100">${data.description}</p>
					<a href="${data.game_url}" target="_blank">
                    <button type="button" class="btn btn-outline-warning">Show Game</button>
					</a>
                </div>
            </div>
        </div>`
		document.getElementById("details").innerHTML = container
	}
}

